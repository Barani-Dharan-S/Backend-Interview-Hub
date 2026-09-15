import LearningPage from "../components/LearningPage";
import { dockerLessons } from "../data/dockerLessons";
import { dockerLabs } from "../data/dockerLabs";

const config = {
  label: "Docker", pill: "V14 · DOCKER ENGINEERING", hero: ["Package it.", "Run it. Debug it."],
  description: "Learn Docker from container fundamentals to production image design, networking, Compose, security, troubleshooting, and CI/CD artifact flow.", flow: ["Learn", "Build", "Run", "Break", "Debug", "Explain"], placeholder: "Search Docker topics, commands, problems...",
  lessonIcon: "🏗", lessonTab: "Docker Lessons", labIcon: "🛠", labTab: "Docker Labs",
  lessonMeta: "Docker", labMeta: "Docker Lab",
  labFirstLabel: "OBJECTIVE", labSecondLabel: "IMPLEMENTATION", labThirdLabel: "STARTER COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: dockerLessons, labs: dockerLabs,
};

export default function DockerLearning() {
  return <LearningPage config={config} />;
}
