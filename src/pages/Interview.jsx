import React, { useMemo, useState } from "react";

export default function Interview({ questions, onBack }) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * questions.length));
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(null);
  const q = questions[index];
  const next = () => {
    setIndex(Math.floor(Math.random() * questions.length));
    setRevealed(false);
    setScore(null);
  };
  return (
    <section className="interview-screen">
      <button className="back" onClick={onBack}>← Back to question bank</button>
      <div className="interview-card">
        <div className="interview-top"><span className="pill">MOCK INTERVIEW</span><span>Question {index + 1} / {questions.length}</span></div>
        <h2>{q.title}</h2>
        <div className="meta"><i className={`level ${q.level.toLowerCase()}`}>{q.level}</i>{q.tags.map(t=><i key={t}>{t}</i>)}</div>
        {!revealed ? (
          <>
            <div className="think-box">Take a moment and answer aloud. Aim for a clear 30–60 second explanation.</div>
            <button className="reveal" onClick={() => setRevealed(true)}>Reveal model answer</button>
          </>
        ) : (
          <>
            <div className="answer interview-answer"><div className="answer-label">MODEL ANSWER</div><p>{q.interview}</p><div className="followup"><b>Follow-up questions</b><ul>{q.followups.map(p=><li key={p}>{p}</li>)}</ul></div></div>
            <div className="score-row">
              <span>How did you answer?</span>
              {[6,8,10].map(n=><button key={n} className={score===n ? "score selected" : "score"} onClick={()=>setScore(n)}>{n}/10</button>)}
            </div>
            <button className="next" onClick={next}>Next question →</button>
          </>
        )}
      </div>
    </section>
  );
}