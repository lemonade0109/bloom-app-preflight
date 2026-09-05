"use client";

import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroStep } from "./components/IntroStep";
import { IssueDrawer } from "./components/IssueDrawer";
import { ResultsStep } from "./components/ResultsStep";
import { ThesisBar } from "./components/ThesisBar";
import type { AgentState } from "./components/types";

export default function Home() {
  const [step, setStep] = useState<1 | 2>(1);
  const [issueOpen, setIssueOpen] = useState(false);
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [repaired, setRepaired] = useState(false);
  const [rerunning, setRerunning] = useState(false);

  const openPaymentIssue = () => {
    setIssueOpen(true);
    setAgentState("idle");
  };

  const fixWithAgent = () => {
    setAgentState("working");
    window.setTimeout(() => setAgentState("ready"), 850);
  };

  const rerunPreflight = () => {
    setRerunning(true);
    window.setTimeout(() => {
      setRepaired(true);
      setRerunning(false);
      setIssueOpen(false);
    }, 1050);
  };

  return (
    <main className="shell">
      <Header />
      <ThesisBar />
      {step === 1 ? (
        <IntroStep onRun={() => setStep(2)} />
      ) : (
        <ResultsStep
          repaired={repaired}
          onBack={() => setStep(1)}
          onOpenIssue={openPaymentIssue}
        />
      )}
      {issueOpen && (
        <IssueDrawer
          agentState={agentState}
          repaired={repaired}
          rerunning={rerunning}
          onClose={() => setIssueOpen(false)}
          onFix={fixWithAgent}
          onRerun={rerunPreflight}
        />
      )}
      <Footer />
    </main>
  );
}
