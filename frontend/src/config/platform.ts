export type BusinessVertical =
  | "general"
  | "professional-services"
  | "community-care"
  | "healthcare"
  | "hospitality"
  | "trades"
  | "creative"
  | "nonprofit";

/**
 * One product, many industries.
 * Keep the core navigation and data model vertical-neutral. Industry-specific
 * terminology belongs in a template, not in the application shell.
 */
export const PLATFORM_CONFIG = {
  name: "Business Hub",
  shortName: "Hub",
  tagline: "Run your business from one place.",
  vertical: "general" as BusinessVertical,
  supportEmail: "",
  logo: "/favicon.ico",
};

export const BUSINESS_TERMS = {
  people: "People",
  contacts: "Contacts",
  team: "Team",
  work: "Work",
  schedule: "Calendar",
  time: "Time & Attendance",
  money: "Finance",
  records: "Records",
  documents: "Documents",
  issues: "Issues",
  insights: "Insights",
};

export const INDUSTRY_TEMPLATES: Record<BusinessVertical, { label: string; description: string }> = {
  general: { label: "General Business", description: "A flexible workspace for any business." },
  "professional-services": { label: "Professional Services", description: "Clients, projects, retainers, time and billing." },
  "community-care": { label: "Community & Care", description: "People, schedules, records, compliance and billing." },
  healthcare: { label: "Healthcare", description: "Teams, appointments, records, compliance and finance." },
  hospitality: { label: "Hospitality", description: "Staff, shifts, bookings, operations and finance." },
  trades: { label: "Trades & Field Services", description: "Customers, jobs, schedules, staff and invoicing." },
  creative: { label: "Creative Business", description: "Clients, projects, production, people and billing." },
  nonprofit: { label: "Nonprofit", description: "People, programs, volunteers, records and reporting." },
};
