import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  CircleAlert,
  FileSearch,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import type { AgentState } from "./types";

export function IssueDrawer({
  agentState,
  repaired,
  rerunning,
  onClose,
  onFix,
  onRerun,
}: {
  agentState: AgentState;
  repaired: boolean;
  rerunning: boolean;
  onClose: () => void;
  onFix: () => void;
  onRerun: () => void;
}) {
  return (
    <div className="issueOverlay" onClick={onClose}>
      <section
        className="issueDrawer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawerTop">
          <div>
            <p className="eyebrow">
              <FileSearch size={14} /> Preflight issue
            </p>
            <h2>Payment failure recovery is missing</h2>
          </div>
          <button className="closeBtn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="severity">
          <span>Reliability</span>
          <b>
            {repaired
              ? "Verified after simulated repair"
              : "Needs attention before sharing"}
          </b>
        </div>
        <div className="issueSection">
          <p className="sectionLabel">WHAT FAILED</p>
          <p>
            The generated checkout covers a successful payment, but the demo
            evaluation found no clear recovery experience for a declined
            payment.
          </p>
        </div>
        <div className="issueSection">
          <p className="sectionLabel">WHY IT MATTERS</p>
          <p>
            A user whose payment is declined could be left without a clear
            explanation, retry path, or way to choose another payment method.
          </p>
        </div>
        <div className="evidenceCard">
          <div className="evidenceHead">
            <CircleAlert size={16} />
            <b>Preflight evidence</b>
          </div>
          <EvidenceLine label="Success state" found />
          <EvidenceLine label="Declined state" found={repaired} />
          <EvidenceLine label="Retry action" found={repaired} />
          <EvidenceLine label="Alternative method guidance" found={repaired} />
        </div>
        <div className="repairCard">
          <div className="repairHead">
            <Wrench size={16} />
            <div>
              <p className="sectionLabel">STRUCTURED REPAIR INSTRUCTION</p>
              <b>Give the coding agent a narrow fix.</b>
            </div>
          </div>
          <div className="promptBox">
            Add a declined-payment state to checkout. Preserve the current
            successful-payment flow. When a payment is declined, show a clear
            error message, provide a retry action, and let the user choose
            another payment method. Do not change unrelated screens.
          </div>
          {agentState === "idle" && (
            <button className="agentButton" onClick={onFix}>
              <Bot size={17} /> Fix with Agent <ArrowRight size={17} />
            </button>
          )}
          {agentState === "working" && (
            <button className="agentButton working" disabled>
              <span className="agentDot" /> Sending repair instruction…
            </button>
          )}
          {agentState === "ready" && (
            <AgentResult
              repaired={repaired}
              rerunning={rerunning}
              onRerun={onRerun}
            />
          )}
        </div>
        <p className="drawerFine">
          Simulated interaction showing a possible evaluation → explanation →
          repair → verification loop.
        </p>
      </section>
    </div>
  );
}

function EvidenceLine({ label, found }: { label: string; found: boolean }) {
  return (
    <div className="evidenceLine">
      <span>{label}</span>
      <strong className={found ? "" : "bad"}>
        {found ? (
          <>
            <Check size={14} /> Found
          </>
        ) : (
          <>
            <X size={14} /> Missing
          </>
        )}
      </strong>
    </div>
  );
}

function AgentResult({
  repaired,
  rerunning,
  onRerun,
}: {
  repaired: boolean;
  rerunning: boolean;
  onRerun: () => void;
}) {
  return (
    <div className="agentResult">
      <div className="agentResultTitle">
        <CheckCircle2 size={18} /> Repair instruction accepted
      </div>
      <div>
        <Check size={14} /> Add declined-payment state
      </div>
      <div>
        <Check size={14} /> Add retry action
      </div>
      <div>
        <Check size={14} /> Add alternative payment guidance
      </div>
      <p>Demo only. No Bloom code or agent was contacted.</p>
      {!repaired && (
        <button className="rerunButton" onClick={onRerun} disabled={rerunning}>
          {rerunning ? (
            <>
              <span className="agentDot" /> Re-running Preflight…
            </>
          ) : (
            <>
              <ShieldCheck size={16} /> Re-run Preflight{" "}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      )}
      {repaired && (
        <div className="verifiedRepair">
          <CheckCircle2 size={16} /> Verified in the repaired demo build
        </div>
      )}
    </div>
  );
}
