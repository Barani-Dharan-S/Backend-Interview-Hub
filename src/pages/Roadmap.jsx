import React from "react";
import { roadmap, learningJourney } from "../data/roadmap";
import { contentCounts } from "../data/counts";

export default function Roadmap({ questions, onTopic, onView }) {
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
        <p>Follow the complete path from Core Java and backend fundamentals through full-stack development, DevOps, cloud, production engineering and distributed systems. Each stage links directly to the learning material you need.</p>
      </div>

      <div className="roadmap-note">
        <div className="roadmap-note-icon">→</div>
        <div><b>Recommended sequence</b><span>Java → Spring Boot → JPA / Hibernate → Microservices → Security → SQL → System Design → Coding → React → JavaScript → Full Stack → Practical Engineering → Docker → Kubernetes → CI/CD → Cloud → Production → Deep Engineering → Distributed Systems</span></div>
      </div>

      <div className="roadmap-list">
        {roadmap.map((stage, index) => {
          const total = questions.filter(q => q.topic === stage.id).length;
          const counts = levelCounts(stage);
          return (
            <article className="roadmap-stage" key={stage.id}>
              <div className="stage-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="stage-main">
                <div className="stage-heading">
                  <div className="stage-title"><span>{stage.icon}</span><div><h3>{stage.name}</h3><p>{stage.goal}</p></div></div>
                  <button type="button" className="study-btn" onClick={() => onTopic(stage.id)}>Study {stage.name} →</button>
                </div>
                <div className="stage-meta"><b>{total} questions</b><span>L1 {counts.L1}</span><span>L2 {counts.L2}</span><span>L3 {counts.L3}</span></div>
                <div className="area-grid">
                  {stage.areas.map(area => {
                    const count = countFor(stage, area.id);
                    return <button type="button" className="area" key={area.id} onClick={() => onTopic(stage.id, area.id)}><span>{area.name}</span><b>{count}</b></button>;
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="roadmap-note" style={{ marginTop: 24 }}>
        <div className="roadmap-note-icon">+</div>
        <div><b>Beyond the backend question bank</b><span>The roadmap continues into the full engineering learning path below.</span></div>
      </div>

      <div className="roadmap-list">
        {learningJourney.map((stage, index) => {
          const count = contentCounts[stage.countKey]?.total ?? 0;
          return (
            <article className="roadmap-stage" key={stage.id}>
              <div className="stage-number">{String(roadmap.length + index + 1).padStart(2, "0")}</div>
              <div className="stage-main">
                <div className="stage-heading">
                  <div className="stage-title"><span>{stage.icon}</span><div><h3>{stage.name}</h3><p>{stage.goal}</p></div></div>
                  <button type="button" className="study-btn" onClick={() => onView(stage.route)}>Study {stage.name} →</button>
                </div>
                <div className="stage-meta"><b>{count} learning items</b><span>Hands-on learning</span><span>Interview reasoning</span></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
