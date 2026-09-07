import { AppLayout } from "@/components/AppLayout";
import { useAuth } from "@/contexts/AuthContext";
import { PLATFORM_CONFIG } from "@/config/platform";
import { CalendarDays, CheckSquare, FileText, Users, WalletCards, TrendingUp, ArrowUpRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const modules = [
  { title: "People", value: "24", detail: "Active contacts & team", icon: Users, href: "/people" },
  { title: "Work", value: "18", detail: "Open jobs & projects", icon: CheckSquare, href: "/work" },
  { title: "Calendar", value: "7", detail: "Upcoming this week", icon: CalendarDays, href: "/calendar" },
  { title: "Finance", value: "$12.4k", detail: "Outstanding & upcoming", icon: WalletCards, href: "/finance" },
];

const activity = [
  ["New client enquiry received", "10 min ago"],
  ["Invoice #1048 marked paid", "42 min ago"],
  ["Project brief approved", "1 hr ago"],
  ["Team member completed onboarding", "3 hrs ago"],
];

export default function BusinessHubDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const name = user?.user_metadata?.display_name?.split(" ")[0] || user?.email?.split("@")[0] || "there";

  return (
    <AppLayout title="Overview">
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="rounded-3xl bg-foreground text-background p-6 md:p-8 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm opacity-70 mb-2">{PLATFORM_CONFIG.name}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Good day, {name}.</h2>
            <p className="mt-3 text-sm md:text-base opacity-75">Everything you need to keep the business moving, in one workspace.</p>
            <button onClick={() => navigate("/work/new")} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90">
              <Plus className="h-4 w-4" /> Create something
            </button>
          </div>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-background/10" />
          <div className="absolute right-8 -bottom-32 h-64 w-64 rounded-full border border-background/10" />
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {modules.map(({ title, value, detail, icon: Icon, href }) => (
            <button key={title} onClick={() => navigate(href)} className="text-left rounded-2xl bg-white border border-border/60 p-5 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center"><Icon className="h-5 w-5" /></div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              </div>
              <p className="mt-5 text-2xl font-bold">{value}</p>
              <p className="text-sm font-semibold mt-1">{title}</p>
              <p className="text-xs text-muted-foreground mt-1">{detail}</p>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
          <section className="rounded-2xl bg-white border border-border/60 p-5">
            <div className="flex items-center justify-between mb-5"><div><h3 className="font-semibold">Business activity</h3><p className="text-xs text-muted-foreground mt-1">Your latest activity across the workspace</p></div><TrendingUp className="h-5 w-5 text-muted-foreground" /></div>
            <div className="space-y-1">{activity.map(([text, time]) => <div key={text} className="flex items-center justify-between py-3 border-b last:border-0 border-border/50"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center"><FileText className="h-4 w-4" /></div><span className="text-sm">{text}</span></div><span className="text-xs text-muted-foreground">{time}</span></div>)}</div>
          </section>
          <section className="rounded-2xl bg-white border border-border/60 p-5">
            <h3 className="font-semibold">Quick actions</h3><p className="text-xs text-muted-foreground mt-1 mb-4">Jump straight into common tasks</p>
            <div className="grid gap-2">{[["Add person", "/people/new"], ["Create work", "/work/new"], ["Add appointment", "/calendar/new"], ["Create invoice", "/finance/invoices/new"]].map(([label, href]) => <button key={label} onClick={() => navigate(href)} className="flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 text-sm font-medium hover:bg-secondary transition-colors">{label}<ArrowUpRight className="h-4 w-4" /></button>)}</div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
