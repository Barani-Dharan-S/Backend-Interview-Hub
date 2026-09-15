import React from "react";
import { questions } from "../data/index";
import { reactLessons } from "../data/react";
import { javascriptLessons } from "../data/javascript";
import { fullStackLessons } from "../data/fullstack";
import { fullStackScenarios } from "../data/fullstackScenarios";
import { buildLabs } from "../data/buildLabs";
import { debugLabs } from "../data/debugLabs";
import { architectureLabs } from "../data/architectureLabs";
import { dockerLessons } from "../data/dockerLessons";
import { dockerLabs } from "../data/dockerLabs";
import { kubernetesLessons } from "../data/kubernetesLessons";
import { kubernetesLabs } from "../data/kubernetesLabs";
import { cicdLessons } from "../data/cicdLessons";
import { cicdLabs } from "../data/cicdLabs";
import { jenkinsLessons } from "../data/jenkinsLessons";
import { jenkinsLabs } from "../data/jenkinsLabs";
import { githubActionsLessons } from "../data/githubActionsLessons";
import { githubActionsLabs } from "../data/githubActionsLabs";
import { cloudLessons } from "../data/cloudLessons";
import { cloudLabs } from "../data/cloudLabs";
import { capstoneLessons } from "../data/capstoneLessons";
import { capstoneLabs } from "../data/capstoneLabs";

export default function Header({ view }) {
  const roadmap = view === "roadmap";
  const react = view === "react";
  const javascript = view === "javascript";
  const fullstack = view === "fullstack";
  const scenarios = view === "scenarios";
  const labs = view === "labs";
  const docker = view === "docker";
  const kubernetes = view === "kubernetes";
  const cicd = view === "cicd";
  const jenkins = view === "jenkins";
  const githubActions = view === "github-actions";
  const cloud = view === "cloud";
  const production = view === "production";
  const title = roadmap ? "Full Stack Interview Roadmap" : react ? "React Learning" : javascript ? "JavaScript Learning" : fullstack ? "React + Spring Boot" : scenarios ? "Full-Stack Scenarios" : labs ? "Practical Engineering Labs" : docker ? "Docker Learning" : kubernetes ? "Kubernetes Learning" : cicd ? "CI/CD Learning" : jenkins ? "Jenkins Learning" : githubActions ? "GitHub Actions Learning" : cloud ? "Cloud & Deployment Learning" : production ? "Production Engineering" : "Backend Interview Preparation";
  const description = roadmap
    ? "Follow a practical path from backend fundamentals to frontend and full-stack engineering."
    : react
      ? "React · JavaScript · REST APIs · Spring Boot · Full-stack architecture"
      : javascript
        ? "JavaScript · Browser runtime · Async programming · Web APIs · Production patterns"
        : fullstack
          ? "React · Spring Boot · REST APIs · Security · Databases · Deployment · Production architecture"
          : scenarios
            ? "Production debugging · Architecture · Security · Reliability · Performance · Full-stack system thinking"
            : labs
              ? "Build real features · Debug failures · Evolve architecture · Explain engineering trade-offs"
              : docker
                ? "Containers · Dockerfiles · Networking · Compose · Security · Troubleshooting · CI/CD"
                : kubernetes
                  ? "Pods · Deployments · Services · Networking · Security · Scaling · Debugging · Production"
                  : cicd
                    ? "Continuous Integration · Testing · Docker · Kubernetes · Automation · Deployment · Production"
                    : jenkins
                      ? "Jenkins · Pipelines · Agents · Shared Libraries · Docker · Kubernetes · Security · Production CI/CD"
                      : githubActions
                        ? "GitHub Actions · CI · Docker · Kubernetes · OIDC · Security · Reusable Workflows · Production Delivery"
                        : cloud
                          ? "AWS · Networking · IAM · Docker · EKS · RDS · Load Balancing · Observability · Production"
                          : production
                            ? "React · Spring Boot · PostgreSQL · Docker · Kubernetes · GitHub Actions · Cloud · Observability · Reliability"
                            : production
                            ? "React · Spring Boot · PostgreSQL · Docker · Kubernetes · GitHub Actions · Cloud · Observability · Reliability"
                            : "Java · Spring Boot · Microservices · SQL · JPA · Security · Cloud · System Design";
  const badge = roadmap ? `${questions.length} BACKEND QUESTIONS` : react ? `${reactLessons.length} REACT LESSONS` : javascript ? `${javascriptLessons.length} JAVASCRIPT LESSONS` : fullstack ? `${fullStackLessons.length} FULL STACK LESSONS` : scenarios ? `${fullStackScenarios.length} SCENARIOS` : labs ? `${buildLabs.length + debugLabs.length + architectureLabs.length} LABS` : docker ? `${dockerLessons.length + dockerLabs.length} DOCKER ITEMS` : kubernetes ? `${kubernetesLessons.length + kubernetesLabs.length} KUBERNETES ITEMS` : cicd ? `${cicdLessons.length + cicdLabs.length} CI/CD ITEMS` : jenkins ? `${jenkinsLessons.length + jenkinsLabs.length} JENKINS ITEMS` : githubActions ? `${githubActionsLessons.length + githubActionsLabs.length} ACTIONS ITEMS` : cloud ? `${cloudLessons.length + cloudLabs.length} CLOUD ITEMS` : production ? `${capstoneLessons.length + capstoneLabs.length} CAPSTONE ITEMS` : `${questions.length} QUESTIONS`;

  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">{roadmap ? "fullstack@roadmap:~" : react ? "frontend@learning:~" : javascript ? "javascript@learning:~" : fullstack ? "fullstack@learning:~" : scenarios ? "production@scenarios:~" : labs ? "engineering@labs:~" : docker ? "devops@docker:~" : kubernetes ? "devops@kubernetes:~" : cicd ? "devops@cicd:~" : jenkins ? "devops@jenkins:~" : githubActions ? "devops@actions:~" : cloud ? "cloud@deployment:~" : production ? "production@engineering:~" : "backend@interview:~"}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="prep-badge">{badge}</div>
    </header>
  );
}
