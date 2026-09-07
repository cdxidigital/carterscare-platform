import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps { children: React.ReactNode; adminOnly?: boolean; managerOnly?: boolean; }

export function ProtectedRoute({ children, adminOnly = false, managerOnly = false }: ProtectedRouteProps) {
  const { session, loading, isAdmin, isManager, role, isDemoMode, demoRole, clientPortalSession } = useAuth();
  if (loading || (session && role === null && !isDemoMode)) return <div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (clientPortalSession || (isDemoMode && demoRole === "client")) return <Navigate to="/client-portal" replace />;
  if (!session) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdmin) return <Navigate to="/" replace />;
  if (managerOnly && !isManager) return <Navigate to="/" replace />;
  return <>{children}</>;
}
