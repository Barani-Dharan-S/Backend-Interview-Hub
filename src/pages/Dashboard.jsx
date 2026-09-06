import React from "react";
import { topics } from "../data/topics";
import { topicProgress } from "../hooks/useProgress";

export default function Dashboard({ questions, mastered, onReset }) {
  const overall = Math.round(mastered.length / questions.length * 100);
  const weak = topics.filter(t => t.id !== "all").map(t => ({...t, p: topicProgress(questions, mastered, t.id)})).sort((a,b) => a.p-b.p)[0];
  return (
    <section className="dashboard">
      <div className="dash-heading"><div><span className="pill">MY PREPARATION</span><h2>Know what to study next.</h2><p>Your progress is saved in this browser.</p></div><button className="reset-btn" onClick={onReset}>Reset progress</button></div>
      <div className="metric-grid">
        <div className="metric"><b>{questions.length}</b><span>Total questions</span></div>
        <div className="metric"><b>{mastered.length}</b><span>Mastered</span></div>
        <div className="metric"><b>{overall}%</b><span>Overall progress</span></div>
      </div>
      <div className="dash-grid">
        <div className="progress-panel">
          <h3>Topic readiness</h3>
          {topics.filter(t=>t.id!=="all").map(t => {
            const p = topicProgress(questions, mastered, t.id);
            return <div className="topic-progress" key={t.id}><div><span>{t.icon} {t.name}</span><b>{p}%</b></div><div className="bar"><i style={{width:`${p}%`}} /></div></div>
          })}
        </div>
        <div className="weak-card">
          <span className="pill">NEXT FOCUS</span>
          <div className="weak-icon">↗</div>
          <h3>{weak?.name}</h3>
          <p>This is currently your weakest topic. Review the questions here before your next mock interview.</p>
        </div>
      </div>
    </section>
  );
}