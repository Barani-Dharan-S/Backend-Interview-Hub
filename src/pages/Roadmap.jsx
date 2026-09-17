import React, { useMemo, useState } from "react";
import { roadmap, learningJourney } from "../data/roadmap";
import { contentCounts } from "../data/counts";
import { useProgress } from "../hooks/useProgress";

const journeyStages = [
  ...roadmap.map(stage => ({ ...stage, kind: "question" })),
  ...learningJourney.map(stage => ({ ...stage, kind: "learning" }))
];

export default function Roadmap({ questions, onTopic, onView }) {
  const [expanded, setExpanded] = useState("java");
  const [showAll, setShowAll] = useState(false);
  const { completed, isComplete, resetProgress } = useProgress();

  const totals = useMemo(() => ({
    stages: journeyStages.length,
    questions: questions.length,
    learning: learningJourney.reduce((sum, stage) => sum + (contentCounts[stage.countKey]?.total ?? 0), 0)
  }), [questions]);

  const progress = useMemo(() => {
    const reviewedQuestions = questions.filter(q => isComplete(`question:${q.id}`)).length;
    const learningItems = journeyStages.filter(stage => stage.kind === "learning").reduce((sum, stage) => {
      const key = stage.countKey;
      return sum + (contentCounts[key]?.total ?? 0);
    }, 0);
    const completedLearning = completed.filter(id => id.startsWith("question:") === false).length;
    const tracked = reviewedQuestions + completedLearning;
    const available = questions.length + learningItems;
    return { reviewedQuestions, completedLearning, percent: available ? Math.round((tracked / available) * 100) : 0 };
  }, [questions, completed, isComplete]);

  const toggleStage = stage => {
    setExpanded(current => current === stage.id ? null : stage.id);
  };

  const visibleStages = showAll ? journeyStages : journeyStages.slice(0, 8);

  return (
    <section className="roadmap-page roadmap-v254">
      <header className="roadmap-hero roadmap-hero-v254">
        <div className="roadmap-hero-copy">
          <div className="roadmap-eyebrow"><span className="roadmap-live-dot" /> INTERVIEW ROADMAP <span>V25.4</span></div>
          <h2>From language fundamentals<br /><em>to production systems.</em></h2>
          <p>One connected learning path for backend and full-stack engineering. Follow the dependency chain, go deep at each stage, then carry that understanding into distributed and production systems.</p>
          <div className="roadmap-stats">
            <div><strong>{totals.stages}</strong><span>learning stages</span></div>
            <div><strong>{totals.questions.toLocaleString()}</strong><span>interview questions</span></div>
            <div><strong>{totals.learning.toLocaleString()}</strong><span>guided learning items</span></div>
          </div>
          <div className="mastery-overview">
            <div className="mastery-copy"><span>YOUR MASTERY</span><strong>{progress.percent}%</strong><small>{progress.reviewedQuestions.toLocaleString()} questions reviewed · {progress.completedLearning.toLocaleString()} learning items completed</small></div>
            <div className="mastery-track"><i style={{ width: `${progress.percent}%` }} /></div>
          </div>
        </div>
        <div className="roadmap-hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">01</div>
        </div>
      </header>

      <div className="roadmap-principle">
        <div className="principle-index">01</div>
        <div><b>How to use this map</b><span>Build the foundation → learn the framework → understand persistence and distributed behavior → practice production concerns → revisit internals when the abstractions become limiting.</span></div>
      </div>

      <div className="roadmap-section-head">
        <div><span className="section-kicker">THE LEARNING PATH</span><h3>Follow the dependency chain</h3></div>
        <button type="button" className="roadmap-toggle" onClick={() => setShowAll(value => !value)}>{showAll ? "Show core path" : `Show all ${journeyStages.length} stages`} <span>↗</span></button>
      </div>

      <div className="roadmap-map" aria-label="Interview learning roadmap">
        {visibleStages.map((stage, index) => {
          const isOpen = expanded === stage.id;
          const number = String(index + 1).padStart(2, "0");
          const total = stage.kind === "question"
            ? questions.filter(q => q.topic === stage.id).length
            : contentCounts[stage.countKey]?.total ?? 0;
          const levelCounts = stage.kind === "question" ? {
            L1: questions.filter(q => q.topic === stage.id && q.level === "L1").length,
            L2: questions.filter(q => q.topic === stage.id && q.level === "L2").length,
            L3: questions.filter(q => q.topic === stage.id && q.level === "L3").length
          } : null;
          const progressKey = stage.kind === "question" ? "question:" : `${stage.countKey}:`;
          const completedStage = stage.kind === "question"
            ? questions.filter(q => q.topic === stage.id && isComplete(`question:${q.id}`)).length
            : completed.filter(id => id.startsWith(progressKey)).length;
          const stagePercent = total ? Math.round((completedStage / total) * 100) : 0;

          return (
            <React.Fragment key={stage.id}>
              <article className={`roadmap-node ${isOpen ? "is-open" : ""} ${stage.kind === "learning" ? "is-learning" : ""}`}>
                <button type="button" className="roadmap-node-trigger" onClick={() => toggleStage(stage)} aria-expanded={isOpen}>
                  <span className="node-number">{number}</span>
                  <span className="node-marker"><span>{stage.icon}</span></span>
                  <span className="node-content">
                    <span className="node-topline"><span>{stage.kind === "question" ? "QUESTION BANK" : "LEARNING TRACK"}</span><span>{stagePercent}% mastered · {total.toLocaleString()} {stage.kind === "question" ? "questions" : "items"}</span></span>
                    <strong>{stage.name}</strong>
                    <span className="node-progress"><i style={{ width: `${stagePercent}%` }} /></span>
                    <small>{stage.goal}</small>
                  </span>
                  <span className="node-arrow">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="roadmap-node-detail">
                    <div className="detail-bar">
                      <span>{stage.kind === "question" ? `Reviewed ${completedStage}/${total} · L1 ${levelCounts.L1} · L2 ${levelCounts.L2} · L3 ${levelCounts.L3}` : `Completed ${completedStage}/${total} · hands-on learning · interview reasoning · production context`}</span>
                      <button type="button" className="study-btn study-btn-primary" onClick={() => stage.kind === "question" ? onTopic(stage.id) : onView?.(stage.route)}>Open {stage.name} →</button>
                    </div>
                    {stage.areas ? (
                      <div className="roadmap-area-grid">
                        {stage.areas.map(area => {
                          const count = questions.filter(q => q.topic === stage.id && q.subtopic === area.id).length;
                          return <button type="button" className="roadmap-area" key={area.id} onClick={() => onTopic(stage.id, area.id)}><span>{area.name}</span><b>{count}</b></button>;
                        })}
                      </div>
                    ) : (
                      <div className="journey-detail-grid">
                        <div><span>FOCUS</span><b>Understand</b><small>{stage.goal}</small></div>
                        <div><span>NEXT</span><b>{journeyStages[index + 1]?.name || "Interview readiness"}</b><small>Carry the concepts forward into the next layer of the engineering stack.</small></div>
                      </div>
                    )}
                  </div>
                )}
              </article>
              {index < visibleStages.length - 1 && <div className="roadmap-connector" aria-hidden="true"><span /></div>}
            </React.Fragment>
          );
        })}
      </div>

      {!showAll && (
        <button type="button" className="roadmap-expand" onClick={() => setShowAll(true)}>
          <span>Continue the engineering path</span><b>+ {journeyStages.length - 8} more stages</b><i>↓</i>
        </button>
      )}

      <div className="roadmap-footer-note">
        <span className="roadmap-footer-icon">⌁</span>
        <div><b>Depth is intentionally non-linear</b><span>Once you reach Microservices and System Design, jump back into Java, JPA, SQL or framework internals whenever a design decision depends on lower-level behavior.</span></div>
      </div>
    </section>
  );
}
