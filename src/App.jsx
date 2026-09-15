import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useTheme } from './hooks/useProgress';
import { routeForView, useAppRoute, viewFromPath } from './router';
import { logMeasure, mark } from './utils/performance';

const Roadmap = lazy(() => import('./pages/BackendRoadmap'));
const Questions = lazy(() => import('./pages/BackendQuestions'));
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
  const view = initialView;

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
    ? { onTopic: openTopic }
    : view === 'questions'
      ? { topic, subtopic, setSubtopic }
      : {};

  useEffect(() => {
    mark(`route-${view}-paint`);
    logMeasure(`route ${view} commit`, `route-${view}-start`, `route-${view}-paint`);
  }, [view]);

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <Sidebar view={view} setView={openView} topic={topic} setTopic={openTopic} dark={dark} setDark={setDark} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button className="menu-toggle" aria-label="Open navigation" onClick={() => setSidebarOpen(true)}>☰<span>Menu</span></button>
      <main className="main">
        <Header view={view} />
        <Suspense fallback={<div className="page-loading" role="status" aria-live="polite">Loading learning content…</div>}>
          <Page {...pageProps} />
        </Suspense>
      </main>
    </div>
  );
}
