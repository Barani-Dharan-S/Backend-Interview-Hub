import React from "react";
import { questions } from "../data/index";
import { reactLessons } from "../data/react";
import { javascriptLessons } from "../data/javascript";
import { fullStackLessons } from "../data/fullstack";

export default function Header({ view }) {
  const roadmap = view === "roadmap";
  const react = view === "react";
  const javascript = view === "javascript";
  const fullstack = view === "fullstack";
  const title = roadmap ? "Full Stack Interview Roadmap" : react ? "React Learning" : javascript ? "JavaScript Learning" : fullstack ? "React + Spring Boot" : "Backend Interview Preparation";
  const description = roadmap
    ? "Follow a practical path from backend fundamentals to frontend and full-stack engineering."
    : react
      ? "React · JavaScript · REST APIs · Spring Boot · Full-stack architecture"
      : javascript
        ? "JavaScript · Browser runtime · Async programming · Web APIs · Production patterns"
        : fullstack
          ? "React · Spring Boot · REST APIs · Security · Databases · Deployment · Production architecture"
          : "Java · Spring Boot · Microservices · SQL · JPA · Security · Cloud · System Design";
  const badge = roadmap ? `${questions.length} BACKEND QUESTIONS` : react ? `${reactLessons.length} REACT LESSONS` : javascript ? `${javascriptLessons.length} JAVASCRIPT LESSONS` : fullstack ? `${fullStackLessons.length} FULL STACK LESSONS` : `${questions.length} QUESTIONS`;

  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">{roadmap ? "fullstack@roadmap:~" : react ? "frontend@learning:~" : "backend@interview:~"}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="prep-badge">{badge}</div>
    </header>
  );
}
