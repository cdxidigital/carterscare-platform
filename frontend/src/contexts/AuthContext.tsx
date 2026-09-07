import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { DEMO_ACCOUNTS, DEMO_PASSWORD, type DemoRole } from "./DemoContext";

type AppRole = "admin" | "manager" | "member";

export interface ClientPortalSession {
  client_id: string;
  username: string;
  display_name: string;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  role: AppRole | null;
  isAdmin: boolean;
  isManager: boolean;
  isMember: boolean;
  isClient: boolean;
  isDemoMode: boolean;
  demoRole: DemoRole | null;
  clientPortalSession: ClientPortalSession | null;
  signIn: (email: string, password: string) => Promise<string>;
  signInClientPortal: (username: string, accessCode: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function normalizeRole(raw: unknown): AppRole {
  if (raw === "admin") return "admin";
  if (raw === "manager" || raw === "moderator") return "manager";
  return "member";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<AppRole | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoRole, setDemoRole] = useState<DemoRole | null>(null);
  const [clientPortalSession, setClientPortalSession] = useState<ClientPortalSession | null>(null);
  const resolvedRef = useRef(false);

  const fetchRole = async (userId: string) => {
    try {
      const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", userId).single();
      if (!error && data) {
        setRole(normalizeRole(data.role));
        return;
      }
      const { data: staffData } = await supabase.from("staff").select("role").eq("user_id", userId).single();
      setRole(normalizeRole(staffData?.role));
    } catch {
      setRole("member");
    }
  };

  useEffect(() => {
    const savedDemoMode = localStorage.getItem("demo_mode");
    const savedDemoUser = localStorage.getItem("demo_user");
    if (savedDemoMode === "true" && savedDemoUser) {
      try {
        const demoUser = JSON.parse(savedDemoUser);
        setIsDemoMode(true);
        setDemoRole(demoUser.role);
        setRole(normalizeRole(demoUser.role));
        setLoading(false);
        resolvedRef.current = true;
        return;
      } catch {
        localStorage.removeItem("demo_mode");
        localStorage.removeItem("demo_user");
      }
    }

    const savedClientSession = localStorage.getItem("client_portal_session");
    if (savedClientSession) {
      try {
        setClientPortalSession(JSON.parse(savedClientSession));
        setLoading(false);
        resolvedRef.current = true;
        return;
      } catch {
        localStorage.removeItem("client_portal_session");
      }
    }
  }, []);

  useEffect(() => {
    if (resolvedRef.current) return;
    let mounted = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      if (!mounted) return;
      setSession(nextSession);
      if (nextSession?.user) await fetchRole(nextSession.user.id);
      else setRole(null);
      if (mounted) setLoading(false);
    });
    supabase.auth.getSession().then(async ({ data: { session: nextSession } }) => {
      if (!mounted) return;
      setSession(nextSession);
      if (nextSession?.user) await fetchRole(nextSession.user.id);
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; subscription.unsubscribe(); };
  }, []);

  const signIn = async (email: string, password: string): Promise<string> => {
    const demoAccount = DEMO_ACCOUNTS[email.toLowerCase()];
    if (demoAccount && password === DEMO_PASSWORD) {
      setIsDemoMode(true);
      setDemoRole(demoAccount.role);
      setRole(normalizeRole(demoAccount.role));
      localStorage.setItem("demo_mode", "true");
      localStorage.setItem("demo_user", JSON.stringify(demoAccount));
      if (demoAccount.role === "client") return "/client-portal";
      return "/";
    }
    const { data: authData, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (authData.user) {
      const { data: roleData } = await supabase.from("user_roles").select("role").eq("user_id", authData.user.id).single();
      if (roleData) setRole(normalizeRole(roleData.role));
    }
    return "/";
  };

  const signInClientPortal = async (username: string, accessCode: string): Promise<void> => {
    const demoUsername = "demo.customer";
    const demoCode = "123456";
    if (username.toLowerCase().trim() === demoUsername && accessCode.trim() === demoCode) {
      const portalSession = { client_id: "demo-client", username: demoUsername, display_name: "Demo Customer" };
      setClientPortalSession(portalSession);
      localStorage.setItem("client_portal_session", JSON.stringify(portalSession));
      return;
    }
    const { data, error } = await supabase.from("clients").select("id, first_name, last_name, email").eq("email", username.toLowerCase().trim()).single();
    if (error || !data || !accessCode.trim()) throw new Error("Invalid portal credentials");
    const portalSession = { client_id: data.id, username: data.email ?? username, display_name: `${data.first_name} ${data.last_name}` };
    setClientPortalSession(portalSession);
    localStorage.setItem("client_portal_session", JSON.stringify(portalSession));
  };

  const signOut = async () => {
    if (clientPortalSession) {
      setClientPortalSession(null);
      localStorage.removeItem("client_portal_session");
      return;
    }
    if (isDemoMode) {
      setIsDemoMode(false);
      setDemoRole(null);
      setRole(null);
      localStorage.removeItem("demo_mode");
      localStorage.removeItem("demo_user");
      return;
    }
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const isAdmin = role === "admin";
  const isManager = role === "admin" || role === "manager";
  const isMember = role === "member";
  const isClient = !!clientPortalSession || demoRole === "client";

  const rawDemo = isDemoMode ? localStorage.getItem("demo_user") : null;
  const demoUser = rawDemo ? (() => { try { return JSON.parse(rawDemo); } catch { return null; } })() : null;
  const effectiveUser = isDemoMode && demoUser ? ({ id: demoUser.id, email: demoUser.email, user_metadata: { display_name: demoUser.display_name, role: demoUser.role } } as unknown as User) : session?.user ?? null;
  const effectiveSession = isDemoMode ? ({ user: effectiveUser } as Session) : session;

  return <AuthContext.Provider value={{ session: effectiveSession, user: effectiveUser, loading, role, isAdmin, isManager, isMember, isClient, isDemoMode, demoRole, clientPortalSession, signIn, signInClientPortal, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
