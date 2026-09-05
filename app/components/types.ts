export type AgentState = "idle" | "working" | "ready";

export type Check = {
  name: string;
  group: string;
  status: "pass" | "warn" | "fail";
  note: string;
};
