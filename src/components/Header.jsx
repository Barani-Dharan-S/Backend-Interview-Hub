import React from "react";
import { contentCounts } from "../data/counts";

const meta = {
  roadmap: ["Full Stack Interview Roadmap", "Follow a practical path from backend fundamentals to frontend and full-stack engineering.", "fullstack@roadmap:~", `${contentCounts.backend.total} BACKEND QUESTIONS`],
  react: ["React Learning", "React · JavaScript · REST APIs · Spring Boot · Full-stack architecture", "frontend@learning:~", `${contentCounts.react.total} REACT LESSONS`],
  javascript: ["JavaScript Learning", "JavaScript · Browser runtime · Async programming · Web APIs · Production patterns", "javascript@learning:~", `${contentCounts.javascript.total} JAVASCRIPT LESSONS`],
  fullstack: ["React + Spring Boot", "React · Spring Boot · REST APIs · Security · Databases · Deployment · Production architecture", "fullstack@learning:~", `${contentCounts.fullstack.total} FULL STACK LESSONS`],
  scenarios: ["Full-Stack Scenarios", "Production debugging · Architecture · Security · Reliability · Performance · Full-stack system thinking", "production@scenarios:~", `${contentCounts.scenarios.total} SCENARIOS`],
  labs: ["Practical Engineering Labs", "Build real features · Debug failures · Evolve architecture · Explain engineering trade-offs", "engineering@labs:~", `${contentCounts.labs.total} LABS`],
  docker: ["Docker Learning", "Containers · Dockerfiles · Networking · Compose · Security · Troubleshooting · CI/CD", "devops@docker:~", `${contentCounts.docker.total} DOCKER ITEMS`],
  kubernetes: ["Kubernetes Learning", "Pods · Deployments · Services · Networking · Security · Scaling · Debugging · Production", "devops@kubernetes:~", `${contentCounts.kubernetes.total} KUBERNETES ITEMS`],
  cicd: ["CI/CD Learning", "Continuous Integration · Testing · Docker · Kubernetes · Automation · Deployment · Production", "devops@cicd:~", `${contentCounts.cicd.total} CI/CD ITEMS`],
  jenkins: ["Jenkins Learning", "Jenkins · Pipelines · Agents · Shared Libraries · Docker · Kubernetes · Security · Production CI/CD", "devops@jenkins:~", `${contentCounts.jenkins.total} JENKINS ITEMS`],
  "github-actions": ["GitHub Actions Learning", "GitHub Actions · CI · Docker · Kubernetes · OIDC · Security · Reusable Workflows · Production Delivery", "devops@actions:~", `${contentCounts.githubActions.total} ACTIONS ITEMS`],
  cloud: ["Cloud & Deployment Learning", "AWS · Networking · IAM · Docker · EKS · RDS · Load Balancing · Observability · Production", "cloud@deployment:~", `${contentCounts.cloud.total} CLOUD ITEMS`],
  production: ["Production Engineering", "React · Spring Boot · PostgreSQL · Docker · Kubernetes · GitHub Actions · Cloud · Observability · Reliability", "production@engineering:~", `${contentCounts.production.total} CAPSTONE ITEMS`],
  "deep-dive": ["Deep Learning & Architecture", "Internals · Distributed systems · Performance · Security · Reliability · Cross-stack architecture", "architecture@deep-learning:~", `${contentCounts.deepDive.total} DEEP-DIVE ITEMS`],
  internal: ["Internal Workings & System Behavior", "JVM · Spring · Hibernate · PostgreSQL · Kafka · React · Docker · Kubernetes · CI/CD · AWS · Runtime behavior", "runtime@system-behavior:~", `${contentCounts.internal.total} INTERNAL ITEMS`],
  distributed: ["Distributed Systems & Production Reasoning", "Distributed systems · Resilience · Consistency · Kafka · Caching · SLOs · Capacity · Incident reasoning", "architecture@distributed-systems:~", `${contentCounts.distributed.total} DISTRIBUTED ITEMS`],
  questions: ["Backend Interview Preparation", "Java · Spring Boot · Microservices · SQL · JPA · Security · Cloud · System Design · Coding", "backend@interview:~", `${contentCounts.backend.total} QUESTIONS`]
};

export default function Header({ view }) {
  const [title, description, eyebrow, badge] = meta[view] || meta.questions;
  return <header className="topbar">
    <div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>
    <div className="prep-badge">{badge}</div>
  </header>;
}
