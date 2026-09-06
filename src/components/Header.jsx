import React from "react";

export default function Header() {
  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">backend@interview:~</div>
        <h1>Backend Interview Preparation</h1>
        <p>Java · Spring Boot · Microservices · SQL · JPA · Security · Cloud · System Design</p>
      </div>
      <div className="prep-badge">494 QUESTIONS</div>
    </header>
  );
}
