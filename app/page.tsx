"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  CircleAlert,
  ShieldCheck,
  Sparkles,
  X
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
              <p>Three issues should be reviewed before sharing SplitMate.</p>
            </div>

            <div className="score">
              <strong>78</strong>
              <span>/ 100</span>
              <small>DEMO READINESS</small>
            </div>
          </div>

          <div className="grid">
            <div className="checks">
              {["Core flows", "Reliability"].map((group) => (
                <div className="checkGroup" key={group}>
                  <h3>{group}</h3>
                  {checks.filter((c) => c.group === group).map((c) => (
                    <div className="check" key={c.name}>
                      <div className={`status ${c.status}`}>
                        {c.status === "pass" ? (
                          <Check size={15} />
                        ) : c.status === "warn" ? (
                          <CircleAlert size={15} />
                        ) : (
                          <X size={15} />
                        )}
                      </div>

                      <div>
                        <b>{c.name}</b>
                        <p>{c.note}</p>
                      </div>

                      <span className={`label ${c.status}`}>
                        {c.status === "pass" ? "Passed" : c.status === "warn" ? "Review" : "Issue"}
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
                  <b>3 checks passed</b>
                  <small>Core behavior looks healthy</small>
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
                  <b>1 issue found</b>
                  <small>Payment failure needs attention</small>
                </span>
              </div>

              <div className="next">
                <b>Next in the prototype</b>
                <p>
                  Open an issue, understand why it matters, then generate a structured repair
                  instruction for the coding agent.
                </p>
              </div>
            </aside>
          </div>
        </section>
      )}
    </main>
  );
}
