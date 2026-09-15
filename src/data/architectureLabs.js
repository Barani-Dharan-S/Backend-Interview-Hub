export const architectureLabs = [
  {
    "id": "arch-001",
    "level": "L1",
    "subtopic": "Evolution",
    "title": "Monolith → Layered Spring Boot",
    "goal": "Start with a single Spring Boot service and separate controller, service and repository responsibilities.",
    "design": "A controller handles HTTP concerns, a service owns business rules and transaction boundaries, and a repository handles persistence. Keep DTOs at the API boundary.",
    "delivery": "The goal is separation of responsibilities before adding microservices. Splitting too early creates distributed complexity without solving a real boundary.",
    "followups": [
      {
        "question": "Why not put business logic in controllers?",
        "answer": "Controllers become hard to test and reuse, and HTTP concerns get mixed with business rules. Service-layer logic can be invoked by multiple adapters and tested independently."
      },
      {
        "question": "When should you create another service?",
        "answer": "When there is a meaningful business or operational boundary, not simply because a class became large."
      }
    ]
  },
  {
    "id": "arch-002",
    "level": "L1",
    "subtopic": "API",
    "title": "Layered app → REST contract",
    "goal": "Define stable resource endpoints, DTOs, status codes and error contracts before connecting React.",
    "design": "Treat the HTTP API as a contract: resources, methods, validation, response shapes, errors and idempotency semantics should be explicit.",
    "delivery": "A frontend/backend integration becomes easier when both sides agree on a contract before implementation details leak across the boundary.",
    "followups": [
      {
        "question": "Why version APIs?",
        "answer": "When a breaking contract change cannot be made compatibly, versioning gives clients a migration path."
      },
      {
        "question": "Should every field be nullable?",
        "answer": "No. Model required versus optional fields deliberately and validate them at the boundary."
      }
    ]
  },
  {
    "id": "arch-003",
    "level": "L2",
    "subtopic": "Security",
    "title": "REST app → authenticated API",
    "goal": "Add Spring Security and JWT without putting authorization logic into React.",
    "design": "Authentication is enforced by the backend security chain; controllers/services receive trusted authentication context and enforce authorities/ownership. React only adapts UX.",
    "delivery": "Security is a backend invariant. The UI can improve usability, but the API remains the source of truth.",
    "followups": [
      {
        "question": "Where does JWT validation happen?",
        "answer": "In the Spring Security request pipeline, before protected controller execution."
      },
      {
        "question": "Where should role checks live?",
        "answer": "At authorization boundaries such as method security or service checks, with consistent policies for sensitive operations."
      }
    ]
  },
  {
    "id": "arch-004",
    "level": "L2",
    "subtopic": "Data",
    "title": "REST app → production database",
    "goal": "Introduce PostgreSQL with migrations, indexes and transaction boundaries.",
    "design": "Use schema migrations as versioned deployment artifacts, inspect query plans for important paths, and keep transactions around business invariants rather than HTTP calls.",
    "delivery": "A production database is part of the application architecture, not just a connection string.",
    "followups": [
      {
        "question": "Why migrations?",
        "answer": "They make schema changes repeatable, reviewable and deployable across environments."
      },
      {
        "question": "When should you add an index?",
        "answer": "When workload evidence shows a query pattern benefits from it and the write/storage cost is acceptable."
      }
    ]
  },
  {
    "id": "arch-005",
    "level": "L2",
    "subtopic": "Reliability",
    "title": "Synchronous API → resilient service",
    "goal": "Add timeouts, bounded retries, circuit breaking and clear failure behavior around remote calls.",
    "design": "Every outbound dependency should have a timeout. Retry only transient failures with bounded attempts and backoff, and avoid retry storms. A circuit breaker can stop repeatedly calling an unhealthy dependency.",
    "delivery": "Reliability comes from controlling failure propagation, not from retrying everything.",
    "followups": [
      {
        "question": "Why can retries make outages worse?",
        "answer": "Many clients retry simultaneously and multiply load on an already unhealthy dependency."
      },
      {
        "question": "What should never be retried blindly?",
        "answer": "Non-idempotent commands and permanent failures such as validation errors. Retry policy must match operation semantics."
      }
    ]
  },
  {
    "id": "arch-006",
    "level": "L2",
    "subtopic": "Messaging",
    "title": "Synchronous workflow → event-driven side effect",
    "goal": "Move email/notification processing out of the request path using an outbox and message consumer.",
    "design": "Commit the business transaction and an outbox record together, then publish asynchronously. Consumers must be idempotent because delivery can be repeated.",
    "delivery": "Use asynchronous messaging when decoupling, latency or independent scaling is valuable—not just because Kafka is available.",
    "followups": [
      {
        "question": "Why outbox?",
        "answer": "It closes the gap between committing database state and publishing a message by storing the event in the same database transaction."
      },
      {
        "question": "Exactly once?",
        "answer": "End-to-end exactly-once business effects are difficult across systems. Design consumers and commands for idempotent effects instead."
      }
    ]
  },
  {
    "id": "arch-007",
    "level": "L3",
    "subtopic": "Scale",
    "title": "Single instance → horizontally scaled service",
    "goal": "Make the API stateless enough to run multiple instances behind a load balancer.",
    "design": "Externalize sessions/state when necessary, use shared database/cache/object storage, and make readiness/health meaningful. Verify concurrency and database capacity before adding instances.",
    "delivery": "Horizontal scaling is useful only when the bottleneck can actually scale horizontally.",
    "followups": [
      {
        "question": "What if sessions are local?",
        "answer": "Use a shared session store or token-based approach. Also ensure scheduled jobs and consumers do not accidentally run independently on every instance unless that is intended."
      },
      {
        "question": "Does adding instances always improve throughput?",
        "answer": "No. A shared database, connection pool, lock contention or downstream dependency can become the bottleneck."
      }
    ]
  },
  {
    "id": "arch-008",
    "level": "L3",
    "subtopic": "Observability",
    "title": "Service → production platform",
    "goal": "Add metrics, structured logs, distributed tracing and actionable health signals.",
    "design": "Measure request rate, errors, latency percentiles and saturation; correlate traces and logs; distinguish liveness from readiness; alert on user-impacting symptoms.",
    "delivery": "Observability should answer what is broken, who is affected, where the latency/error occurs and whether the system is recovering.",
    "followups": [
      {
        "question": "Liveness vs readiness?",
        "answer": "Liveness answers whether a process should be restarted; readiness answers whether it should receive traffic."
      },
      {
        "question": "What makes an alert useful?",
        "answer": "A clear symptom, meaningful threshold, owner and runbook path. Avoid alerts on noisy internal metrics with no user impact."
      }
    ]
  }
];
