export const distributedSystemsLabs = [
  {
    "id": "dslab-001",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Trace a slow checkout",
    "situation": "p99 checkout latency increased after a new downstream call.",
    "goal": "Build a critical-path timeline from gateway to DB and identify the latency budget consumer.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-002",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Survive a payment retry storm",
    "situation": "A dependency times out and callers retry aggressively.",
    "goal": "Quantify retry amplification and design deadlines, backoff, jitter and a circuit breaker.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-003",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Make an event consumer idempotent",
    "situation": "The same order event is delivered twice.",
    "goal": "Use a durable event ID/inbox or business uniqueness guard so the second delivery is harmless.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-004",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Design an order Saga",
    "situation": "Order, payment and inventory are separate services.",
    "goal": "Define local transactions, events and compensating actions without a global database transaction.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-005",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Implement an outbox flow",
    "situation": "Order creation sometimes succeeds but its Kafka event is missing.",
    "goal": "Place the event in an outbox in the same DB transaction and publish asynchronously.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-006",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Diagnose Kafka backlog",
    "situation": "Consumer lag grows while producer traffic is stable.",
    "goal": "Compare arrival and processing rates, partition assignment and consumer saturation.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-007",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Diagnose DB pool exhaustion",
    "situation": "Requests wait for connections and p99 spikes.",
    "goal": "Correlate pool pending/active metrics with transaction duration, query latency and DB capacity.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-008",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Debug a Kubernetes 502",
    "situation": "Ingress returns 502 while Pods appear Running.",
    "goal": "Trace ingress -> Service -> endpoints -> Pod readiness and application listener.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-009",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Perform a safe schema rollout",
    "situation": "A new release requires a column that old Pods do not know about.",
    "goal": "Use expand-and-contract so old and new versions can coexist during rollout.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-010",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Design graceful degradation",
    "situation": "Recommendation service is down but checkout must remain available.",
    "goal": "Separate critical from optional paths and define safe fallback behavior.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-011",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Analyze a canary",
    "situation": "Canary has similar average latency but worse p99 and conversion.",
    "goal": "Use tail and business metrics to decide pause, promote or rollback.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-012",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Build an incident timeline",
    "situation": "Errors started minutes after a deployment, but DB saturation appeared later.",
    "goal": "Correlate independent evidence and distinguish trigger from root cause.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-013",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Reason about capacity",
    "situation": "Traffic doubled and latency increased nonlinearly.",
    "goal": "Apply Little\u2019s Law and identify the first saturated resource.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-014",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Design rate limiting",
    "situation": "A public endpoint is exhausting application threads.",
    "goal": "Choose token bucket limits, identity dimensions and a safe rejection policy.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-015",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Recover from partial failure",
    "situation": "Service A commits before Service B times out.",
    "goal": "Define retry/idempotency/compensation behavior for the workflow.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-016",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Validate disaster recovery",
    "situation": "A backup job reports success but restore has never been tested.",
    "goal": "Perform a restore rehearsal and measure actual RTO/RPO.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-017",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Trace cross-stack authentication",
    "situation": "React receives 401 after a backend deployment.",
    "goal": "Follow token issuance, browser storage/headers, gateway and Spring Security validation.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-018",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Prove immutable deployment",
    "situation": "Production behavior differs from staging despite the same commit.",
    "goal": "Compare artifact/image digests and deployment manifests rather than source branches.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-019",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Write a production runbook",
    "situation": "An on-call engineer sees elevated latency with no obvious root cause.",
    "goal": "Create evidence-first checks, stop conditions, mitigations and verification steps.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  },
  {
    "id": "dslab-020",
    "level": "L3",
    "topic": "Distributed Systems & Production",
    "title": "Explain the system under a new constraint",
    "situation": "Traffic becomes 10x while consistency requirements tighten.",
    "goal": "Re-derive the architecture from constraints and explain the changed trade-offs.",
    "steps": [
      "State the symptom and invariant at risk.",
      "Map the request/data/dependency path.",
      "Collect direct evidence before changing configuration.",
      "Apply the smallest safe mitigation.",
      "Verify the original symptom and the protected invariant."
    ],
    "commands": [
      "curl -i <endpoint>",
      "kubectl get pods,svc,endpoints",
      "kubectl describe <resource>",
      "check application metrics/logs/traces"
    ],
    "delivery": "I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.",
    "followups": [
      "What evidence would prove your hypothesis?",
      "What would you change if the first fix did not work?"
    ],
    "followupAnswers": [
      "I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.",
      "I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect."
    ],
    "traps": [
      "Jumping to the most familiar technology as the root cause.",
      "Declaring recovery without validating the original user journey and system invariant."
    ]
  }
];
