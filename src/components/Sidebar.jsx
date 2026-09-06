import React from "react";
import { topics } from "../data/topics";

export default function Sidebar({ topic, setTopic, dark, setDark }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">BI</div>
        <div><strong>Backend Interview</strong><span>Prep</span></div>
      </div>
      <div className="side-intro">Focused preparation for Java backend interviews.</div>
      <div className="side-label">TOPICS</div>
      <nav>
        {topics.map(t => (
          <button key={t.id} className={topic === t.id ? "nav-item active" : "nav-item"} onClick={() => setTopic(t.id)}>
            <span>{t.icon}</span><label>{t.name}</label>
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? "☀️ Light mode" : "🌙 Dark mode"}</button>
      </div>
    </aside>
  );
}
