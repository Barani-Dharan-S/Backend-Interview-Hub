import LearningPage from "../components/LearningPage";
import { cloudLessons } from "../data/cloudLessons";
import { cloudLabs } from "../data/cloudLabs";

const config = {
  label: "Cloud", pill: "V19 · CLOUD & DEPLOYMENT ENGINEERING", hero: ["Deploy the system.", "Operate with confidence."],
  description: "Master cloud and deployment engineering from networking and IAM through compute, containers, databases, load balancing, DNS, observability, Kubernetes, secure CI/CD, progressive delivery, disaster recovery and production architecture.", flow: ["Code", "Build", "Registry", "Cloud", "Deploy", "Observe", "Recover"], placeholder: "Search AWS, networking, IAM, Docker, EKS, RDS, deployment, observability...",
  lessonIcon: "☁", lessonTab: "Cloud Lessons", labIcon: "🛠", labTab: "Production Labs",
  lessonMeta: "Cloud", labMeta: "Cloud Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "GOAL / APPROACH", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: cloudLessons, labs: cloudLabs,
};

export default function CloudLearning() {
  return <LearningPage config={config} />;
}
