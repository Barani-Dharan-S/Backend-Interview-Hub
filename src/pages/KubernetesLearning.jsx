import LearningPage from "../components/LearningPage";
import { kubernetesLessons } from "../data/kubernetesLessons";
import { kubernetesLabs } from "../data/kubernetesLabs";

const config = {
  label: "Kubernetes", pill: "V15 · KUBERNETES ENGINEERING", hero: ["Deploy it.", "Scale it. Debug it."],
  description: "Learn Kubernetes from Pods and Deployments through networking, security, storage, scaling, rollout strategy, incident debugging, and production architecture.", flow: ["Learn", "Deploy", "Scale", "Break", "Debug", "Explain"], placeholder: "Search Kubernetes topics, kubectl commands, incidents...",
  lessonIcon: "☸", lessonTab: "Kubernetes Lessons", labIcon: "🛠", labTab: "Kubernetes Labs",
  lessonMeta: "Kubernetes", labMeta: "Kubernetes Lab",
  labFirstLabel: "OBJECTIVE", labSecondLabel: "IMPLEMENTATION", labThirdLabel: "STEPS / COMMANDS", labTrapsLabel: "INTERVIEW TRAPS",
  lessons: kubernetesLessons, labs: kubernetesLabs,
};

export default function KubernetesLearning() {
  return <LearningPage config={config} />;
}
