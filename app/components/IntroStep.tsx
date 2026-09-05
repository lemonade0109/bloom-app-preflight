import { ArrowRight, Sparkles } from "lucide-react";

function PhonePreview() {
  return (
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
  );
}

export function IntroStep({ onRun }: { onRun: () => void }) {
  return (
    <section className="workspace">
      <div className="copy">
        <p className="eyebrow">
          <Sparkles size={14} /> Generated app
        </p>
        <h1>
          Your app is built.
          <br />
          Is it ready?
        </h1>
        <p className="lede">
          Preflight reviews an AI-generated app for important user flows and
          reliability gaps before the creator decides to share it.
        </p>
        <div className="appmeta">
          <div>
            <span>APP</span>
            <strong>SplitMate</strong>
          </div>
          <div>
            <span>TYPE</span>
            <strong>Shared expenses</strong>
          </div>
          <div>
            <span>BUILD</span>
            <strong>#1842</strong>
          </div>
        </div>
        <button className="primary" onClick={onRun}>
          Run App Preflight <ArrowRight size={18} />
        </button>
        <p className="fine">
          Illustrative evaluation only. No Bloom APIs, private product data, or
          production systems are used.
        </p>
        <div className="whyCard">
          <span>WHY THIS EXISTS</span>
          <p>
            AI agents can generate a working app quickly. The harder question is
            whether the app is safe, understandable, and complete enough to
            share. This prototype explores that quality gate.
          </p>
        </div>
      </div>
      <PhonePreview />
    </section>
  );
}
