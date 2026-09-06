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

          <Section label="01 · QUICK UNDERSTANDING" title="What is it?">
            <p className="short-answer">{q.short}</p>
          </Section>

          <Section label="02 · DEEP DIVE" title="How does it work?">
            <p>{q.answer}</p>
          </Section>

          {q.code && (
            <Section label="03 · CODE / EXAMPLE" title="See it in practice">
              <pre><code>{q.code}</code></pre>
            </Section>
          )}

          <Section label="04 · INTERVIEW DELIVERY" title="How to answer the interviewer">
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
            <Section label="05 · EXPECTED FOLLOW-UPS" title="Be ready for the next question">
              <ol className="followup-list">
                {followups.map(p => <li key={p}>{p}</li>)}
              </ol>
            </Section>
          )}

          {mistakes.length > 0 && (
            <Section label="06 · INTERVIEW TRAPS" title="Avoid these mistakes" className="mistake-section">
              <ul className="mistake-list">{mistakes.map(p => <li key={p}>{p}</li>)}</ul>
            </Section>
          )}

        </div>
      )}
    </article>
  );
}
