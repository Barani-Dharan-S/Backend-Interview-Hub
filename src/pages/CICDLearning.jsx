import LearningPage from "../components/LearningPage";
import { cicdLessons } from "../data/cicdLessons";
import { cicdLabs } from "../data/cicdLabs";

const config = {
  label: "CI/CD", pill: "V16 · CI/CD ENGINEERING", hero: ["Automate the path.", "Ship with confidence."],
  description: "Build reliable delivery pipelines from commit through testing, scanning, artifact publishing, deployment, verification and rollback.", flow: ["Commit", "Build", "Test", "Scan", "Publish", "Deploy", "Verify"], placeholder: "Search CI/CD pipelines, artifacts, security, deployment...",
  lessonIcon: "⚙", lessonTab: "CI/CD Lessons", labIcon: "🛠", labTab: "Pipeline Labs",
  lessonMeta: "CI/CD", labMeta: "Pipeline Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: cicdLessons, labs: cicdLabs,
};

export default function CICDLearning() {
  return <LearningPage config={config} />;
}
