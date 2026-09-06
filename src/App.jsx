import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Questions from "./pages/Questions";
import { questions } from "./data/index";
import { useTheme } from "./hooks/useProgress";

export default function App() {
  const [topic, setTopic] = useState("all");
  const [dark, setDark] = useTheme();
  return (
    <div className={dark ? "app dark" : "app light"}>
      <Sidebar topic={topic} setTopic={setTopic} dark={dark} setDark={setDark} />
      <main className="main">
        <Header />
        <Questions questions={questions} topic={topic} setTopic={setTopic} />
      </main>
    </div>
  );
}
