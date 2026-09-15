export const capstoneLessons = [
  {
    "id": "capstone-001",
    "level": "L1",
    "topic": "Foundations",
    "title": "What does production-ready mean?",
    "what": "A production-ready system is deployable, observable, secure, resilient and supportable under expected load and failure.",
    "how": "I use explicit readiness criteria: health checks, safe configuration, least privilege, automated delivery, telemetry, rollback, capacity and runbooks.",
    "code": "readiness = security + reliability + observability + operability + delivery",
    "delivery": "I define production readiness as more than \"it works\": the system must be safe to release, observable when it fails, and recoverable when dependencies break.",
    "followups": [
      "Who signs off readiness?",
      "What is your minimum checklist?"
    ],
    "followupAnswers": [
      "Ownership stays with the service team; platform and security provide guardrails.",
      "I require health, alerts, rollback, secrets, resource limits, backup/recovery and a tested deployment path."
    ],
    "traps": [
      "Do not equate a successful deployment with production readiness."
    ]
  },
  {
    "id": "capstone-002",
    "level": "L1",
    "topic": "Architecture",
    "title": "How do the full-stack components fit together?",
    "what": "The browser serves React, the API handles business logic, PostgreSQL persists durable data, Kubernetes runs workloads, and cloud networking exposes the system safely.",
    "how": "Keep boundaries explicit: DNS/LB at the edge, frontend/API workloads behind controlled ingress, database private, telemetry across every layer.",
    "code": "Browser → DNS/LB → React/API → PostgreSQL\n                     ↘ telemetry",
    "delivery": "I explain the system as request path plus control plane: users travel through edge, application and data layers while CI/CD, IAM and observability govern them.",
    "followups": [
      "Why keep the database private?",
      "Where does TLS terminate?"
    ],
    "followupAnswers": [
      "It reduces attack surface; only application subnets/security groups should reach the database.",
      "Usually at the load balancer/ingress, with encryption to the backend when required by policy."
    ],
    "traps": [
      "Do not put PostgreSQL directly on the public internet."
    ]
  },
  {
    "id": "capstone-003",
    "level": "L1",
    "topic": "Request Path",
    "title": "How do you trace a request from React to PostgreSQL?",
    "what": "Follow the request across browser, edge, API, service calls and database, using a correlation/trace ID.",
    "how": "Start at browser Network, then load balancer logs, application logs/traces, downstream spans and database metrics/query logs.",
    "code": "traceId=abc123\nReact → API → service → DB",
    "delivery": "I debug from the first failing boundary and use one trace identifier to connect frontend symptoms to backend and database evidence.",
    "followups": [
      "What if the trace is missing?",
      "Which layer do you inspect first?"
    ],
    "followupAnswers": [
      "Use access logs/request IDs and add propagation at the next boundary; fix instrumentation after mitigating the issue.",
      "Start with the client-visible failure and move inward rather than guessing at the database."
    ],
    "traps": [
      "Do not jump straight to the database because the user saw an API error."
    ]
  },
  {
    "id": "capstone-004",
    "level": "L1",
    "topic": "Networking",
    "title": "What is the role of DNS, load balancing and ingress?",
    "what": "DNS maps a name to an edge endpoint; the load balancer distributes traffic; ingress routes HTTP traffic to Kubernetes services.",
    "how": "Keep DNS stable while deployments change behind it; use health checks and explicit host/path routing.",
    "code": "app.example.com → ALB → Ingress → Service → Pod",
    "delivery": "I separate naming, traffic distribution and application routing so each layer has one clear responsibility.",
    "followups": [
      "DNS vs service discovery?",
      "What causes a 502?"
    ],
    "followupAnswers": [
      "DNS is client-facing name resolution; service discovery resolves internal service endpoints.",
      "Common causes include no healthy targets, bad service ports, ingress routing, or an application that is not accepting connections."
    ],
    "traps": [
      "Do not treat a 502 as proof that the application code is broken."
    ]
  },
  {
    "id": "capstone-005",
    "level": "L1",
    "topic": "Configuration",
    "title": "How should configuration and secrets flow to production?",
    "what": "Non-secret configuration can come from environment/config objects; credentials should come from a secret manager or Kubernetes Secret backed by controlled identity.",
    "how": "Separate config from images, inject at runtime, restrict access and rotate secrets without rebuilding images.",
    "code": "APP_ENV=prod\nDB_HOST=private-db\n# secret injected at runtime",
    "delivery": "I build one immutable artifact and supply environment-specific configuration at deployment time, with secrets sourced through controlled identity.",
    "followups": [
      "Why not bake secrets into Docker?",
      "How do you rotate a DB password?"
    ],
    "followupAnswers": [
      "Images are widely copied and cached; a baked secret is difficult to revoke safely.",
      "Update the secret, coordinate connection refresh if needed, validate health, then retire the old credential."
    ],
    "traps": [
      "Never commit production credentials to Git."
    ]
  },
  {
    "id": "capstone-006",
    "level": "L1",
    "topic": "Security",
    "title": "How do you design least privilege end to end?",
    "what": "Each human, workflow and workload receives only the permissions needed for its job.",
    "how": "Use separate identities, scoped cloud roles, Kubernetes service accounts/RBAC, protected environments and short-lived credentials.",
    "code": "GitHub OIDC → cloud role\nPod SA → scoped cloud permissions",
    "delivery": "I apply least privilege separately to developers, CI runners, Kubernetes workloads and databases rather than using one powerful account.",
    "followups": [
      "Why prefer OIDC?",
      "What is the risk of cluster-admin in CI?"
    ],
    "followupAnswers": [
      "OIDC can exchange a trusted workflow identity for short-lived cloud credentials without storing a long-lived secret.",
      "A compromised pipeline can control the entire cluster and all workloads."
    ],
    "traps": [
      "Do not solve deployment failures by granting admin everywhere."
    ]
  },
  {
    "id": "capstone-007",
    "level": "L1",
    "topic": "Observability",
    "title": "What are logs, metrics and traces for?",
    "what": "Logs explain events, metrics show trends and thresholds, and traces show request causality across services.",
    "how": "Use all three together: alert on metrics, inspect logs for details, and trace cross-service latency/error paths.",
    "code": "error_rate ↑ → traceId → logs → dependency metric",
    "delivery": "I use metrics to detect, traces to localize, and logs to explain. The combination shortens production diagnosis.",
    "followups": [
      "What should page an engineer?",
      "Why not rely only on logs?"
    ],
    "followupAnswers": [
      "Page on actionable symptoms such as sustained errors, latency or saturation tied to user impact.",
      "Logs are high-cardinality and expensive to aggregate; they are poor for broad trend detection."
    ],
    "traps": [
      "Do not create alerts for every log line."
    ]
  },
  {
    "id": "capstone-008",
    "level": "L1",
    "topic": "Reliability",
    "title": "What is graceful shutdown?",
    "what": "Graceful shutdown stops new traffic, allows in-flight work to finish within a deadline, and then terminates the process.",
    "how": "Use readiness removal, preStop/shutdown hooks and a termination grace period; make consumers stop safely too.",
    "code": "readiness=false\nstop accepting traffic\nfinish in-flight\nexit",
    "delivery": "I make shutdown a controlled state transition so rolling deployments do not drop active requests unnecessarily.",
    "followups": [
      "What happens to long requests?",
      "Why change readiness first?"
    ],
    "followupAnswers": [
      "Bound them with a timeout and decide whether to finish, retry or hand off based on operation semantics.",
      "It prevents new traffic from being sent to a process that is about to terminate."
    ],
    "traps": [
      "Do not assume SIGTERM instantly means all work is safely completed."
    ]
  },
  {
    "id": "capstone-009",
    "level": "L1",
    "topic": "Data",
    "title": "How do you make database changes safely during deployment?",
    "what": "Use backward-compatible migrations so old and new application versions can coexist during rollout.",
    "how": "Expand schema first, deploy code that can use both versions, backfill safely, then contract old structures after verification.",
    "code": "expand → deploy → backfill → verify → contract",
    "delivery": "I separate schema expansion from removal because Kubernetes rollouts can temporarily run mixed application versions.",
    "followups": [
      "What about destructive changes?",
      "How do you handle a long migration?"
    ],
    "followupAnswers": [
      "Delay destructive changes until all old readers/writers are gone and backups/recovery are validated.",
      "Run it as a controlled job, measure lock impact, batch work and avoid blocking critical traffic."
    ],
    "traps": [
      "Do not drop a column in the same release that stops using it."
    ]
  },
  {
    "id": "capstone-010",
    "level": "L1",
    "topic": "Delivery",
    "title": "What does build once, deploy many mean?",
    "what": "A single immutable artifact is promoted through environments rather than rebuilt for each environment.",
    "how": "Build and scan once, tag by immutable commit/digest, then promote the same bytes to staging and production.",
    "code": "build → scan → image@sha256:... → staging → prod",
    "delivery": "I want the exact artifact tested in staging to be the artifact running in production.",
    "followups": [
      "Why use digests?",
      "What if environment config differs?"
    ],
    "followupAnswers": [
      "A digest identifies immutable image content, avoiding mutable tag ambiguity.",
      "Inject configuration at runtime rather than changing the artifact."
    ],
    "traps": [
      "Do not rebuild the image separately for production."
    ]
  },
  {
    "id": "capstone-011",
    "level": "L2",
    "topic": "Architecture",
    "title": "Designing the capstone production architecture",
    "what": "Separate edge, application, data and observability planes; keep stateful systems private and make every dependency explicit.",
    "how": "I start with traffic flow, trust boundaries, state, failure domains and operational ownership before choosing services.",
    "code": "# Designing the capstone production architecture\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I start with traffic flow, trust boundaries, state, failure domains and operational ownership before choosing services.",
    "followups": [
      "What trade-off does this introduce?",
      "How would you validate it?"
    ],
    "followupAnswers": [
      "I would validate the design against traffic flow, failure domains, security boundaries, operational ownership and the team’s ability to support it.",
      "I avoid introducing a component unless it solves a measured requirement and has a clear owner."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-012",
    "level": "L2",
    "topic": "Architecture",
    "title": "Why use Kubernetes for the application layer?",
    "what": "Kubernetes provides scheduling, service discovery, rollout, self-healing and declarative workload management.",
    "how": "I use Kubernetes when the operational benefits justify its complexity; I would not introduce it merely because containers exist.",
    "code": "# Why use Kubernetes for the application layer?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I use Kubernetes when the operational benefits justify its complexity; I would not introduce it merely because containers exist.",
    "followups": [
      "What trade-off does this introduce?",
      "How would you validate it?"
    ],
    "followupAnswers": [
      "I would validate the design against traffic flow, failure domains, security boundaries, operational ownership and the team’s ability to support it.",
      "I avoid introducing a component unless it solves a measured requirement and has a clear owner."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-013",
    "level": "L2",
    "topic": "Architecture",
    "title": "Where should PostgreSQL run?",
    "what": "Prefer a managed database for production when organizational constraints allow it, using private networking, backups and HA features.",
    "how": "I keep the database lifecycle separate from stateless application scaling.",
    "code": "# Where should PostgreSQL run?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I keep the database lifecycle separate from stateless application scaling.",
    "followups": [
      "What trade-off does this introduce?",
      "How would you validate it?"
    ],
    "followupAnswers": [
      "I would validate the design against traffic flow, failure domains, security boundaries, operational ownership and the team’s ability to support it.",
      "I avoid introducing a component unless it solves a measured requirement and has a clear owner."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-014",
    "level": "L2",
    "topic": "Architecture",
    "title": "Where does Redis fit?",
    "what": "Redis is useful for caching, rate limiting, sessions or ephemeral coordination, but PostgreSQL remains the source of truth for durable business data.",
    "how": "I define the cache invalidation and failure behavior before adding Redis.",
    "code": "# Where does Redis fit?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I define the cache invalidation and failure behavior before adding Redis.",
    "followups": [
      "What trade-off does this introduce?",
      "How would you validate it?"
    ],
    "followupAnswers": [
      "I would validate the design against traffic flow, failure domains, security boundaries, operational ownership and the team’s ability to support it.",
      "I avoid introducing a component unless it solves a measured requirement and has a clear owner."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-015",
    "level": "L2",
    "topic": "Architecture",
    "title": "How do you avoid a single point of failure?",
    "what": "Spread stateless workloads across failure domains and use managed HA services where appropriate.",
    "how": "I identify each dependency and ask what happens if one instance, node, zone or dependency disappears.",
    "code": "# How do you avoid a single point of failure?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I identify each dependency and ask what happens if one instance, node, zone or dependency disappears.",
    "followups": [
      "What trade-off does this introduce?",
      "How would you validate it?"
    ],
    "followupAnswers": [
      "I would validate the design against traffic flow, failure domains, security boundaries, operational ownership and the team’s ability to support it.",
      "I avoid introducing a component unless it solves a measured requirement and has a clear owner."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-016",
    "level": "L2",
    "topic": "Performance",
    "title": "How do you debug high API latency?",
    "what": "Break latency into client, edge, application, downstream and database components using traces and metrics.",
    "how": "I compare p50/p95/p99 and identify where the latency budget is actually spent.",
    "code": "# How do you debug high API latency?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I compare p50/p95/p99 and identify where the latency budget is actually spent.",
    "followups": [
      "What evidence would you inspect?",
      "What is the common mistake?"
    ],
    "followupAnswers": [
      "I inspect traces, latency percentiles, saturation, dependency timings and database/query metrics before changing capacity.",
      "The common mistake is scaling the symptom before finding the bottleneck, which can increase cost without improving latency."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-017",
    "level": "L2",
    "topic": "Performance",
    "title": "What causes connection pool exhaustion?",
    "what": "Too many concurrent requests, slow queries, leaks, undersized pools or downstream saturation can exhaust connections.",
    "how": "I inspect active/idle connections, request concurrency and query latency before increasing pool size.",
    "code": "# What causes connection pool exhaustion?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I inspect active/idle connections, request concurrency and query latency before increasing pool size.",
    "followups": [
      "What evidence would you inspect?",
      "What is the common mistake?"
    ],
    "followupAnswers": [
      "I inspect traces, latency percentiles, saturation, dependency timings and database/query metrics before changing capacity.",
      "The common mistake is scaling the symptom before finding the bottleneck, which can increase cost without improving latency."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-018",
    "level": "L2",
    "topic": "Performance",
    "title": "How do you handle traffic spikes?",
    "what": "Scale stateless workloads, protect dependencies with limits/queues/caches and ensure database capacity is sufficient.",
    "how": "I prefer controlled backpressure over allowing every layer to overload simultaneously.",
    "code": "# How do you handle traffic spikes?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I prefer controlled backpressure over allowing every layer to overload simultaneously.",
    "followups": [
      "What evidence would you inspect?",
      "What is the common mistake?"
    ],
    "followupAnswers": [
      "I inspect traces, latency percentiles, saturation, dependency timings and database/query metrics before changing capacity.",
      "The common mistake is scaling the symptom before finding the bottleneck, which can increase cost without improving latency."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-019",
    "level": "L2",
    "topic": "Performance",
    "title": "When should you cache?",
    "what": "Cache expensive, repeatable reads with acceptable staleness and a clear invalidation strategy.",
    "how": "I measure cache hit rate and stale-data risk rather than adding caching by intuition.",
    "code": "# When should you cache?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I measure cache hit rate and stale-data risk rather than adding caching by intuition.",
    "followups": [
      "What evidence would you inspect?",
      "What is the common mistake?"
    ],
    "followupAnswers": [
      "I inspect traces, latency percentiles, saturation, dependency timings and database/query metrics before changing capacity.",
      "The common mistake is scaling the symptom before finding the bottleneck, which can increase cost without improving latency."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-020",
    "level": "L2",
    "topic": "Performance",
    "title": "How do you optimize a slow SQL query?",
    "what": "Inspect the execution plan, indexes, cardinality, joins, filtering and returned rows.",
    "how": "I change the query or index based on evidence from the plan, then verify under realistic load.",
    "code": "# How do you optimize a slow SQL query?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I change the query or index based on evidence from the plan, then verify under realistic load.",
    "followups": [
      "What evidence would you inspect?",
      "What is the common mistake?"
    ],
    "followupAnswers": [
      "I inspect traces, latency percentiles, saturation, dependency timings and database/query metrics before changing capacity.",
      "The common mistake is scaling the symptom before finding the bottleneck, which can increase cost without improving latency."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-021",
    "level": "L2",
    "topic": "Resilience",
    "title": "How do you prevent cascading failures?",
    "what": "Use timeouts, bounded retries, circuit breakers, bulkheads and load shedding around unreliable dependencies.",
    "how": "Every retry must have a budget and only retry operations that are safe to repeat.",
    "code": "# How do you prevent cascading failures?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "Every retry must have a budget and only retry operations that are safe to repeat.",
    "followups": [
      "What failure mode does it prevent?",
      "When would you not use it?"
    ],
    "followupAnswers": [
      "It should reduce the blast radius of a dependency or infrastructure failure; I validate that the system degrades instead of multiplying load.",
      "I would not add it when it masks a correctness problem or when retries/fallbacks can create unsafe duplicate effects."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-022",
    "level": "L2",
    "topic": "Resilience",
    "title": "How should retries be configured?",
    "what": "Use small bounded attempts with exponential backoff and jitter, respecting the end-to-end deadline.",
    "how": "I never add retries without considering whether the downstream service and operation are idempotent.",
    "code": "# How should retries be configured?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I never add retries without considering whether the downstream service and operation are idempotent.",
    "followups": [
      "What failure mode does it prevent?",
      "When would you not use it?"
    ],
    "followupAnswers": [
      "It should reduce the blast radius of a dependency or infrastructure failure; I validate that the system degrades instead of multiplying load.",
      "I would not add it when it masks a correctness problem or when retries/fallbacks can create unsafe duplicate effects."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-023",
    "level": "L2",
    "topic": "Resilience",
    "title": "What is a circuit breaker?",
    "what": "It stops repeated calls to a failing dependency, allowing recovery and protecting callers.",
    "how": "I configure open, half-open and close behavior around measured failure signals.",
    "code": "# What is a circuit breaker?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I configure open, half-open and close behavior around measured failure signals.",
    "followups": [
      "What failure mode does it prevent?",
      "When would you not use it?"
    ],
    "followupAnswers": [
      "It should reduce the blast radius of a dependency or infrastructure failure; I validate that the system degrades instead of multiplying load.",
      "I would not add it when it masks a correctness problem or when retries/fallbacks can create unsafe duplicate effects."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-024",
    "level": "L2",
    "topic": "Resilience",
    "title": "What is idempotency in payments or orders?",
    "what": "Repeating the same client request should not create duplicate business effects.",
    "how": "I use an idempotency key persisted with the result and enforce uniqueness at the data boundary.",
    "code": "# What is idempotency in payments or orders?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I use an idempotency key persisted with the result and enforce uniqueness at the data boundary.",
    "followups": [
      "What failure mode does it prevent?",
      "When would you not use it?"
    ],
    "followupAnswers": [
      "It should reduce the blast radius of a dependency or infrastructure failure; I validate that the system degrades instead of multiplying load.",
      "I would not add it when it masks a correctness problem or when retries/fallbacks can create unsafe duplicate effects."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-025",
    "level": "L2",
    "topic": "Resilience",
    "title": "How do you handle partial dependency failure?",
    "what": "Degrade optional features, use fallbacks where correct, and fail fast for mandatory dependencies.",
    "how": "I distinguish business-critical from optional dependencies instead of hiding every error.",
    "code": "# How do you handle partial dependency failure?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I distinguish business-critical from optional dependencies instead of hiding every error.",
    "followups": [
      "What failure mode does it prevent?",
      "When would you not use it?"
    ],
    "followupAnswers": [
      "It should reduce the blast radius of a dependency or infrastructure failure; I validate that the system degrades instead of multiplying load.",
      "I would not add it when it masks a correctness problem or when retries/fallbacks can create unsafe duplicate effects."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-026",
    "level": "L2",
    "topic": "Kubernetes",
    "title": "How do you debug CrashLoopBackOff?",
    "what": "Inspect pod events, previous container logs, exit codes, probes, configuration and resource limits.",
    "how": "I check the last terminated container and Kubernetes events before changing restart policy.",
    "code": "# How do you debug CrashLoopBackOff?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I check the last terminated container and Kubernetes events before changing restart policy.",
    "followups": [
      "What would you inspect first?",
      "What production guardrail matters?"
    ],
    "followupAnswers": [
      "I start with events, workload status, service endpoints, probe state and recent rollout history before changing manifests.",
      "A key guardrail is least-privilege RBAC plus readiness/resource controls so one bad workload cannot damage the cluster."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-027",
    "level": "L2",
    "topic": "Kubernetes",
    "title": "How do you debug a 502 through ingress?",
    "what": "Check ingress rules, service endpoints, target ports, readiness and application listeners.",
    "how": "I walk hop by hop: ingress → service → endpoints → pod → process.",
    "code": "# How do you debug a 502 through ingress?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I walk hop by hop: ingress → service → endpoints → pod → process.",
    "followups": [
      "What would you inspect first?",
      "What production guardrail matters?"
    ],
    "followupAnswers": [
      "I start with events, workload status, service endpoints, probe state and recent rollout history before changing manifests.",
      "A key guardrail is least-privilege RBAC plus readiness/resource controls so one bad workload cannot damage the cluster."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-028",
    "level": "L2",
    "topic": "Kubernetes",
    "title": "What happens when a node dies?",
    "what": "The control plane detects the failure and reschedules eligible workloads on healthy nodes; stateful recovery depends on storage and workload design.",
    "how": "I validate replica count, topology spread, disruption budgets and storage behavior for node loss.",
    "code": "# What happens when a node dies?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I validate replica count, topology spread, disruption budgets and storage behavior for node loss.",
    "followups": [
      "What would you inspect first?",
      "What production guardrail matters?"
    ],
    "followupAnswers": [
      "I start with events, workload status, service endpoints, probe state and recent rollout history before changing manifests.",
      "A key guardrail is least-privilege RBAC plus readiness/resource controls so one bad workload cannot damage the cluster."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-029",
    "level": "L2",
    "topic": "Kubernetes",
    "title": "How do you perform zero-downtime rollout?",
    "what": "Use multiple replicas, readiness probes, rolling updates and graceful termination, with rollback criteria.",
    "how": "I verify old and new versions can coexist before rollout.",
    "code": "# How do you perform zero-downtime rollout?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I verify old and new versions can coexist before rollout.",
    "followups": [
      "What would you inspect first?",
      "What production guardrail matters?"
    ],
    "followupAnswers": [
      "I start with events, workload status, service endpoints, probe state and recent rollout history before changing manifests.",
      "A key guardrail is least-privilege RBAC plus readiness/resource controls so one bad workload cannot damage the cluster."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-030",
    "level": "L2",
    "topic": "Kubernetes",
    "title": "Why use resource requests and limits?",
    "what": "Requests guide scheduling; limits bound resource consumption and can protect cluster capacity, though poor limits can cause throttling/OOM.",
    "how": "I set them from measured workload behavior and revisit them as traffic changes.",
    "code": "# Why use resource requests and limits?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I set them from measured workload behavior and revisit them as traffic changes.",
    "followups": [
      "What would you inspect first?",
      "What production guardrail matters?"
    ],
    "followupAnswers": [
      "I start with events, workload status, service endpoints, probe state and recent rollout history before changing manifests.",
      "A key guardrail is least-privilege RBAC plus readiness/resource controls so one bad workload cannot damage the cluster."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-031",
    "level": "L2",
    "topic": "Cloud",
    "title": "How do you secure AWS access from GitHub Actions?",
    "what": "Use GitHub OIDC to assume a narrowly scoped IAM role instead of storing long-lived AWS keys.",
    "how": "I restrict the role trust policy to the repository/branch or environment and give only deployment permissions.",
    "code": "# How do you secure AWS access from GitHub Actions?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I restrict the role trust policy to the repository/branch or environment and give only deployment permissions.",
    "followups": [
      "What is the security concern?",
      "What would you monitor?"
    ],
    "followupAnswers": [
      "The key concern is exposing more network or IAM permission than required; I keep the component private where possible and use scoped identities.",
      "I monitor utilization, error/latency, capacity and cost signals so security and availability decisions remain measurable."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-032",
    "level": "L2",
    "topic": "Cloud",
    "title": "How do you structure a VPC for the capstone?",
    "what": "Use public subnets only for internet-facing components and private subnets for application and database tiers.",
    "how": "I separate routing and security boundaries and avoid public database endpoints.",
    "code": "# How do you structure a VPC for the capstone?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I separate routing and security boundaries and avoid public database endpoints.",
    "followups": [
      "What is the security concern?",
      "What would you monitor?"
    ],
    "followupAnswers": [
      "The key concern is exposing more network or IAM permission than required; I keep the component private where possible and use scoped identities.",
      "I monitor utilization, error/latency, capacity and cost signals so security and availability decisions remain measurable."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-033",
    "level": "L2",
    "topic": "Cloud",
    "title": "How do you make the database highly available?",
    "what": "Use a managed HA deployment, automated backups, tested restore and a documented failover strategy.",
    "how": "HA is not just a checkbox; I test how the application behaves during failover.",
    "code": "# How do you make the database highly available?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "HA is not just a checkbox; I test how the application behaves during failover.",
    "followups": [
      "What is the security concern?",
      "What would you monitor?"
    ],
    "followupAnswers": [
      "The key concern is exposing more network or IAM permission than required; I keep the component private where possible and use scoped identities.",
      "I monitor utilization, error/latency, capacity and cost signals so security and availability decisions remain measurable."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-034",
    "level": "L2",
    "topic": "Cloud",
    "title": "How do you expose the application securely?",
    "what": "Use DNS to an HTTPS load balancer/ingress, restrict security groups, and keep internal services private.",
    "how": "I make the public surface as small as possible and terminate or pass TLS deliberately.",
    "code": "# How do you expose the application securely?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I make the public surface as small as possible and terminate or pass TLS deliberately.",
    "followups": [
      "What is the security concern?",
      "What would you monitor?"
    ],
    "followupAnswers": [
      "The key concern is exposing more network or IAM permission than required; I keep the component private where possible and use scoped identities.",
      "I monitor utilization, error/latency, capacity and cost signals so security and availability decisions remain measurable."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-035",
    "level": "L2",
    "topic": "Cloud",
    "title": "How do you control cloud cost?",
    "what": "Measure major cost drivers, right-size compute, use autoscaling, lifecycle storage and eliminate idle resources.",
    "how": "I optimize after understanding utilization and availability requirements, not by blindly choosing the cheapest tier.",
    "code": "# How do you control cloud cost?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I optimize after understanding utilization and availability requirements, not by blindly choosing the cheapest tier.",
    "followups": [
      "What is the security concern?",
      "What would you monitor?"
    ],
    "followupAnswers": [
      "The key concern is exposing more network or IAM permission than required; I keep the component private where possible and use scoped identities.",
      "I monitor utilization, error/latency, capacity and cost signals so security and availability decisions remain measurable."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-036",
    "level": "L2",
    "topic": "Security",
    "title": "How do you protect the supply chain?",
    "what": "Pin critical actions/dependencies, scan dependencies and images, restrict workflow permissions and verify artifacts.",
    "how": "I treat CI as production infrastructure because a compromised pipeline can ship trusted software.",
    "code": "# How do you protect the supply chain?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I treat CI as production infrastructure because a compromised pipeline can ship trusted software.",
    "followups": [
      "What happens if this control fails?",
      "How do you keep it least-privilege?"
    ],
    "followupAnswers": [
      "I design a fallback that fails closed for sensitive operations and emits enough telemetry to detect the control failure.",
      "I keep permissions narrowly scoped, prefer short-lived credentials and test the workflow with the smallest required role."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-037",
    "level": "L2",
    "topic": "Security",
    "title": "What should GitHub workflow permissions look like?",
    "what": "Grant only the repository permissions each job needs and use environment protection for sensitive deployment stages.",
    "how": "I default to read-only and elevate only the job that needs a specific write permission.",
    "code": "# What should GitHub workflow permissions look like?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I default to read-only and elevate only the job that needs a specific write permission.",
    "followups": [
      "What happens if this control fails?",
      "How do you keep it least-privilege?"
    ],
    "followupAnswers": [
      "I design a fallback that fails closed for sensitive operations and emits enough telemetry to detect the control failure.",
      "I keep permissions narrowly scoped, prefer short-lived credentials and test the workflow with the smallest required role."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-038",
    "level": "L2",
    "topic": "Security",
    "title": "How do you secure Kubernetes workloads?",
    "what": "Use non-root containers, restricted security contexts, RBAC, network policies, image scanning and secret controls.",
    "how": "I layer controls so compromising one pod does not grant broad cluster access.",
    "code": "# How do you secure Kubernetes workloads?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I layer controls so compromising one pod does not grant broad cluster access.",
    "followups": [
      "What happens if this control fails?",
      "How do you keep it least-privilege?"
    ],
    "followupAnswers": [
      "I design a fallback that fails closed for sensitive operations and emits enough telemetry to detect the control failure.",
      "I keep permissions narrowly scoped, prefer short-lived credentials and test the workflow with the smallest required role."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-039",
    "level": "L2",
    "topic": "Security",
    "title": "How do you manage secrets?",
    "what": "Store secrets in a managed secret store or protected CI/Kubernetes secret mechanism and rotate them.",
    "how": "Secrets should never appear in source, images, logs or command output.",
    "code": "# How do you manage secrets?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "Secrets should never appear in source, images, logs or command output.",
    "followups": [
      "What happens if this control fails?",
      "How do you keep it least-privilege?"
    ],
    "followupAnswers": [
      "I design a fallback that fails closed for sensitive operations and emits enough telemetry to detect the control failure.",
      "I keep permissions narrowly scoped, prefer short-lived credentials and test the workflow with the smallest required role."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-040",
    "level": "L2",
    "topic": "Delivery",
    "title": "How do you choose blue-green vs canary?",
    "what": "Blue-green switches between complete environments; canary gradually exposes traffic and observes health.",
    "how": "I choose based on rollback speed, infrastructure cost and whether traffic-level experimentation is useful.",
    "code": "# How do you choose blue-green vs canary?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I choose based on rollback speed, infrastructure cost and whether traffic-level experimentation is useful.",
    "followups": [
      "How do you roll it back?",
      "What signal gates promotion?"
    ],
    "followupAnswers": [
      "I keep the previous immutable artifact available and verify data/schema compatibility before relying on rollback.",
      "Promotion should be gated by user-impact signals such as error rate, latency and business health, not only rollout completion."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-041",
    "level": "L3",
    "topic": "Delivery",
    "title": "What makes a rollback safe?",
    "what": "The previous artifact must still be available and compatible with data/schema state.",
    "how": "I define rollback commands and data compatibility before deployment, not during an incident.",
    "code": "# What makes a rollback safe?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I define rollback commands and data compatibility before deployment, not during an incident.",
    "followups": [
      "How do you roll it back?",
      "What signal gates promotion?"
    ],
    "followupAnswers": [
      "I keep the previous immutable artifact available and verify data/schema compatibility before relying on rollback.",
      "Promotion should be gated by user-impact signals such as error rate, latency and business health, not only rollout completion."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-042",
    "level": "L3",
    "topic": "Delivery",
    "title": "How do you verify deployment success?",
    "what": "Check rollout status, readiness, smoke tests and user-facing error/latency metrics.",
    "how": "Deployment completion is a control-plane event; verification must include runtime health.",
    "code": "# How do you verify deployment success?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "Deployment completion is a control-plane event; verification must include runtime health.",
    "followups": [
      "How do you roll it back?",
      "What signal gates promotion?"
    ],
    "followupAnswers": [
      "I keep the previous immutable artifact available and verify data/schema compatibility before relying on rollback.",
      "Promotion should be gated by user-impact signals such as error rate, latency and business health, not only rollout completion."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-043",
    "level": "L3",
    "topic": "Delivery",
    "title": "How do you stop a bad progressive release?",
    "what": "Use explicit error/latency/business thresholds and automatically pause or rollback when they are exceeded.",
    "how": "I want abort criteria defined before the canary begins.",
    "code": "# How do you stop a bad progressive release?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I want abort criteria defined before the canary begins.",
    "followups": [
      "How do you roll it back?",
      "What signal gates promotion?"
    ],
    "followupAnswers": [
      "I keep the previous immutable artifact available and verify data/schema compatibility before relying on rollback.",
      "Promotion should be gated by user-impact signals such as error rate, latency and business health, not only rollout completion."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-044",
    "level": "L3",
    "topic": "Operations",
    "title": "What should an on-call runbook contain?",
    "what": "Symptoms, dashboards, diagnostic commands, common causes, mitigation, rollback and escalation paths.",
    "how": "A runbook should help an engineer act safely at 3 AM without relying on tribal knowledge.",
    "code": "# What should an on-call runbook contain?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "A runbook should help an engineer act safely at 3 AM without relying on tribal knowledge.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-045",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you define SLOs?",
    "what": "Choose user-relevant reliability indicators and target percentages over a window.",
    "how": "I prefer SLOs tied to availability and latency rather than infrastructure-only metrics.",
    "code": "# How do you define SLOs?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I prefer SLOs tied to availability and latency rather than infrastructure-only metrics.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-046",
    "level": "L3",
    "topic": "Operations",
    "title": "What is an error budget?",
    "what": "The allowed unreliability implied by an SLO; it informs how much release risk the team can take.",
    "how": "If the budget is exhausted, I slow risky changes and prioritize reliability work.",
    "code": "# What is an error budget?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "If the budget is exhausted, I slow risky changes and prioritize reliability work.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-047",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you investigate a production incident?",
    "what": "Stabilize impact first, then collect evidence, identify the failing boundary, mitigate, and document the timeline.",
    "how": "I separate mitigation from root-cause analysis so users are protected while investigation continues.",
    "code": "# How do you investigate a production incident?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I separate mitigation from root-cause analysis so users are protected while investigation continues.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-048",
    "level": "L3",
    "topic": "Operations",
    "title": "What metrics matter for the capstone?",
    "what": "Traffic, errors, latency, saturation, pod health, database health, queue depth and deployment/change-failure signals.",
    "how": "I connect technical metrics to user impact and release decisions.",
    "code": "# What metrics matter for the capstone?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I connect technical metrics to user impact and release decisions.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-049",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you know if a deployment caused an incident?",
    "what": "Correlate the incident start with release timing and compare traces, errors and resource behavior before and after the change.",
    "how": "I use evidence and canary isolation rather than assuming temporal proximity proves causation.",
    "code": "# How do you know if a deployment caused an incident?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I use evidence and canary isolation rather than assuming temporal proximity proves causation.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-050",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you recover from a bad database migration?",
    "what": "Stop further rollout, assess compatibility, restore or apply a corrective migration according to the recovery plan.",
    "how": "I avoid ad-hoc destructive fixes and protect data before attempting repair.",
    "code": "# How do you recover from a bad database migration?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I avoid ad-hoc destructive fixes and protect data before attempting repair.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-051",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you test disaster recovery?",
    "what": "Run restore/failover exercises and measure actual RTO/RPO against targets.",
    "how": "A backup that has never been restored is an assumption, not a tested recovery capability.",
    "code": "# How do you test disaster recovery?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "A backup that has never been restored is an assumption, not a tested recovery capability.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-052",
    "level": "L3",
    "topic": "Operations",
    "title": "How do you handle a cloud region outage?",
    "what": "Fail over only if the architecture and data replication strategy support it; otherwise execute the documented regional recovery plan.",
    "how": "I design regional recovery according to business RTO/RPO rather than assuming multi-region is always necessary.",
    "code": "# How do you handle a cloud region outage?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I design regional recovery according to business RTO/RPO rather than assuming multi-region is always necessary.",
    "followups": [
      "What is the first mitigation?",
      "How do you prove recovery?"
    ],
    "followupAnswers": [
      "I first reduce user impact by pausing rollout, shedding load or rolling back when evidence supports it, then investigate root cause.",
      "Recovery is proven by user-facing health, telemetry returning to baseline and a stable deployment/data state."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-053",
    "level": "L3",
    "topic": "Frontend",
    "title": "How do you deploy React safely?",
    "what": "Build immutable static assets, serve them behind CDN/HTTPS, and keep API configuration environment-aware without exposing secrets.",
    "how": "The browser bundle is public, so no secret belongs in React environment variables.",
    "code": "# How do you deploy React safely?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "The browser bundle is public, so no secret belongs in React environment variables.",
    "followups": [
      "How do you debug it?",
      "What security trap should you avoid?"
    ],
    "followupAnswers": [
      "I reproduce in the browser Network/Console tools and correlate the request with edge/API telemetry.",
      "Never put secrets in browser code; anything shipped to React should be treated as public."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-054",
    "level": "L3",
    "topic": "Frontend",
    "title": "How do you diagnose frontend-to-API failures?",
    "what": "Use browser Network, console, CORS responses, DNS/TLS status and API/ingress logs.",
    "how": "I distinguish browser policy errors from actual server errors before changing backend code.",
    "code": "# How do you diagnose frontend-to-API failures?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I distinguish browser policy errors from actual server errors before changing backend code.",
    "followups": [
      "How do you debug it?",
      "What security trap should you avoid?"
    ],
    "followupAnswers": [
      "I reproduce in the browser Network/Console tools and correlate the request with edge/API telemetry.",
      "Never put secrets in browser code; anything shipped to React should be treated as public."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-055",
    "level": "L3",
    "topic": "Backend",
    "title": "How do you deploy Spring Boot safely?",
    "what": "Containerize the application, configure health endpoints, resource settings, graceful shutdown and externalized configuration.",
    "how": "I make the service observable and readiness-aware before putting it behind a load balancer.",
    "code": "# How do you deploy Spring Boot safely?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I make the service observable and readiness-aware before putting it behind a load balancer.",
    "followups": [
      "What metric would you watch?",
      "What failure mode concerns you?"
    ],
    "followupAnswers": [
      "I watch request rate, error rate, latency, CPU, memory, GC and downstream latency relevant to the service.",
      "A common failure is increasing limits without checking downstream capacity, which can simply move the bottleneck."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-056",
    "level": "L3",
    "topic": "Backend",
    "title": "How do you handle JVM memory issues in containers?",
    "what": "Set container-aware heap sizing, inspect GC/heap behavior and align Kubernetes memory limits with workload needs.",
    "how": "I use metrics and heap evidence rather than simply raising the memory limit.",
    "code": "# How do you handle JVM memory issues in containers?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I use metrics and heap evidence rather than simply raising the memory limit.",
    "followups": [
      "What metric would you watch?",
      "What failure mode concerns you?"
    ],
    "followupAnswers": [
      "I watch request rate, error rate, latency, CPU, memory, GC and downstream latency relevant to the service.",
      "A common failure is increasing limits without checking downstream capacity, which can simply move the bottleneck."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-057",
    "level": "L3",
    "topic": "Data",
    "title": "How do you design connection resilience to PostgreSQL?",
    "what": "Use bounded pools, timeouts, retry only where safe, health checks and database-side capacity controls.",
    "how": "The application should fail predictably when the database is unavailable instead of creating an infinite connection storm.",
    "code": "# How do you design connection resilience to PostgreSQL?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "The application should fail predictably when the database is unavailable instead of creating an infinite connection storm.",
    "followups": [
      "What happens during DB outage?",
      "How do you prevent overload?"
    ],
    "followupAnswers": [
      "I use timeouts and bounded pools so a database outage does not turn into an application-wide connection storm.",
      "I prevent overload with bounded concurrency, timeouts and backpressure rather than allowing unlimited retries."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-058",
    "level": "L3",
    "topic": "Testing",
    "title": "What should the deployment test pyramid look like?",
    "what": "Fast unit tests first, then integration/contract tests, then focused smoke tests after deployment.",
    "how": "I keep production smoke tests short and representative while broader tests run earlier in CI.",
    "code": "# What should the deployment test pyramid look like?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I keep production smoke tests short and representative while broader tests run earlier in CI.",
    "followups": [
      "What belongs in CI?",
      "How do you avoid false confidence?"
    ],
    "followupAnswers": [
      "I put deterministic, fast checks early and reserve deployment smoke tests for validating the real runtime path.",
      "Retries should be limited and flaky tests tracked; a green pipeline is meaningless if nondeterminism is routinely hidden."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-059",
    "level": "L3",
    "topic": "Testing",
    "title": "How do you test failure scenarios?",
    "what": "Inject controlled dependency, node, pod, network and resource failures in non-production environments.",
    "how": "I test the recovery mechanism itself, not just the happy path.",
    "code": "# How do you test failure scenarios?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "I test the recovery mechanism itself, not just the happy path.",
    "followups": [
      "What belongs in CI?",
      "How do you avoid false confidence?"
    ],
    "followupAnswers": [
      "I put deterministic, fast checks early and reserve deployment smoke tests for validating the real runtime path.",
      "Retries should be limited and flaky tests tracked; a green pipeline is meaningless if nondeterminism is routinely hidden."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  },
  {
    "id": "capstone-060",
    "level": "L3",
    "topic": "Testing",
    "title": "How do you prevent flaky CI from hiding failures?",
    "what": "Track flaky tests, isolate nondeterminism, fix shared-state/timing issues and avoid unlimited retries.",
    "how": "Retries can provide evidence but should not become a permanent quality strategy.",
    "code": "# How do you prevent flaky CI from hiding failures?\n# verify with telemetry, controlled rollout, and failure testing",
    "delivery": "Retries can provide evidence but should not become a permanent quality strategy.",
    "followups": [
      "What belongs in CI?",
      "How do you avoid false confidence?"
    ],
    "followupAnswers": [
      "I put deterministic, fast checks early and reserve deployment smoke tests for validating the real runtime path.",
      "Retries should be limited and flaky tests tracked; a green pipeline is meaningless if nondeterminism is routinely hidden."
    ],
    "traps": [
      "Do not choose the technology without stating the requirement it solves."
    ]
  }
];
