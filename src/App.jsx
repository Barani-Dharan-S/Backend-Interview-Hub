import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Questions from "./pages/Questions";
import Roadmap from "./pages/Roadmap";
import ReactLearning from "./pages/ReactLearning";
import JavaScriptLearning from "./pages/JavaScriptLearning";
import FullStackLearning from "./pages/FullStackLearning";
import FullStackScenarios from "./pages/FullStackScenarios";
import PracticalLabs from "./pages/PracticalLabs";
import DockerLearning from "./pages/DockerLearning";
import KubernetesLearning from "./pages/KubernetesLearning";
import CICDLearning from "./pages/CICDLearning";
import JenkinsLearning from "./pages/JenkinsLearning";
import GitHubActionsLearning from "./pages/GitHubActionsLearning";
import CloudLearning from "./pages/CloudLearning";
import { questions } from "./data/index";
import { useTheme } from "./hooks/useProgress";

export default function App() {
  const [view, setView] = useState("roadmap");
  const [topic, setTopic] = useState("all");
  const [subtopic, setSubtopic] = useState("all");
  const [dark, setDark] = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openTopic = (nextTopic, nextSubtopic = "all") => {
    setTopic(nextTopic);
    setSubtopic(nextSubtopic);
    setView("questions");
  };

  return (
    <div className={dark ? "app dark" : "app light"}>
      <Sidebar view={view} setView={setView} topic={topic} setTopic={openTopic} dark={dark} setDark={setDark} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button className="menu-toggle" aria-label="Open navigation" onClick={() => setSidebarOpen(true)}>☰<span>Menu</span></button>
      <main className="main">
        <Header view={view} />
        {view === "roadmap" ? <Roadmap questions={questions} onTopic={openTopic} /> : view === "react" ? <ReactLearning /> : view === "javascript" ? <JavaScriptLearning /> : view === "fullstack" ? <FullStackLearning /> : view === "scenarios" ? <FullStackScenarios /> : view === "labs" ? <PracticalLabs /> : view === "docker" ? <DockerLearning /> : view === "kubernetes" ? <KubernetesLearning /> : view === "cicd" ? <CICDLearning /> : view === "jenkins" ? <JenkinsLearning /> : view === "github-actions" ? <GitHubActionsLearning /> : view === "cloud" ? <CloudLearning /> : <Questions questions={questions} topic={topic} subtopic={subtopic} setSubtopic={setSubtopic} />}
      </main>
    </div>
  );
}
