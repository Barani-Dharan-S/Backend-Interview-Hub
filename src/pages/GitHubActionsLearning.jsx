import LearningPage from "../components/LearningPage";
import { githubActionsLessons } from "../data/githubActionsLessons";
import { githubActionsLabs } from "../data/githubActionsLabs";

const config = {
  label: "GitHub Actions", pill: "V18 · GITHUB ACTIONS ENGINEERING", hero: ["Automate the path.", "Ship with confidence."],
  description: "Master GitHub Actions from workflow fundamentals through secure CI, Docker publishing, Kubernetes delivery, reusable workflows, OIDC, supply-chain security, progressive delivery, debugging and production migration from Jenkins.", flow: ["Code", "Trigger", "Build", "Test", "Scan", "Publish", "Deploy", "Verify"], placeholder: "Search Actions workflows, YAML, security, Docker, Kubernetes...",
  lessonIcon: "⚡", lessonTab: "GitHub Actions Lessons", labIcon: "🛠", labTab: "GitHub Actions Labs",
  lessonMeta: "GitHub Actions", labMeta: "Pipeline Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: githubActionsLessons, labs: githubActionsLabs,
};

export default function GitHubActionsLearning() {
  return <LearningPage config={config} />;
}
