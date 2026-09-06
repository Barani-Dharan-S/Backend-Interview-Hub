import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Questions from "./pages/Questions";
import Roadmap from "./pages/Roadmap";
import { questions } from "./data/index";
import { useTheme } from "./hooks/useProgress";

export default function App() {
  const [view, setView] = useState("roadmap");
  const [topic, setTopic] = useState("all");
  const [subtopic, setSubtopic] = useState("all");
  const [dark, setDark] = useTheme();

  const openTopic = (nextTopic, nextSubtopic = "all") => {
    setTopic(nextTopic);
    setSubtopic(nextSubtopic);
    setView("questions");
  };

  return (
    <div className={dark ? "app dark" : "app light"}>
      <Sidebar view={view} setView={setView} topic={topic} setTopic={openTopic} dark={dark} setDark={setDark} />
      <main className="main">
        <Header view={view} />
        {view === "roadmap" ? <Roadmap questions={questions} onTopic={openTopic} /> : <Questions questions={questions} topic={topic} subtopic={subtopic} setSubtopic={setSubtopic} />}
      </main>
    </div>
  );
}
