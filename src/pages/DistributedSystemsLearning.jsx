import LearningPage from "../components/LearningPage";
import { distributedSystemsLessons } from "../data/distributedSystemsLessons";
import { distributedSystemsLabs } from "../data/distributedSystemsLabs";

const config = {
  label: "Distributed Systems", pill: "V23 · DISTRIBUTED SYSTEMS & PRODUCTION REASONING", hero: ["Reason about the system.", "Predict the failure."],
  description: "Connect React, Spring Boot, databases, Kafka, Kubernetes, cloud and delivery into one mental model. Learn to reason from symptoms to mechanisms, trade-offs and safe recovery.", flow: ["Observe", "Model", "Trace", "Hypothesize", "Mitigate", "Verify"], placeholder: "Search retries, Saga, outbox, Kafka, SLO, capacity, caching, Kubernetes...",
  lessonIcon: "🌐", lessonTab: "Distributed Reasoning", labIcon: "🚨", labTab: "Production Scenarios",
  lessonMeta: "Distributed Systems", labMeta: "Production Lab",
  labFirstLabel: "SITUATION", labSecondLabel: "SYSTEM MECHANISM", labThirdLabel: "TRACE / IMPLEMENTATION", labTrapsLabel: "COMMON TRAPS",
  lessons: distributedSystemsLessons, labs: distributedSystemsLabs,
};

export default function DistributedSystemsLearning() {
  return <LearningPage config={config} />;
}
