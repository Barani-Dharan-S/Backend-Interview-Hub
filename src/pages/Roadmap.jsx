import React from "react";
import { roadmap } from "../data/roadmap";
import { reactLessons } from "../data/react";
import { javascriptLessons } from "../data/javascript";
import { fullStackLessons } from "../data/fullstack";

const learningStages = [
  {
    id: "react", order: 10, icon: "⚛", name: "React", type: "learning",
    goal: "Build production-ready React skills from components and hooks to performance, architecture and real-world frontend engineering.",
    lessons: reactLessons,
    areas: [
      "Foundations", "Components", "Rendering", "Hooks", "Forms", "State Management", "Routing", "Data Fetching", "Performance", "Testing", "Accessibility", "Architecture", "Production", "Deployment", "Security", "Concurrency", "Effects", "Internals", "Async Data", "UX Patterns", "Practical Patterns", "Advanced React", "Advanced UI", "Refs", "UI Patterns", "Full Stack"
    ]
  },
  {
    id: "javascript", order: 11, icon: "JS", name: "JavaScript", type: "learning",
    goal: "Master the JavaScript fundamentals and runtime concepts that make React and full-stack frontend work predictable.",
    lessons: javascriptLessons,
    areas: [
      "Fundamentals", "Variables & Scope", "Scope & Execution", "Functions", "Functions & Scope", "Functions & Closures", "Objects & Prototypes", "Objects & Arrays", "Objects & Immutability", "Types & Coercion", "Types & Objects", "Arrays & Collections", "Collections", "Modern JavaScript", "Async JavaScript", "Asynchronous JavaScript", "Runtime & Event Loop", "Runtime & Performance", "Browser Events", "Web APIs", "Browser APIs", "Modules & Tooling", "Errors", "Error Handling", "Functional Patterns", "State & Data Flow", "Practical Patterns", "Performance", "Security", "Architecture", "Observability", "Testing", "Interview Coding", "Language Protocols"
    ]
  },
  {
    id: "fullstack", order: 12, icon: "⇄", name: "React + Spring Boot / Full Stack", type: "learning",
    goal: "Connect frontend and backend into complete features: APIs, authentication, persistence, reliability, observability and deployment.",
    lessons: fullStackLessons,
    areas: [
      "Architecture", "REST APIs", "API Integration", "API Design", "Authentication", "Error Handling", "Validation", "Data Fetching", "UX Patterns", "Security", "Reliability", "Consistency", "Distributed Systems", "Messaging", "Real-Time", "Performance", "Observability", "Testing", "Deployment", "Debugging", "Case Study", "API Evolution", "Files", "Delivery"
    ]
  },
  {
    id: "fullstack-scenarios", order: 13, icon: "◇", name: "Full Stack Scenarios", type: "soon",
    goal: "Practice end-to-end L2/L3 scenarios that connect React, Spring Boot, databases, security and production troubleshooting.",
    areas: [
      "Production Debugging", "API Failures", "Performance", "Security", "Data Consistency", "Deployment", "Architecture", "Incident Scenarios"
    ]
  },
  {
    id: "typescript", order: 14, icon: "TS", name: "TypeScript", type: "soon",
    goal: "Add TypeScript after React and JavaScript so the type system reinforces concepts you already understand.",
    areas: [
      "Types", "Interfaces", "Generics", "Narrowing", "Utility Types", "React + TypeScript", "API Types", "Advanced Patterns"
    ]
  }
];

export default function Roadmap({ questions, onTopic, setView }) {
  const countFor = (stage, areaId) => questions.filter(q => q.topic === stage.id && q.subtopic === areaId).length;
  const levelCounts = stage => ({
    L1: questions.filter(q => q.topic === stage.id && q.level === "L1").length,
    L2: questions.filter(q => q.topic === stage.id && q.level === "L2").length,
    L3: questions.filter(q => q.topic === stage.id && q.level === "L3").length
  });

  const learningMeta = stage => ({
    total: stage.lessons.length,
    L1: stage.lessons.filter(x => x.level === "L1").length,
    L2: stage.lessons.filter(x => x.level === "L2").length,
    L3: stage.lessons.filter(x => x.level === "L3").length
  });

  const learningAreaCount = (stage, area) => stage.lessons.filter(x => x.subtopic === area).length;

  const stages = [...roadmap, ...learningStages];

  return (
    <section className="roadmap-page">
      <div className="roadmap-hero">
        <span className="pill">INTERVIEW ROADMAP</span>
        <h2>Study in the right order.<br/><em>Build depth, not just coverage.</em></h2>
        <p>Follow the complete interview path from Core Java through backend engineering, distributed systems, coding, React, JavaScript and full-stack development. Each stage links directly to the material you need to practice.</p>
      </div>

      <div className="roadmap-note">
        <div className="roadmap-note-icon">→</div>
        <div><b>Recommended sequence</b><span>Java → Spring Boot → JPA / Hibernate → Microservices → Security → SQL → Cloud → System Design → Coding → React → JavaScript → React + Spring Boot / Full Stack → Full Stack Scenarios → TypeScript</span></div>
      </div>

      <div className="roadmap-list">
        {stages.map((stage, index) => {
          const isLearning = stage.type === "learning";
          const isSoon = stage.type === "soon";
          const total = isLearning ? stage.lessons.length : isSoon ? 0 : questions.filter(q => q.topic === stage.id).length;
          const counts = isLearning ? learningMeta(stage) : levelCounts(stage);
          return (
            <article className="roadmap-stage" key={stage.id}>
              <div className="stage-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="stage-main">
                <div className="stage-heading">
                  <div className="stage-title"><span>{stage.icon}</span><div><h3>{stage.name}</h3><p>{stage.goal}</p></div></div>
                  {isSoon ? <button className="study-btn" disabled>Coming Soon</button> : <button className="study-btn" onClick={() => isLearning ? setView(stage.id) : onTopic(stage.id)}>Study {stage.name} →</button>}
                </div>
                <div className="stage-meta">
                  <b>{isSoon ? "Coming soon" : `${total} ${isLearning ? "lessons" : "questions"}`}</b>
                  {!isSoon && <><span>L1 {counts.L1}</span><span>L2 {counts.L2}</span><span>L3 {counts.L3}</span></>}
                </div>
                <div className="area-grid">
                  {stage.areas.map(area => {
                    const count = isLearning ? learningAreaCount(stage, area) : isSoon ? 0 : countFor(stage, area.id);
                    return <button className="area" key={area} onClick={() => !isSoon && (isLearning ? setView(stage.id) : onTopic(stage.id, area.id))}><span>{isLearning ? area : area.name}</span>{!isSoon && <b>{count}</b>}</button>;
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
