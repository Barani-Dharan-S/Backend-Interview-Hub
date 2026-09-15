import LearningPage from "../components/LearningPage";
import { jenkinsLessons } from "../data/jenkinsLessons";
import { jenkinsLabs } from "../data/jenkinsLabs";

const config = {
  label: "Jenkins", pill: "V17 · JENKINS ENGINEERING", hero: ["Automate it.", "Control the path to production."],
  description: "Master Jenkins from pipeline fundamentals through secure agents, shared libraries, Docker, Kubernetes, progressive delivery, troubleshooting, governance and production CI/CD architecture.", flow: ["Commit", "Build", "Test", "Scan", "Publish", "Deploy", "Verify"], placeholder: "Search Jenkins topics, Jenkinsfile, commands, scenarios...",
  lessonIcon: "🔧", lessonTab: "Jenkins Lessons", labIcon: "🛠", labTab: "Jenkins Labs",
  lessonMeta: "Jenkins", labMeta: "Jenkins Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: jenkinsLessons, labs: jenkinsLabs,
};

export default function JenkinsLearning() {
  return <LearningPage config={config} />;
}
