import React from "react";
import { roadmap } from "../data/roadmap";

export default function Roadmap({ questions, onTopic }) {
  const countFor = (stage, areaId) => questions.filter(q => q.topic === stage.id && q.subtopic === areaId).length;
  const levelCounts = stage => ({
    L1: questions.filter(q => q.topic === stage.id && q.level === "L1").length,
    L2: questions.filter(q => q.topic === stage.id && q.level === "L2").length,
    L3: questions.filter(q => q.topic === stage.id && q.level === "L3").length
  });

  return (
    <section className="roadmap-page">
      <div className="roadmap-hero">
        <span className="pill">INTERVIEW ROADMAP</span>
        <h2>Study in the right order.<br/><em>Build depth, not just coverage.</em></h2>
        <p>Follow the backend path from Core Java through Spring, persistence, distributed systems and system design. Each stage links directly to the questions you need to practice.</p>
      </div>

      <div className="roadmap-note">
        <div className="roadmap-note-icon">→</div>
        <div><b>Recommended sequence</b><span>Java → Spring Boot → JPA / Hibernate → Microservices → Security → SQL → Cloud → System Design → Coding</span></div>
      </div>

      <div className="roadmap-list">
        {roadmap.map((stage, index) => {
          const total = questions.filter(q => q.topic === stage.id).length;
          const counts = levelCounts(stage);
          return (
            <article className="roadmap-stage" key={stage.id}>
              <div className="stage-number">0{index + 1}</div>
              <div className="stage-main">
                <div className="stage-heading">
                  <div className="stage-title"><span>{stage.icon}</span><div><h3>{stage.name}</h3><p>{stage.goal}</p></div></div>
                  <button className="study-btn" onClick={() => onTopic(stage.id)}>Study {stage.name} →</button>
                </div>
                <div className="stage-meta"><b>{total} questions</b><span>L1 {counts.L1}</span><span>L2 {counts.L2}</span><span>L3 {counts.L3}</span></div>
                <div className="area-grid">
                  {stage.areas.map(area => {
                    const count = countFor(stage, area.id);
                    return <button className="area" key={area.id} onClick={() => onTopic(stage.id, area.id)}><span>{area.name}</span><b>{count}</b></button>;
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
