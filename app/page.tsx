"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  CircleAlert,
  ShieldCheck,
  Sparkles,
  X,
  Wrench,
  FileSearch,
  Bot,
  CheckCircle2
} from "lucide-react";

const checks = [
  {
    name: "Sign up",
    group: "Core flows",
    status: "pass",
    note: "Account creation flow is present and connected."
  },
  {
    name: "Sign in",
    group: "Core flows",
    status: "pass",
    note: "Returning users can authenticate successfully."
  },
  {
    name: "Checkout",
    group: "Core flows",
    status: "warn",
    note: "Checkout exists, but one edge case needs review."
  },
  {
    name: "Payment failure",
    group: "Reliability",
    status: "fail",
    note: "No clear recovery state is defined for a declined payment."
  },
  {
    name: "Empty states",
    group: "Reliability",
    status: "warn",
    note: "Some lists do not explain what users should do when no data exists."
  },
  {
    name: "Navigation",
    group: "Reliability",
    status: "pass",
    note: "Primary screens have reachable navigation paths."
  }
];

export default function Home() {
  const [step, setStep] = useState<1 | 2>(1);
  const [issueOpen, setIssueOpen] = useState(false);
  const [agentState, setAgentState] = useState<"idle" | "working" | "ready">("idle");
  const [repaired, setRepaired] = useState(false);
  const [rerunning, setRerunning] = useState(false);

  const openPaymentIssue = () => { setIssueOpen(true); setAgentState("idle"); };
  const fixWithAgent = () => { setAgentState("working"); window.setTimeout(() => setAgentState("ready"), 850); };

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
      <header>
        <div className="brand">
          <div className="mark">b</div>
          <span>Bloom <b>Preflight</b></span>
        </div>
        <span className="badge">Independent product exploration</span>
      </header>

      {step === 1 ? (
        <section className="workspace">
          <div className="copy">
            <p className="eyebrow"><Sparkles size={14} /> Generated app</p>
            <h1>Your app is built.<br />Is it ready?</h1>
            <p className="lede">
              Preflight checks the generated experience for important flows and reliability gaps
              before you decide to share it.
            </p>

            <div className="appmeta">
              <div><span>APP</span><strong>SplitMate</strong></div>
              <div><span>TYPE</span><strong>Shared expenses</strong></div>
              <div><span>BUILD</span><strong>#1842</strong></div>
            </div>

            <button className="primary" onClick={() => setStep(2)}>
              Run App Preflight <ArrowRight size={18} />
            </button>
            <p className="fine">
              Demo evaluation only. No Bloom APIs or private product data are used.
            </p>
          </div>

          <div className="phoneWrap">
            <div className="phone">
              <div className="notch" />
              <div className="phoneTop">
                <div className="splitLogo">S</div>
                <b>SplitMate</b>
                <span>•••</span>
              </div>

              <div className="balance">
                <small>YOUR BALANCE</small>
                <strong>$42.50</strong>
                <span>You owe overall</span>
              </div>

              <div className="phoneSection">
                <b>Your groups</b>
                <button>+</button>
              </div>

              <div className="group">
                <div className="avatar">🏖️</div>
                <div>
                  <b>Lagos Weekend</b>
                  <small>4 friends · 7 expenses</small>
                </div>
                <strong>$28.00</strong>
              </div>

              <div className="group">
                <div className="avatar">🏠</div>
                <div>
                  <b>Apartment</b>
                  <small>3 friends · 12 expenses</small>
                </div>
                <strong>$14.50</strong>
              </div>

              <button className="phoneBtn">Add expense</button>
            </div>
          </div>
        </section>
      ) : (
        <section className="results">
          <button className="back" onClick={() => setStep(1)}>
            <ChevronLeft size={17} /> Back to app
          </button>

          <div className="resultHead">
            <div>
              <p className="eyebrow"><ShieldCheck size={14} /> Preflight complete</p>
              <h1>App readiness</h1>
              <p>{repaired ? "The critical payment-recovery issue is verified. Two experience gaps still need review." : "Three issues should be reviewed before sharing SplitMate."}</p>
            </div>

            <div className="score">
              <strong>{repaired ? 92 : 78}</strong>
              <span>/ 100</span>
              <small>{repaired ? "VERIFIED AFTER REPAIR" : "DEMO READINESS"}</small>
            </div>
          </div>

          <div className="grid">
            <div className="checks">
              {["Core flows", "Reliability"].map((group) => (
                <div className="checkGroup" key={group}>
                  <h3>{group}</h3>
                  {checks.filter((c) => c.group === group).map((c) => (
                    <div className={`check ${c.name === "Payment failure" ? "clickable" : ""}`} key={c.name}
                      onClick={c.name === "Payment failure" ? openPaymentIssue : undefined}>
                      <div className={`status ${c.name === "Payment failure" && repaired ? "pass" : c.status}`}>
                        {c.name === "Payment failure" && repaired ? (
                          <Check size={15} />
                        ) : c.status === "pass" ? (
                          <Check size={15} />
                        ) : c.status === "warn" ? (
                          <CircleAlert size={15} />
                        ) : (
                          <X size={15} />
                        )}
                      </div>

                      <div>
                        <b>{c.name}</b>
                        <p>
                          {c.name === "Payment failure" && repaired
                            ? "Declined-payment recovery, retry, and alternative-method guidance are present in the simulated repaired build."
                            : c.note}
                        </p>
                      </div>

                      <span className={`label ${c.name === "Payment failure" && repaired ? "pass" : c.status}`}>
                        {c.name === "Payment failure" && repaired
                          ? "Verified"
                          : c.name === "Payment failure"
                            ? "Open issue"
                            : c.status === "pass"
                              ? "Passed"
                              : c.status === "warn"
                                ? "Review"
                                : "Issue"}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <aside>
              <p className="eyebrow">Preflight summary</p>
              <h2>Mostly ready.<br />Not blindly ready.</h2>

              <div className="summaryRow">
                <Check size={16} />
                <span>
                  <b>{repaired ? "4 checks passed" : "3 checks passed"}</b>
                  <small>{repaired ? "Repair verified in the simulated re-check" : "Core behavior looks healthy"}</small>
                </span>
              </div>

              <div className="summaryRow warnIcon">
                <CircleAlert size={16} />
                <span>
                  <b>2 need review</b>
                  <small>Potential experience gaps</small>
                </span>
              </div>

              <div className="summaryRow failIcon">
                <X size={16} />
                <span>
                  <b>{repaired ? "0 critical issues" : "1 issue found"}</b>
                  <small>{repaired ? "Payment recovery is now verified" : "Payment failure needs attention"}</small>
                </span>
              </div>

              <div className={`next ${repaired ? "verifiedNext" : ""}`}>
                <b>{repaired ? "Repair verified" : "Next in the prototype"}</b>
                <p>
                  {repaired
                    ? "The simulated repair passed the second Preflight check. Readiness moved from 78 to 92 while the remaining warnings stay visible."
                    : "Open an issue, understand why it matters, then generate a structured repair instruction for the coding agent."}
                </p>
              </div>
            </aside>
          </div>
        </section>
      )}
      {issueOpen && (
        <div className="issueOverlay" onClick={() => setIssueOpen(false)}>
          <section className="issueDrawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawerTop"><div><p className="eyebrow"><FileSearch size={14}/> Preflight issue</p><h2>Payment failure recovery is missing</h2></div><button className="closeBtn" onClick={() => setIssueOpen(false)}><X size={18}/></button></div>
            <div className="severity"><span>Reliability</span><b>{repaired ? "Verified after simulated repair" : "Needs attention before sharing"}</b></div>
            <div className="issueSection"><p className="sectionLabel">WHAT FAILED</p><p>The generated checkout covers a successful payment, but the demo evaluation found no clear recovery experience for a declined payment.</p></div>
            <div className="issueSection"><p className="sectionLabel">WHY IT MATTERS</p><p>A user whose payment is declined could be left without a clear explanation, retry path, or way to choose another payment method.</p></div>
            <div className="evidenceCard"><div className="evidenceHead"><CircleAlert size={16}/><b>Preflight evidence</b></div>
              <div className="evidenceLine"><span>Success state</span><strong><Check size={14}/> Found</strong></div>
              <div className="evidenceLine"><span>Declined state</span><strong className={repaired ? "" : "bad"}>{repaired ? <><Check size={14}/> Found</> : <><X size={14}/> Missing</>}</strong></div>
              <div className="evidenceLine"><span>Retry action</span><strong className={repaired ? "" : "bad"}>{repaired ? <><Check size={14}/> Found</> : <><X size={14}/> Missing</>}</strong></div>
              <div className="evidenceLine"><span>Alternative method guidance</span><strong className={repaired ? "" : "bad"}>{repaired ? <><Check size={14}/> Found</> : <><X size={14}/> Missing</>}</strong></div></div>
            <div className="repairCard"><div className="repairHead"><Wrench size={16}/><div><p className="sectionLabel">STRUCTURED REPAIR INSTRUCTION</p><b>Give the coding agent a narrow fix.</b></div></div>
              <div className="promptBox">Add a declined-payment state to checkout. Preserve the current successful-payment flow. When a payment is declined, show a clear error message, provide a retry action, and let the user choose another payment method. Do not change unrelated screens.</div>
              {agentState === "idle" && <button className="agentButton" onClick={fixWithAgent}><Bot size={17}/> Fix with Agent <ArrowRight size={17}/></button>}
              {agentState === "working" && <button className="agentButton working" disabled><span className="agentDot"/> Sending repair instruction…</button>}
              {agentState === "ready" && (
                <div className="agentResult">
                  <div className="agentResultTitle"><CheckCircle2 size={18}/> Repair instruction accepted</div>
                  <div><Check size={14}/> Add declined-payment state</div>
                  <div><Check size={14}/> Add retry action</div>
                  <div><Check size={14}/> Add alternative payment guidance</div>
                  <p>Demo only. No Bloom code or agent was contacted.</p>

                  {!repaired && (
                    <button className="rerunButton" onClick={rerunPreflight} disabled={rerunning}>
                      {rerunning ? (
                        <>
                          <span className="agentDot"/>
                          Re-running Preflight…
                        </>
                      ) : (
                        <>
                          <ShieldCheck size={16}/>
                          Re-run Preflight
                          <ArrowRight size={16}/>
                        </>
                      )}
                    </button>
                  )}

                  {repaired && (
                    <div className="verifiedRepair">
                      <CheckCircle2 size={16}/>
                      Verified in the repaired demo build
                    </div>
                  )}
                </div>
              )}
            </div>
            <p className="drawerFine">This interaction is simulated. It demonstrates a possible evaluation → explanation → repair handoff.</p>
          </section>
        </div>
      )}
    </main>
  );
}
