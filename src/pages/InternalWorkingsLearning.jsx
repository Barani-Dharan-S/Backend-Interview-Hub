import LearningPage from "../components/LearningPage";
import { internalWorkingsLessons } from "../data/internalWorkingsLessons";
import { internalWorkingsLabs } from "../data/internalWorkingsLabs";

const config = {
  label: "Internal Workings", pill: "V22 · INTERNAL WORKINGS & SYSTEM BEHAVIOR", hero: ["Observe the mechanism.", "Predict the behavior."],
  description: "Trace what actually happens inside the JVM, Spring, Hibernate, PostgreSQL, Kafka, React, Docker, Kubernetes, CI/CD and AWS.", flow: ["Observe", "Model", "Trace", "Predict", "Debug", "Explain"], placeholder: "Search JVM, Spring, Hibernate, PostgreSQL, Kafka, React, Docker, Kubernetes...",
  lessonIcon: "⚙", lessonTab: "Internal Lessons", labIcon: "🛠", labTab: "Behavior Labs",
  lessonMeta: "Internal Workings", labMeta: "Behavior Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "LAB STEPS / COMMANDS", labTrapsLabel: "COMMON TRAPS",
  lessons: internalWorkingsLessons, labs: internalWorkingsLabs,
};

export default function InternalWorkingsLearning() {
  return <LearningPage config={config} />;
}
