import type { Check } from "./types";

export const checks: Check[] = [
  {
    name: "Sign up",
    group: "Core flows",
    status: "pass",
    note: "Account creation flow is present and connected.",
  },
  {
    name: "Sign in",
    group: "Core flows",
    status: "pass",
    note: "Returning users can authenticate successfully.",
  },
  {
    name: "Checkout",
    group: "Core flows",
    status: "warn",
    note: "Checkout exists, but one edge case needs review.",
  },
  {
    name: "Payment failure",
    group: "Reliability",
    status: "fail",
    note: "No clear recovery state is defined for a declined payment.",
  },
  {
    name: "Empty states",
    group: "Reliability",
    status: "warn",
    note: "Some lists do not explain what users should do when no data exists.",
  },
  {
    name: "Navigation",
    group: "Reliability",
    status: "pass",
    note: "Primary screens have reachable navigation paths.",
  },
];
