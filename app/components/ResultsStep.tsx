import { Check, ChevronLeft, CircleAlert, ShieldCheck, X } from "lucide-react";
import { checks } from "./data";
import type { Check as CheckData } from "./types";

function CheckItem({
  check,
  repaired,
  onOpenIssue,
}: {
  check: CheckData;
  repaired: boolean;
  onOpenIssue: () => void;
}) {
  const isPaymentFailure = check.name === "Payment failure";
  const isVerified = isPaymentFailure && repaired;
  const status = isVerified ? "pass" : check.status;
  const label = isVerified
    ? "Verified"
    : isPaymentFailure
      ? "Open issue"
      : check.status === "pass"
        ? "Passed"
        : check.status === "warn"
          ? "Review"
          : "Issue";

  return (
    <div
      className={`check ${isPaymentFailure ? "clickable" : ""}`}
      onClick={isPaymentFailure ? onOpenIssue : undefined}
    >
      <div className={`status ${status}`}>
        {status === "pass" ? (
          <Check size={15} />
        ) : status === "warn" ? (
          <CircleAlert size={15} />
        ) : (
          <X size={15} />
        )}
      </div>
      <div>
        <b>{check.name}</b>
        <p>
          {isVerified
            ? "Declined-payment recovery, retry, and alternative-method guidance are present in the simulated repaired build."
            : check.note}
        </p>
      </div>
      <span className={`label ${status}`}>{label}</span>
    </div>
  );
}

function CheckGroups({
  repaired,
  onOpenIssue,
}: {
  repaired: boolean;
  onOpenIssue: () => void;
}) {
  return (
    <div className="checks">
      {["Core flows", "Reliability"].map((group) => (
        <div className="checkGroup" key={group}>
          <h3>{group}</h3>
          {checks
            .filter((check) => check.group === group)
            .map((check) => (
              <CheckItem
                key={check.name}
                check={check}
                repaired={repaired}
                onOpenIssue={onOpenIssue}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

function Summary({ repaired }: { repaired: boolean }) {
  return (
    <aside>
      <p className="eyebrow">Preflight summary</p>
      <h2>
        Ready enough to inspect.
        <br />
        Not ready enough to assume.
      </h2>
      <div className="summaryRow">
        <Check size={16} />
        <span>
          <b>{repaired ? "4 checks passed" : "3 checks passed"}</b>
          <small>
            {repaired
              ? "Repair verified in the simulated re-check"
              : "Core behavior looks healthy"}
          </small>
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
          <small>
            {repaired
              ? "Payment recovery is now verified"
              : "Payment failure needs attention"}
          </small>
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
  );
}

export function ResultsStep({
  repaired,
  onBack,
  onOpenIssue,
}: {
  repaired: boolean;
  onBack: () => void;
  onOpenIssue: () => void;
}) {
  return (
    <section className="results">
      <button className="back" onClick={onBack}>
        <ChevronLeft size={17} /> Back to app
      </button>
      <div className="resultHead">
        <div>
          <p className="eyebrow">
            <ShieldCheck size={14} /> Preflight complete
          </p>
          <h1>App readiness</h1>
          <p>
            {repaired
              ? "The payment-recovery issue is verified. Two experience gaps still need review."
              : "Three areas should be reviewed before sharing SplitMate."}
          </p>
        </div>
        <div className="score">
          <strong>{repaired ? 92 : 78}</strong>
          <span>/ 100</span>
          <small>{repaired ? "VERIFIED AFTER REPAIR" : "DEMO READINESS"}</small>
        </div>
      </div>
      <div className="grid">
        <CheckGroups repaired={repaired} onOpenIssue={onOpenIssue} />
        <Summary repaired={repaired} />
      </div>
    </section>
  );
}
