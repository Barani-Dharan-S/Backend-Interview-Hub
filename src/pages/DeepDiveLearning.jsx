import LearningPage from "../components/LearningPage";
import { deepDiveLessons } from "../data/deepDiveLessons";
import { deepDiveLabs } from "../data/deepDiveLabs";

const config = {
  label: "Deep Learning & Architecture", pill: "V21 · DEEP LEARNING & ARCHITECTURE", hero: ["Understand deeper.", "Connect the system."],
  description: "Go beneath the existing tracks: internals, trade-offs, production behavior, failure modes and cross-stack reasoning. The goal is knowledge you can derive and explain—not evaluation.", flow: ["Understand", "Implement", "Connect", "Break", "Recover", "Explain"], placeholder: "Search internals, transactions, Kafka, React, Kubernetes, security, observability...",
  lessonIcon: "🧠", lessonTab: "Deep Dive Lessons", labIcon: "🛠", labTab: "Integration Labs",
  lessonMeta: "Deep Learning & Architecture", labMeta: "Integration Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "LAB STEPS / COMMANDS", labTrapsLabel: "COMMON TRAPS",
  lessons: deepDiveLessons, labs: deepDiveLabs,
};

export default function DeepDiveLearning() {
  return <LearningPage config={config} />;
}
