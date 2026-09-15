import LearningPage from "../components/LearningPage";
import { capstoneLessons } from "../data/capstoneLessons";
import { capstoneLabs } from "../data/capstoneLabs";

const config = {
  label: "Production Engineering", pill: "V20 · END-TO-END PRODUCTION ENGINEERING", hero: ["Build it.", "Break it. Operate it."],
  description: "Bring React, Spring Boot, PostgreSQL, Docker, Kubernetes, GitHub Actions and cloud deployment together into one production engineering capstone. Learn to design, deploy, observe, debug, recover and explain the system under failure.", flow: ["Build", "Test", "Ship", "Deploy", "Observe", "Break", "Recover", "Explain"], placeholder: "Search architecture, Kubernetes, AWS, rollback, database, observability, incidents...",
  lessonIcon: "🏗", lessonTab: "Production Lessons", labIcon: "🛠", labTab: "Capstone Labs",
  lessonMeta: "Production Engineering", labMeta: "Capstone Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: capstoneLessons, labs: capstoneLabs,
};

export default function ProductionEngineeringLearning() {
  return <LearningPage config={config} />;
}
