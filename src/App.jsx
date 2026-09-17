import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useTheme } from './hooks/useProgress';
import { routeForView, useAppRoute, viewFromPath } from './router';
import { logMeasure, mark } from './utils/performance';

const Roadmap = lazy(() => Promise.all([
  import('./pages/BackendRoadmap'),
  import('./data/index')
]).then(([page, data]) => ({
  default: props => <page.default {...props} questions={data.questions} />
})));
const Questions = lazy(() => Promise.all([
  import('./pages/BackendQuestions'),
  import('./data/index')
]).then(([page, data]) => ({
  default: props => <page.default {...props} questions={data.questions} />
})));
const ReactLearning = lazy(() => import('./pages/ReactLearning'));
const JavaScriptLearning = lazy(() => import('./pages/JavaScriptLearning'));
const FullStackLearning = lazy(() => import('./pages/FullStackLearning'));
const FullStackScenarios = lazy(() => import('./pages/FullStackScenarios'));
const PracticalLabs = lazy(() => import('./pages/PracticalLabs'));
const DockerLearning = lazy(() => import('./pages/DockerLearning'));
const KubernetesLearning = lazy(() => import('./pages/KubernetesLearning'));
const CICDLearning = lazy(() => import('./pages/CICDLearning'));
const JenkinsLearning = lazy(() => import('./pages/JenkinsLearning'));
const GitHubActionsLearning = lazy(() => import('./pages/GitHubActionsLearning'));
const CloudLearning = lazy(() => import('./pages/CloudLearning'));
const ProductionEngineeringLearning = lazy(() => import('./pages/ProductionEngineeringLearning'));
const DeepDiveLearning = lazy(() => import('./pages/DeepDiveLearning'));
const InternalWorkingsLearning = lazy(() => import('./pages/InternalWorkingsLearning'));
const DistributedSystemsLearning = lazy(() => import('./pages/DistributedSystemsLearning'));

const knownViews = new Set(['roadmap','questions','react','javascript','fullstack','scenarios','labs','docker','kubernetes','cicd','jenkins','github-actions','cloud','production','deep-dive','internal','distributed']);

export default function App() {
  const { path, params, navigate } = useAppRoute();
  const initialView = knownViews.has(viewFromPath(path)) ? viewFromPath(path) : 'roadmap';
  const [topic, setTopic] = useState(params.get('topic') || 'all');
  const [subtopic, setSubtopic] = useState(params.get('subtopic') || 'all');
  const [dark, setDark] = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const view = initialView;

  useEffect(() => {
    const metadata = {
      roadmap: ['Interview Roadmap | Backend Interview Hub', 'A complete learning roadmap from Java backend fundamentals through full-stack, DevOps, cloud, production engineering, and distributed systems.'],
      questions: ['Backend Interview Questions | Backend Interview Hub', 'Deep Java, Spring Boot, JPA, microservices, SQL, security, cloud, coding, and system design interview questions.'],
      react: ['React Learning | Backend Interview Hub', 'Deep React learning covering fundamentals, hooks, state, rendering, performance, and production patterns.'],
      javascript: ['JavaScript Learning | Backend Interview Hub', 'Deep JavaScript learning covering language fundamentals, the runtime, async behavior, browser APIs, and production patterns.'],
      fullstack: ['Full Stack Learning | Backend Interview Hub', 'Full-stack learning across React, HTTP, Spring Boot, APIs, databases, security, and production engineering.'],
      scenarios: ['Full-Stack Scenarios | Backend Interview Hub', 'Production-oriented full-stack scenarios for diagnosing and explaining real engineering problems.'],
      labs: ['Practical Labs | Backend Interview Hub', 'Hands-on build, debug, and architecture labs for full-stack and backend engineering.'],
      docker: ['Docker Learning | Backend Interview Hub', 'Docker fundamentals, production containerization, networking, security, debugging, and CI/CD.'],
      kubernetes: ['Kubernetes Learning | Backend Interview Hub', 'Kubernetes architecture, workloads, networking, scaling, security, debugging, and production operations.'],
      cicd: ['CI/CD Learning | Backend Interview Hub', 'CI/CD fundamentals, pipelines, testing, artifacts, security, deployment strategies, and production delivery.'],
      jenkins: ['Jenkins Learning | Backend Interview Hub', 'Jenkins pipelines, agents, credentials, quality gates, deployment, security, and troubleshooting.'],
      'github-actions': ['GitHub Actions Learning | Backend Interview Hub', 'GitHub Actions workflows, CI/CD, environments, security, OIDC, deployments, and production patterns.'],
      cloud: ['Cloud & AWS Learning | Backend Interview Hub', 'Cloud deployment learning across AWS networking, compute, databases, security, observability, and delivery.'],
      production: ['Production Engineering | Backend Interview Hub', 'End-to-end production engineering across reliability, observability, deployment, resilience, incidents, and recovery.'],
      'deep-dive': ['Deep Learning & Architecture | Backend Interview Hub', 'Deep engineering lessons connecting implementation, internals, production behavior, and architecture.'],
      internal: ['Internal Workings | Backend Interview Hub', 'First-principles lessons on JVM, Spring, JPA, SQL, microservices, Kafka, React, containers, Kubernetes, CI/CD, and cloud internals.'],
      distributed: ['Distributed Systems | Backend Interview Hub', 'Distributed systems learning covering partial failure, consistency, resilience, messaging, observability, and recovery.']
    };
    const [title, description] = metadata[view] || metadata.roadmap;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [view]);

  useEffect(() => {
    mark(`route-${view}-start`);
    requestAnimationFrame(() => {
      logMeasure(`route ${view} render`, `route-${view}-start`, `route-${view}-paint`);
    });
  }, [view]);

  useEffect(() => {
    const nextTopic = params.get('topic');
    const nextSubtopic = params.get('subtopic');
    if (nextTopic !== null) setTopic(nextTopic || 'all');
    if (nextSubtopic !== null) setSubtopic(nextSubtopic || 'all');
  }, [params]);

  const openView = nextView => navigate(routeForView(nextView));
  const openTopic = (nextTopic, nextSubtopic = 'all') => {
    setTopic(nextTopic);
    setSubtopic(nextSubtopic);
    navigate(`/questions?topic=${encodeURIComponent(nextTopic)}${nextSubtopic !== 'all' ? `&subtopic=${encodeURIComponent(nextSubtopic)}` : ''}`);
  };

  const Page = useMemo(() => ({
    roadmap: Roadmap,
    questions: Questions,
    react: ReactLearning,
    javascript: JavaScriptLearning,
    fullstack: FullStackLearning,
    scenarios: FullStackScenarios,
    labs: PracticalLabs,
    docker: DockerLearning,
    kubernetes: KubernetesLearning,
    cicd: CICDLearning,
    jenkins: JenkinsLearning,
    'github-actions': GitHubActionsLearning,
    cloud: CloudLearning,
    production: ProductionEngineeringLearning,
    'deep-dive': DeepDiveLearning,
    internal: InternalWorkingsLearning,
    distributed: DistributedSystemsLearning
  })[view], [view]);

  const pageProps = view === 'roadmap'
    ? { onTopic: openTopic, onView: openView }
    : view === 'questions'
      ? { topic, subtopic, setSubtopic }
      : {};

  useEffect(() => {
    mark(`route-${view}-paint`);
    logMeasure(`route ${view} commit`, `route-${view}-start`, `route-${view}-paint`);
  }, [view]);

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Sidebar view={view} setView={openView} topic={topic} setTopic={openTopic} dark={dark} setDark={setDark} open={sidebarOpen} onClose={() => setSidebarOpen(false)} triggerRef={menuButtonRef} />
      <button ref={menuButtonRef} className="menu-toggle" aria-label="Open navigation" aria-controls="site-navigation" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(true)}>☰<span>Menu</span></button>
      <main id="main-content" className="main" tabIndex="-1">
        <Header view={view} />
        <Suspense fallback={<div className="page-loading" role="status" aria-live="polite">Loading learning content…</div>}>
          <Page {...pageProps} />
        </Suspense>
      </main>
    </div>
  );
}
