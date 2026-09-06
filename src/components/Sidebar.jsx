import React from "react";
import { topics } from "../data/topics";

export default function Sidebar({ view, setView, topic, setTopic, dark, setDark }) {
  return (
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">BI</div><div><strong>Backend Interview</strong><span>Prep</span></div></div>
      <div className="side-intro">Focused preparation for Java backend interviews.</div>
      <button className={view === "roadmap" ? "roadmap-nav active" : "roadmap-nav"} onClick={() => setView("roadmap")}><span>🗺</span><label>Interview Roadmap</label></button>
      <div className="side-label">TOPICS</div>
      <nav>
        {topics.map(t => <button key={t.id} className={view === "questions" && topic === t.id ? "nav-item active" : "nav-item"} onClick={() => setTopic(t.id)}><span>{t.icon}</span><label>{t.name}</label></button>)}
      </nav>
      <div className="sidebar-bottom"><button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? "☀️ Light mode" : "🌙 Dark mode"}</button></div>
    </aside>
  );
}
