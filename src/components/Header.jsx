import React from "react";
import questions from "../data";
export default function Header({ view }) { return <header className="topbar"><div><div className="eyebrow">backend@interview:~</div><h1>Backend Interview Preparation</h1><p>{view === "roadmap" ? "Follow the recommended path from Core Java to system design." : "Java · Spring Boot · Microservices · SQL · JPA · Security · Cloud · System Design"}</p></div><div className="prep-badge">{questions.length} QUESTIONS</div></header>; }
