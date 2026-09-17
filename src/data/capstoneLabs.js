export const capstoneLabs = [
  {
    "id": "capstone-lab-001",
    "level": "L1",
    "title": "Build the production request path",
    "situation": "A React frontend and Spring Boot API must run behind an HTTPS edge.",
    "goal": "Deploy both workloads and verify browser → ingress → API → health path.",
    "steps": [
      "Build React assets",
      "Build Spring Boot image",
      "Deploy workloads",
      "Configure ingress",
      "Run browser smoke test"
    ],
    "commands": [
      "kubectl get pods,svc,ingress",
      "kubectl rollout status deployment/api"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-002",
    "level": "L1",
    "title": "Add PostgreSQL with safe configuration",
    "situation": "The API needs durable data without exposing the database publicly.",
    "goal": "Connect the API to a private PostgreSQL endpoint using runtime configuration and health checks.",
    "steps": [
      "Create database",
      "Configure private access",
      "Inject credentials",
      "Run migration",
      "Verify read/write"
    ],
    "commands": [
      "kubectl exec deploy/api -- printenv | grep DB_HOST",
      "psql \"$DATABASE_URL\" -c \"select 1\""
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-003",
    "level": "L2",
    "title": "Build a GitHub Actions delivery pipeline",
    "situation": "Every merge should produce one tested immutable container artifact.",
    "goal": "Build, test, scan and publish a commit-addressed image.",
    "steps": [
      "Trigger on PR/main",
      "Run tests",
      "Build image",
      "Scan image",
      "Push digest"
    ],
    "commands": [
      "docker build -t ghcr.io/org/api:$GITHUB_SHA .",
      "docker inspect ghcr.io/org/api:$GITHUB_SHA"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-004",
    "level": "L2",
    "title": "Deploy to Kubernetes from Actions",
    "situation": "A trusted image must move from registry to staging automatically.",
    "goal": "Use OIDC and a narrowly scoped deployment identity to update the staging workload.",
    "steps": [
      "Configure OIDC trust",
      "Authenticate",
      "Update image",
      "Wait for rollout",
      "Smoke test"
    ],
    "commands": [
      "kubectl set image deployment/api api=ghcr.io/org/api:$GITHUB_SHA",
      "kubectl rollout status deployment/api"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-005",
    "level": "L2",
    "title": "Implement canary release",
    "situation": "A new API version needs controlled production exposure.",
    "goal": "Expose a small traffic slice and promote only when health gates pass.",
    "steps": [
      "Deploy candidate",
      "Route 5%",
      "Observe",
      "Promote to 25%",
      "Abort on threshold"
    ],
    "commands": [
      "# conceptual: 5% → 25% → 50% → 100%"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-006",
    "level": "L2",
    "title": "Debug a production 502",
    "situation": "Users report 502 after an ingress change.",
    "goal": "Find the first failing boundary and restore service without guessing.",
    "steps": [
      "Check ingress",
      "Check service endpoints",
      "Check targetPort",
      "Check pod readiness",
      "Validate listener"
    ],
    "commands": [
      "kubectl describe ingress api",
      "kubectl get endpoints api",
      "kubectl logs deploy/api --tail=100"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-007",
    "level": "L2",
    "title": "Debug CrashLoopBackOff",
    "situation": "A new API pod restarts continuously.",
    "goal": "Use events, previous logs, probes and configuration to identify the cause.",
    "steps": [
      "Inspect events",
      "Read previous logs",
      "Check env/secret",
      "Check probes",
      "Roll back if needed"
    ],
    "commands": [
      "kubectl logs pod/api-xxx --previous",
      "kubectl describe pod api-xxx"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-008",
    "level": "L2",
    "title": "Handle database saturation",
    "situation": "PostgreSQL CPU and connections spike after a release.",
    "goal": "Protect the database and identify the query/concurrency regression.",
    "steps": [
      "Check DB metrics",
      "Inspect pool",
      "Find slow queries",
      "Reduce concurrency",
      "Verify recovery"
    ],
    "commands": [
      "SELECT * FROM pg_stat_activity;",
      "# inspect query plan with EXPLAIN (ANALYZE, BUFFERS)"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-009",
    "level": "L2",
    "title": "Recover from bad deployment",
    "situation": "Error rate rises immediately after production rollout.",
    "goal": "Pause promotion and roll back the immutable artifact while preserving evidence.",
    "steps": [
      "Freeze rollout",
      "Check error/trace metrics",
      "Rollback",
      "Verify recovery",
      "Capture incident timeline"
    ],
    "commands": [
      "kubectl rollout undo deployment/api",
      "kubectl rollout status deployment/api"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-010",
    "level": "L2",
    "title": "Perform backward-compatible DB migration",
    "situation": "Two application versions coexist during a rolling deployment.",
    "goal": "Expand schema, deploy compatible code, backfill and contract later.",
    "steps": [
      "Add nullable/new structure",
      "Deploy dual-read/write code",
      "Backfill",
      "Verify",
      "Remove old path later"
    ],
    "commands": [
      "ALTER TABLE orders ADD COLUMN status_v2 text;"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-011",
    "level": "L2",
    "title": "Trace a slow request",
    "situation": "Users report high p95 latency but CPU is normal.",
    "goal": "Use a trace to locate the slow downstream operation.",
    "steps": [
      "Capture trace",
      "Break down spans",
      "Check DB/dependency",
      "Fix bottleneck",
      "Verify p95"
    ],
    "commands": [
      "# trace: React → API → service → DB",
      "EXPLAIN (ANALYZE, BUFFERS) ..."
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-012",
    "level": "L3",
    "title": "Simulate node failure",
    "situation": "A Kubernetes node becomes unavailable.",
    "goal": "Verify replica rescheduling and data/service continuity.",
    "steps": [
      "Drain/fail node in test",
      "Observe scheduling",
      "Check service endpoints",
      "Validate persistent data",
      "Measure recovery"
    ],
    "commands": [
      "kubectl get nodes",
      "kubectl get pods -o wide",
      "kubectl get events --sort-by=.lastTimestamp"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-013",
    "level": "L3",
    "title": "Test graceful shutdown",
    "situation": "A rolling deployment is dropping long-running requests.",
    "goal": "Implement readiness-first shutdown and verify in-flight request behavior.",
    "steps": [
      "Enable readiness",
      "Configure termination grace",
      "Send long request",
      "Roll deployment",
      "Verify completion"
    ],
    "commands": [
      "kubectl rollout restart deployment/api",
      "kubectl describe pod api-xxx"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-014",
    "level": "L3",
    "title": "Secure production identities",
    "situation": "CI and pods currently use broad credentials.",
    "goal": "Replace long-lived keys and broad roles with scoped identities.",
    "steps": [
      "Inventory permissions",
      "Create OIDC trust",
      "Scope deployment role",
      "Create workload identity",
      "Test denied actions"
    ],
    "commands": [
      "aws sts get-caller-identity",
      "kubectl auth can-i get secrets"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-015",
    "level": "L3",
    "title": "Build observability dashboard",
    "situation": "The team cannot correlate deployments with user impact.",
    "goal": "Create a minimum dashboard and alerts for traffic, errors, latency and saturation.",
    "steps": [
      "Choose RED metrics",
      "Add infrastructure signals",
      "Add deployment markers",
      "Create alerts",
      "Test alert path"
    ],
    "commands": [
      "rate(http_requests_total[5m])",
      "histogram_quantile(0.95, ...)"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-016",
    "level": "L3",
    "title": "Disaster recovery drill",
    "situation": "The primary database is unavailable.",
    "goal": "Execute the documented recovery path and measure RTO/RPO.",
    "steps": [
      "Declare incident",
      "Validate backup/replica",
      "Restore/fail over",
      "Repoint application",
      "Measure RTO/RPO"
    ],
    "commands": [
      "# record recovery start/end timestamps",
      "SELECT now();"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-017",
    "level": "L3",
    "title": "Cost optimization review",
    "situation": "Cloud cost has increased without matching traffic growth.",
    "goal": "Find waste while preserving SLOs.",
    "steps": [
      "Break down spend",
      "Check utilization",
      "Right-size",
      "Review storage lifecycle",
      "Validate after change"
    ],
    "commands": [
      "aws ce get-cost-and-usage --time-period Start=...",
      "kubectl top pods"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-018",
    "level": "L3",
    "title": "Production security incident",
    "situation": "A CI credential may have been exposed.",
    "goal": "Contain, rotate, audit and validate the affected path.",
    "steps": [
      "Disable/rotate credential",
      "Review workflow logs",
      "Check artifact provenance",
      "Audit cloud actions",
      "Restore least privilege"
    ],
    "commands": [
      "git log --all -- .github/workflows",
      "aws cloudtrail lookup-events ..."
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-019",
    "level": "L3",
    "title": "Design the complete capstone",
    "situation": "Multiple teams need independent releases for React/Spring Boot services.",
    "goal": "Design a secure, observable, recoverable platform with clear ownership.",
    "steps": [
      "Define boundaries",
      "Choose cloud primitives",
      "Define delivery",
      "Define failure handling",
      "Define SLOs/runbooks"
    ],
    "commands": [
      "GitHub → Actions → Registry → Kubernetes → DB → Observability"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  },
  {
    "id": "capstone-lab-020",
    "level": "L3",
    "title": "Incident interview drill",
    "situation": "An interviewer gives a cascading failure with incomplete information.",
    "goal": "Explain your diagnosis, mitigation, evidence and prevention in a structured answer.",
    "steps": [
      "Clarify impact",
      "State hypothesis",
      "Collect evidence",
      "Mitigate",
      "Prevent recurrence"
    ],
    "commands": [
      "impact → evidence → mitigation → root cause → prevention"
    ],
    "delivery": "I would execute this as a controlled production-style exercise: establish impact, gather evidence, make the smallest safe change, verify recovery and capture what we learned.",
    "followups": [
      "What would you verify first?",
      "How would you prevent recurrence?"
    ],
    "followupAnswers": [
      "I start at the first observable boundary: user impact, workload state, routing, dependency health and recent changes, then narrow using evidence.",
      "I add the appropriate guardrail—test, alert, policy, rollout gate, capacity control or runbook—based on the failure mechanism rather than the symptom."
    ],
    "traps": [
      "Do not make multiple unrelated changes before you know which one fixed the issue."
    ]
  }
];
