import React from "react";

function Section({ label, title, children, className = "" }) {
  return (
    <section className={`explain-section ${className}`}>
      <div className="section-kicker">{label}</div>
      <h4>{title}</h4>
      {children}
    </section>
  );
}

export default function QuestionCard({ q, index, open, onToggle }) {
  const followups = q.followups || [];
  const mistakes = q.mistakes || [];

  return (
    <article className={open ? "question open" : "question"}>
      <button className="question-head" onClick={onToggle}>
        <span className="q-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="q-content">
          <strong>{q.title}</strong>
          <span className="meta">
            <i className={`level ${q.level.toLowerCase()}`}>{q.level}</i>
            {q.tags.map(t => <i key={t}>{t}</i>)}
          </span>
        </span>
        <span className="chevron">{open ? "⌃" : "›"}</span>
      </button>

      {open && (
        <div className="answer">
          <div className="answer-banner">
            <div>
              <div className="answer-label">INTERVIEW PREP MODE</div>
              <p className="answer-subtitle">Understand it → explain it → handle the follow-up.</p>
            </div>
            <span className="level-badge">{q.level} FOCUS</span>
          </div>

          {q.scenario && (
            <Section label="01 · PRODUCTION SCENARIO" title="What is happening in production?">
              <p>{q.scenario}</p>
              {q.investigation && (
                <div className="scenario-block">
                  <b>🔎 Investigation</b>
                  <p>{q.investigation}</p>
                </div>
              )}
              {q.prevention && (
                <div className="scenario-block">
                  <b>🛡 Prevention</b>
                  <p>{q.prevention}</p>
                </div>
              )}
            </Section>
          )}

          <Section label={q.scenario ? "02 · QUICK UNDERSTANDING" : "01 · QUICK UNDERSTANDING"} title="What is it?">
            <p className="short-answer">{q.short}</p>
          </Section>

          <Section label={q.scenario ? "03 · DEEP DIVE" : "02 · DEEP DIVE"} title="How does it work?">
            <p>{q.answer}</p>
          </Section>

          {q.topic === "coding" && (
            <Section label="03 · PROBLEM" title="What are we solving?">
              <p>{q.problem || q.title}</p>
              {q.example && <pre className="example-block"><code>{q.example}</code></pre>}
            </Section>
          )}

          {q.topic === "coding" && (
            <Section label="04 · APPROACH" title="How should you solve it?">
              <p>{q.approach || q.answer || q.short}</p>
            </Section>
          )}

          {q.topic === "coding" ? (
            <Section label="05 · COMPLETE JAVA PROGRAM" title="Full runnable solution">
              <pre><code>{q.code || "No code solution is available for this problem yet."}</code></pre>
            </Section>
          ) : q.code ? (
            <Section label="03 · CODE / EXAMPLE" title="See it in practice">
              <pre><code>{q.code}</code></pre>
            </Section>
          ) : null}

          {q.topic === "coding" && q.streams && (
            <Section label="06 · JAVA STREAMS" title="Streams alternative">
              <p>{q.streams}</p>
            </Section>
          )}

          {q.topic === "coding" && q.complexity && (
            <Section label="07 · COMPLEXITY" title="Time & space complexity">
              <pre className="complexity-block"><code>{q.complexity}</code></pre>
            </Section>
          )}

          <Section label={q.topic === "coding" ? "08 · INTERVIEW DELIVERY" : (q.scenario ? "05 · INTERVIEW DELIVERY" : "04 · INTERVIEW DELIVERY")} title="How to answer the interviewer">
            <div className="interview-script">
              <span className="script-label">30–60 SECOND ANSWER</span>
              <p>{q.interview || q.short}</p>
            </div>
            <div className="delivery-tip">
              <b>💡 Delivery tip</b>
              <span>Start with the definition, explain the reason it exists, then give one practical example. Stop there unless the interviewer asks you to go deeper.</span>
            </div>
          </Section>

          {followups.length > 0 && (
            <Section label={q.topic === "coding" ? "09 · EXPECTED FOLLOW-UPS" : (q.scenario ? "06 · EXPECTED FOLLOW-UPS" : "05 · EXPECTED FOLLOW-UPS")} title="Be ready for the next question">
              <ol className="followup-list">
                {followups.map(p => <li key={p}>{p}</li>)}
              </ol>
            </Section>
          )}

          {mistakes.length > 0 && (
            <Section label={q.topic === "coding" ? "10 · INTERVIEW TRAPS" : (q.scenario ? "07 · INTERVIEW TRAPS" : "06 · INTERVIEW TRAPS")} title="Avoid these mistakes" className="mistake-section">
              <ul className="mistake-list">{mistakes.map(p => <li key={p}>{p}</li>)}</ul>
            </Section>
          )}

        </div>
      )}
    </article>
  );
}
