export const followupAnswers = [
  {
    "questionId": "java-001",
    "index": 0,
    "question": "Why must equals() and hashCode() agree?",
    "answer": "Java requires equal objects to have the same hash code. HashMap and HashSet use hashCode() to locate a bucket and equals() to find the exact matching entry, so the contract is essential for correct lookup and duplicate detection.",
    "track": "backend"
  },
  {
    "questionId": "java-001",
    "index": 1,
    "question": "What happens in HashSet if the contract is broken?",
    "answer": "If equals() and hashCode() are inconsistent, HashSet can fail to find an element that is already present or allow logically duplicate values. Mutating a field used by hashCode() after insertion can cause the same problem.",
    "track": "backend"
  },
  {
    "questionId": "java-001",
    "index": 2,
    "question": "Why should equals() usually be symmetric and transitive?",
    "answer": "equals() should be symmetric and transitive so equality behaves like a consistent equivalence relation. If a.equals(b) is true, b.equals(a) must also be true, and if a equals b and b equals c, a must equal c. Collections such as HashSet rely on these properties for predictable behavior.",
    "track": "backend"
  },
  {
    "questionId": "java-002",
    "index": 0,
    "question": "What breaks if hashCode is omitted?",
    "answer": "If hashCode() is omitted or inconsistent with an overridden equals(), equal objects can land in different hash buckets, causing HashMap/HashSet lookups and duplicate detection to fail. Whenever equals() is overridden, hashCode() must also be overridden consistently.",
    "track": "backend"
  },
  {
    "questionId": "java-003",
    "index": 0,
    "question": "What happens during resize?",
    "answer": "During resize, HashMap increases its bucket array capacity and redistributes entries according to the new capacity. This is why resizing is expensive, but it happens infrequently because the map grows when its size crosses the load-factor threshold.",
    "track": "backend"
  },
  {
    "questionId": "java-003",
    "index": 1,
    "question": "Why are mutable keys dangerous?",
    "answer": "A mutable key is unsafe when fields used by equals() or hashCode() can change after insertion. The object may remain in its original bucket while lookups use the new hash code, making the entry effectively unreachable.",
    "track": "backend"
  },
  {
    "questionId": "java-004",
    "index": 0,
    "question": "Which is better for random access?",
    "answer": "ArrayList is backed by a resizable array, so indexed access is O(1) and appending is amortized O(1), but inserting or removing in the middle requires shifting elements. LinkedList uses linked nodes, so indexed access is O(n); insertion/removal is efficient only when the node position is already known. In most application code, ArrayList is the better default because of locality and lower per-element overhead.",
    "track": "backend"
  },
  {
    "questionId": "java-005",
    "index": 0,
    "question": "Comparable vs Comparator?",
    "answer": "Comparable defines a class’s natural ordering through compareTo(). Comparator defines an external ordering through compare(), so the same class can have multiple sorting strategies without changing the domain class. Comparable is useful when one ordering is intrinsic; Comparator is better for contextual choices such as sorting employees by salary, name, or joining date.",
    "track": "backend"
  },
  {
    "questionId": "java-006",
    "index": 0,
    "question": "Why is the class often final?",
    "answer": "Making an immutable class final prevents subclasses from adding mutable state or overriding behavior in a way that breaks immutability. It keeps the class's state and invariants under the original class's control.",
    "track": "backend"
  },
  {
    "questionId": "java-006",
    "index": 1,
    "question": "Why do we defensively copy a List?",
    "answer": "A defensive copy prevents callers from modifying an object's internal collection through a shared reference. Copy mutable input in the constructor and return an unmodifiable view or copy from the getter when encapsulation requires it.",
    "track": "backend"
  },
  {
    "questionId": "java-007",
    "index": 0,
    "question": "How close resources?",
    "answer": "Use try-with-resources for AutoCloseable resources. Java closes resources automatically in reverse declaration order, including when the try block throws, and preserves close failures as suppressed exceptions when appropriate.",
    "track": "backend"
  },
  {
    "questionId": "java-008",
    "index": 0,
    "question": "When custom exception?",
    "answer": "Create a custom exception when a domain-specific failure needs its own type or handling policy. Use RuntimeException for failures that callers normally do not need to catch explicitly, and checked exceptions when the API deliberately requires callers to handle the condition.",
    "track": "backend"
  },
  {
    "questionId": "java-009",
    "index": 0,
    "question": "What interface is required?",
    "answer": "The resource must implement AutoCloseable; Closeable is a subinterface used by many I/O resources. try-with-resources calls close() automatically at the end of the try block and also preserves close failures as suppressed exceptions when another exception is already being thrown.",
    "track": "backend"
  },
  {
    "questionId": "java-010",
    "index": 0,
    "question": "Can interfaces have implementation?",
    "answer": "Interfaces can contain default, static, and private methods with implementations. Implementing classes still provide the required abstract methods, while default methods provide reusable behavior.",
    "track": "backend"
  },
  {
    "questionId": "java-011",
    "index": 0,
    "question": "What if two defaults conflict?",
    "answer": "When two interfaces provide conflicting default methods with the same signature, the implementing class must override the method and choose the required behavior. A more specific subinterface default can take precedence over a parent interface default.",
    "track": "backend"
  },
  {
    "questionId": "java-012",
    "index": 0,
    "question": "orElse vs orElseGet?",
    "answer": "orElse() evaluates its fallback immediately, while orElseGet() evaluates the Supplier only when the Optional is empty. Use orElseGet() when the fallback is expensive or has side effects.",
    "track": "backend"
  },
  {
    "questionId": "java-013",
    "index": 0,
    "question": "Predicate vs Function?",
    "answer": "Predicate<T> accepts T and returns boolean, so it represents a condition. Function<T,R> accepts T and returns R, so it represents a transformation or mapping operation.",
    "track": "backend"
  },
  {
    "questionId": "java-014",
    "index": 0,
    "question": "What is effectively final?",
    "answer": "A local variable is effectively final when it is assigned once and never reassigned. Java allows such variables to be captured by lambdas and anonymous classes without explicitly writing final.",
    "track": "backend"
  },
  {
    "questionId": "java-015",
    "index": 0,
    "question": "Are records deeply immutable?",
    "answer": "A record is not automatically deeply immutable. Its components are final references, but a component can still point to a mutable List, Map, array, or custom object. Deep immutability requires immutable components or defensive copying.",
    "track": "backend"
  },
  {
    "questionId": "java-016",
    "index": 0,
    "question": "Virtual vs platform thread?",
    "answer": "Platform threads are closely tied to operating-system threads and are relatively expensive to create in large numbers. Virtual threads are lightweight JVM-managed threads designed to make high-concurrency blocking I/O practical; CPU-bound work still needs bounded parallelism.",
    "track": "backend"
  },
  {
    "questionId": "java-017",
    "index": 0,
    "question": "Block vs method synchronization?",
    "answer": "A synchronized method locks for the entire method execution. A synchronized block locks only the critical section and can use a specific lock object, giving finer control over contention and lock duration.",
    "track": "backend"
  },
  {
    "questionId": "java-018",
    "index": 0,
    "question": "When is volatile enough?",
    "answer": "volatile provides visibility and ordering for a variable, but it does not make compound operations atomic. It is suitable for simple state flags or safely published values; operations such as count++ need synchronization or atomic classes.",
    "track": "backend"
  },
  {
    "questionId": "java-019",
    "index": 0,
    "question": "How diagnose in production?",
    "answer": "Prevent with consistent lock ordering, small lock scopes, avoiding nested locks and timed acquisition where appropriate.",
    "track": "backend"
  },
  {
    "questionId": "java-020",
    "index": 0,
    "question": "StackOverflowError?",
    "answer": "StackOverflowError usually indicates that a thread exhausted its call stack, commonly because of unbounded recursion or an excessively deep call chain. Check the stack trace for repeated frames and verify recursion termination.",
    "track": "backend"
  },
  {
    "questionId": "java-020",
    "index": 1,
    "question": "OutOfMemoryError?",
    "answer": "OutOfMemoryError means the JVM could not satisfy an allocation. Determine whether the pressure is heap, metaspace, direct memory, or another area, then use heap dumps, GC logs, JVM metrics, and allocation profiling to identify the cause.",
    "track": "backend"
  },
  {
    "questionId": "java-021",
    "index": 0,
    "question": "How diagnose GC pressure?",
    "answer": "GC pressure means the application allocates or retains objects fast enough to cause frequent garbage collection. Check allocation hotspots, temporary object creation, caches, object lifetimes, and heap sizing using GC logs and profiling.",
    "track": "backend"
  },
  {
    "questionId": "java-022",
    "index": 0,
    "question": "Why is String immutable?",
    "answer": "String is immutable, so its value cannot change after construction. This supports string pooling, stable hash codes, safe sharing between threads, and reliable use as a HashMap key.",
    "track": "backend"
  },
  {
    "questionId": "java-022",
    "index": 1,
    "question": "When would StringBuffer be preferred?",
    "answer": "StringBuffer is useful when mutable string construction must be synchronized for multiple threads. For normal single-threaded code, StringBuilder is preferred because it avoids that synchronization overhead.",
    "track": "backend"
  },
  {
    "questionId": "java-022",
    "index": 2,
    "question": "What is the time complexity of repeated String concatenation in a loop?",
    "answer": "Repeated String concatenation inside a loop can become O(n²) because each new String may copy the accumulated content. StringBuilder normally gives O(n) amortized construction for the final string.",
    "track": "backend"
  },
  {
    "questionId": "java-023",
    "index": 0,
    "question": "Can a class implement multiple Comparables?",
    "answer": "A class can have one natural ordering through Comparable<T>. Alternative orderings should be implemented as separate Comparator instances because a type cannot implement Comparable with multiple incompatible type parameters.",
    "track": "backend"
  },
  {
    "questionId": "java-023",
    "index": 1,
    "question": "How do you sort by salary and then name?",
    "answer": "Use Comparator.comparing(Employee::getSalary).thenComparing(Employee::getName). Salary becomes the primary sort key and name is used when salaries are equal.",
    "track": "backend"
  },
  {
    "questionId": "java-023",
    "index": 2,
    "question": "What happens when compareTo returns zero?",
    "answer": "compareTo() returning zero means the two values are equivalent according to the ordering. In TreeSet or TreeMap, that can make values behave as duplicates even when equals() says they are different.",
    "track": "backend"
  },
  {
    "questionId": "java-024",
    "index": 0,
    "question": "How would you flatten List<List<Integer>>?",
    "answer": "Use flatMap to turn each inner collection into a stream and combine the elements into one stream, for example outer.stream().flatMap(Collection::stream).toList().",
    "track": "backend"
  },
  {
    "questionId": "java-024",
    "index": 1,
    "question": "What is the difference between Optional.map and Optional.flatMap?",
    "answer": "Optional.map transforms the contained value and wraps the result in Optional. Optional.flatMap is used when the mapping function already returns Optional, avoiding nested Optional<Optional<T>>.",
    "track": "backend"
  },
  {
    "questionId": "java-024",
    "index": 2,
    "question": "Can flatMap change the number of elements?",
    "answer": "flatMap can produce zero, one, or many output elements for each input element. That is why it can change the number of elements and is useful for flattening nested collections or one-to-many transformations.",
    "track": "backend"
  },
  {
    "questionId": "java-025",
    "index": 0,
    "question": "What pool does it use?",
    "answer": "CompletableFuture asynchronous methods without an explicit Executor normally use ForkJoinPool.commonPool(). For blocking or workload-specific tasks, pass a dedicated Executor so unrelated common-pool work is not starved.",
    "track": "backend"
  },
  {
    "questionId": "micro-001",
    "index": 0,
    "question": "Microservices vs modular monolith?",
    "answer": "A modular monolith keeps modules in one deployable unit, making local calls, transactions, debugging, and deployment simpler. Microservices provide independent deployment and scaling but add network latency, distributed failure, observability, and data-consistency complexity.",
    "track": "backend"
  },
  {
    "questionId": "micro-002",
    "index": 0,
    "question": "Can both coexist?",
    "answer": "Yes. A load balancer can distribute requests across multiple gateway instances, while the API Gateway handles routing, authentication, rate limiting and other API policies. They operate at different concerns and can be deployed together.",
    "track": "backend"
  },
  {
    "questionId": "micro-003",
    "index": 0,
    "question": "Client vs server discovery?",
    "answer": "With client-side discovery, the client queries a service registry and selects an instance itself. With server-side discovery, the client calls a load balancer or gateway and that infrastructure performs discovery and routing. Server-side discovery reduces discovery logic in each client; client-side discovery can provide more direct control.",
    "track": "backend"
  },
  {
    "questionId": "micro-004",
    "index": 0,
    "question": "When use Kafka?",
    "answer": "Kafka is a good fit for durable event streams, high-throughput asynchronous processing, replayable events, and multiple independent consumers. A simple synchronous request/response operation usually does not need Kafka.",
    "track": "backend"
  },
  {
    "questionId": "micro-005",
    "index": 0,
    "question": "Orchestration vs choreography?",
    "answer": "Orchestration uses a central coordinator to control a workflow and handle steps and failures explicitly. Choreography lets services react to events independently, reducing central coordination but making the overall workflow harder to trace.",
    "track": "backend"
  },
  {
    "questionId": "micro-006",
    "index": 0,
    "question": "How do you publish the outbox reliably?",
    "answer": "Write the business change and its outbox event in the same local database transaction. A separate publisher reads committed outbox rows and sends them to the broker, then records successful publication. Consumers still need idempotency.",
    "track": "backend"
  },
  {
    "questionId": "micro-006",
    "index": 1,
    "question": "Does Outbox guarantee exactly-once delivery?",
    "answer": "The outbox pattern prevents the database-to-broker dual-write gap, but it does not by itself guarantee exactly-once business processing. Retries and duplicate delivery are still possible, so consumers should be idempotent.",
    "track": "backend"
  },
  {
    "questionId": "micro-007",
    "index": 0,
    "question": "How do you handle concurrent requests with the same key?",
    "answer": "Use an idempotency key and enforce uniqueness at a durable boundary such as a database unique constraint. Concurrent requests with the same key should return the same recorded result instead of executing the business operation twice.",
    "track": "backend"
  },
  {
    "questionId": "micro-007",
    "index": 1,
    "question": "Where should idempotency records be stored?",
    "answer": "Store idempotency records in shared durable storage when correctness must survive retries and multiple service instances. A database is common; Redis is suitable only when its durability and retention guarantees match the business risk.",
    "track": "backend"
  },
  {
    "questionId": "micro-008",
    "index": 0,
    "question": "When should you not retry?",
    "answer": "Do not retry validation errors, authentication failures, malformed requests, or unsafe non-idempotent operations. Retry only transient failures such as selected timeouts and 5xx responses, using bounded backoff and jitter.",
    "track": "backend"
  },
  {
    "questionId": "micro-008",
    "index": 1,
    "question": "Why use jitter?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "micro-009",
    "index": 0,
    "question": "Bulkhead vs circuit breaker?",
    "answer": "A circuit breaker stops calls to an unhealthy dependency after repeated failures and probes for recovery later. A bulkhead isolates resources such as thread or connection pools so one failing dependency cannot consume capacity needed by unrelated operations.",
    "track": "backend"
  },
  {
    "questionId": "micro-010",
    "index": 0,
    "question": "How handle stale reads?",
    "answer": "If stale data is acceptable, caching or read replicas can improve performance. If a decision requires current data, read from the authoritative source or use an explicit consistency mechanism instead of assuming a replica is current.",
    "track": "backend"
  },
  {
    "questionId": "micro-011",
    "index": 0,
    "question": "How avoid retry storms?",
    "answer": "Use retry limits, exponential backoff, jitter, timeouts, circuit breakers, and load shedding to prevent retry storms. Avoid independent retries at every service hop because layered retries can multiply traffic.",
    "track": "backend"
  },
  {
    "questionId": "micro-012",
    "index": 0,
    "question": "Metrics vs logs vs traces?",
    "answer": "Metrics show aggregate health and trends, logs provide detailed event context, and traces connect one request across service boundaries. In production, metrics detect the issue, traces locate the failing dependency, and logs explain the exact event.",
    "track": "backend"
  },
  {
    "questionId": "micro-013",
    "index": 0,
    "question": "What is an SLO?",
    "answer": "An SLO is a target for a service-level indicator, such as successful request percentage or a latency percentile. It defines the reliability level the team intends to provide and can guide release and operational decisions.",
    "track": "backend"
  },
  {
    "questionId": "micro-014",
    "index": 0,
    "question": "How deprecate consumers?",
    "answer": "Announce the replacement contract, measure usage of the old contract, provide a compatibility window, migrate consumers, and remove the old version only after the agreed deprecation criteria are satisfied.",
    "track": "backend"
  },
  {
    "questionId": "micro-015",
    "index": 0,
    "question": "Global vs per-user?",
    "answer": "A global rate limit protects the entire service from aggregate overload. A per-user or per-client limit prevents one caller from consuming a disproportionate share. Production systems often combine both.",
    "track": "backend"
  },
  {
    "questionId": "micro-016",
    "index": 0,
    "question": "Queue vs topic?",
    "answer": "A queue normally distributes a message to one competing consumer, while a topic allows multiple consumer groups to receive their own view of the events. Kafka topics behave like durable logs with independent consumer offsets.",
    "track": "backend"
  },
  {
    "questionId": "micro-017",
    "index": 0,
    "question": "What determines ordering?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "micro-018",
    "index": 0,
    "question": "How make consumer idempotent?",
    "answer": "Make consumption repeat-safe by storing a durable message or business key, enforcing uniqueness, and making the business update conditional or otherwise safe to execute more than once.",
    "track": "backend"
  },
  {
    "questionId": "micro-019",
    "index": 0,
    "question": "When avoid a mesh?",
    "answer": "Avoid a service mesh when the system is small and the operational overhead is larger than the value. A mesh adds sidecars or proxies, configuration, observability and failure modes. It becomes more attractive when many services need consistent traffic, security and telemetry policies.",
    "track": "backend"
  },
  {
    "questionId": "micro-020",
    "index": 0,
    "question": "What if logs are missing?",
    "answer": "If logs are missing, use metrics and distributed traces first to locate the failing component, then check platform/container logs and logging configuration. Verify log level, log shipping, retention and correlation IDs; missing logs should be treated as an observability incident too.",
    "track": "backend"
  },
  {
    "questionId": "micro-021",
    "index": 0,
    "question": "Load shedding vs rate limiting?",
    "answer": "Rate limiting restricts traffic according to a defined quota, while load shedding deliberately rejects lower-priority work when the system is saturated so critical traffic remains healthy.",
    "track": "backend"
  },
  {
    "questionId": "micro-022",
    "index": 0,
    "question": "Blue-green vs canary?",
    "answer": "Blue-green maintains old and new environments and switches traffic between them, making rollback fast. Canary sends a small percentage of traffic to the new version and increases it only after health metrics remain acceptable.",
    "track": "backend"
  },
  {
    "questionId": "micro-023",
    "index": 0,
    "question": "What metrics gate rollout?",
    "answer": "A canary deployment releases a new version to a small subset of production traffic first, validates health and business metrics, and then increases traffic gradually. It reduces blast radius compared with an all-at-once rollout.",
    "track": "backend"
  },
  {
    "questionId": "micro-024",
    "index": 0,
    "question": "What if holder crashes?",
    "answer": "Use a lease with an expiration time rather than an indefinite lock. If the holder crashes, the lease eventually expires and another instance can acquire it. The operation should also be protected with a fencing token or equivalent mechanism when stale holders could otherwise continue making changes after losing the lease.",
    "track": "backend"
  },
  {
    "questionId": "micro-025",
    "index": 0,
    "question": "When is it better than rewrite?",
    "answer": "Prefer incremental replacement when the existing system contains valuable, stable behavior and a full rewrite would create a large delivery and migration risk. A rewrite can make sense when the current architecture prevents required changes and the team can control the migration and validation. The decision should be based on business value, risk and cost rather than technology preference.",
    "track": "backend"
  },
  {
    "questionId": "jpa-001",
    "index": 0,
    "question": "Entity states?",
    "answer": "JPA entities can be transient, managed, detached, or removed. Managed entities belong to the persistence context and are tracked for dirty checking; detached entities are no longer tracked by that context.",
    "track": "backend"
  },
  {
    "questionId": "jpa-002",
    "index": 0,
    "question": "merge vs persist?",
    "answer": "persist makes a new entity managed and schedules an insert. merge copies state into a managed instance and returns that managed instance; the object passed to merge does not itself become managed.",
    "track": "backend"
  },
  {
    "questionId": "jpa-003",
    "index": 0,
    "question": "Why use returned object?",
    "answer": "Use the object returned by merge because it is the managed instance associated with the persistence context. The original object remains detached and its later changes are not automatically tracked.",
    "track": "backend"
  },
  {
    "questionId": "jpa-004",
    "index": 0,
    "question": "How avoid N+1?",
    "answer": "Avoid N+1 with query-specific fetching such as fetch joins or EntityGraph, DTO projections, or batching where appropriate. Confirm the actual SQL/query count before changing the fetch strategy.",
    "track": "backend"
  },
  {
    "questionId": "jpa-005",
    "index": 0,
    "question": "How detect N+1?",
    "answer": "Detect N+1 by inspecting generated SQL and query counts while loading a collection of parent entities. Enable Hibernate SQL/statistics logging or use an APM/database profiler; a pattern of one parent query followed by N similar child queries is the classic sign.",
    "track": "backend"
  },
  {
    "questionId": "jpa-006",
    "index": 0,
    "question": "How should API handle conflict?",
    "answer": "Return a response that clearly represents the conflict, commonly HTTP 409 Conflict, and explain enough for the client to resolve it. For concurrent updates, use optimistic locking with a version field or another concurrency strategy so the server can detect that the client's version is stale.",
    "track": "backend"
  },
  {
    "questionId": "jpa-007",
    "index": 0,
    "question": "JPQL vs native?",
    "answer": "JPQL queries mapped entities and fields and is more portable across databases. Native SQL gives database-specific features and exact SQL control but couples the query more closely to the database schema and dialect.",
    "track": "backend"
  },
  {
    "questionId": "jpa-008",
    "index": 0,
    "question": "EntityGraph vs fetch join?",
    "answer": "A fetch join declares the association fetch directly in JPQL. EntityGraph declares a fetch plan separately from the query and can be reused across repository methods.",
    "track": "backend"
  },
  {
    "questionId": "jpa-009",
    "index": 0,
    "question": "When does flush happen?",
    "answer": "Flush synchronizes pending persistence-context changes with the database. It can happen before commit and before queries when the configured flush mode requires it. Flush sends SQL; it does not commit the transaction.",
    "track": "backend"
  },
  {
    "questionId": "jpa-010",
    "index": 0,
    "question": "How detect new?",
    "answer": "Spring Data determines whether an entity is new using its identifier and, when configured, version information or entity metadata. A common approach is a null ID for generated identifiers. For assigned IDs, implementing Persistable or configuring the entity's new-state detection may be necessary.",
    "track": "backend"
  },
  {
    "questionId": "jpa-011",
    "index": 0,
    "question": "Why can a constraint fail at flush?",
    "answer": "A database constraint can fail during flush because Hibernate sends pending INSERT or UPDATE statements to the database then. The entity may have been changed earlier in Java, but the database validates the constraint when the SQL executes.",
    "track": "backend"
  },
  {
    "questionId": "jpa-012",
    "index": 0,
    "question": "Cascade vs orphanRemoval?",
    "answer": "Cascade propagates lifecycle operations such as persist or remove from parent to child. orphanRemoval deletes a child when it is removed from the owning relationship, so it represents relationship ownership semantics rather than simply being another name for cascade remove.",
    "track": "backend"
  },
  {
    "questionId": "jpa-013",
    "index": 0,
    "question": "orphanRemoval vs REMOVE?",
    "answer": "CascadeType.REMOVE propagates a remove operation when the parent is explicitly deleted. orphanRemoval removes a child when it is removed from the parent's relationship. orphanRemoval therefore covers orphaned children even when the parent itself is not deleted.",
    "track": "backend"
  },
  {
    "questionId": "jpa-014",
    "index": 0,
    "question": "Projection vs entity?",
    "answer": "A projection fetches only the fields required by a read use case and can reduce memory and query cost. An entity is better when you need persistence-context tracking, relationships, or updates.",
    "track": "backend"
  },
  {
    "questionId": "jpa-015",
    "index": 0,
    "question": "Why not make everything eager?",
    "answer": "Making everything EAGER loads data that many use cases do not need and can increase joins, memory use, and hidden query costs. Prefer lazy associations and explicitly fetch what each use case requires.",
    "track": "backend"
  },
  {
    "questionId": "security-001",
    "index": 0,
    "question": "What is the difference between signing and encryption?",
    "answer": "Signing provides integrity and authenticity; encryption provides confidentiality. A signed JWT lets the receiver verify the token was not modified, but its payload is still readable unless encryption is also used.",
    "track": "backend"
  },
  {
    "questionId": "security-001",
    "index": 1,
    "question": "Why should the API validate the audience claim?",
    "answer": "The audience claim identifies the intended recipient of a JWT. The resource server should verify that the token's audience matches its own expected identifier so a valid token issued for another API cannot be accepted accidentally.",
    "track": "backend"
  },
  {
    "questionId": "security-001",
    "index": 2,
    "question": "Where should sensitive data be stored instead of a JWT payload?",
    "answer": "Do not put secrets or sensitive data in a normal JWT payload because JWT payloads are typically base64url-encoded, not encrypted. Keep sensitive information server-side and put only the minimum claims needed for authorization and context.",
    "track": "backend"
  },
  {
    "questionId": "security-002",
    "index": 0,
    "question": "Where should authorization be enforced in microservices?",
    "answer": "Authorization should be enforced at the service that owns the resource and business decision. A gateway can provide coarse-grained controls, but downstream services must not rely on the gateway alone for authorization.",
    "track": "backend"
  },
  {
    "questionId": "security-002",
    "index": 1,
    "question": "RBAC vs ABAC?",
    "answer": "RBAC grants permissions through roles, while ABAC evaluates attributes such as user, resource, action, tenant, or environment. RBAC is simpler for stable role models; ABAC is useful when access depends on fine-grained contextual rules.",
    "track": "backend"
  },
  {
    "questionId": "security-002",
    "index": 2,
    "question": "How do you prevent IDOR or cross-tenant access?",
    "answer": "Prevent IDOR and cross-tenant access by deriving the caller's identity and tenant from trusted authentication context and applying authorization checks to every resource access. Never treat an object ID supplied by the client as proof of ownership.",
    "track": "backend"
  },
  {
    "questionId": "security-003",
    "index": 0,
    "question": "CSRF vs XSS?",
    "answer": "CSRF tricks a browser into sending an authenticated request from an unwanted origin, while XSS executes attacker-controlled script in the trusted origin. CSRF defenses include SameSite cookies or CSRF tokens; XSS defenses include output encoding, safe DOM APIs, CSP, and avoiding unsafe HTML injection.",
    "track": "backend"
  },
  {
    "questionId": "security-003",
    "index": 1,
    "question": "Why is SameSite useful?",
    "answer": "SameSite controls when browsers send cookies in cross-site contexts. Lax or Strict settings can reduce CSRF risk by preventing cookies from being attached to many cross-site requests; None requires Secure and allows cross-site cookie use.",
    "track": "backend"
  },
  {
    "questionId": "security-003",
    "index": 2,
    "question": "Does JWT automatically eliminate CSRF?",
    "answer": "JWTs do not automatically eliminate CSRF. If the access token is stored in a cookie that the browser sends automatically, CSRF remains relevant. If the token is sent explicitly in an Authorization header and is not automatically attached by the browser, the CSRF model is different.",
    "track": "backend"
  },
  {
    "questionId": "security-004",
    "index": 0,
    "question": "Why is SHA-256 alone unsuitable for passwords?",
    "answer": "SHA-256 is designed to be fast, which is undesirable for password storage because attackers can test huge numbers of guesses. Passwords should use a slow adaptive password hash such as Argon2id, bcrypt, or scrypt with a unique salt.",
    "track": "backend"
  },
  {
    "questionId": "security-004",
    "index": 1,
    "question": "What is a salt?",
    "answer": "A salt is a unique random value combined with a password before hashing. It prevents identical passwords from producing identical stored hashes and makes precomputed rainbow-table attacks much less useful.",
    "track": "backend"
  },
  {
    "questionId": "security-004",
    "index": 2,
    "question": "How do you migrate to a stronger password hash?",
    "answer": "Migrate gradually: store the new password hash format for newly created or successfully authenticated users, and when an existing user logs in with the old hash, verify it and immediately rehash with the stronger algorithm. Keep a version/algorithm marker so the application knows which hashes need upgrading.",
    "track": "backend"
  },
  {
    "questionId": "security-005",
    "index": 0,
    "question": "Authorization Code + PKCE flow?",
    "answer": "Authorization Code with PKCE sends the user through the authorization server, then exchanges a short-lived authorization code using a verifier that only the legitimate client possesses. PKCE protects the code flow against interception and is standard for public clients such as SPAs and mobile apps.",
    "track": "backend"
  },
  {
    "questionId": "security-005",
    "index": 1,
    "question": "OAuth2 vs OpenID Connect?",
    "answer": "OAuth 2.0 is an authorization framework for obtaining access tokens to APIs. OpenID Connect adds an identity layer on top of OAuth 2.0, including an ID token and standardized user-authentication claims.",
    "track": "backend"
  },
  {
    "questionId": "security-005",
    "index": 2,
    "question": "What is a resource server?",
    "answer": "An OAuth2 resource server hosts protected APIs and validates access tokens before serving requests. It checks signature or introspection, issuer, audience, expiry, scopes, and required authorities according to the security configuration.",
    "track": "backend"
  },
  {
    "questionId": "security-006",
    "index": 0,
    "question": "What triggers a preflight?",
    "answer": "A CORS preflight is an OPTIONS request sent by the browser before certain cross-origin requests. It asks the server whether the origin, method, and requested headers are allowed.",
    "track": "backend"
  },
  {
    "questionId": "security-006",
    "index": 1,
    "question": "Why can’t credentials use wildcard origin?",
    "answer": "Browsers do not allow Access-Control-Allow-Origin: * for credentialed CORS requests. The server must return the specific allowed origin when cookies or other credentials are included.",
    "track": "backend"
  },
  {
    "questionId": "security-006",
    "index": 2,
    "question": "CORS vs CSRF?",
    "answer": "CORS is a browser policy controlling whether JavaScript from one origin can read responses from another origin. CSRF is an attack where a victim's browser is induced to perform an authenticated action. CORS configuration does not replace CSRF protection for cookie-based authentication.",
    "track": "backend"
  },
  {
    "questionId": "security-007",
    "index": 0,
    "question": "What happens when a refresh token is reused?",
    "answer": "If refresh-token rotation is enabled, reuse of an already-consumed refresh token can indicate theft. The server can detect the reuse and revoke the associated token family or session, forcing reauthentication. This limits the value of a stolen refresh token.",
    "track": "backend"
  },
  {
    "questionId": "security-007",
    "index": 1,
    "question": "Where should browser refresh tokens be stored?",
    "answer": "For browser applications, avoid exposing long-lived refresh tokens to JavaScript when possible. An HttpOnly, Secure, appropriately SameSite cookie with CSRF protection is a common design when the backend controls the session boundary.",
    "track": "backend"
  },
  {
    "questionId": "security-007",
    "index": 2,
    "question": "How do you revoke a token family?",
    "answer": "Maintain server-side state representing the refresh-token family or session. When misuse, logout or administrative revocation occurs, mark that family revoked and reject future refresh attempts belonging to it. Access tokens may remain valid until expiry unless the architecture also supports active access-token revocation.",
    "track": "backend"
  },
  {
    "questionId": "security-008",
    "index": 0,
    "question": "RBAC vs ABAC?",
    "answer": "RBAC grants permissions through roles, while ABAC evaluates attributes such as user, resource, action, tenant, or environment. RBAC is simpler for stable role models; ABAC is useful when access depends on fine-grained contextual rules.",
    "track": "backend"
  },
  {
    "questionId": "security-008",
    "index": 1,
    "question": "How do you implement tenant-level authorization?",
    "answer": "Enforce tenant isolation on the backend by deriving tenant identity from authenticated context and including it in authorization and data-access predicates. Do not trust a tenant ID supplied only in the request body or URL.",
    "track": "backend"
  },
  {
    "questionId": "security-008",
    "index": 2,
    "question": "Where should roles be checked?",
    "answer": "Roles should be checked at the point where the business operation is authorized, usually in the service or controller/security layer depending on the application's policy design. The key is that the check must happen before the protected action and cannot rely solely on client-side UI restrictions.",
    "track": "backend"
  },
  {
    "questionId": "security-009",
    "index": 0,
    "question": "mTLS vs OAuth2 client credentials?",
    "answer": "mTLS authenticates services through client certificates and also provides transport-level mutual authentication. OAuth2 client credentials issues an access token representing a machine client. They can also be combined when both strong transport identity and token-based authorization are useful.",
    "track": "backend"
  },
  {
    "questionId": "security-009",
    "index": 1,
    "question": "How do you rotate service credentials?",
    "answer": "Use short-lived credentials or centrally managed secrets, rotate them without requiring a synchronized outage, and support overlap so old and new credentials can coexist briefly during deployment. Revoke compromised credentials immediately.",
    "track": "backend"
  },
  {
    "questionId": "security-009",
    "index": 2,
    "question": "How do you prevent a compromised service from calling everything?",
    "answer": "Use least-privilege service identities and resource-level authorization so one compromised service cannot call every downstream operation. Network policies, scoped tokens, mTLS, and audit logs provide additional containment.",
    "track": "backend"
  },
  {
    "questionId": "security-010",
    "index": 0,
    "question": "How would you secure a public payment API?",
    "answer": "Require strong authentication, authorization, TLS, input validation, idempotency keys, replay protection where needed, rate limiting, audit logging, and strict handling of sensitive payment data. Never rely on the frontend to enforce payment authorization.",
    "track": "backend"
  },
  {
    "questionId": "security-010",
    "index": 1,
    "question": "How do you prevent sensitive data in logs?",
    "answer": "Redact or tokenize passwords, tokens, payment data, personal data, and other secrets before logging. Prefer structured logs with explicit allowlisted fields, and control retention and access to the log system.",
    "track": "backend"
  },
  {
    "questionId": "security-010",
    "index": 2,
    "question": "What security belongs in the API Gateway versus the service?",
    "answer": "The gateway is a good place for edge concerns such as TLS termination, coarse authentication, rate limiting, request-size limits and centralized API policies. Each service must still enforce authorization for its own business resources and validate security-relevant claims because requests can reach services through other paths and business rules belong with the resource owner.",
    "track": "backend"
  },
  {
    "questionId": "coding-001",
    "index": 0,
    "question": "What changes if reverse() is disallowed?",
    "answer": "If reverse() is disallowed, implement the reversal directly with two pointers: swap the first and last elements, then move both pointers inward. This preserves O(n) time and O(1) extra space for a mutable array.",
    "track": "backend"
  },
  {
    "questionId": "coding-002",
    "index": 0,
    "question": "How would you make it case-insensitive?",
    "answer": "Normalize the comparison using a defined case-insensitive rule, such as Character.toLowerCase for character-by-character processing or equalsIgnoreCase for direct String comparison. If locale-sensitive text matters, use an explicit locale-aware strategy rather than assuming ASCII semantics.",
    "track": "backend"
  },
  {
    "questionId": "coding-003",
    "index": 0,
    "question": "Can this be done in one pass?",
    "answer": "Yes, this can be done in one pass if the required state can be maintained while scanning the input. The key is to identify the information needed for each decision and update it as each element is processed, giving O(n) time and typically O(1) or O(n) extra space depending on the data structure.",
    "track": "backend"
  },
  {
    "questionId": "coding-004",
    "index": 0,
    "question": "Parallel stream safe?",
    "answer": "A parallel stream is safe when the pipeline is stateless and the terminal operation uses thread-safe reduction semantics. Avoid mutating shared collections from the lambda. Prefer collectors or reductions that combine independent results, and only use parallelism when the workload is large enough to justify its overhead.",
    "track": "backend"
  },
  {
    "questionId": "coding-005",
    "index": 0,
    "question": "Highest average salary?",
    "answer": "Group employees by department and select the employee with the maximum salary in each group. For example, `Collectors.groupingBy(Employee::getDepartment, Collectors.maxBy(Comparator.comparing(Employee::getSalary)))` directly models 'highest salary per department'.",
    "track": "backend"
  },
  {
    "questionId": "coding-006",
    "index": 0,
    "question": "Count by department?",
    "answer": "Use `Collectors.groupingBy(Employee::getDepartment)` to create a `Map<Department, List<Employee>>`. The grouping collector performs the classification in one pass over the employees, with expected O(n) time.",
    "track": "backend"
  },
  {
    "questionId": "coding-007",
    "index": 0,
    "question": "How would Streams solve it?",
    "answer": "Find the largest and second-largest distinct values in one pass, or sort distinct values when simplicity is preferred. For an interview I prefer a one-pass solution because it demonstrates edge-case handling. Track largest and second largest, ignoring duplicates, and define what happens when fewer than two distinct values exist.",
    "track": "backend"
  },
  {
    "questionId": "coding-008",
    "index": 0,
    "question": "What if ties?",
    "answer": "If ties should return all employees sharing the highest salary, first compute the maximum salary and then filter employees with that salary, or group by salary and select the maximum salary group. Do not use `maxBy` alone if multiple tied employees must be returned.",
    "track": "backend"
  },
  {
    "questionId": "coding-009",
    "index": 0,
    "question": "How would you solve it without sorting?",
    "answer": "If sorting is only being used to find an extreme or maintain order, consider a single scan with a running maximum/minimum or a hash-based structure. That can reduce O(n log n) sorting to O(n) when the problem does not actually require the full sorted order.",
    "track": "backend"
  },
  {
    "questionId": "coding-010",
    "index": 0,
    "question": "Why can XOR avoid overflow?",
    "answer": "XOR does not overflow because it uses bitwise operations rather than integer addition. For numbers from 0..n with exactly one missing value, XOR every expected value with every input value; equal values cancel because `x ^ x = 0`, leaving the missing value.",
    "track": "backend"
  },
  {
    "questionId": "coding-011",
    "index": 0,
    "question": "Ignore punctuation?",
    "answer": "Normalize the input by ignoring characters that are not part of the comparison, or use two pointers that advance past punctuation and whitespace before comparing. The important point is to define whether case and Unicode characters should also be ignored.",
    "track": "backend"
  },
  {
    "questionId": "coding-012",
    "index": 0,
    "question": "How do you merge in place?",
    "answer": "An in-place solution modifies the existing data structure instead of allocating another full-sized copy. For arrays this often means maintaining one or two write/read pointers and reusing the original slots, reducing extra space to O(1) while preserving the required result.",
    "track": "backend"
  },
  {
    "questionId": "coding-013",
    "index": 0,
    "question": "Unsorted array?",
    "answer": "For an unsorted array, the approach depends on the parent problem. If the goal is to find a target or extreme value, a linear scan is usually O(n) and needs O(1) extra space; sorting is only needed when the problem actually requires ordered output or a sorted-array technique.",
    "track": "backend"
  },
  {
    "questionId": "coding-014",
    "index": 0,
    "question": "Can space be reduced?",
    "answer": "Space can often be reduced by replacing an auxiliary collection with a few variables, two pointers, or in-place updates. Whether O(1) extra space is possible depends on whether the input may be modified and what output the problem requires.",
    "track": "backend"
  },
  {
    "questionId": "coding-015",
    "index": 0,
    "question": "Do duplicates matter?",
    "answer": "Duplicates matter only if the problem's definition treats duplicate values differently. For example, merging sorted arrays normally keeps duplicates, while a union operation may remove them. Clarify the required output before choosing the data structure or algorithm.",
    "track": "backend"
  },
  {
    "questionId": "coding-016",
    "index": 0,
    "question": "Why LinkedHashMap?",
    "answer": "LinkedHashMap is useful when you need HashMap-style key lookup while preserving insertion order, or access order when configured that way. That makes it a common building block for deterministic output and simple LRU-style caches.",
    "track": "backend"
  },
  {
    "questionId": "coding-017",
    "index": 0,
    "question": "Can you solve it in O(n)?",
    "answer": "An O(n) solution processes the input a constant number of times and avoids nested scans or unnecessary sorting. A common technique is a HashMap or HashSet to provide expected O(1) lookup while maintaining the required state during one traversal.",
    "track": "backend"
  },
  {
    "questionId": "coding-018",
    "index": 0,
    "question": "Why does resetting one pointer find the entry?",
    "answer": "Use Floyd’s tortoise-and-hare algorithm: slow moves one step and fast two; a meeting proves a cycle, then reset one pointer to find the cycle entry. Floyd’s algorithm gives O(n) time and O(1) extra space. The key reasoning is that once pointers meet inside the cycle, moving one pointer to the head and advancing both one step makes them meet at the cycle entry.",
    "track": "backend"
  },
  {
    "questionId": "coding-019",
    "index": 0,
    "question": "How do you find the first occurrence?",
    "answer": "To find the first occurrence, scan from left to right and return immediately when the target condition is met. This preserves the earliest position and gives O(n) worst-case time with O(1) extra space for a simple search.",
    "track": "backend"
  },
  {
    "questionId": "coding-020",
    "index": 0,
    "question": "How would you support other bracket types?",
    "answer": "Use a stack and map each closing bracket to its corresponding opening bracket. When a closing bracket appears, the stack must contain the matching opening bracket at the top. This extends the usual parenthesis algorithm without changing its O(n) complexity.",
    "track": "backend"
  },
  {
    "questionId": "system-001",
    "index": 0,
    "question": "How estimate QPS?",
    "answer": "Estimate QPS from expected requests per second: average traffic plus a peak factor. State assumptions such as users, requests per user and peak multiplier, then validate the estimate with real production metrics when available.",
    "track": "backend"
  },
  {
    "questionId": "system-002",
    "index": 0,
    "question": "How generate IDs?",
    "answer": "For generated IDs, choose a strategy based on uniqueness, ordering and scale: database sequences/identity columns are simple, while UUID/ULID-style IDs avoid a single centralized allocation point. Consider index size, sortability and cross-service generation requirements.",
    "track": "backend"
  },
  {
    "questionId": "system-003",
    "index": 0,
    "question": "What if Redis fails?",
    "answer": "If Redis fails, decide whether the cache is an optimization or a correctness dependency. For a cache, fall back to the source of truth with timeouts and load protection; for required state, fail closed or use a replicated/alternate store rather than silently making unsafe decisions.",
    "track": "backend"
  },
  {
    "questionId": "system-004",
    "index": 0,
    "question": "Provider outage?",
    "answer": "During a provider outage, stop or limit new calls with timeouts and circuit breaking, queue retryable work durably, and use bounded backoff. Keep the operation idempotent and provide a reconciliation path for requests whose outcome is unknown.",
    "track": "backend"
  },
  {
    "questionId": "system-005",
    "index": 0,
    "question": "Payment succeeds, inventory fails?",
    "answer": "Do not try to make two independent databases atomic with a distributed transaction by default. Persist the local order/payment state and use an outbox plus Saga/state-machine workflow to coordinate compensation or retry when inventory fails.",
    "track": "backend"
  },
  {
    "questionId": "system-006",
    "index": 0,
    "question": "How validate file type?",
    "answer": "Validate both the declared content type and the actual file characteristics where security matters, enforce size limits, sanitize filenames, scan uploads when required, and store files outside the application web root. A signed upload URL controls where the file is sent but does not replace validation.",
    "track": "backend"
  },
  {
    "questionId": "system-007",
    "index": 0,
    "question": "Cache-aside?",
    "answer": "Cache-aside means the application reads the cache first; on a miss it reads the database, stores the result in the cache with an appropriate TTL, and returns it. Writes normally update the database and then invalidate or refresh the affected cache entry.",
    "track": "backend"
  },
  {
    "questionId": "system-008",
    "index": 0,
    "question": "RTO vs RPO?",
    "answer": "RTO is the maximum acceptable time to restore service after a failure. RPO is the maximum acceptable amount of data loss measured in time. A system with RTO 30 minutes and RPO 5 minutes aims to restore within 30 minutes while losing no more than about 5 minutes of data.",
    "track": "backend"
  },
  {
    "questionId": "system-009",
    "index": 0,
    "question": "CAP vs ACID?",
    "answer": "ACID stands for Atomicity, Consistency, Isolation and Durability. Atomicity makes a transaction all-or-nothing, consistency preserves database rules, isolation controls interaction between concurrent transactions, and durability ensures committed changes survive failures.",
    "track": "backend"
  },
  {
    "questionId": "system-010",
    "index": 0,
    "question": "How choose shard key?",
    "answer": "Choose a shard key that distributes writes and storage evenly while matching the most common access pattern. Avoid hot keys and keys that make important queries require scatter-gather across many shards; tenant or customer ID can work when traffic is well distributed.",
    "track": "backend"
  },
  {
    "questionId": "system-011",
    "index": 0,
    "question": "When replicas stop helping?",
    "answer": "Replicas stop helping when replication lag is too high, the workload is write-heavy, reads cannot tolerate stale data, or the primary remains the bottleneck. They can also add operational complexity without improving the actual bottleneck.",
    "track": "backend"
  },
  {
    "questionId": "system-012",
    "index": 0,
    "question": "Which operations need strong consistency?",
    "answer": "Operations such as payments, balance updates, inventory reservation and authorization decisions often require strong consistency because stale state can create incorrect business outcomes. Read-only analytics or dashboards can often tolerate eventual consistency.",
    "track": "backend"
  },
  {
    "questionId": "system-013",
    "index": 0,
    "question": "Why estimate peak QPS?",
    "answer": "Peak QPS matters because capacity must survive bursts, not only the daily average. Size compute, connection pools, queues and downstream capacity against a realistic peak while avoiding excessive overprovisioning.",
    "track": "backend"
  },
  {
    "questionId": "system-014",
    "index": 0,
    "question": "Backpressure vs buffering?",
    "answer": "Backpressure slows or limits producers when consumers cannot keep up; buffering stores work temporarily. Use bounded buffers so buffering cannot grow without limit, then apply backpressure, rejection or load shedding when capacity is exhausted.",
    "track": "backend"
  },
  {
    "questionId": "system-015",
    "index": 0,
    "question": "What is an SLO?",
    "answer": "An SLO is a target for a service-level indicator, such as successful request percentage or a latency percentile. It defines the reliability level the team intends to provide and can guide release and operational decisions.",
    "track": "backend"
  },
  {
    "questionId": "sql-001",
    "index": 0,
    "question": "Composite key?",
    "answer": "A primary key made up of two or more columns together, used when no single column uniquely identifies a row but the combination does — common in join/association tables (e.g. a student\\_id + course\\_id pair in an enrollment table).",
    "track": "backend"
  },
  {
    "questionId": "sql-002",
    "index": 0,
    "question": "Multiple unique constraints?",
    "answer": "A table can have multiple unique constraints, each enforcing uniqueness for a different business rule. For example, email and external_reference can each be unique independently. The database should enforce these constraints rather than relying only on application checks, especially under concurrent requests.",
    "track": "backend"
  },
  {
    "questionId": "sql-003",
    "index": 0,
    "question": "Cascade vs restrict?",
    "answer": "CASCADE propagates a parent change such as DELETE to related rows, while RESTRICT or NO ACTION prevents the parent operation when dependent rows exist. The choice should reflect ownership: cascade is useful for truly dependent data, while restrict is safer when child records must not disappear implicitly.",
    "track": "backend"
  },
  {
    "questionId": "sql-004",
    "index": 0,
    "question": "Why denormalize?",
    "answer": "Normalization organizes relational data to reduce unnecessary duplication and update anomalies. First normal form focuses on atomic values, second normal form removes partial dependency on part of a composite key, and third normal form removes transitive dependency on non-key attributes. Production systems sometimes deliberately denormalize when read performance or reporting requirements justify the trade-off.",
    "track": "backend"
  },
  {
    "questionId": "sql-005",
    "index": 0,
    "question": "Composite index?",
    "answer": "A composite index stores multiple columns in a defined order. The leading-column order matters because the database can generally use the leftmost prefix efficiently for predicates and ordering. An index on (A,B,C) is not equivalent to one on (B,A,C), and selectivity plus actual query patterns should drive the order.",
    "track": "backend"
  },
  {
    "questionId": "sql-006",
    "index": 0,
    "question": "How does the leftmost-prefix rule affect this index?",
    "answer": "For a composite index such as (A, B, C), the database can generally use the leading prefix A or A+B effectively, while a query on B alone usually cannot use the index in the same way. The exact optimizer behavior depends on the database, but the index column order should match the most selective and common access patterns.",
    "track": "backend"
  },
  {
    "questionId": "sql-006",
    "index": 1,
    "question": "How would you choose column order?",
    "answer": "Choose composite-index column order based on the workload: equality predicates commonly come before range predicates, and columns used for ordering or joins may also influence the design. Then validate the choice with the database's execution plan and real data distribution.",
    "track": "backend"
  },
  {
    "questionId": "sql-007",
    "index": 0,
    "question": "HAVING without GROUP BY?",
    "answer": "HAVING filters groups after aggregation. Without GROUP BY, the query can still form one implicit group over the entire filtered result, so HAVING can be used to filter an aggregate condition such as HAVING COUNT(*) > 10.",
    "track": "backend"
  },
  {
    "questionId": "sql-008",
    "index": 0,
    "question": "Why can WHERE turn LEFT JOIN into INNER JOIN?",
    "answer": "A LEFT JOIN preserves unmatched rows from the left table, but a WHERE condition on a column from the right table rejects NULL values produced for unmatched rows. That effectively turns the result into an INNER JOIN. If the filter should apply during matching while preserving unmatched left rows, put the condition in the ON clause.",
    "track": "backend"
  },
  {
    "questionId": "sql-008",
    "index": 1,
    "question": "When should a filter go in ON instead?",
    "answer": "Put a right-table filter in the ON clause when you want to restrict which rows match while still preserving unmatched rows from the left side of a LEFT JOIN. Put it in WHERE when rows failing the condition should be removed from the final result.",
    "track": "backend"
  },
  {
    "questionId": "sql-009",
    "index": 0,
    "question": "ROW_NUMBER vs RANK vs DENSE_RANK?",
    "answer": "ROW_NUMBER assigns a unique sequence even when values tie. RANK gives tied rows the same rank and leaves gaps after the tie. DENSE_RANK gives tied rows the same rank but does not leave gaps. For top-N-per-group problems, choose based on whether ties should share the same rank.",
    "track": "backend"
  },
  {
    "questionId": "sql-009",
    "index": 1,
    "question": "How do you find top 3 salaries per department?",
    "answer": "Use a window function partitioned by department and ordered by salary descending. If the requirement is three distinct salary levels, DENSE_RANK is usually appropriate; if exactly three employee rows are required, ROW_NUMBER is more appropriate. Filter the windowed result in an outer query.",
    "track": "backend"
  },
  {
    "questionId": "sql-012",
    "index": 0,
    "question": "ACID?",
    "answer": "Atomicity is all-or-nothing; consistency preserves constraints; isolation controls concurrency; durability concerns committed data survival.",
    "track": "backend"
  },
  {
    "questionId": "sql-013",
    "index": 0,
    "question": "Which relates to concurrency?",
    "answer": "Database concurrency is mainly controlled through transaction isolation, locking and MVCC mechanisms. The correct choice depends on whether the application must prevent dirty reads, non-repeatable reads, phantom reads or lost updates while balancing throughput and contention.",
    "track": "backend"
  },
  {
    "questionId": "sql-014",
    "index": 0,
    "question": "How retry?",
    "answer": "Retry a deadlock when the operation is safe to repeat and the database indicates the transaction was aborted because of deadlock. Use a small bounded retry count with backoff; also fix the underlying lock-order or transaction-length problem.",
    "track": "backend"
  },
  {
    "questionId": "sql-015",
    "index": 0,
    "question": "Full table scan?",
    "answer": "A full table scan reads a large portion or all of a table instead of using an index to locate rows. It can be perfectly reasonable for small tables or queries returning a large percentage of rows, but can be expensive on large selective workloads.",
    "track": "backend"
  },
  {
    "questionId": "sql-016",
    "index": 0,
    "question": "Can TRUNCATE roll back?",
    "answer": "DELETE removes selected rows and can be filtered; TRUNCATE removes all rows using a database-specific fast path and has different transactional, logging and identity semantics; DROP removes the table definition itself.",
    "track": "backend"
  },
  {
    "questionId": "sql-017",
    "index": 0,
    "question": "When materialize?",
    "answer": "A view stores a query definition and computes its result when queried, while a materialized view stores the result physically and must be refreshed to reflect source changes.",
    "track": "backend"
  },
  {
    "questionId": "sql-018",
    "index": 0,
    "question": "Recursive CTE?",
    "answer": "A recursive CTE defines an anchor query and a recursive query that repeatedly expands from the previous result. It is useful for hierarchies such as employee-manager trees or graph-like relationships. A termination condition is essential to avoid runaway recursion.",
    "track": "backend"
  },
  {
    "questionId": "sql-019",
    "index": 0,
    "question": "When use pessimistic?",
    "answer": "Pessimistic locking is appropriate when conflicts are frequent or the cost of concurrent modification is high and the transaction can hold a lock for a short, predictable period. It reduces conflicting updates but can increase blocking and deadlocks, so optimistic locking is often preferable when conflicts are rare.",
    "track": "backend"
  },
  {
    "questionId": "sql-020",
    "index": 0,
    "question": "Can an index hurt?",
    "answer": "Yes. Every index consumes storage and must be maintained on INSERT, UPDATE and DELETE, so too many indexes increase write cost and can slow bulk loads. Keep indexes that support real query patterns and verify their benefit with execution plans and workload metrics.",
    "track": "backend"
  },
  {
    "questionId": "adv-001",
    "index": 0,
    "question": "Parent delegation?",
    "answer": "Loading finds bytecode; linking verifies/prepares/resolves; initialization runs class initialization when required.",
    "track": "backend"
  },
  {
    "questionId": "adv-002",
    "index": 0,
    "question": "How diagnose?",
    "answer": "Common causes include static collections, unbounded caches, listeners and ThreadLocal misuse.",
    "track": "backend"
  },
  {
    "questionId": "adv-003",
    "index": 0,
    "question": "When useful?",
    "answer": "Remove values in finally where appropriate. ThreadLocal does not automatically propagate across executor threads.",
    "track": "backend"
  },
  {
    "questionId": "adv-004",
    "index": 0,
    "question": "thenApply vs thenCompose?",
    "answer": "thenApply transforms, thenCompose flattens dependent futures and allOf combines work.",
    "track": "backend"
  },
  {
    "questionId": "adv-005",
    "index": 0,
    "question": "What is work stealing?",
    "answer": "Choose based on workload and isolation; blocking I/O should not casually share a CPU-oriented common pool.",
    "track": "backend"
  },
  {
    "questionId": "adv-006",
    "index": 0,
    "question": "What if inner marks rollback-only?",
    "answer": "REQUIRED usually shares; REQUIRES_NEW suspends the outer transaction. Self-invocation can bypass interception.",
    "track": "backend"
  },
  {
    "questionId": "adv-007",
    "index": 0,
    "question": "What if service catches it?",
    "answer": "A RuntimeException propagating through the transactional proxy can trigger rollback. Advice is not the rollback mechanism.",
    "track": "backend"
  },
  {
    "questionId": "adv-008",
    "index": 0,
    "question": "What is ApplicationContext?",
    "answer": "Configuration loads, beans are discovered/created and the web server starts for web applications.",
    "track": "backend"
  },
  {
    "questionId": "spring-001",
    "index": 0,
    "question": "Why constructor injection?",
    "answer": "Dependency Injection means an object receives its collaborators instead of constructing them itself. Spring's container creates and wires beans according to configuration and annotations. Constructor injection is generally preferred because dependencies are explicit, fields can be final, and required dependencies are enforced at construction time.",
    "track": "backend"
  },
  {
    "questionId": "spring-002",
    "index": 0,
    "question": "BeanPostProcessor?",
    "answer": "A Spring singleton bean is created, dependencies are injected, initialization callbacks run, and the bean becomes available for use; destruction callbacks run when the application context closes. BeanPostProcessors can modify or wrap beans around initialization, which is important for features implemented through proxies such as AOP and transactions.",
    "track": "backend"
  },
  {
    "questionId": "spring-003",
    "index": 0,
    "question": "Does @Service add transactions?",
    "answer": "@Component, @Service and @Repository are stereotype annotations that register classes as Spring beans. @Service communicates service-layer intent and @Repository communicates persistence intent; @Repository also participates in exception translation for supported persistence technologies. Functionally they are all component-scanning candidates.",
    "track": "backend"
  },
  {
    "questionId": "spring-004",
    "index": 0,
    "question": "What is the difference between @Controller and @RestController?",
    "answer": "@RestController is a composed annotation equivalent to @Controller plus @ResponseBody. Handler methods return values that Spring writes to the HTTP response body through HttpMessageConverters, commonly serializing Java objects as JSON with Jackson when it is configured. It is intended for REST-style APIs rather than server-side view rendering.",
    "track": "backend"
  },
  {
    "questionId": "spring-004",
    "index": 1,
    "question": "How does Jackson get involved?",
    "answer": "@RestController is a composed annotation equivalent to @Controller plus @ResponseBody. Handler methods return values that Spring writes to the HTTP response body through HttpMessageConverters, commonly serializing Java objects as JSON with Jackson when it is configured. It is intended for REST-style APIs rather than server-side view rendering.",
    "track": "backend"
  },
  {
    "questionId": "spring-004",
    "index": 2,
    "question": "What determines the response Content-Type?",
    "answer": "@RestController is a composed annotation equivalent to @Controller plus @ResponseBody. Handler methods return values that Spring writes to the HTTP response body through HttpMessageConverters, commonly serializing Java objects as JSON with Jackson when it is configured. It is intended for REST-style APIs rather than server-side view rendering.",
    "track": "backend"
  },
  {
    "questionId": "spring-005",
    "index": 0,
    "question": "How debug auto-configuration?",
    "answer": "Spring Boot auto-configuration conditionally creates beans based on the application's classpath, existing beans, configuration properties and other conditions. Starters provide dependency sets, while auto-configuration supplies conventional defaults. User-defined beans can often override or back off those defaults.",
    "track": "backend"
  },
  {
    "questionId": "spring-006",
    "index": 0,
    "question": "How does Spring handle @Bean method calls inside @Configuration?",
    "answer": "@Configuration marks a class as a source of bean definitions. @Bean marks a method whose return object should be registered in the Spring application context. A configuration class is useful for grouping configuration, while @Bean is particularly useful when constructing third-party classes, applying custom initialization, or when component scanning cannot be used.",
    "track": "backend"
  },
  {
    "questionId": "spring-006",
    "index": 1,
    "question": "What changes with proxyBeanMethods=false?",
    "answer": "@Configuration marks a class as a source of bean definitions. @Bean marks a method whose return object should be registered in the Spring application context. A configuration class is useful for grouping configuration, while @Bean is particularly useful when constructing third-party classes, applying custom initialization, or when component scanning cannot be used.",
    "track": "backend"
  },
  {
    "questionId": "spring-006",
    "index": 2,
    "question": "@Component vs @Bean?",
    "answer": "@Configuration marks a class as a source of bean definitions. @Bean marks a method whose return object should be registered in the Spring application context. A configuration class is useful for grouping configuration, while @Bean is particularly useful when constructing third-party classes, applying custom initialization, or when component scanning cannot be used.",
    "track": "backend"
  },
  {
    "questionId": "spring-007",
    "index": 0,
    "question": "Why can self-invocation bypass @Transactional?",
    "answer": "Spring AOP commonly works by creating a proxy around a target bean. Calls entering through the proxy can trigger advice such as transaction, security or logging behavior. A self-invocation through this inside the same class can bypass the proxy, which is why calling another transactional method internally may not start a new transaction as expected.",
    "track": "backend"
  },
  {
    "questionId": "spring-007",
    "index": 1,
    "question": "How do Spring proxies implement AOP?",
    "answer": "Spring AOP commonly works by creating a proxy around a target bean. Calls entering through the proxy can trigger advice such as transaction, security or logging behavior. A self-invocation through this inside the same class can bypass the proxy, which is why calling another transactional method internally may not start a new transaction as expected.",
    "track": "backend"
  },
  {
    "questionId": "spring-008",
    "index": 0,
    "question": "REQUIRED vs REQUIRES_NEW?",
    "answer": "Transaction propagation defines how a method participates in an existing transaction. REQUIRED joins the current transaction or creates one; REQUIRES_NEW suspends the existing transaction and starts a new one; SUPPORTS can run with or without one. Propagation affects rollback boundaries and must be considered together with proxying and exception behavior.",
    "track": "backend"
  },
  {
    "questionId": "spring-008",
    "index": 1,
    "question": "What happens to the outer transaction when the inner one rolls back?",
    "answer": "Transaction propagation defines how a method participates in an existing transaction. REQUIRED joins the current transaction or creates one; REQUIRES_NEW suspends the existing transaction and starts a new one; SUPPORTS can run with or without one. Propagation affects rollback boundaries and must be considered together with proxying and exception behavior.",
    "track": "backend"
  },
  {
    "questionId": "spring-009",
    "index": 0,
    "question": "Dirty read?",
    "answer": "Isolation controls which concurrent transaction effects are visible. Common levels are READ COMMITTED, REPEATABLE READ and SERIALIZABLE, with READ UNCOMMITTED allowing dirty reads in systems that support it. Stronger isolation reduces anomalies but can increase locking, contention or retries, so it is a business consistency decision rather than simply 'higher is better'.",
    "track": "backend"
  },
  {
    "questionId": "spring-010",
    "index": 0,
    "question": "How do you handle validation errors globally?",
    "answer": "Global exception handling centralizes controller error translation using mechanisms such as @RestControllerAdvice and @ExceptionHandler. It lets the API return consistent status codes and error bodies instead of duplicating try/catch logic in every controller. The handler should distinguish validation, client, domain, and unexpected server errors and avoid exposing internal details.",
    "track": "backend"
  },
  {
    "questionId": "spring-010",
    "index": 1,
    "question": "Should every exception return 500?",
    "answer": "Global exception handling centralizes controller error translation using mechanisms such as @RestControllerAdvice and @ExceptionHandler. It lets the API return consistent status codes and error bodies instead of duplicating try/catch logic in every controller. The handler should distinguish validation, client, domain, and unexpected server errors and avoid exposing internal details.",
    "track": "backend"
  },
  {
    "questionId": "spring-010",
    "index": 2,
    "question": "How do you prevent sensitive stack traces from reaching clients?",
    "answer": "Global exception handling centralizes controller error translation using mechanisms such as @RestControllerAdvice and @ExceptionHandler. It lets the API return consistent status codes and error bodies instead of duplicating try/catch logic in every controller. The handler should distinguish validation, client, domain, and unexpected server errors and avoid exposing internal details.",
    "track": "backend"
  },
  {
    "questionId": "spring-011",
    "index": 0,
    "question": "@Valid vs @Validated?",
    "answer": "@Valid triggers Bean Validation on an object at the supported validation boundary, commonly a request DTO in a controller. Constraints such as @NotNull, @Size, and @Email are evaluated before the controller continues. Validation failures are normally translated into a 400 response through Spring’s exception handling infrastructure.",
    "track": "backend"
  },
  {
    "questionId": "spring-011",
    "index": 1,
    "question": "How do you validate nested objects?",
    "answer": "@Valid triggers Bean Validation on an object at the supported validation boundary, commonly a request DTO in a controller. Constraints such as @NotNull, @Size, and @Email are evaluated before the controller continues. Validation failures are normally translated into a 400 response through Spring’s exception handling infrastructure.",
    "track": "backend"
  },
  {
    "questionId": "spring-011",
    "index": 2,
    "question": "How do you create a custom constraint?",
    "answer": "@Valid triggers Bean Validation on an object at the supported validation boundary, commonly a request DTO in a controller. Constraints such as @NotNull, @Size, and @Email are evaluated before the controller continues. Validation failures are normally translated into a 400 response through Spring’s exception handling infrastructure.",
    "track": "backend"
  },
  {
    "questionId": "spring-012",
    "index": 0,
    "question": "When manual validation?",
    "answer": "Inject Validator for manual validation or use @Validated with method constraints.",
    "track": "backend"
  },
  {
    "questionId": "spring-013",
    "index": 0,
    "question": "What is the difference between liveness and readiness?",
    "answer": "Actuator exposes operational endpoints for monitoring and management, such as health, metrics, info, and mappings depending on configuration and dependencies. It is useful for production observability, but endpoints should be deliberately exposed and protected because some reveal application internals.",
    "track": "backend"
  },
  {
    "questionId": "spring-013",
    "index": 1,
    "question": "How do you secure Actuator endpoints?",
    "answer": "Actuator exposes operational endpoints for monitoring and management, such as health, metrics, info, and mappings depending on configuration and dependencies. It is useful for production observability, but endpoints should be deliberately exposed and protected because some reveal application internals.",
    "track": "backend"
  },
  {
    "questionId": "spring-013",
    "index": 2,
    "question": "How can metrics be exported to Prometheus?",
    "answer": "Actuator exposes operational endpoints for monitoring and management, such as health, metrics, info, and mappings depending on configuration and dependencies. It is useful for production observability, but endpoints should be deliberately exposed and protected because some reveal application internals.",
    "track": "backend"
  },
  {
    "questionId": "spring-014",
    "index": 0,
    "question": "Property precedence?",
    "answer": "Properties, YAML, environment variables and other sources can provide values. Secrets belong in secret management.",
    "track": "backend"
  },
  {
    "questionId": "spring-015",
    "index": 0,
    "question": "Profiles vs feature flags?",
    "answer": "Useful for environment differences, not as a replacement for runtime feature flags.",
    "track": "backend"
  },
  {
    "questionId": "spring-016",
    "index": 0,
    "question": "Where extract JWT?",
    "answer": "Choose based on lifecycle boundary: filters for low-level request concerns, interceptors for handlers, advice for errors/binding.",
    "track": "backend"
  },
  {
    "questionId": "spring-017",
    "index": 0,
    "question": "What happens on a cache miss?",
    "answer": "Spring Cache provides an abstraction over cache providers using annotations such as @Cacheable, @CachePut, and @CacheEvict. @Cacheable can return a cached value instead of executing the method. The important production concerns are key design, TTL, invalidation, stale data, serialization, cache size, and behavior when the cache is unavailable.",
    "track": "backend"
  },
  {
    "questionId": "spring-017",
    "index": 1,
    "question": "How do you invalidate related keys after an update?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "spring-017",
    "index": 2,
    "question": "What problems occur with distributed caches?",
    "answer": "Spring Cache provides an abstraction over cache providers using annotations such as @Cacheable, @CachePut, and @CacheEvict. @Cacheable can return a cached value instead of executing the method. The important production concerns are key design, TTL, invalidation, stale data, serialization, cache size, and behavior when the cache is unavailable.",
    "track": "backend"
  },
  {
    "questionId": "spring-018",
    "index": 0,
    "question": "Why does self-invocation break @Async?",
    "answer": "@Async executes a method asynchronously through a Spring-managed proxy and a configured TaskExecutor. The caller can return before the asynchronous work completes. It is not a durable messaging system: tasks can be lost on process failure unless the work is persisted elsewhere, and thread-pool capacity must be bounded and monitored.",
    "track": "backend"
  },
  {
    "questionId": "spring-018",
    "index": 1,
    "question": "How do you configure the executor?",
    "answer": "@Async executes a method asynchronously through a Spring-managed proxy and a configured TaskExecutor. The caller can return before the asynchronous work completes. It is not a durable messaging system: tasks can be lost on process failure unless the work is persisted elsewhere, and thread-pool capacity must be bounded and monitored.",
    "track": "backend"
  },
  {
    "questionId": "spring-018",
    "index": 2,
    "question": "How do you handle exceptions from void @Async methods?",
    "answer": "@Async executes a method asynchronously through a Spring-managed proxy and a configured TaskExecutor. The caller can return before the asynchronous work completes. It is not a durable messaging system: tasks can be lost on process failure unless the work is persisted elsewhere, and thread-pool capacity must be bounded and monitored.",
    "track": "backend"
  },
  {
    "questionId": "spring-019",
    "index": 0,
    "question": "What is auto-configuration?",
    "answer": "Spring Boot's mechanism of automatically configuring beans based on what's on the classpath and existing configuration — e.g. if \\<code>spring-boot-starter-data-jpa\\</code> and a JDBC driver are present, it auto-configures a \\<code>DataSource\\</code>, \\<code>EntityManagerFactory\\</code>, and transaction manager, unless the developer has already defined their own. Enabled via \\<code>@EnableAutoConfiguration\\</code>, included in \\<code>@SpringBootApplication\\</code>.",
    "track": "backend"
  },
  {
    "questionId": "spring-019",
    "index": 1,
    "question": "How does Spring Boot dependency management work?",
    "answer": "A Spring Boot starter is a dependency descriptor that brings a coherent set of libraries for a capability, while Boot dependency management keeps compatible versions aligned. Starters reduce manual dependency selection and make common setups easier to reproduce. They work with auto-configuration to configure components when the application’s classpath and properties match the expected conditions.",
    "track": "backend"
  },
  {
    "questionId": "spring-019",
    "index": 2,
    "question": "Can you create a custom starter?",
    "answer": "A Spring Boot starter is a dependency descriptor that brings a coherent set of libraries for a capability, while Boot dependency management keeps compatible versions aligned. Starters reduce manual dependency selection and make common setups easier to reproduce. They work with auto-configuration to configure components when the application’s classpath and properties match the expected conditions.",
    "track": "backend"
  },
  {
    "questionId": "spring-020",
    "index": 0,
    "question": "How detect N+1?",
    "answer": "Avoid N+1 with query-specific fetching such as fetch joins or EntityGraph, DTO projections, or batching where appropriate. Confirm the actual SQL/query count before changing the fetch strategy.",
    "track": "backend"
  },
  {
    "questionId": "cloud-001",
    "index": 0,
    "question": "How choose cloud?",
    "answer": "Compare ecosystem fit, skills, regions, security, cost and managed services.",
    "track": "backend"
  },
  {
    "questionId": "cloud-002",
    "index": 0,
    "question": "What state should be externalized?",
    "answer": "Horizontal scaling requires appropriate state management and traffic distribution.",
    "track": "backend"
  },
  {
    "questionId": "cloud-003",
    "index": 0,
    "question": "L4 vs L7?",
    "answer": "It may perform health checks, L4/L7 routing and TLS termination depending on product.",
    "track": "backend"
  },
  {
    "questionId": "cloud-004",
    "index": 0,
    "question": "Container vs VM?",
    "answer": "Containers improve deployment consistency but are not identical to VMs in isolation characteristics.",
    "track": "backend"
  },
  {
    "questionId": "cloud-005",
    "index": 0,
    "question": "Pod vs container?",
    "answer": "Pods run workloads, Services provide stable networking and Deployments manage replicas/rollouts.",
    "track": "backend"
  },
  {
    "questionId": "cloud-006",
    "index": 0,
    "question": "Startup probe?",
    "answer": "A process can be alive but temporarily not ready. Avoid fragile deep liveness checks.",
    "track": "backend"
  },
  {
    "questionId": "cloud-007",
    "index": 0,
    "question": "Scale out vs up?",
    "answer": "It can use CPU, memory, request rate or custom metrics; downstream bottlenecks remain possible.",
    "track": "backend"
  },
  {
    "questionId": "cloud-008",
    "index": 0,
    "question": "Object vs block storage?",
    "answer": "Use for documents/images/backups; store transactional searchable metadata in a database.",
    "track": "backend"
  },
  {
    "questionId": "cloud-009",
    "index": 0,
    "question": "Plan vs apply?",
    "answer": "IaC improves reproducibility and reviewability while reducing drift.",
    "track": "backend"
  },
  {
    "questionId": "cloud-010",
    "index": 0,
    "question": "How rotate secrets?",
    "answer": "Prefer workload identities/roles over static keys and use layered network/application controls.",
    "track": "backend"
  },
  {
    "questionId": "v9-001",
    "index": 0,
    "question": "Why is String a good HashMap key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v9-001",
    "index": 1,
    "question": "What is the String pool?",
    "answer": "Immutability makes String safe to share, enables string pooling, simplifies caching and hashing, and avoids surprising changes when a String is used as a map key. Its internal representation is private and String does not expose mutating operations.",
    "track": "backend"
  },
  {
    "questionId": "v9-001",
    "index": 2,
    "question": "StringBuilder vs StringBuffer?",
    "answer": "Immutability makes String safe to share, enables string pooling, simplifies caching and hashing, and avoids surprising changes when a String is used as a map key. Its internal representation is private and String does not expose mutating operations.",
    "track": "backend"
  },
  {
    "questionId": "v9-002",
    "index": 0,
    "question": "Where is the String pool located in modern JVMs?",
    "answer": "A literal such as \"java\" is normally interned in the String pool. If the same literal appears again, the references can point to the same pooled object. new String(\"java\") creates a distinct object, while intern() returns the pooled representation.",
    "track": "backend"
  },
  {
    "questionId": "v9-002",
    "index": 1,
    "question": "Why should == not be used for String content?",
    "answer": "A literal such as \"java\" is normally interned in the String pool. If the same literal appears again, the references can point to the same pooled object. new String(\"java\") creates a distinct object, while intern() returns the pooled representation.",
    "track": "backend"
  },
  {
    "questionId": "v9-003",
    "index": 0,
    "question": "Why is returning the internal list dangerous?",
    "answer": "If a class stores a mutable List or Date supplied by a caller, the caller could otherwise mutate the class state. A defensive copy is made on input and often again on output. For modern Java, immutable collections can also help when the data itself is immutable.",
    "track": "backend"
  },
  {
    "questionId": "v9-003",
    "index": 1,
    "question": "List.copyOf vs Collections.unmodifiableList?",
    "answer": "A defensive copy prevents callers from modifying an object's internal collection through a shared reference. Copy mutable input in the constructor and return an unmodifiable view or copy from the getter when encapsulation requires it.",
    "track": "backend"
  },
  {
    "questionId": "v9-004",
    "index": 0,
    "question": "How would you deep copy safely?",
    "answer": "For an object containing a mutable Address, a shallow copy can leave both objects pointing to the same Address. Mutating that Address then affects both copies. Deep copying duplicates the object graph that must be independently mutable.",
    "track": "backend"
  },
  {
    "questionId": "v9-004",
    "index": 1,
    "question": "Why can serialization-based copying be problematic?",
    "answer": "For an object containing a mutable Address, a shallow copy can leave both objects pointing to the same Address. Mutating that Address then affects both copies. Deep copying duplicates the object graph that must be independently mutable.",
    "track": "backend"
  },
  {
    "questionId": "v9-005",
    "index": 0,
    "question": "Can parameters be narrowed when overriding?",
    "answer": "Java allows an overriding method to narrow the return type covariantly. This improves usability because callers of the subclass can receive the more specific type without an explicit cast.",
    "track": "backend"
  },
  {
    "questionId": "v9-005",
    "index": 1,
    "question": "How is covariance different from method overloading?",
    "answer": "Java allows an overriding method to narrow the return type covariantly. This improves usability because callers of the subclass can receive the more specific type without an explicit cast.",
    "track": "backend"
  },
  {
    "questionId": "v9-006",
    "index": 0,
    "question": "What does volatile guarantee?",
    "answer": "The JMM explains happens-before relationships. synchronized, volatile, final-field guarantees and concurrent utilities establish visibility and ordering rules. Without a happens-before relationship, one thread is not guaranteed to observe another thread's writes in the expected order.",
    "track": "backend"
  },
  {
    "questionId": "v9-006",
    "index": 1,
    "question": "Does volatile make i++ atomic?",
    "answer": "The JMM explains happens-before relationships. synchronized, volatile, final-field guarantees and concurrent utilities establish visibility and ordering rules. Without a happens-before relationship, one thread is not guaranteed to observe another thread's writes in the expected order.",
    "track": "backend"
  },
  {
    "questionId": "v9-006",
    "index": 2,
    "question": "What establishes happens-before?",
    "answer": "The JMM explains happens-before relationships. synchronized, volatile, final-field guarantees and concurrent utilities establish visibility and ordering rules. Without a happens-before relationship, one thread is not guaranteed to observe another thread's writes in the expected order.",
    "track": "backend"
  },
  {
    "questionId": "v9-007",
    "index": 0,
    "question": "When would synchronized be preferable?",
    "answer": "For a shared int, i++ can read the same old value in two threads and both write the same incremented result. AtomicInteger provides an atomic increment operation using concurrency primitives.",
    "track": "backend"
  },
  {
    "questionId": "v9-007",
    "index": 1,
    "question": "How does compareAndSet work?",
    "answer": "For a shared int, i++ can read the same old value in two threads and both write the same incremented result. AtomicInteger provides an atomic increment operation using concurrency primitives.",
    "track": "backend"
  },
  {
    "questionId": "v9-008",
    "index": 0,
    "question": "What is compareAndSet?",
    "answer": "Atomic classes provide lock-free-style atomic operations for specific state transitions. If a business operation requires checking and updating several fields consistently, a synchronized block or Lock can protect the whole invariant.",
    "track": "backend"
  },
  {
    "questionId": "v9-008",
    "index": 1,
    "question": "Can multiple atomic variables replace a lock for every design?",
    "answer": "Atomic classes provide lock-free-style atomic operations for specific state transitions. If a business operation requires checking and updating several fields consistently, a synchronized block or Lock can protect the whole invariant.",
    "track": "backend"
  },
  {
    "questionId": "v9-009",
    "index": 0,
    "question": "Does ThreadLocal work across async thread switches?",
    "answer": "ThreadLocal is useful for request-scoped context in synchronous code, but application servers reuse worker threads. If a large object or security context remains attached, it can survive beyond the request. Call remove() in cleanup code when appropriate.",
    "track": "backend"
  },
  {
    "questionId": "v9-009",
    "index": 1,
    "question": "Why are virtual threads different for ThreadLocal usage?",
    "answer": "ThreadLocal is useful for request-scoped context in synchronous code, but application servers reuse worker threads. If a large object or security context remains attached, it can survive beyond the request. Call remove() in cleanup code when appropriate.",
    "track": "backend"
  },
  {
    "questionId": "v9-010",
    "index": 0,
    "question": "Virtual threads vs reactive programming?",
    "answer": "A virtual thread is cheap compared with a platform thread and can be parked when it blocks, allowing the JVM to reuse carrier threads. They are especially useful for request-per-task applications that perform blocking I/O. They do not make CPU-bound work faster.",
    "track": "backend"
  },
  {
    "questionId": "v9-010",
    "index": 1,
    "question": "Should CPU-bound work use virtual threads?",
    "answer": "A virtual thread is cheap compared with a platform thread and can be parked when it blocks, allowing the JVM to reuse carrier threads. They are especially useful for request-per-task applications that perform blocking I/O. They do not make CPU-bound work faster.",
    "track": "backend"
  },
  {
    "questionId": "v9-010",
    "index": 2,
    "question": "What is pinning?",
    "answer": "A virtual thread is cheap compared with a platform thread and can be parked when it blocks, allowing the JVM to reuse carrier threads. They are especially useful for request-per-task applications that perform blocking I/O. They do not make CPU-bound work faster.",
    "track": "backend"
  },
  {
    "questionId": "v9-011",
    "index": 0,
    "question": "What is AutoCloseable versus Closeable?",
    "answer": "try-with-resources records the exception thrown from the try body as the primary exception and attaches exceptions thrown while closing resources with addSuppressed(). You can inspect them with getSuppressed(). This preserves the original failure while still exposing cleanup failures, which is safer than manually replacing the primary exception in a finally block.",
    "track": "backend"
  },
  {
    "questionId": "v9-011",
    "index": 1,
    "question": "What happens when multiple resources are declared?",
    "answer": "try-with-resources records the exception thrown from the try body as the primary exception and attaches exceptions thrown while closing resources with addSuppressed(). You can inspect them with getSuppressed(). This preserves the original failure while still exposing cleanup failures, which is safer than manually replacing the primary exception in a finally block.",
    "track": "backend"
  },
  {
    "questionId": "v9-011",
    "index": 2,
    "question": "How do you inspect suppressed exceptions?",
    "answer": "try-with-resources records the exception thrown from the try body as the primary exception and attaches exceptions thrown while closing resources with addSuppressed(). You can inspect them with getSuppressed(). This preserves the original failure while still exposing cleanup failures, which is safer than manually replacing the primary exception in a finally block.",
    "track": "backend"
  },
  {
    "questionId": "v9-012",
    "index": 0,
    "question": "What annotations drive conditional configuration?",
    "answer": "Spring Boot auto-configuration is conditional. When an unexpected bean appears or an expected configuration is missing, enable the condition evaluation report or inspect Actuator and startup logs. Check classpath conditions, bean conditions, properties and exclusions. For a targeted fix, prefer explicit configuration or a narrow auto-configuration exclusion rather than disabling broad Boot behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-012",
    "index": 1,
    "question": "How do you exclude one auto-configuration?",
    "answer": "Spring Boot auto-configuration is conditional. When an unexpected bean appears or an expected configuration is missing, enable the condition evaluation report or inspect Actuator and startup logs. Check classpath conditions, bean conditions, properties and exclusions. For a targeted fix, prefer explicit configuration or a narrow auto-configuration exclusion rather than disabling broad Boot behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-012",
    "index": 2,
    "question": "How would you write custom auto-configuration?",
    "answer": "Spring Boot auto-configuration is conditional. When an unexpected bean appears or an expected configuration is missing, enable the condition evaluation report or inspect Actuator and startup logs. Check classpath conditions, bean conditions, properties and exclusions. For a targeted fix, prefer explicit configuration or a narrow auto-configuration exclusion rather than disabling broad Boot behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-013",
    "index": 0,
    "question": "Where does BeanPostProcessor fit?",
    "answer": "The lifecycle includes instantiation, dependency population, aware callbacks where applicable, BeanPostProcessor hooks, initialization callbacks such as @PostConstruct, and destruction callbacks such as @PreDestroy for managed singleton beans.",
    "track": "backend"
  },
  {
    "questionId": "v9-013",
    "index": 1,
    "question": "Does @PreDestroy run for prototype beans?",
    "answer": "The lifecycle includes instantiation, dependency population, aware callbacks where applicable, BeanPostProcessor hooks, initialization callbacks such as @PostConstruct, and destruction callbacks such as @PreDestroy for managed singleton beans.",
    "track": "backend"
  },
  {
    "questionId": "v9-014",
    "index": 0,
    "question": "How do you validate configuration properties?",
    "answer": "@Value injects individual property expressions. @ConfigurationProperties binds a related property namespace to a typed object, supports validation and is easier to maintain as configuration grows.",
    "track": "backend"
  },
  {
    "questionId": "v9-014",
    "index": 1,
    "question": "How are environment variables mapped to properties?",
    "answer": "@Value injects individual property expressions. @ConfigurationProperties binds a related property namespace to a typed object, supports validation and is easier to maintain as configuration grows.",
    "track": "backend"
  },
  {
    "questionId": "v9-015",
    "index": 0,
    "question": "Which actuator endpoints are useful in production?",
    "answer": "Actuator integrates operational information into the application. Endpoints can be exposed and secured selectively, and metrics can be connected to monitoring systems. Sensitive endpoints should never be exposed publicly without appropriate security.",
    "track": "backend"
  },
  {
    "questionId": "v9-015",
    "index": 1,
    "question": "How would you secure them?",
    "answer": "Actuator integrates operational information into the application. Endpoints can be exposed and secured selectively, and metrics can be connected to monitoring systems. Sensitive endpoints should never be exposed publicly without appropriate security.",
    "track": "backend"
  },
  {
    "questionId": "v9-016",
    "index": 0,
    "question": "How do you activate profiles in containers?",
    "answer": "You can define application-dev.yml and application-prod.yml and activate one profile at runtime. @Profile can also conditionally register beans. This keeps environment differences outside application code where possible.",
    "track": "backend"
  },
  {
    "questionId": "v9-016",
    "index": 1,
    "question": "What is profile-specific configuration precedence?",
    "answer": "You can define application-dev.yml and application-prod.yml and activate one profile at runtime. @Profile can also conditionally register beans. This keeps environment differences outside application code where possible.",
    "track": "backend"
  },
  {
    "questionId": "v9-017",
    "index": 0,
    "question": "How do you handle validation errors?",
    "answer": "@ControllerAdvice applies exception handlers globally, while @RestControllerAdvice combines it with response-body behavior. A handler can map domain or validation exceptions to consistent HTTP responses.",
    "track": "backend"
  },
  {
    "questionId": "v9-017",
    "index": 1,
    "question": "What if two handlers can match the same exception?",
    "answer": "@ControllerAdvice applies exception handlers globally, while @RestControllerAdvice combines it with response-body behavior. A handler can map domain or validation exceptions to consistent HTTP responses.",
    "track": "backend"
  },
  {
    "questionId": "v9-018",
    "index": 0,
    "question": "Is PATCH always non-idempotent?",
    "answer": "PUT is commonly designed as an idempotent replacement operation, although exact semantics depend on the API. PATCH communicates partial changes. The API should define validation and null/omission semantics clearly.",
    "track": "backend"
  },
  {
    "questionId": "v9-018",
    "index": 1,
    "question": "How do you implement optimistic concurrency for updates?",
    "answer": "Database concurrency is mainly controlled through transaction isolation, locking and MVCC mechanisms. The correct choice depends on whether the application must prevent dirty reads, non-repeatable reads, phantom reads or lost updates while balancing throughput and contention.",
    "track": "backend"
  },
  {
    "questionId": "v9-019",
    "index": 0,
    "question": "Which metrics would you inspect first?",
    "answer": "Start with request rate, error rate, latency percentiles, CPU, memory, thread/connection-pool saturation and downstream latency. For a queue-driven service also inspect queue depth, consumer lag and processing rate.",
    "track": "backend"
  },
  {
    "questionId": "v9-019",
    "index": 1,
    "question": "How would tracing help?",
    "answer": "Tracing follows one request across service boundaries and shows where time is spent. It can separate application time from database or downstream-call time and exposes the specific span causing the latency.",
    "track": "backend"
  },
  {
    "questionId": "v9-019",
    "index": 2,
    "question": "How do you distinguish CPU from I/O latency?",
    "answer": "Compare CPU utilization and thread profiles with I/O and dependency timings. High CPU with hot application stacks suggests CPU-bound work; low CPU with long database, network or file spans suggests I/O wait or downstream latency.",
    "track": "backend"
  },
  {
    "questionId": "v9-020",
    "index": 0,
    "question": "When would you use AFTER_COMMIT?",
    "answer": "ApplicationEventPublisher sends an event to registered listeners. By default listeners execute synchronously in the publishing thread. @TransactionalEventListener can align handling with transaction phases such as AFTER_COMMIT.",
    "track": "backend"
  },
  {
    "questionId": "v9-020",
    "index": 1,
    "question": "How do asynchronous listeners change failure handling?",
    "answer": "ApplicationEventPublisher sends an event to registered listeners. By default listeners execute synchronously in the publishing thread. @TransactionalEventListener can align handling with transaction phases such as AFTER_COMMIT.",
    "track": "backend"
  },
  {
    "questionId": "v9-021",
    "index": 0,
    "question": "How do you configure the executor?",
    "answer": "Spring intercepts calls to @Async methods and submits work to an executor. The caller can receive void, Future or CompletableFuture depending on the method signature. Proxy rules mean self-invocation does not trigger the interceptor.",
    "track": "backend"
  },
  {
    "questionId": "v9-021",
    "index": 1,
    "question": "Why can self-invocation fail?",
    "answer": "Spring intercepts calls to @Async methods and submits work to an executor. The caller can receive void, Future or CompletableFuture depending on the method signature. Proxy rules mean self-invocation does not trigger the interceptor.",
    "track": "backend"
  },
  {
    "questionId": "v9-021",
    "index": 2,
    "question": "What happens to exceptions?",
    "answer": "Spring intercepts calls to @Async methods and submits work to an executor. The caller can receive void, Future or CompletableFuture depending on the method signature. Proxy rules mean self-invocation does not trigger the interceptor.",
    "track": "backend"
  },
  {
    "questionId": "v9-022",
    "index": 0,
    "question": "URI vs header versioning?",
    "answer": "Common approaches include URI versions, headers or media types. The important part is a compatibility policy, deprecation period, documentation and tests. I avoid creating versions for every additive field change.",
    "track": "backend"
  },
  {
    "questionId": "v9-022",
    "index": 1,
    "question": "How would you retire an old version?",
    "answer": "Common approaches include URI versions, headers or media types. The important part is a compatibility policy, deprecation period, documentation and tests. I avoid creating versions for every additive field change.",
    "track": "backend"
  },
  {
    "questionId": "v9-023",
    "index": 0,
    "question": "Is the first-level cache shared between requests?",
    "answer": "The persistence context is more than a cache: it tracks entity state, performs dirty checking and guarantees one managed object instance for a given entity identity within that context. Hibernate implements this with a first-level cache. A second find for the same ID can therefore return the same managed instance without another SQL select.",
    "track": "backend"
  },
  {
    "questionId": "v9-023",
    "index": 1,
    "question": "When is the persistence context flushed?",
    "answer": "The persistence context is more than a cache: it tracks entity state, performs dirty checking and guarantees one managed object instance for a given entity identity within that context. Hibernate implements this with a first-level cache. A second find for the same ID can therefore return the same managed instance without another SQL select.",
    "track": "backend"
  },
  {
    "questionId": "v9-023",
    "index": 2,
    "question": "What is the difference from the second-level cache?",
    "answer": "The persistence context is more than a cache: it tracks entity state, performs dirty checking and guarantees one managed object instance for a given entity identity within that context. Hibernate implements this with a first-level cache. A second find for the same ID can therefore return the same managed instance without another SQL select.",
    "track": "backend"
  },
  {
    "questionId": "v9-024",
    "index": 0,
    "question": "What does merge return?",
    "answer": "A newly created object is transient. persist makes it managed. After the persistence context ends it can become detached. remove marks a managed entity for deletion. merge copies state into a managed instance; it does not reattach the same object in-place.",
    "track": "backend"
  },
  {
    "questionId": "v9-024",
    "index": 1,
    "question": "When does an entity become detached?",
    "answer": "A newly created object is transient. persist makes it managed. After the persistence context ends it can become detached. remove marks a managed entity for deletion. merge copies state into a managed instance; it does not reattach the same object in-place.",
    "track": "backend"
  },
  {
    "questionId": "v9-025",
    "index": 0,
    "question": "When does dirty checking occur?",
    "answer": "Dirty checking is valuable because application code can modify managed entities without explicit update calls. The trade-off is that Hibernate must inspect managed state during flush. Large persistence contexts, unnecessary entity loading and long transactions can make this expensive. For bulk work, use batching, smaller transactions, clear the persistence context periodically, or use bulk SQL/JPQL when entity lifecycle semantics are not required.",
    "track": "backend"
  },
  {
    "questionId": "v9-025",
    "index": 1,
    "question": "How does readOnly transaction configuration help?",
    "answer": "Dirty checking is valuable because application code can modify managed entities without explicit update calls. The trade-off is that Hibernate must inspect managed state during flush. Large persistence contexts, unnecessary entity loading and long transactions can make this expensive. For bulk work, use batching, smaller transactions, clear the persistence context periodically, or use bulk SQL/JPQL when entity lifecycle semantics are not required.",
    "track": "backend"
  },
  {
    "questionId": "v9-025",
    "index": 2,
    "question": "Why can bulk updates bypass entity state?",
    "answer": "Dirty checking is valuable because application code can modify managed entities without explicit update calls. The trade-off is that Hibernate must inspect managed state during flush. Large persistence contexts, unnecessary entity loading and long transactions can make this expensive. For bulk work, use batching, smaller transactions, clear the persistence context periodically, or use bulk SQL/JPQL when entity lifecycle semantics are not required.",
    "track": "backend"
  },
  {
    "questionId": "v9-026",
    "index": 0,
    "question": "orphanRemoval vs CascadeType.REMOVE?",
    "answer": "It is commonly used for dependent child records whose lifecycle belongs to the parent. It is different from cascade REMOVE: orphan removal reacts when the child is orphaned from the relationship, while cascade remove propagates parent deletion.",
    "track": "backend"
  },
  {
    "questionId": "v9-026",
    "index": 1,
    "question": "Is it appropriate for shared child entities?",
    "answer": "It is commonly used for dependent child records whose lifecycle belongs to the parent. It is different from cascade REMOVE: orphan removal reacts when the child is orphaned from the relationship, while cascade remove propagates parent deletion.",
    "track": "backend"
  },
  {
    "questionId": "v9-027",
    "index": 0,
    "question": "Optimistic vs pessimistic locking?",
    "answer": "Optimistic locking assumes conflicts are uncommon and detects a conflicting update, commonly with a version column. Pessimistic locking acquires database locks to prevent competing transactions from changing the protected data concurrently.",
    "track": "backend"
  },
  {
    "questionId": "v9-027",
    "index": 1,
    "question": "How should an API respond to an optimistic locking conflict?",
    "answer": "Optimistic locking uses a version or timestamp so an update succeeds only if the resource is still at the version the user read. A mismatch should produce a conflict response rather than silently overwriting another user's change.",
    "track": "backend"
  },
  {
    "questionId": "v9-028",
    "index": 0,
    "question": "Why can EAGER still cause N+1?",
    "answer": "Avoid N+1 with query-specific fetching such as fetch joins or EntityGraph, DTO projections, or batching where appropriate. Confirm the actual SQL/query count before changing the fetch strategy.",
    "track": "backend"
  },
  {
    "questionId": "v9-028",
    "index": 1,
    "question": "When would you prefer a DTO projection?",
    "answer": "I first confirm N+1 using SQL logs, metrics or a query-count test. Then I choose the smallest correct fetch plan. A JPQL fetch join or EntityGraph can load required associations in one query; batch fetching can reduce repeated selects when eager loading everything is not appropriate. For read-only endpoints, a DTO projection may be the cleanest option.",
    "track": "backend"
  },
  {
    "questionId": "v9-028",
    "index": 2,
    "question": "How can you test query counts automatically?",
    "answer": "I first confirm N+1 using SQL logs, metrics or a query-count test. Then I choose the smallest correct fetch plan. A JPQL fetch join or EntityGraph can load required associations in one query; batch fetching can reduce repeated selects when eager loading everything is not appropriate. For read-only endpoints, a DTO projection may be the cleanest option.",
    "track": "backend"
  },
  {
    "questionId": "v9-029",
    "index": 0,
    "question": "Does flush commit the transaction?",
    "answer": "save usually schedules the change in the persistence context and SQL may execute later at transaction flush/commit. saveAndFlush calls flush after saving, which can be useful when subsequent logic needs database synchronization, but it is not a commit.",
    "track": "backend"
  },
  {
    "questionId": "v9-029",
    "index": 1,
    "question": "When can early flushing hurt performance?",
    "answer": "save usually schedules the change in the persistence context and SQL may execute later at transaction flush/commit. saveAndFlush calls flush after saving, which can be useful when subsequent logic needs database synchronization, but it is not a commit.",
    "track": "backend"
  },
  {
    "questionId": "v9-030",
    "index": 0,
    "question": "Why can bulk updates cause stale entities?",
    "answer": "A bulk update can be much faster than loading thousands of entities. After it, clear or refresh the persistence context as appropriate, and ensure transaction boundaries are correct.",
    "track": "backend"
  },
  {
    "questionId": "v9-030",
    "index": 1,
    "question": "When would JDBC batching be better?",
    "answer": "A bulk update can be much faster than loading thousands of entities. After it, clear or refresh the persistence context as appropriate, and ensure transaction boundaries are correct.",
    "track": "backend"
  },
  {
    "questionId": "v9-031",
    "index": 0,
    "question": "How do you avoid LazyInitializationException?",
    "answer": "Lazy is usually safer for large relationships because data is loaded when needed. However, accessing lazy data outside a valid persistence context can cause LazyInitializationException, while eager mappings can over-fetch. Query-level fetch plans are often preferable.",
    "track": "backend"
  },
  {
    "questionId": "v9-031",
    "index": 1,
    "question": "Why is query-specific fetching preferable?",
    "answer": "Both can make HTTP requests, but fetch is a built-in browser API while Axios is a library with conveniences such as interceptors and automatic JSON handling. The important engineering choice is consistent error handling, cancellation, authentication behavior and response validation rather than the library name itself.",
    "track": "backend"
  },
  {
    "questionId": "v9-032",
    "index": 0,
    "question": "How does Kubernetes service discovery work?",
    "answer": "With client-side discovery, the service receives registry information and selects an instance, giving the client more control but coupling it to discovery logic. With server-side discovery, the client calls a stable endpoint and infrastructure selects a healthy instance. Kubernetes Services and many load-balancing layers follow the server-side model. The choice affects operational ownership, client complexity and failure handling.",
    "track": "backend"
  },
  {
    "questionId": "v9-032",
    "index": 1,
    "question": "What happens when a discovered instance becomes unhealthy?",
    "answer": "With client-side discovery, the service receives registry information and selects an instance, giving the client more control but coupling it to discovery logic. With server-side discovery, the client calls a stable endpoint and infrastructure selects a healthy instance. Kubernetes Services and many load-balancing layers follow the server-side model. The choice affects operational ownership, client complexity and failure handling.",
    "track": "backend"
  },
  {
    "questionId": "v9-032",
    "index": 2,
    "question": "Where should load balancing occur?",
    "answer": "With client-side discovery, the service receives registry information and selects an instance, giving the client more control but coupling it to discovery logic. With server-side discovery, the client calls a stable endpoint and infrastructure selects a healthy instance. Kubernetes Services and many load-balancing layers follow the server-side model. The choice affects operational ownership, client complexity and failure handling.",
    "track": "backend"
  },
  {
    "questionId": "v9-033",
    "index": 0,
    "question": "How do you choose timeout values?",
    "answer": "Every remote call should have a timeout appropriate to the business operation. Timeouts should be combined with bounded retries, circuit breaking and observability.",
    "track": "backend"
  },
  {
    "questionId": "v9-033",
    "index": 1,
    "question": "What happens if retries exceed the caller timeout?",
    "answer": "Every remote call should have a timeout appropriate to the business operation. Timeouts should be combined with bounded retries, circuit breaking and observability.",
    "track": "backend"
  },
  {
    "questionId": "v9-034",
    "index": 0,
    "question": "Why add jitter?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "v9-034",
    "index": 1,
    "question": "Retry vs circuit breaker?",
    "answer": "Retrying every failure can amplify an outage. I retry transient network or service-unavailable failures with exponential backoff and jitter, cap attempts, and avoid retrying non-idempotent operations unless an idempotency mechanism exists.",
    "track": "backend"
  },
  {
    "questionId": "v9-034",
    "index": 2,
    "question": "How do you avoid duplicate writes?",
    "answer": "Retrying every failure can amplify an outage. I retry transient network or service-unavailable failures with exponential backoff and jitter, cap attempts, and avoid retrying non-idempotent operations unless an idempotency mechanism exists.",
    "track": "backend"
  },
  {
    "questionId": "v9-035",
    "index": 0,
    "question": "Bulkhead vs circuit breaker?",
    "answer": "A circuit breaker stops calls to an unhealthy dependency after repeated failures and probes for recovery later. A bulkhead isolates resources such as thread or connection pools so one failing dependency cannot consume capacity needed by unrelated operations.",
    "track": "backend"
  },
  {
    "questionId": "v9-035",
    "index": 1,
    "question": "What metric tells you a bulkhead is saturated?",
    "answer": "Separate thread pools, connection pools or concurrency limits can isolate workloads. If the payment dependency is slow, its capacity limit prevents it from exhausting resources needed by unrelated operations.",
    "track": "backend"
  },
  {
    "questionId": "v9-036",
    "index": 0,
    "question": "Where should idempotency keys be stored?",
    "answer": "Store idempotency records in shared durable storage when correctness must survive retries and multiple service instances. A database is common; Redis is suitable only when its durability and retention guarantees match the business risk.",
    "track": "backend"
  },
  {
    "questionId": "v9-036",
    "index": 1,
    "question": "What if two requests with the same key arrive concurrently?",
    "answer": "Use an idempotency key and enforce uniqueness at a durable boundary such as a database unique constraint. Concurrent requests with the same key should return the same recorded result instead of executing the business operation twice.",
    "track": "backend"
  },
  {
    "questionId": "v9-037",
    "index": 0,
    "question": "How do you avoid publishing the same event twice?",
    "answer": "The transaction commits the order row and outbox row together. A publisher reads unsent outbox rows and sends them to Kafka or another broker. Consumers must still be idempotent because publishing can be retried.",
    "track": "backend"
  },
  {
    "questionId": "v9-037",
    "index": 1,
    "question": "Polling publisher vs CDC?",
    "answer": "The transaction commits the order row and outbox row together. A publisher reads unsent outbox rows and sends them to Kafka or another broker. Consumers must still be idempotent because publishing can be retried.",
    "track": "backend"
  },
  {
    "questionId": "v9-038",
    "index": 0,
    "question": "When would you choose orchestration?",
    "answer": "In choreography, services react to events and emit the next event. In orchestration, a saga coordinator explicitly commands participants and handles compensations. Choreography can become hard to understand at high workflow complexity; orchestration adds a central workflow component.",
    "track": "backend"
  },
  {
    "questionId": "v9-038",
    "index": 1,
    "question": "What are compensating transactions?",
    "answer": "In choreography, services react to events and emit the next event. In orchestration, a saga coordinator explicitly commands participants and handles compensations. Choreography can become hard to understand at high workflow complexity; orchestration adds a central workflow component.",
    "track": "backend"
  },
  {
    "questionId": "v9-039",
    "index": 0,
    "question": "When should you use a synchronous call instead?",
    "answer": "In an eventually consistent workflow, one service may commit before another has observed the event. I model explicit states such as PENDING, COMPLETED and FAILED, make transitions idempotent, and expose status to the caller rather than pretending the operation is immediately final. Reconciliation jobs and observable event processing provide a recovery path when messages are delayed or lost.",
    "track": "backend"
  },
  {
    "questionId": "v9-039",
    "index": 1,
    "question": "How do retries interact with eventual consistency?",
    "answer": "In an eventually consistent workflow, one service may commit before another has observed the event. I model explicit states such as PENDING, COMPLETED and FAILED, make transitions idempotent, and expose status to the caller rather than pretending the operation is immediately final. Reconciliation jobs and observable event processing provide a recovery path when messages are delayed or lost.",
    "track": "backend"
  },
  {
    "questionId": "v9-039",
    "index": 2,
    "question": "How would you reconcile stuck records?",
    "answer": "In an eventually consistent workflow, one service may commit before another has observed the event. I model explicit states such as PENDING, COMPLETED and FAILED, make transitions idempotent, and expose status to the caller rather than pretending the operation is immediately final. Reconciliation jobs and observable event processing provide a recovery path when messages are delayed or lost.",
    "track": "backend"
  },
  {
    "questionId": "v9-040",
    "index": 0,
    "question": "How do you propagate context through Kafka?",
    "answer": "A distributed trace represents one logical request across multiple services. The incoming trace context is extracted, a server span is created, and outgoing calls propagate the context so downstream spans join the same trace. I instrument HTTP clients, messaging consumers and important database or external calls, then correlate traces with logs and metrics. Sampling and PII controls are important in production.",
    "track": "backend"
  },
  {
    "questionId": "v9-040",
    "index": 1,
    "question": "What is the difference between a trace and a span?",
    "answer": "A distributed trace represents one logical request across multiple services. The incoming trace context is extracted, a server span is created, and outgoing calls propagate the context so downstream spans join the same trace. I instrument HTTP clients, messaging consumers and important database or external calls, then correlate traces with logs and metrics. Sampling and PII controls are important in production.",
    "track": "backend"
  },
  {
    "questionId": "v9-040",
    "index": 2,
    "question": "How do you control tracing cost?",
    "answer": "A distributed trace represents one logical request across multiple services. The incoming trace context is extracted, a server span is created, and outgoing calls propagate the context so downstream spans join the same trace. I instrument HTTP clients, messaging consumers and important database or external calls, then correlate traces with logs and metrics. Sampling and PII controls are important in production.",
    "track": "backend"
  },
  {
    "questionId": "v9-041",
    "index": 0,
    "question": "How do you replay a projection safely?",
    "answer": "A CQRS read model is usually derived asynchronously, so it can lag the write model. I persist enough source information to rebuild it, process events idempotently, record the last processed position, and monitor lag. If the projection becomes corrupt, I can replay from a known point or rebuild it without changing the authoritative write model. Schema evolution and replay compatibility must be planned.",
    "track": "backend"
  },
  {
    "questionId": "v9-041",
    "index": 1,
    "question": "How do you handle out-of-order events?",
    "answer": "A CQRS read model is usually derived asynchronously, so it can lag the write model. I persist enough source information to rebuild it, process events idempotently, record the last processed position, and monitor lag. If the projection becomes corrupt, I can replay from a known point or rebuild it without changing the authoritative write model. Schema evolution and replay compatibility must be planned.",
    "track": "backend"
  },
  {
    "questionId": "v9-041",
    "index": 2,
    "question": "Where do you store projection checkpoints?",
    "answer": "A CQRS read model is usually derived asynchronously, so it can lag the write model. I persist enough source information to rebuild it, process events idempotently, record the last processed position, and monitor lag. If the projection becomes corrupt, I can replay from a known point or rebuild it without changing the authoritative write model. Schema evolution and replay compatibility must be planned.",
    "track": "backend"
  },
  {
    "questionId": "v9-042",
    "index": 0,
    "question": "What is load shedding?",
    "answer": "Examples include returning 429, rejecting optional requests, reducing expensive features or applying priority queues. The goal is graceful degradation rather than letting every request time out.",
    "track": "backend"
  },
  {
    "questionId": "v9-042",
    "index": 1,
    "question": "Why can retries make an outage worse?",
    "answer": "A downstream outage can otherwise cause request queues to grow and exhaust threads. Resilience patterns should work together and be observable.",
    "track": "backend"
  },
  {
    "questionId": "v9-043",
    "index": 0,
    "question": "Why can duplicates occur?",
    "answer": "A consumer can store a unique event ID or use a business key with a unique constraint. The state change and processed-event marker should be committed atomically where possible.",
    "track": "backend"
  },
  {
    "questionId": "v9-043",
    "index": 1,
    "question": "Does Kafka exactly-once remove all application duplicates?",
    "answer": "A consumer can store a unique event ID or use a business key with a unique constraint. The state change and processed-event marker should be committed atomically where possible.",
    "track": "backend"
  },
  {
    "questionId": "v9-044",
    "index": 0,
    "question": "Backpressure vs rate limiting?",
    "answer": "In streaming systems, a fast producer can create unbounded queues. Backpressure can use bounded queues, demand signals, rate limits or dropping strategies depending on business requirements.",
    "track": "backend"
  },
  {
    "questionId": "v9-044",
    "index": 1,
    "question": "What should happen when the buffer is full?",
    "answer": "In streaming systems, a fast producer can create unbounded queues. Backpressure can use bounded queues, demand signals, rate limits or dropping strategies depending on business requirements.",
    "track": "backend"
  },
  {
    "questionId": "v9-045",
    "index": 0,
    "question": "OAuth vs OpenID Connect?",
    "answer": "OAuth separates the client, resource owner, authorization server and resource server roles. Access tokens represent granted scopes. OAuth itself is not an authentication protocol; OpenID Connect adds an identity layer.",
    "track": "backend"
  },
  {
    "questionId": "v9-045",
    "index": 1,
    "question": "Authorization Code vs Client Credentials?",
    "answer": "OAuth separates the client, resource owner, authorization server and resource server roles. Access tokens represent granted scopes. OAuth itself is not an authentication protocol; OpenID Connect adds an identity layer.",
    "track": "backend"
  },
  {
    "questionId": "v9-046",
    "index": 0,
    "question": "Why is PKCE important for public clients?",
    "answer": "Authorization Code with PKCE sends the user through the authorization server, then exchanges a short-lived authorization code using a verifier that only the legitimate client possesses. PKCE protects the code flow against interception and is standard for public clients such as SPAs and mobile apps.",
    "track": "backend"
  },
  {
    "questionId": "v9-046",
    "index": 1,
    "question": "Does PKCE replace client authentication for confidential clients?",
    "answer": "Authorization Code with PKCE sends the user through the authorization server, then exchanges a short-lived authorization code using a verifier that only the legitimate client possesses. PKCE protects the code flow against interception and is standard for public clients such as SPAs and mobile apps.",
    "track": "backend"
  },
  {
    "questionId": "v9-047",
    "index": 0,
    "question": "Does a Bearer token in an Authorization header eliminate CSRF risk?",
    "answer": "JWTs do not automatically eliminate CSRF. If the access token is stored in a cookie that the browser sends automatically, CSRF remains relevant. If the token is sent explicitly in an Authorization header and is not automatically attached by the browser, the CSRF model is different.",
    "track": "backend"
  },
  {
    "questionId": "v9-047",
    "index": 1,
    "question": "CSRF vs XSS?",
    "answer": "CSRF tricks a browser into sending an authenticated request from an unwanted origin, while XSS executes attacker-controlled script in the trusted origin. CSRF defenses include SameSite cookies or CSRF tokens; XSS defenses include output encoding, safe DOM APIs, CSP, and avoiding unsafe HTML injection.",
    "track": "backend"
  },
  {
    "questionId": "v9-048",
    "index": 0,
    "question": "Why is a preflight sent?",
    "answer": "A CORS preflight is an OPTIONS request sent by the browser before certain cross-origin requests. It asks the server whether the origin, method, and requested headers are allowed.",
    "track": "backend"
  },
  {
    "questionId": "v9-048",
    "index": 1,
    "question": "Why is allow-origin * problematic with credentials?",
    "answer": "The server returns headers such as Access-Control-Allow-Origin. Preflight requests use OPTIONS for requests that require permission negotiation. CORS does not protect a server from non-browser clients.",
    "track": "backend"
  },
  {
    "questionId": "v9-049",
    "index": 0,
    "question": "Why use a salt?",
    "answer": "A salt is a unique random value combined with a password before hashing. It prevents identical passwords from producing identical stored hashes and makes precomputed rainbow-table attacks much less useful.",
    "track": "backend"
  },
  {
    "questionId": "v9-049",
    "index": 1,
    "question": "Why is SHA-256 alone inappropriate for passwords?",
    "answer": "SHA-256 is designed to be fast, which is undesirable for password storage because attackers can test huge numbers of guesses. Passwords should use a slow adaptive password hash such as Argon2id, bcrypt, or scrypt with a unique salt.",
    "track": "backend"
  },
  {
    "questionId": "v9-050",
    "index": 0,
    "question": "mTLS vs JWT?",
    "answer": "mTLS can authenticate both service endpoints and encrypt traffic. Alternatives include workload identity with signed tokens. Authorization should be based on service identity and required scopes or permissions, not simply network location.",
    "track": "backend"
  },
  {
    "questionId": "v9-050",
    "index": 1,
    "question": "How do you rotate certificates?",
    "answer": "mTLS can authenticate both service endpoints and encrypt traffic. Alternatives include workload identity with signed tokens. Authorization should be based on service identity and required scopes or permissions, not simply network location.",
    "track": "backend"
  },
  {
    "questionId": "v9-051",
    "index": 0,
    "question": "Where should refresh tokens be stored in browser applications?",
    "answer": "A refresh token is typically longer-lived and more carefully protected. Rotation and reuse detection can limit replay. Revocation and storage strategy depend on the client type and threat model.",
    "track": "backend"
  },
  {
    "questionId": "v9-051",
    "index": 1,
    "question": "What is refresh-token rotation?",
    "answer": "A refresh token is typically longer-lived and more carefully protected. Rotation and reuse detection can limit replay. Revocation and storage strategy depend on the client type and threat model.",
    "track": "backend"
  },
  {
    "questionId": "v9-052",
    "index": 0,
    "question": "RBAC vs ABAC?",
    "answer": "RBAC grants permissions through roles, while ABAC evaluates attributes such as user, resource, action, tenant, or environment. RBAC is simpler for stable role models; ABAC is useful when access depends on fine-grained contextual rules.",
    "track": "backend"
  },
  {
    "questionId": "v9-052",
    "index": 1,
    "question": "Where should authorization checks live?",
    "answer": "A user may have roles such as ORDER_VIEWER or ORDER_ADMIN. The application maps roles to permissions and checks authorization at the appropriate resource boundary.",
    "track": "backend"
  },
  {
    "questionId": "v9-053",
    "index": 0,
    "question": "How would you choose index column order?",
    "answer": "Choose composite-index column order based on the workload: equality predicates commonly come before range predicates, and columns used for ordering or joins may also influence the design. Then validate the choice with the database's execution plan and real data distribution.",
    "track": "backend"
  },
  {
    "questionId": "v9-053",
    "index": 1,
    "question": "Can an index help ORDER BY?",
    "answer": "For an index on (customer_id, created_at), queries filtering by customer_id can use the leading portion efficiently. A query filtering only by created_at may not benefit in the same way.",
    "track": "backend"
  },
  {
    "questionId": "v9-054",
    "index": 0,
    "question": "How do you verify a covering index is used?",
    "answer": "Whether an index is covering depends on the database and query plan. It can reduce random table access but increases index size and write cost.",
    "track": "backend"
  },
  {
    "questionId": "v9-054",
    "index": 1,
    "question": "What is an index-only scan?",
    "answer": "It can reduce I/O, especially for covering indexes, but maintenance cost and visibility rules still matter.",
    "track": "backend"
  },
  {
    "questionId": "v9-055",
    "index": 0,
    "question": "Window function vs GROUP BY?",
    "answer": "A window function calculates a value over a set of rows related to the current row while preserving the individual rows in the result. PARTITION BY defines the group and ORDER BY defines the sequence within that group.",
    "track": "backend"
  },
  {
    "questionId": "v9-055",
    "index": 1,
    "question": "RANK vs DENSE_RANK?",
    "answer": "ROW_NUMBER assigns a unique sequence even when values tie. RANK gives tied rows the same rank and leaves gaps after the tie. DENSE_RANK gives tied rows the same rank but does not leave gaps. For top-N-per-group problems, choose based on whether ties should share the same rank.",
    "track": "backend"
  },
  {
    "questionId": "v9-056",
    "index": 0,
    "question": "CTE vs subquery?",
    "answer": "WITH creates a logical query block. It can simplify multi-step transformations and recursive hierarchy traversal. Whether it is materialized or inlined depends on the database and optimizer.",
    "track": "backend"
  },
  {
    "questionId": "v9-056",
    "index": 1,
    "question": "When would a recursive CTE be useful?",
    "answer": "A recursive CTE defines an anchor query and a recursive query that repeatedly expands from the previous result. It is useful for hierarchies such as employee-manager trees or graph-like relationships. A termination condition is essential to avoid runaway recursion.",
    "track": "backend"
  },
  {
    "questionId": "v9-057",
    "index": 0,
    "question": "Estimated vs actual rows?",
    "answer": "EXPLAIN helps identify full scans, poor join order, large row estimates, expensive sorts and missing indexes. EXPLAIN ANALYZE, where supported, compares the plan with actual execution behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-057",
    "index": 1,
    "question": "Why can an index still be ignored?",
    "answer": "EXPLAIN helps identify full scans, poor join order, large row estimates, expensive sorts and missing indexes. EXPLAIN ANALYZE, where supported, compares the plan with actual execution behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-058",
    "index": 0,
    "question": "How do you reduce deadlocks?",
    "answer": "A common pattern is transaction A locking row 1 then waiting for row 2 while transaction B locks row 2 then waits for row 1. Databases detect cycles and abort one transaction.",
    "track": "backend"
  },
  {
    "questionId": "v9-058",
    "index": 1,
    "question": "Why must applications retry some deadlock failures?",
    "answer": "A common pattern is transaction A locking row 1 then waiting for row 2 while transaction B locks row 2 then waits for row 1. Databases detect cycles and abort one transaction.",
    "track": "backend"
  },
  {
    "questionId": "v9-059",
    "index": 0,
    "question": "Normalization vs denormalization?",
    "answer": "First, second and third normal forms progressively constrain dependencies and repeating groups. Practical systems sometimes denormalize intentionally for read performance, but the trade-off should be explicit.",
    "track": "backend"
  },
  {
    "questionId": "v9-059",
    "index": 1,
    "question": "What is an update anomaly?",
    "answer": "First, second and third normal forms progressively constrain dependencies and repeating groups. Practical systems sometimes denormalize intentionally for read performance, but the trade-off should be explicit.",
    "track": "backend"
  },
  {
    "questionId": "v9-060",
    "index": 0,
    "question": "OFFSET vs keyset pagination?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v9-060",
    "index": 1,
    "question": "How do you handle duplicate timestamps?",
    "answer": "For large datasets, WHERE created_at < :lastCreatedAt ORDER BY created_at DESC LIMIT 50 can avoid scanning and discarding many preceding rows. The ordering must be deterministic, often using a unique tie-breaker.",
    "track": "backend"
  },
  {
    "questionId": "v9-061",
    "index": 0,
    "question": "Which operations can be rolled back?",
    "answer": "DELETE can filter rows and typically generates row-level changes. TRUNCATE is generally faster for clearing a table but has database-specific transactional and identity behavior. DROP removes the schema object.",
    "track": "backend"
  },
  {
    "questionId": "v9-061",
    "index": 1,
    "question": "How does TRUNCATE affect identity values in your database?",
    "answer": "DELETE can filter rows and typically generates row-level changes. TRUNCATE is generally faster for clearing a table but has database-specific transactional and identity behavior. DROP removes the schema object.",
    "track": "backend"
  },
  {
    "questionId": "v9-062",
    "index": 0,
    "question": "Dirty vs non-repeatable vs phantom read?",
    "answer": "READ COMMITTED prevents dirty reads but can allow non-repeatable reads. REPEATABLE READ provides stronger repeatability, while SERIALIZABLE provides the strongest standard isolation at a higher concurrency cost. Exact implementation varies by database.",
    "track": "backend"
  },
  {
    "questionId": "v9-062",
    "index": 1,
    "question": "How does MVCC affect isolation?",
    "answer": "READ COMMITTED prevents dirty reads but can allow non-repeatable reads. REPEATABLE READ provides stronger repeatability, while SERIALIZABLE provides the strongest standard isolation at a higher concurrency cost. Exact implementation varies by database.",
    "track": "backend"
  },
  {
    "questionId": "v9-063",
    "index": 0,
    "question": "How would you delete duplicates while keeping one row?",
    "answer": "For duplicate emails, GROUP BY email HAVING COUNT(*) > 1 identifies duplicated values. ROW_NUMBER can then select which rows to retain or remove.",
    "track": "backend"
  },
  {
    "questionId": "v9-063",
    "index": 1,
    "question": "How do you prevent duplicates after cleanup?",
    "answer": "For duplicate emails, GROUP BY email HAVING COUNT(*) > 1 identifies duplicated values. ROW_NUMBER can then select which rows to retain or remove.",
    "track": "backend"
  },
  {
    "questionId": "v9-064",
    "index": 0,
    "question": "Image vs container?",
    "answer": "A Dockerfile describes image build steps. Containers are runtime instances of images, with writable runtime layers and isolated processes. Images should be small, reproducible and free of unnecessary secrets.",
    "track": "backend"
  },
  {
    "questionId": "v9-064",
    "index": 1,
    "question": "How do you reduce image size?",
    "answer": "A Dockerfile describes image build steps. Containers are runtime instances of images, with writable runtime layers and isolated processes. Images should be small, reproducible and free of unnecessary secrets.",
    "track": "backend"
  },
  {
    "questionId": "v9-065",
    "index": 0,
    "question": "Deployment vs Service?",
    "answer": "The Deployment describes a pod template and replica count. Kubernetes creates ReplicaSets and replaces pods to converge on the desired state.",
    "track": "backend"
  },
  {
    "questionId": "v9-065",
    "index": 1,
    "question": "How does rolling update work?",
    "answer": "The Deployment describes a pod template and replica count. Kubernetes creates ReplicaSets and replaces pods to converge on the desired state.",
    "track": "backend"
  },
  {
    "questionId": "v9-066",
    "index": 0,
    "question": "ClusterIP vs LoadBalancer?",
    "answer": "Pods are ephemeral, so clients should not depend on pod IPs. A Service selects pods using labels and provides stable DNS and networking semantics.",
    "track": "backend"
  },
  {
    "questionId": "v9-066",
    "index": 1,
    "question": "How does service discovery work in Kubernetes?",
    "answer": "Pods are ephemeral, so clients should not depend on pod IPs. A Service selects pods using labels and provides stable DNS and networking semantics.",
    "track": "backend"
  },
  {
    "questionId": "v9-067",
    "index": 0,
    "question": "Horizontal vs vertical scaling?",
    "answer": "Horizontal scaling requires appropriate state management and traffic distribution.",
    "track": "backend"
  },
  {
    "questionId": "v9-067",
    "index": 1,
    "question": "Why can CPU be a poor autoscaling metric?",
    "answer": "Horizontal scaling adds instances or pods; vertical scaling increases resources per instance. Good autoscaling needs meaningful metrics, cooldown behavior and protection against oscillation.",
    "track": "backend"
  },
  {
    "questionId": "v9-068",
    "index": 0,
    "question": "Public vs private subnet?",
    "answer": "A typical design separates public and private subnets, places load balancers at appropriate boundaries and keeps databases private. Exact components vary by provider.",
    "track": "backend"
  },
  {
    "questionId": "v9-068",
    "index": 1,
    "question": "Security group vs network ACL?",
    "answer": "A typical design separates public and private subnets, places load balancers at appropriate boundaries and keeps databases private. Exact components vary by provider.",
    "track": "backend"
  },
  {
    "questionId": "v9-069",
    "index": 0,
    "question": "User vs role?",
    "answer": "IAM typically uses identities, roles, policies and temporary credentials. Least privilege means granting only required actions on required resources.",
    "track": "backend"
  },
  {
    "questionId": "v9-069",
    "index": 1,
    "question": "Why prefer temporary credentials?",
    "answer": "IAM typically uses identities, roles, policies and temporary credentials. Least privilege means granting only required actions on required resources.",
    "track": "backend"
  },
  {
    "questionId": "v9-070",
    "index": 0,
    "question": "Managed vs self-hosted?",
    "answer": "Managed does not mean no responsibility. The application still owns schema, indexes, query behavior, credentials, data lifecycle and recovery objectives.",
    "track": "backend"
  },
  {
    "questionId": "v9-070",
    "index": 1,
    "question": "What should still be monitored?",
    "answer": "Managed does not mean no responsibility. The application still owns schema, indexes, query behavior, credentials, data lifecycle and recovery objectives.",
    "track": "backend"
  },
  {
    "questionId": "v9-071",
    "index": 0,
    "question": "Blue-green vs rolling deployment?",
    "answer": "The inactive environment receives the new release. After smoke tests, routing changes to it. Rollback can be fast by switching traffic back, provided database changes are backward compatible.",
    "track": "backend"
  },
  {
    "questionId": "v9-071",
    "index": 1,
    "question": "How do you handle database schema changes?",
    "answer": "The inactive environment receives the new release. After smoke tests, routing changes to it. Rollback can be fast by switching traffic back, provided database changes are backward compatible.",
    "track": "backend"
  },
  {
    "questionId": "v9-072",
    "index": 0,
    "question": "Why use peak RPS?",
    "answer": "I estimate average and peak requests per second, read/write ratio, data size per request, daily storage growth and retention. The goal is order-of-magnitude sizing that guides architecture rather than false precision.",
    "track": "backend"
  },
  {
    "questionId": "v9-072",
    "index": 1,
    "question": "How do you estimate storage?",
    "answer": "I estimate average and peak requests per second, read/write ratio, data size per request, daily storage growth and retention. The goal is order-of-magnitude sizing that guides architecture rather than false precision.",
    "track": "backend"
  },
  {
    "questionId": "v9-073",
    "index": 0,
    "question": "Cache-aside vs write-through?",
    "answer": "Caches can exist in the browser, CDN, API layer, service memory or distributed stores such as Redis. The design must define TTL, invalidation, consistency and cache stampede behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-073",
    "index": 1,
    "question": "How do you prevent cache stampede?",
    "answer": "Caches can exist in the browser, CDN, API layer, service memory or distributed stores such as Redis. The design must define TTL, invalidation, consistency and cache stampede behavior.",
    "track": "backend"
  },
  {
    "questionId": "v9-074",
    "index": 0,
    "question": "Token bucket vs leaky bucket?",
    "answer": "Token bucket allows bursts up to a configured capacity while replenishing tokens at a fixed rate. A distributed limiter needs shared state or a gateway that owns the limit.",
    "track": "backend"
  },
  {
    "questionId": "v9-074",
    "index": 1,
    "question": "Per-user vs per-IP limits?",
    "answer": "Token bucket allows bursts up to a configured capacity while replenishing tokens at a fixed rate. A distributed limiter needs shared state or a gateway that owns the limit.",
    "track": "backend"
  },
  {
    "questionId": "v9-075",
    "index": 0,
    "question": "CDN vs API Gateway?",
    "answer": "Static assets are the simplest case, but CDNs can also cache selected API responses when semantics allow. Cache keys, TTLs, invalidation and authorization must be designed carefully.",
    "track": "backend"
  },
  {
    "questionId": "v9-075",
    "index": 1,
    "question": "Can personalized responses be cached?",
    "answer": "Static assets are the simplest case, but CDNs can also cache selected API responses when semantics allow. Cache keys, TTLs, invalidation and authorization must be designed carefully.",
    "track": "backend"
  },
  {
    "questionId": "v9-076",
    "index": 0,
    "question": "How do you avoid duplicate notifications?",
    "answer": "An application emits a NotificationRequested event. Workers consume it, select email/SMS/push channels, call providers with retries and record delivery state. A dead-letter path handles poison messages.",
    "track": "backend"
  },
  {
    "questionId": "v9-076",
    "index": 1,
    "question": "How do you handle provider outages?",
    "answer": "An application emits a NotificationRequested event. Workers consume it, select email/SMS/push channels, call providers with retries and record delivery state. A dead-letter path handles poison messages.",
    "track": "backend"
  },
  {
    "questionId": "v9-077",
    "index": 0,
    "question": "How do you generate unique IDs at scale?",
    "answer": "The write path creates a unique ID or encoded sequence and stores the mapping. The read path checks cache then the database. Abuse controls, expiration and analytics can be separate concerns.",
    "track": "backend"
  },
  {
    "questionId": "v9-077",
    "index": 1,
    "question": "How do you prevent malicious links?",
    "answer": "The write path creates a unique ID or encoded sequence and stores the mapping. The read path checks cache then the database. Abuse controls, expiration and analytics can be separate concerns.",
    "track": "backend"
  },
  {
    "questionId": "v9-078",
    "index": 0,
    "question": "How do you prevent audit records from being modified?",
    "answer": "For an audit log, I separate business data from the audit trail and make audit records append-only. Each event should identify who or what acted, what resource changed, when it happened, the request or correlation ID, and the relevant before/after values or a safe representation. Access should be tightly controlled, retention should be explicit, and integrity controls such as hashing or WORM storage may be required for high-assurance environments.",
    "track": "backend"
  },
  {
    "questionId": "v9-078",
    "index": 1,
    "question": "How do you handle PII in audit logs?",
    "answer": "For an audit log, I separate business data from the audit trail and make audit records append-only. Each event should identify who or what acted, what resource changed, when it happened, the request or correlation ID, and the relevant before/after values or a safe representation. Access should be tightly controlled, retention should be explicit, and integrity controls such as hashing or WORM storage may be required for high-assurance environments.",
    "track": "backend"
  },
  {
    "questionId": "v9-078",
    "index": 2,
    "question": "Should audit logging be synchronous?",
    "answer": "For an audit log, I separate business data from the audit trail and make audit records append-only. Each event should identify who or what acted, what resource changed, when it happened, the request or correlation ID, and the relevant before/after values or a safe representation. Access should be tightly controlled, retention should be explicit, and integrity controls such as hashing or WORM storage may be required for high-assurance environments.",
    "track": "backend"
  },
  {
    "questionId": "v9-079",
    "index": 0,
    "question": "Liveness vs readiness?",
    "answer": "Liveness answers whether a process should be restarted; readiness answers whether it should receive traffic. A readiness endpoint should reflect the dependencies required to serve requests without becoming so strict that temporary issues cause instability.",
    "track": "backend"
  },
  {
    "questionId": "v9-079",
    "index": 1,
    "question": "Should readiness call every dependency?",
    "answer": "Liveness answers whether a process should be restarted; readiness answers whether it should receive traffic. A readiness endpoint should reflect the dependencies required to serve requests without becoming so strict that temporary issues cause instability.",
    "track": "backend"
  },
  {
    "questionId": "v9-080",
    "index": 0,
    "question": "How would you reverse by Unicode code points?",
    "answer": "Use code points rather than UTF-16 char units: `str.codePoints()` can be collected into an array and reversed, or traverse the code-point sequence from the end. This avoids splitting supplementary characters such as emoji into surrogate halves.",
    "track": "backend"
  },
  {
    "questionId": "v9-081",
    "index": 0,
    "question": "How would you handle Unicode?",
    "answer": "Count characters in the first string and decrement counts for the second.",
    "track": "backend"
  },
  {
    "questionId": "v9-082",
    "index": 0,
    "question": "Can you solve it with streams?",
    "answer": "Count frequencies, then scan the original order.",
    "track": "backend"
  },
  {
    "questionId": "v9-083",
    "index": 0,
    "question": "Can you do it without extra space?",
    "answer": "Track seen values and add repeats to a second set.",
    "track": "backend"
  },
  {
    "questionId": "v9-084",
    "index": 0,
    "question": "How would you find the kth largest?",
    "answer": "Maintain largest and second-largest distinct values in one pass.",
    "track": "backend"
  },
  {
    "questionId": "v9-085",
    "index": 0,
    "question": "Can you solve it using swaps?",
    "answer": "Compact non-zero values then fill the remaining positions with zeros.",
    "track": "backend"
  },
  {
    "questionId": "v9-086",
    "index": 0,
    "question": "Why use XOR instead of the sum formula?",
    "answer": "XOR all expected values and all input values; equal values cancel.",
    "track": "backend"
  },
  {
    "questionId": "v9-087",
    "index": 0,
    "question": "How do you return the subarray indices?",
    "answer": "Use Kadane’s algorithm: maintain the best subarray ending at the current position and the best result seen globally. Kadane’s algorithm chooses between extending the current subarray and starting a new one at the current value. It runs in O(n) time and O(1) auxiliary space, including the all-negative case if initialized correctly.",
    "track": "backend"
  },
  {
    "questionId": "v9-088",
    "index": 0,
    "question": "Why use Deque instead of Stack?",
    "answer": "Push openings and match each closing bracket against the top of the stack.",
    "track": "backend"
  },
  {
    "questionId": "v9-089",
    "index": 0,
    "question": "How would you implement LRU from scratch?",
    "answer": "LinkedHashMap can maintain access order and remove the eldest entry.",
    "track": "backend"
  },
  {
    "questionId": "v91-001",
    "index": 0,
    "question": "How does health checking work?",
    "answer": "A registry maintains service instances and their locations. A client-side or server-side discovery mechanism resolves a logical service name to a healthy instance. This becomes important when containers scale up, down or move.",
    "track": "backend"
  },
  {
    "questionId": "v91-001",
    "index": 1,
    "question": "What is the difference between client-side and server-side discovery?",
    "answer": "A registry maintains service instances and their locations. A client-side or server-side discovery mechanism resolves a logical service name to a healthy instance. This becomes important when containers scale up, down or move.",
    "track": "backend"
  },
  {
    "questionId": "v91-002",
    "index": 0,
    "question": "Which approach fits Kubernetes?",
    "answer": "With client-side discovery, the client queries a registry and performs load balancing. With server-side discovery, the client calls a stable endpoint and the load balancer or platform resolves an instance.",
    "track": "backend"
  },
  {
    "questionId": "v91-002",
    "index": 1,
    "question": "What are the trade-offs?",
    "answer": "With client-side discovery, the client queries a registry and performs load balancing. With server-side discovery, the client calls a stable endpoint and the load balancer or platform resolves an instance.",
    "track": "backend"
  },
  {
    "questionId": "v91-003",
    "index": 0,
    "question": "How do you configure failure thresholds?",
    "answer": "It normally moves through closed, open and half-open states. After repeated failures the circuit opens and fails fast; after a recovery delay it allows limited probes in half-open state.",
    "track": "backend"
  },
  {
    "questionId": "v91-003",
    "index": 1,
    "question": "Circuit breaker vs retry?",
    "answer": "It normally moves through closed, open and half-open states. After repeated failures the circuit opens and fails fast; after a recovery delay it allows limited probes in half-open state.",
    "track": "backend"
  },
  {
    "questionId": "v91-004",
    "index": 0,
    "question": "When should retries not be used?",
    "answer": "Immediate retries can amplify load on a degraded service. Exponential backoff increases the delay after each failure, while jitter randomizes the delay so clients do not synchronize their retries.",
    "track": "backend"
  },
  {
    "questionId": "v91-004",
    "index": 1,
    "question": "How can retries cause a retry storm?",
    "answer": "Immediate retries can amplify load on a degraded service. Exponential backoff increases the delay after each failure, while jitter randomizes the delay so clients do not synchronize their retries.",
    "track": "backend"
  },
  {
    "questionId": "v91-005",
    "index": 0,
    "question": "How is bulkhead different from circuit breaker?",
    "answer": "A circuit breaker stops calls to an unhealthy dependency after repeated failures and probes for recovery later. A bulkhead isolates resources such as thread or connection pools so one failing dependency cannot consume capacity needed by unrelated operations.",
    "track": "backend"
  },
  {
    "questionId": "v91-005",
    "index": 1,
    "question": "Where would you apply it?",
    "answer": "A service can maintain separate thread pools, connection pools or concurrency limits for independent dependencies. If one dependency becomes slow, its resource pool is exhausted without taking down unrelated traffic.",
    "track": "backend"
  },
  {
    "questionId": "v91-006",
    "index": 0,
    "question": "What is retry amplification?",
    "answer": "A typical call has a short timeout, a small number of retries with backoff, and a circuit breaker around the operation. The total retry budget must fit inside the caller SLA; otherwise retries can make latency worse.",
    "track": "backend"
  },
  {
    "questionId": "v91-006",
    "index": 1,
    "question": "Where should the circuit breaker sit?",
    "answer": "A typical call has a short timeout, a small number of retries with backoff, and a circuit breaker around the operation. The total retry budget must fit inside the caller SLA; otherwise retries can make latency worse.",
    "track": "backend"
  },
  {
    "questionId": "v91-007",
    "index": 0,
    "question": "How do you store idempotency keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-007",
    "index": 1,
    "question": "What if two requests with the same key arrive concurrently?",
    "answer": "Use an idempotency key and enforce uniqueness at a durable boundary such as a database unique constraint. Concurrent requests with the same key should return the same recorded result instead of executing the business operation twice.",
    "track": "backend"
  },
  {
    "questionId": "v91-008",
    "index": 0,
    "question": "How do you handle concurrent duplicate requests?",
    "answer": "Persist a unique key scoped to the merchant or account, validate that a reused key has the same request fingerprint, process the payment within a transaction, and return the stored result for duplicates. For asynchronous providers, persist provider references and state transitions.",
    "track": "backend"
  },
  {
    "questionId": "v91-008",
    "index": 1,
    "question": "What if the provider times out after charging?",
    "answer": "Persist a unique key scoped to the merchant or account, validate that a reused key has the same request fingerprint, process the payment within a transaction, and return the stored result for duplicates. For asynchronous providers, persist provider references and state transitions.",
    "track": "backend"
  },
  {
    "questionId": "v91-009",
    "index": 0,
    "question": "Saga vs two-phase commit?",
    "answer": "Each service commits locally and emits an event or calls the next step. If a later step fails, compensating actions undo the business effect of earlier steps. Saga can be choreography-based or orchestration-based.",
    "track": "backend"
  },
  {
    "questionId": "v91-009",
    "index": 1,
    "question": "How do you handle compensation failure?",
    "answer": "Each service commits locally and emits an event or calls the next step. If a later step fails, compensating actions undo the business effect of earlier steps. Saga can be choreography-based or orchestration-based.",
    "track": "backend"
  },
  {
    "questionId": "v91-010",
    "index": 0,
    "question": "What are the operational costs of choreography?",
    "answer": "Choreography works well when services can react independently to a small number of business events. As the workflow grows, event chains can become difficult to trace and compensation behavior can become implicit. At that point, orchestration can make the workflow state, ordering, timeouts and compensations explicit. The decision should be based on operational complexity, not a blanket preference for decentralized designs.",
    "track": "backend"
  },
  {
    "questionId": "v91-010",
    "index": 1,
    "question": "How do you test a choreographed saga?",
    "answer": "Choreography works well when services can react independently to a small number of business events. As the workflow grows, event chains can become difficult to trace and compensation behavior can become implicit. At that point, orchestration can make the workflow state, ordering, timeouts and compensations explicit. The decision should be based on operational complexity, not a blanket preference for decentralized designs.",
    "track": "backend"
  },
  {
    "questionId": "v91-010",
    "index": 2,
    "question": "When does orchestration become a bottleneck?",
    "answer": "Choreography works well when services can react independently to a small number of business events. As the workflow grows, event chains can become difficult to trace and compensation behavior can become implicit. At that point, orchestration can make the workflow state, ordering, timeouts and compensations explicit. The decision should be based on operational complexity, not a blanket preference for decentralized designs.",
    "track": "backend"
  },
  {
    "questionId": "v91-011",
    "index": 0,
    "question": "How does CDC fit the outbox pattern?",
    "answer": "Instead of updating a table and publishing directly to Kafka in separate operations, the service writes the business row and an outbox row in one transaction. A relay later publishes the outbox event. Consumers must still be idempotent because publishing can be retried.",
    "track": "backend"
  },
  {
    "questionId": "v91-011",
    "index": 1,
    "question": "What happens if publishing fails?",
    "answer": "Instead of updating a table and publishing directly to Kafka in separate operations, the service writes the business row and an outbox row in one transaction. A relay later publishes the outbox event. Consumers must still be idempotent because publishing can be retried.",
    "track": "backend"
  },
  {
    "questionId": "v91-012",
    "index": 0,
    "question": "CDC vs polling?",
    "answer": "A CDC connector reads database transaction changes, often from a database log, and publishes structured change events. It can feed search indexes, caches, analytics or an outbox relay without adding synchronous work to the request path.",
    "track": "backend"
  },
  {
    "questionId": "v91-012",
    "index": 1,
    "question": "What are ordering considerations?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v91-013",
    "index": 0,
    "question": "What if the consumer crashes after the DB commit?",
    "answer": "Store a unique event ID or business key with the processing result, or make the state transition naturally idempotent. The deduplication record and business update should be committed atomically when possible.",
    "track": "backend"
  },
  {
    "questionId": "v91-013",
    "index": 1,
    "question": "Exactly-once vs idempotent processing?",
    "answer": "Store a unique event ID or business key with the processing result, or make the state transition naturally idempotent. The deduplication record and business update should be committed atomically when possible.",
    "track": "backend"
  },
  {
    "questionId": "v91-014",
    "index": 0,
    "question": "What happens if partitions increase?",
    "answer": "If all events for an order use orderId as the key, Kafka routes them to the same partition and preserves their order there. Ordering across partitions is not guaranteed.",
    "track": "backend"
  },
  {
    "questionId": "v91-014",
    "index": 1,
    "question": "Can multiple consumers process one partition concurrently?",
    "answer": "If all events for an order use orderId as the key, Kafka routes them to the same partition and preserves their order there. Ordering across partitions is not guaranteed.",
    "track": "backend"
  },
  {
    "questionId": "v91-015",
    "index": 0,
    "question": "What triggers a rebalance?",
    "answer": "Consumer groups provide horizontal consumption. If a topic has eight partitions, at most eight consumers in one group can actively consume partitions concurrently. Different groups receive their own copy of the stream.",
    "track": "backend"
  },
  {
    "questionId": "v91-015",
    "index": 1,
    "question": "Can two groups read the same message?",
    "answer": "Consumer groups provide horizontal consumption. If a topic has eight partitions, at most eight consumers in one group can actively consume partitions concurrently. Different groups receive their own copy of the stream.",
    "track": "backend"
  },
  {
    "questionId": "v91-016",
    "index": 0,
    "question": "How do you reduce lag safely?",
    "answer": "Lag can indicate slow processing, insufficient consumers, downstream bottlenecks or broker issues. I monitor lag together with processing latency and throughput instead of treating lag alone as the root cause.",
    "track": "backend"
  },
  {
    "questionId": "v91-016",
    "index": 1,
    "question": "Can adding consumers always help?",
    "answer": "Lag can indicate slow processing, insufficient consumers, downstream bottlenecks or broker issues. I monitor lag together with processing latency and throughput instead of treating lag alone as the root cause.",
    "track": "backend"
  },
  {
    "questionId": "v91-017",
    "index": 0,
    "question": "How can you reduce rebalance impact?",
    "answer": "A consumer joining, leaving or failing can trigger reassignment. During the rebalance, ownership changes and processing can pause depending on the protocol and client configuration. Commit strategy matters because records may be replayed.",
    "track": "backend"
  },
  {
    "questionId": "v91-017",
    "index": 1,
    "question": "What is cooperative rebalancing?",
    "answer": "A consumer joining, leaving or failing can trigger reassignment. During the rebalance, ownership changes and processing can pause depending on the protocol and client configuration. Commit strategy matters because records may be replayed.",
    "track": "backend"
  },
  {
    "questionId": "v91-018",
    "index": 0,
    "question": "Why is exactly-once difficult end to end?",
    "answer": "At-most-once may lose messages but avoids redelivery. At-least-once can duplicate messages and is common for reliable processing. Exactly-once requires carefully scoped transactional semantics and still needs business-level reasoning across external systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-018",
    "index": 1,
    "question": "How do you design for at-least-once?",
    "answer": "At-most-once may lose messages but avoids redelivery. At-least-once can duplicate messages and is common for reliable processing. Exactly-once requires carefully scoped transactional semantics and still needs business-level reasoning across external systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-019",
    "index": 0,
    "question": "Should DLT messages be retried automatically?",
    "answer": "Use bounded retries, then route the failed record to a dead-letter topic or quarantine mechanism with enough metadata for investigation. The consumer should commit or otherwise advance according to a deliberate failure policy so one bad record does not cause an infinite retry loop.",
    "track": "backend"
  },
  {
    "questionId": "v91-019",
    "index": 1,
    "question": "What metadata should be stored?",
    "answer": "Use bounded retries, then route the failed record to a dead-letter topic or quarantine mechanism with enough metadata for investigation. The consumer should commit or otherwise advance according to a deliberate failure policy so one bad record does not cause an infinite retry loop.",
    "track": "backend"
  },
  {
    "questionId": "v91-020",
    "index": 0,
    "question": "How do you replay a DLQ safely?",
    "answer": "It isolates bad messages from the normal flow while preserving them for investigation or controlled replay. The DLQ should have monitoring, retention and an operational replay strategy.",
    "track": "backend"
  },
  {
    "questionId": "v91-020",
    "index": 1,
    "question": "Should every exception go to DLQ?",
    "answer": "It isolates bad messages from the normal flow while preserving them for investigation or controlled replay. The DLQ should have monitoring, retention and an operational replay strategy.",
    "track": "backend"
  },
  {
    "questionId": "v91-021",
    "index": 0,
    "question": "How does Kafka help absorb bursts?",
    "answer": "Controls include bounded queues, consumer concurrency limits, rate limiting, broker retention, flow control and load shedding. The right choice depends on whether data may be delayed, dropped or must be durably buffered.",
    "track": "backend"
  },
  {
    "questionId": "v91-021",
    "index": 1,
    "question": "What if the backlog never drains?",
    "answer": "Controls include bounded queues, consumer concurrency limits, rate limiting, broker retention, flow control and load shedding. The right choice depends on whether data may be delayed, dropped or must be durably buffered.",
    "track": "backend"
  },
  {
    "questionId": "v91-022",
    "index": 0,
    "question": "How do you recover from duplicate events?",
    "answer": "Create the order and outbox event atomically. Publish to Kafka, partition by orderId, consume with idempotent inventory/payment handlers, use bounded retries and DLT, and expose correlation IDs and lag metrics.",
    "track": "backend"
  },
  {
    "questionId": "v91-022",
    "index": 1,
    "question": "What if Kafka is temporarily unavailable?",
    "answer": "Create the order and outbox event atomically. Publish to Kafka, partition by orderId, consume with idempotent inventory/payment handlers, use bounded retries and DLT, and expose correlation IDs and lag metrics.",
    "track": "backend"
  },
  {
    "questionId": "v91-023",
    "index": 0,
    "question": "Correlation ID vs trace ID?",
    "answer": "Generate or propagate a correlation ID at the request boundary and include it in logs and downstream calls. This allows one request to be traced across the browser, gateway, services, and supporting infrastructure.",
    "track": "backend"
  },
  {
    "questionId": "v91-023",
    "index": 1,
    "question": "Where should it be generated?",
    "answer": "When a request crosses several services, the same correlation or trace identifier lets operators search related logs quickly. It should not be treated as an authentication credential or sensitive data container.",
    "track": "backend"
  },
  {
    "questionId": "v91-024",
    "index": 0,
    "question": "What business metrics would you add?",
    "answer": "They provide a compact view of service health: request latency, request volume, error rate and how close resources are to capacity. They complement application-specific business metrics.",
    "track": "backend"
  },
  {
    "questionId": "v91-024",
    "index": 1,
    "question": "How do you alert on latency?",
    "answer": "They provide a compact view of service health: request latency, request volume, error rate and how close resources are to capacity. They complement application-specific business metrics.",
    "track": "backend"
  },
  {
    "questionId": "v91-025",
    "index": 0,
    "question": "Why should liveness not depend on a database?",
    "answer": "A readiness failure should remove the instance from service without necessarily restarting it. Liveness should detect an unrecoverable process state and be conservative to avoid restart loops.",
    "track": "backend"
  },
  {
    "questionId": "v91-025",
    "index": 1,
    "question": "What happens when readiness fails?",
    "answer": "A readiness failure should remove the instance from service without necessarily restarting it. Liveness should detect an unrecoverable process state and be conservative to avoid restart loops.",
    "track": "backend"
  },
  {
    "questionId": "v91-026",
    "index": 0,
    "question": "Why is readiness important during shutdown?",
    "answer": "On termination, the instance should be removed from service discovery/load balancing, stop accepting new requests, finish or cancel active work, commit/rollback transactions and close consumers or connections.",
    "track": "backend"
  },
  {
    "questionId": "v91-026",
    "index": 1,
    "question": "How do you handle long-running requests?",
    "answer": "On termination, the instance should be removed from service discovery/load balancing, stop accepting new requests, finish or cancel active work, commit/rollback transactions and close consumers or connections.",
    "track": "backend"
  },
  {
    "questionId": "v91-027",
    "index": 0,
    "question": "What is expand-and-contract?",
    "answer": "Use rolling or blue-green deployment, readiness checks, backward-compatible API/database changes, connection draining and fast rollback. Database migrations should follow an expand-and-contract strategy when schemas must coexist across versions.",
    "track": "backend"
  },
  {
    "questionId": "v91-027",
    "index": 1,
    "question": "How do you roll back a database change?",
    "answer": "Use rolling or blue-green deployment, readiness checks, backward-compatible API/database changes, connection draining and fast rollback. Database migrations should follow an expand-and-contract strategy when schemas must coexist across versions.",
    "track": "backend"
  },
  {
    "questionId": "v91-028",
    "index": 0,
    "question": "How do you handle renaming a column?",
    "answer": "Use expand-and-contract: add nullable/new structures first, deploy code that can read both forms, backfill data, switch writes, then remove the old structure after all old instances are gone.",
    "track": "backend"
  },
  {
    "questionId": "v91-028",
    "index": 1,
    "question": "Why can a direct DROP break rolling deployments?",
    "answer": "Use expand-and-contract: add nullable/new structures first, deploy code that can read both forms, backfill data, switch writes, then remove the old structure after all old instances are gone.",
    "track": "backend"
  },
  {
    "questionId": "v91-029",
    "index": 0,
    "question": "Service mesh vs API Gateway?",
    "answer": "It can provide mTLS, traffic routing, retries, telemetry and policy without putting every networking concern into application code. It also adds operational complexity and another layer to debug.",
    "track": "backend"
  },
  {
    "questionId": "v91-029",
    "index": 1,
    "question": "When would you avoid a service mesh?",
    "answer": "It can provide mTLS, traffic routing, retries, telemetry and policy without putting every networking concern into application code. It also adds operational complexity and another layer to debug.",
    "track": "backend"
  },
  {
    "questionId": "v91-030",
    "index": 0,
    "question": "What if the gateway itself is overloaded?",
    "answer": "Gateway instances should be horizontally scalable. Authentication metadata, rate-limit state or sessions that must be shared should use a resilient external store or distributed mechanism.",
    "track": "backend"
  },
  {
    "questionId": "v91-030",
    "index": 1,
    "question": "How do you deploy gateway configuration safely?",
    "answer": "Gateway instances should be horizontally scalable. Authentication metadata, rate-limit state or sessions that must be shared should use a resilient external store or distributed mechanism.",
    "track": "backend"
  },
  {
    "questionId": "v91-031",
    "index": 0,
    "question": "Why can retries worsen cascading failures?",
    "answer": "Use timeouts, bounded retries, circuit breakers, bulkheads, concurrency limits, load shedding, caching where appropriate and graceful degradation. Monitor dependency latency and saturation so protection activates before the caller is exhausted.",
    "track": "backend"
  },
  {
    "questionId": "v91-031",
    "index": 1,
    "question": "What is load shedding?",
    "answer": "Examples include returning 429, rejecting optional requests, reducing expensive features or applying priority queues. The goal is graceful degradation rather than letting every request time out.",
    "track": "backend"
  },
  {
    "questionId": "v91-032",
    "index": 0,
    "question": "What is reconciliation?",
    "answer": "Persist workflow state, use idempotent commands, explicit statuses and compensating actions where appropriate. For external systems, design for unknown outcomes and reconciliation rather than assuming timeout means failure.",
    "track": "backend"
  },
  {
    "questionId": "v91-032",
    "index": 1,
    "question": "How do you handle an unknown payment result?",
    "answer": "Persist workflow state, use idempotent commands, explicit statuses and compensating actions where appropriate. For external systems, design for unknown outcomes and reconciliation rather than assuming timeout means failure.",
    "track": "backend"
  },
  {
    "questionId": "v91-033",
    "index": 0,
    "question": "When would you prefer async?",
    "answer": "REST/gRPC is commonly synchronous and useful when the caller needs an immediate result. Messaging is useful for long-running, bursty or independently scalable workflows, but introduces eventual consistency and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-033",
    "index": 1,
    "question": "How do you expose async status to clients?",
    "answer": "REST/gRPC is commonly synchronous and useful when the caller needs an immediate result. Messaging is useful for long-running, bursty or independently scalable workflows, but introduces eventual consistency and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-034",
    "index": 0,
    "question": "Can browsers call gRPC directly?",
    "answer": "REST is convenient for public APIs and browser integrations. gRPC can provide compact payloads, streaming and generated clients for internal services. Choice depends on ecosystem, observability and operational requirements.",
    "track": "backend"
  },
  {
    "questionId": "v91-034",
    "index": 1,
    "question": "What about streaming?",
    "answer": "REST is convenient for public APIs and browser integrations. gRPC can provide compact payloads, streaming and generated clients for internal services. Choice depends on ecosystem, observability and operational requirements.",
    "track": "backend"
  },
  {
    "questionId": "v91-035",
    "index": 0,
    "question": "URI vs header versioning?",
    "answer": "Common approaches include URI, header or media-type versioning. I prefer backward-compatible additive changes where possible and use explicit versions when semantics or contracts must break.",
    "track": "backend"
  },
  {
    "questionId": "v91-035",
    "index": 1,
    "question": "How do you deprecate v1?",
    "answer": "Common approaches include URI, header or media-type versioning. I prefer backward-compatible additive changes where possible and use explicit versions when semantics or contracts must break.",
    "track": "backend"
  },
  {
    "questionId": "v91-036",
    "index": 0,
    "question": "Token bucket vs leaky bucket?",
    "answer": "Algorithms include fixed window, sliding window, token bucket and leaky bucket. Distributed deployments need shared or coordinated state if limits must apply across instances.",
    "track": "backend"
  },
  {
    "questionId": "v91-036",
    "index": 1,
    "question": "Where should rate limiting happen?",
    "answer": "Algorithms include fixed window, sliding window, token bucket and leaky bucket. Distributed deployments need shared or coordinated state if limits must apply across instances.",
    "track": "backend"
  },
  {
    "questionId": "v91-037",
    "index": 0,
    "question": "How is load shedding different from rate limiting?",
    "answer": "Examples include returning 429, rejecting optional requests, reducing expensive features or applying priority queues. The goal is graceful degradation rather than letting every request time out.",
    "track": "backend"
  },
  {
    "questionId": "v91-037",
    "index": 1,
    "question": "How do you choose what to shed?",
    "answer": "Examples include returning 429, rejecting optional requests, reducing expensive features or applying priority queues. The goal is graceful degradation rather than letting every request time out.",
    "track": "backend"
  },
  {
    "questionId": "v91-038",
    "index": 0,
    "question": "How do you handle cross-region writes?",
    "answer": "Key decisions include active-active vs active-passive, data replication, conflict handling, traffic routing, regional failure detection and recovery objectives. Not every service needs global active-active writes.",
    "track": "backend"
  },
  {
    "questionId": "v91-038",
    "index": 1,
    "question": "RPO vs RTO?",
    "answer": "Key decisions include active-active vs active-passive, data replication, conflict handling, traffic routing, regional failure detection and recovery objectives. Not every service needs global active-active writes.",
    "track": "backend"
  },
  {
    "questionId": "v91-039",
    "index": 0,
    "question": "How do backups affect RPO?",
    "answer": "For example, RPO of five minutes means losing up to five minutes of data may be acceptable. RTO of 30 minutes means the service should recover within 30 minutes. These targets drive backup and replication architecture.",
    "track": "backend"
  },
  {
    "questionId": "v91-039",
    "index": 1,
    "question": "How do you test RTO?",
    "answer": "For example, RPO of five minutes means losing up to five minutes of data may be acceptable. RTO of 30 minutes means the service should recover within 30 minutes. These targets drive backup and replication architecture.",
    "track": "backend"
  },
  {
    "questionId": "v91-040",
    "index": 0,
    "question": "Why can a distributed lock expire while work is still running?",
    "answer": "A robust design needs ownership, expiration/lease, safe release and behavior when the holder pauses or loses connectivity. For critical correctness, database constraints or transactional state transitions may be safer than a lock.",
    "track": "backend"
  },
  {
    "questionId": "v91-040",
    "index": 1,
    "question": "How do you avoid deleting another owner's lock?",
    "answer": "A robust design needs ownership, expiration/lease, safe release and behavior when the holder pauses or loses connectivity. For critical correctness, database constraints or transactional state transitions may be safer than a lock.",
    "track": "backend"
  },
  {
    "questionId": "v91-041",
    "index": 0,
    "question": "Does CAP mean you can only choose two of C,A,P?",
    "answer": "The practical trade-off appears when nodes cannot communicate. A system must choose whether to reject or delay some operations to preserve consistency, or continue serving potentially divergent data for availability.",
    "track": "backend"
  },
  {
    "questionId": "v91-041",
    "index": 1,
    "question": "How does this relate to databases?",
    "answer": "The practical trade-off appears when nodes cannot communicate. A system must choose whether to reject or delay some operations to preserve consistency, or continue serving potentially divergent data for availability.",
    "track": "backend"
  },
  {
    "questionId": "v91-042",
    "index": 0,
    "question": "Event sourcing vs event-driven architecture?",
    "answer": "Current state can be rebuilt by replaying events, and snapshots can reduce replay cost. It provides a strong audit history but complicates schema evolution, querying and operational recovery.",
    "track": "backend"
  },
  {
    "questionId": "v91-042",
    "index": 1,
    "question": "How do you version events?",
    "answer": "Current state can be rebuilt by replaying events, and snapshots can reduce replay cost. It provides a strong audit history but complicates schema evolution, querying and operational recovery.",
    "track": "backend"
  },
  {
    "questionId": "v91-043",
    "index": 0,
    "question": "How do you keep data consistent during migration?",
    "answer": "A facade or gateway directs some functionality to the new implementation while the old system continues serving the rest. Over time, more capabilities move until the legacy component can be retired.",
    "track": "backend"
  },
  {
    "questionId": "v91-043",
    "index": 1,
    "question": "What makes strangler safer than a big-bang rewrite?",
    "answer": "A facade or gateway directs some functionality to the new implementation while the old system continues serving the rest. Over time, more capabilities move until the legacy component can be retired.",
    "track": "backend"
  },
  {
    "questionId": "v91-044",
    "index": 0,
    "question": "How do you choose the first service?",
    "answer": "Identify bounded contexts, isolate a capability, define an API/event contract, establish observability, move data ownership carefully, route traffic gradually and retire the old path only after proving correctness.",
    "track": "backend"
  },
  {
    "questionId": "v91-044",
    "index": 1,
    "question": "What is the data migration strategy?",
    "answer": "Identify bounded contexts, isolate a capability, define an API/event contract, establish observability, move data ownership carefully, route traffic gradually and retire the old path only after proving correctness.",
    "track": "backend"
  },
  {
    "questionId": "v91-045",
    "index": 0,
    "question": "Bounded context vs microservice?",
    "answer": "The same word can mean different things in different contexts. Bounded contexts help services own cohesive models instead of sharing one giant domain model across the system.",
    "track": "backend"
  },
  {
    "questionId": "v91-045",
    "index": 1,
    "question": "Can one context contain multiple services?",
    "answer": "The same word can mean different things in different contexts. Bounded contexts help services own cohesive models instead of sharing one giant domain model across the system.",
    "track": "backend"
  },
  {
    "questionId": "v91-046",
    "index": 0,
    "question": "Why not simply publish before the DB write?",
    "answer": "For example, writing an order to a database and then publishing Kafka can leave one side updated and the other missing if the process fails between operations. Outbox, CDC or reconciliation patterns address the gap.",
    "track": "backend"
  },
  {
    "questionId": "v91-046",
    "index": 1,
    "question": "Outbox vs two-phase commit?",
    "answer": "For example, writing an order to a database and then publishing Kafka can leave one side updated and the other missing if the process fails between operations. Outbox, CDC or reconciliation patterns address the gap.",
    "track": "backend"
  },
  {
    "questionId": "v91-047",
    "index": 0,
    "question": "What if the provider has no status API?",
    "answer": "Use an idempotency key when supported, query the provider by reference when possible, persist a pending/unknown state and reconcile asynchronously. Never blindly retry a non-idempotent operation.",
    "track": "backend"
  },
  {
    "questionId": "v91-047",
    "index": 1,
    "question": "How do you communicate status to the user?",
    "answer": "Use an idempotency key when supported, query the provider by reference when possible, persist a pending/unknown state and reconcile asynchronously. Never blindly retry a non-idempotent operation.",
    "track": "backend"
  },
  {
    "questionId": "v91-048",
    "index": 0,
    "question": "When should you not use a fallback?",
    "answer": "Examples include cached data, default recommendations or an asynchronous acceptance response. A fallback must be semantically safe; returning fake critical data can be worse than failing.",
    "track": "backend"
  },
  {
    "questionId": "v91-048",
    "index": 1,
    "question": "Fallback vs retry?",
    "answer": "Examples include cached data, default recommendations or an asynchronous acceptance response. A fallback must be semantically safe; returning fake critical data can be worse than failing.",
    "track": "backend"
  },
  {
    "questionId": "v91-049",
    "index": 0,
    "question": "Why should retries share the same budget?",
    "answer": "If an endpoint has a 1-second SLA, individual calls cannot each be allowed to consume one second. The service must allocate a budget across parallel and sequential dependencies and reserve time for its own work.",
    "track": "backend"
  },
  {
    "questionId": "v91-049",
    "index": 1,
    "question": "How do parallel calls change budgeting?",
    "answer": "If an endpoint has a 1-second SLA, individual calls cannot each be allowed to consume one second. The service must allocate a budget across parallel and sequential dependencies and reserve time for its own work.",
    "track": "backend"
  },
  {
    "questionId": "v91-050",
    "index": 0,
    "question": "How do you choose pool size?",
    "answer": "Pools reduce handshake overhead and control concurrency. The pool size must match downstream capacity; too many connections can overload a database or remote service.",
    "track": "backend"
  },
  {
    "questionId": "v91-050",
    "index": 1,
    "question": "What happens when the pool is exhausted?",
    "answer": "Pools reduce handshake overhead and control concurrency. The pool size must match downstream capacity; too many connections can overload a database or remote service.",
    "track": "backend"
  },
  {
    "questionId": "v91-051",
    "index": 0,
    "question": "How do you distinguish CPU from I/O bottlenecks?",
    "answer": "Check metrics for latency/errors/saturation, inspect traces for slow spans, examine logs with correlation IDs, verify thread and connection pools, inspect database query plans and downstream latency. Reproduce under controlled load before changing limits.",
    "track": "backend"
  },
  {
    "questionId": "v91-051",
    "index": 1,
    "question": "What metrics would you inspect first?",
    "answer": "Check metrics for latency/errors/saturation, inspect traces for slow spans, examine logs with correlation IDs, verify thread and connection pools, inspect database query plans and downstream latency. Reproduce under controlled load before changing limits.",
    "track": "backend"
  },
  {
    "questionId": "v91-052",
    "index": 0,
    "question": "Why can slow calls open a circuit breaker?",
    "answer": "Use aggressive timeouts, concurrency limits/bulkheads, circuit breaking based on slow-call thresholds, bounded retries only where safe, and fallbacks. Protect the caller before its threads or connections are exhausted.",
    "track": "backend"
  },
  {
    "questionId": "v91-052",
    "index": 1,
    "question": "How does queueing affect latency?",
    "answer": "Use aggressive timeouts, concurrency limits/bulkheads, circuit breaking based on slow-call thresholds, bounded retries only where safe, and fallbacks. Protect the caller before its threads or connections are exhausted.",
    "track": "backend"
  },
  {
    "questionId": "v91-053",
    "index": 0,
    "question": "What should liveness check?",
    "answer": "A liveness endpoint can answer whether the process is functioning. Readiness can include critical dependency checks, but those checks should have bounded timeouts and not create a dependency storm.",
    "track": "backend"
  },
  {
    "questionId": "v91-053",
    "index": 1,
    "question": "Should readiness check every dependency?",
    "answer": "A liveness endpoint can answer whether the process is functioning. Readiness can include critical dependency checks, but those checks should have bounded timeouts and not create a dependency storm.",
    "track": "backend"
  },
  {
    "questionId": "v91-054",
    "index": 0,
    "question": "How do you refresh configuration safely?",
    "answer": "Services can load configuration from a configuration service, environment variables or a secret manager. Sensitive values should be stored in a secret system rather than ordinary configuration.",
    "track": "backend"
  },
  {
    "questionId": "v91-054",
    "index": 1,
    "question": "Config service failure behavior?",
    "answer": "Services can load configuration from a configuration service, environment variables or a secret manager. Sensitive values should be stored in a secret system rather than ordinary configuration.",
    "track": "backend"
  },
  {
    "questionId": "v91-055",
    "index": 0,
    "question": "How do you rotate a secret without downtime?",
    "answer": "Use a secret manager or protected runtime environment, inject secrets at runtime, rotate them and audit access. Configuration files can reference secret keys without containing secret values.",
    "track": "backend"
  },
  {
    "questionId": "v91-055",
    "index": 1,
    "question": "What about encrypted Git secrets?",
    "answer": "Use a secret manager or protected runtime environment, inject secrets at runtime, rotate them and audit access. Configuration files can reference secret keys without containing secret values.",
    "track": "backend"
  },
  {
    "questionId": "v91-056",
    "index": 0,
    "question": "What makes a service horizontally scalable?",
    "answer": "Stateless services are usually easy to scale horizontally. Vertical scaling can be simpler for some workloads but has hardware limits and creates larger failure units.",
    "track": "backend"
  },
  {
    "questionId": "v91-056",
    "index": 1,
    "question": "How does a database scale differently?",
    "answer": "Stateless services are usually easy to scale horizontally. Vertical scaling can be simpler for some workloads but has hardware limits and creates larger failure units.",
    "track": "backend"
  },
  {
    "questionId": "v91-057",
    "index": 0,
    "question": "Can you use local caching in a stateless service?",
    "answer": "Store durable state in databases, caches or external workflow stores. Local memory can still be used as a cache if losing it does not break correctness. Statelessness makes replacement and horizontal scaling easier.",
    "track": "backend"
  },
  {
    "questionId": "v91-057",
    "index": 1,
    "question": "Where should sessions live?",
    "answer": "Store durable state in databases, caches or external workflow stores. Local memory can still be used as a cache if losing it does not break correctness. Statelessness makes replacement and horizontal scaling easier.",
    "track": "backend"
  },
  {
    "questionId": "v91-058",
    "index": 0,
    "question": "What if Redis is unavailable?",
    "answer": "A shared store such as Redis can maintain counters or token buckets, or an API gateway/service mesh can enforce limits. The design must account for clocking, atomic updates and store availability.",
    "track": "backend"
  },
  {
    "questionId": "v91-058",
    "index": 1,
    "question": "How do token buckets work atomically?",
    "answer": "A shared store such as Redis can maintain counters or token buckets, or an API gateway/service mesh can enforce limits. The design must account for clocking, atomic updates and store availability.",
    "track": "backend"
  },
  {
    "questionId": "v91-059",
    "index": 0,
    "question": "Why use 202?",
    "answer": "POST /reports can return 202 Accepted with a job ID. A worker processes the job and persists status such as QUEUED, RUNNING, SUCCEEDED or FAILED. The status API should be idempotent and observable.",
    "track": "backend"
  },
  {
    "questionId": "v91-059",
    "index": 1,
    "question": "How do you handle duplicate submissions?",
    "answer": "POST /reports can return 202 Accepted with a job ID. A worker processes the job and persists status such as QUEUED, RUNNING, SUCCEEDED or FAILED. The status API should be idempotent and observable.",
    "track": "backend"
  },
  {
    "questionId": "v91-060",
    "index": 0,
    "question": "How do you decide what is optional?",
    "answer": "Examples include serving cached data, disabling recommendations or reducing page detail while preserving checkout. Degraded behavior should be explicit and tested.",
    "track": "backend"
  },
  {
    "questionId": "v91-060",
    "index": 1,
    "question": "How do you test degraded modes?",
    "answer": "Examples include serving cached data, disabling recommendations or reducing page detail while preserving checkout. Degraded behavior should be explicit and tested.",
    "track": "backend"
  },
  {
    "questionId": "v91-061",
    "index": 0,
    "question": "How do you prevent duplicate SMS?",
    "answer": "Persist notification intent, publish work to a queue, use provider adapters, idempotency keys and bounded retries, route permanent failures to a DLQ, and expose delivery status. Email/SMS providers can return unknown outcomes, so provider references are important.",
    "track": "backend"
  },
  {
    "questionId": "v91-061",
    "index": 1,
    "question": "How do you retry provider failures?",
    "answer": "Persist notification intent, publish work to a queue, use provider adapters, idempotency keys and bounded retries, route permanent failures to a DLQ, and expose delivery status. Email/SMS providers can return unknown outcomes, so provider references are important.",
    "track": "backend"
  },
  {
    "questionId": "v91-062",
    "index": 0,
    "question": "Where would you use caching?",
    "answer": "Use stateless APIs, database indexing and partitioning where needed, asynchronous events for downstream work, idempotent order creation, caching for read-heavy data and strong observability. Keep payment and inventory ownership in their own services.",
    "track": "backend"
  },
  {
    "questionId": "v91-062",
    "index": 1,
    "question": "How do you avoid duplicate orders?",
    "answer": "Use stateless APIs, database indexing and partitioning where needed, asynchronous events for downstream work, idempotent order creation, caching for read-heavy data and strong observability. Keep payment and inventory ownership in their own services.",
    "track": "backend"
  },
  {
    "questionId": "v91-063",
    "index": 0,
    "question": "Saga alternative?",
    "answer": "A local database transaction can atomically update its own data, but another service may commit independently. Network failures create partial success. Two-phase commit can coordinate some resources but adds blocking and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-063",
    "index": 1,
    "question": "Why not use one global transaction?",
    "answer": "A local database transaction can atomically update its own data, but another service may commit independently. Network failures create partial success. Two-phase commit can coordinate some resources but adds blocking and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-064",
    "index": 0,
    "question": "When is an ACL useful?",
    "answer": "The layer translates requests, responses and concepts between bounded contexts. It reduces coupling and lets the new service evolve independently of the legacy representation.",
    "track": "backend"
  },
  {
    "questionId": "v91-064",
    "index": 1,
    "question": "Can an API gateway be an ACL?",
    "answer": "The layer translates requests, responses and concepts between bounded contexts. It reduces coupling and lets the new service evolve independently of the legacy representation.",
    "track": "backend"
  },
  {
    "questionId": "v91-065",
    "index": 0,
    "question": "Contract test vs end-to-end test?",
    "answer": "A contract test verifies the request and response shape a consumer depends on. It catches breaking API changes earlier than relying only on end-to-end tests.",
    "track": "backend"
  },
  {
    "questionId": "v91-065",
    "index": 1,
    "question": "How do you version contracts?",
    "answer": "Consumer-driven contracts can specify expected requests and responses. The provider verifies those expectations during CI, reducing integration surprises without requiring every consumer to run in a full environment.",
    "track": "backend"
  },
  {
    "questionId": "v91-066",
    "index": 0,
    "question": "What if multiple consumers have conflicting expectations?",
    "answer": "A consumer publishes expectations for an endpoint or message. The provider runs those contracts in CI. This focuses provider compatibility on actual consumer needs.",
    "track": "backend"
  },
  {
    "questionId": "v91-066",
    "index": 1,
    "question": "How do contracts work with Kafka?",
    "answer": "A consumer publishes expectations for an endpoint or message. The provider runs those contracts in CI. This focuses provider compatibility on actual consumer needs.",
    "track": "backend"
  },
  {
    "questionId": "v91-067",
    "index": 0,
    "question": "Why are enum changes risky?",
    "answer": "Add optional fields, avoid changing existing meanings, support old enum values, and introduce new endpoints or versions only when semantics must change. Deprecate gradually with telemetry to identify remaining consumers.",
    "track": "backend"
  },
  {
    "questionId": "v91-067",
    "index": 1,
    "question": "How do you know when it is safe to remove old behavior?",
    "answer": "Add optional fields, avoid changing existing meanings, support old enum values, and introduce new endpoints or versions only when semantics must change. Deprecate gradually with telemetry to identify remaining consumers.",
    "track": "backend"
  },
  {
    "questionId": "v91-068",
    "index": 0,
    "question": "How does jitter help?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "v91-068",
    "index": 1,
    "question": "What is retry amplification?",
    "answer": "Retries should be bounded, use exponential backoff and jitter, and respect an overall deadline. Circuit breakers and load shedding can stop repeated calls when failure persists.",
    "track": "backend"
  },
  {
    "questionId": "v91-069",
    "index": 0,
    "question": "Why are monotonic clocks important?",
    "answer": "Use synchronized clocks such as NTP, avoid using wall-clock time for strict ordering, and prefer monotonic clocks for measuring durations. Distributed systems should tolerate small timestamp differences.",
    "track": "backend"
  },
  {
    "questionId": "v91-069",
    "index": 1,
    "question": "Can timestamps establish total event order?",
    "answer": "Use synchronized clocks such as NTP, avoid using wall-clock time for strict ordering, and prefer monotonic clocks for measuring durations. Distributed systems should tolerate small timestamp differences.",
    "track": "backend"
  },
  {
    "questionId": "v91-070",
    "index": 0,
    "question": "UUID vs database sequence?",
    "answer": "Options include UUIDs, database sequences, Snowflake-style IDs or application-generated sortable IDs. The choice depends on ordering, size, index locality and coordination requirements.",
    "track": "backend"
  },
  {
    "questionId": "v91-070",
    "index": 1,
    "question": "Why can random UUIDs affect database indexes?",
    "answer": "Options include UUIDs, database sequences, Snowflake-style IDs or application-generated sortable IDs. The choice depends on ordering, size, index locality and coordination requirements.",
    "track": "backend"
  },
  {
    "questionId": "v91-071",
    "index": 0,
    "question": "Can services share the same physical database server?",
    "answer": "It preserves service autonomy and prevents direct schema coupling. Cross-service queries are handled through APIs, read models, events or dedicated reporting stores.",
    "track": "backend"
  },
  {
    "questionId": "v91-071",
    "index": 1,
    "question": "How do you perform cross-service reporting?",
    "answer": "It preserves service autonomy and prevents direct schema coupling. Cross-service queries are handled through APIs, read models, events or dedicated reporting stores.",
    "track": "backend"
  },
  {
    "questionId": "v91-072",
    "index": 0,
    "question": "How fresh does the report need to be?",
    "answer": "Publish domain or CDC events into a reporting pipeline, transform them into an analytics store or read database, and accept the required freshness. This preserves ownership while supporting cross-domain queries.",
    "track": "backend"
  },
  {
    "questionId": "v91-072",
    "index": 1,
    "question": "CDC vs domain events?",
    "answer": "Publish domain or CDC events into a reporting pipeline, transform them into an analytics store or read database, and accept the required freshness. This preserves ownership while supporting cross-domain queries.",
    "track": "backend"
  },
  {
    "questionId": "v91-073",
    "index": 0,
    "question": "Cache-aside vs write-through?",
    "answer": "Redis is a common choice. Design TTLs, eviction, stampede protection and behavior when the cache is unavailable. Never make correctness depend solely on a cache unless the system explicitly supports that model.",
    "track": "backend"
  },
  {
    "questionId": "v91-073",
    "index": 1,
    "question": "How do you prevent cache stampede?",
    "answer": "Redis is a common choice. Design TTLs, eviction, stampede protection and behavior when the cache is unavailable. Never make correctness depend solely on a cache unless the system explicitly supports that model.",
    "track": "backend"
  },
  {
    "questionId": "v91-074",
    "index": 0,
    "question": "What is cache penetration?",
    "answer": "Use request coalescing/single-flight, randomized TTLs, stale-while-revalidate, warm-up or locking with careful timeouts. The goal is to limit concurrent backend refreshes.",
    "track": "backend"
  },
  {
    "questionId": "v91-074",
    "index": 1,
    "question": "Why add jitter to TTL?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "v91-075",
    "index": 0,
    "question": "When is write-through better?",
    "answer": "Writes normally update the database and invalidate or refresh the cache. It is simple but requires careful invalidation and tolerates temporary staleness.",
    "track": "backend"
  },
  {
    "questionId": "v91-075",
    "index": 1,
    "question": "What happens if cache.put fails after DB commit?",
    "answer": "Writes normally update the database and invalidate or refresh the cache. It is simple but requires careful invalidation and tolerates temporary staleness.",
    "track": "backend"
  },
  {
    "questionId": "v91-076",
    "index": 0,
    "question": "How do you invalidate across instances?",
    "answer": "Asynchronous invalidation, TTLs or event propagation create a window where readers see stale data. The application should define whether that staleness is acceptable for each use case.",
    "track": "backend"
  },
  {
    "questionId": "v91-076",
    "index": 1,
    "question": "When is stale data unacceptable?",
    "answer": "Asynchronous invalidation, TTLs or event propagation create a window where readers see stale data. The application should define whether that staleness is acceptable for each use case.",
    "track": "backend"
  },
  {
    "questionId": "v91-077",
    "index": 0,
    "question": "Retry topic vs consumer sleep?",
    "answer": "Use bounded in-process retries for transient errors, retry topics with backoff for longer delays, and a DLT for exhausted messages. Commit/acknowledgment behavior must match the chosen retry flow.",
    "track": "backend"
  },
  {
    "questionId": "v91-077",
    "index": 1,
    "question": "How do you preserve ordering?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v91-078",
    "index": 0,
    "question": "Backward vs forward compatibility?",
    "answer": "Use schema registries and compatibility rules where appropriate, prefer additive optional fields, and avoid changing the meaning or type of existing fields. Version events when semantics genuinely change.",
    "track": "backend"
  },
  {
    "questionId": "v91-078",
    "index": 1,
    "question": "What about Avro/Protobuf?",
    "answer": "Use schema registries and compatibility rules where appropriate, prefer additive optional fields, and avoid changing the meaning or type of existing fields. Version events when semantics genuinely change.",
    "track": "backend"
  },
  {
    "questionId": "v91-079",
    "index": 0,
    "question": "How do hot partitions happen?",
    "answer": "All events requiring order should share the same key. A poor key can create hot partitions, so ordering requirements must be balanced against distribution.",
    "track": "backend"
  },
  {
    "questionId": "v91-079",
    "index": 1,
    "question": "Can you change the key later?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-080",
    "index": 0,
    "question": "How would you diagnose it?",
    "answer": "It can happen when the partition key has low cardinality or one entity generates much more traffic. Mitigation may involve better keys, sharding a hot entity or increasing partitions when semantics allow.",
    "track": "backend"
  },
  {
    "questionId": "v91-080",
    "index": 1,
    "question": "What does increasing partitions change?",
    "answer": "It can happen when the partition key has low cardinality or one entity generates much more traffic. Mitigation may involve better keys, sharding a hot entity or increasing partitions when semantics allow.",
    "track": "backend"
  },
  {
    "questionId": "v91-081",
    "index": 0,
    "question": "How do you prevent replay from charging a payment twice?",
    "answer": "Keep durable events for an appropriate retention period, version schemas, make consumers idempotent, isolate replay consumer groups and ensure side effects are controlled so replay does not resend real-world actions accidentally.",
    "track": "backend"
  },
  {
    "questionId": "v91-081",
    "index": 1,
    "question": "Why are deterministic consumers important?",
    "answer": "Keep durable events for an appropriate retention period, version schemas, make consumers idempotent, isolate replay consumer groups and ensure side effects are controlled so replay does not resend real-world actions accidentally.",
    "track": "backend"
  },
  {
    "questionId": "v91-082",
    "index": 0,
    "question": "Which is easier to observe?",
    "answer": "Orchestration makes state and compensation explicit. Choreography can reduce central coupling but becomes harder to reason about as the number of event interactions grows.",
    "track": "backend"
  },
  {
    "questionId": "v91-082",
    "index": 1,
    "question": "When does choreography become difficult?",
    "answer": "Orchestration makes state and compensation explicit. Choreography can reduce central coupling but becomes harder to reason about as the number of event interactions grows.",
    "track": "backend"
  },
  {
    "questionId": "v91-083",
    "index": 0,
    "question": "How does optimistic locking help?",
    "answer": "Optimistic locking uses a version or timestamp so an update succeeds only if the resource is still at the version the user read. A mismatch should produce a conflict response rather than silently overwriting another user's change.",
    "track": "backend"
  },
  {
    "questionId": "v91-083",
    "index": 1,
    "question": "What if the client retries after a timeout?",
    "answer": "Use a unique command ID, expected-version checks, conditional updates or business uniqueness constraints. Persist the processed command with the state change atomically when possible.",
    "track": "backend"
  },
  {
    "questionId": "v91-084",
    "index": 0,
    "question": "Optimistic vs pessimistic locking?",
    "answer": "Optimistic locking assumes conflicts are uncommon and detects a conflicting update, commonly with a version column. Pessimistic locking acquires database locks to prevent competing transactions from changing the protected data concurrently.",
    "track": "backend"
  },
  {
    "questionId": "v91-084",
    "index": 1,
    "question": "What should happen on conflict?",
    "answer": "The service reads version 5 and updates with a condition requiring version 5. If another writer changes it first, the update affects zero rows and the service handles the conflict.",
    "track": "backend"
  },
  {
    "questionId": "v91-085",
    "index": 0,
    "question": "How do you size pools?",
    "answer": "If payment calls consume a dedicated pool, a payment outage cannot occupy every worker needed by inventory or search. Pool sizes should be bounded and monitored.",
    "track": "backend"
  },
  {
    "questionId": "v91-085",
    "index": 1,
    "question": "Virtual threads change what here?",
    "answer": "If payment calls consume a dedicated pool, a payment outage cannot occupy every worker needed by inventory or search. Pool sizes should be bounded and monitored.",
    "track": "backend"
  },
  {
    "questionId": "v91-086",
    "index": 0,
    "question": "What is an error budget?",
    "answer": "For a 99.9% monthly availability target, the remaining 0.1% is the budget for errors or downtime. Teams can use the budget to balance release velocity against reliability work.",
    "track": "backend"
  },
  {
    "questionId": "v91-086",
    "index": 1,
    "question": "Why do SLOs matter for deployments?",
    "answer": "For example, an internal SLO might target 99.9% successful requests. An external SLA may promise a level of availability with credits or other obligations. Error budgets connect SLOs to engineering decisions.",
    "track": "backend"
  },
  {
    "questionId": "v91-087",
    "index": 0,
    "question": "How can error budgets affect deployments?",
    "answer": "For a 99.9% monthly availability target, the remaining 0.1% is the budget for errors or downtime. Teams can use the budget to balance release velocity against reliability work.",
    "track": "backend"
  },
  {
    "questionId": "v91-087",
    "index": 1,
    "question": "What if the budget is exhausted?",
    "answer": "For a 99.9% monthly availability target, the remaining 0.1% is the budget for errors or downtime. Teams can use the budget to balance release velocity against reliability work.",
    "track": "backend"
  },
  {
    "questionId": "v91-088",
    "index": 0,
    "question": "What is the leftmost-prefix principle?",
    "answer": "For a composite index such as (A, B, C), the database can generally use the leading prefix A or A+B effectively, while a query on B alone usually cannot use the index in the same way. The exact optimizer behavior depends on the database, but the index column order should match the most selective and common access patterns.",
    "track": "backend"
  },
  {
    "questionId": "v91-088",
    "index": 1,
    "question": "How do equality and range predicates affect column order?",
    "answer": "Choose composite-index column order based on the workload: equality predicates commonly come before range predicates, and columns used for ordering or joins may also influence the design. Then validate the choice with the database's execution plan and real data distribution.",
    "track": "backend"
  },
  {
    "questionId": "v91-089",
    "index": 0,
    "question": "What is a cardinality estimate?",
    "answer": "I look for full scans on large tables, unexpected join algorithms, poor row estimates, expensive sorts, repeated lookups and whether predicates use useful indexes. Then I compare estimated and actual behavior when available.",
    "track": "backend"
  },
  {
    "questionId": "v91-089",
    "index": 1,
    "question": "Why can an index still be ignored?",
    "answer": "I look for full scans on large tables, unexpected join algorithms, poor row estimates, expensive sorts, repeated lookups and whether predicates use useful indexes. Then I compare estimated and actual behavior when available.",
    "track": "backend"
  },
  {
    "questionId": "v91-090",
    "index": 0,
    "question": "GROUP BY vs window function?",
    "answer": "Functions such as ROW_NUMBER, RANK, SUM and LAG can calculate rankings, running totals and previous-row comparisons while preserving detail rows.",
    "track": "backend"
  },
  {
    "questionId": "v91-090",
    "index": 1,
    "question": "RANK vs DENSE_RANK?",
    "answer": "ROW_NUMBER assigns a unique sequence even when values tie. RANK gives tied rows the same rank and leaves gaps after the tie. DENSE_RANK gives tied rows the same rank but does not leave gaps. For top-N-per-group problems, choose based on whether ties should share the same rank.",
    "track": "backend"
  },
  {
    "questionId": "v91-091",
    "index": 0,
    "question": "Which should you use for top 3 distinct salaries?",
    "answer": "ROW_NUMBER assigns a unique sequence within a window, RANK gives tied rows the same rank and leaves gaps after ties, while DENSE_RANK also gives ties the same rank but does not leave gaps.",
    "track": "backend"
  },
  {
    "questionId": "v91-091",
    "index": 1,
    "question": "How do ties affect pagination?",
    "answer": "ROW_NUMBER assigns a unique sequence within a window, RANK gives tied rows the same rank and leaves gaps after ties, while DENSE_RANK also gives ties the same rank but does not leave gaps.",
    "track": "backend"
  },
  {
    "questionId": "v91-092",
    "index": 0,
    "question": "ROW_NUMBER vs DENSE_RANK for ties?",
    "answer": "For top three salaries per department, calculate ROW_NUMBER or DENSE_RANK over each department ordered by salary, then filter the result.",
    "track": "backend"
  },
  {
    "questionId": "v91-092",
    "index": 1,
    "question": "How do you handle departments with fewer than N rows?",
    "answer": "For top three salaries per department, calculate ROW_NUMBER or DENSE_RANK over each department ordered by salary, then filter the result.",
    "track": "backend"
  },
  {
    "questionId": "v91-093",
    "index": 0,
    "question": "CTE vs subquery?",
    "answer": "CTEs improve readability, can support recursive queries and can make multi-step transformations easier to reason about. Whether they materialize depends on the database and query plan.",
    "track": "backend"
  },
  {
    "questionId": "v91-093",
    "index": 1,
    "question": "When can a CTE hurt performance?",
    "answer": "CTEs improve readability, can support recursive queries and can make multi-step transformations easier to reason about. Whether they materialize depends on the database and query plan.",
    "track": "backend"
  },
  {
    "questionId": "v91-094",
    "index": 0,
    "question": "How do you prevent infinite recursion?",
    "answer": "It has an anchor query and a recursive query joined by UNION ALL. It is useful for employee hierarchies, category trees and dependency chains.",
    "track": "backend"
  },
  {
    "questionId": "v91-094",
    "index": 1,
    "question": "Can recursive CTEs traverse arbitrary graphs?",
    "answer": "A recursive CTE defines an anchor query and a recursive query that repeatedly expands from the previous result. It is useful for hierarchies such as employee-manager trees or graph-like relationships. A termination condition is essential to avoid runaway recursion.",
    "track": "backend"
  },
  {
    "questionId": "v91-095",
    "index": 0,
    "question": "How do you handle non-unique sort keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-095",
    "index": 1,
    "question": "When is OFFSET acceptable?",
    "answer": "OFFSET can become expensive as the page number grows because the database may scan and discard many rows. Keyset pagination uses a predicate such as created_at/id > lastSeen and an appropriate index.",
    "track": "backend"
  },
  {
    "questionId": "v91-096",
    "index": 0,
    "question": "How do you prevent deadlocks?",
    "answer": "For example, transaction A locks row 1 then waits for row 2 while transaction B locks row 2 then waits for row 1. Databases detect deadlocks and abort one transaction.",
    "track": "backend"
  },
  {
    "questionId": "v91-096",
    "index": 1,
    "question": "Why should applications retry deadlock victims?",
    "answer": "For example, transaction A locks row 1 then waits for row 2 while transaction B locks row 2 then waits for row 1. Databases detect deadlocks and abort one transaction.",
    "track": "backend"
  },
  {
    "questionId": "v91-097",
    "index": 0,
    "question": "Can SELECT queries participate in locking?",
    "answer": "Good indexes reduce the rows locked or scanned. Consistent ordering prevents cycles, and smaller transactions reduce contention. Deadlock retry should be bounded and idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v91-097",
    "index": 1,
    "question": "Why do missing indexes increase contention?",
    "answer": "Good indexes reduce the rows locked or scanned. Consistent ordering prevents cycles, and smaller transactions reduce contention. Deadlock retry should be bounded and idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v91-098",
    "index": 0,
    "question": "How is this different from SELECT FOR UPDATE?",
    "answer": "A row includes a version. An update succeeds only if the version still matches the value read. If zero rows are updated, the application detects a conflict and decides whether to retry or report it.",
    "track": "backend"
  },
  {
    "questionId": "v91-098",
    "index": 1,
    "question": "What user experience should a conflict produce?",
    "answer": "A row includes a version. An update succeeds only if the version still matches the value read. If zero rows are updated, the application detects a conflict and decides whether to retry or report it.",
    "track": "backend"
  },
  {
    "questionId": "v91-099",
    "index": 0,
    "question": "When is pessimistic locking appropriate?",
    "answer": "Pessimistic locking is appropriate when conflicts are frequent or the cost of concurrent modification is high and the transaction can hold a lock for a short, predictable period. It reduces conflicting updates but can increase blocking and deadlocks, so optimistic locking is often preferable when conflicts are rare.",
    "track": "backend"
  },
  {
    "questionId": "v91-099",
    "index": 1,
    "question": "What happens if another transaction requests the same lock?",
    "answer": "It is useful when a transaction must read current state and then update it without another transaction changing the row in between. Lock duration and isolation behavior depend on the database.",
    "track": "backend"
  },
  {
    "questionId": "v91-100",
    "index": 0,
    "question": "Explain dirty vs non-repeatable vs phantom read.",
    "answer": "Higher isolation can prevent anomalies such as dirty, non-repeatable or phantom reads but may increase locking or coordination. The exact implementation differs by database.",
    "track": "backend"
  },
  {
    "questionId": "v91-100",
    "index": 1,
    "question": "Which isolation level does your database default to?",
    "answer": "Higher isolation can prevent anomalies such as dirty, non-repeatable or phantom reads but may increase locking or coordination. The exact implementation differs by database.",
    "track": "backend"
  },
  {
    "questionId": "v91-101",
    "index": 0,
    "question": "Which isolation levels allow dirty reads?",
    "answer": "If the writer later rolls back, the reader observed a value that never became committed state. Isolation levels that prevent dirty reads are common in production systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-101",
    "index": 1,
    "question": "How is it different from a non-repeatable read?",
    "answer": "If the writer later rolls back, the reader observed a value that never became committed state. Isolation levels that prevent dirty reads are common in production systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-102",
    "index": 0,
    "question": "How do databases prevent phantoms?",
    "answer": "It differs from a non-repeatable read, which changes an already-read row. Predicate-level protection or serializable techniques are used when phantoms must be prevented.",
    "track": "backend"
  },
  {
    "questionId": "v91-102",
    "index": 1,
    "question": "What is predicate locking?",
    "answer": "It differs from a non-repeatable read, which changes an already-read row. Predicate-level protection or serializable techniques are used when phantoms must be prevented.",
    "track": "backend"
  },
  {
    "questionId": "v91-103",
    "index": 0,
    "question": "When would you denormalize?",
    "answer": "Common normal forms progressively constrain dependencies. Normalization improves consistency and write behavior but can require more joins for read-heavy workloads.",
    "track": "backend"
  },
  {
    "questionId": "v91-103",
    "index": 1,
    "question": "Explain 1NF, 2NF and 3NF.",
    "answer": "Common normal forms progressively constrain dependencies. Normalization improves consistency and write behavior but can require more joins for read-heavy workloads.",
    "track": "backend"
  },
  {
    "questionId": "v91-104",
    "index": 0,
    "question": "CASCADE vs RESTRICT?",
    "answer": "CASCADE propagates a parent change such as DELETE to related rows, while RESTRICT or NO ACTION prevents the parent operation when dependent rows exist. The choice should reflect ownership: cascade is useful for truly dependent data, while restrict is safer when child records must not disappear implicitly.",
    "track": "backend"
  },
  {
    "questionId": "v91-104",
    "index": 1,
    "question": "Should foreign keys always be indexed?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-105",
    "index": 0,
    "question": "Can a unique constraint contain NULL?",
    "answer": "A UNIQUE constraint often creates or uses a unique index internally. Use constraints to express business invariants and indexes intentionally for access paths.",
    "track": "backend"
  },
  {
    "questionId": "v91-105",
    "index": 1,
    "question": "How do composite unique constraints work?",
    "answer": "A UNIQUE constraint often creates or uses a unique index internally. Use constraints to express business invariants and indexes intentionally for access paths.",
    "track": "backend"
  },
  {
    "questionId": "v91-106",
    "index": 0,
    "question": "When is a partial index useful?",
    "answer": "A partial or filtered index indexes only rows that satisfy a predicate, when the database supports that feature. It can reduce index size and maintenance cost when the indexed subset is much smaller than the table.",
    "track": "backend"
  },
  {
    "questionId": "v91-106",
    "index": 1,
    "question": "Does MySQL support the same syntax?",
    "answer": "A partial or filtered index indexes only rows that satisfy a predicate, when the database supports that feature. It can reduce index size and maintenance cost when the indexed subset is much smaller than the table.",
    "track": "backend"
  },
  {
    "questionId": "v91-107",
    "index": 0,
    "question": "What is a functional index?",
    "answer": "For example, WHERE LOWER(email)=? may require a functional index or a normalized stored value. Rewriting predicates to preserve sargability can help.",
    "track": "backend"
  },
  {
    "questionId": "v91-107",
    "index": 1,
    "question": "What does sargable mean?",
    "answer": "For example, WHERE LOWER(email)=? may require a functional index or a normalized stored value. Rewriting predicates to preserve sargability can help.",
    "track": "backend"
  },
  {
    "questionId": "v91-108",
    "index": 0,
    "question": "Why can LIKE %abc be expensive?",
    "answer": "Range and equality predicates on indexed columns are common examples. Wrapping columns in functions or leading wildcard patterns can reduce index usefulness.",
    "track": "backend"
  },
  {
    "questionId": "v91-108",
    "index": 1,
    "question": "How do expressions affect index usage?",
    "answer": "Range and equality predicates on indexed columns are common examples. Wrapping columns in functions or leading wildcard patterns can reduce index usefulness.",
    "track": "backend"
  },
  {
    "questionId": "v91-109",
    "index": 0,
    "question": "How do you size the pool across 10 instances?",
    "answer": "Too few connections can create application-side waiting; too many can overload the database with concurrent work. Pool sizing should consider database capacity, query latency and the number of application instances.",
    "track": "backend"
  },
  {
    "questionId": "v91-109",
    "index": 1,
    "question": "What does pool exhaustion look like?",
    "answer": "Too few connections can create application-side waiting; too many can overload the database with concurrent work. Pool sizing should consider database capacity, query latency and the number of application instances.",
    "track": "backend"
  },
  {
    "questionId": "v91-110",
    "index": 0,
    "question": "N+1 in JPA vs plain JDBC?",
    "answer": "Avoid N+1 with query-specific fetching such as fetch joins or EntityGraph, DTO projections, or batching where appropriate. Confirm the actual SQL/query count before changing the fetch strategy.",
    "track": "backend"
  },
  {
    "questionId": "v91-110",
    "index": 1,
    "question": "When can a join be worse?",
    "answer": "Replace repeated lookups with an appropriate join, batch query or set-based operation. Verify the result cardinality and indexes because an overly broad join can create a different performance problem.",
    "track": "backend"
  },
  {
    "questionId": "v91-111",
    "index": 0,
    "question": "Can SELECT * ever be acceptable?",
    "answer": "SELECT * asks the database to return every selected column. In production APIs this can increase network transfer, deserialization cost and coupling to schema changes, and it can prevent some covering-index opportunities.",
    "track": "backend"
  },
  {
    "questionId": "v91-111",
    "index": 1,
    "question": "How can it affect covering indexes?",
    "answer": "SELECT * asks the database to return every selected column. In production APIs this can increase network transfer, deserialization cost and coupling to schema changes, and it can prevent some covering-index opportunities.",
    "track": "backend"
  },
  {
    "questionId": "v91-112",
    "index": 0,
    "question": "What if the plan changed after data growth?",
    "answer": "Check data growth, statistics, index changes, parameter sensitivity, blocking/locks, schema changes and resource saturation. Capture the exact query and parameters, then test a targeted fix and verify it under representative load.",
    "track": "backend"
  },
  {
    "questionId": "v91-112",
    "index": 1,
    "question": "How can stale statistics matter?",
    "answer": "Check data growth, statistics, index changes, parameter sensitivity, blocking/locks, schema changes and resource saturation. Capture the exact query and parameters, then test a targeted fix and verify it under representative load.",
    "track": "backend"
  },
  {
    "questionId": "v91-113",
    "index": 0,
    "question": "Can parameterization replace input validation?",
    "answer": "The database driver binds values rather than concatenating them into SQL text. Parameterization also improves statement reuse in many systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-113",
    "index": 1,
    "question": "What about dynamic table names?",
    "answer": "The database driver binds values rather than concatenating them into SQL text. Parameterization also improves statement reuse in many systems.",
    "track": "backend"
  },
  {
    "questionId": "v91-114",
    "index": 0,
    "question": "How does least privilege help?",
    "answer": "Concatenating user input into SQL can let an attacker alter predicates or execute unintended commands. Parameterized queries, least privilege and validation reduce the risk.",
    "track": "backend"
  },
  {
    "questionId": "v91-114",
    "index": 1,
    "question": "Can stored procedures prevent injection automatically?",
    "answer": "Concatenating user input into SQL can let an attacker alter predicates or execute unintended commands. Parameterized queries, least privilege and validation reduce the risk.",
    "track": "backend"
  },
  {
    "questionId": "v91-115",
    "index": 0,
    "question": "How do you identify unused indexes?",
    "answer": "A table with many indexes can make high-write workloads slower and increase storage. Indexes should be justified by important access patterns and monitored for usefulness.",
    "track": "backend"
  },
  {
    "questionId": "v91-115",
    "index": 1,
    "question": "What is index bloat?",
    "answer": "A table with many indexes can make high-write workloads slower and increase storage. Indexes should be justified by important access patterns and monitored for usefulness.",
    "track": "backend"
  },
  {
    "questionId": "v91-116",
    "index": 0,
    "question": "Partitioning vs sharding?",
    "answer": "Partitioning can simplify pruning and maintenance within a database. Sharding adds horizontal capacity but requires routing, cross-shard query strategy and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-116",
    "index": 1,
    "question": "How do you choose a partition key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-117",
    "index": 0,
    "question": "How do cross-shard joins work?",
    "answer": "Partitioning can simplify pruning and maintenance within a database. Sharding adds horizontal capacity but requires routing, cross-shard query strategy and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v91-117",
    "index": 1,
    "question": "How do you choose a shard key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-01",
    "index": 0,
    "question": "How would you print primes from 1 to N?",
    "answer": "Check divisibility only up to the square root because a composite number must have a factor at or below sqrt(n).",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-02",
    "index": 0,
    "question": "How would recursion change the solution?",
    "answer": "Factorial is the product from 1 through n. An iterative implementation avoids recursive stack growth.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-03",
    "index": 0,
    "question": "How would you generate Fibonacci with Streams?",
    "answer": "Keep the previous two values and generate each next value iteratively.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-04",
    "index": 0,
    "question": "How do you handle negative numbers?",
    "answer": "Reverse the digits mathematically and compare the reversed value with the original. Avoid converting to a string when the problem expects arithmetic.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-05",
    "index": 0,
    "question": "How would you avoid Math.pow?",
    "answer": "First count the digits, then compute the powered sum and compare it with the original.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-06",
    "index": 0,
    "question": "How would sorting solve it?",
    "answer": "Store previously seen values in a map from value to index. For each number, look for target minus the current value.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-07",
    "index": 0,
    "question": "How would sorting change the solution?",
    "answer": "Count values from one array, then consume those counts while scanning the second array.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-08",
    "index": 0,
    "question": "How would you do this with a boolean array?",
    "answer": "Use a LinkedHashSet to preserve insertion order, then build the result.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-09",
    "index": 0,
    "question": "How do you find elements occurring more than n/3?",
    "answer": "Boyer-Moore treats different values as canceling pairs, leaving the majority candidate. Verify it if majority is not guaranteed.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-10",
    "index": 0,
    "question": "Heap vs Quickselect?",
    "answer": "Use partitioning around a pivot so that the target index is isolated recursively or iteratively.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-11",
    "index": 0,
    "question": "How would sorting solve it?",
    "answer": "Store all values in a set and only start counting when the previous value is absent.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-12",
    "index": 0,
    "question": "What if intervals touch at endpoints?",
    "answer": "Sort by start time and merge each interval into the previous result when the ranges overlap.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-13",
    "index": 0,
    "question": "How does this differ from no-repeating-characters?",
    "answer": "Maintain a sliding window and frequency map. Expand right, and shrink left while the number of distinct characters exceeds K.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-14",
    "index": 0,
    "question": "How do duplicates change the algorithm?",
    "answer": "Compare the middle value with the right boundary to decide which half contains the minimum.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-15",
    "index": 0,
    "question": "How would you count occurrences?",
    "answer": "Run binary search twice: once biased left for the first occurrence and once biased right for the last occurrence.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-16",
    "index": 0,
    "question": "How can you reduce auxiliary space?",
    "answer": "Keep a second stack containing the minimum value seen at each relevant level.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-17",
    "index": 0,
    "question": "What happens in a skewed tree?",
    "answer": "At each node, compare the target with the node value and move left or right according to the BST ordering.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-18",
    "index": 0,
    "question": "DFS vs BFS?",
    "answer": "Use a queue: enqueue the root, process one node, and enqueue its children.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-19",
    "index": 0,
    "question": "How do you find the cycle entry?",
    "answer": "Floyd’s tortoise-and-hare algorithm moves one pointer by one step and another by two; if they meet, a cycle exists.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-20",
    "index": 0,
    "question": "For an even-length list, which middle should be returned?",
    "answer": "Move slow one step and fast two steps. When fast reaches the end, slow is at the middle.",
    "track": "backend"
  },
  {
    "questionId": "v91-coding-21",
    "index": 0,
    "question": "Why use while instead of if?",
    "answer": "Use a ReentrantLock with two Conditions: notFull and notEmpty. Conditions coordinate state changes without busy waiting.",
    "track": "backend"
  },
  {
    "questionId": "v10-001",
    "index": 0,
    "question": "Leak vs high allocation?",
    "answer": "Compare post-GC heap trends, capture a heap dump, inspect dominators and GC roots, then identify the retaining path. Common causes include unbounded caches, static collections, listeners, ThreadLocals and long-lived executors. Validate the fix with the same workload.",
    "track": "backend"
  },
  {
    "questionId": "v10-001",
    "index": 1,
    "question": "How do you investigate native memory?",
    "answer": "Compare post-GC heap trends, capture a heap dump, inspect dominators and GC roots, then identify the retaining path. Common causes include unbounded caches, static collections, listeners, ThreadLocals and long-lived executors. Validate the fix with the same workload.",
    "track": "backend"
  },
  {
    "questionId": "v10-002",
    "index": 0,
    "question": "Why is volatile not enough for i++?",
    "answer": "volatile provides visibility and ordering for a variable, but it does not make compound operations atomic. It is suitable for simple state flags or safely published values; operations such as count++ need synchronization or atomic classes.",
    "track": "backend"
  },
  {
    "questionId": "v10-002",
    "index": 1,
    "question": "What is safe publication?",
    "answer": "Locks, volatile writes/reads, thread start/join and concurrent utilities establish happens-before relationships. Without them, compiler and CPU reordering means another thread is not guaranteed to observe a write when expected.",
    "track": "backend"
  },
  {
    "questionId": "v10-003",
    "index": 0,
    "question": "Explain CAS and ABA.",
    "answer": "Atomic classes provide common CAS operations; VarHandle exposes lower-level memory access modes. They work well for independent counters and state machines, while locks are often clearer for multi-field invariants.",
    "track": "backend"
  },
  {
    "questionId": "v10-003",
    "index": 1,
    "question": "When can lock-free code be slower?",
    "answer": "Atomic classes provide common CAS operations; VarHandle exposes lower-level memory access modes. They work well for independent counters and state machines, while locks are often clearer for multi-field invariants.",
    "track": "backend"
  },
  {
    "questionId": "v10-004",
    "index": 0,
    "question": "What causes virtual-thread pinning?",
    "answer": "They are scheduled on carrier threads and are useful for request-per-task workloads. You still need bounded downstream resources, connection pools and backpressure because cheap concurrency can overwhelm dependencies.",
    "track": "backend"
  },
  {
    "questionId": "v10-004",
    "index": 1,
    "question": "When would reactive programming still help?",
    "answer": "They are scheduled on carrier threads and are useful for request-per-task workloads. You still need bounded downstream resources, connection pools and backpressure because cheap concurrency can overwhelm dependencies.",
    "track": "backend"
  },
  {
    "questionId": "v10-005",
    "index": 0,
    "question": "How do you distinguish lock contention from CPU work?",
    "answer": "Use JFR or async-profiler, thread dumps and GC logs. Check hot methods, serialization, regex, logging, busy loops, GC CPU and traffic changes. Compare with a healthy period.",
    "track": "backend"
  },
  {
    "questionId": "v10-005",
    "index": 1,
    "question": "What does a thread dump show?",
    "answer": "Use JFR or async-profiler, thread dumps and GC logs. Check hot methods, serialization, regex, logging, busy loops, GC CPU and traffic changes. Compare with a healthy period.",
    "track": "backend"
  },
  {
    "questionId": "v10-006",
    "index": 0,
    "question": "Does ThreadLocal propagate to async tasks?",
    "answer": "ThreadLocal values belong to worker threads, which live much longer than requests. Always remove context in finally blocks and be careful when crossing executor boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-006",
    "index": 1,
    "question": "How does ThreadLocalMap work?",
    "answer": "ThreadLocal values belong to worker threads, which live much longer than requests. Always remove context in finally blocks and be careful when crossing executor boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-007",
    "index": 0,
    "question": "Deadlock vs livelock?",
    "answer": "Look for BLOCKED threads, lock owners and cycles. Multiple dumps help confirm the condition. Durable fixes include consistent acquisition order, smaller critical sections or redesigning shared state.",
    "track": "backend"
  },
  {
    "questionId": "v10-007",
    "index": 1,
    "question": "How does tryLock help?",
    "answer": "Look for BLOCKED threads, lock owners and cycles. Multiple dumps help confirm the condition. Durable fixes include consistent acquisition order, smaller critical sections or redesigning shared state.",
    "track": "backend"
  },
  {
    "questionId": "v10-008",
    "index": 0,
    "question": "Why do final fields matter?",
    "answer": "Final fields protect construction semantics; volatile, synchronization, concurrent collections or static initialization can establish visibility of the reference. Mutable inputs should be defensively copied.",
    "track": "backend"
  },
  {
    "questionId": "v10-008",
    "index": 1,
    "question": "Can an immutable object be unsafely published?",
    "answer": "Final fields protect construction semantics; volatile, synchronization, concurrent collections or static initialization can establish visibility of the reference. Mutable inputs should be defensively copied.",
    "track": "backend"
  },
  {
    "questionId": "v10-009",
    "index": 0,
    "question": "JFR vs async-profiler?",
    "answer": "Correlate throughput and p99 latency with CPU, allocation, GC, locks, DB and downstream latency. Use JFR, async-profiler and load tests. Avoid tuning from folklore.",
    "track": "backend"
  },
  {
    "questionId": "v10-009",
    "index": 1,
    "question": "Why p99 instead of average?",
    "answer": "Correlate throughput and p99 latency with CPU, allocation, GC, locks, DB and downstream latency. Use JFR, async-profiler and load tests. Avoid tuning from folklore.",
    "track": "backend"
  },
  {
    "questionId": "v10-010",
    "index": 0,
    "question": "How does CompletableFuture choose an executor?",
    "answer": "Blocking I/O can occupy workers and reduce effective parallelism. Dedicated executors are safer for blocking workloads.",
    "track": "backend"
  },
  {
    "questionId": "v10-010",
    "index": 1,
    "question": "How do you isolate blocking calls?",
    "answer": "Blocking I/O can occupy workers and reduce effective parallelism. Dedicated executors are safer for blocking workloads.",
    "track": "backend"
  },
  {
    "questionId": "v10-011",
    "index": 0,
    "question": "How do you benchmark it?",
    "answer": "It matters mainly in highly concurrent low-latency code. Padding or layout annotations can help, but only after measurement with a benchmark or profiler.",
    "track": "backend"
  },
  {
    "questionId": "v10-011",
    "index": 1,
    "question": "What is cache-line contention?",
    "answer": "It matters mainly in highly concurrent low-latency code. Padding or layout annotations can help, but only after measurement with a benchmark or profiler.",
    "track": "backend"
  },
  {
    "questionId": "v10-012",
    "index": 0,
    "question": "BeanPostProcessor vs BeanFactoryPostProcessor?",
    "answer": "Creation includes constructor invocation, dependency population, post-processors and initialization callbacks. Destruction callbacks run when the context closes. Proxies may wrap the final bean, so initialization and interception details matter.",
    "track": "backend"
  },
  {
    "questionId": "v10-012",
    "index": 1,
    "question": "When does @PostConstruct run?",
    "answer": "Creation includes constructor invocation, dependency population, post-processors and initialization callbacks. Destruction callbacks run when the context closes. Proxies may wrap the final bean, so initialization and interception details matter.",
    "track": "backend"
  },
  {
    "questionId": "v10-013",
    "index": 0,
    "question": "Why do constructor cycles fail?",
    "answer": "The singleton caches distinguish fully initialized objects, early singleton references and singleton factories that can create an early reference, including proxy-aware references. Constructor cycles still cannot be resolved normally.",
    "track": "backend"
  },
  {
    "questionId": "v10-013",
    "index": 1,
    "question": "What is an early proxy reference?",
    "answer": "The singleton caches distinguish fully initialized objects, early singleton references and singleton factories that can create an early reference, including proxy-aware references. Constructor cycles still cannot be resolved normally.",
    "track": "backend"
  },
  {
    "questionId": "v10-014",
    "index": 0,
    "question": "How does self-invocation bypass advice?",
    "answer": "JDK dynamic proxies target interfaces; class-based proxies create subclasses. Final classes/methods and self-invocation impose limitations. The important interview point is that advice is applied at a proxy boundary.",
    "track": "backend"
  },
  {
    "questionId": "v10-014",
    "index": 1,
    "question": "Where do final methods matter?",
    "answer": "JDK dynamic proxies target interfaces; class-based proxies create subclasses. Final classes/methods and self-invocation impose limitations. The important interview point is that advice is applied at a proxy boundary.",
    "track": "backend"
  },
  {
    "questionId": "v10-015",
    "index": 0,
    "question": "Cache-aside vs write-through?",
    "answer": "Use request coalescing, short distributed locks, early refresh, jittered TTLs or stale-while-revalidate where the consistency model allows it. Bound the number of concurrent reloads.",
    "track": "backend"
  },
  {
    "questionId": "v10-015",
    "index": 1,
    "question": "What if the cache is unavailable?",
    "answer": "Use request coalescing, short distributed locks, early refresh, jittered TTLs or stale-while-revalidate where the consistency model allows it. Bound the number of concurrent reloads.",
    "track": "backend"
  },
  {
    "questionId": "v10-016",
    "index": 0,
    "question": "What should readiness include?",
    "answer": "Liveness should detect unrecoverable application failure; readiness determines whether the instance should receive traffic. Startup probes protect slow initialization. Dependency checks should be used thoughtfully because a transient dependency outage should not necessarily restart every pod.",
    "track": "backend"
  },
  {
    "questionId": "v10-016",
    "index": 1,
    "question": "What is a startup probe?",
    "answer": "Liveness should detect unrecoverable application failure; readiness determines whether the instance should receive traffic. Startup probes protect slow initialization. Dependency checks should be used thoughtfully because a transient dependency outage should not necessarily restart every pod.",
    "track": "backend"
  },
  {
    "questionId": "v10-017",
    "index": 0,
    "question": "How does @Transactional interact with @Async?",
    "answer": "@Async is thread-based and context such as transactions does not automatically move to another thread. Configure named executors, queue limits and rejection behavior. For durable business work, prefer a queue/outbox.",
    "track": "backend"
  },
  {
    "questionId": "v10-017",
    "index": 1,
    "question": "How do you propagate tracing context?",
    "answer": "@Async is thread-based and context such as transactions does not automatically move to another thread. Configure named executors, queue limits and rejection behavior. For durable business work, prefer a queue/outbox.",
    "track": "backend"
  },
  {
    "questionId": "v10-018",
    "index": 0,
    "question": "How do you detect pool exhaustion?",
    "answer": "Inspect p50/p95/p99, DB timings, connection-pool wait, downstream spans, payload sizes and thread states. Look for N+1 queries, lock waits and pool saturation before changing code.",
    "track": "backend"
  },
  {
    "questionId": "v10-018",
    "index": 1,
    "question": "When should caching be added?",
    "answer": "Inspect p50/p95/p99, DB timings, connection-pool wait, downstream spans, payload sizes and thread states. Look for N+1 queries, lock waits and pool saturation before changing code.",
    "track": "backend"
  },
  {
    "questionId": "v10-019",
    "index": 0,
    "question": "How do you backfill millions of rows?",
    "answer": "Use expand-and-contract: add compatible schema, deploy code supporting both shapes, backfill, switch reads/writes, then remove the old shape after all old instances are gone.",
    "track": "backend"
  },
  {
    "questionId": "v10-019",
    "index": 1,
    "question": "How do you roll back code after schema expansion?",
    "answer": "Use expand-and-contract: add compatible schema, deploy code supporting both shapes, backfill, switch reads/writes, then remove the old shape after all old instances are gone.",
    "track": "backend"
  },
  {
    "questionId": "v10-020",
    "index": 0,
    "question": "What if a worker dies?",
    "answer": "@Scheduled runs independently in every JVM. Use a distributed scheduler/lease or durable job queue. Persist execution state and make retries safe.",
    "track": "backend"
  },
  {
    "questionId": "v10-020",
    "index": 1,
    "question": "How do you prevent duplicate execution?",
    "answer": "@Scheduled runs independently in every JVM. Use a distributed scheduler/lease or durable job queue. Persist execution state and make retries safe.",
    "track": "backend"
  },
  {
    "questionId": "v10-021",
    "index": 0,
    "question": "Why can H2 hide issues?",
    "answer": "Mocks cannot prove database transaction semantics. A disposable real database lets tests verify commit/rollback and SQL constraints across transaction boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-021",
    "index": 1,
    "question": "How do you test deadlocks?",
    "answer": "Mocks cannot prove database transaction semantics. A disposable real database lets tests verify commit/rollback and SQL constraints across transaction boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-022",
    "index": 0,
    "question": "Choreography vs orchestration?",
    "answer": "Orchestration uses a central coordinator to control a workflow and handle steps and failures explicitly. Choreography lets services react to events independently, reducing central coordination but making the overall workflow harder to trace.",
    "track": "backend"
  },
  {
    "questionId": "v10-022",
    "index": 1,
    "question": "How do you recover a stuck saga?",
    "answer": "Order service persists its state and an outbox event. Payment and inventory own their local transactions. A saga coordinates progress and compensation when a step fails.",
    "track": "backend"
  },
  {
    "questionId": "v10-023",
    "index": 0,
    "question": "Why jitter?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "v10-023",
    "index": 1,
    "question": "How does idempotency interact with retries?",
    "answer": "Nested retries multiply traffic. Retry only transient failures, preferably at one appropriate layer, and stop when the request deadline is exhausted.",
    "track": "backend"
  },
  {
    "questionId": "v10-024",
    "index": 0,
    "question": "Fixed vs sliding window?",
    "answer": "Redis or another shared store can hold tokens and refill time, updated atomically. Define fail-open/closed behavior and expose 429 responses.",
    "track": "backend"
  },
  {
    "questionId": "v10-024",
    "index": 1,
    "question": "What if Redis fails?",
    "answer": "Redis or another shared store can hold tokens and refill time, updated atomically. Define fail-open/closed behavior and expose 429 responses.",
    "track": "backend"
  },
  {
    "questionId": "v10-025",
    "index": 0,
    "question": "When do you version an event?",
    "answer": "Prefer additive fields and tolerant readers. Use explicit event versions when semantics change and enforce compatibility through a schema registry where appropriate.",
    "track": "backend"
  },
  {
    "questionId": "v10-025",
    "index": 1,
    "question": "Avro vs JSON?",
    "answer": "Prefer additive fields and tolerant readers. Use explicit event versions when semantics change and enforce compatibility through a schema registry where appropriate.",
    "track": "backend"
  },
  {
    "questionId": "v10-026",
    "index": 0,
    "question": "Polling vs CDC?",
    "answer": "Business data and an outbox row commit in one local transaction. A relay publishes later. Publishing can be duplicated, so consumers must tolerate redelivery and the relay needs retry/cleanup.",
    "track": "backend"
  },
  {
    "questionId": "v10-026",
    "index": 1,
    "question": "How do you clean outbox rows?",
    "answer": "Business data and an outbox row commit in one local transaction. A relay publishes later. Publishing can be duplicated, so consumers must tolerate redelivery and the relay needs retry/cleanup.",
    "track": "backend"
  },
  {
    "questionId": "v10-027",
    "index": 0,
    "question": "Can consumers exceed partition count?",
    "answer": "If one partition is hot, adding consumers may not help. Check max poll settings, batch size, consumer throughput and broker health.",
    "track": "backend"
  },
  {
    "questionId": "v10-027",
    "index": 1,
    "question": "What causes hot partitions?",
    "answer": "If one partition is hot, adding consumers may not help. Check max poll settings, batch size, consumer throughput and broker health.",
    "track": "backend"
  },
  {
    "questionId": "v10-028",
    "index": 0,
    "question": "What if one key is hot?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10-028",
    "index": 1,
    "question": "Can one partition be processed concurrently?",
    "answer": "Kafka ordering is per partition. Using orderId as the key keeps an order events events together. Global ordering is expensive and usually unnecessary.",
    "track": "backend"
  },
  {
    "questionId": "v10-029",
    "index": 0,
    "question": "Retry topic vs DLT?",
    "answer": "After retry exhaustion, publish to a DLT with original topic/partition/offset, exception and trace metadata. Replay only after fixing the cause and ensure idempotency.",
    "track": "backend"
  },
  {
    "questionId": "v10-029",
    "index": 1,
    "question": "How do you replay safely?",
    "answer": "After retry exhaustion, publish to a DLT with original topic/partition/offset, exception and trace metadata. Replay only after fixing the cause and ensure idempotency.",
    "track": "backend"
  },
  {
    "questionId": "v10-030",
    "index": 0,
    "question": "Why is SETNX alone insufficient?",
    "answer": "A lease can expire while a stale holder continues running. A fencing token lets the resource reject operations from an old holder.",
    "track": "backend"
  },
  {
    "questionId": "v10-030",
    "index": 1,
    "question": "What is fencing?",
    "answer": "A lease can expire while a stale holder continues running. A fencing token lets the resource reject operations from an old holder.",
    "track": "backend"
  },
  {
    "questionId": "v10-032",
    "index": 0,
    "question": "How do you propagate cancellation?",
    "answer": "Optional dependency failures can produce partial results; required failures fail the request. Bound fan-out so concurrency does not exhaust threads or downstream quotas.",
    "track": "backend"
  },
  {
    "questionId": "v10-032",
    "index": 1,
    "question": "When should you cache fan-out data?",
    "answer": "Optional dependency failures can produce partial results; required failures fail the request. Bound fan-out so concurrency does not exhaust threads or downstream quotas.",
    "track": "backend"
  },
  {
    "questionId": "v10-033",
    "index": 0,
    "question": "How do you backfill safely?",
    "answer": "Add new schema elements first, deploy dual-compatible code, backfill, switch reads/writes, then remove old elements after rollout completion.",
    "track": "backend"
  },
  {
    "questionId": "v10-033",
    "index": 1,
    "question": "How do you roll back?",
    "answer": "Add new schema elements first, deploy dual-compatible code, backfill, switch reads/writes, then remove old elements after rollout completion.",
    "track": "backend"
  },
  {
    "questionId": "v10-034",
    "index": 0,
    "question": "How do retries differ?",
    "answer": "REST creates temporal coupling; messaging creates durable asynchronous handoff. Many real workflows combine both.",
    "track": "backend"
  },
  {
    "questionId": "v10-034",
    "index": 1,
    "question": "How do you trace async flows?",
    "answer": "REST creates temporal coupling; messaging creates durable asynchronous handoff. Many real workflows combine both.",
    "track": "backend"
  },
  {
    "questionId": "v10-035",
    "index": 0,
    "question": "How do you handle split brain?",
    "answer": "Choose single-writer, region-local writes or multi-writer semantics. Define replication lag, conflict resolution, global IDs and failover.",
    "track": "backend"
  },
  {
    "questionId": "v10-035",
    "index": 1,
    "question": "RPO/RTO?",
    "answer": "Choose single-writer, region-local writes or multi-writer semantics. Define replication lag, conflict resolution, global IDs and failover.",
    "track": "backend"
  },
  {
    "questionId": "v10-036",
    "index": 0,
    "question": "Shared DB vs separate DB?",
    "answer": "Derive tenant from trusted identity, enforce it in queries, namespace caches and apply per-tenant limits. Test cross-tenant access explicitly.",
    "track": "backend"
  },
  {
    "questionId": "v10-036",
    "index": 1,
    "question": "How do you test IDOR?",
    "answer": "Prevent IDOR and cross-tenant access by deriving the caller's identity and tenant from trusted authentication context and applying authorization checks to every resource access. Never treat an object ID supplied by the client as proof of ownership.",
    "track": "backend"
  },
  {
    "questionId": "v10-037",
    "index": 0,
    "question": "How does Kafka buffer?",
    "answer": "Measure processing capacity and queue depth. For HTTP use bounded worker pools; for Kafka tune consumer concurrency and pause/resume or poll behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10-037",
    "index": 1,
    "question": "What is load shedding?",
    "answer": "Examples include returning 429, rejecting optional requests, reducing expensive features or applying priority queues. The goal is graceful degradation rather than letting every request time out.",
    "track": "backend"
  },
  {
    "questionId": "v10-038",
    "index": 0,
    "question": "How do you propagate deadlines?",
    "answer": "A 1-second request cannot give three downstreams one second each. Propagate a deadline and reserve time for retries, serialization and response handling.",
    "track": "backend"
  },
  {
    "questionId": "v10-038",
    "index": 1,
    "question": "What happens to async work after the request?",
    "answer": "A 1-second request cannot give three downstreams one second each. Propagate a deadline and reserve time for retries, serialization and response handling.",
    "track": "backend"
  },
  {
    "questionId": "v10-039",
    "index": 0,
    "question": "How do you handle duplicate webhooks?",
    "answer": "A timeout can happen after the provider charges the card. Retrying with a new request risks double charge. Persist provider request IDs and query/webhook state to converge.",
    "track": "backend"
  },
  {
    "questionId": "v10-039",
    "index": 1,
    "question": "What if provider has no idempotency key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10-040",
    "index": 0,
    "question": "How does Kubernetes termination work?",
    "answer": "Readiness should fail before termination, load balancers need time to drain, and consumers should stop polling and commit completed work. Long jobs need cancellation/recovery semantics.",
    "track": "backend"
  },
  {
    "questionId": "v10-040",
    "index": 1,
    "question": "How do you handle long jobs?",
    "answer": "Readiness should fail before termination, load balancers need time to drain, and consumers should stop polling and commit completed work. Long jobs need cancellation/recovery semantics.",
    "track": "backend"
  },
  {
    "questionId": "v10-041",
    "index": 0,
    "question": "Trace ID vs span ID?",
    "answer": "Inject trace context when producing, extract when consuming, and retain correlation metadata. Use sampling appropriate to volume.",
    "track": "backend"
  },
  {
    "questionId": "v10-041",
    "index": 1,
    "question": "How do you sample high-volume topics?",
    "answer": "Inject trace context when producing, extract when consuming, and retain correlation metadata. Use sampling appropriate to volume.",
    "track": "backend"
  },
  {
    "questionId": "v10-042",
    "index": 0,
    "question": "What is sargability?",
    "answer": "Look for large scans, bad join strategies, repeated loops, sorts/spills and cardinality misestimation. Use EXPLAIN ANALYZE where supported and verify indexes/statistics.",
    "track": "backend"
  },
  {
    "questionId": "v10-042",
    "index": 1,
    "question": "When can a full scan be correct?",
    "answer": "Look for large scans, bad join strategies, repeated loops, sorts/spills and cardinality misestimation. Use EXPLAIN ANALYZE where supported and verify indexes/statistics.",
    "track": "backend"
  },
  {
    "questionId": "v10-043",
    "index": 0,
    "question": "Can it support ORDER BY?",
    "answer": "Composite B-tree indexes are ordered by leading columns. A common pattern is equality predicates followed by range/order columns, but workload and plan evidence decide the final order.",
    "track": "backend"
  },
  {
    "questionId": "v10-043",
    "index": 1,
    "question": "What is a covering index?",
    "answer": "Whether an index is covering depends on the database and query plan. It can reduce random table access but increases index size and write cost.",
    "track": "backend"
  },
  {
    "questionId": "v10-044",
    "index": 0,
    "question": "Deadlock vs lock timeout?",
    "answer": "Different update orders create cycles. Consistent ordering and reduced transaction scope lower probability. Recovery must repeat the logical transaction because the database may have rolled it back.",
    "track": "backend"
  },
  {
    "questionId": "v10-044",
    "index": 1,
    "question": "Why retry the whole transaction?",
    "answer": "Different update orders create cycles. Consistent ordering and reduced transaction scope lower probability. Recovery must repeat the logical transaction because the database may have rolled it back.",
    "track": "backend"
  },
  {
    "questionId": "v10-045",
    "index": 0,
    "question": "How do you make ordering deterministic?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v10-045",
    "index": 1,
    "question": "When is OFFSET fine?",
    "answer": "Use a deterministic composite ordering such as created_at plus id and query from the last tuple. It is ideal for feeds/infinite scroll but less convenient for arbitrary page numbers.",
    "track": "backend"
  },
  {
    "questionId": "v10-046",
    "index": 0,
    "question": "How do leaks appear?",
    "answer": "A full pool can come from leaks, long transactions, slow queries or an undersized pool. Increasing it blindly can simply overload the database.",
    "track": "backend"
  },
  {
    "questionId": "v10-046",
    "index": 1,
    "question": "How do you choose pool size?",
    "answer": "A full pool can come from leaks, long transactions, slow queries or an undersized pool. Increasing it blindly can simply overload the database.",
    "track": "backend"
  },
  {
    "questionId": "v10-047",
    "index": 0,
    "question": "RANK vs DENSE_RANK?",
    "answer": "ROW_NUMBER assigns a unique sequence even when values tie. RANK gives tied rows the same rank and leaves gaps after the tie. DENSE_RANK gives tied rows the same rank but does not leave gaps. For top-N-per-group problems, choose based on whether ties should share the same rank.",
    "track": "backend"
  },
  {
    "questionId": "v10-047",
    "index": 1,
    "question": "Top N per group?",
    "answer": "GROUP BY collapses rows into groups and produces aggregate results per group, while window functions calculate values across related rows without collapsing the original row set.",
    "track": "backend"
  },
  {
    "questionId": "v10-048",
    "index": 0,
    "question": "Partitioning vs sharding?",
    "answer": "Partitioning can simplify pruning and maintenance within a database. Sharding adds horizontal capacity but requires routing, cross-shard query strategy and operational complexity.",
    "track": "backend"
  },
  {
    "questionId": "v10-048",
    "index": 1,
    "question": "How do you preserve auditability?",
    "answer": "Time-based partitioning can make retention a metadata operation. Otherwise archive by stable key in bounded batches while monitoring locks, WAL/redo and replication lag.",
    "track": "backend"
  },
  {
    "questionId": "v10-049",
    "index": 0,
    "question": "How do you return the original response?",
    "answer": "A unique constraint works across instances and restarts. Handle duplicate-key outcomes by returning or loading the existing logical result.",
    "track": "backend"
  },
  {
    "questionId": "v10-049",
    "index": 1,
    "question": "How do you handle concurrent requests?",
    "answer": "A unique constraint works across instances and restarts. Handle duplicate-key outcomes by returning or loading the existing logical result.",
    "track": "backend"
  },
  {
    "questionId": "v10-050",
    "index": 0,
    "question": "How do you verify completeness?",
    "answer": "Prefer primary-key ranges, commit frequently, pause on replication lag or lock pressure, and make the job restartable.",
    "track": "backend"
  },
  {
    "questionId": "v10-050",
    "index": 1,
    "question": "How do you roll back?",
    "answer": "Prefer primary-key ranges, commit frequently, pause on replication lag or lock pressure, and make the job restartable.",
    "track": "backend"
  },
  {
    "questionId": "v10-051",
    "index": 0,
    "question": "Lock vs latch?",
    "answer": "Long transactions and missing indexes often turn small updates into long lock waits. Correlate database lock views with application traces and transaction boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-051",
    "index": 1,
    "question": "How does isolation affect locking?",
    "answer": "Long transactions and missing indexes often turn small updates into long lock waits. Correlate database lock views with application traces and transaction boundaries.",
    "track": "backend"
  },
  {
    "questionId": "v10-052",
    "index": 0,
    "question": "mTLS vs OAuth2?",
    "answer": "mTLS provides workload authentication at transport level; OAuth2 client credentials or signed service tokens provide application identity. Validate issuer, audience, expiry and scopes.",
    "track": "backend"
  },
  {
    "questionId": "v10-052",
    "index": 1,
    "question": "How do you rotate credentials?",
    "answer": "mTLS provides workload authentication at transport level; OAuth2 client credentials or signed service tokens provide application identity. Validate issuer, audience, expiry and scopes.",
    "track": "backend"
  },
  {
    "questionId": "v10-053",
    "index": 0,
    "question": "How do you rotate keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10-053",
    "index": 1,
    "question": "How do you revoke sessions?",
    "answer": "A valid signature proves origin, not that the token is intended for this API or action. Keep lifetimes short and rotate signing keys.",
    "track": "backend"
  },
  {
    "questionId": "v10-054",
    "index": 0,
    "question": "Where should refresh tokens be stored?",
    "answer": "Store a token family identifier and server-side state. A reused old token can indicate compromise, so revoke the family.",
    "track": "backend"
  },
  {
    "questionId": "v10-054",
    "index": 1,
    "question": "How do you revoke all sessions?",
    "answer": "Store a token family identifier and server-side state. A reused old token can indicate compromise, so revoke the family.",
    "track": "backend"
  },
  {
    "questionId": "v10-055",
    "index": 0,
    "question": "Why are redirects dangerous?",
    "answer": "Prefer allowlists, restrict protocols/ports, validate resolved addresses, handle redirects carefully and block access to internal/metadata ranges. Network policy is a second layer.",
    "track": "backend"
  },
  {
    "questionId": "v10-055",
    "index": 1,
    "question": "Why is IP blocking alone insufficient?",
    "answer": "Prefer allowlists, restrict protocols/ports, validate resolved addresses, handle redirects carefully and block access to internal/metadata ranges. Network policy is a second layer.",
    "track": "backend"
  },
  {
    "questionId": "v10-056",
    "index": 0,
    "question": "How do you handle zip bombs?",
    "answer": "Do not trust extension or MIME type. Prevent path traversal, scan where required, and keep uploaded content outside executable web roots.",
    "track": "backend"
  },
  {
    "questionId": "v10-056",
    "index": 1,
    "question": "How do you secure downloads?",
    "answer": "Do not trust extension or MIME type. Prevent path traversal, scan where required, and keep uploaded content outside executable web roots.",
    "track": "backend"
  },
  {
    "questionId": "v10-057",
    "index": 0,
    "question": "User identity vs service identity?",
    "answer": "Keep service identities least-privileged and propagate user/delegation context when downstream authorization depends on the caller. Audit delegated actions.",
    "track": "backend"
  },
  {
    "questionId": "v10-057",
    "index": 1,
    "question": "How do you audit delegation?",
    "answer": "Keep service identities least-privileged and propagate user/delegation context when downstream authorization depends on the caller. Audit delegated actions.",
    "track": "backend"
  },
  {
    "questionId": "v10-058",
    "index": 0,
    "question": "How do you rotate DB passwords with pools?",
    "answer": "Use a secret manager and versioned credentials. Consumers load the new version, establish successful connections, and only then should the old version be disabled.",
    "track": "backend"
  },
  {
    "questionId": "v10-058",
    "index": 1,
    "question": "How do you detect stale instances?",
    "answer": "Use a secret manager and versioned credentials. Consumers load the new version, establish successful connections, and only then should the old version be disabled.",
    "track": "backend"
  },
  {
    "questionId": "v10-059",
    "index": 0,
    "question": "How do you test IDOR?",
    "answer": "Prevent IDOR and cross-tenant access by deriving the caller's identity and tenant from trusted authentication context and applying authorization checks to every resource access. Never treat an object ID supplied by the client as proof of ownership.",
    "track": "backend"
  },
  {
    "questionId": "v10-059",
    "index": 1,
    "question": "Can database row-level security help?",
    "answer": "Never trust tenantId from the request as the authorization source. Include tenant predicates in data access and test horizontal access control explicitly.",
    "track": "backend"
  },
  {
    "questionId": "v10-060",
    "index": 0,
    "question": "HPA vs VPA?",
    "answer": "CPU may miss I/O saturation. Combine appropriate metrics, set min/max replicas, use readiness and graceful termination, and cap scale-out to protect the database.",
    "track": "backend"
  },
  {
    "questionId": "v10-060",
    "index": 1,
    "question": "How do you prevent scale oscillation?",
    "answer": "CPU may miss I/O saturation. Combine appropriate metrics, set min/max replicas, use readiness and graceful termination, and cap scale-out to protect the database.",
    "track": "backend"
  },
  {
    "questionId": "v10-061",
    "index": 0,
    "question": "What is startupProbe?",
    "answer": "A dependency outage should generally affect readiness rather than trigger liveness restarts. Probes should be cheap and representative of their purpose.",
    "track": "backend"
  },
  {
    "questionId": "v10-061",
    "index": 1,
    "question": "Should readiness check the DB?",
    "answer": "A dependency outage should generally affect readiness rather than trigger liveness restarts. Probes should be cheap and representative of their purpose.",
    "track": "backend"
  },
  {
    "questionId": "v10-062",
    "index": 0,
    "question": "What counts toward container memory?",
    "answer": "The container can be killed even when Java heap is below Xmx. Leave headroom for non-heap memory and inspect cgroup limits and GC behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10-062",
    "index": 1,
    "question": "Heap OOM vs OOMKill?",
    "answer": "The container can be killed even when Java heap is below Xmx. Leave headroom for non-heap memory and inspect cgroup limits and GC behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10-063",
    "index": 0,
    "question": "Rolling vs canary?",
    "answer": "Mixed versions must work together. Use readiness gates, termination grace periods, maxSurge/maxUnavailable and automated rollback signals.",
    "track": "backend"
  },
  {
    "questionId": "v10-063",
    "index": 1,
    "question": "How do you drain connections?",
    "answer": "Mixed versions must work together. Use readiness gates, termination grace periods, maxSurge/maxUnavailable and automated rollback signals.",
    "track": "backend"
  },
  {
    "questionId": "v10-064",
    "index": 0,
    "question": "Backup vs replication?",
    "answer": "Stateless services can be rebuilt from immutable artifacts; data requires tested backups or replication. Include DNS, secrets, dependencies and external providers in the recovery plan.",
    "track": "backend"
  },
  {
    "questionId": "v10-064",
    "index": 1,
    "question": "How do you test DR?",
    "answer": "Stateless services can be rebuilt from immutable artifacts; data requires tested backups or replication. Include DNS, secrets, dependencies and external providers in the recovery plan.",
    "track": "backend"
  },
  {
    "questionId": "v10-065",
    "index": 0,
    "question": "Where should quotas live?",
    "answer": "Measure resource consumption by tenant and apply rate/queue/database budgets. Premium tenants may require dedicated partitions or compute.",
    "track": "backend"
  },
  {
    "questionId": "v10-065",
    "index": 1,
    "question": "How do you handle premium tenants?",
    "answer": "Measure resource consumption by tenant and apply rate/queue/database budgets. Premium tenants may require dedicated partitions or compute.",
    "track": "backend"
  },
  {
    "questionId": "v10-066",
    "index": 0,
    "question": "Why can autoscaling increase cost?",
    "answer": "Rightsize compute, autoscale, manage storage/log retention and data transfer, and use committed capacity for predictable workloads. Track cost per request/tenant alongside latency and availability.",
    "track": "backend"
  },
  {
    "questionId": "v10-066",
    "index": 1,
    "question": "How do you control log spend?",
    "answer": "Rightsize compute, autoscale, manage storage/log retention and data transfer, and use committed capacity for predictable workloads. Track cost per request/tenant alongside latency and availability.",
    "track": "backend"
  },
  {
    "questionId": "v10-067",
    "index": 0,
    "question": "How do you prevent duplicate SMS?",
    "answer": "Persist a notification command, publish via an outbox, route to email/SMS/push workers, apply provider rate limits, retry transient failures and track delivery state idempotently.",
    "track": "backend"
  },
  {
    "questionId": "v10-067",
    "index": 1,
    "question": "How do you handle provider outage?",
    "answer": "Persist a notification command, publish via an outbox, route to email/SMS/push workers, apply provider rate limits, retry transient failures and track delivery state idempotently.",
    "track": "backend"
  },
  {
    "questionId": "v10-068",
    "index": 0,
    "question": "How do you reconcile external providers?",
    "answer": "Every business transaction creates balanced debit/credit entries. Corrections are compensating entries. Derived balances can be optimized separately and reconciled.",
    "track": "backend"
  },
  {
    "questionId": "v10-068",
    "index": 1,
    "question": "How do you handle concurrent writes?",
    "answer": "Every business transaction creates balanced debit/credit entries. Corrections are compensating entries. Derived balances can be optimized separately and reconciled.",
    "track": "backend"
  },
  {
    "questionId": "v10-069",
    "index": 0,
    "question": "How do you handle hot SKUs?",
    "answer": "Use an atomic conditional update or row lock so available stock cannot become negative. Reservations have expiry and order identity.",
    "track": "backend"
  },
  {
    "questionId": "v10-069",
    "index": 1,
    "question": "What if expiry runs twice?",
    "answer": "Use an atomic conditional update or row lock so available stock cannot become negative. Reservations have expiry and order identity.",
    "track": "backend"
  },
  {
    "questionId": "v10-070",
    "index": 0,
    "question": "How do you scale millions of jobs?",
    "answer": "Workers claim ready jobs with owner/version/lease, heartbeat while working and allow expired leases to be retried. Exactly-once execution is usually not realistic, so handlers must tolerate duplicates.",
    "track": "backend"
  },
  {
    "questionId": "v10-070",
    "index": 1,
    "question": "How do you avoid duplicate execution?",
    "answer": "Workers claim ready jobs with owner/version/lease, heartbeat while working and allow expired leases to be retried. Exactly-once execution is usually not realistic, so handlers must tolerate duplicates.",
    "track": "backend"
  },
  {
    "questionId": "v10-071",
    "index": 0,
    "question": "How do you resume uploads?",
    "answer": "The backend creates an upload session and signed parts; the client transfers data directly. Completion records checksum/size and triggers asynchronous scanning/processing.",
    "track": "backend"
  },
  {
    "questionId": "v10-071",
    "index": 1,
    "question": "How do you secure downloads?",
    "answer": "The backend creates an upload session and signed parts; the client transfers data directly. Completion records checksum/size and triggers asynchronous scanning/processing.",
    "track": "backend"
  },
  {
    "questionId": "v10-072",
    "index": 0,
    "question": "How do you prevent loss?",
    "answer": "Applications emit actor/action/resource/tenant/trace metadata. A durable broker buffers ingestion and consumers write searchable/retained projections.",
    "track": "backend"
  },
  {
    "questionId": "v10-072",
    "index": 1,
    "question": "How do you search years of data?",
    "answer": "Applications emit actor/action/resource/tenant/trace metadata. A durable broker buffers ingestion and consumers write searchable/retained projections.",
    "track": "backend"
  },
  {
    "questionId": "v10-073",
    "index": 0,
    "question": "Write-through vs cache-aside?",
    "answer": "The database remains source of truth. Reads load on miss; writes invalidate or publish versions. Request coalescing and jittered expiry protect the database.",
    "track": "backend"
  },
  {
    "questionId": "v10-073",
    "index": 1,
    "question": "How do you handle hot keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10-074",
    "index": 0,
    "question": "Payment succeeds but inventory fails?",
    "answer": "Create an order intent, reserve inventory, authorize payment and transition state. Outbox/events connect services; compensation handles failures.",
    "track": "backend"
  },
  {
    "questionId": "v10-074",
    "index": 1,
    "question": "How do you prevent duplicate checkout?",
    "answer": "Create an order intent, reserve inventory, authorize payment and transition state. Outbox/events connect services; compensation handles failures.",
    "track": "backend"
  },
  {
    "questionId": "v10-075",
    "index": 0,
    "question": "Global vs per-tenant limits?",
    "answer": "Shared atomic state is required across instances. Return 429 with Retry-After and protect the limiter store with timeouts and a defined failure policy.",
    "track": "backend"
  },
  {
    "questionId": "v10-075",
    "index": 1,
    "question": "How do you avoid hot keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10-076",
    "index": 0,
    "question": "How do you handle cache failure?",
    "answer": "Choose keys and TTLs, protect hot keys, measure hit rate and keep the source of truth authoritative. For critical correctness, use versioning or bypass cache when stale data is unsafe.",
    "track": "backend"
  },
  {
    "questionId": "v10-076",
    "index": 1,
    "question": "What is stale-while-revalidate?",
    "answer": "Choose keys and TTLs, protect hot keys, measure hit rate and keep the source of truth authoritative. For critical correctness, use versioning or bypass cache when stale data is unsafe.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-001",
    "index": 0,
    "question": "What if traces show the database is fast but the downstream API is slow?",
    "answer": "Treat the downstream API as the latency bottleneck. Check its timeout, connection-pool usage, error/latency distribution and saturation, then apply an appropriate timeout, bounded retry policy, circuit breaker or fallback rather than tuning the database.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-001",
    "index": 1,
    "question": "How would retries affect this incident?",
    "answer": "Retries can increase load on an already-slow downstream service and amplify latency. Retry only transient failures, keep attempts bounded, use exponential backoff with jitter, and ensure the operation is idempotent or protected by an idempotency mechanism.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-001",
    "index": 2,
    "question": "Which metrics would you put on the dashboard?",
    "answer": "Track request rate, p50/p95/p99 latency, 4xx/5xx rate, timeout rate, downstream latency/error rate, CPU/memory, thread and connection pools, plus queue depth or consumer lag where applicable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-002",
    "index": 0,
    "question": "When should an operation not be retried?",
    "answer": "Do not retry validation errors, authentication/authorization failures, malformed requests, or non-idempotent operations unless the API explicitly makes them retry-safe. Also avoid retries when the dependency is clearly overloaded or the deadline has already expired.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-002",
    "index": 1,
    "question": "What is retry jitter?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-002",
    "index": 2,
    "question": "How would you implement a retry budget?",
    "answer": "Define a maximum retry volume relative to normal traffic or an error budget, then enforce bounded attempts and time spent per request. Combine the budget with exponential backoff, jitter and circuit breaking so retries cannot overwhelm the dependency.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-003",
    "index": 0,
    "question": "What happens if you add more consumers than partitions?",
    "answer": "For a Kafka consumer group, each partition can be actively consumed by only one consumer in that group at a time. Extra consumers remain idle until more partitions are available.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-003",
    "index": 1,
    "question": "How do you handle a hot partition?",
    "answer": "A hot partition usually comes from skewed keys or a small number of very active keys. Revisit the partition key, increase partitions if appropriate, and consider distributing hot entities more evenly while preserving the ordering guarantees the business actually needs.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-003",
    "index": 2,
    "question": "How would you preserve ordering?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-004",
    "index": 0,
    "question": "Where should the idempotency key be stored?",
    "answer": "Store idempotency records in shared durable storage when correctness must survive retries and multiple service instances. A database is common; Redis is suitable only when its durability and retention guarantees match the business risk.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-004",
    "index": 1,
    "question": "How long should it be retained?",
    "answer": "Retention should be based on replay/recovery requirements, compliance, storage cost and consumer recovery time. Keep enough history to rebuild or recover consumers, and use longer archival storage when the business needs historical events without keeping everything on the hot broker.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-004",
    "index": 2,
    "question": "What if two identical requests arrive concurrently?",
    "answer": "Use a durable idempotency key with a unique constraint so only one request creates the business result. The other request should return the stored result or a safe in-progress response instead of executing the operation again.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-005",
    "index": 0,
    "question": "Choreography or orchestration?",
    "answer": "Orchestration uses a central coordinator to control a workflow and handle steps and failures explicitly. Choreography lets services react to events independently, reducing central coordination but making the overall workflow harder to trace.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-005",
    "index": 1,
    "question": "How do you recover if the orchestrator crashes?",
    "answer": "Persist workflow state so another orchestrator instance can resume from the last durable state. Make each step and compensation idempotent, and use timeouts/reconciliation for steps that may have completed remotely before the crash.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-005",
    "index": 2,
    "question": "How do you make compensation idempotent?",
    "answer": "Give the compensation a stable operation ID and record its completion durably. Repeating the same compensation should detect that it was already applied and return the same outcome rather than applying the side effect twice.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-006",
    "index": 0,
    "question": "How does CDC compare with an outbox publisher?",
    "answer": "CDC reads database changes from the transaction log and can capture changes without application code publishing each event. An outbox explicitly records business events in the same transaction as the state change, making the intended event contract clearer but requiring an outbox publisher or CDC pipeline.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-006",
    "index": 1,
    "question": "Where do you store processed event IDs?",
    "answer": "Store processed IDs in durable shared storage, commonly a database table with a unique constraint, when duplicate prevention must survive restarts and multiple instances. Redis can work when its durability and retention characteristics are sufficient for the business risk.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-006",
    "index": 2,
    "question": "Can Kafka exactly-once semantics solve the business duplicate?",
    "answer": "No. Kafka exactly-once semantics can make Kafka-side processing transactional, but it does not automatically make an external database, payment provider or email system exactly once. Business idempotency is still required at the external side-effect boundary.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-007",
    "index": 0,
    "question": "How do you choose pool size?",
    "answer": "Size a pool from measured workload, database capacity, query latency and the number of service instances rather than using a large arbitrary value. Monitor pool wait time, active connections, database CPU and query latency, then tune using load tests.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-007",
    "index": 1,
    "question": "What happens if every microservice uses a pool of 100?",
    "answer": "With many instances, the aggregate connection count can overwhelm the database even if each individual service appears reasonable. The result can be connection contention, memory pressure and worse throughput, so pool sizing must consider the total fleet.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-007",
    "index": 2,
    "question": "How can slow SQL exhaust an application?",
    "answer": "Slow queries hold database connections longer, so the pool fills while new requests wait. Waiting threads and queued work then increase latency and can cause timeouts or cascading failure across the service.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-008",
    "index": 0,
    "question": "Should readiness call the database?",
    "answer": "Only when database availability is essential to whether the instance should receive normal traffic. Keep readiness checks focused and inexpensive; a transient dependency problem should remove the instance from traffic if serving requests without that dependency would fail.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-008",
    "index": 1,
    "question": "When should a liveness probe fail?",
    "answer": "Liveness should fail when the process is genuinely unhealthy and cannot recover by continuing to run, such as a deadlocked or irrecoverably stuck application. Do not make liveness depend on every external dependency, or a dependency outage can restart every instance.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-008",
    "index": 2,
    "question": "Why use a startup probe?",
    "answer": "A startup probe gives slow-starting applications time to initialize before liveness/readiness checks are enforced. It prevents Kubernetes from repeatedly restarting an application simply because startup takes longer than the normal health-check window.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-009",
    "index": 0,
    "question": "How would you detect service dependency cycles?",
    "answer": "Build a dependency graph from service-to-service calls and messaging relationships, then look for cycles using graph analysis. Distributed tracing and service maps can validate the runtime graph, while architecture rules can prevent new synchronous cycles.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-009",
    "index": 1,
    "question": "Why are remote calls inside database transactions risky?",
    "answer": "A transaction holds database resources while waiting on an unpredictable network dependency. Slow or failed remote calls therefore increase lock and connection duration and can cause contention or deadlocks; prefer short local transactions and asynchronous/outbox patterns when appropriate.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-009",
    "index": 2,
    "question": "When would asynchronous messaging help?",
    "answer": "Use asynchronous processing when work is slow, retryable, independent of the immediate response, or suitable for queue-based processing. Return a job or correlation ID when the client needs to check status later.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-010",
    "index": 0,
    "question": "What is cache stampede?",
    "answer": "A cache stampede occurs when many requests miss or simultaneously refresh the same hot key, causing a burst of database or downstream traffic. Common controls are request coalescing, TTL jitter, locking/single-flight refresh and stale-while-revalidate.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-010",
    "index": 1,
    "question": "How does request coalescing work?",
    "answer": "The first request performs the expensive load while concurrent requests for the same key wait for that result instead of issuing duplicate loads. Once the value is available, all waiting callers can use it.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-010",
    "index": 2,
    "question": "When would local caching be unsafe?",
    "answer": "Local caching is unsafe when data must be immediately consistent across instances, changes must be centrally invalidated, or the cached value is sensitive and cannot be safely isolated per instance. It is also risky when stale authorization or financial state could cause an incorrect decision.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-011",
    "index": 0,
    "question": "How do you replay a DLT message?",
    "answer": "Inspect and correct the root cause first, then replay the message to the original topic or a controlled retry path. Preserve the original event ID, prevent duplicate business effects through idempotency, and monitor the replay rate and failures.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-011",
    "index": 1,
    "question": "What if strict ordering is mandatory?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-011",
    "index": 2,
    "question": "How do you distinguish transient from permanent failures?",
    "answer": "Classify based on the error type and dependency behavior. Timeouts, temporary unavailability and selected 5xx responses may be transient; validation errors, invalid schemas, authorization failures and business-rule violations are normally permanent until the message or data changes.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-012",
    "index": 0,
    "question": "When is local caching safe?",
    "answer": "Local caching is safe for immutable or slowly changing data where bounded staleness is acceptable and each instance can tolerate having its own copy. Avoid it for state where cross-instance freshness is required for correctness.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-012",
    "index": 1,
    "question": "How would you split a hot key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-012",
    "index": 2,
    "question": "What consistency trade-offs appear?",
    "answer": "Caching improves latency and reduces load but can return stale data. Stronger consistency increases coordination or read cost, while eventual consistency improves availability and scalability at the cost of a period where different clients can observe different values.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-013",
    "index": 0,
    "question": "How do you version Kafka events?",
    "answer": "Use an explicit event schema/version and evolve it compatibly. Prefer additive changes, keep consumers tolerant of unknown fields, and use a schema registry when multiple producers and consumers need centralized compatibility checks.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-013",
    "index": 1,
    "question": "What is consumer-driven contract testing?",
    "answer": "A contract test verifies the request and response shape a consumer depends on. It catches breaking API changes earlier than relying only on end-to-end tests.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-013",
    "index": 2,
    "question": "How would you remove a field safely?",
    "answer": "First stop new producers from depending on the field, deploy consumers that tolerate its absence, wait through the compatibility window, and only then remove it from producers. For shared schemas, verify all consumers before the final removal.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-014",
    "index": 0,
    "question": "How do you propagate context through Kafka?",
    "answer": "Copy selected tracing and correlation metadata into message headers when producing the event. Consumers extract that context and create/continue a trace span while processing the message; avoid putting sensitive context into headers.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-014",
    "index": 1,
    "question": "What is sampling?",
    "answer": "Sampling means recording only a selected portion of traces rather than every trace. It controls telemetry cost while retaining enough representative or high-value traces to troubleshoot; error and slow-request traces are often sampled at higher rates.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-014",
    "index": 2,
    "question": "Why keep correlation IDs if traces exist?",
    "answer": "Generate or propagate a correlation ID at the request boundary and include it in logs and downstream calls. This allows one request to be traced across the browser, gateway, services, and supporting infrastructure.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-015",
    "index": 0,
    "question": "How does Kubernetes termination work?",
    "answer": "Kubernetes marks the pod terminating, removes it from service endpoints, runs the preStop hook when configured, sends SIGTERM, waits through the termination grace period, and then sends SIGKILL if the process has not exited.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-015",
    "index": 1,
    "question": "What should happen to Kafka consumers during shutdown?",
    "answer": "Stop accepting new work, stop or pause consumption, finish safely bounded in-flight processing, commit offsets only for successfully handled records, and close the consumer cleanly so partitions can rebalance.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-015",
    "index": 2,
    "question": "How do you handle requests longer than the grace period?",
    "answer": "Set timeouts so work has a bounded lifetime and allow the application to drain what can finish safely. For long-running work, move it to an asynchronous durable workflow instead of relying on an HTTP request surviving pod termination.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-016",
    "index": 0,
    "question": "How do you roll back after a destructive migration?",
    "answer": "A destructive migration is usually not safely reversible with a simple schema rollback. Prefer expand-and-contract migrations: add the new structure, migrate data, deploy compatible code, verify it, and delay destructive removal until rollback is no longer needed.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-016",
    "index": 1,
    "question": "How would you backfill a large table?",
    "answer": "Run the backfill in bounded batches using a stable key range, throttle it to protect production traffic, make it restartable, and monitor locks, CPU, I/O, replication lag and errors. Avoid one giant transaction.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-016",
    "index": 2,
    "question": "What is dual write and what risks does it have?",
    "answer": "Dual write means updating two independent destinations in one business operation. If one succeeds and the other fails, the system becomes inconsistent; an outbox, CDC or staged migration is usually safer than trying to coordinate two independent writes synchronously.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-017",
    "index": 0,
    "question": "Schema-per-tenant or shared schema?",
    "answer": "Schema-per-tenant gives stronger physical isolation and easier tenant-specific operations but increases schema-management overhead. A shared schema is simpler to operate at scale but requires strict tenant predicates and stronger application/database isolation controls.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-017",
    "index": 1,
    "question": "How do you test isolation?",
    "answer": "Create tests with multiple tenants and attempt reads, updates and deletes using IDs belonging to another tenant. Verify that every data-access path applies tenant constraints and that unauthorized requests return denial or no-resource responses.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-017",
    "index": 2,
    "question": "How would you audit tenant access?",
    "answer": "Record security-relevant access events with tenant ID, actor/service identity, resource, action, outcome, timestamp and correlation ID. Protect the audit trail from unauthorized modification and avoid logging unnecessary sensitive data.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-018",
    "index": 0,
    "question": "What is the fencing-token problem?",
    "answer": "A distributed lock holder can pause, lose its lease, and later resume after another instance has acquired the lock. A fencing token gives each lease holder a monotonically increasing value that the protected resource checks, allowing stale holders to be rejected.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-018",
    "index": 1,
    "question": "Why is idempotency still required?",
    "answer": "A lock or lease can expire, be lost or be bypassed during failures, and network retries can repeat a request. Idempotency makes the business operation safe even when the same command reaches the service more than once.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-018",
    "index": 2,
    "question": "What happens during a network partition?",
    "answer": "Nodes may be unable to communicate while still running, so each side can make decisions based on incomplete information. The design must define which operations remain available, how conflicts are prevented or reconciled, and which consistency guarantees are sacrificed.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-019",
    "index": 0,
    "question": "How does a bounded queue protect a service?",
    "answer": "A bounded queue limits how much work can accumulate in memory. Once capacity is reached, the system must apply backpressure, reject or shed work, preventing unbounded memory growth and making overload visible.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-019",
    "index": 1,
    "question": "When should requests be rejected with 429 or 503?",
    "answer": "Use 429 when the caller exceeds a defined rate or quota. Use 503 when the service is temporarily unable to handle work because of saturation, maintenance or dependency/resource exhaustion; include Retry-After when useful.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-019",
    "index": 2,
    "question": "How do virtual threads change this analysis?",
    "answer": "Virtual threads make blocking I/O much cheaper in terms of thread resources, so a request-per-thread model can scale to high concurrency. They do not increase CPU capacity or database capacity, so connection pools, downstream limits and backpressure still matter.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-020",
    "index": 0,
    "question": "How do you propagate deadlines over HTTP?",
    "answer": "Carry a deadline or remaining timeout in request metadata and have each downstream call derive a smaller local timeout from the remaining budget. This prevents downstream work from continuing after the original caller has already timed out.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-020",
    "index": 1,
    "question": "What if the downstream operation is not cancellable?",
    "answer": "Stop waiting when the local deadline expires, but assume the remote operation may still complete. Make the operation idempotent and reconcile its eventual outcome rather than pretending the timeout cancelled the remote side effect.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-020",
    "index": 2,
    "question": "How does this relate to retries?",
    "answer": "Retries must fit inside the remaining deadline. A retry that starts after most of the budget is consumed may only add load and increase failure probability, so use bounded attempts and backoff based on the remaining time.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-021",
    "index": 0,
    "question": "How would you roll back a bad flag?",
    "answer": "Disable or revert the feature flag to the last known-safe configuration, then verify metrics and error rates return to normal. Keep flag changes audited and make the default behavior safe if the flag system is unavailable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-021",
    "index": 1,
    "question": "What if a flag service is unavailable?",
    "answer": "Use a locally cached last-known-good value with an explicit TTL or a safe default, depending on the feature's risk. Do not let an unavailable flag service turn every application request into a hard failure unless the feature requires that dependency for correctness.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-021",
    "index": 2,
    "question": "How do you make a transaction use one consistent flag value?",
    "answer": "Resolve the flag value once at the beginning of the operation and pass that immutable decision through the transaction. Do not repeatedly query a changing flag service during the same business operation.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-022",
    "index": 0,
    "question": "Can Kafka transactions solve this?",
    "answer": "Kafka transactions can atomically publish Kafka records and commit consumed offsets within Kafka's transactional model. They do not make an external database or third-party side effect part of that same atomic transaction.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-022",
    "index": 1,
    "question": "How would you implement an inbox table?",
    "answer": "Create an inbox table keyed by a stable event ID with a unique constraint. In one local transaction, insert the event ID and apply the business change; if the ID already exists, treat the message as a duplicate and skip the business operation.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-022",
    "index": 2,
    "question": "What if the event has no stable ID?",
    "answer": "Introduce a deterministic business key if one exists, or change the producer contract to provide a unique event ID. Without a stable identity, reliable deduplication is difficult and must be based on carefully chosen business semantics.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-023",
    "index": 0,
    "question": "What is stale-while-revalidate?",
    "answer": "Serve a recently expired cached value immediately while one request refreshes the value in the background. It keeps latency low during refreshes but requires a defined maximum staleness window.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-023",
    "index": 1,
    "question": "How would you handle a cache miss when Redis is down?",
    "answer": "Fall back to the authoritative data source when safe, with timeouts and load protection. If the data cannot be fetched safely, return a controlled error rather than allowing unlimited database traffic or hanging requests.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-023",
    "index": 2,
    "question": "When is stale data unacceptable?",
    "answer": "Stale data is unacceptable when it can cause financial loss, incorrect authorization, duplicate processing, safety issues or a user-visible decision that must reflect the current committed state.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-024",
    "index": 0,
    "question": "Client-side or server-side discovery?",
    "answer": "Client-side discovery makes the client query the registry and select an instance; server-side discovery hides that logic behind a load balancer or gateway. Server-side is simpler for clients, while client-side can provide more direct routing control.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-024",
    "index": 1,
    "question": "How does DNS caching affect recovery?",
    "answer": "DNS records are cached by clients and intermediate resolvers, so an instance or endpoint change may not be observed immediately. TTLs, connection reuse and client resolver behavior therefore affect how quickly traffic moves to a healthy destination.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-024",
    "index": 2,
    "question": "What happens when an instance IP changes?",
    "answer": "Service discovery or DNS should expose the new endpoint, while existing connections may continue until they fail or are closed. Clients and load balancers need health checks and connection retry/re-resolution behavior so traffic converges on healthy instances.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-025",
    "index": 0,
    "question": "How would you model payment states?",
    "answer": "Use explicit states such as INITIATED, PENDING, SUCCESS, FAILED and possibly CANCELLED/REVERSED, with documented allowed transitions. Persist provider references and timestamps so asynchronous callbacks and reconciliation can safely update the state.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-025",
    "index": 1,
    "question": "What if the provider does not support idempotency?",
    "answer": "Use your own durable idempotency key and provider reference tracking, and serialize or deduplicate attempts on your side. If a timeout leaves the provider outcome unknown, reconcile with the provider before issuing another charge.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-025",
    "index": 2,
    "question": "How do you reconcile thousands of pending payments?",
    "answer": "Run a scheduled, rate-limited reconciliation job that selects pending records in batches, queries provider status, updates local state idempotently and records discrepancies for manual review. Make it restartable and observable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-026",
    "index": 0,
    "question": "Backward or forward compatibility?",
    "answer": "Backward compatibility means a newer producer or service can still work with older consumers; forward compatibility means an older consumer can tolerate data produced by a newer version. Additive, optional fields generally make event evolution easier.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-026",
    "index": 1,
    "question": "How do you version events?",
    "answer": "Version the event contract explicitly and evolve it compatibly. Use schema validation/registry rules where appropriate and keep consumers tolerant of fields they do not understand.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-026",
    "index": 2,
    "question": "What is a schema registry?",
    "answer": "A schema registry stores versioned event schemas and enforces compatibility rules between producer and consumer versions. It helps prevent incompatible Kafka messages from being published into a shared event ecosystem.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-027",
    "index": 0,
    "question": "How do you size a thread pool?",
    "answer": "For CPU-bound work, start near the number of available CPU cores and validate with load tests. For blocking I/O, the useful size depends on wait time and downstream capacity; virtual threads can change the thread model, but database and external-service limits still bound concurrency.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-027",
    "index": 1,
    "question": "What happens when the executor queue is full?",
    "answer": "The executor applies its rejection policy. Depending on configuration, the task may be rejected, run in the caller thread, or be discarded. A bounded queue plus an intentional rejection/backpressure policy is safer than unbounded accumulation.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-027",
    "index": 2,
    "question": "When would Kafka be better than @Async?",
    "answer": "Use Kafka when work must be durable, decoupled, replayable or processed by multiple independent consumers. @Async is an in-process execution mechanism and does not provide durable messaging or broker-based recovery.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-028",
    "index": 0,
    "question": "How does @Transactional interact with thread pools?",
    "answer": "A Spring transaction is normally bound to the current thread and does not automatically propagate to work executed on another thread. An @Async method therefore needs its own transaction boundary if it performs transactional database work.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-028",
    "index": 1,
    "question": "How would you publish an event after commit?",
    "answer": "Use an outbox table in the same transaction as the business change, then publish the outbox record asynchronously. This avoids publishing an event for a transaction that later rolls back.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-028",
    "index": 2,
    "question": "Can TransactionSynchronization be used?",
    "answer": "Yes, it can register an after-commit callback, but it is not a durable messaging mechanism. If the process crashes after commit but before the callback publishes the event, the event can be lost; an outbox is safer for reliable delivery.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-029",
    "index": 0,
    "question": "How does Spring Boot auto-configuration affect startup?",
    "answer": "Auto-configuration evaluates the classpath, configuration properties and conditional annotations to create appropriate beans when the application has not provided its own configuration. More starters can therefore increase startup work and bean creation.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-029",
    "index": 1,
    "question": "When is lazy initialization useful?",
    "answer": "Lazy initialization delays bean creation until the bean is first needed, which can reduce startup time and memory use. The trade-off is that misconfiguration may appear later during the first request instead of at startup.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-029",
    "index": 2,
    "question": "How would you debug a startup hang?",
    "answer": "Inspect startup logs and thread dumps, identify the last completed initialization step, and check external dependencies such as database/network calls. Also inspect bean creation cycles, slow migrations, DNS and connection timeouts.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-030",
    "index": 0,
    "question": "When should a business error be 409 versus 400?",
    "answer": "Use 400 when the request is invalid or cannot be understood as a valid operation. Use 409 when the request is valid but conflicts with current resource state, such as a version conflict or duplicate business state.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-030",
    "index": 1,
    "question": "How do you avoid leaking stack traces?",
    "answer": "Log detailed exceptions internally with controlled access and return a stable, sanitized error response to clients. Do not serialize stack traces, SQL details, filesystem paths or internal class names into production API responses.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-030",
    "index": 2,
    "question": "How do you correlate errors across services?",
    "answer": "Propagate a correlation or trace ID through HTTP headers and message metadata, include it in structured logs and traces, and return a safe request ID to the caller when useful.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-031",
    "index": 0,
    "question": "How do you take a heap dump safely?",
    "answer": "Capture it only when operationally justified, because a heap dump can be large and may contain sensitive data. Use the JVM/container-supported diagnostic mechanism, store it securely, and avoid repeated dumps that consume disk or pause resources.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-031",
    "index": 1,
    "question": "How do you distinguish a leak from normal heap growth?",
    "answer": "A leak shows objects remaining reachable and old-generation occupancy continuing to rise after GC despite stable workload. Compare heap-after-GC over time and use heap dumps/allocation profiling to identify retaining paths.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-031",
    "index": 2,
    "question": "What GC metrics would you monitor?",
    "answer": "Monitor pause duration, GC frequency, allocation rate, heap occupancy before/after GC, old-generation growth, CPU spent in GC and, for concurrent collectors, relevant concurrent-cycle or marking metrics.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-032",
    "index": 0,
    "question": "Role versus authority in Spring Security?",
    "answer": "A role is a business-level grouping such as ADMIN, while an authority is a granted permission such as `invoice:read`. Spring Security's `hasRole` convention typically adds the `ROLE_` prefix, while `hasAuthority` checks the authority value directly.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-032",
    "index": 1,
    "question": "How does @PreAuthorize work?",
    "answer": "Spring Security evaluates the expression before invoking the protected method, using the authenticated principal and configured authorization rules. If the expression evaluates to false, the method is not executed and access is denied.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-032",
    "index": 2,
    "question": "How do you test forbidden access?",
    "answer": "Authenticate the test request as a user lacking the required role/authority and assert a 403 response for an authenticated caller. Also test the allowed role and verify the business method is not invoked on denial.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-033",
    "index": 0,
    "question": "When is parallelStream appropriate?",
    "answer": "Use it only for sufficiently large, CPU-bound, independent work where parallel overhead is justified. Avoid it for blocking I/O, shared mutable state or small collections; benchmark rather than assuming it is faster.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-033",
    "index": 1,
    "question": "How does the common ForkJoinPool work?",
    "answer": "Parallel streams normally use the common ForkJoinPool, which uses worker threads to execute fork/join tasks and recursively split work. Unrelated code using the same common pool can contend for its workers.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-033",
    "index": 2,
    "question": "How do virtual threads differ from parallel streams?",
    "answer": "Virtual threads are a concurrency model for running many tasks, especially blocking I/O. Parallel streams are a data-processing abstraction that partitions a stream for parallel computation; they are not interchangeable and usually target CPU parallelism.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-034",
    "index": 0,
    "question": "Why can ThreadLocal cause memory leaks?",
    "answer": "In long-lived pooled threads, ThreadLocal values can remain attached to the thread after the request finishes if they are not cleared. This can retain large objects or stale request context across requests.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-034",
    "index": 1,
    "question": "How does InheritableThreadLocal differ?",
    "answer": "InheritableThreadLocal copies a parent's value to a child thread when that child is created. It does not automatically solve context propagation across executor pools or asynchronous frameworks, where threads may be reused.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-034",
    "index": 2,
    "question": "How does this interact with virtual threads?",
    "answer": "Virtual threads are short-lived more often than pooled platform threads, reducing some ThreadLocal retention risks, but ThreadLocal still consumes per-thread state and can be inappropriate for large context objects. Explicit context propagation is often clearer.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-035",
    "index": 0,
    "question": "How does ConcurrentHashMap reduce contention?",
    "answer": "Modern ConcurrentHashMap allows concurrent reads and coordinates updates at a finer granularity than locking the whole map. Its design lets independent bins be updated concurrently while maintaining thread-safe map operations.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-035",
    "index": 1,
    "question": "When is ReadWriteLock useful?",
    "answer": "Use a ReadWriteLock when reads greatly outnumber writes and read operations can safely run concurrently. If writes are frequent or critical sections are tiny, the lock-management overhead may outweigh the benefit.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-035",
    "index": 2,
    "question": "What is lock striping?",
    "answer": "Lock striping divides a data structure into multiple independently locked regions. Threads operating on different stripes can proceed concurrently, reducing contention compared with one global lock.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-036",
    "index": 0,
    "question": "G1 versus ZGC?",
    "answer": "Both are modern low-pause collectors. G1 balances throughput and predictable pauses using regions and concurrent phases; ZGC targets very low pause times and is designed to handle very large heaps. Choose based on latency goals, heap size and measured workload.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-036",
    "index": 1,
    "question": "How do you identify allocation hotspots?",
    "answer": "Use allocation profiling, Java Flight Recorder or a profiler to identify code paths creating the most objects. Correlate allocation rate with GC behavior, then reduce unnecessary temporary objects or improve data structures where it matters.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-036",
    "index": 2,
    "question": "What is a memory leak versus high allocation rate?",
    "answer": "A high allocation rate creates many objects that are eventually reclaimed, so heap-after-GC can remain stable. A leak retains objects that should have become unreachable, causing post-GC occupancy to grow.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-037",
    "index": 0,
    "question": "thenApply versus thenCompose?",
    "answer": "thenApply maps a completed value to another value and is appropriate when the function is synchronous. thenCompose flattens a function that returns another CompletionStage, so it is used to chain asynchronous operations without nesting futures.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-037",
    "index": 1,
    "question": "What happens when an executor rejects a task?",
    "answer": "The configured RejectedExecutionHandler decides the outcome. With AbortPolicy a RejectedExecutionException is thrown; CallerRunsPolicy executes in the submitting thread; discard policies drop work. The policy should match whether losing work is acceptable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-037",
    "index": 2,
    "question": "How do you cancel a future chain?",
    "answer": "Keep the CompletableFuture reference and call cancel(true) where appropriate, but understand that cancellation is cooperative and may not interrupt every underlying operation. Propagate timeouts/cancellation to actual I/O operations when the API supports it.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-038",
    "index": 0,
    "question": "What makes an index selective?",
    "answer": "An index is selective when its leading columns distinguish a relatively small fraction of rows for the query predicate. High-cardinality columns often have better selectivity, but the optimizer also considers data distribution, costs and the query plan.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-038",
    "index": 1,
    "question": "What is a covering index?",
    "answer": "Whether an index is covering depends on the database and query plan. It can reduce random table access but increases index size and write cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-038",
    "index": 2,
    "question": "When can an optimizer ignore an index?",
    "answer": "It may prefer a full scan when a large fraction of rows matches, statistics indicate the index is expensive, the query is not sargable, or the table is small. Validate the reason using the execution plan rather than assuming the index is broken.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-039",
    "index": 0,
    "question": "Deadlock versus lock timeout?",
    "answer": "A deadlock is a cycle where transactions wait on each other's locks; the database detects the cycle and aborts a victim. A lock timeout is a wait that exceeds a configured time without necessarily forming a cycle.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-039",
    "index": 1,
    "question": "When is retry safe?",
    "answer": "Retry is safe when the operation is idempotent or protected by an idempotency key and the failure is plausibly transient. Do not blindly retry after an unknown outcome for a non-idempotent side effect.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-039",
    "index": 2,
    "question": "How do isolation levels affect locking?",
    "answer": "Stronger isolation generally increases the coordination needed to provide stronger read guarantees and can increase locking or contention, depending on the database/MVCC implementation. Choose the lowest level that still satisfies correctness.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-040",
    "index": 0,
    "question": "What is sargability?",
    "answer": "A predicate is sargable when the database can use an index efficiently to locate matching rows, for example `WHERE order_date >= ?`. Wrapping the indexed column in a function can prevent a normal index from being used efficiently.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-040",
    "index": 1,
    "question": "When is a functional index useful?",
    "answer": "A functional index is useful when queries consistently filter or sort on an expression such as `LOWER(email)` or a date transformation. It lets the database index the expression instead of computing it for every row.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-040",
    "index": 2,
    "question": "Why can a selective index still be ignored?",
    "answer": "Even a selective index may be ignored if statistics are stale, the predicate is not sargable, implicit conversion changes the comparison, the table is small, or the optimizer estimates a scan to be cheaper. Check the actual plan and statistics.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-041",
    "index": 0,
    "question": "When should batching not be used?",
    "answer": "Avoid large batches when individual operations must have immediate visibility, when a failure must isolate one record, or when batch size causes lock, memory or transaction-log pressure. Use smaller chunks or synchronous processing where correctness requires it.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-041",
    "index": 1,
    "question": "How does partition dropping help retention?",
    "answer": "Dropping or truncating an old partition removes a large time range as a metadata/storage operation instead of deleting rows one by one. It can make retention much faster and reduce long-running delete transactions.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-041",
    "index": 2,
    "question": "What are the consistency implications of batch deletes?",
    "answer": "Large batch deletes may hold locks and create replication/log pressure; smaller batches reduce impact but create a period where some old rows remain. Define whether readers can see partial retention progress and schedule batches accordingly.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-042",
    "index": 0,
    "question": "How do you paginate with duplicate timestamps?",
    "answer": "Use a deterministic tie-breaker such as `(created_at, id)` rather than the timestamp alone. The next-page predicate should continue strictly after the last `(timestamp,id)` pair so equal timestamps cannot be skipped or duplicated.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-042",
    "index": 1,
    "question": "What makes a cursor stable?",
    "answer": "A stable cursor encodes an ordering position that remains meaningful between requests, typically using immutable or monotonically ordered fields. Avoid relying on an offset into a dataset that is changing underneath the client.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-042",
    "index": 2,
    "question": "When is offset pagination acceptable?",
    "answer": "Offset pagination is fine for small or mostly static datasets, simple administrative screens and cases where jumping directly to a page is useful. For large frequently changing datasets, keyset/cursor pagination is usually more efficient and stable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-043",
    "index": 0,
    "question": "What is IDOR?",
    "answer": "Prevent IDOR and cross-tenant access by deriving the caller's identity and tenant from trusted authentication context and applying authorization checks to every resource access. Never treat an object ID supplied by the client as proof of ownership.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-043",
    "index": 1,
    "question": "How do you implement tenant-aware authorization?",
    "answer": "Derive the tenant from authenticated identity or trusted security context, then enforce it in service authorization and data-access predicates. Treat any tenant ID supplied by the client as untrusted input.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-043",
    "index": 2,
    "question": "Should authorization be checked at the gateway?",
    "answer": "The gateway can perform coarse authentication and policy checks, but the resource-owning service must enforce authorization for its own business operation. A gateway should not be the only authorization boundary.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-044",
    "index": 0,
    "question": "How do you revoke JWT access tokens?",
    "answer": "JWT access tokens are normally self-contained until expiry. Immediate revocation requires server-side state such as a denylist/token version, introspection, or short-lived access tokens combined with revocable refresh tokens.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-044",
    "index": 1,
    "question": "What happens if two refresh requests race?",
    "answer": "With refresh-token rotation, only one use of the current refresh token should succeed; the second can be treated as reuse and trigger session/token-family revocation depending on the security policy. Synchronize or atomically update the refresh-token state.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-044",
    "index": 2,
    "question": "Where should refresh tokens be stored?",
    "answer": "For browser applications, prefer an HttpOnly, Secure cookie with an appropriate SameSite policy and CSRF protection when the architecture uses cookies. Avoid exposing long-lived refresh tokens to JavaScript.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-045",
    "index": 0,
    "question": "Why is DNS rebinding relevant?",
    "answer": "DNS rebinding can cause a hostname that was initially resolved to a permitted address to later resolve to an internal or sensitive address. Server-side URL fetchers must validate resolved addresses and restrict outbound destinations rather than trusting hostnames alone.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-045",
    "index": 1,
    "question": "How can a proxy help?",
    "answer": "A controlled egress proxy can centralize outbound policy, allowlisting, authentication, logging and destination filtering. It reduces the number of components that can make unrestricted outbound requests.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-045",
    "index": 2,
    "question": "Which cloud metadata endpoints are sensitive?",
    "answer": "Cloud instance metadata endpoints can expose credentials and instance information when an application can reach them. Protect access with cloud-provider controls such as IMDSv2 where available, network restrictions and strict SSRF defenses.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-046",
    "index": 0,
    "question": "How does -Xmx relate to container limits?",
    "answer": "`-Xmx` limits Java heap, but a container's memory limit covers more than heap: metaspace, thread stacks, direct buffers, native libraries and JVM overhead also consume memory. Setting Xmx too close to the container limit can cause the container to be OOM-killed.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-046",
    "index": 1,
    "question": "How do you investigate native memory?",
    "answer": "Compare process/container memory with heap usage, then inspect native allocations such as thread stacks, direct buffers, metaspace and JVM/native libraries. Native Memory Tracking, JFR and OS/container metrics can help isolate the source.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-046",
    "index": 2,
    "question": "What is the difference between requests and limits?",
    "answer": "A Kubernetes CPU/memory request influences scheduling and resource guarantees, while the limit is the configured maximum. Exceeding a memory limit can cause OOM termination; CPU limits can throttle execution.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-047",
    "index": 0,
    "question": "What is maxSurge?",
    "answer": "maxSurge controls how many extra Pods a rolling Deployment may create above the desired replica count during an update. A higher value can speed rollout but temporarily consumes more capacity.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-047",
    "index": 1,
    "question": "Why can maxUnavailable=0 still fail?",
    "answer": "It only prevents the rollout controller from intentionally reducing available replicas below the configured threshold. New pods can still fail readiness, crash, run out of capacity or encounter image/configuration problems, preventing progress.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-047",
    "index": 2,
    "question": "How do readiness probes interact with deployments?",
    "answer": "Only ready pods should receive normal service traffic, and Deployment rollout progress depends on new pods becoming ready. A failing readiness probe therefore protects users from unhealthy pods but can also stall a deployment.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-048",
    "index": 0,
    "question": "When is queue depth a better metric?",
    "answer": "Queue depth is especially useful for asynchronous systems because it measures accumulated work. Lag or depth combined with processing rate tells you whether consumers are keeping up and helps drive autoscaling or overload decisions.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-048",
    "index": 1,
    "question": "How does cluster autoscaler interact with HPA?",
    "answer": "HPA changes the number of pods based on workload metrics; if the scheduler cannot place the new pods because nodes lack capacity, the cluster autoscaler can add nodes. They solve different scaling layers and should be tuned together.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-048",
    "index": 2,
    "question": "What is scale-to-zero trade-off?",
    "answer": "Scale-to-zero saves resources when idle but introduces cold-start latency and can reduce responsiveness to sudden traffic. It is best for workloads where startup time and occasional latency are acceptable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-049",
    "index": 0,
    "question": "How would you scale the order database?",
    "answer": "First optimize query patterns and indexes, then consider read replicas for read-heavy traffic, partitioning/sharding for very large datasets, and archival for old data. Keep the primary path sized for transactional writes and protect it with connection limits.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-049",
    "index": 1,
    "question": "How would you publish OrderCreated reliably?",
    "answer": "Persist the order state and an OrderCreated outbox event in the same database transaction. A publisher then sends committed outbox records to Kafka and retries safely until publication succeeds.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-049",
    "index": 2,
    "question": "What if payment remains pending for 30 minutes?",
    "answer": "Treat it as an explicit pending state rather than repeatedly charging. Use provider callbacks/reconciliation, a timeout policy and an operational alert so the order can move to a final state based on authoritative provider information.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-050",
    "index": 0,
    "question": "How do you preserve ordering for notifications?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-050",
    "index": 1,
    "question": "How do you handle provider rate limits?",
    "answer": "Honor the provider's quota and Retry-After guidance, throttle concurrency, use bounded backoff with jitter and queue work when appropriate. Avoid creating a retry storm against the same provider.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-050",
    "index": 2,
    "question": "How do you prevent duplicate SMS?",
    "answer": "Assign each notification a stable idempotency/business key and record successful sends durably. Retries check that record before sending again; if the provider supports an idempotency key, pass it through.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-051",
    "index": 0,
    "question": "Token bucket versus sliding window?",
    "answer": "A token bucket allows bursts up to the available tokens while enforcing an average refill rate. A sliding-window counter tracks requests across a moving time interval and gives a more direct window-based limit but can cost more state.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-051",
    "index": 1,
    "question": "How do you avoid a Redis bottleneck?",
    "answer": "Use appropriate key design and TTLs, avoid oversized values and hot keys, monitor CPU/memory/latency, and shard or scale Redis when necessary. Do not make every application operation depend on Redis if a local or database path is acceptable.",
    "track": "backend"
  },
  {
    "questionId": "v10.1-051",
    "index": 2,
    "question": "What happens during a Redis outage?",
    "answer": "Use a defined fallback: serve stale/local data, bypass the cache to the authoritative store with rate protection, or fail gracefully when correctness requires Redis. The application should not create an unbounded database stampede.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-01",
    "index": 0,
    "question": "Can you solve it with an array instead of a HashMap?",
    "answer": "Maintain a sliding window with a map from character to its latest index; move the left boundary past a repeated character. The window always contains unique characters. When a repeated character appears inside the window, jump left to max(left, lastIndex+1). This gives O(n) time with a hash map.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-02",
    "index": 0,
    "question": "How would you return the actual subarray?",
    "answer": "Maintain the best sum ending at the current position. At each element, either start a new subarray with that element or extend the previous subarray. Track the maximum seen globally.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-02",
    "index": 1,
    "question": "How do you handle an empty array?",
    "answer": "Maintain the best sum ending at the current position. At each element, either start a new subarray with that element or extend the previous subarray. Track the maximum seen globally.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-03",
    "index": 0,
    "question": "What if k is larger than the array length?",
    "answer": "Normalize k using k % n. Reverse the whole array, then reverse the first k elements and the remaining elements. This achieves rotation in-place without an auxiliary array.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-03",
    "index": 1,
    "question": "Can you do it with an extra array?",
    "answer": "Normalize k using k % n. Reverse the whole array, then reverse the first k elements and the remaining elements. This achieves rotation in-place without an auxiliary array.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-04",
    "index": 0,
    "question": "Can you solve it using a different data structure?",
    "answer": "Process intervals in three phases: copy intervals completely before the new interval, merge all intervals that overlap it, then copy the remaining intervals. This avoids sorting again and runs in linear time.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-04",
    "index": 1,
    "question": "What changes if the input intervals are not sorted?",
    "answer": "Process intervals in three phases: copy intervals completely before the new interval, merge all intervals that overlap it, then copy the remaining intervals. This avoids sorting again and runs in linear time.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-04",
    "index": 2,
    "question": "How would you handle open or closed interval boundaries?",
    "answer": "Process intervals in three phases: copy intervals completely before the new interval, merge all intervals that overlap it, then copy the remaining intervals. This avoids sorting again and runs in linear time.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-05",
    "index": 0,
    "question": "What happens with one or more zeros?",
    "answer": "Store prefix products in the output array. Then scan from right to left while maintaining a suffix product and multiply it into each output position. This also handles zeros without special cases.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-05",
    "index": 1,
    "question": "Can you prove why two passes are sufficient?",
    "answer": "Store prefix products in the output array. Then scan from right to left while maintaining a suffix product and multiply it into each output position. This also handles zeros without special cases.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-06",
    "index": 0,
    "question": "How would you solve 4Sum?",
    "answer": "Sort the array. Fix one element and use two pointers for the remaining range. Skip duplicate values at the fixed pointer and after a match so that the result contains unique triplets.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-06",
    "index": 1,
    "question": "Why is sorting important here?",
    "answer": "Sort the array. Fix one element and use two pointers for the remaining range. Skip duplicate values at the fixed pointer and after a match so that the result contains unique triplets.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-07",
    "index": 0,
    "question": "Can you find the insertion range?",
    "answer": "Run binary search twice: once biased toward the left to find the first occurrence and once biased toward the right to find the last occurrence.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-07",
    "index": 1,
    "question": "What changes if the array is descending?",
    "answer": "Run binary search twice: once biased toward the left to find the first occurrence and once biased toward the right to find the last occurrence.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-08",
    "index": 0,
    "question": "How can Quickselect improve average complexity?",
    "answer": "Maintain a min-heap of size k. Add every value; when the heap exceeds k, remove its smallest value. At the end, the root is the kth largest.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-08",
    "index": 1,
    "question": "How would you find the kth smallest?",
    "answer": "Maintain a min-heap of size k. Add every value; when the heap exceeds k, remove its smallest value. At the end, the root is the kth largest.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-09",
    "index": 0,
    "question": "Can divide-and-conquer merging be used?",
    "answer": "Put the head of every non-empty list into a min-heap. Repeatedly remove the smallest node, append it to the result, and add its next node.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-09",
    "index": 1,
    "question": "What if k is extremely large?",
    "answer": "Put the head of every non-empty list into a min-heap. Repeatedly remove the smallest node, append it to the result, and add its next node.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-10",
    "index": 0,
    "question": "Can you reverse recursively?",
    "answer": "Maintain previous and current pointers. Save current.next, reverse the pointer to previous, then advance both pointers.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-10",
    "index": 1,
    "question": "How do you reverse nodes in groups of k?",
    "answer": "Maintain previous and current pointers. Save current.next, reverse the pointer to previous, then advance both pointers.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-11",
    "index": 0,
    "question": "Would you restore the list after checking?",
    "answer": "Use slow and fast pointers to find the midpoint, reverse the second half, then compare the first and second halves. Optionally restore the list afterward.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-11",
    "index": 1,
    "question": "Can you solve it with a stack?",
    "answer": "Use slow and fast pointers to find the midpoint, reverse the second half, then compare the first and second halves. Optionally restore the list afterward.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-12",
    "index": 0,
    "question": "How would you implement it iteratively?",
    "answer": "The depth of a node is one plus the maximum depth of its children. Use recursion for a concise solution; an iterative BFS solution is also possible.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-12",
    "index": 1,
    "question": "What happens for a skewed tree?",
    "answer": "The depth of a node is one plus the maximum depth of its children. Use recursion for a concise solution; an iterative BFS solution is also possible.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-13",
    "index": 0,
    "question": "How would you do zigzag traversal?",
    "answer": "Use a queue for breadth-first traversal. At each iteration capture the current queue size; those nodes belong to one level.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-13",
    "index": 1,
    "question": "DFS can also produce levels—how?",
    "answer": "Use a queue for breadth-first traversal. At each iteration capture the current queue size; those nodes belong to one level.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-14",
    "index": 0,
    "question": "How do duplicates change the rule?",
    "answer": "Pass a valid numeric range down the tree. Every left child must be below the current upper bound and every right child above the current lower bound.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-14",
    "index": 1,
    "question": "Can you solve it with inorder traversal?",
    "answer": "Pass a valid numeric range down the tree. Every left child must be below the current upper bound and every right child above the current lower bound.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-15",
    "index": 0,
    "question": "How does LCA change for a normal binary tree?",
    "answer": "If both targets are smaller, move left. If both are larger, move right. Otherwise the current node is where their paths split and is the LCA.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-15",
    "index": 1,
    "question": "What if one target is not present?",
    "answer": "If both targets are smaller, move left. If both are larger, move right. Otherwise the current node is where their paths split and is the LCA.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-16",
    "index": 0,
    "question": "How would you implement prefix search?",
    "answer": "Each Trie node has a map of outgoing characters and an end-of-word flag. Insertion walks or creates one node per character; search follows the same path and checks the final flag.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-16",
    "index": 1,
    "question": "How would you reduce memory for a fixed alphabet?",
    "answer": "Each Trie node has a map of outgoing characters and an end-of-word flag. Insertion walks or creates one node per character; search follows the same path and checks the final flag.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-17",
    "index": 0,
    "question": "What changes for diagonal connectivity?",
    "answer": "Scan every cell. When an unvisited land cell is found, increment the count and flood-fill its island using BFS or DFS, marking visited cells so the island is not counted again.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-17",
    "index": 1,
    "question": "Can you solve it with Union-Find?",
    "answer": "Scan every cell. When an unvisited land cell is found, increment the count and flood-fill its island using BFS or DFS, marking visited cells so the island is not counted again.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-18",
    "index": 0,
    "question": "When would Dijkstra be needed instead?",
    "answer": "Because every move has equal cost, BFS explores cells in increasing distance order. Store the distance with each queue entry and stop when the destination is reached.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-18",
    "index": 1,
    "question": "How would you return the actual path?",
    "answer": "Because every move has equal cost, BFS explores cells in increasing distance order. Store the distance with each queue entry and stop when the destination is reached.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-19",
    "index": 0,
    "question": "Why does greedy not always work?",
    "answer": "Use bottom-up dynamic programming. dp[a] is the minimum coins needed for amount a. For each amount, try every coin and use dp[a-coin] + 1.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-19",
    "index": 1,
    "question": "Can you solve it top-down with memoization?",
    "answer": "Use bottom-up dynamic programming. dp[a] is the minimum coins needed for amount a. For each amount, try every coin and use dp[a-coin] + 1.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-20",
    "index": 0,
    "question": "What if you can climb 1, 2 or 3 steps?",
    "answer": "The number of ways to reach n equals ways(n-1) + ways(n-2). Keep only the previous two values because older values are no longer needed.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-20",
    "index": 1,
    "question": "What happens for large n and integer overflow?",
    "answer": "The number of ways to reach n equals ways(n-1) + ways(n-2). Keep only the previous two values because older values are no longer needed.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-21",
    "index": 0,
    "question": "How would you count employees instead of storing them?",
    "answer": "Use Collectors.groupingBy with the department as the classifier. The result is a Map from department to a list of employees.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-21",
    "index": 1,
    "question": "How would you find the highest-paid employee per department?",
    "answer": "Use Collectors.groupingBy with the department as the classifier. The result is a Map from department to a list of employees.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-22",
    "index": 0,
    "question": "How is partitioningBy different from groupingBy?",
    "answer": "Use Collectors.partitioningBy with a predicate that checks whether a number is even. The result always has boolean keys for the two partitions.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-22",
    "index": 1,
    "question": "Can you count each partition?",
    "answer": "Use Collectors.partitioningBy with a predicate that checks whether a number is even. The result always has boolean keys for the two partitions.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-23",
    "index": 0,
    "question": "How would you find the top 3 per department?",
    "answer": "Stream the employees, sort by salary descending, limit to three, and collect the result. For large data sets, discuss database-side sorting when the data originates in a database.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-23",
    "index": 1,
    "question": "Can you use a priority queue for better memory behavior?",
    "answer": "Stream the employees, sort by salary descending, limit to three, and collect the result. For large data sets, discuss database-side sorting when the data originates in a database.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-24",
    "index": 0,
    "question": "Is this approach safe with parallel streams?",
    "answer": "Maintain a Set of values already seen. In the stream filter, a value is a duplicate when add(value) returns false. Collect the duplicates into a distinct result.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-coding-24",
    "index": 1,
    "question": "How would you return frequency counts instead?",
    "answer": "Maintain a Set of values already seen. In the stream filter, a value is a duplicate when add(value) returns false. Collect the duplicates into a distinct result.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-01",
    "index": 0,
    "question": "How would you expire idempotency keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-01",
    "index": 1,
    "question": "What if the first request is still processing when the retry arrives?",
    "answer": "Use the same idempotency key for both requests. The second request should detect the in-progress record and either wait for the first result or return a controlled in-progress response; it must not execute the side effect independently.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-02",
    "index": 0,
    "question": "Why can adding consumers fail to improve lag?",
    "answer": "If the topic has too few partitions, extra consumers are idle. Lag can also remain if the bottleneck is a slow downstream dependency, database, hot partition, consumer processing, or insufficient partition throughput.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-02",
    "index": 1,
    "question": "How do you handle a poison message?",
    "answer": "A poison message repeatedly fails because of its data or processing logic. After bounded retries, move it to a dead-letter topic with the original payload and error context, alert on it, fix the cause, then replay it deliberately.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-03",
    "index": 0,
    "question": "When would Kafka transactions help?",
    "answer": "Kafka transactions help when consuming Kafka records and producing Kafka records need atomic offset/output semantics. They are useful for Kafka-to-Kafka processing, but they do not atomically include arbitrary external databases or APIs.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-03",
    "index": 1,
    "question": "How would you design an inbox table?",
    "answer": "Use a table with a unique event/message ID and processing metadata. In one database transaction, insert the ID and apply the business change; a duplicate key means the event was already handled and the business change should not be repeated.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-04",
    "index": 0,
    "question": "Where should retries live?",
    "answer": "Put retries at the boundary that understands the failure and idempotency semantics, usually the client/service making the remote call. Avoid having every layer retry the same operation because retries multiply across service hops.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-04",
    "index": 1,
    "question": "How do you choose retry counts and deadlines?",
    "answer": "Start from the end-to-end latency budget and dependency behavior, then choose a small bounded number of attempts with exponential backoff and jitter. The total retry time must remain inside the caller's deadline.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-05",
    "index": 0,
    "question": "What metrics would you put on an API dashboard?",
    "answer": "Use request rate, p50/p95/p99 latency, 4xx/5xx and timeout rate, dependency latency/errors, CPU/memory, thread and connection pools, and saturation indicators such as queue depth.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-05",
    "index": 1,
    "question": "How do you distinguish queueing from downstream latency?",
    "answer": "Tracing can show time spent waiting before work starts versus time inside a downstream call. Compare queue depth/consumer lag and worker utilization with downstream span duration and connection-pool wait time.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-06",
    "index": 0,
    "question": "How do you clean old outbox rows?",
    "answer": "Delete or archive only rows that are safely published and no longer needed for replay/audit. Use bounded batches, an index on publication/created time, and retention rules so cleanup does not create large locks or transaction-log spikes.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-06",
    "index": 1,
    "question": "Would CDC be an alternative?",
    "answer": "Yes. CDC can read committed database changes from the transaction log and publish them downstream, reducing application publishing code. An outbox is often clearer when the event represents a deliberate business contract rather than every database change.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-07",
    "index": 0,
    "question": "How would you reconcile payments periodically?",
    "answer": "Select pending or suspicious payments in bounded batches, query the provider for authoritative status, update local state idempotently, and record discrepancies. Make the job restartable and rate-limited.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-07",
    "index": 1,
    "question": "Where does the Saga pattern fit?",
    "answer": "Saga coordinates a business workflow spanning multiple services without a distributed transaction. Each local transaction commits independently and failures trigger compensating actions or state transitions.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-08",
    "index": 0,
    "question": "How do you choose HikariCP pool size?",
    "answer": "Choose it from measured query latency, database capacity, concurrency and instance count. A smaller pool can prevent database overload; validate with load tests and monitor connection acquisition time and database saturation.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-08",
    "index": 1,
    "question": "What is a connection leak?",
    "answer": "A connection leak occurs when application code obtains a database connection and fails to return it to the pool. Over time the pool is exhausted and requests time out; pool leak detection and metrics can help locate it.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-09",
    "index": 0,
    "question": "How does @Async interact with transactions?",
    "answer": "The async method runs on another thread, so the caller's thread-bound transaction does not automatically propagate. Put an explicit transaction boundary in the async method when its database work must be transactional.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-09",
    "index": 1,
    "question": "How would you propagate MDC or security context?",
    "answer": "Use task decorators or framework-supported context propagation to copy only the required context into the worker thread, and clear it after execution. Do not blindly propagate sensitive or stale request context.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-10",
    "index": 0,
    "question": "What is propagation?",
    "answer": "Transaction propagation defines how a method's transaction boundary behaves when it is called from another transactional method, such as joining the existing transaction with REQUIRED or creating a new one with REQUIRES_NEW.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-10",
    "index": 1,
    "question": "What happens with self-invocation?",
    "answer": "A call from one method to another method on the same Spring bean does not cross the proxy, so proxy-based annotations such as @Transactional or @Async may not be applied. Move the method to another bean or use an appropriate proxy-aware design.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-11",
    "index": 0,
    "question": "How does auto-configuration work?",
    "answer": "Spring Boot auto-configuration uses conditional configuration to create beans based on the classpath, existing beans, configuration properties and other conditions. For example, adding a starter can make Boot configure a related component automatically; user-defined beans can often override the default.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-11",
    "index": 1,
    "question": "How would you troubleshoot a circular dependency?",
    "answer": "First identify the dependency cycle from the startup exception or bean graph. Prefer breaking the cycle by separating responsibilities or introducing a higher-level abstraction; avoid using lazy injection merely to hide a design problem unless the dependency is genuinely safe to initialize lazily.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-12",
    "index": 0,
    "question": "What is a covering index?",
    "answer": "Whether an index is covering depends on the database and query plan. It can reduce random table access but increases index size and write cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-12",
    "index": 1,
    "question": "When can an index make writes slower?",
    "answer": "Indexes must be updated whenever indexed columns change or rows are inserted/deleted. Each additional index therefore increases write work and storage, which is especially noticeable on write-heavy tables.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-13",
    "index": 0,
    "question": "How is a deadlock different from lock timeout?",
    "answer": "A deadlock contains a circular wait and is detected by the database, which aborts one transaction. A lock timeout is simply waiting longer than the configured threshold for a lock; there need not be a cycle.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-13",
    "index": 1,
    "question": "What isolation level changes might help?",
    "answer": "If contention is caused by unnecessarily strong isolation, lowering it can reduce locking/coordination, depending on the database. But isolation must still satisfy correctness; also consider shorter transactions and consistent lock ordering.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-14",
    "index": 0,
    "question": "How do you paginate by timestamp safely?",
    "answer": "Use a composite ordering such as `(created_at, id)` and pass the last pair as the cursor. Query strictly after that pair so records sharing the same timestamp are neither skipped nor repeated.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-14",
    "index": 1,
    "question": "What indexes are needed?",
    "answer": "Index the columns used by the pagination predicate and ordering, commonly a composite `(created_at, id)` index matching the query. Confirm with the actual execution plan and data distribution.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-15",
    "index": 0,
    "question": "Where should tenant checks happen?",
    "answer": "Enforce tenant isolation in the backend service that owns the data, ideally close to the data-access/business authorization boundary. Gateway checks are supplemental and must not be the only protection.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-15",
    "index": 1,
    "question": "How would you test for this vulnerability?",
    "answer": "Authenticate as tenant A, request/modify resources belonging to tenant B by changing IDs or tenant parameters, and assert access is denied. Repeat across every endpoint and data-access path, including bulk operations.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-16",
    "index": 0,
    "question": "How do stateless JWTs get revoked?",
    "answer": "Because a self-contained JWT normally remains valid until expiry, immediate revocation requires a server-side mechanism such as a denylist/token version or introspection. Short-lived access tokens reduce the exposure window.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-16",
    "index": 1,
    "question": "Where should refresh tokens be stored?",
    "answer": "For browser applications, prefer an HttpOnly, Secure cookie with an appropriate SameSite policy and CSRF protection when the architecture uses cookies. Avoid exposing long-lived refresh tokens to JavaScript.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-17",
    "index": 0,
    "question": "How do you size Xmx in a container?",
    "answer": "Leave headroom below the container memory limit for metaspace, thread stacks, direct buffers, native libraries and JVM overhead. Then validate actual RSS/heap behavior under load rather than setting Xmx equal to the container limit.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-17",
    "index": 1,
    "question": "What are direct byte buffers?",
    "answer": "Direct ByteBuffers allocate memory outside the Java heap, commonly for efficient I/O. They are still limited by process/container memory and must be considered when sizing JVM memory.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-18",
    "index": 0,
    "question": "What should liveness check?",
    "answer": "Liveness should answer whether the process is alive and able to recover by continuing to run. Keep external dependencies out of liveness unless their failure means the process itself cannot recover.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-18",
    "index": 1,
    "question": "When should startup probes be used?",
    "answer": "Use them for applications with long or variable startup times, such as large Spring applications or applications performing initialization. They prevent liveness from restarting a process before it has finished starting.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-19",
    "index": 0,
    "question": "How do you backfill 500 million rows safely?",
    "answer": "Process stable key ranges in small batches, throttle based on database load, make the job restartable, and monitor locks, I/O, CPU, replication lag and errors. Avoid a single huge transaction and coordinate with peak traffic.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-19",
    "index": 1,
    "question": "What metrics would you monitor during the migration?",
    "answer": "Monitor batch throughput, duration/error rate, database CPU/I/O, lock waits, transaction-log growth, replication lag, connection-pool pressure and application latency. Also track remaining rows and estimated completion time.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-20",
    "index": 0,
    "question": "How do you guarantee no duplicate notifications?",
    "answer": "Give each logical notification a stable idempotency key and persist its send state. Before sending, atomically claim/check that key; retries then return the existing outcome instead of sending a second notification.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-20",
    "index": 1,
    "question": "How would you prioritize urgent notifications?",
    "answer": "Separate urgent work from normal traffic using priority queues or dedicated worker capacity, with bounded limits so urgent traffic cannot consume every resource. Define retry and delivery SLAs for each priority.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-21",
    "index": 0,
    "question": "How do you validate path variables?",
    "answer": "Validate syntax and business constraints at the API boundary, for example using type-safe IDs and Bean Validation where applicable. Reject malformed or invalid values with a clear 400 response before business processing.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-21",
    "index": 1,
    "question": "How do you avoid exposing internal exception messages?",
    "answer": "Map internal exceptions to sanitized API error codes/messages and log the detailed exception internally. Never return stack traces, SQL errors, filesystem paths or sensitive implementation details to clients.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-22",
    "index": 0,
    "question": "How do you prevent cache stampede?",
    "answer": "Use request coalescing/single-flight for hot keys, add TTL jitter, and optionally serve stale data while one request refreshes the cache. Also bound refresh concurrency so a miss cannot overload the origin.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-22",
    "index": 1,
    "question": "What happens if the cache is unavailable?",
    "answer": "Fall back to the source of truth when safe, with timeouts and load protection. If the cache is required for correctness, fail in a controlled way; do not let every request create unlimited backend load.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-23",
    "index": 0,
    "question": "Would READ COMMITTED solve it?",
    "answer": "READ COMMITTED prevents dirty reads, but it does not solve every concurrency problem. Non-repeatable reads and application-level lost updates can still occur, so the required invariant determines whether stronger isolation or optimistic/pessimistic locking is needed.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-23",
    "index": 1,
    "question": "How would you throttle a backfill?",
    "answer": "Limit batch size and pause between batches based on database health, or use a token/rate budget. Dynamically slow the job when CPU, lock waits, latency or replication lag crosses a threshold.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-24",
    "index": 0,
    "question": "Why is ThreadLocal useful?",
    "answer": "ThreadLocal gives each thread its own value, which is useful for request-scoped context such as correlation IDs when the execution model is thread-bound. It avoids passing that value through every method parameter.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-24",
    "index": 1,
    "question": "Why can it cause memory leaks?",
    "answer": "In long-lived thread pools, a ThreadLocal value can remain attached to a reused worker thread after the request ends. If the value references large objects or request state and is not removed, it can retain memory unexpectedly.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-25",
    "index": 0,
    "question": "thenCompose vs thenApply?",
    "answer": "thenApply transforms a value into another value. thenCompose is for a function that already returns a CompletableFuture/CompletionStage and flattens the result, so it is the usual choice for sequential asynchronous calls.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-25",
    "index": 1,
    "question": "How do you add a timeout to a future?",
    "answer": "Use CompletableFuture timeout operations such as `orTimeout` to fail the future after a deadline, or `completeOnTimeout` when a fallback value is appropriate. The underlying I/O should also have its own real timeout.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-26",
    "index": 0,
    "question": "How does G1 work at a high level?",
    "answer": "G1 divides the heap into regions, tracks which regions contain the most reclaimable space, and performs mostly concurrent marking with pause-oriented young/mixed collections. It aims to balance throughput with predictable pause targets.",
    "track": "backend"
  },
  {
    "questionId": "v10.5-scenario-26",
    "index": 1,
    "question": "What is a memory leak in Java?",
    "answer": "A Java memory leak occurs when objects are still strongly reachable even though the application no longer needs them, so GC cannot reclaim them. Common causes include unbounded caches, static collections, listeners and ThreadLocal state.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-01",
    "index": 0,
    "question": "Does volatile create happens-before?",
    "answer": "It is established by synchronization actions such as unlocking then locking the same monitor, volatile writes/read pairs, thread start/join and other concurrency constructs. It is stronger than simply saying one line executed earlier in wall-clock time.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-01",
    "index": 1,
    "question": "Can instruction reordering break an unsynchronized program?",
    "answer": "Ordering is guaranteed only within the broker's ordering scope, such as a Kafka partition. To preserve per-entity order, route all events for the same key to the same partition and avoid parallel processing that reorders them.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-02",
    "index": 0,
    "question": "Why is the first null check needed?",
    "answer": "Without volatile, a thread can observe a non-null reference before all constructor writes are visible because publication and initialization can be reordered. Volatile prevents that unsafe publication pattern.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-02",
    "index": 1,
    "question": "Can an enum singleton avoid this complexity?",
    "answer": "Without volatile, a thread can observe a non-null reference before all constructor writes are visible because publication and initialization can be reordered. Volatile prevents that unsafe publication pattern.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-03",
    "index": 0,
    "question": "CAS vs synchronized?",
    "answer": "AtomicInteger and many concurrent structures use CAS loops. CAS avoids blocking for some operations, but high contention can cause repeated retries and does not automatically solve multi-variable invariants.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-03",
    "index": 1,
    "question": "What happens under high contention?",
    "answer": "AtomicInteger and many concurrent structures use CAS loops. CAS avoids blocking for some operations, but high contention can cause repeated retries and does not automatically solve multi-variable invariants.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-04",
    "index": 0,
    "question": "Lock-free vs wait-free?",
    "answer": "It commonly uses atomic operations such as CAS. Lock-free does not mean wait-free: one thread can still starve while others make progress.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-04",
    "index": 1,
    "question": "Where are lock-free structures useful?",
    "answer": "It commonly uses atomic operations such as CAS. Lock-free does not mean wait-free: one thread can still starve while others make progress.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-05",
    "index": 0,
    "question": "How does AtomicStampedReference help?",
    "answer": "Algorithms can use stamped or versioned references to distinguish logically different states that have the same raw value. It matters in non-blocking algorithms and reused nodes.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-05",
    "index": 1,
    "question": "Can ABA matter in ordinary HashMap code?",
    "answer": "Algorithms can use stamped or versioned references to distinguish logically different states that have the same raw value. It matters in non-blocking algorithms and reused nodes.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-06",
    "index": 0,
    "question": "Is the string pool on the heap?",
    "answer": "The JVM maintains a string pool. Interning can reduce duplicate string storage when there are many repeated values, but excessive interning can increase pool pressure and should not be used as a generic performance trick.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-06",
    "index": 1,
    "question": "When can interning hurt performance?",
    "answer": "The JVM maintains a string pool. Interning can reduce duplicate string storage when there are many repeated values, but excessive interning can increase pool pressure and should not be used as a generic performance trick.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-07",
    "index": 0,
    "question": "What is scalar replacement?",
    "answer": "The JIT can use that information for optimizations such as scalar replacement and lock elimination in suitable cases. It is an optimization, so application code should not depend on a specific optimization occurring.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-07",
    "index": 1,
    "question": "Can all short-lived objects be stack allocated?",
    "answer": "The JIT can use that information for optimizations such as scalar replacement and lock elimination in suitable cases. It is an optimization, so application code should not depend on a specific optimization occurring.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-08",
    "index": 0,
    "question": "What is deoptimization?",
    "answer": "It uses runtime profiling to optimize hot paths, inline calls, eliminate checks and apply speculative optimizations. Deoptimization can occur when assumptions stop being valid.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-08",
    "index": 1,
    "question": "Why are cold-start benchmarks different?",
    "answer": "It uses runtime profiling to optimize hot paths, inline calls, eliminate checks and apply speculative optimizations. Deoptimization can occur when assumptions stop being valid.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-09",
    "index": 0,
    "question": "When is a class initialized?",
    "answer": "Superclass initialization precedes subclass initialization, and static fields/blocks execute in textual order within a class. Initialization is synchronized by the JVM so the class is initialized once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-09",
    "index": 1,
    "question": "Does loading equal initialization?",
    "answer": "Superclass initialization precedes subclass initialization, and static fields/blocks execute in textual order within a class. Initialization is synchronized by the JVM so the class is initialized once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-10",
    "index": 0,
    "question": "How do you diagnose a classloader leak?",
    "answer": "If the loader cannot be garbage collected, all classes and metadata it loaded may remain reachable, causing metaspace growth across redeployments.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-10",
    "index": 1,
    "question": "Why are thread pools involved?",
    "answer": "If the loader cannot be garbage collected, all classes and metadata it loaded may remain reachable, causing metaspace growth across redeployments.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-11",
    "index": 0,
    "question": "Can metaspace trigger OutOfMemoryError?",
    "answer": "OutOfMemoryError means the JVM could not satisfy an allocation. Determine whether the pressure is heap, metaspace, direct memory, or another area, then use heap dumps, GC logs, JVM metrics, and allocation profiling to identify the cause.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-11",
    "index": 1,
    "question": "What causes metaspace growth?",
    "answer": "Heap pressure usually manifests as GC and heap OOMs. Metaspace pressure can grow when many classes or class loaders are created, especially in plugin or redeployment scenarios.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-12",
    "index": 0,
    "question": "Are records deeply immutable?",
    "answer": "A record is not automatically deeply immutable. Its components are final references, but a component can still point to a mutable List, Map, array, or custom object. Deep immutability requires immutable components or defensive copying.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-12",
    "index": 1,
    "question": "Can records extend a class?",
    "answer": "A record is shallowly immutable: its component references are final, but referenced mutable objects can still change. Records are excellent for value-like DTOs and keys.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-13",
    "index": 0,
    "question": "Sealed vs final?",
    "answer": "They make a closed hierarchy explicit and can improve modeling and exhaustiveness in pattern matching. The permitted subclasses must follow the sealing rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-13",
    "index": 1,
    "question": "Can a sealed class have an indirect subclass?",
    "answer": "They make a closed hierarchy explicit and can improve modeling and exhaustiveness in pattern matching. The permitted subclasses must follow the sealing rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-14",
    "index": 0,
    "question": "How does flow scoping work?",
    "answer": "It reduces repetitive casts and makes conditional logic clearer. The variable's scope follows the compiler's flow analysis.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-14",
    "index": 1,
    "question": "Does it eliminate ClassCastException?",
    "answer": "It reduces repetitive casts and makes conditional logic clearer. The variable's scope follows the compiler's flow analysis.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-15",
    "index": 0,
    "question": "How does cancellation propagate?",
    "answer": "The parent task controls the lifetime of child tasks, making cancellation, failure propagation and resource management easier to reason about. In Java it is associated with newer concurrency APIs and remains a design concept worth understanding.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-15",
    "index": 1,
    "question": "How is it different from CompletableFuture?",
    "answer": "The parent task controls the lifetime of child tasks, making cancellation, failure propagation and resource management easier to reason about. In Java it is associated with newer concurrency APIs and remains a design concept worth understanding.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-16",
    "index": 0,
    "question": "Why restore the flag?",
    "answer": "Blocking methods may throw InterruptedException, while code should either propagate it or restore the interrupt flag after handling it. Swallowing interruption can break shutdown and cancellation behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-16",
    "index": 1,
    "question": "Is interrupt the same as stopping a thread?",
    "answer": "Blocking methods may throw InterruptedException, while code should either propagate it or restore the interrupt flag after handling it. Swallowing interruption can break shutdown and cancellation behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-19",
    "index": 0,
    "question": "Why are warm-ups needed?",
    "answer": "JMH handles forks, warm-up iterations and measurement infrastructure. For production decisions, microbenchmarks should complement end-to-end profiling rather than replace it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-19",
    "index": 1,
    "question": "What is dead-code elimination?",
    "answer": "JMH handles forks, warm-up iterations and measurement infrastructure. For production decisions, microbenchmarks should complement end-to-end profiling rather than replace it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-20",
    "index": 0,
    "question": "Why is ConcurrentModificationException not guaranteed?",
    "answer": "Fail-fast is a best-effort bug detector, not a thread-safety guarantee. CopyOnWriteArrayList iterates over a snapshot, while concurrent collections provide their own weakly consistent semantics.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-20",
    "index": 1,
    "question": "How does CopyOnWriteArrayList work?",
    "answer": "A defensive copy prevents callers from modifying an object's internal collection through a shared reference. Copy mutable input in the constructor and return an unmodifiable view or copy from the getter when encapsulation requires it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-01",
    "index": 0,
    "question": "What happens with two beans of the same type?",
    "answer": "Dependency resolution considers type and qualifiers and can fail on ambiguity or missing beans. Constructor injection makes required dependencies explicit and supports immutable components.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-01",
    "index": 1,
    "question": "How does @Primary work?",
    "answer": "Dependency resolution considers type and qualifiers and can fail on ambiguity or missing beans. Constructor injection makes required dependencies explicit and supports immutable components.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-02",
    "index": 0,
    "question": "Can Spring inject optional dependencies?",
    "answer": "The object can be instantiated with all required collaborators, fields can be final, and missing dependencies fail early. Field injection hides dependencies and complicates plain unit tests.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-02",
    "index": 1,
    "question": "What about circular dependencies?",
    "answer": "The object can be instantiated with all required collaborators, fields can be final, and missing dependencies fail early. Field injection hides dependencies and complicates plain unit tests.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-03",
    "index": 0,
    "question": "Can @Lazy break a cycle?",
    "answer": "Some setter/field injection cases can be resolved through early references, but constructor cycles cannot be satisfied normally. The best fix is usually redesigning responsibilities rather than relying on lazy workarounds.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-03",
    "index": 1,
    "question": "Why are constructor cycles harder?",
    "answer": "Some setter/field injection cases can be resolved through early references, but constructor cycles cannot be satisfied normally. The best fix is usually redesigning responsibilities rather than relying on lazy workarounds.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-04",
    "index": 0,
    "question": "Where does AOP proxying happen?",
    "answer": "Spring uses post-processors for concerns such as dependency injection, annotation processing and proxy creation. This is a major extension point in the container lifecycle.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-04",
    "index": 1,
    "question": "What is BeanFactoryPostProcessor?",
    "answer": "It operates on metadata rather than bean instances. This distinction is important when understanding configuration processing and how Spring prepares the container.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-05",
    "index": 0,
    "question": "Give an example.",
    "answer": "It operates on metadata rather than bean instances. This distinction is important when understanding configuration processing and how Spring prepares the container.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-05",
    "index": 1,
    "question": "Why must it run early?",
    "answer": "It operates on metadata rather than bean instances. This distinction is important when understanding configuration processing and how Spring prepares the container.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-06",
    "index": 0,
    "question": "Can @Lazy solve circular dependencies?",
    "answer": "It can reduce startup cost but moves initialization latency to first use and can hide configuration errors until runtime. It should not be used to paper over dependency design problems.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-06",
    "index": 1,
    "question": "When is it a bad idea?",
    "answer": "It can reduce startup cost but moves initialization latency to first use and can hide configuration errors until runtime. It should not be used to paper over dependency design problems.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-07",
    "index": 0,
    "question": "How do you roll back for checked exceptions?",
    "answer": "By default, runtime exceptions and errors trigger rollback in typical declarative transaction handling, while checked exceptions may require explicit rollback configuration. The actual behavior depends on the transaction manager and rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-07",
    "index": 1,
    "question": "What if an exception is caught inside the method?",
    "answer": "By default, runtime exceptions and errors trigger rollback in typical declarative transaction handling, while checked exceptions may require explicit rollback configuration. The actual behavior depends on the transaction manager and rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-08",
    "index": 0,
    "question": "Does readOnly prevent INSERT?",
    "answer": "It can influence ORM flush behavior or database handling depending on the stack, but it is not a universal enforcement that prevents writes. It should not replace authorization or application-level rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-08",
    "index": 1,
    "question": "How does Hibernate use it?",
    "answer": "It can influence ORM flush behavior or database handling depending on the stack, but it is not a universal enforcement that prevents writes. It should not replace authorization or application-level rules.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-09",
    "index": 0,
    "question": "How do you add backoff?",
    "answer": "It can manage attempts, backoff and exception classification, but retrying still requires idempotency and timeout boundaries. A framework does not make unsafe operations safe to repeat.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-09",
    "index": 1,
    "question": "What should never be retried?",
    "answer": "It can manage attempts, backoff and exception classification, but retrying still requires idempotency and timeout boundaries. A framework does not make unsafe operations safe to repeat.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-10",
    "index": 0,
    "question": "Why can @Transactional test hide commits?",
    "answer": "Use integration tests when behavior depends on real transaction semantics, rollback, isolation or JPA flush behavior. Unit tests can cover business branching without requiring a database.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-10",
    "index": 1,
    "question": "When do you use Testcontainers?",
    "answer": "Use integration tests when behavior depends on real transaction semantics, rollback, isolation or JPA flush behavior. Unit tests can cover business branching without requiring a database.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-11",
    "index": 0,
    "question": "Testcontainers vs mocks?",
    "answer": "It improves fidelity compared with mocks or embedded substitutes and is valuable for SQL dialect, migrations and integration behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-11",
    "index": 1,
    "question": "How do you keep tests fast?",
    "answer": "It improves fidelity compared with mocks or embedded substitutes and is valuable for SQL dialect, migrations and integration behavior.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-12",
    "index": 0,
    "question": "Which endpoints are sensitive?",
    "answer": "Expose only required endpoints, secure them with authentication/authorization, and avoid returning secrets in configuration or error payloads. Network restrictions can provide another layer.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-12",
    "index": 1,
    "question": "Should /env be public?",
    "answer": "Expose only required endpoints, secure them with authentication/authorization, and avoid returning secrets in configuration or error payloads. Network restrictions can provide another layer.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-13",
    "index": 0,
    "question": "MDC vs tracing?",
    "answer": "Generate one at the edge if absent, validate/limit incoming values, put it into request context and propagate it to downstream calls and logs. Distributed tracing can provide richer context.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-13",
    "index": 1,
    "question": "How do you propagate across async execution?",
    "answer": "Generate one at the edge if absent, validate/limit incoming values, put it into request context and propagate it to downstream calls and logs. Distributed tracing can provide richer context.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-14",
    "index": 0,
    "question": "Are events synchronous by default?",
    "answer": "They are useful for local domain notifications, but they are not a durable distributed message broker. If a business event must survive process failure, use durable messaging or an outbox.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-14",
    "index": 1,
    "question": "How do you make listeners async?",
    "answer": "They are useful for local domain notifications, but they are not a durable distributed message broker. If a business event must survive process failure, use durable messaging or an outbox.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-15",
    "index": 0,
    "question": "AFTER_COMMIT vs AFTER_ROLLBACK?",
    "answer": "This is useful when an in-process action should occur only after successful commit. It is still local to the application and can be lost if the process dies before the listener executes.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-15",
    "index": 1,
    "question": "Can it replace the outbox?",
    "answer": "This is useful when an in-process action should occur only after successful commit. It is still local to the application and can be lost if the process dies before the listener executes.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-16",
    "index": 0,
    "question": "How do you prevent disk exhaustion?",
    "answer": "Use streaming or multipart handling with size limits, content validation, temporary storage and preferably object storage for large payloads. Scan or validate files before making them available.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-16",
    "index": 1,
    "question": "How do you secure uploaded files?",
    "answer": "Use streaming or multipart handling with size limits, content validation, temporary storage and preferably object storage for large payloads. Scan or validate files before making them available.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-17",
    "index": 0,
    "question": "Offset vs keyset?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-17",
    "index": 1,
    "question": "How do you handle deleted rows?",
    "answer": "For large mutable datasets, stable ordering plus keyset pagination is often safer than deep offsets. The API should define limits and deterministic ordering.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-18",
    "index": 0,
    "question": "What if two requests arrive simultaneously?",
    "answer": "Store a key scoped to the client and operation with a unique constraint and outcome. Handle concurrent duplicate requests atomically.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-18",
    "index": 1,
    "question": "How long should keys live?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-19",
    "index": 0,
    "question": "Connect vs response timeout?",
    "answer": "A timeout should align with the end-to-end deadline and be observable. Retrying after a timeout is only safe when the operation is idempotent or otherwise protected.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-19",
    "index": 1,
    "question": "How do you prevent hanging connections?",
    "answer": "A timeout should align with the end-to-end deadline and be observable. Retrying after a timeout is only safe when the operation is idempotent or otherwise protected.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-20",
    "index": 0,
    "question": "ShedLock vs Quartz?",
    "answer": "For cluster-wide singleton work, use a distributed lock, leader election or move the job to a dedicated scheduler/queue. The job itself should also be idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-20",
    "index": 1,
    "question": "What if the lock holder crashes?",
    "answer": "For cluster-wide singleton work, use a distributed lock, leader election or move the job to a dedicated scheduler/queue. The job itself should also be idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-01",
    "index": 0,
    "question": "How do compensations work?",
    "answer": "Orchestration makes workflow visibility and compensation ordering explicit, while choreography reduces central coupling but can become difficult to trace as the number of participants grows.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-01",
    "index": 1,
    "question": "What are the failure trade-offs?",
    "answer": "Orchestration makes workflow visibility and compensation ordering explicit, while choreography reduces central coupling but can become difficult to trace as the number of participants grows.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-02",
    "index": 0,
    "question": "What if compensation partially succeeds?",
    "answer": "Use a unique operation ID, state checks and conditional updates. Compensation should be a business action rather than assuming the exact inverse of every original operation exists.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-02",
    "index": 1,
    "question": "Can compensation restore exact state?",
    "answer": "Use a unique operation ID, state checks and conditional updates. Compensation should be a business action rather than assuming the exact inverse of every original operation exists.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-03",
    "index": 0,
    "question": "Why can a lock expire while work continues?",
    "answer": "Risks include lease expiry, clock assumptions, client pauses and split-brain behavior. Use fencing tokens or database constraints where correctness is critical rather than relying solely on a lock.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-03",
    "index": 1,
    "question": "What is a fencing token?",
    "answer": "When a new lock owner gets a higher token, the storage layer accepts only operations carrying the current or newer token. This protects against a paused old owner resuming later.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-04",
    "index": 0,
    "question": "Where is the token checked?",
    "answer": "When a new lock owner gets a higher token, the storage layer accepts only operations carrying the current or newer token. This protects against a paused old owner resuming later.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-04",
    "index": 1,
    "question": "Can Redis alone guarantee correctness?",
    "answer": "When a new lock owner gets a higher token, the storage layer accepts only operations carrying the current or newer token. This protects against a paused old owner resuming later.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-05",
    "index": 0,
    "question": "Wall clock vs monotonic clock?",
    "answer": "Use logical clocks, sequence numbers, database ordering or server-side timestamps when strict ordering matters. Keep NTP synchronized but don't assume perfect clocks.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-05",
    "index": 1,
    "question": "How does clock skew affect JWT expiry?",
    "answer": "Use logical clocks, sequence numbers, database ordering or server-side timestamps when strict ordering matters. Keep NTP synchronized but don't assume perfect clocks.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-06",
    "index": 0,
    "question": "Backpressure vs rate limiting?",
    "answer": "It can be implemented with bounded queues, concurrency limits, broker flow control and admission control. Without it, queues grow until latency or memory becomes unacceptable.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-06",
    "index": 1,
    "question": "What should happen when capacity is exhausted?",
    "answer": "It can be implemented with bounded queues, concurrency limits, broker flow control and admission control. Without it, queues grow until latency or memory becomes unacceptable.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-08",
    "index": 0,
    "question": "Hedging vs retry?",
    "answer": "It can improve p99 when latency variance is high, but it increases load and can duplicate side effects. It is best suited to idempotent reads with capacity headroom.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-08",
    "index": 1,
    "question": "How do you choose the hedge delay?",
    "answer": "It can improve p99 when latency variance is high, but it increases load and can duplicate side effects. It is best suited to idempotent reads with capacity headroom.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-09",
    "index": 0,
    "question": "What is single-flight?",
    "answer": "Use request coalescing, staggered warming, TTL jitter and bounded database concurrency. A single lock around every key can become another bottleneck.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-09",
    "index": 1,
    "question": "How do you warm a cache safely?",
    "answer": "Use request coalescing, staggered warming, TTL jitter and bounded database concurrency. A single lock around every key can become another bottleneck.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-10",
    "index": 0,
    "question": "Should DLT messages expire?",
    "answer": "Retry destinations are part of normal transient-failure handling. DLTs are an operational quarantine and should include metadata for diagnosis and replay.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-10",
    "index": 1,
    "question": "How do you preserve headers?",
    "answer": "Retry destinations are part of normal transient-failure handling. DLTs are an operational quarantine and should include metadata for diagnosis and replay.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-11",
    "index": 0,
    "question": "EOS vs at-least-once?",
    "answer": "Exactly-once semantics are bounded by the Kafka processing model; external side effects such as a database update still need idempotency or transactional integration.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-11",
    "index": 1,
    "question": "What about a DB write?",
    "answer": "Exactly-once semantics are bounded by the Kafka processing model; external side effects such as a database update still need idempotency or transactional integration.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-12",
    "index": 0,
    "question": "Can you change the key later?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-12",
    "index": 1,
    "question": "What is a hot partition?",
    "answer": "Choose a key that matches the business ordering requirement and distributes load. A hot key can overload one partition even when the topic has many partitions.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-13",
    "index": 0,
    "question": "Can two consumers read the same partition?",
    "answer": "Adding consumers increases parallelism only until all partitions are assigned. More partitions can increase throughput but also affect ordering, storage and operational cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-13",
    "index": 1,
    "question": "How does rebalancing affect this?",
    "answer": "Adding consumers increases parallelism only until all partitions are assigned. More partitions can increase throughput but also affect ordering, storage and operational cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-14",
    "index": 0,
    "question": "How do you verify signatures?",
    "answer": "Persist delivery attempts, sign payloads, use bounded retries with backoff, timeouts, idempotency guidance and a dead-letter state. Track delivery status for operators.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-14",
    "index": 1,
    "question": "How do you avoid retry storms?",
    "answer": "Use retry limits, exponential backoff, jitter, timeouts, circuit breakers, and load shedding to prevent retry storms. Avoid independent retries at every service hop because layered retries can multiply traffic.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-15",
    "index": 0,
    "question": "Backward vs forward compatibility?",
    "answer": "Prefer additive changes and tolerant readers. For breaking semantics, use an explicit version or new event type and migrate consumers gradually.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-15",
    "index": 1,
    "question": "Can consumers ignore unknown fields?",
    "answer": "Prefer additive changes and tolerant readers. For breaking semantics, use an explicit version or new event type and migrate consumers gradually.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-16",
    "index": 0,
    "question": "What does a sidecar do?",
    "answer": "It can provide mTLS, traffic policy, retries, telemetry and routing without duplicating logic in every service, but adds operational complexity and another failure surface.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-16",
    "index": 1,
    "question": "Mesh vs API gateway?",
    "answer": "It can provide mTLS, traffic policy, retries, telemetry and routing without duplicating logic in every service, but adds operational complexity and another failure surface.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-17",
    "index": 0,
    "question": "What is half-open?",
    "answer": "It transitions among closed, open and half-open states based on failures or slow calls. Thresholds should reflect business impact and avoid treating every transient error as permanent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-17",
    "index": 1,
    "question": "Should 4xx open the circuit?",
    "answer": "It transitions among closed, open and half-open states based on failures or slow calls. Thresholds should reflect business impact and avoid treating every transient error as permanent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-18",
    "index": 0,
    "question": "How do you count attempts?",
    "answer": "Observability should record attempt count and event ID. Treat both as expected duplicate paths and keep processing idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-18",
    "index": 1,
    "question": "When is offset committed?",
    "answer": "Observability should record attempt count and event ID. Treat both as expected duplicate paths and keep processing idempotent.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-19",
    "index": 0,
    "question": "What is a slow-call circuit breaker?",
    "answer": "Use deadlines, connection limits, concurrency bulkheads, circuit breakers based on slow-call rate, and fallbacks where safe. Monitor p95/p99 rather than only error rate.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-19",
    "index": 1,
    "question": "How do you protect the thread pool?",
    "answer": "Use deadlines, connection limits, concurrency bulkheads, circuit breakers based on slow-call rate, and fallbacks where safe. Monitor p95/p99 rather than only error rate.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-20",
    "index": 0,
    "question": "When would at-most-once be acceptable?",
    "answer": "At-most-once may lose messages but avoids duplicates; at-least-once may duplicate; effectively-once combines at-least-once transport with idempotent business processing so the observable effect occurs once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-20",
    "index": 1,
    "question": "How do you make a consumer idempotent?",
    "answer": "Make consumption repeat-safe by storing a durable message or business key, enforcing uniqueness, and making the business update conditional or otherwise safe to execute more than once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-01",
    "index": 0,
    "question": "Can every database create one?",
    "answer": "It can reduce index size and improve targeted queries when a stable subset is frequently accessed, such as active records. Support and syntax vary by database.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-01",
    "index": 1,
    "question": "What happens when the predicate changes?",
    "answer": "It can reduce index size and improve targeted queries when a stable subset is frequently accessed, such as active records. Support and syntax vary by database.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-02",
    "index": 0,
    "question": "How is it different from a covering index?",
    "answer": "It can reduce I/O, especially for covering indexes, but maintenance cost and visibility rules still matter.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-02",
    "index": 1,
    "question": "Can MVCC prevent index-only scans?",
    "answer": "It can reduce I/O, especially for covering indexes, but maintenance cost and visibility rules still matter.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-03",
    "index": 0,
    "question": "Why index a foreign key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-03",
    "index": 1,
    "question": "Can foreign keys cause locking?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-04",
    "index": 0,
    "question": "How do you detect leaks?",
    "answer": "Over time active connections reach the pool maximum and requests wait or fail. Proper resource management, pool leak detection and metrics help diagnose it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-04",
    "index": 1,
    "question": "Why does traffic make the issue worse?",
    "answer": "Over time active connections reach the pool maximum and requests wait or fail. Proper resource management, pool leak detection and metrics help diagnose it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-05",
    "index": 0,
    "question": "How does MVCC affect vacuum/cleanup?",
    "answer": "Different databases implement MVCC differently. It improves read/write concurrency but creates version cleanup and isolation considerations.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-05",
    "index": 1,
    "question": "Does MVCC eliminate locks?",
    "answer": "Different databases implement MVCC differently. It improves read/write concurrency but creates version cleanup and isolation considerations.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-06",
    "index": 0,
    "question": "Can you disable escalation?",
    "answer": "Escalation can increase contention and cause unexpected blocking during large operations. Batching and appropriate indexes can reduce the number of locked rows.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-06",
    "index": 1,
    "question": "How does batching help?",
    "answer": "Escalation can increase contention and cause unexpected blocking during large operations. Batching and appropriate indexes can reduce the number of locked rows.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-07",
    "index": 0,
    "question": "Does escaping replace parameterization?",
    "answer": "Parameterized SQL separates the SQL statement structure from user-supplied values, allowing the database driver to bind values instead of concatenating them into the SQL text.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-07",
    "index": 1,
    "question": "What about dynamic table names?",
    "answer": "Parameterized SQL separates the SQL statement structure from user-supplied values, allowing the database driver to bind values instead of concatenating them into the SQL text.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-08",
    "index": 0,
    "question": "How do you handle duplicate requests?",
    "answer": "Use unique business keys, upserts, compare-and-set updates or state checks. The database constraint should enforce uniqueness where correctness depends on it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-08",
    "index": 1,
    "question": "Can DELETE be idempotent?",
    "answer": "Use unique business keys, upserts, compare-and-set updates or state checks. The database constraint should enforce uniqueness where correctness depends on it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-09",
    "index": 0,
    "question": "Can SELECT * prevent index-only access?",
    "answer": "SELECT * increases network payload, deserialization and the set of columns an index must cover. Schema changes can also unexpectedly change its cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-09",
    "index": 1,
    "question": "Why is it a maintenance risk?",
    "answer": "SELECT * increases network payload, deserialization and the set of columns an index must cover. Schema changes can also unexpectedly change its cost.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-10",
    "index": 0,
    "question": "Why are auto-increment IDs not gapless?",
    "answer": "Window functions such as LAG can reveal discontinuities. Whether gaps are a problem depends on the ID generation strategy; auto-increment sequences commonly allow gaps.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-10",
    "index": 1,
    "question": "When do you need a business sequence?",
    "answer": "Window functions such as LAG can reveal discontinuities. Whether gaps are a problem depends on the ID generation strategy; auto-increment sequences commonly allow gaps.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-11",
    "index": 0,
    "question": "How do you prevent cycles?",
    "answer": "A recursive CTE lets a query repeatedly reference its previous result, making it suitable for hierarchical or graph-like relationships such as employee reporting trees or category paths.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-11",
    "index": 1,
    "question": "When would you use application traversal?",
    "answer": "A recursive CTE lets a query repeatedly reference its previous result, making it suitable for hierarchical or graph-like relationships such as employee reporting trees or category paths.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-12",
    "index": 0,
    "question": "How do hot rows cause contention?",
    "answer": "Hot tenants, hot rows and popular products can create contention even when average load looks healthy. Partitioning, caching and sharding strategies must account for skew.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-12",
    "index": 1,
    "question": "How do you mitigate hot keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-13",
    "index": 0,
    "question": "How do indexes increase writes?",
    "answer": "Indexes, WAL/redo logs, page splits, replication and secondary structures can all add write work. It affects storage, I/O and throughput.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-13",
    "index": 1,
    "question": "How does page fragmentation matter?",
    "answer": "Indexes, WAL/redo logs, page splits, replication and secondary structures can all add write work. It affects storage, I/O and throughput.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-14",
    "index": 0,
    "question": "How do you backfill without blocking?",
    "answer": "Use an expand-and-contract migration: introduce the new key representation, backfill, support both versions, migrate references, validate, then remove the old structure.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-14",
    "index": 1,
    "question": "What about foreign keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-15",
    "index": 0,
    "question": "How do you find the blocker?",
    "answer": "Identify the blocking session, SQL statement, transaction age and lock resource. Reduce transaction scope, add indexes, commit sooner or redesign access patterns.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-sql-15",
    "index": 1,
    "question": "Can a slow query cause blocking?",
    "answer": "Identify the blocking session, SQL statement, transaction age and lock resource. Reduce transaction scope, add indexes, commit sooner or redesign access patterns.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-01",
    "index": 0,
    "question": "What is code_verifier?",
    "answer": "The client creates a verifier and sends its challenge to the authorization server. Later it must present the verifier to redeem the code, reducing the impact of an intercepted authorization code.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-01",
    "index": 1,
    "question": "Does PKCE replace TLS?",
    "answer": "Authorization Code with PKCE sends the user through the authorization server, then exchanges a short-lived authorization code using a verifier that only the legitimate client possesses. PKCE protects the code flow against interception and is standard for public clients such as SPAs and mobile apps.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-02",
    "index": 0,
    "question": "What is an ID token?",
    "answer": "It defines an ID token and user identity claims so a client can authenticate a user, while OAuth2 itself primarily defines delegated authorization.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-02",
    "index": 1,
    "question": "Access token vs ID token?",
    "answer": "It defines an ID token and user identity claims so a client can authenticate a user, while OAuth2 itself primarily defines delegated authorization.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-03",
    "index": 0,
    "question": "Why validate audience?",
    "answer": "Check issuer, audience, expiry, not-before and required scopes/roles as appropriate. Algorithm and key selection must be constrained rather than blindly trusting token headers.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-03",
    "index": 1,
    "question": "Can a valid token still be unauthorized?",
    "answer": "Check issuer, audience, expiry, not-before and required scopes/roles as appropriate. Algorithm and key selection must be constrained rather than blindly trusting token headers.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-04",
    "index": 0,
    "question": "Who sets aud?",
    "answer": "A service should reject a token minted for a different service even if its signature is valid. This limits token replay across APIs.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-04",
    "index": 1,
    "question": "What if aud is missing?",
    "answer": "A service should reject a token minted for a different service even if its signature is valid. This limits token replay across APIs.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-05",
    "index": 0,
    "question": "How do you rotate DB passwords?",
    "answer": "Read new secrets from a managed store, reload them safely, and retire old credentials only after consumers have migrated. For signing keys, key IDs and overlapping public keys help.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-05",
    "index": 1,
    "question": "How do you rotate JWT keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-06",
    "index": 0,
    "question": "Role vs permission?",
    "answer": "Apply it to users, service identities, database roles and cloud IAM. Review permissions periodically and separate read, write and administrative actions.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-06",
    "index": 1,
    "question": "How do you review service permissions?",
    "answer": "Apply it to users, service identities, database roles and cloud IAM. Review permissions periodically and separate read, write and administrative actions.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-07",
    "index": 0,
    "question": "How do you redact nested objects?",
    "answer": "Define structured logging policies, redact authorization headers, passwords, tokens and personal data, and review exception logging paths because stack traces and request dumps can expose data.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-07",
    "index": 1,
    "question": "What about debug logging in production?",
    "answer": "Define structured logging policies, redact authorization headers, passwords, tokens and personal data, and review exception logging paths because stack traces and request dumps can expose data.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-08",
    "index": 0,
    "question": "Why is resolving once insufficient?",
    "answer": "Mitigation requires validating the resolved address at connection time or using a trusted egress proxy/allowlist rather than trusting one DNS lookup.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-08",
    "index": 1,
    "question": "How can egress policy help?",
    "answer": "Mitigation requires validating the resolved address at connection time or using a trusted egress proxy/allowlist rather than trusting one DNS lookup.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-09",
    "index": 0,
    "question": "How do nonces work?",
    "answer": "Use short-lived tokens, nonce or timestamp validation for signed requests, idempotency keys for commands, TLS and server-side replay tracking where required.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-09",
    "index": 1,
    "question": "Is JWT expiry enough?",
    "answer": "Use short-lived tokens, nonce or timestamp validation for signed requests, idempotency keys for commands, TLS and server-side replay tracking where required.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-10",
    "index": 0,
    "question": "Should internal APIs skip JWT?",
    "answer": "Require strong identity, explicit authorization, network restrictions, audit logging and possibly step-up authentication for sensitive actions. Keep admin endpoints separate where practical.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-security-10",
    "index": 1,
    "question": "How do you audit admin actions?",
    "answer": "Require strong identity, explicit authorization, network restrictions, audit logging and possibly step-up authentication for sensitive actions. Keep admin endpoints separate where practical.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-01",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Compare characters column by column, or shrink a prefix until every string starts with it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-01",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Compare characters column by column, or shrink a prefix until every string starts with it.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-02",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Track values in a HashSet and return as soon as an insertion fails because the value already exists.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-02",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Track values in a HashSet and return as soon as an insertion fails because the value already exists.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-03",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Put the first array into a set, scan the second, and add matches to a result set.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-03",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Put the first array into a set, scan the second, and add matches to a result set.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-04",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Track the minimum price seen so far and the best profit if selling at the current price.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-04",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Track the minimum price seen so far and the best profit if selling at the current price.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-05",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Count frequencies with a HashMap and return the first value whose count exceeds n/2.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-05",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Count frequencies with a HashMap and return the first value whose count exceeds n/2.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-06",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "XOR all indices and values. Equal values cancel, leaving the missing number.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-06",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "XOR all indices and values. Equal values cancel, leaving the missing number.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-07",
    "index": 0,
    "question": "Why does a duplicate create a cycle?",
    "answer": "Treat the array as a linked structure where each value points to another index, then use Floyd’s cycle detection to find the duplicate. The constraints must guarantee values are in 1..n with n+1 elements and one duplicated value. Under those constraints, the duplicate creates a cycle, so Floyd finds it in O(n) time and O(1) extra space without modifying the array.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-08",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Use a dummy head and repeatedly attach the smaller current node.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-08",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Use a dummy head and repeatedly attach the smaller current node.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-09",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Advance a fast pointer n nodes, then move fast and slow together until fast reaches the end.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-09",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Advance a fast pointer n nodes, then move fast and slow together until fast reaches the end.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-10",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Use an input stack for pushes and transfer to an output stack only when the output stack is empty.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-10",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Use an input stack for pushes and transfer to an output stack only when the output stack is empty.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-11",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Push operands. For an operator, pop the right and left operands, apply the operator, and push the result.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-11",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Push operands. For an operator, pop the right and left operands, apply the operator, and push the result.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-12",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Maintain a max-heap of size k. The heap root is the kth smallest after scanning the array.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-12",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Maintain a max-heap of size k. The heap root is the kth smallest after scanning the array.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-14",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "At every step, one half is sorted. Decide whether the target belongs to that sorted half and discard the other half.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-14",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "At every step, one half is sorted. Decide whether the target belongs to that sorted half and discard the other half.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-15",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Use backtracking: choose an unused character, recurse, then undo the choice.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-15",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Use backtracking: choose an unused character, recurse, then undo the choice.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-16",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Use BFS because every valid transformation has equal cost. Generate one-letter neighbors and visit each word once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-16",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Use BFS because every valid transformation has equal cost. Generate one-letter neighbors and visit each word once.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-17",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "The number of ways to reach n is ways(n-1)+ways(n-2). Keep only the previous two values.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-17",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "The number of ways to reach n is ways(n-1)+ways(n-2). Keep only the previous two values.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-18",
    "index": 0,
    "question": "Can you solve it with a different data structure?",
    "answer": "Maintain the smallest possible tail value for each subsequence length using binary search. This gives O(n log n).",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-18",
    "index": 1,
    "question": "What edge cases would you test?",
    "answer": "Maintain the smallest possible tail value for each subsequence length using binary search. This gives O(n log n).",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-13",
    "index": 0,
    "question": "Can you do it without sorting each word?",
    "answer": "If sorting is only being used to find an extreme or maintain order, consider a single scan with a running maximum/minimum or a hash-based structure. That can reduce O(n log n) sorting to O(n) when the problem does not actually require the full sorted order.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-coding-13",
    "index": 1,
    "question": "How does the solution change for Unicode?",
    "answer": "Use a canonical key for each word, such as its sorted characters, and map that key to a list of words.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-21",
    "index": 0,
    "question": "What is compareAndSet?",
    "answer": "AtomicReference uses CAS-style updates for a single reference. It is useful for lock-free state transitions, but if several fields must change together a monitor or another coordinated design may be clearer.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-java-21",
    "index": 1,
    "question": "When is synchronized simpler?",
    "answer": "AtomicReference uses CAS-style updates for a single reference. It is useful for lock-free state transitions, but if several fields must change together a monitor or another coordinated design may be clearer.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-21",
    "index": 0,
    "question": "How do you detect blocking calls?",
    "answer": "Reactive applications rely on a small number of event-loop threads. Blocking JDBC, file I/O or long CPU work on those threads can stall unrelated requests. Blocking work should use an appropriate scheduler or, preferably, a non-blocking client.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-springboot-21",
    "index": 1,
    "question": "WebFlux vs MVC for JDBC?",
    "answer": "Reactive applications rely on a small number of event-loop threads. Blocking JDBC, file I/O or long CPU work on those threads can stall unrelated requests. Blocking work should use an appropriate scheduler or, preferably, a non-blocking client.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-21",
    "index": 0,
    "question": "What if processing crashes after the business update?",
    "answer": "Use the provider's stable event ID as an idempotency key, persist processing state with a unique constraint, and return success for an already completed event. Keep the transaction that changes business state and records the event ID atomic where possible.",
    "track": "backend"
  },
  {
    "questionId": "v10.6-microservices-21",
    "index": 1,
    "question": "Should the receiver return 2xx for a duplicate?",
    "answer": "Use the provider's stable event ID as an idempotency key, persist processing state with a unique constraint, and return success for an already completed event. Keep the transaction that changes business state and records the event ID atomic where possible.",
    "track": "backend"
  },
  {
    "questionId": "react-001",
    "index": 0,
    "question": "React vs Angular?",
    "answer": "React is a UI library centered on component composition and a virtual DOM, while Angular is a full framework with built-in dependency injection, routing, forms, and RxJS patterns. React gives more architectural freedom; Angular provides more conventions out of the box.",
    "track": "react"
  },
  {
    "questionId": "react-001",
    "index": 1,
    "question": "What is a component?",
    "answer": "A React component is a reusable unit of UI and behavior. A function component receives props, can use hooks for state and effects, and returns JSX that React renders.",
    "track": "react"
  },
  {
    "questionId": "react-001",
    "index": 2,
    "question": "Why is React called declarative?",
    "answer": "React is declarative because the component describes what the UI should look like for a given state, and React decides the DOM updates needed to reach that state. You normally change state instead of manually finding and modifying DOM nodes.",
    "track": "react"
  },
  {
    "questionId": "react-002",
    "index": 0,
    "question": "Why className instead of class?",
    "answer": "JSX uses className because class is a JavaScript reserved keyword in the language syntax. React maps className to the DOM class attribute when rendering HTML.",
    "track": "react"
  },
  {
    "questionId": "react-002",
    "index": 1,
    "question": "Can JSX return multiple elements?",
    "answer": "Yes. A component can return multiple sibling elements by wrapping them in a Fragment, such as <>...</>, or in a single parent element. A Fragment avoids adding an unnecessary DOM node.",
    "track": "react"
  },
  {
    "questionId": "react-002",
    "index": 2,
    "question": "Can we use JavaScript expressions in JSX?",
    "answer": "Yes. JSX supports JavaScript expressions inside curly braces, such as {user.name}, {items.length}, or {isAdmin ? <Admin/> : <User/>}. Statements such as if blocks are not placed directly inside JSX expressions.",
    "track": "react"
  },
  {
    "questionId": "react-003",
    "index": 0,
    "question": "Props vs state?",
    "answer": "Props are inputs supplied by a parent and should be treated as read-only by the receiving component. State is data owned by the component that can change over time and trigger a re-render.",
    "track": "react"
  },
  {
    "questionId": "react-003",
    "index": 1,
    "question": "How do you pass data child to parent?",
    "answer": "The parent passes a callback as a prop to the child. The child calls that callback with the value it wants to send upward, so the parent remains the owner of the state.",
    "track": "react"
  },
  {
    "questionId": "react-003",
    "index": 2,
    "question": "What is prop drilling?",
    "answer": "Prop drilling means passing data through intermediate components only to reach a deeper child. Context or an external store can reduce that plumbing for widely shared state, while normal props remain preferable for simple local ownership.",
    "track": "react"
  },
  {
    "questionId": "react-004",
    "index": 0,
    "question": "Why functional updates?",
    "answer": "Use a functional state update when the next value depends on the previous value, such as setCount(c => c + 1). React applies queued updater functions against the latest pending state.",
    "track": "react"
  },
  {
    "questionId": "react-004",
    "index": 1,
    "question": "Does setState update immediately?",
    "answer": "A state setter schedules an update; code immediately after it should not assume the state variable has already changed. React batches updates and the new value is observed on a later render.",
    "track": "react"
  },
  {
    "questionId": "react-004",
    "index": 2,
    "question": "Can state hold objects or arrays?",
    "answer": "Yes. Objects and arrays can be stored in state, but update them immutably by creating a new object or array instead of mutating the existing reference.",
    "track": "react"
  },
  {
    "questionId": "react-005",
    "index": 0,
    "question": "Controlled vs uncontrolled input?",
    "answer": "Controlled inputs keep their current value in React state; uncontrolled inputs let the DOM own the value and can be read with refs or FormData. Controlled inputs are useful when validation and UI behavior depend on each change.",
    "track": "react"
  },
  {
    "questionId": "react-005",
    "index": 1,
    "question": "What is event bubbling?",
    "answer": "Event bubbling means an event fired on a nested element propagates from the target through its ancestors. React can use this for event delegation, and event.stopPropagation() prevents the event from continuing upward.",
    "track": "react"
  },
  {
    "questionId": "react-006",
    "index": 0,
    "question": "Why is array index a risky key?",
    "answer": "An array index is risky as a key when items can be inserted, removed, or reordered because the same key can become associated with a different item. Stable domain IDs preserve component identity.",
    "track": "react"
  },
  {
    "questionId": "react-006",
    "index": 1,
    "question": "What happens when a key changes?",
    "answer": "Changing a key changes component identity. React can unmount the old instance and mount a new one, which resets local state and effects for that subtree.",
    "track": "react"
  },
  {
    "questionId": "react-007",
    "index": 0,
    "question": "How do you avoid deeply nested JSX?",
    "answer": "Extract repeated or complex sections into components, use composition with children, and move conditional or data-processing logic outside the JSX. This keeps each component focused and easier to test.",
    "track": "react"
  },
  {
    "questionId": "react-008",
    "index": 0,
    "question": "Controlled vs uncontrolled forms?",
    "answer": "Controlled inputs keep their current value in React state; uncontrolled inputs let the DOM own the value and can be read with refs or FormData. Controlled inputs are useful when validation and UI behavior depend on each change.",
    "track": "react"
  },
  {
    "questionId": "react-008",
    "index": 1,
    "question": "How would you handle a large form?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "react"
  },
  {
    "questionId": "react-009",
    "index": 0,
    "question": "What does the dependency array mean?",
    "answer": "The dependency array tells React when an effect must be synchronized again. Listed reactive values trigger re-synchronization when they change; an empty array means the effect has no listed reactive dependencies.",
    "track": "react"
  },
  {
    "questionId": "react-009",
    "index": 1,
    "question": "Why can an effect run twice in development?",
    "answer": "React Strict Mode can intentionally run effect setup and cleanup more than once in development to expose unsafe side effects. This is a development diagnostic and should not be treated as a production guarantee.",
    "track": "react"
  },
  {
    "questionId": "react-009",
    "index": 2,
    "question": "How do you cancel fetch?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "react"
  },
  {
    "questionId": "react-010",
    "index": 0,
    "question": "Does useMemo guarantee caching forever?",
    "answer": "useMemo is a performance optimization, not a permanent cache guarantee. The calculation must remain correct if React decides to recompute it.",
    "track": "react"
  },
  {
    "questionId": "react-010",
    "index": 1,
    "question": "When does React.memo help?",
    "answer": "React.memo can skip a child render when its props compare equal. It is useful when the child is expensive and receives stable props; it does not prevent updates caused by the child's own state or context.",
    "track": "react"
  },
  {
    "questionId": "react-011",
    "index": 0,
    "question": "useRef vs useState?",
    "answer": "useState represents data that affects rendering and triggers re-renders. useRef stores mutable values across renders without triggering a re-render, such as DOM references or timer IDs.",
    "track": "react"
  },
  {
    "questionId": "react-011",
    "index": 1,
    "question": "Can refs replace state?",
    "answer": "useState represents data that affects rendering and triggers re-renders. useRef stores mutable values across renders without triggering a re-render, such as DOM references or timer IDs.",
    "track": "react"
  },
  {
    "questionId": "react-012",
    "index": 0,
    "question": "Rules of Hooks?",
    "answer": "Hooks must be called only at the top level of React function components or custom hooks, never inside loops, conditions, nested functions, or event handlers. React relies on the stable call order to associate hook state correctly.",
    "track": "react"
  },
  {
    "questionId": "react-012",
    "index": 1,
    "question": "Custom hook vs utility function?",
    "answer": "A utility function is ordinary reusable JavaScript logic and cannot use React hooks. A custom hook is a function whose name starts with use and can compose hooks such as useState or useEffect to reuse stateful React behavior.",
    "track": "react"
  },
  {
    "questionId": "react-013",
    "index": 0,
    "question": "Context vs Redux?",
    "answer": "Context is primarily a dependency/value propagation mechanism; Redux is a state-management architecture with a centralized store, actions, reducers, middleware, and strong debugging conventions. Context alone does not provide Redux-style state-transition tooling.",
    "track": "react"
  },
  {
    "questionId": "react-013",
    "index": 1,
    "question": "How can context cause unnecessary renders?",
    "answer": "When a Context provider value changes identity, consumers can re-render even if they use only part of the value. Split contexts, memoize provider values, or move frequently changing state into a more targeted store to reduce unnecessary renders.",
    "track": "react"
  },
  {
    "questionId": "react-014",
    "index": 0,
    "question": "Nested routes?",
    "answer": "Nested routes let a parent route render shared layout or navigation while child routes render inside its outlet. In React Router, the parent route normally renders an <Outlet/> where the matched child route appears.",
    "track": "react"
  },
  {
    "questionId": "react-014",
    "index": 1,
    "question": "Route parameters?",
    "answer": "Route parameters are dynamic URL segments such as /users/:id. The router extracts the value, and the component can use it to load or select the corresponding resource.",
    "track": "react"
  },
  {
    "questionId": "react-014",
    "index": 2,
    "question": "How do you handle a 401?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "react"
  },
  {
    "questionId": "react-015",
    "index": 0,
    "question": "CORS?",
    "answer": "CORS controls whether browser JavaScript from one origin can access responses from another origin. The server communicates its policy with headers such as Access-Control-Allow-Origin and may receive a preflight OPTIONS request for non-simple cross-origin requests. CORS does not stop a backend client from calling the endpoint directly, so authentication and authorization remain mandatory. Credentials such as cookies require additional CORS constraints and cannot be combined with a wildcard allowed origin.",
    "track": "react"
  },
  {
    "questionId": "react-015",
    "index": 1,
    "question": "How do you attach JWT?",
    "answer": "For bearer-token authentication, send the access token in the HTTP Authorization header as `Bearer <token>`. The backend validates the signature, expiry, issuer/audience as configured, and required claims.",
    "track": "react"
  },
  {
    "questionId": "react-015",
    "index": 2,
    "question": "How do you handle 401/403?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "react"
  },
  {
    "questionId": "react-016",
    "index": 0,
    "question": "Retry strategy?",
    "answer": "Retry only transient failures such as timeouts, connection resets, or selected 5xx responses. Use a bounded retry count with exponential backoff and jitter, and avoid automatically retrying non-idempotent operations unless the API provides an idempotency mechanism.",
    "track": "react"
  },
  {
    "questionId": "react-016",
    "index": 1,
    "question": "How do you avoid stale responses?",
    "answer": "Associate each request with the current input or request ID and ignore responses that no longer correspond to the latest state. AbortController can also cancel obsolete browser requests when the underlying API supports cancellation.",
    "track": "react"
  },
  {
    "questionId": "react-017",
    "index": 0,
    "question": "Debounce vs throttle?",
    "answer": "Debounce suits search input where the final value matters. Throttle suits scroll or pointer streams where periodic updates are sufficient.",
    "track": "react"
  },
  {
    "questionId": "react-017",
    "index": 1,
    "question": "How do you cancel previous requests?",
    "answer": "Keep an AbortController for the active request, call abort() before starting the replacement request, and create a new controller for the new request. Handle AbortError separately so cancellation is not shown as a real failure.",
    "track": "react"
  },
  {
    "questionId": "react-018",
    "index": 0,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple but can become expensive at large offsets and can produce duplicates or gaps when data changes. Cursor pagination uses a stable position such as an ID or timestamp and is usually better for large changing datasets.",
    "track": "react"
  },
  {
    "questionId": "react-018",
    "index": 1,
    "question": "How would SQL support this efficiently?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "react"
  },
  {
    "questionId": "react-019",
    "index": 0,
    "question": "Where should tokens be stored?",
    "answer": "For browser applications, prefer short-lived access tokens and keep long-lived refresh credentials in a Secure, HttpOnly, appropriately SameSite cookie when the architecture supports it. Avoid localStorage for sensitive long-lived tokens because JavaScript can read it during an XSS attack.",
    "track": "react"
  },
  {
    "questionId": "react-019",
    "index": 1,
    "question": "Refresh tokens?",
    "answer": "A refresh token is used to obtain a new access token after the short-lived access token expires. Refresh tokens should be protected, rotated when possible, revoked on suspicious use, and never exposed to ordinary application JavaScript when an HttpOnly cookie design is used.",
    "track": "react"
  },
  {
    "questionId": "react-019",
    "index": 2,
    "question": "CSRF with cookies?",
    "answer": "Cookies are sent automatically by the browser, so cookie-authenticated state-changing requests need CSRF protection. Common defenses are SameSite cookies plus a CSRF token checked by the server; CORS alone is not a CSRF defense.",
    "track": "react"
  },
  {
    "questionId": "react-020",
    "index": 0,
    "question": "What is a preflight?",
    "answer": "A CORS preflight is an OPTIONS request sent by the browser before certain cross-origin requests. It asks the server whether the origin, method, and requested headers are allowed.",
    "track": "react"
  },
  {
    "questionId": "react-020",
    "index": 1,
    "question": "Why does Postman ignore CORS?",
    "answer": "CORS is enforced by the browser and controls whether frontend JavaScript from one origin can access another origin's response. The server declares allowed origins, methods and headers. CORS is not an authentication mechanism and does not by itself protect an API from non-browser clients.",
    "track": "react"
  },
  {
    "questionId": "react-020",
    "index": 2,
    "question": "Credentials with CORS?",
    "answer": "CORS is enforced by the browser and controls whether frontend JavaScript from one origin can access another origin's response. The server declares allowed origins, methods and headers. CORS is not an authentication mechanism and does not by itself protect an API from non-browser clients.",
    "track": "react"
  },
  {
    "questionId": "react-021",
    "index": 0,
    "question": "What causes a re-render?",
    "answer": "A component can re-render when its state changes, when its parent renders with changed props, or when a consumed context value changes. A re-render does not automatically mean the DOM is fully replaced; React reconciles the resulting element tree.",
    "track": "react"
  },
  {
    "questionId": "react-021",
    "index": 1,
    "question": "React.memo?",
    "answer": "React.memo skips re-rendering a component when its props are shallowly equal to the previous props. It is useful when a component is expensive and receives stable props, but it does not prevent updates caused by the component itself or by consumed context.",
    "track": "react"
  },
  {
    "questionId": "react-021",
    "index": 2,
    "question": "Keys and state preservation?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "react"
  },
  {
    "questionId": "react-022",
    "index": 0,
    "question": "React.memo vs useMemo?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-022",
    "index": 1,
    "question": "How would you profile a slow page?",
    "answer": "Use the React Profiler and browser Performance tools to identify expensive renders, long tasks, excessive network work, and large bundles. Then measure whether memoization, virtualization, code splitting, or data-fetching changes actually reduce the bottleneck.",
    "track": "react"
  },
  {
    "questionId": "react-023",
    "index": 0,
    "question": "What is a bundle?",
    "answer": "A bundle is the JavaScript and related assets produced by the build system for delivery to the browser. Bundlers resolve module dependencies and can minify, tree-shake, split, and optimize the resulting assets.",
    "track": "react"
  },
  {
    "questionId": "react-023",
    "index": 1,
    "question": "Where would you split a large app?",
    "answer": "Split at route boundaries and other rarely used feature boundaries first. Dynamic import and React.lazy let the browser load a feature only when the user needs it.",
    "track": "react"
  },
  {
    "questionId": "react-024",
    "index": 0,
    "question": "What errors do boundaries catch?",
    "answer": "Error boundaries catch rendering errors in descendant components during rendering and certain lifecycle/constructor phases. They do not catch errors in event handlers, asynchronous callbacks, server-side rendering, or errors thrown by the boundary itself.",
    "track": "react"
  },
  {
    "questionId": "react-024",
    "index": 1,
    "question": "Where should boundaries be placed?",
    "answer": "Place boundaries around meaningful UI regions such as routes, dashboards, or independent widgets so one failure does not blank the whole application. A top-level boundary is still useful as a final fallback.",
    "track": "react"
  },
  {
    "questionId": "react-025",
    "index": 0,
    "question": "Where does global state live?",
    "answer": "Put truly cross-feature client state in a shared store or context, while keeping feature-specific state close to the components that own it. Server state such as cached API data is usually better handled by a query/cache library than by a large global UI store.",
    "track": "react"
  },
  {
    "questionId": "react-025",
    "index": 1,
    "question": "How do you share API clients?",
    "answer": "Create one configured HTTP client module that owns the base URL, common headers, serialization, and shared error handling. Feature services can then call that client instead of duplicating fetch configuration throughout components.",
    "track": "react"
  },
  {
    "questionId": "react-025",
    "index": 2,
    "question": "How would you structure tests?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "react"
  },
  {
    "questionId": "react-026",
    "index": 0,
    "question": "Redux vs Context?",
    "answer": "Context provides values through a component tree; it does not itself provide a complete state-management architecture. Redux adds a centralized store, reducers, middleware, selectors, and tooling, which is useful when that structure solves a real coordination problem.",
    "track": "react"
  },
  {
    "questionId": "react-026",
    "index": 1,
    "question": "Server state vs client state?",
    "answer": "Server state comes from an external backend and needs fetching, caching, synchronization, and invalidation. Client state represents local UI concerns such as modal visibility, drafts, or selected tabs.",
    "track": "react"
  },
  {
    "questionId": "react-027",
    "index": 0,
    "question": "Unit vs integration tests?",
    "answer": "Unit tests isolate a small unit and are fast. Integration tests verify multiple components or boundaries together. A strong frontend suite uses fast behavior-focused component tests plus integration and a smaller number of end-to-end tests for critical flows.",
    "track": "react"
  },
  {
    "questionId": "react-027",
    "index": 1,
    "question": "How do you mock APIs?",
    "answer": "Mock the network boundary rather than internal implementation details. This lets the component exercise realistic loading, success, error, and retry behavior while keeping tests deterministic.",
    "track": "react"
  },
  {
    "questionId": "react-028",
    "index": 0,
    "question": "AbortController?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "react"
  },
  {
    "questionId": "react-028",
    "index": 1,
    "question": "What if the server cannot cancel work?",
    "answer": "Abort the client request to stop waiting for the response, but assume the server may continue processing. Make the server operation idempotent and use a job/status model for long-running work when the client needs reliable progress.",
    "track": "react"
  },
  {
    "questionId": "react-029",
    "index": 0,
    "question": "How do you configure dev vs prod?",
    "answer": "Keep environment-specific values in build/deployment configuration, such as Vite environment variables, rather than hard-coding them in components. Only expose values intended for the browser; secrets must remain on the server.",
    "track": "react"
  },
  {
    "questionId": "react-029",
    "index": 1,
    "question": "Where should API secrets live?",
    "answer": "API secrets must never be shipped to browser JavaScript. Keep them in backend secret storage or deployment environment configuration and have the backend call the protected service.",
    "track": "react"
  },
  {
    "questionId": "react-030",
    "index": 0,
    "question": "Where would you add correlation IDs?",
    "answer": "Generate or propagate a correlation ID at the request boundary and include it in logs and downstream calls. This allows one request to be traced across the browser, gateway, services, and supporting infrastructure.",
    "track": "react"
  },
  {
    "questionId": "react-030",
    "index": 1,
    "question": "How would you troubleshoot 500 vs 401 vs CORS?",
    "answer": "401 indicates missing or invalid authentication, 500 indicates an unhandled server-side failure, and a CORS error is a browser policy problem that can prevent JavaScript from reading the response. Use the browser Network tab and backend logs to distinguish them.",
    "track": "react"
  },
  {
    "questionId": "react-031",
    "index": 0,
    "question": "children vs explicit props?",
    "answer": "Use children when a component is primarily a reusable container or layout and should compose arbitrary content. Use explicit props when the component has named, semantically meaningful inputs such as title, rows, or onSave.",
    "track": "react"
  },
  {
    "questionId": "react-031",
    "index": 1,
    "question": "When would inheritance be useful?",
    "answer": "In React, composition is usually preferred. Inheritance can make sense for framework/library abstractions or ordinary object-oriented domain models, but UI reuse is generally clearer through components, props, and composition.",
    "track": "react"
  },
  {
    "questionId": "react-032",
    "index": 0,
    "question": "What is a single source of truth?",
    "answer": "A single source of truth means one authoritative owner for a piece of state. Other components derive from or update that owner instead of keeping independent copies that can become inconsistent.",
    "track": "react"
  },
  {
    "questionId": "react-032",
    "index": 1,
    "question": "When should state remain local?",
    "answer": "Keep state local when only one component or a small subtree needs it, especially transient UI state such as an input value, modal visibility, or selected tab. Lift it only when multiple consumers genuinely need the same value.",
    "track": "react"
  },
  {
    "questionId": "react-033",
    "index": 0,
    "question": "When should derived data use useMemo?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-033",
    "index": 1,
    "question": "Why is duplicated state risky?",
    "answer": "Duplicated state can become inconsistent because two copies must be updated together. Prefer storing the minimum source data and deriving values such as filtered lists, totals, or labels during rendering.",
    "track": "react"
  },
  {
    "questionId": "react-034",
    "index": 0,
    "question": "useReducer vs useState?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-034",
    "index": 1,
    "question": "Can reducers perform side effects?",
    "answer": "No. Reducers should be pure functions: the same state and action should produce the same next state without API calls, timers, logging side effects, or mutations of external state. Perform effects in event handlers, effects, or a dedicated data layer.",
    "track": "react"
  },
  {
    "questionId": "react-035",
    "index": 0,
    "question": "Does React.memo stop context updates?",
    "answer": "No. A memoized component still re-renders when a context value it consumes changes. To reduce that cost, split contexts or move context consumption into a small component that passes stable props to the memoized component.",
    "track": "react"
  },
  {
    "questionId": "react-035",
    "index": 1,
    "question": "When should contexts be split?",
    "answer": "Split a context when values change at different frequencies or consumers need unrelated subsets. Smaller contexts reduce the number of consumers invalidated by an update and make dependencies clearer.",
    "track": "react"
  },
  {
    "questionId": "react-036",
    "index": 0,
    "question": "When are uncontrolled inputs useful?",
    "answer": "Controlled inputs keep their current value in React state; uncontrolled inputs let the DOM own the value and can be read with refs or FormData. Controlled inputs are useful when validation and UI behavior depend on each change.",
    "track": "react"
  },
  {
    "questionId": "react-036",
    "index": 1,
    "question": "How do file inputs work?",
    "answer": "A file input exposes selected File objects through the input element. Read the FileList, validate type and size, and usually send files with FormData to a multipart endpoint rather than putting binary data into JSON.",
    "track": "react"
  },
  {
    "questionId": "react-037",
    "index": 0,
    "question": "Does cancellation stop server processing?",
    "answer": "Aborting fetch stops the browser from waiting for or consuming the response, but it does not guarantee the server stopped processing. Server-side timeouts and cancellation are separate concerns.",
    "track": "react"
  },
  {
    "questionId": "react-037",
    "index": 1,
    "question": "What happens when fetch is aborted?",
    "answer": "Both can make HTTP requests, but fetch is a built-in browser API while Axios is a library with conveniences such as interceptors and automatic JSON handling. The important engineering choice is consistent error handling, cancellation, authentication behavior and response validation rather than the library name itself.",
    "track": "react"
  },
  {
    "questionId": "react-038",
    "index": 0,
    "question": "When should optimistic updates be avoided?",
    "answer": "Avoid optimistic updates when failure is common, the operation is irreversible, or rollback is difficult to represent correctly. In those cases, wait for authoritative server confirmation.",
    "track": "react"
  },
  {
    "questionId": "react-038",
    "index": 1,
    "question": "How do you handle concurrent edits?",
    "answer": "Optimistic locking uses a version or timestamp so an update succeeds only if the resource is still at the version the user read. A mismatch should produce a conflict response rather than silently overwriting another user's change.",
    "track": "react"
  },
  {
    "questionId": "react-039",
    "index": 0,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple but can become expensive at large offsets and can produce duplicates or gaps when data changes. Cursor pagination uses a stable position such as an ID or timestamp and is usually better for large changing datasets.",
    "track": "react"
  },
  {
    "questionId": "react-039",
    "index": 1,
    "question": "When should pagination be in the URL?",
    "answer": "Put pagination, sorting, and filters in the URL when they affect the page the user may bookmark, share, refresh, or navigate back to. Keep purely transient UI state local.",
    "track": "react"
  },
  {
    "questionId": "react-040",
    "index": 0,
    "question": "When does abstraction become harmful?",
    "answer": "An abstraction becomes harmful when it hides important behavior, has many configuration switches, or is harder to understand than the duplicated code it replaces. Prefer small abstractions around stable, repeated behavior and refactor when a real reuse pattern appears.",
    "track": "react"
  },
  {
    "questionId": "react-040",
    "index": 1,
    "question": "How would you design a reusable table?",
    "answer": "Make the table generic over row data and columns. Pass column definitions such as key, header, formatter, and optional cell renderer; keep sorting, pagination, loading, empty state, and selection as controlled props so different screens can reuse the same component.",
    "track": "react"
  },
  {
    "questionId": "react-041",
    "index": 0,
    "question": "How does changing a key reset state?",
    "answer": "Changing a key changes component identity. React can unmount the old instance and mount a new one, which resets local state and effects for that subtree.",
    "track": "react"
  },
  {
    "questionId": "react-041",
    "index": 1,
    "question": "Why do keys matter beyond warnings?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "react"
  },
  {
    "questionId": "react-042",
    "index": 0,
    "question": "React.memo vs useMemo?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-042",
    "index": 1,
    "question": "Why can object props break memoization?",
    "answer": "React.memo compares object props by reference. Creating `{...}` or `[]` inline on every render gives a new reference, so shallow comparison reports a change even when the contents are equivalent. Memoize stable objects when that optimization is justified.",
    "track": "react"
  },
  {
    "questionId": "react-043",
    "index": 0,
    "question": "Urgent vs transition updates?",
    "answer": "Urgent updates keep interactions responsive, such as typing or clicking. A transition marks non-urgent rendering work so React can prioritize urgent updates and interrupt or defer the transition when necessary.",
    "track": "react"
  },
  {
    "questionId": "react-043",
    "index": 1,
    "question": "How is useDeferredValue different?",
    "answer": "useDeferredValue lets a component render with an older value while React prepares lower-priority work. startTransition marks a state update as non-urgent; useDeferredValue instead defers consumption of an already changing value.",
    "track": "react"
  },
  {
    "questionId": "react-044",
    "index": 0,
    "question": "What happens if a hidden button is called manually?",
    "answer": "CSS visibility or disabled UI does not provide authorization. If the handler can be triggered manually, the backend must still validate authentication, authorization, input, and business rules before performing the operation.",
    "track": "react"
  },
  {
    "questionId": "react-044",
    "index": 1,
    "question": "RBAC vs ABAC?",
    "answer": "RBAC grants permissions through roles, while ABAC evaluates attributes such as user, resource, action, tenant, or environment. RBAC is simpler for stable role models; ABAC is useful when access depends on fine-grained contextual rules.",
    "track": "react"
  },
  {
    "questionId": "react-045",
    "index": 0,
    "question": "What should never be logged?",
    "answer": "Never log passwords, access tokens, refresh tokens, session cookies, API keys, full payment data, or unnecessary personal/customer data. Logs should contain safe identifiers, correlation IDs, timestamps, and diagnostic context with sensitive fields redacted.",
    "track": "react"
  },
  {
    "questionId": "react-045",
    "index": 1,
    "question": "How do you correlate frontend and backend logs?",
    "answer": "Generate or propagate a correlation/trace ID with the request and include it in frontend diagnostics and backend logs. Distributed tracing can then connect the browser request to gateway, service, and database operations.",
    "track": "react"
  },
  {
    "questionId": "react-046",
    "index": 0,
    "question": "When should state stay local?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-046",
    "index": 1,
    "question": "What is derived state?",
    "answer": "Derived state is a value that can be calculated from existing props or state, such as a filtered list or total. It normally should not be stored separately because doing so creates another source of truth.",
    "track": "react"
  },
  {
    "questionId": "react-047",
    "index": 0,
    "question": "When is useMemo justified?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-047",
    "index": 1,
    "question": "What problems does duplicated state cause?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-048",
    "index": 0,
    "question": "useReducer vs useState?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-048",
    "index": 1,
    "question": "Can a reducer perform API calls?",
    "answer": "No. An API call is a side effect and should happen outside the reducer, such as in an event handler, effect, thunk, saga, or server-state library. The reducer should receive an action representing the result.",
    "track": "react"
  },
  {
    "questionId": "react-049",
    "index": 0,
    "question": "Why does setTimeout see old state?",
    "answer": "The callback closes over the state value from the render in which the timeout was created. It can therefore read a stale snapshot. Use a functional state update or a ref when the callback needs the latest mutable value.",
    "track": "react"
  },
  {
    "questionId": "react-049",
    "index": 1,
    "question": "When is a ref useful for latest values?",
    "answer": "A ref is useful for a mutable value that must persist across renders without causing a re-render, such as the latest callback value, DOM node, timer ID, or AbortController. Updating ref.current does not trigger rendering.",
    "track": "react"
  },
  {
    "questionId": "react-050",
    "index": 0,
    "question": "Are state setters synchronous?",
    "answer": "React state setters schedule an update; they do not immediately change the current render's state variable. React may batch updates, and the new state is available during the next render.",
    "track": "react"
  },
  {
    "questionId": "react-050",
    "index": 1,
    "question": "Why does logging state immediately show the old value?",
    "answer": "The current function is executing with the state snapshot from its render. Calling the setter schedules a future render, so a log immediately after the setter still sees the old snapshot.",
    "track": "react"
  },
  {
    "questionId": "react-051",
    "index": 0,
    "question": "How do keys affect reconciliation?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "react"
  },
  {
    "questionId": "react-051",
    "index": 1,
    "question": "Can changing a key be expensive?",
    "answer": "Changing a key changes component identity. React can unmount the old instance and mount a new one, which resets local state and effects for that subtree.",
    "track": "react"
  },
  {
    "questionId": "react-052",
    "index": 0,
    "question": "When should you split context?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-052",
    "index": 1,
    "question": "Context vs Redux?",
    "answer": "Context is primarily a dependency/value propagation mechanism; Redux is a state-management architecture with a centralized store, actions, reducers, middleware, and strong debugging conventions. Context alone does not provide Redux-style state-transition tooling.",
    "track": "react"
  },
  {
    "questionId": "react-053",
    "index": 0,
    "question": "How does AbortController work?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "react"
  },
  {
    "questionId": "react-053",
    "index": 1,
    "question": "What about libraries such as React Query?",
    "answer": "A query library such as TanStack Query manages server state: fetching, caching, deduplication, retries, stale data, refetching, and mutations. That is different from managing local UI state such as modal visibility or form fields.",
    "track": "react"
  },
  {
    "questionId": "react-054",
    "index": 0,
    "question": "When should you avoid optimistic updates?",
    "answer": "Avoid optimistic updates when failure is common, the operation is irreversible, or rollback is difficult to represent correctly. In those cases, wait for authoritative server confirmation.",
    "track": "react"
  },
  {
    "questionId": "react-054",
    "index": 1,
    "question": "How do you handle concurrent mutations?",
    "answer": "Use server-side concurrency controls such as optimistic locking or idempotency keys, and make the UI aware of mutation status. On conflict, refresh the authoritative data and show the user a clear resolution path instead of silently overwriting another update.",
    "track": "react"
  },
  {
    "questionId": "react-055",
    "index": 0,
    "question": "What errors do boundaries not catch?",
    "answer": "They do not catch event-handler errors, errors in asynchronous callbacks such as setTimeout, server-side rendering errors, or errors thrown outside the descendant tree. Handle those with normal try/catch, promise rejection handling, server error handling, or a top-level platform mechanism.",
    "track": "react"
  },
  {
    "questionId": "react-055",
    "index": 1,
    "question": "Where should boundaries be placed?",
    "answer": "Place boundaries around meaningful UI regions such as routes, dashboards, or independent widgets so one failure does not blank the whole application. A top-level boundary is still useful as a final fallback.",
    "track": "react"
  },
  {
    "questionId": "react-056",
    "index": 0,
    "question": "What is code splitting?",
    "answer": "Code splitting divides the application bundle into smaller chunks that can be loaded on demand. Route-level dynamic imports are a common strategy because users do not need every feature on the initial page.",
    "track": "react"
  },
  {
    "questionId": "react-056",
    "index": 1,
    "question": "Can Suspense replace all loading state?",
    "answer": "No. Suspense is useful for components that support Suspense-based data or code loading, but many application data-fetching flows still need explicit loading, error, empty, and retry states.",
    "track": "react"
  },
  {
    "questionId": "react-057",
    "index": 0,
    "question": "What would you look for in the Profiler?",
    "answer": "Look for components rendering frequently, long render durations, large subtrees updating for small changes, unstable props, and expensive calculations. Confirm the actual bottleneck before adding memoization.",
    "track": "react"
  },
  {
    "questionId": "react-057",
    "index": 1,
    "question": "When is virtualization useful?",
    "answer": "Virtualization is useful for very large lists or grids because only the visible rows are mounted. It reduces DOM nodes, rendering work, and memory usage, but adds complexity around variable row heights and scrolling.",
    "track": "react"
  },
  {
    "questionId": "react-058",
    "index": 0,
    "question": "Composition vs inheritance?",
    "answer": "Composition builds components by combining smaller components and passing behavior or content as props. Inheritance creates subclasses. React UI design generally favors composition because it keeps dependencies explicit and avoids rigid class hierarchies.",
    "track": "react"
  },
  {
    "questionId": "react-058",
    "index": 1,
    "question": "When is context better?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-059",
    "index": 0,
    "question": "What belongs in Redux?",
    "answer": "Redux is appropriate for shared client state with complex cross-feature transitions, such as workflows, permissions-driven UI state, or coordinated state updates. Avoid putting every local input or server response into Redux when a local state or query cache is sufficient.",
    "track": "react"
  },
  {
    "questionId": "react-059",
    "index": 1,
    "question": "Why is caching server data difficult?",
    "answer": "Server data can change outside the browser, so cached data can become stale. A good cache needs freshness rules, invalidation, refetching, deduplication, mutation reconciliation, and sometimes optimistic updates or background revalidation.",
    "track": "react"
  },
  {
    "questionId": "react-060",
    "index": 0,
    "question": "Why can an effect appear to run twice?",
    "answer": "In React Strict Mode, development builds may run an effect setup and cleanup cycle twice to expose unsafe side effects. Production does not intentionally double-run the effect this way; the fix is to make setup and cleanup idempotent rather than disabling Strict Mode.",
    "track": "react"
  },
  {
    "questionId": "react-060",
    "index": 1,
    "question": "Should Strict Mode be disabled?",
    "answer": "Usually no. Strict Mode is useful because it exposes unsafe side effects and lifecycle assumptions during development. Fix effects so setup and cleanup are safe instead of hiding the problem by disabling Strict Mode.",
    "track": "react"
  },
  {
    "questionId": "react-061",
    "index": 0,
    "question": "Why can React render twice in development?",
    "answer": "React may intentionally re-render components in development, especially under Strict Mode, to detect impure rendering and unsafe side effects. Rendering should therefore be pure and should not perform subscriptions, mutations, or network calls directly.",
    "track": "react"
  },
  {
    "questionId": "react-061",
    "index": 1,
    "question": "What counts as a side effect?",
    "answer": "A side effect is an operation that interacts with state outside the pure calculation, such as changing a variable, performing I/O, logging, mutating the DOM, or updating storage. Pure functions return results without changing external state.",
    "track": "react"
  },
  {
    "questionId": "react-062",
    "index": 0,
    "question": "Why can setCount(count + 1) lose an update?",
    "answer": "Multiple updates in the same event can read the same captured count value, so both may schedule the same next state. Use the functional form, `setCount(c => c + 1)`, when the next value depends on the previous value.",
    "track": "react"
  },
  {
    "questionId": "react-062",
    "index": 1,
    "question": "Are state updates synchronous?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-063",
    "index": 0,
    "question": "When is derived state justified?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-063",
    "index": 1,
    "question": "When would you use useMemo?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-064",
    "index": 0,
    "question": "When does cleanup run?",
    "answer": "An effect cleanup runs before the effect is re-run when its dependencies change and when the component unmounts. It should cancel timers, unsubscribe listeners, abort requests, and release other resources created by that effect.",
    "track": "react"
  },
  {
    "questionId": "react-064",
    "index": 1,
    "question": "What happens when dependencies change?",
    "answer": "React runs the previous effect cleanup and then runs the effect again with the new dependency values. Every value read from the effect that can change should normally be represented in the dependency list unless it is intentionally stable or otherwise handled.",
    "track": "react"
  },
  {
    "questionId": "react-065",
    "index": 0,
    "question": "When should an effect be used?",
    "answer": "Use an effect to synchronize React with an external system, such as a subscription, timer, browser API, or network request. Do not use an effect just to derive one piece of state from another; calculate derived values during render when possible.",
    "track": "react"
  },
  {
    "questionId": "react-065",
    "index": 1,
    "question": "Why can effect chains be problematic?",
    "answer": "Chained effects can create extra renders, stale intermediate state, ordering problems, and unnecessary API calls. Prefer deriving values during render or performing related state transitions in the event handler that caused them.",
    "track": "react"
  },
  {
    "questionId": "react-066",
    "index": 0,
    "question": "useRef vs useState?",
    "answer": "useState represents data that affects rendering and triggers re-renders. useRef stores mutable values across renders without triggering a re-render, such as DOM references or timer IDs.",
    "track": "react"
  },
  {
    "questionId": "react-066",
    "index": 1,
    "question": "Does changing ref.current re-render?",
    "answer": "No. Changing `ref.current` does not schedule a React render because refs are mutable containers whose changes are not tracked as state. Use state when a UI update is required.",
    "track": "react"
  },
  {
    "questionId": "react-067",
    "index": 0,
    "question": "Can React discard a memoized value?",
    "answer": "Yes. `useMemo` is a performance optimization, not a correctness guarantee. React can recompute the value, so the calculation must remain correct without relying on memoization for semantics.",
    "track": "react"
  },
  {
    "questionId": "react-067",
    "index": 1,
    "question": "useMemo vs useCallback?",
    "answer": "Both can avoid recreating a value between renders when dependencies have not changed, but they should be used for a measured or meaningful performance reason.",
    "track": "react"
  },
  {
    "questionId": "react-068",
    "index": 0,
    "question": "Why does a new function cause a memoized child to render?",
    "answer": "A function created during render has a new reference on each render. `React.memo` compares props by reference, so the child sees the function prop as changed. `useCallback` can stabilize the function reference when that optimization is actually useful.",
    "track": "react"
  },
  {
    "questionId": "react-068",
    "index": 1,
    "question": "When can useCallback hurt readability?",
    "answer": "useCallback memoizes a function reference until its dependencies change. It is useful when a stable callback prevents unnecessary child renders or is required by another memoized hook, but using it everywhere can add complexity without improving performance.",
    "track": "react"
  },
  {
    "questionId": "react-069",
    "index": 0,
    "question": "What does React.memo compare?",
    "answer": "`React.memo` normally performs a shallow comparison of props using `Object.is`. New object, array, or function references therefore count as changed props even when their contents are equivalent.",
    "track": "react"
  },
  {
    "questionId": "react-069",
    "index": 1,
    "question": "How do useMemo and useCallback interact with memo?",
    "answer": "useMemo memoizes a calculated value between renders until its dependencies change. It can avoid expensive recalculation, but it is not a correctness requirement and adds complexity, so I use it only when the computation or referential stability is actually valuable.",
    "track": "react"
  },
  {
    "questionId": "react-070",
    "index": 0,
    "question": "What is urgent vs non-urgent work?",
    "answer": "Urgent work is interaction-critical, such as typing or clicking, and should update immediately. Non-urgent work such as rendering a large filtered result can be scheduled with `startTransition` so React can keep urgent updates responsive.",
    "track": "react"
  },
  {
    "questionId": "react-070",
    "index": 1,
    "question": "Does startTransition make network requests faster?",
    "answer": "No. `startTransition` changes the priority of React state updates; it does not reduce network latency or make the server respond faster. It can keep the UI responsive while React renders the result of an asynchronous operation.",
    "track": "react"
  },
  {
    "questionId": "react-071",
    "index": 0,
    "question": "useDeferredValue vs debounce?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "react"
  },
  {
    "questionId": "react-071",
    "index": 1,
    "question": "Does it delay the source state?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-072",
    "index": 0,
    "question": "Why not use random IDs during render?",
    "answer": "Random IDs change between renders and can cause unstable keys or server/client markup mismatches. Use stable IDs from the data, or React `useId` for IDs that need to connect related DOM elements.",
    "track": "react"
  },
  {
    "questionId": "react-072",
    "index": 1,
    "question": "Can useId be used for keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "react"
  },
  {
    "questionId": "react-073",
    "index": 0,
    "question": "Do events bubble through portals?",
    "answer": "Yes. React portal events propagate through the React component tree even though the DOM nodes are mounted elsewhere. This means a parent React handler can receive an event from content rendered into a portal.",
    "track": "react"
  },
  {
    "questionId": "react-073",
    "index": 1,
    "question": "Why use a portal for a modal?",
    "answer": "A portal renders the modal outside the normal DOM hierarchy, which avoids clipping and stacking-context problems caused by parent containers. The modal can still participate in the same React tree for state and event handling.",
    "track": "react"
  },
  {
    "questionId": "react-074",
    "index": 0,
    "question": "When is an imperative API justified?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "react"
  },
  {
    "questionId": "react-074",
    "index": 1,
    "question": "How does forwardRef relate to refs?",
    "answer": "`forwardRef` lets a component receive a ref from its parent and pass it to a DOM element or another ref-aware component. It is useful when a reusable component needs to expose imperative operations such as focus to its parent.",
    "track": "react"
  },
  {
    "questionId": "react-075",
    "index": 0,
    "question": "Why is an external store different from Context?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-075",
    "index": 1,
    "question": "What is a snapshot?",
    "answer": "A snapshot is a captured representation of rendered output or state at a particular point in time. In testing, a snapshot can detect unintended UI changes, but it should not replace focused behavioral assertions.",
    "track": "react"
  },
  {
    "questionId": "react-076",
    "index": 0,
    "question": "What causes hydration mismatch?",
    "answer": "A hydration mismatch occurs when server-rendered HTML differs from what the client renders initially. Common causes are random values, current timestamps, browser-only APIs, locale differences, or data that changes between server and client.",
    "track": "react"
  },
  {
    "questionId": "react-076",
    "index": 1,
    "question": "SSR vs CSR?",
    "answer": "SSR generates initial HTML on the server and then hydrates it in the browser, improving initial content delivery and often SEO. CSR sends a JavaScript application that builds the UI in the browser; it is simpler but can have slower initial rendering for large applications.",
    "track": "react"
  },
  {
    "questionId": "react-077",
    "index": 0,
    "question": "Why do functions appear as dependencies?",
    "answer": "Functions are objects with reference identity, so a function created during render is a new value on the next render. If an effect uses that function, React sees the dependency as changed; move the function inside the effect or stabilize it with `useCallback` when appropriate.",
    "track": "react"
  },
  {
    "questionId": "react-077",
    "index": 1,
    "question": "How do you stabilize an object dependency?",
    "answer": "Avoid creating the object unnecessarily, or memoize it with `useMemo` when its identity needs to remain stable. Another option is to depend on the primitive fields actually used by the effect instead of the whole object.",
    "track": "react"
  },
  {
    "questionId": "react-078",
    "index": 0,
    "question": "When should state move to Context?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-078",
    "index": 1,
    "question": "How does colocation help performance?",
    "answer": "Measure first using profiling, metrics, and traces. Identify the dominant CPU, rendering, network, database, or allocation cost, then optimize that bottleneck and verify the change with before/after measurements.",
    "track": "react"
  },
  {
    "questionId": "react-079",
    "index": 0,
    "question": "Where should API errors be handled?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "react"
  },
  {
    "questionId": "react-079",
    "index": 1,
    "question": "How do you log frontend failures?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "react"
  },
  {
    "questionId": "react-080",
    "index": 0,
    "question": "How would you profile a slow page?",
    "answer": "Use the React Profiler and browser Performance tools to identify expensive renders, long tasks, excessive network work, and large bundles. Then measure whether memoization, virtualization, code splitting, or data-fetching changes actually reduce the bottleneck.",
    "track": "react"
  },
  {
    "questionId": "react-080",
    "index": 1,
    "question": "When would you virtualize a list?",
    "answer": "Virtualize a list when it contains enough rows that rendering all DOM nodes becomes expensive. Libraries such as react-window render only the visible range, reducing DOM work and improving scrolling performance.",
    "track": "react"
  },
  {
    "questionId": "react-081",
    "index": 0,
    "question": "Feature folder vs layer folder?",
    "answer": "Feature folders group UI, hooks, API code, tests, and types by business capability, which usually keeps related changes together. Layer folders group everything by technical type; that can work for small applications but often becomes harder to navigate as features grow.",
    "track": "react"
  },
  {
    "questionId": "react-081",
    "index": 1,
    "question": "What belongs in shared code?",
    "answer": "Shared code should contain genuinely reusable primitives such as buttons, form controls, API utilities, validation helpers, and common types. Do not move feature-specific logic into shared code just to avoid duplication; wait until the abstraction has a clear reusable contract.",
    "track": "react"
  },
  {
    "questionId": "react-082",
    "index": 0,
    "question": "When would you keep logic together?",
    "answer": "Keep logic together when it changes for the same reason and is used by one feature. Splitting it prematurely can create indirection; extract a hook, service, or utility when the logic has a stable reusable boundary.",
    "track": "react"
  },
  {
    "questionId": "react-082",
    "index": 1,
    "question": "How do custom hooks change this pattern?",
    "answer": "A custom hook extracts reusable stateful behavior while leaving rendering in the component. It can combine effects, state, memoization, and event handlers behind a small API such as `useUsers()` without sharing component state between callers.",
    "track": "react"
  },
  {
    "questionId": "react-083",
    "index": 0,
    "question": "Controlled vs uncontrolled forms?",
    "answer": "Controlled inputs keep their current value in React state; uncontrolled inputs let the DOM own the value and can be read with refs or FormData. Controlled inputs are useful when validation and UI behavior depend on each change.",
    "track": "react"
  },
  {
    "questionId": "react-083",
    "index": 1,
    "question": "How do you handle server validation?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "react"
  },
  {
    "questionId": "react-084",
    "index": 0,
    "question": "Where should auth headers be added?",
    "answer": "Add authentication headers in a centralized HTTP client or request interceptor rather than repeating them in every component. The backend must still validate the token and authorization for every protected operation.",
    "track": "react"
  },
  {
    "questionId": "react-084",
    "index": 1,
    "question": "How do you test the API layer?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "react"
  },
  {
    "questionId": "react-085",
    "index": 0,
    "question": "What should be in local state?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-085",
    "index": 1,
    "question": "Why avoid duplicated state?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "react"
  },
  {
    "questionId": "react-086",
    "index": 0,
    "question": "Client cache vs browser HTTP cache?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "react"
  },
  {
    "questionId": "react-086",
    "index": 1,
    "question": "When should data be invalidated?",
    "answer": "Invalidate cached data after a mutation changes the underlying resource or when a known external event makes the cached value stale. The goal is to prevent stale reads without invalidating unrelated data unnecessarily.",
    "track": "react"
  },
  {
    "questionId": "react-087",
    "index": 0,
    "question": "When should you avoid optimistic UI?",
    "answer": "Avoid optimistic updates when failure is common, the operation is irreversible, or rollback is difficult to represent correctly. In those cases, wait for authoritative server confirmation.",
    "track": "react"
  },
  {
    "questionId": "react-087",
    "index": 1,
    "question": "How do you prevent duplicate mutations?",
    "answer": "Use a client-side pending guard for user experience and an idempotency key or unique business constraint on the backend for correctness. The server should treat repeated requests with the same key as the same operation.",
    "track": "react"
  },
  {
    "questionId": "react-088",
    "index": 0,
    "question": "Why use a portal?",
    "answer": "A portal is useful when UI needs to escape its parent DOM constraints, especially for modals, dialogs, tooltips, and overlays affected by `overflow` or stacking contexts. The component remains in the same React tree.",
    "track": "react"
  },
  {
    "questionId": "react-088",
    "index": 1,
    "question": "How do you trap focus?",
    "answer": "When a modal opens, move focus into the dialog and keep keyboard Tab navigation within its focusable elements. On close, restore focus to the element that opened the modal and ensure the dialog has an appropriate accessible name.",
    "track": "react"
  },
  {
    "questionId": "react-089",
    "index": 0,
    "question": "How do you test accessibility?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "react"
  },
  {
    "questionId": "react-089",
    "index": 1,
    "question": "Button vs div with onClick?",
    "answer": "Use a `<button>` for an action because it provides keyboard interaction, focus behavior, semantics, and accessibility by default. A `<div onClick>` requires manually reproducing those behaviors and is usually the wrong semantic element.",
    "track": "react"
  },
  {
    "questionId": "react-090",
    "index": 0,
    "question": "How do you manage focus after form errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "react"
  },
  {
    "questionId": "react-090",
    "index": 1,
    "question": "What is a roving tabindex?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "react"
  },
  {
    "questionId": "react-091",
    "index": 0,
    "question": "Where should logging happen?",
    "answer": "Log at meaningful boundaries such as API clients, service layers, error boundaries, and important user actions. Avoid logging sensitive data, and include structured fields such as request ID, operation, status, and duration so logs can be correlated.",
    "track": "react"
  },
  {
    "questionId": "react-091",
    "index": 1,
    "question": "How do you handle 401 vs 500?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "react"
  },
  {
    "questionId": "react-092",
    "index": 0,
    "question": "How do you avoid layout shift?",
    "answer": "Reserve space for images and dynamic content, provide explicit dimensions or aspect ratios, avoid inserting content above existing content, and use stable loading placeholders. This keeps the layout geometry predictable while data loads.",
    "track": "react"
  },
  {
    "questionId": "react-092",
    "index": 1,
    "question": "When should a button show a spinner?",
    "answer": "Show a spinner when an operation takes long enough that the user needs feedback, while keeping the button disabled or otherwise protected from duplicate submission. For very fast actions, an inline pending state can be less distracting than a large spinner.",
    "track": "react"
  },
  {
    "questionId": "react-093",
    "index": 0,
    "question": "Debounce vs throttle?",
    "answer": "Debounce suits search input where the final value matters. Throttle suits scroll or pointer streams where periodic updates are sufficient.",
    "track": "react"
  },
  {
    "questionId": "react-093",
    "index": 1,
    "question": "What happens when AbortController aborts?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "react"
  },
  {
    "questionId": "react-094",
    "index": 0,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple but can become expensive at large offsets and can produce duplicates or gaps when data changes. Cursor pagination uses a stable position such as an ID or timestamp and is usually better for large changing datasets.",
    "track": "react"
  },
  {
    "questionId": "react-094",
    "index": 1,
    "question": "How do you preserve filters when changing pages?",
    "answer": "Keep filter and sort state outside the individual page component, for example in URL query parameters or shared state. When the page changes, send the same filters and sort values with the new page request.",
    "track": "react"
  },
  {
    "questionId": "react-095",
    "index": 0,
    "question": "How do you upload multiple files?",
    "answer": "Use `FormData` with one multipart field per file, validate size and type on both client and server, and upload to a controlled storage service. The backend should treat client-provided filenames and MIME types as untrusted input.",
    "track": "react"
  },
  {
    "questionId": "react-095",
    "index": 1,
    "question": "Where should file type validation happen?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "react"
  },
  {
    "questionId": "react-096",
    "index": 0,
    "question": "Where should roles be stored?",
    "answer": "Roles should be authoritative on the server, commonly in the identity/authorization store or trusted token claims. The frontend may receive roles to control presentation, but it must never be the final authorization check.",
    "track": "react"
  },
  {
    "questionId": "react-096",
    "index": 1,
    "question": "How should the UI handle 403?",
    "answer": "HTTP 403 indicates that the request is understood but the authenticated principal is not allowed to perform the operation. It is normally an authorization decision, not a signal that the client should simply send the same credentials again.",
    "track": "react"
  },
  {
    "questionId": "react-097",
    "index": 0,
    "question": "Where do secrets belong?",
    "answer": "Secrets belong in a server-side secret manager or protected environment configuration, never in React source code or public environment variables. Anything shipped to the browser must be considered public.",
    "track": "react"
  },
  {
    "questionId": "react-097",
    "index": 1,
    "question": "Build-time vs runtime configuration?",
    "answer": "Build-time frontend configuration is embedded when the bundle is created, so changing it normally requires a rebuild. Runtime configuration can be loaded when the app starts, allowing the same artifact to be promoted between environments.",
    "track": "react"
  },
  {
    "questionId": "react-098",
    "index": 0,
    "question": "What is preloading?",
    "answer": "Preloading tells the browser to fetch a resource that is likely to be needed soon, such as a critical font or route chunk. It should be used selectively because unnecessary preloads compete for bandwidth with truly critical resources.",
    "track": "react"
  },
  {
    "questionId": "react-098",
    "index": 1,
    "question": "How do Suspense boundaries affect UX?",
    "answer": "A Suspense boundary defines which part of the UI can show a fallback while its content is waiting. Smaller, intentional boundaries can keep the rest of the page interactive instead of replacing the entire screen with one global loader.",
    "track": "react"
  },
  {
    "questionId": "react-099",
    "index": 0,
    "question": "What should not be logged?",
    "answer": "Do not log passwords, access tokens, session cookies, card data, secrets, or unnecessary personal information. Redact sensitive fields and define retention and access controls for logs.",
    "track": "react"
  },
  {
    "questionId": "react-099",
    "index": 1,
    "question": "How do request IDs help?",
    "answer": "A request ID uniquely correlates logs and traces for one request as it crosses services. Returning or propagating that ID lets developers trace a failure from the browser through the API gateway and downstream services.",
    "track": "react"
  },
  {
    "questionId": "react-100",
    "index": 0,
    "question": "How would you structure a large React feature?",
    "answer": "Group code by business feature, with components, hooks, API calls, types, tests, and state close to the feature that owns them. Keep truly shared primitives in a separate shared layer and expose a small public API from each feature.",
    "track": "react"
  },
  {
    "questionId": "react-100",
    "index": 1,
    "question": "How would you debug it in production?",
    "answer": "Start with the user-visible symptom and request/trace ID, then inspect browser errors, network responses, backend logs, metrics, and traces in that order. Compare the failing release with the last known-good release and reproduce using the same inputs before changing code.",
    "track": "react"
  },
  {
    "questionId": "js-001",
    "index": 0,
    "question": "JavaScript vs Java?",
    "answer": "JavaScript and Java are different languages. Java is statically typed and commonly runs on the JVM, while JavaScript is dynamically typed and commonly runs in browsers or JavaScript runtimes such as Node.js.",
    "track": "javascript"
  },
  {
    "questionId": "js-001",
    "index": 1,
    "question": "What is the difference between a language and a runtime?",
    "answer": "A language defines syntax and semantics; a runtime provides the environment that executes that language. For example, ECMAScript defines JavaScript behavior while V8 implements a JavaScript engine and Node.js adds server-side APIs around an engine.",
    "track": "javascript"
  },
  {
    "questionId": "js-001",
    "index": 2,
    "question": "What does V8 do?",
    "answer": "V8 parses and executes JavaScript, uses an interpreter and JIT compilation to optimize hot code, manages memory with garbage collection, and implements the ECMAScript language. Node.js embeds V8 and adds APIs for files, networking, processes, and other server-side operations.",
    "track": "javascript"
  },
  {
    "questionId": "js-002",
    "index": 0,
    "question": "What is the temporal dead zone?",
    "answer": "The temporal dead zone is the period between entering a block scope and the execution of a let, const, or class declaration. Accessing the binding before its declaration executes throws a ReferenceError.",
    "track": "javascript"
  },
  {
    "questionId": "js-002",
    "index": 1,
    "question": "Can a const object be changed?",
    "answer": "Yes. const prevents reassignment of the variable binding, not mutation of the referenced object. `const user = {}; user.name = \"A\"` is valid, while `user = {}` is not.",
    "track": "javascript"
  },
  {
    "questionId": "js-002",
    "index": 2,
    "question": "What does hoisting mean?",
    "answer": "Hoisting describes how JavaScript creates bindings before executing a scope. Function declarations are callable before their source position; var is initialized to undefined; let, const, and class bindings exist but remain in the temporal dead zone until initialization.",
    "track": "javascript"
  },
  {
    "questionId": "js-003",
    "index": 0,
    "question": "Is JavaScript pass-by-reference?",
    "answer": "JavaScript passes arguments by value. When the value is an object reference, the copied value points to the same object, so mutating that object is visible through both references, while reassigning one parameter is not.",
    "track": "javascript"
  },
  {
    "questionId": "js-003",
    "index": 1,
    "question": "How do you clone an object?",
    "answer": "For a shallow clone use `{...obj}` or Object.assign. For structured data with supported types, structuredClone() creates a deep clone. Choose the method based on the object types and whether nested references must be independent.",
    "track": "javascript"
  },
  {
    "questionId": "js-003",
    "index": 2,
    "question": "What is shallow copy vs deep copy?",
    "answer": "A shallow copy creates a new outer object but keeps references to nested objects. A deep copy recursively creates independent nested data. Shallow copies are usually enough for immutable updates when each changed nested level is copied.",
    "track": "javascript"
  },
  {
    "questionId": "js-004",
    "index": 0,
    "question": "Why is NaN !== NaN?",
    "answer": "NaN represents an invalid numeric result and follows the IEEE floating-point NaN comparison rule: it is not equal to itself. Use Number.isNaN(value) to test specifically for NaN.",
    "track": "javascript"
  },
  {
    "questionId": "js-004",
    "index": 1,
    "question": "What does Object.is do?",
    "answer": "Object.is performs SameValue comparison. Unlike ===, it treats NaN as equal to itself and distinguishes +0 from -0.",
    "track": "javascript"
  },
  {
    "questionId": "js-004",
    "index": 2,
    "question": "What is type coercion?",
    "answer": "Type coercion is JavaScript converting a value from one type to another during an operation. For example, `\"5\" + 1` produces `\"51\"`, while `\"5\" - 1` produces `4`. Prefer explicit conversion when coercion could be ambiguous.",
    "track": "javascript"
  },
  {
    "questionId": "js-005",
    "index": 0,
    "question": "What is the difference between || and ??",
    "answer": "`||` falls back when the left side is any falsy value such as 0, false, empty string, null, or undefined. `??` falls back only for null or undefined, so it is safer when 0 or false are valid values.",
    "track": "javascript"
  },
  {
    "questionId": "js-005",
    "index": 1,
    "question": "When would Boolean(value) be useful?",
    "answer": "Boolean(value) explicitly converts a value to true or false using JavaScript truthiness rules. It is useful when normalizing input or making the conversion obvious instead of relying on implicit coercion.",
    "track": "javascript"
  },
  {
    "questionId": "js-006",
    "index": 0,
    "question": "What is the temporal dead zone?",
    "answer": "The temporal dead zone is the period between entering a block scope and the execution of a let, const, or class declaration. Accessing the binding before its declaration executes throws a ReferenceError.",
    "track": "javascript"
  },
  {
    "questionId": "js-006",
    "index": 1,
    "question": "Are function expressions hoisted?",
    "answer": "The variable binding follows its declaration rules, but a function expression is not callable before the assignment has executed. With `const` or `let`, accessing it before initialization throws a ReferenceError; with `var`, the variable is undefined.",
    "track": "javascript"
  },
  {
    "questionId": "js-006",
    "index": 2,
    "question": "What happens with class declarations?",
    "answer": "Class declarations are hoisted as lexical bindings but remain in the temporal dead zone until execution reaches the declaration. Accessing the class before that point throws a ReferenceError.",
    "track": "javascript"
  },
  {
    "questionId": "js-007",
    "index": 0,
    "question": "What is a closure?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-007",
    "index": 1,
    "question": "What is the scope chain?",
    "answer": "When JavaScript resolves an identifier, it first checks the current lexical scope and then walks outward through enclosing scopes until it reaches the global scope. Closures preserve access to this lexical environment.",
    "track": "javascript"
  },
  {
    "questionId": "js-007",
    "index": 2,
    "question": "How do modules affect global scope?",
    "answer": "Top-level variables in ES modules are module-scoped rather than automatically becoming properties of window. Modules expose values explicitly through export/import, which reduces accidental global coupling.",
    "track": "javascript"
  },
  {
    "questionId": "js-008",
    "index": 0,
    "question": "Where are closures used in React?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-008",
    "index": 1,
    "question": "Can closures cause stale state?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-008",
    "index": 2,
    "question": "How can closures retain memory?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-009",
    "index": 0,
    "question": "call vs apply vs bind?",
    "answer": "call invokes a function immediately with a chosen this value and individual arguments. apply also invokes immediately but takes arguments as an array-like value. bind returns a new function with this and optionally leading arguments fixed for later invocation.",
    "track": "javascript"
  },
  {
    "questionId": "js-009",
    "index": 1,
    "question": "Why do arrow functions help in callbacks?",
    "answer": "Arrow functions capture this lexically from the surrounding scope, so they do not create their own this binding. This is convenient for callbacks that need the surrounding component/object context.",
    "track": "javascript"
  },
  {
    "questionId": "js-009",
    "index": 2,
    "question": "What happens when a method is detached?",
    "answer": "A normal method can lose its receiver when assigned to a variable, so its this value depends on how it is called. Bind the method, wrap it in a function, or use an arrow function where appropriate to preserve the intended context.",
    "track": "javascript"
  },
  {
    "questionId": "js-010",
    "index": 0,
    "question": "Can arrow functions be constructors?",
    "answer": "No. Arrow functions do not have their own prototype and cannot be used with new. Calling an arrow function with new throws a TypeError.",
    "track": "javascript"
  },
  {
    "questionId": "js-010",
    "index": 1,
    "question": "What is an implicit return?",
    "answer": "An arrow function with an expression body returns that expression automatically, for example `const double = n => n * 2`. If the body uses braces, an explicit return statement is required.",
    "track": "javascript"
  },
  {
    "questionId": "js-010",
    "index": 2,
    "question": "How does this differ from a regular function?",
    "answer": "An arrow function does not create its own `this`, `arguments`, or `prototype`; it captures `this` lexically from the surrounding scope. A regular function gets `this` from how it is called and can be used as a constructor.",
    "track": "javascript"
  },
  {
    "questionId": "js-011",
    "index": 0,
    "question": "Are function expressions hoisted?",
    "answer": "The variable binding follows its declaration rules, but a function expression is not callable before the assignment has executed. With `const` or `let`, accessing it before initialization throws a ReferenceError; with `var`, the variable is undefined.",
    "track": "javascript"
  },
  {
    "questionId": "js-011",
    "index": 1,
    "question": "What is a named function expression?",
    "answer": "It is a function expression with an internal name, such as `const f = function calculate() {}`. The name is useful for recursion and stack traces, while the function is still assigned like any other expression.",
    "track": "javascript"
  },
  {
    "questionId": "js-012",
    "index": 0,
    "question": "How are default parameters evaluated?",
    "answer": "Default parameter expressions are evaluated at call time only when the corresponding argument is `undefined`. They can reference earlier parameters but not later parameters that are not yet initialized.",
    "track": "javascript"
  },
  {
    "questionId": "js-012",
    "index": 1,
    "question": "Can one default parameter reference another?",
    "answer": "Yes, a later default parameter can reference an earlier parameter, such as `(a, b = a * 2)`. The reverse order does not work because the later binding is not initialized yet.",
    "track": "javascript"
  },
  {
    "questionId": "js-013",
    "index": 0,
    "question": "Rest vs spread?",
    "answer": "Rest collects multiple values into an array or object, while spread expands an iterable or object into individual elements/properties. The same `...` syntax has opposite roles depending on where it appears.",
    "track": "javascript"
  },
  {
    "questionId": "js-013",
    "index": 1,
    "question": "Can there be two rest parameters?",
    "answer": "No. A function can have only one rest parameter, and it must be the final parameter because it consumes all remaining arguments.",
    "track": "javascript"
  },
  {
    "questionId": "js-014",
    "index": 0,
    "question": "How do you deep clone safely?",
    "answer": "Use `structuredClone` for supported structured data when you need an independent deep copy. It handles many built-in types and cycles, unlike JSON serialization, but it cannot clone functions and several host-specific values.",
    "track": "javascript"
  },
  {
    "questionId": "js-014",
    "index": 1,
    "question": "What happens with duplicate object keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "javascript"
  },
  {
    "questionId": "js-014",
    "index": 2,
    "question": "Spread vs Object.assign?",
    "answer": "Both can create shallow object copies. Spread is concise and naturally used in object literals; Object.assign mutates its first target object and copies enumerable own properties from the sources.",
    "track": "javascript"
  },
  {
    "questionId": "js-015",
    "index": 0,
    "question": "How do defaults work in destructuring?",
    "answer": "A destructuring default is used only when the property or element is undefined. A null value does not trigger the default.",
    "track": "javascript"
  },
  {
    "questionId": "js-015",
    "index": 1,
    "question": "Can you destructure nested objects?",
    "answer": "Yes. Destructuring can match nested object and array structures, for example `const { address: { city } } = user`. Use defaults when nested objects may be missing.",
    "track": "javascript"
  },
  {
    "questionId": "js-016",
    "index": 0,
    "question": "map vs forEach?",
    "answer": "map transforms every element and returns a new array of mapped results. forEach executes a callback for each element and returns undefined, so it is used for side effects rather than building a transformed array.",
    "track": "javascript"
  },
  {
    "questionId": "js-016",
    "index": 1,
    "question": "How do you group with reduce?",
    "answer": "Use an accumulator object or `Map` keyed by the grouping field. For example, `reduce((groups, item) => { (groups[item.type] ??= []).push(item); return groups; }, {})` creates arrays of items for each type.",
    "track": "javascript"
  },
  {
    "questionId": "js-016",
    "index": 2,
    "question": "What is the complexity of these methods?",
    "answer": "For normal arrays, `map`, `filter`, `reduce`, `find`, and `includes` are O(n) in the worst case. `Set.has` and `Map.get` are expected O(1), while sorting is typically O(n log n).",
    "track": "javascript"
  },
  {
    "questionId": "js-017",
    "index": 0,
    "question": "What does find return when nothing matches?",
    "answer": "Array.find() returns undefined when no element satisfies the predicate. Check for undefined before using the result as an object.",
    "track": "javascript"
  },
  {
    "questionId": "js-017",
    "index": 1,
    "question": "some vs includes?",
    "answer": "some tests whether at least one element satisfies a predicate, while includes checks whether an array contains a specific value using SameValueZero comparison. Use some for conditional logic and includes for direct membership checks.",
    "track": "javascript"
  },
  {
    "questionId": "js-018",
    "index": 0,
    "question": "Promise.all vs allSettled?",
    "answer": "Promise.all fulfills when every promise fulfills and rejects as soon as one rejects. Promise.allSettled waits for every promise and returns each outcome, making it useful when partial failures must be reported.",
    "track": "javascript"
  },
  {
    "questionId": "js-018",
    "index": 1,
    "question": "What happens when then returns a Promise?",
    "answer": "The promise returned by then adopts the state of the returned promise. This is how promise chains flatten asynchronous operations instead of creating nested promises.",
    "track": "javascript"
  },
  {
    "questionId": "js-018",
    "index": 2,
    "question": "Can a Promise be cancelled?",
    "answer": "Promises themselves do not have a cancellation operation. For browser I/O such as fetch, AbortController can signal cancellation to the underlying operation; otherwise you can ignore late results even if the work continues.",
    "track": "javascript"
  },
  {
    "questionId": "js-019",
    "index": 0,
    "question": "Does await block the browser?",
    "answer": "await suspends only the current async function until the promise settles; it does not block the browser thread. Other tasks and rendering can continue while the asynchronous operation is pending.",
    "track": "javascript"
  },
  {
    "questionId": "js-019",
    "index": 1,
    "question": "How do you run independent requests concurrently?",
    "answer": "Start both promises before awaiting them, then use `await Promise.all([requestA(), requestB()])`. This allows independent network operations to overlap instead of waiting for the first one before starting the second.",
    "track": "javascript"
  },
  {
    "questionId": "js-019",
    "index": 2,
    "question": "What does an async function return?",
    "answer": "An async function always returns a Promise. Returning a normal value fulfills that promise with the value; throwing an error rejects it.",
    "track": "javascript"
  },
  {
    "questionId": "js-020",
    "index": 0,
    "question": "What happens when one Promise rejects in all?",
    "answer": "Promise.all rejects as soon as one input promise rejects. Other promises may still continue running because Promise.all does not cancel them automatically.",
    "track": "javascript"
  },
  {
    "questionId": "js-020",
    "index": 1,
    "question": "How would you add timeouts?",
    "answer": "Race the operation against a timeout or, for fetch, use AbortController with a timer. Clear the timer when the request settles and distinguish timeout/cancellation from normal application errors.",
    "track": "javascript"
  },
  {
    "questionId": "js-021",
    "index": 0,
    "question": "Microtask vs macrotask?",
    "answer": "Promise callbacks and queueMicrotask run in the microtask queue, while timers and many I/O callbacks are scheduled as tasks/macrotasks. The runtime drains microtasks after the current task before moving to another task, so a long microtask chain can delay rendering.",
    "track": "javascript"
  },
  {
    "questionId": "js-021",
    "index": 1,
    "question": "Why can a long loop freeze the UI?",
    "answer": "Browser JavaScript normally runs on the main thread, so a long synchronous loop prevents the event loop from processing input, rendering, and other tasks. Break large work into chunks or move CPU-heavy work to a Web Worker.",
    "track": "javascript"
  },
  {
    "questionId": "js-021",
    "index": 2,
    "question": "How does Node.js differ?",
    "answer": "Node.js runs JavaScript outside the browser using the V8 engine and provides server-side APIs such as filesystem and networking. Its event loop and non-blocking I/O model are designed for server workloads rather than DOM rendering.",
    "track": "javascript"
  },
  {
    "questionId": "js-022",
    "index": 0,
    "question": "Where does rendering happen relative to tasks?",
    "answer": "The browser runs JavaScript tasks, then drains microtasks, and when the browser has an opportunity it can perform rendering. Long tasks or a large microtask chain can delay painting and make the UI unresponsive.",
    "track": "javascript"
  },
  {
    "questionId": "js-022",
    "index": 1,
    "question": "Can microtasks starve the event loop?",
    "answer": "The event loop coordinates JavaScript's call stack with queues of asynchronous callbacks. Synchronous code runs first; after the current stack is empty, microtasks such as Promise callbacks are processed before the event loop proceeds to the next task. This ordering matters when debugging async execution.",
    "track": "javascript"
  },
  {
    "questionId": "js-023",
    "index": 0,
    "question": "How do you implement debounce?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-023",
    "index": 1,
    "question": "What is setInterval drift?",
    "answer": "setInterval does not guarantee exact execution times. Callback execution is delayed by other work on the event loop, so repeated execution can drift. For precise scheduling, calculate the next target time rather than blindly adding a fixed interval.",
    "track": "javascript"
  },
  {
    "questionId": "js-024",
    "index": 0,
    "question": "Named vs default export?",
    "answer": "A named export is imported using its exported name and a module can have multiple named exports. A default export represents the module's primary exported value and can be imported with an arbitrary local name.",
    "track": "javascript"
  },
  {
    "questionId": "js-024",
    "index": 1,
    "question": "What is tree-shaking?",
    "answer": "Tree-shaking is a build-time optimization that removes unused statically analyzable module exports from the production bundle. ES module import/export syntax enables reliable dead-code analysis.",
    "track": "javascript"
  },
  {
    "questionId": "js-024",
    "index": 2,
    "question": "How are circular dependencies handled?",
    "answer": "Modules can reference each other, but circular dependencies may expose partially initialized bindings and create order-dependent behavior. Break unnecessary cycles by extracting shared contracts or lower-level modules.",
    "track": "javascript"
  },
  {
    "questionId": "js-025",
    "index": 0,
    "question": "?? vs ||?",
    "answer": "Strict equality compares both type and value, with special rules for numbers such as NaN. Loose equality follows a larger coercion algorithm, which can produce surprising results. Production code normally prefers === unless loose equality is intentionally required.",
    "track": "javascript"
  },
  {
    "questionId": "js-025",
    "index": 1,
    "question": "What does optional chaining return?",
    "answer": "Optional chaining returns undefined when the value immediately before the chain is null or undefined; otherwise it continues the access or call. It prevents a TypeError for that nullish path.",
    "track": "javascript"
  },
  {
    "questionId": "js-026",
    "index": 0,
    "question": "Map vs plain object?",
    "answer": "Map supports keys of any type, preserves insertion order, and has dedicated methods such as get, set, and has. Plain objects are better suited to simple record-like data with string or symbol keys.",
    "track": "javascript"
  },
  {
    "questionId": "js-026",
    "index": 1,
    "question": "How do you remove duplicates with Set?",
    "answer": "Create a Set from the iterable and then convert it back when an array is needed: `[...new Set(values)]`. Set uses SameValueZero equality for membership.",
    "track": "javascript"
  },
  {
    "questionId": "js-026",
    "index": 2,
    "question": "WeakMap use cases?",
    "answer": "WeakMap is useful for associating metadata with objects without preventing those objects from being garbage-collected. Its keys must be objects and it is not enumerable, which makes it useful for private metadata and caches tied to object lifetime.",
    "track": "javascript"
  },
  {
    "questionId": "js-027",
    "index": 0,
    "question": "What does structuredClone support?",
    "answer": "structuredClone performs a structured deep clone for many built-in data types such as objects, arrays, Map, Set, Date, and typed arrays. It does not clone functions and has restrictions on certain host objects.",
    "track": "javascript"
  },
  {
    "questionId": "js-027",
    "index": 1,
    "question": "Why is JSON cloning risky?",
    "answer": "JSON.stringify/parse loses or changes values that JSON cannot represent, such as functions, undefined, BigInt, Map, Set, and some Date/number semantics, and it fails on circular references. structuredClone is safer when its supported type set matches the data.",
    "track": "javascript"
  },
  {
    "questionId": "js-028",
    "index": 0,
    "question": "What is __proto__ vs prototype?",
    "answer": "prototype is a property on constructor functions used for instances' prototype chains. __proto__ is an accessor exposing an object's actual [[Prototype]]. They are related but are not interchangeable concepts.",
    "track": "javascript"
  },
  {
    "questionId": "js-028",
    "index": 1,
    "question": "How do classes use prototypes?",
    "answer": "Methods declared in a JavaScript class are normally placed on the class prototype and shared by instances instead of being recreated for each instance. The class syntax is largely a cleaner abstraction over JavaScript's prototype-based inheritance.",
    "track": "javascript"
  },
  {
    "questionId": "js-028",
    "index": 2,
    "question": "What is Object.create?",
    "answer": "Object.create(proto) creates a new object whose internal prototype is proto. It is useful when you need explicit prototype inheritance or a dictionary with a null prototype, such as Object.create(null).",
    "track": "javascript"
  },
  {
    "questionId": "js-029",
    "index": 0,
    "question": "What is super?",
    "answer": "super refers to the parent class implementation in a derived class. `super.method()` calls the parent prototype method, while `super(...)` invokes the parent constructor and is required before using this in a derived constructor.",
    "track": "javascript"
  },
  {
    "questionId": "js-029",
    "index": 1,
    "question": "Static methods vs instance methods?",
    "answer": "Static methods belong to the class itself and are called as `Class.method()`. Instance methods belong to the prototype and are called on an object instance. Static methods are appropriate for operations that do not require instance state.",
    "track": "javascript"
  },
  {
    "questionId": "js-029",
    "index": 2,
    "question": "How does private #field work?",
    "answer": "A field declared with `#` is enforced as private by the JavaScript language and cannot be accessed using normal property syntax from outside the class. Private names are lexically scoped to the class definition.",
    "track": "javascript"
  },
  {
    "questionId": "js-030",
    "index": 0,
    "question": "How do you handle fetch HTTP errors?",
    "answer": "Both can make HTTP requests, but fetch is a built-in browser API while Axios is a library with conveniences such as interceptors and automatic JSON handling. The important engineering choice is consistent error handling, cancellation, authentication behavior and response validation rather than the library name itself.",
    "track": "javascript"
  },
  {
    "questionId": "js-030",
    "index": 1,
    "question": "Custom Error classes?",
    "answer": "Extend Error to create domain-specific error types, call super(message), set the name when useful, and preserve relevant structured properties. This lets callers use `instanceof` or error codes to distinguish failures.",
    "track": "javascript"
  },
  {
    "questionId": "js-030",
    "index": 2,
    "question": "What is error propagation?",
    "answer": "An exception propagates up the call stack until a matching catch handler is found. Promise rejections propagate through the promise chain until handled with catch or an equivalent rejection handler.",
    "track": "javascript"
  },
  {
    "questionId": "js-031",
    "index": 0,
    "question": "How do you handle Date values?",
    "answer": "Store timestamps in a consistent timezone representation, commonly UTC/ISO 8601 at API boundaries. Parse and format explicitly for the user's locale rather than relying on ambiguous date strings.",
    "track": "javascript"
  },
  {
    "questionId": "js-031",
    "index": 1,
    "question": "What happens with undefined?",
    "answer": "undefined commonly represents a missing value or an uninitialized binding. It is distinct from null, and operations such as property access on undefined throw unless optional chaining is used.",
    "track": "javascript"
  },
  {
    "questionId": "js-031",
    "index": 2,
    "question": "Why can circular objects fail?",
    "answer": "JSON.stringify cannot serialize circular references because it would recurse indefinitely. Use structuredClone where supported or implement a serialization strategy that represents references explicitly.",
    "track": "javascript"
  },
  {
    "questionId": "js-032",
    "index": 0,
    "question": "How do you add an Authorization header?",
    "answer": "Set the request header to `Authorization: Bearer <access-token>` for a bearer-token API. Do not put access tokens in URLs because URLs can be logged or stored in browser history and intermediary systems.",
    "track": "javascript"
  },
  {
    "questionId": "js-032",
    "index": 1,
    "question": "AbortController?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "javascript"
  },
  {
    "questionId": "js-032",
    "index": 2,
    "question": "How do you retry safely?",
    "answer": "Retry only transient failures, use bounded exponential backoff with jitter, and make the operation idempotent or protect it with an idempotency key before retrying a write.",
    "track": "javascript"
  },
  {
    "questionId": "js-033",
    "index": 0,
    "question": "How does this prevent race conditions?",
    "answer": "The request is tied to the current operation and older results are ignored or aborted, so a slower response from an earlier request cannot overwrite state produced by a newer request.",
    "track": "javascript"
  },
  {
    "questionId": "js-033",
    "index": 1,
    "question": "How do you distinguish abort from a real failure?",
    "answer": "Check whether the caught error represents an AbortController cancellation, commonly by checking `error.name === \"AbortError\"` for fetch. Treat cancellation as an expected control flow and handle actual network/server failures separately.",
    "track": "javascript"
  },
  {
    "questionId": "js-034",
    "index": 0,
    "question": "How would you cancel a debounced call?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-034",
    "index": 1,
    "question": "Leading vs trailing execution?",
    "answer": "Leading-edge execution runs immediately at the beginning of a burst; trailing-edge execution waits until the burst has stopped and then runs once. Debounce commonly uses trailing execution, while throttle can use leading, trailing, or both.",
    "track": "javascript"
  },
  {
    "questionId": "js-035",
    "index": 0,
    "question": "stopPropagation vs preventDefault?",
    "answer": "stopPropagation prevents the event from continuing through the capture/bubble path. preventDefault prevents the browser's default action, such as submitting a form or following a link; it does not stop propagation.",
    "track": "javascript"
  },
  {
    "questionId": "js-035",
    "index": 1,
    "question": "What is event delegation?",
    "answer": "Event delegation attaches one handler to a common ancestor and uses event.target or closest() to determine which child triggered the event. It reduces handler count and works well for dynamically created children.",
    "track": "javascript"
  },
  {
    "questionId": "js-035",
    "index": 2,
    "question": "How does React event handling relate to DOM events?",
    "answer": "React exposes a consistent event API through its event system, while the browser still supplies the underlying DOM events. React handlers receive events with properties such as `target` and `currentTarget`, and propagation follows React event semantics.",
    "track": "javascript"
  },
  {
    "questionId": "js-036",
    "index": 0,
    "question": "When does delegation not work?",
    "answer": "Delegation is ineffective when an event does not bubble, when a component stops propagation before the delegate sees it, or when the event originates outside the delegated DOM subtree. Non-bubbling events often need capture listeners or direct listeners.",
    "track": "javascript"
  },
  {
    "questionId": "js-036",
    "index": 1,
    "question": "How do you avoid handling clicks outside the intended child?",
    "answer": "Implement it at the layer that owns the responsibility, validate the inputs and state before performing the operation, and make failure behavior explicit so callers can distinguish success, validation failure, and transient failure.",
    "track": "javascript"
  },
  {
    "questionId": "js-037",
    "index": 0,
    "question": "How would you debug a memory leak?",
    "answer": "Take heap snapshots before and after the suspected operation, compare retained objects, and inspect event listeners, timers, subscriptions, closures, and caches. Verify that cleanup removes listeners and subscriptions and that long-lived objects do not retain short-lived component data.",
    "track": "javascript"
  },
  {
    "questionId": "js-037",
    "index": 1,
    "question": "What are WeakMap and WeakSet useful for?",
    "answer": "They store object keys without preventing those objects from being garbage-collected. They are useful for metadata associated with object lifetimes, such as private caches or bookkeeping that should disappear when the key object is no longer reachable.",
    "track": "javascript"
  },
  {
    "questionId": "js-038",
    "index": 0,
    "question": "Why does React care about reference equality?",
    "answer": "React can cheaply detect changes by comparing references instead of deeply comparing objects. Mutating an existing object keeps its reference unchanged, while creating a new object signals that the value should be considered changed.",
    "track": "javascript"
  },
  {
    "questionId": "js-038",
    "index": 1,
    "question": "Immer vs manual immutable updates?",
    "answer": "Manual updates make the new object structure explicit but can become verbose for deeply nested state. Immer lets you write mutation-like code against a draft and produces an immutable result; it adds a library/runtime cost, so use it when the simpler update style is valuable.",
    "track": "javascript"
  },
  {
    "questionId": "js-039",
    "index": 0,
    "question": "Should optional chaining replace validation?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "javascript"
  },
  {
    "questionId": "js-039",
    "index": 1,
    "question": "How do you validate API response shape?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "javascript"
  },
  {
    "questionId": "js-040",
    "index": 0,
    "question": "How would you return a plain object?",
    "answer": "Create and return a normal object containing only the intended data, for example `{ id: user.id, name: user.name }`. This avoids exposing class instances, internal fields, or framework-specific objects to callers.",
    "track": "javascript"
  },
  {
    "questionId": "js-040",
    "index": 1,
    "question": "How would you sort groups?",
    "answer": "Sort the array using a comparator based on the desired group key, for example `items.sort((a,b) => a.group.localeCompare(b.group))`. If stable ordering within each group matters, include a secondary comparator.",
    "track": "javascript"
  },
  {
    "questionId": "js-040",
    "index": 2,
    "question": "How would you handle missing keys?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "javascript"
  },
  {
    "questionId": "js-041",
    "index": 0,
    "question": "Is JavaScript pass-by-reference?",
    "answer": "JavaScript passes arguments by value. When the value is an object reference, the copied value points to the same object, so mutating that object is visible through both references, while reassigning one parameter is not.",
    "track": "javascript"
  },
  {
    "questionId": "js-041",
    "index": 1,
    "question": "What does === compare for objects?",
    "answer": "For objects, `===` compares reference identity, not object contents. Two separately created objects with identical properties are still unequal because they are different references.",
    "track": "javascript"
  },
  {
    "questionId": "js-042",
    "index": 0,
    "question": "What is hoisting?",
    "answer": "Hoisting describes how declarations are processed before execution. Function declarations can be called before their source position; `var` is initialized to `undefined`; `let`, `const`, and class declarations are in the temporal dead zone until initialization.",
    "track": "javascript"
  },
  {
    "questionId": "js-042",
    "index": 1,
    "question": "What is the temporal dead zone?",
    "answer": "The temporal dead zone is the period between entering a block scope and the execution of a let, const, or class declaration. Accessing the binding before its declaration executes throws a ReferenceError.",
    "track": "javascript"
  },
  {
    "questionId": "js-043",
    "index": 0,
    "question": "Why is NaN not equal to itself with ===?",
    "answer": "`NaN` represents an invalid numeric result and follows the IEEE-754 NaN comparison rule, where NaN is not equal to any value, including itself. Use `Number.isNaN(value)` to test specifically for NaN.",
    "track": "javascript"
  },
  {
    "questionId": "js-043",
    "index": 1,
    "question": "Is Object.is deep equality?",
    "answer": "No. `Object.is` compares two values by the same-value algorithm; for objects it still compares references. It differs from `===` mainly for cases such as `NaN` and `-0`.",
    "track": "javascript"
  },
  {
    "questionId": "js-044",
    "index": 0,
    "question": "?? vs ||?",
    "answer": "Strict equality compares both type and value, with special rules for numbers such as NaN. Loose equality follows a larger coercion algorithm, which can produce surprising results. Production code normally prefers === unless loose equality is intentionally required.",
    "track": "javascript"
  },
  {
    "questionId": "js-044",
    "index": 1,
    "question": "Where can optional chaining be used?",
    "answer": "Optional chaining can safely access a property, call a method, or index into a value when an intermediate value may be `null` or `undefined`, such as `user?.profile?.name` or `obj.method?.()`.",
    "track": "javascript"
  },
  {
    "questionId": "js-045",
    "index": 0,
    "question": "Is spread a deep clone?",
    "answer": "No. Object and array spread create a shallow copy. Nested objects and arrays remain shared references, so changing a nested object can still affect the original.",
    "track": "javascript"
  },
  {
    "questionId": "js-045",
    "index": 1,
    "question": "Rest vs spread?",
    "answer": "Rest collects multiple values into an array or object, while spread expands an iterable or object into individual elements/properties. The same `...` syntax has opposite roles depending on where it appears.",
    "track": "javascript"
  },
  {
    "questionId": "js-046",
    "index": 0,
    "question": "How do nested defaults work?",
    "answer": "Defaults apply independently at each destructuring level. For example, `const {a: {b = 1} = {}} = value` handles both a missing `a` object and a missing `b`, but not an explicitly supplied `a: null`.",
    "track": "javascript"
  },
  {
    "questionId": "js-046",
    "index": 1,
    "question": "Does a default apply to null?",
    "answer": "No. A default parameter or destructuring default is used only when the value is `undefined`; `null` is a real supplied value and must be handled explicitly.",
    "track": "javascript"
  },
  {
    "questionId": "js-047",
    "index": 0,
    "question": "What is a lexical environment?",
    "answer": "A lexical environment is the runtime structure that records bindings such as variables and references to an outer environment. Closures retain access to the lexical environment in which the function was created.",
    "track": "javascript"
  },
  {
    "questionId": "js-047",
    "index": 1,
    "question": "Why does recursion overflow?",
    "answer": "Each recursive call adds a stack frame. Without a reachable base case, or when recursion depth becomes too large, the call stack is exhausted and JavaScript throws a `RangeError`.",
    "track": "javascript"
  },
  {
    "questionId": "js-048",
    "index": 0,
    "question": "Lexical vs dynamic scope?",
    "answer": "JavaScript uses lexical scope: variable lookup is determined by where code is written, not by the caller. Dynamic scope would resolve names based on the runtime call chain, which JavaScript does not do.",
    "track": "javascript"
  },
  {
    "questionId": "js-048",
    "index": 1,
    "question": "How does a closure use scope?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-049",
    "index": 0,
    "question": "Can closures cause memory leaks?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-049",
    "index": 1,
    "question": "Closure vs scope?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-050",
    "index": 0,
    "question": "Arrow vs regular function?",
    "answer": "Arrow functions capture `this` lexically and cannot be constructors; regular functions have dynamic `this` and can be called with `new`. Arrow functions are often useful for callbacks where the surrounding `this` should be preserved.",
    "track": "javascript"
  },
  {
    "questionId": "js-050",
    "index": 1,
    "question": "What does bind do?",
    "answer": "`bind` creates a new function with a fixed `this` value and optionally pre-applied arguments. It does not execute the original function immediately.",
    "track": "javascript"
  },
  {
    "questionId": "js-051",
    "index": 0,
    "question": "Does bind mutate the original function?",
    "answer": "No. `bind` returns a new bound function and leaves the original function unchanged. Rebinding the original is therefore safe, but each `bind` call creates a new function reference.",
    "track": "javascript"
  },
  {
    "questionId": "js-051",
    "index": 1,
    "question": "Can arrow functions be rebound?",
    "answer": "No in the usual sense. Arrow functions have lexical `this`, so `call`, `apply`, and `bind` cannot change their `this` value, although `bind` can still pre-bind arguments and return another callable function.",
    "track": "javascript"
  },
  {
    "questionId": "js-052",
    "index": 0,
    "question": "__proto__ vs prototype?",
    "answer": "`prototype` is a property of constructor functions used as the prototype for objects created with `new`. `__proto__` is an accessor exposing an object’s actual prototype chain; modern code should prefer `Object.getPrototypeOf` and `Object.setPrototypeOf` for explicit prototype operations.",
    "track": "javascript"
  },
  {
    "questionId": "js-052",
    "index": 1,
    "question": "How do you check an own property?",
    "answer": "Use `Object.hasOwn(obj, key)` when available, or `Object.prototype.hasOwnProperty.call(obj, key)` for compatibility. Avoid `key in obj` when inherited properties should not count.",
    "track": "javascript"
  },
  {
    "questionId": "js-053",
    "index": 0,
    "question": "Map vs WeakMap?",
    "answer": "`Map` accepts any key type and is iterable, with explicit size and deletion. `WeakMap` accepts object keys, does not prevent those keys from garbage collection, and is not iterable; it is useful for object-associated metadata.",
    "track": "javascript"
  },
  {
    "questionId": "js-053",
    "index": 1,
    "question": "When is Object better?",
    "answer": "Use a plain object for simple record-like data with string or symbol keys and JSON-oriented serialization. Use `Map` when keys can be arbitrary values, insertion order and map operations are important, or the data is conceptually a collection.",
    "track": "javascript"
  },
  {
    "questionId": "js-054",
    "index": 0,
    "question": "Set vs Array.includes?",
    "answer": "`Array.includes` scans the array and is O(n) in the worst case. `Set.has` provides expected O(1) membership checks, so a Set is preferable when you perform many membership lookups.",
    "track": "javascript"
  },
  {
    "questionId": "js-054",
    "index": 1,
    "question": "How does Set treat NaN?",
    "answer": "A Set treats all NaN values as the same key, so adding NaN twice still leaves one entry. This follows the SameValueZero equality used by Set.",
    "track": "javascript"
  },
  {
    "questionId": "js-055",
    "index": 0,
    "question": "Can a promise settle twice?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-055",
    "index": 1,
    "question": "What does then return?",
    "answer": "`then` returns a new Promise. Its fulfillment or rejection depends on the callback result: a normal value fulfills the new promise, while a thrown error or rejected thenable rejects it.",
    "track": "javascript"
  },
  {
    "questionId": "js-056",
    "index": 0,
    "question": "What happens when Promise.all rejects?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-056",
    "index": 1,
    "question": "When is allSettled useful?",
    "answer": "Use `Promise.allSettled` when every operation should be allowed to finish and you need both successes and failures. It resolves with an array describing each promise instead of rejecting as soon as one fails.",
    "track": "javascript"
  },
  {
    "questionId": "js-057",
    "index": 0,
    "question": "Does await block the browser?",
    "answer": "await suspends only the current async function until the promise settles; it does not block the browser thread. Other tasks and rendering can continue while the asynchronous operation is pending.",
    "track": "javascript"
  },
  {
    "questionId": "js-057",
    "index": 1,
    "question": "Where should errors be caught?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-058",
    "index": 0,
    "question": "Why does Promise.then beat setTimeout 0?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-058",
    "index": 1,
    "question": "Can microtasks starve tasks?",
    "answer": "Yes. A long or recursively scheduled microtask chain can keep draining before the browser gets a chance to process another task or render. Avoid unbounded microtask scheduling in UI code.",
    "track": "javascript"
  },
  {
    "questionId": "js-059",
    "index": 0,
    "question": "Can debounce have leading calls?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-059",
    "index": 1,
    "question": "Does debounce solve request races?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-060",
    "index": 0,
    "question": "target vs currentTarget?",
    "answer": "`event.target` is the element where the event originated. `event.currentTarget` is the element whose listener is currently executing, which is especially important when using event delegation.",
    "track": "javascript"
  },
  {
    "questionId": "js-060",
    "index": 1,
    "question": "When should propagation be stopped?",
    "answer": "Stop propagation only when a child interaction must not reach an ancestor handler, such as an action inside a clickable card. Prefer event design that avoids unnecessary global handlers rather than using `stopPropagation` everywhere.",
    "track": "javascript"
  },
  {
    "questionId": "js-061",
    "index": 0,
    "question": "What is a memory leak in JavaScript?",
    "answer": "A memory leak occurs when objects are no longer logically needed but remain reachable, so garbage collection cannot reclaim them. Common causes are forgotten listeners, timers, subscriptions, global references, and unbounded caches.",
    "track": "javascript"
  },
  {
    "questionId": "js-061",
    "index": 1,
    "question": "How can closures retain memory?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-062",
    "index": 0,
    "question": "Set.has vs Array.includes?",
    "answer": "`Set.has` is expected O(1) for membership checks, while `Array.includes` is O(n) in the worst case. Use a Set when repeated membership checks justify the additional storage.",
    "track": "javascript"
  },
  {
    "questionId": "js-062",
    "index": 1,
    "question": "What is amortized complexity?",
    "answer": "Amortized complexity averages the cost of a sequence of operations rather than treating each operation independently. For example, dynamic-array append is O(1) amortized because occasional resizing is spread across many cheap appends.",
    "track": "javascript"
  },
  {
    "questionId": "js-063",
    "index": 0,
    "question": "What cannot structuredClone?",
    "answer": "`structuredClone` cannot clone functions, DOM nodes, and several host-specific objects. It also does not preserve prototypes of ordinary custom class instances as a class instance.",
    "track": "javascript"
  },
  {
    "questionId": "js-063",
    "index": 1,
    "question": "Why is JSON cloning lossy?",
    "answer": "JSON serialization drops or changes values that JSON cannot represent, such as functions, `undefined`, symbols, `BigInt`, special object types, and cyclic references. Dates become strings and object prototypes are not preserved.",
    "track": "javascript"
  },
  {
    "questionId": "js-064",
    "index": 0,
    "question": "Iterator vs async iterator?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-064",
    "index": 1,
    "question": "Can you break from for await?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-065",
    "index": 0,
    "question": "What counts as a side effect?",
    "answer": "A side effect is an operation that interacts with state outside the pure calculation, such as changing a variable, performing I/O, logging, mutating the DOM, or updating storage. Pure functions return results without changing external state.",
    "track": "javascript"
  },
  {
    "questionId": "js-065",
    "index": 1,
    "question": "Why are pure functions easier to test?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "javascript"
  },
  {
    "questionId": "js-066",
    "index": 0,
    "question": "throw string vs Error?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-066",
    "index": 1,
    "question": "How do you preserve a cause?",
    "answer": "Use error causes when wrapping an error, for example `new Error(\"Database lookup failed\", { cause: err })`. This preserves the original exception for diagnostics while exposing a higher-level message to the caller.",
    "track": "javascript"
  },
  {
    "questionId": "js-067",
    "index": 0,
    "question": "When should state go into the URL?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "javascript"
  },
  {
    "questionId": "js-067",
    "index": 1,
    "question": "How do repeated query parameters work?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "javascript"
  },
  {
    "questionId": "js-068",
    "index": 0,
    "question": "localStorage vs cookies?",
    "answer": "`localStorage` is browser storage accessible to JavaScript and is commonly used for non-sensitive client state. Cookies are sent with matching HTTP requests and can be protected with flags such as `HttpOnly`, `Secure`, and `SameSite`; sensitive session credentials are generally safer in appropriately configured HttpOnly cookies.",
    "track": "javascript"
  },
  {
    "questionId": "js-068",
    "index": 1,
    "question": "Why can localStorage be risky for tokens?",
    "answer": "Treat the token as an authentication credential: validate its signature and relevant claims on the server, keep its lifetime limited, protect it from client-side exposure, and reject expired, malformed, or insufficiently privileged tokens.",
    "track": "javascript"
  },
  {
    "questionId": "js-069",
    "index": 0,
    "question": "Worker vs async function?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-069",
    "index": 1,
    "question": "Can a worker access the DOM?",
    "answer": "A Web Worker runs off the main thread and cannot directly access the DOM or `window`. It communicates with the main thread using `postMessage` and can perform CPU-heavy work without blocking UI rendering.",
    "track": "javascript"
  },
  {
    "questionId": "js-070",
    "index": 0,
    "question": "How are Dates serialized?",
    "answer": "When a Date is JSON-stringified, its `toJSON` method produces an ISO 8601 UTC string. Parsing that string gives you a string until you explicitly convert it back to a Date.",
    "track": "javascript"
  },
  {
    "questionId": "js-070",
    "index": 1,
    "question": "Can BigInt be JSON stringified?",
    "answer": "No. `JSON.stringify(1n)` throws a TypeError because JSON has no BigInt representation. Convert it explicitly to a string or number only when that conversion is safe and intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-041",
    "index": 0,
    "question": "How does an arrow function differ?",
    "answer": "Implement it at the layer that owns the responsibility, validate the inputs and state before performing the operation, and make failure behavior explicit so callers can distinguish success, validation failure, and transient failure.",
    "track": "javascript"
  },
  {
    "questionId": "js-041",
    "index": 1,
    "question": "What is a named function expression?",
    "answer": "It is a function expression with an internal name, such as `const f = function calculate() {}`. The name is useful for recursion and stack traces, while the function is still assigned like any other expression.",
    "track": "javascript"
  },
  {
    "questionId": "js-042",
    "index": 0,
    "question": "What if null is passed?",
    "answer": "`null` is an explicit value and is not treated as `undefined`. Optional chaining can safely handle it for property access, but arithmetic, destructuring, and business logic still need explicit handling where appropriate.",
    "track": "javascript"
  },
  {
    "questionId": "js-042",
    "index": 1,
    "question": "Can defaults reference earlier parameters?",
    "answer": "Yes. A later default parameter can reference an earlier parameter, for example `function f(a, b = a) {}`. It cannot reference a later parameter that has not been initialized.",
    "track": "javascript"
  },
  {
    "questionId": "js-043",
    "index": 0,
    "question": "Rest vs spread?",
    "answer": "Rest collects multiple values into an array or object, while spread expands an iterable or object into individual elements/properties. The same `...` syntax has opposite roles depending on where it appears.",
    "track": "javascript"
  },
  {
    "questionId": "js-043",
    "index": 1,
    "question": "Can a rest parameter appear in the middle?",
    "answer": "No. A rest parameter must be the final parameter in a function definition because it collects all remaining arguments.",
    "track": "javascript"
  },
  {
    "questionId": "js-044",
    "index": 0,
    "question": "Does spread deep clone?",
    "answer": "Use the defined API contract for this operation, validate untrusted input before processing it, and make success, failure, and boundary cases explicit to the caller.",
    "track": "javascript"
  },
  {
    "questionId": "js-044",
    "index": 1,
    "question": "How does spread differ from Object.assign?",
    "answer": "Both perform shallow copying, but spread creates a new object in the literal expression while `Object.assign` copies properties into a target object and can invoke setters on that target. Spread is usually clearer for immutable object construction.",
    "track": "javascript"
  },
  {
    "questionId": "js-045",
    "index": 0,
    "question": "How do aliases work?",
    "answer": "An alias creates another reference or binding to the same underlying object or value. Mutating an aliased object through one reference is visible through the other because no copy was created.",
    "track": "javascript"
  },
  {
    "questionId": "js-045",
    "index": 1,
    "question": "What happens with missing properties?",
    "answer": "Reading a missing object property returns `undefined`. Destructuring can apply a default for `undefined`, while optional chaining can prevent an error when an intermediate object itself is nullish.",
    "track": "javascript"
  },
  {
    "questionId": "js-046",
    "index": 0,
    "question": "Optional chaining vs try/catch?",
    "answer": "Optional chaining handles expected nullish access, such as `user?.profile?.name`; it does not catch arbitrary exceptions. `try/catch` handles thrown errors from code that can fail and should be used when actual exception handling is required.",
    "track": "javascript"
  },
  {
    "questionId": "js-046",
    "index": 1,
    "question": "What does it return when the chain is missing?",
    "answer": "An optional chain evaluates to `undefined` when the accessed value is `null` or `undefined` at the guarded point. You can combine it with `??` to supply a default.",
    "track": "javascript"
  },
  {
    "questionId": "js-047",
    "index": 0,
    "question": "Why can ?? and || not be mixed without parentheses?",
    "answer": "JavaScript requires parentheses because mixing `??` directly with `||` or `&&` is ambiguous by grammar. Write `(a ?? b) || c` or `a ?? (b || c)` to make the intended precedence explicit.",
    "track": "javascript"
  },
  {
    "questionId": "js-047",
    "index": 1,
    "question": "When is || appropriate?",
    "answer": "Use `||` when all falsy values such as `0`, `false`, and `\"\"` should trigger the fallback. Use `??` when only `null` and `undefined` should trigger it.",
    "track": "javascript"
  },
  {
    "questionId": "js-048",
    "index": 0,
    "question": "Can template literals call functions?",
    "answer": "Yes. Expressions inside `${...}` are evaluated normally, so a template literal can call a function such as `` `Hello ${getName()}` ``.",
    "track": "javascript"
  },
  {
    "questionId": "js-048",
    "index": 1,
    "question": "What are tagged templates?",
    "answer": "A tagged template calls a function with the literal segments and evaluated substitution values separately. This is useful for custom formatting, escaping, localization, and domain-specific template processing.",
    "track": "javascript"
  },
  {
    "questionId": "js-049",
    "index": 0,
    "question": "What does map return?",
    "answer": "`map` returns a new array containing one transformed result for each element of the source array. It does not mutate the source array unless the callback itself mutates referenced objects.",
    "track": "javascript"
  },
  {
    "questionId": "js-049",
    "index": 1,
    "question": "Can reduce replace every loop?",
    "answer": "Technically many loops can be expressed with `reduce`, but that does not make it the best choice. Use `map`, `filter`, `find`, or a normal loop when those communicate the operation more clearly.",
    "track": "javascript"
  },
  {
    "questionId": "js-050",
    "index": 0,
    "question": "find vs filter?",
    "answer": "`find` returns the first matching element or `undefined`; `filter` returns a new array containing every matching element. Use `find` when you need one result and `filter` when you need all matches.",
    "track": "javascript"
  },
  {
    "questionId": "js-050",
    "index": 1,
    "question": "includes vs indexOf?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "javascript"
  },
  {
    "questionId": "js-051",
    "index": 0,
    "question": "How do you avoid mutation?",
    "answer": "Create new arrays or objects for changed state using spread, `map`, `filter`, or structured update helpers. Avoid changing shared references in place when other code relies on the old value.",
    "track": "javascript"
  },
  {
    "questionId": "js-051",
    "index": 1,
    "question": "What does a comparator mean?",
    "answer": "A comparator returns a negative value, zero, or a positive value to indicate whether the first value should come before, equal to, or after the second. `Array.sort` uses that result to order elements.",
    "track": "javascript"
  },
  {
    "questionId": "js-052",
    "index": 0,
    "question": "Map vs WeakMap?",
    "answer": "`Map` accepts any key type and is iterable, with explicit size and deletion. `WeakMap` accepts object keys, does not prevent those keys from garbage collection, and is not iterable; it is useful for object-associated metadata.",
    "track": "javascript"
  },
  {
    "questionId": "js-052",
    "index": 1,
    "question": "When is Object better?",
    "answer": "Use a plain object for simple record-like data with string or symbol keys and JSON-oriented serialization. Use `Map` when keys can be arbitrary values, insertion order and map operations are important, or the data is conceptually a collection.",
    "track": "javascript"
  },
  {
    "questionId": "js-053",
    "index": 0,
    "question": "Set vs Array.includes?",
    "answer": "`Array.includes` scans the array and is O(n) in the worst case. `Set.has` provides expected O(1) membership checks, so a Set is preferable when you perform many membership lookups.",
    "track": "javascript"
  },
  {
    "questionId": "js-053",
    "index": 1,
    "question": "How does Set treat NaN?",
    "answer": "A Set treats all NaN values as the same key, so adding NaN twice still leaves one entry. This follows the SameValueZero equality used by Set.",
    "track": "javascript"
  },
  {
    "questionId": "js-054",
    "index": 0,
    "question": "Can a promise settle twice?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-054",
    "index": 1,
    "question": "What does then return?",
    "answer": "`then` returns a new Promise. Its fulfillment or rejection depends on the callback result: a normal value fulfills the new promise, while a thrown error or rejected thenable rejects it.",
    "track": "javascript"
  },
  {
    "questionId": "js-055",
    "index": 0,
    "question": "What happens when Promise.all rejects?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-055",
    "index": 1,
    "question": "When is allSettled useful?",
    "answer": "Use `Promise.allSettled` when every operation should be allowed to finish and you need both successes and failures. It resolves with an array describing each promise instead of rejecting as soon as one fails.",
    "track": "javascript"
  },
  {
    "questionId": "js-056",
    "index": 0,
    "question": "Does await block the browser?",
    "answer": "await suspends only the current async function until the promise settles; it does not block the browser thread. Other tasks and rendering can continue while the asynchronous operation is pending.",
    "track": "javascript"
  },
  {
    "questionId": "js-056",
    "index": 1,
    "question": "Where should errors be caught?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-057",
    "index": 0,
    "question": "Why does Promise.then beat setTimeout 0?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-057",
    "index": 1,
    "question": "Can microtasks starve tasks?",
    "answer": "Yes. A long or recursively scheduled microtask chain can keep draining before the browser gets a chance to process another task or render. Avoid unbounded microtask scheduling in UI code.",
    "track": "javascript"
  },
  {
    "questionId": "js-058",
    "index": 0,
    "question": "Can debounce have leading calls?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-058",
    "index": 1,
    "question": "Does debounce solve request races?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "javascript"
  },
  {
    "questionId": "js-059",
    "index": 0,
    "question": "target vs currentTarget?",
    "answer": "`event.target` is the element where the event originated. `event.currentTarget` is the element whose listener is currently executing, which is especially important when using event delegation.",
    "track": "javascript"
  },
  {
    "questionId": "js-059",
    "index": 1,
    "question": "When should propagation be stopped?",
    "answer": "Stop propagation only when a child interaction must not reach an ancestor handler, such as an action inside a clickable card. Prefer event design that avoids unnecessary global handlers rather than using `stopPropagation` everywhere.",
    "track": "javascript"
  },
  {
    "questionId": "js-060",
    "index": 0,
    "question": "What is a memory leak in JavaScript?",
    "answer": "A memory leak occurs when objects are no longer logically needed but remain reachable, so garbage collection cannot reclaim them. Common causes are forgotten listeners, timers, subscriptions, global references, and unbounded caches.",
    "track": "javascript"
  },
  {
    "questionId": "js-060",
    "index": 1,
    "question": "How can closures retain memory?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-061",
    "index": 0,
    "question": "Set.has vs Array.includes?",
    "answer": "`Set.has` is expected O(1) for membership checks, while `Array.includes` is O(n) in the worst case. Use a Set when repeated membership checks justify the additional storage.",
    "track": "javascript"
  },
  {
    "questionId": "js-061",
    "index": 1,
    "question": "What is amortized complexity?",
    "answer": "Amortized complexity averages the cost of a sequence of operations rather than treating each operation independently. For example, dynamic-array append is O(1) amortized because occasional resizing is spread across many cheap appends.",
    "track": "javascript"
  },
  {
    "questionId": "js-062",
    "index": 0,
    "question": "What cannot structuredClone?",
    "answer": "`structuredClone` cannot clone functions, DOM nodes, and several host-specific objects. It also does not preserve prototypes of ordinary custom class instances as a class instance.",
    "track": "javascript"
  },
  {
    "questionId": "js-062",
    "index": 1,
    "question": "Why is JSON cloning lossy?",
    "answer": "JSON serialization drops or changes values that JSON cannot represent, such as functions, `undefined`, symbols, `BigInt`, special object types, and cyclic references. Dates become strings and object prototypes are not preserved.",
    "track": "javascript"
  },
  {
    "questionId": "js-063",
    "index": 0,
    "question": "Iterator vs async iterator?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-063",
    "index": 1,
    "question": "Can you break from for await?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-064",
    "index": 0,
    "question": "What counts as a side effect?",
    "answer": "A side effect is an operation that interacts with state outside the pure calculation, such as changing a variable, performing I/O, logging, mutating the DOM, or updating storage. Pure functions return results without changing external state.",
    "track": "javascript"
  },
  {
    "questionId": "js-064",
    "index": 1,
    "question": "Why are pure functions easier to test?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "javascript"
  },
  {
    "questionId": "js-065",
    "index": 0,
    "question": "How do you preserve the original error?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-065",
    "index": 1,
    "question": "When should an error be translated?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-066",
    "index": 0,
    "question": "How do you preserve existing parameters?",
    "answer": "Use object or array spread to copy the existing values and override only the fields that should change, for example `{ ...params, page: nextPage }`. This avoids mutating the original request state.",
    "track": "javascript"
  },
  {
    "questionId": "js-066",
    "index": 1,
    "question": "What does encodeURIComponent do?",
    "answer": "It percent-encodes characters so a string can safely be used as one URI component, such as a query parameter value. It should not be used to encode an entire URL because it would encode URL delimiters too.",
    "track": "javascript"
  },
  {
    "questionId": "js-067",
    "index": 0,
    "question": "What if the server already processed the request?",
    "answer": "The client may receive a timeout even though the server completed the operation. Use an idempotency key or query the operation status before retrying so a repeated request cannot create a duplicate side effect.",
    "track": "javascript"
  },
  {
    "questionId": "js-067",
    "index": 1,
    "question": "How do you detect an abort?",
    "answer": "Use `AbortController` and pass its signal to the request. When the operation is aborted, the fetch promise rejects with an `AbortError` in browsers, which can be handled separately from real network or server failures.",
    "track": "javascript"
  },
  {
    "questionId": "js-068",
    "index": 0,
    "question": "AbortController vs request IDs?",
    "answer": "Create an AbortController per request, pass controller.signal to fetch, and call controller.abort() during cleanup when the request is obsolete. Handle AbortError separately so normal cancellation is not shown as an application failure.",
    "track": "javascript"
  },
  {
    "questionId": "js-068",
    "index": 1,
    "question": "Where should the guard live?",
    "answer": "The authoritative guard belongs on the server at the boundary that performs the protected operation. Client-side guards improve UX but cannot prevent a caller from bypassing the UI and invoking the API directly.",
    "track": "javascript"
  },
  {
    "questionId": "js-069",
    "index": 0,
    "question": "What should happen after timeout?",
    "answer": "Abort or mark the request as timed out, surface a clear retry state to the user, and avoid assuming that the server did not process the operation. For mutations, reconcile status or use idempotency before retrying.",
    "track": "javascript"
  },
  {
    "questionId": "js-069",
    "index": 1,
    "question": "Timeout vs retry?",
    "answer": "A timeout limits how long the caller waits; a retry repeats the operation after a failure. Retries should be limited, use backoff, and only apply to operations where repeating is safe or idempotency is guaranteed.",
    "track": "javascript"
  },
  {
    "questionId": "js-070",
    "index": 0,
    "question": "How do you invalidate the cache?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "javascript"
  },
  {
    "questionId": "js-070",
    "index": 1,
    "question": "What belongs in a cache key?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "javascript"
  },
  {
    "questionId": "js-071",
    "index": 0,
    "question": "How can closures cause memory retention?",
    "answer": "A closure is a function together with access to variables from its lexical scope. In JavaScript, the inner function retains access to those variables even after the outer function has returned. Closures are useful for callbacks, factories and encapsulation, but can also retain objects longer than intended.",
    "track": "javascript"
  },
  {
    "questionId": "js-071",
    "index": 1,
    "question": "What is lexical scope?",
    "answer": "Lexical scope means a variable is resolved according to where the code is written. Inner functions can access bindings from their surrounding scopes, which is the basis for JavaScript closures.",
    "track": "javascript"
  },
  {
    "questionId": "js-072",
    "index": 0,
    "question": "Why does var print the same value?",
    "answer": "A `var` loop variable is function-scoped, so callbacks created in the loop share the same binding and often observe its final value. `let` creates a new block-scoped binding for each iteration.",
    "track": "javascript"
  },
  {
    "questionId": "js-072",
    "index": 1,
    "question": "Can const be used in a for loop?",
    "answer": "Yes. `for (const item of items)` creates a new binding for each iteration and is ideal when the loop variable should not be reassigned. A normal `for` loop with `const` can also be used when the binding is block-scoped appropriately.",
    "track": "javascript"
  },
  {
    "questionId": "js-073",
    "index": 0,
    "question": "How does bind affect this?",
    "answer": "`bind` fixes the `this` value for a normal function and returns a new function. The bound `this` remains fixed even when the new function is called as a method, subject to constructor behavior when used with `new`.",
    "track": "javascript"
  },
  {
    "questionId": "js-073",
    "index": 1,
    "question": "Why are arrow functions useful in callbacks?",
    "answer": "They capture the surrounding `this`, so callbacks do not need manual binding when they need the enclosing object or component context. They are also concise for transformations such as `map` and `filter`.",
    "track": "javascript"
  },
  {
    "questionId": "js-074",
    "index": 0,
    "question": "Does bind invoke the function?",
    "answer": "No. `bind` only creates a bound function. The function executes later when the returned function is called.",
    "track": "javascript"
  },
  {
    "questionId": "js-074",
    "index": 1,
    "question": "What happens when a bound function is used with new?",
    "answer": "When a bound function is called with `new`, the constructor call supplies a new `this`; the bound `this` is ignored for construction, while any pre-bound arguments are still applied.",
    "track": "javascript"
  },
  {
    "questionId": "js-075",
    "index": 0,
    "question": "Why does spread not deep clone?",
    "answer": "Spread copies only the top-level properties or elements. Nested objects and arrays are copied by reference, so a deep copy requires a different approach such as `structuredClone` when its data model is supported.",
    "track": "javascript"
  },
  {
    "questionId": "js-075",
    "index": 1,
    "question": "When would structuredClone be inappropriate?",
    "answer": "It is inappropriate when you need to preserve functions, custom class behavior, DOM nodes, or unsupported host objects, or when cloning is unnecessarily expensive. In those cases, copy only the data required by the application.",
    "track": "javascript"
  },
  {
    "questionId": "js-076",
    "index": 0,
    "question": "Why is NaN special?",
    "answer": "NaN is the numeric value used to represent an invalid or unrepresentable numeric result. It is not equal to itself under `===`, so use `Number.isNaN` for detection.",
    "track": "javascript"
  },
  {
    "questionId": "js-076",
    "index": 1,
    "question": "When does == ever make sense?",
    "answer": "`==` performs type coercion and can be useful only when that coercion is deliberate and well understood. In application code, `===` is generally preferred because it avoids surprising conversions.",
    "track": "javascript"
  },
  {
    "questionId": "js-077",
    "index": 0,
    "question": "What counts as nullish?",
    "answer": "Only `null` and `undefined` are nullish. Values such as `0`, `false`, and an empty string are not nullish, which is why `??` differs from `||`.",
    "track": "javascript"
  },
  {
    "questionId": "js-077",
    "index": 1,
    "question": "Can ?? be mixed directly with && or ||?",
    "answer": "No. JavaScript syntax requires parentheses when `??` is combined directly with `&&` or `||`, for example `value ?? (a || b)`.",
    "track": "javascript"
  },
  {
    "questionId": "js-078",
    "index": 0,
    "question": "Does optional chaining catch all errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-078",
    "index": 1,
    "question": "What does optional call do?",
    "answer": "`obj.method?.()` calls the method only when the property is not `null` or `undefined`; otherwise it returns `undefined` instead of throwing because the method is missing.",
    "track": "javascript"
  },
  {
    "questionId": "js-079",
    "index": 0,
    "question": "Does a default apply to null?",
    "answer": "No. A default parameter or destructuring default is used only when the value is `undefined`; `null` is a real supplied value and must be handled explicitly.",
    "track": "javascript"
  },
  {
    "questionId": "js-079",
    "index": 1,
    "question": "Is object rest a deep copy?",
    "answer": "No. Object rest creates a shallow object containing the remaining properties. Nested objects inside those properties retain their original references.",
    "track": "javascript"
  },
  {
    "questionId": "js-080",
    "index": 0,
    "question": "What does next() return?",
    "answer": "A generator’s `next()` returns an iterator result object such as `{ value, done }`. When the generator is complete, `done` is `true` and `value` is normally `undefined` unless a return value was supplied.",
    "track": "javascript"
  },
  {
    "questionId": "js-080",
    "index": 1,
    "question": "Can a generator receive values?",
    "answer": "Yes. The value passed to `next(value)` becomes the result of the `yield` expression that paused the generator. The first `next()` call starts the generator and does not supply a value to a prior yield.",
    "track": "javascript"
  },
  {
    "questionId": "js-081",
    "index": 0,
    "question": "What is a thenable?",
    "answer": "A thenable is an object with a callable `then` method. Promises assimilate thenables, which means `Promise.resolve(thenable)` adopts the thenable’s eventual state.",
    "track": "javascript"
  },
  {
    "questionId": "js-081",
    "index": 1,
    "question": "What does Promise.resolve do with an existing Promise?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-082",
    "index": 0,
    "question": "Does finally handle errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-082",
    "index": 1,
    "question": "What happens if catch itself throws?",
    "answer": "If a `catch` handler throws or returns a rejected promise, the promise returned from that chain becomes rejected with the new error. The original rejection is replaced for downstream handlers unless it is preserved as a cause.",
    "track": "javascript"
  },
  {
    "questionId": "js-083",
    "index": 0,
    "question": "How do you distinguish abort from other errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-083",
    "index": 1,
    "question": "Can every Promise be cancelled?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-084",
    "index": 0,
    "question": "How can microtasks starve tasks?",
    "answer": "A continuously replenished microtask queue can prevent the event loop from reaching the next task and can delay rendering. Keep microtask work bounded and yield to a task when long asynchronous processing is required.",
    "track": "javascript"
  },
  {
    "questionId": "js-084",
    "index": 1,
    "question": "When would you use a Web Worker?",
    "answer": "Use a Web Worker for CPU-heavy JavaScript such as parsing, large calculations, image processing, or data transformation that would otherwise block the main thread. Communicate using messages and transferables where appropriate.",
    "track": "javascript"
  },
  {
    "questionId": "js-085",
    "index": 0,
    "question": "queueMicrotask vs Promise.then?",
    "answer": "Model the operation as asynchronous work: start independent operations concurrently, handle fulfillment and rejection explicitly, and use cancellation or request identity when obsolete work must not update current state.",
    "track": "javascript"
  },
  {
    "questionId": "js-085",
    "index": 1,
    "question": "Can microtasks delay rendering?",
    "answer": "Yes. The browser drains microtasks before it can proceed to a rendering opportunity, so a long chain of promise callbacks can delay painting and input responsiveness.",
    "track": "javascript"
  },
  {
    "questionId": "js-086",
    "index": 0,
    "question": "Why must removeEventListener use the same function?",
    "answer": "The browser matches listeners by event type, callback identity, and relevant options. Creating a new equivalent function does not match the original callback, so the old listener remains registered.",
    "track": "javascript"
  },
  {
    "questionId": "js-086",
    "index": 1,
    "question": "How do you investigate retained objects?",
    "answer": "Use heap snapshots and the browser’s retaining-path analysis to find why an object is still reachable. Common retaining paths are global variables, event listeners, timers, closures, DOM references, and caches.",
    "track": "javascript"
  },
  {
    "questionId": "js-087",
    "index": 0,
    "question": "What are accessor descriptors?",
    "answer": "Property descriptors can define `get` and `set` functions instead of a stored `value`. Accessors run when the property is read or assigned and can implement validation, computed values, or encapsulation.",
    "track": "javascript"
  },
  {
    "questionId": "js-087",
    "index": 1,
    "question": "What does enumerable affect?",
    "answer": "The `enumerable` flag controls whether a property appears in common enumeration operations such as `Object.keys` and certain `for...in` behavior. It does not by itself make the property private.",
    "track": "javascript"
  },
  {
    "questionId": "js-088",
    "index": 0,
    "question": "What are Proxy invariants?",
    "answer": "Proxy traps must respect invariants imposed by the target object, especially for non-configurable or non-writable properties. Violating these rules causes the engine to throw a TypeError instead of allowing an impossible object state.",
    "track": "javascript"
  },
  {
    "questionId": "js-088",
    "index": 1,
    "question": "Why use Reflect inside a trap?",
    "answer": "`Reflect` provides standard object operations that preserve normal JavaScript semantics and return useful results. Calling `Reflect.get`, `Reflect.set`, or similar operations inside a trap avoids reimplementing subtle prototype and receiver behavior.",
    "track": "javascript"
  },
  {
    "questionId": "js-089",
    "index": 0,
    "question": "Named vs default export?",
    "answer": "A named export is imported using its exported name and a module can have multiple named exports. A default export represents the module's primary exported value and can be imported with an arbitrary local name.",
    "track": "javascript"
  },
  {
    "questionId": "js-089",
    "index": 1,
    "question": "How does CommonJS differ?",
    "answer": "CommonJS uses `require` and `module.exports` and traditionally loads modules synchronously. ES modules use `import` and `export`, have static module structure, and support better tooling such as tree shaking and dependency analysis.",
    "track": "javascript"
  },
  {
    "questionId": "js-090",
    "index": 0,
    "question": "Why are ES modules easier to analyze?",
    "answer": "Their imports and exports are statically declared, so tooling can determine the dependency graph without executing arbitrary module code. This enables tree shaking, better bundling, and clearer dependency analysis.",
    "track": "javascript"
  },
  {
    "questionId": "js-090",
    "index": 1,
    "question": "What is a side-effect import?",
    "answer": "An import such as `import \"./polyfill.js\"` loads a module only for its side effects. Bundlers must retain such modules when their side effects are considered observable.",
    "track": "javascript"
  },
  {
    "questionId": "js-091",
    "index": 0,
    "question": "Where should JWT headers be added?",
    "answer": "Treat the token as an authentication credential: validate its signature and relevant claims on the server, keep its lifetime limited, protect it from client-side exposure, and reject expired, malformed, or insufficiently privileged tokens.",
    "track": "javascript"
  },
  {
    "questionId": "js-091",
    "index": 1,
    "question": "How do you test the API client?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "javascript"
  },
  {
    "questionId": "js-092",
    "index": 0,
    "question": "Where should secrets live?",
    "answer": "Secrets belong on the server in a secret manager or protected environment configuration. Never put private keys, database passwords, or long-lived credentials in JavaScript shipped to the browser.",
    "track": "javascript"
  },
  {
    "questionId": "js-092",
    "index": 1,
    "question": "What changes between dev and production?",
    "answer": "Development usually enables source maps, detailed errors, Strict Mode checks, and local configuration; production uses optimized bundles, secure configuration, controlled logging, and stricter caching/security policies. The application should not depend on development-only behavior for correctness.",
    "track": "javascript"
  },
  {
    "questionId": "js-093",
    "index": 0,
    "question": "How would you deploy one image to multiple environments?",
    "answer": "Build the same immutable container image once and inject environment-specific configuration at deployment time through environment variables or a configuration/secret service. This keeps the artifact identical across environments and reduces configuration drift.",
    "track": "javascript"
  },
  {
    "questionId": "js-093",
    "index": 1,
    "question": "What are the security implications?",
    "answer": "Enforce the control on the server, use least privilege, validate untrusted input, protect credentials, and record security-relevant failures without logging sensitive values.",
    "track": "javascript"
  },
  {
    "questionId": "js-094",
    "index": 0,
    "question": "Where should flags be evaluated?",
    "answer": "Evaluate flags at the layer that owns the decision. Client flags can control presentation, but authorization and business-critical rollout decisions must be evaluated on the server so users cannot bypass them.",
    "track": "javascript"
  },
  {
    "questionId": "js-094",
    "index": 1,
    "question": "How do you avoid flag debt?",
    "answer": "Give every flag an owner, purpose, creation date, and planned removal date. Remove stale flags after rollout and test both relevant branches while the flag exists.",
    "track": "javascript"
  },
  {
    "questionId": "js-095",
    "index": 0,
    "question": "When should a request be retried?",
    "answer": "Retry transient failures such as connection resets, 429 responses, and selected 5xx responses when the operation is safe to repeat. Do not blindly retry validation errors or non-idempotent mutations without an idempotency mechanism.",
    "track": "javascript"
  },
  {
    "questionId": "js-095",
    "index": 1,
    "question": "401 vs 403?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "javascript"
  },
  {
    "questionId": "js-096",
    "index": 0,
    "question": "What is exponential backoff?",
    "answer": "Exponential backoff increases the delay between retries, for example 100 ms, 200 ms, 400 ms, with a maximum cap and usually random jitter. It reduces synchronized retry spikes during outages.",
    "track": "javascript"
  },
  {
    "questionId": "js-096",
    "index": 1,
    "question": "Where should the idempotency key be generated?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "javascript"
  },
  {
    "questionId": "js-097",
    "index": 0,
    "question": "Which status codes are retryable?",
    "answer": "Typically retry 429 and transient 5xx responses, subject to the API contract and `Retry-After`. Network failures can also be retried. Do not retry normal 4xx validation or authorization failures unless the request state can change and the API explicitly supports it.",
    "track": "javascript"
  },
  {
    "questionId": "js-097",
    "index": 1,
    "question": "Why is jitter important?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "javascript"
  },
  {
    "questionId": "js-098",
    "index": 0,
    "question": "How is this different from caching?",
    "answer": "Retrying repeats a failed operation; caching reuses a previous result to avoid making a new request. Retries address transient failure, while caching addresses latency, load, and repeated reads.",
    "track": "javascript"
  },
  {
    "questionId": "js-098",
    "index": 1,
    "question": "What happens if the shared request fails?",
    "answer": "All consumers waiting on the same shared promise should observe the failure, and the cache should not permanently retain the rejected state unless that behavior is intentional. A later request can create a new attempt after an appropriate retry or invalidation policy.",
    "track": "javascript"
  },
  {
    "questionId": "js-099",
    "index": 0,
    "question": "When is stale data unsafe?",
    "answer": "Stale data is unsafe when decisions depend on current values, such as authorization, balances, inventory, payment status, or destructive operations. In those cases, revalidate with the authoritative service before acting.",
    "track": "javascript"
  },
  {
    "questionId": "js-099",
    "index": 1,
    "question": "How would you invalidate the cache?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "javascript"
  },
  {
    "questionId": "js-100",
    "index": 0,
    "question": "How do you handle concurrent edits?",
    "answer": "Optimistic locking uses a version or timestamp so an update succeeds only if the resource is still at the version the user read. A mismatch should produce a conflict response rather than silently overwriting another user's change.",
    "track": "javascript"
  },
  {
    "questionId": "js-100",
    "index": 1,
    "question": "When should you avoid optimistic UI?",
    "answer": "Avoid optimistic updates when failure is common, the operation is irreversible, or rollback is difficult to represent correctly. In those cases, wait for authoritative server confirmation.",
    "track": "javascript"
  },
  {
    "questionId": "js-101",
    "index": 0,
    "question": "How do you prevent reconnect storms?",
    "answer": "Use exponential backoff with jitter, cap the retry rate, and reset the backoff only after a stable connection. Coordinate reconnect attempts so many clients do not continuously reconnect at the same instant.",
    "track": "javascript"
  },
  {
    "questionId": "js-101",
    "index": 1,
    "question": "How do you handle missed messages?",
    "answer": "Track a durable message offset, sequence number, or cursor and request replay from that position when reconnecting. If replay is unavailable, perform a full state resynchronization before processing new live updates.",
    "track": "javascript"
  },
  {
    "questionId": "js-102",
    "index": 0,
    "question": "What can a worker access?",
    "answer": "A worker can access worker-safe APIs such as timers, fetch, storage mechanisms supported by the environment, and `postMessage`, but it cannot directly manipulate the DOM. It runs independently of the main UI thread.",
    "track": "javascript"
  },
  {
    "questionId": "js-102",
    "index": 1,
    "question": "How do you terminate a worker?",
    "answer": "Call `worker.terminate()` from the main thread when the worker is no longer needed. If cleanup is performed inside the worker, it can call `self.close()` to stop itself.",
    "track": "javascript"
  },
  {
    "questionId": "js-103",
    "index": 0,
    "question": "localStorage vs cookies?",
    "answer": "`localStorage` is browser storage accessible to JavaScript and is commonly used for non-sensitive client state. Cookies are sent with matching HTTP requests and can be protected with flags such as `HttpOnly`, `Secure`, and `SameSite`; sensitive session credentials are generally safer in appropriately configured HttpOnly cookies.",
    "track": "javascript"
  },
  {
    "questionId": "js-103",
    "index": 1,
    "question": "Why can synchronous storage hurt performance?",
    "answer": "Measure first using profiling, metrics, and traces. Identify the dominant CPU, rendering, network, database, or allocation cost, then optimize that bottleneck and verify the change with before/after measurements.",
    "track": "javascript"
  },
  {
    "questionId": "js-104",
    "index": 0,
    "question": "Why is a div not a button?",
    "answer": "A div has no button semantics, keyboard activation behavior, or built-in disabled state. A button communicates the intended action to browsers and assistive technologies and should be preferred for clickable actions.",
    "track": "javascript"
  },
  {
    "questionId": "js-104",
    "index": 1,
    "question": "How should modal focus be managed?",
    "answer": "Move focus into the modal when it opens, keep keyboard focus within the dialog while it is modal, and restore focus to the triggering element when it closes. Also provide a proper accessible name and handle Escape consistently.",
    "track": "javascript"
  },
  {
    "questionId": "js-105",
    "index": 0,
    "question": "What should never be logged?",
    "answer": "Never log passwords, access tokens, refresh tokens, session cookies, API keys, full payment data, or unnecessary personal/customer data. Logs should contain safe identifiers, correlation IDs, timestamps, and diagnostic context with sensitive fields redacted.",
    "track": "javascript"
  },
  {
    "questionId": "js-105",
    "index": 1,
    "question": "How does distributed tracing extend this?",
    "answer": "A trace spans the complete request path, while individual spans represent work in services such as the gateway, frontend API, database, or downstream service. Propagating the trace context lets you correlate latency and failures across boundaries.",
    "track": "javascript"
  },
  {
    "questionId": "js-106",
    "index": 0,
    "question": "What belongs in a global error handler?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-106",
    "index": 1,
    "question": "How should errors be reported?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-107",
    "index": 0,
    "question": "How do you test retries?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "javascript"
  },
  {
    "questionId": "js-107",
    "index": 1,
    "question": "When are fake timers useful?",
    "answer": "Fake timers are useful for deterministic tests of debounce, throttle, polling, timeouts, and scheduled callbacks. Advance the test clock explicitly and also flush pending promises when the code mixes timers and microtasks.",
    "track": "javascript"
  },
  {
    "questionId": "js-108",
    "index": 0,
    "question": "Why can hidden fields not enforce security?",
    "answer": "Enforce the control on the server, use least privilege, validate untrusted input, protect credentials, and record security-relevant failures without logging sensitive values.",
    "track": "javascript"
  },
  {
    "questionId": "js-108",
    "index": 1,
    "question": "Where should authorization happen?",
    "answer": "Enforce authorization on the backend service that owns the protected operation. The frontend and gateway may perform early checks for UX, but the service must independently validate identity, roles/permissions, resource ownership, and business rules.",
    "track": "javascript"
  },
  {
    "questionId": "js-109",
    "index": 0,
    "question": "How do you find a heavy dependency?",
    "answer": "Inspect the production bundle with a bundle analyzer, identify large or duplicated modules, and check whether a dependency can be replaced, split, lazily loaded, or imported more narrowly. Measure the effect on the actual shipped chunks.",
    "track": "javascript"
  },
  {
    "questionId": "js-109",
    "index": 1,
    "question": "What metrics matter beyond bundle size?",
    "answer": "Track initial load time, JavaScript parse/compile/execute time, Core Web Vitals, route transition latency, error rate, and API latency. A smaller bundle is not automatically faster if rendering or backend latency dominates.",
    "track": "javascript"
  },
  {
    "questionId": "js-110",
    "index": 0,
    "question": "Where would you cache?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "javascript"
  },
  {
    "questionId": "js-110",
    "index": 1,
    "question": "How would you handle partial failure?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "javascript"
  },
  {
    "questionId": "js-110",
    "index": 2,
    "question": "How would you roll out the feature safely?",
    "answer": "Release behind a feature flag, start with internal or low-risk users, monitor errors and latency, then increase exposure gradually. Keep a rollback path and define the metrics that would stop or reverse the rollout.",
    "track": "javascript"
  },
  {
    "questionId": "fullstack-001",
    "index": 0,
    "question": "Where should validation happen?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-001",
    "index": 1,
    "question": "Where should authorization happen?",
    "answer": "Enforce authorization on the backend service that owns the protected operation. The frontend and gateway may perform early checks for UX, but the service must independently validate identity, roles/permissions, resource ownership, and business rules.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-001",
    "index": 2,
    "question": "How would you debug a failing request?",
    "answer": "Start with the browser network request and capture URL, method, status, payload, and correlation ID. Follow that ID through gateway logs, backend logs, traces, database calls, and downstream services, then reproduce with the same request outside the UI.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-002",
    "index": 0,
    "question": "Why use DTOs?",
    "answer": "DTOs prevent persistence entities and internal fields from becoming the API contract. They let you validate input, shape responses, hide sensitive fields, and evolve the database model independently from clients.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-002",
    "index": 1,
    "question": "PUT vs PATCH?",
    "answer": "PUT generally replaces the resource representation at the target URI and is expected to be idempotent. PATCH applies a partial modification; its exact semantics depend on the patch format, and the server should validate which fields may change.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-002",
    "index": 2,
    "question": "How do you version an API?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-003",
    "index": 0,
    "question": "Entity vs DTO?",
    "answer": "An entity represents persistence state and is managed by JPA/Hibernate; a DTO represents data crossing an API or application boundary. Keeping them separate avoids exposing persistence concerns and makes API contracts easier to evolve.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-003",
    "index": 1,
    "question": "Where should mapping happen?",
    "answer": "Map DTOs at the application/service boundary, keeping controllers thin and persistence entities isolated from transport models. For larger systems, dedicated mapper classes or MapStruct can make the mapping consistent and testable.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-004",
    "index": 0,
    "question": "How do you retry?",
    "answer": "Retry only transient failures, use bounded exponential backoff with jitter, and respect `Retry-After` when provided. For mutations, use idempotency keys or another deduplication mechanism before retrying.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-004",
    "index": 1,
    "question": "What belongs in the API error body?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-005",
    "index": 0,
    "question": "Why does preflight happen?",
    "answer": "A CORS preflight is an OPTIONS request sent by the browser before certain cross-origin requests. It asks the server whether the origin, method, and requested headers are allowed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-005",
    "index": 1,
    "question": "CORS vs CSRF?",
    "answer": "CORS is a browser policy controlling whether JavaScript from one origin can read responses from another origin. CSRF is an attack where a victim's browser is induced to perform an authenticated action. CORS configuration does not replace CSRF protection for cookie-based authentication.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-005",
    "index": 2,
    "question": "Why does Postman not show the same CORS error?",
    "answer": "CORS is enforced by the browser and controls whether frontend JavaScript from one origin can access another origin's response. The server declares allowed origins, methods and headers. CORS is not an authentication mechanism and does not by itself protect an API from non-browser clients.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-006",
    "index": 0,
    "question": "Where should tokens be stored?",
    "answer": "For browser applications, prefer short-lived access tokens and keep long-lived refresh credentials in a Secure, HttpOnly, appropriately SameSite cookie when the architecture supports it. Avoid localStorage for sensitive long-lived tokens because JavaScript can read it during an XSS attack.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-006",
    "index": 1,
    "question": "How does refresh work?",
    "answer": "When an access token expires, the client uses a refresh token or server-managed session to obtain a new access token. Refresh tokens should be protected, rotated where appropriate, and invalidated on logout or compromise.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-006",
    "index": 2,
    "question": "What happens after a 401?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-007",
    "index": 0,
    "question": "RBAC vs ABAC?",
    "answer": "RBAC grants permissions through roles, while ABAC evaluates attributes such as user, resource, action, tenant, or environment. RBAC is simpler for stable role models; ABAC is useful when access depends on fine-grained contextual rules.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-007",
    "index": 1,
    "question": "How should a 403 be handled?",
    "answer": "HTTP 403 indicates that the request is understood but the authenticated principal is not allowed to perform the operation. It is normally an authorization decision, not a signal that the client should simply send the same credentials again.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-008",
    "index": 0,
    "question": "Where is the status generated?",
    "answer": "The backend generates the authoritative HTTP status based on the operation result. The frontend should interpret the status rather than inventing success or failure based only on the response body.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-008",
    "index": 1,
    "question": "Should React retry a 403?",
    "answer": "HTTP 403 indicates that the request is understood but the authenticated principal is not allowed to perform the operation. It is normally an authorization decision, not a signal that the client should simply send the same credentials again.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-009",
    "index": 0,
    "question": "Where should validation errors go?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-009",
    "index": 1,
    "question": "Why include a trace ID?",
    "answer": "A trace ID lets one request be correlated across frontend logs, gateway logs, backend services, and downstream calls. It dramatically reduces the time needed to diagnose distributed failures.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-010",
    "index": 0,
    "question": "Bean Validation vs business validation?",
    "answer": "Validate input at the UI for immediate feedback and again on the backend for correctness and security. Return field-level errors in a stable structure so the client can display them next to the relevant fields.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-010",
    "index": 1,
    "question": "How do you return field errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-011",
    "index": 0,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple but can become expensive at large offsets and can produce duplicates or gaps when data changes. Cursor pagination uses a stable position such as an ID or timestamp and is usually better for large changing datasets.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-011",
    "index": 1,
    "question": "How should sorting be validated?",
    "answer": "Accept only an allowlisted set of sortable fields and directions. Map client values to known entity/database columns rather than concatenating arbitrary field names into SQL or query fragments.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-012",
    "index": 0,
    "question": "How do you debounce?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-012",
    "index": 1,
    "question": "What indexes would you add?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-013",
    "index": 0,
    "question": "Where should files be stored?",
    "answer": "Store uploaded files in object storage rather than the application container filesystem for scalable deployments. Keep metadata such as owner, key, size, checksum, and content type in the database and enforce access through the backend.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-013",
    "index": 1,
    "question": "How do you scan uploads?",
    "answer": "Validate the request, inspect file content, scan for malware where required, store uploads outside executable paths, and quarantine failures. Never trust a filename or browser-provided MIME type as the only security check.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-014",
    "index": 0,
    "question": "What happens on rollback?",
    "answer": "Roll back the application deployment to the previous known-good version while keeping database changes compatible with both versions when possible. Database rollback should be a deliberate migration strategy, not an automatic assumption that data changes can always be reversed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-014",
    "index": 1,
    "question": "How do you handle long-running workflows?",
    "answer": "Return an operation/job ID with `202 Accepted`, process the work asynchronously, and expose status or completion events. Persist workflow state so it survives restarts and make each step idempotent where retries are possible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-015",
    "index": 0,
    "question": "What if two users update the same record?",
    "answer": "Use optimistic locking such as JPA `@Version` or conditional updates so the second stale update fails instead of silently overwriting the first. Return `409 Conflict` when the client must refresh and reconcile.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-015",
    "index": 1,
    "question": "How do idempotency keys help?",
    "answer": "React uses keys to identify list items across renders so it can reconcile elements correctly. A stable unique identifier from the data is preferred. Using an array index can cause incorrect state association when items are inserted, removed or reordered.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-016",
    "index": 0,
    "question": "Where should auth headers be added?",
    "answer": "Add authentication headers in a centralized HTTP client or request interceptor rather than repeating them in every component. The backend must still validate the token and authorization for every protected operation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-016",
    "index": 1,
    "question": "How would you test the client?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-017",
    "index": 0,
    "question": "Build-time vs runtime frontend config?",
    "answer": "Build-time frontend configuration is embedded when the bundle is created, so changing it normally requires a rebuild. Runtime configuration can be loaded when the app starts, allowing the same artifact to be promoted between environments.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-017",
    "index": 1,
    "question": "Where do database credentials live?",
    "answer": "Keep database credentials in a secret manager or protected deployment configuration, not source code or frontend configuration. Rotate them periodically and grant the application only the database privileges it requires.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-018",
    "index": 0,
    "question": "When do you version?",
    "answer": "Version an API when a breaking contract change cannot be introduced compatibly. Prefer additive, backward-compatible changes first, and deprecate old fields or endpoints before removing them.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-018",
    "index": 1,
    "question": "How do you deprecate an endpoint?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-019",
    "index": 0,
    "question": "Where is the key stored?",
    "answer": "Store the idempotency key with request status and the resulting business response in durable shared storage, protected by a unique constraint. A repeat request returns the recorded result instead of executing the operation again.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-019",
    "index": 1,
    "question": "How long should it be valid?",
    "answer": "For access tokens, use a short lifetime appropriate to the risk and pair them with a controlled refresh mechanism. The exact duration depends on sensitivity, revocation requirements, and the organization’s security policy.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-020",
    "index": 0,
    "question": "Where should the ID be generated?",
    "answer": "Generate identifiers at the system boundary that owns the resource, usually the backend, so clients cannot choose arbitrary authoritative IDs. UUIDs are commonly generated server-side for distributed systems.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-020",
    "index": 1,
    "question": "How does distributed tracing differ?",
    "answer": "Distributed tracing follows one logical request across multiple processes or services using trace and span context. Normal logging records events locally; tracing adds parent/child timing and cross-service correlation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-021",
    "index": 0,
    "question": "Where would you start?",
    "answer": "Start at the first observable failure: request status, trace ID, and error message. Then trace the request downstream until the first component whose behavior differs from the expected contract.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-021",
    "index": 1,
    "question": "How do you split frontend and backend ownership?",
    "answer": "Frontend owns presentation, client state, accessibility, and API consumption; backend owns business rules, persistence, authorization, and API contract semantics. Shared contracts should be documented or generated without coupling implementation details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-022",
    "index": 0,
    "question": "BFF vs API gateway?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-022",
    "index": 1,
    "question": "Who owns authentication?",
    "answer": "A centralized identity/authentication system establishes who the user is, while the application validates the resulting credentials or tokens and enforces authorization. Individual services should not invent incompatible authentication schemes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-023",
    "index": 0,
    "question": "Gateway vs load balancer?",
    "answer": "A load balancer primarily distributes traffic across healthy instances. An API gateway can also route requests but adds API concerns such as authentication, rate limiting, request transformation, and observability.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-023",
    "index": 1,
    "question": "Where should rate limiting live?",
    "answer": "Apply coarse limits at the gateway or edge to protect the platform, and add business-specific limits in the service that understands the operation. Distributed limits need shared state or a coordinated algorithm when requests can hit multiple instances.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-024",
    "index": 0,
    "question": "What status code would you return?",
    "answer": "Use 2xx for successful operations, 4xx when the client request is invalid or unauthorized, and 5xx for failures the server could not successfully handle. For resource conflicts, `409 Conflict` is appropriate; for accepted asynchronous work, `202 Accepted` is appropriate.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-024",
    "index": 1,
    "question": "How does @Version work?",
    "answer": "JPA `@Version` adds a version column to an entity. An update includes the version in its condition; if another transaction has already changed the row, the version no longer matches and Hibernate detects an optimistic-lock conflict instead of silently overwriting the change.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-025",
    "index": 0,
    "question": "What should not be cached?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-025",
    "index": 1,
    "question": "Cache-aside vs write-through?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-026",
    "index": 0,
    "question": "ETag vs Last-Modified?",
    "answer": "`ETag` identifies a representation using an opaque version value, while `Last-Modified` uses a timestamp. Conditional requests with `If-None-Match` or `If-Modified-Since` let the server return `304 Not Modified` when the cached representation is still valid.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-026",
    "index": 1,
    "question": "Can ETags be used for concurrency?",
    "answer": "Database concurrency is mainly controlled through transaction isolation, locking and MVCC mechanisms. The correct choice depends on whether the application must prevent dirty reads, non-repeatable reads, phantom reads or lost updates while balancing throughput and contention.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-027",
    "index": 0,
    "question": "Where should retry happen?",
    "answer": "Retry at the boundary that understands whether the operation is safe to repeat, usually the client/service calling a downstream dependency. Avoid stacking retries across multiple services because multiplicative retries can amplify an outage.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-027",
    "index": 1,
    "question": "Why add jitter?",
    "answer": "Jitter adds randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry bursts and protects the dependency from a retry storm.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-028",
    "index": 0,
    "question": "Where should limits live?",
    "answer": "Limits should be enforced as close as practical to the resource they protect, with edge/gateway limits for broad protection and service-level limits for business-specific quotas.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-028",
    "index": 1,
    "question": "How do distributed rate limiters work?",
    "answer": "Instances share rate-limit state in a central or distributed store, commonly using atomic operations with a token-bucket or sliding-window algorithm. The decision must be atomic to avoid race conditions between instances.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-029",
    "index": 0,
    "question": "Why HttpOnly?",
    "answer": "`HttpOnly` prevents JavaScript from reading a cookie, reducing the impact of token theft through client-side scripts. It does not prevent CSRF by itself, so use appropriate `SameSite` settings and/or CSRF protection where needed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-029",
    "index": 1,
    "question": "How does SameSite help?",
    "answer": "SameSite controls when browsers send cookies in cross-site contexts. Lax or Strict settings can reduce CSRF risk by preventing cookies from being attached to many cross-site requests; None requires Secure and allows cross-site cookie use.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-029",
    "index": 2,
    "question": "Where does CSRF protection fit?",
    "answer": "CSRF protection is required when authentication relies on cookies that browsers send automatically. Use SameSite cookies and a server-validated CSRF token for state-changing requests.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-030",
    "index": 0,
    "question": "How does the outbox work?",
    "answer": "The service writes the business change and an outbox event in the same database transaction. A separate publisher reads committed outbox rows and sends them to the broker, then marks them published; consumers still need idempotency because publishing can be retried.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-030",
    "index": 1,
    "question": "What if publishing fails?",
    "answer": "The outbox row remains pending because the database transaction already committed. A background publisher retries it with backoff until delivery succeeds or the record is moved to an operational failure state for investigation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-031",
    "index": 0,
    "question": "Polling vs WebSocket?",
    "answer": "Polling repeatedly asks the server for changes and is simple but can waste requests and add latency. WebSocket maintains a persistent connection for low-latency bidirectional updates but requires connection management, reconnection, and scaling considerations.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-031",
    "index": 1,
    "question": "How do you make processing idempotent?",
    "answer": "Assign each operation a unique idempotency or message ID, store the processed state atomically with the business effect where possible, and return the existing result for duplicate requests. This prevents retries from creating duplicate side effects.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-032",
    "index": 0,
    "question": "How do you reconnect?",
    "answer": "Reconnect with exponential backoff and jitter, resubscribe after the connection is restored, and use a cursor or sequence number to recover missed events. Reset the backoff after a stable connection.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-032",
    "index": 1,
    "question": "How do you authenticate?",
    "answer": "Authenticate at the API boundary using a validated session or token, then propagate the authenticated identity to services through trusted credentials or context. Authorization is a separate decision based on permissions and resource ownership.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-033",
    "index": 0,
    "question": "What should E2E cover?",
    "answer": "E2E tests should cover critical user journeys across the real frontend, API, authentication, and representative persistence/integration boundaries. Keep detailed business-rule tests at lower levels so E2E remains reliable and focused.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-033",
    "index": 1,
    "question": "How do you mock external services?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-034",
    "index": 0,
    "question": "Consumer-driven contracts?",
    "answer": "Consumer-driven contract tests let consumers define the API interactions they depend on and verify that the provider continues to satisfy them. They catch breaking changes earlier than waiting for full end-to-end environments.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-034",
    "index": 1,
    "question": "OpenAPI-based validation?",
    "answer": "OpenAPI describes HTTP paths, parameters, request and response schemas, and security requirements in a machine-readable contract. It can drive documentation, client generation, validation, and contract checks.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-035",
    "index": 0,
    "question": "Code generation trade-offs?",
    "answer": "Generated clients or types reduce manual contract drift and improve consistency, but they can create large generated codebases and require a reliable schema pipeline. Use them when the API contract is stable and tooling can regenerate deterministically.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-035",
    "index": 1,
    "question": "How do you keep docs current?",
    "answer": "Generate API documentation from the source contract where possible, validate examples in CI, and treat breaking contract changes as reviewable artifacts. Ownership and automated checks are more reliable than relying on developers to update prose manually.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-036",
    "index": 0,
    "question": "What if the browser shows a CORS error?",
    "answer": "CORS is enforced by the browser and controls whether frontend JavaScript from one origin can access another origin's response. The server declares allowed origins, methods and headers. CORS is not an authentication mechanism and does not by itself protect an API from non-browser clients.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-036",
    "index": 1,
    "question": "How do you distinguish 4xx from 5xx?",
    "answer": "Return 4xx when the client request cannot be accepted as sent, such as invalid input or missing authorization. Return 5xx when the server or an upstream dependency prevents successful handling despite a valid request.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-037",
    "index": 0,
    "question": "How do you reduce bundle size?",
    "answer": "Analyze the production bundle, remove unused dependencies, prefer tree-shakable imports, lazy-load routes and heavy features, and avoid shipping server-only code to the browser. Measure the resulting initial and route-specific chunks.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-037",
    "index": 1,
    "question": "How do you find a slow SQL query?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-038",
    "index": 0,
    "question": "join fetch?",
    "answer": "Both can make HTTP requests, but fetch is a built-in browser API while Axios is a library with conveniences such as interceptors and automatic JSON handling. The important engineering choice is consistent error handling, cancellation, authentication behavior and response validation rather than the library name itself.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-038",
    "index": 1,
    "question": "EntityGraph?",
    "answer": "It avoids making relationships globally eager.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-038",
    "index": 2,
    "question": "DTO projection?",
    "answer": "A DTO projection selects only the columns required by a read use case instead of loading a full entity graph. This can reduce database I/O and serialization cost, especially for large tables and list endpoints.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-039",
    "index": 0,
    "question": "Where does TLS terminate?",
    "answer": "TLS can terminate at the edge load balancer or gateway, with encrypted traffic continued internally when the threat model requires it. The important requirement is that every network boundary is protected according to the deployment’s trust model.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-039",
    "index": 1,
    "question": "How do you deploy multiple API instances?",
    "answer": "Keep the API contract explicit, validate inputs at the boundary, return meaningful HTTP status codes, and keep business rules on the backend. Version or deprecate the contract when changes are not backward compatible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-040",
    "index": 0,
    "question": "What about database migrations?",
    "answer": "Version migrations in source control, run them automatically through a controlled deployment process, and make schema changes backward-compatible during rolling deployments. Tools such as Flyway or Liquibase can track applied versions.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-040",
    "index": 1,
    "question": "How do you roll back schema changes?",
    "answer": "Prefer forward-compatible migrations because destructive rollback is often unsafe once new data has been written. Use expand-and-contract: add new structures, deploy compatible code, migrate data, then remove old structures only after all old clients are gone.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-041",
    "index": 0,
    "question": "How do you handle renamed fields?",
    "answer": "Introduce the new field while continuing to accept the old one, map both to the same internal representation, migrate clients, and remove the old field only after the compatibility window ends.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-041",
    "index": 1,
    "question": "Can frontend and backend deploy independently?",
    "answer": "Yes, if the API contract remains backward compatible. During rolling releases, the backend should support both old and new clients long enough for the frontend rollout to complete.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-042",
    "index": 0,
    "question": "How do you clean up flags?",
    "answer": "Once the rollout is complete, remove the flag, dead branch, tests for obsolete states, and configuration entries. Record ownership and a removal deadline when the flag is introduced so it does not become permanent complexity.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-042",
    "index": 1,
    "question": "How do you roll out to 10% of users?",
    "answer": "Use a server-controlled feature flag with deterministic user or tenant bucketing so the same users consistently receive the feature. Monitor error rate, latency, and business metrics before increasing the percentage.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-043",
    "index": 0,
    "question": "Audit log vs application log?",
    "answer": "Application logs describe operational events used for debugging. Audit logs record security- or business-significant actions, including who performed the action, what changed, when, and from where, and usually require stronger retention and integrity controls.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-043",
    "index": 1,
    "question": "How do you protect audit records?",
    "answer": "Restrict write and read access, prevent normal application users from editing historical entries, encrypt sensitive data, and use append-only or tamper-evident storage where required. Retention should follow compliance and business policy.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-044",
    "index": 0,
    "question": "Invalidate vs direct cache update?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-044",
    "index": 1,
    "question": "What is stale-while-revalidate?",
    "answer": "The client can immediately serve cached data while a background request checks for a fresher version. This reduces perceived latency while still allowing the cache to converge toward current data.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-045",
    "index": 0,
    "question": "Circuit breaker states?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-045",
    "index": 1,
    "question": "What should the UI show during degraded mode?",
    "answer": "Show the user what is still available, clearly label unavailable or stale data, disable actions that cannot safely complete, and provide retry/recovery guidance. Do not display a false success state when the backend is degraded.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-046",
    "index": 0,
    "question": "XSS?",
    "answer": "Cross-site scripting occurs when untrusted input is interpreted as executable script in a user’s browser. Prevent it with output encoding, safe DOM APIs, framework escaping, content security policy, and careful handling of HTML rendering; never trust user-provided HTML by default.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-046",
    "index": 1,
    "question": "CSRF?",
    "answer": "CSRF tricks a browser into sending an authenticated request to a target site without the user intentionally initiating that action. It is especially relevant when authentication credentials are automatically attached by the browser, such as session cookies. Common defenses include SameSite cookies, CSRF tokens and origin checks. A typical Authorization: Bearer token kept outside automatically attached browser credentials is not exposed to the classic cookie-based CSRF mechanism, although browser architecture and storage choices still matter.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-046",
    "index": 2,
    "question": "CORS?",
    "answer": "CORS controls whether browser JavaScript from one origin can access responses from another origin. The server communicates its policy with headers such as Access-Control-Allow-Origin and may receive a preflight OPTIONS request for non-simple cross-origin requests. CORS does not stop a backend client from calling the endpoint directly, so authentication and authorization remain mandatory. Credentials such as cookies require additional CORS constraints and cannot be combined with a wildcard allowed origin.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-046",
    "index": 3,
    "question": "Secrets management?",
    "answer": "Store secrets in a managed secret store or protected deployment configuration, inject them only where needed, rotate them, and audit access. Never commit secrets to Git or expose them through client-side environment variables.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-047",
    "index": 0,
    "question": "What metrics would you alert on?",
    "answer": "Alert on user-impacting signals such as error rate, latency, saturation, availability, queue depth, database health, and critical business failures. Alerts should have clear thresholds and an actionable response rather than triggering on every small fluctuation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-047",
    "index": 1,
    "question": "How do you avoid PII in telemetry?",
    "answer": "Do not collect unnecessary personal data. Redact or hash sensitive identifiers, define allowed fields, restrict access, encrypt telemetry, and apply retention policies that remove data when it is no longer needed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-048",
    "index": 0,
    "question": "Where does payment happen?",
    "answer": "Payment authorization and capture must happen on trusted backend/payment-provider integrations, never in the browser as an authoritative operation. The backend validates the order and payment state and handles provider callbacks or webhooks securely.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-048",
    "index": 1,
    "question": "How do you prevent duplicate orders?",
    "answer": "Use an idempotency key for order creation and enforce a unique business constraint where applicable. The backend should return the original order/result when the same request is retried instead of creating another order.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-048",
    "index": 2,
    "question": "What if inventory fails?",
    "answer": "Do not mark the order as successfully confirmed until inventory is reserved according to the business workflow. Use a transactional or saga-style process with compensating actions and clear intermediate states when inventory and payment are separate systems.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-049",
    "index": 0,
    "question": "What if a user edits the request manually?",
    "answer": "Treat every client field as untrusted. The backend must validate the request against the authenticated user, allowed values, business rules, and server-side state before performing the operation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-049",
    "index": 1,
    "question": "Where do roles come from?",
    "answer": "Roles come from a trusted identity or authorization source such as the server-side user record or validated token claims. The frontend can consume them for display decisions but cannot define authoritative permissions.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-050",
    "index": 0,
    "question": "How would you debug a 401?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-050",
    "index": 1,
    "question": "How would you debug slow responses?",
    "answer": "Measure first using profiling, metrics, and traces. Identify the dominant CPU, rendering, network, database, or allocation cost, then optimize that bottleneck and verify the change with before/after measurements.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-050",
    "index": 2,
    "question": "How would you debug stale UI data?",
    "answer": "Inspect the network response, cache key, invalidation policy, and component state. Confirm whether the backend returned stale data or the frontend displayed an old cached value, then verify that mutations invalidate or update the exact affected cache entries.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-051",
    "index": 0,
    "question": "Where should DTO mapping happen?",
    "answer": "Perform mapping at the service/application boundary so controllers handle transport concerns and repositories handle persistence concerns. This keeps entities from leaking into API responses and makes mapping rules testable.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-051",
    "index": 1,
    "question": "How do you organize packages by feature?",
    "answer": "Group controllers, services, repositories, DTOs, mappers, and tests around a business feature such as orders or users. Keep cross-cutting infrastructure separate and avoid a single global package containing every controller or service.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-052",
    "index": 0,
    "question": "PUT vs PATCH?",
    "answer": "PUT generally replaces the resource representation at the target URI and is expected to be idempotent. PATCH applies a partial modification; its exact semantics depend on the patch format, and the server should validate which fields may change.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-052",
    "index": 1,
    "question": "How do you handle optimistic updates?",
    "answer": "Update the UI immediately using the expected result, send the mutation, and reconcile with the server response. If the request fails or conflicts, roll back the optimistic state and show an actionable error or refresh the authoritative data.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-053",
    "index": 0,
    "question": "Where do you map DTOs?",
    "answer": "Use the defined API contract for this operation, validate untrusted input before processing it, and make success, failure, and boundary cases explicit to the caller.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-053",
    "index": 1,
    "question": "Should response DTOs contain nested entities?",
    "answer": "Response DTOs can contain nested DTOs when the API contract requires related data, but they should not expose JPA entities directly. Limit nesting and fields to what the client needs to avoid huge payloads and accidental lazy-loading or sensitive-field exposure.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-054",
    "index": 0,
    "question": "How do you model validation errors?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-054",
    "index": 1,
    "question": "What status should validation failures use?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-055",
    "index": 0,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple but can become expensive at large offsets and can produce duplicates or gaps when data changes. Cursor pagination uses a stable position such as an ID or timestamp and is usually better for large changing datasets.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-055",
    "index": 1,
    "question": "How do you keep sorting stable?",
    "answer": "Use an allowlist of sort fields and add a deterministic secondary key such as the primary key. Stable ordering prevents records from jumping between pages when many rows have the same primary sort value.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-056",
    "index": 0,
    "question": "How do you debounce safely?",
    "answer": "Debouncing delays execution until a quiet period has passed, so repeated events such as typing trigger the action only after the user stops. It is useful for search suggestions or validation. Throttling instead limits execution to at most once per interval, which is often better for scroll or resize events.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-056",
    "index": 1,
    "question": "How do you index the filtered columns?",
    "answer": "Measure the actual query, inspect its execution plan and row estimates, then optimize predicates, joins, indexes, and selected columns based on the workload. Verify the improvement with the same production-like data and query pattern.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-057",
    "index": 0,
    "question": "Where should access tokens be stored?",
    "answer": "Treat the token as an authentication credential: validate its signature and relevant claims on the server, keep its lifetime limited, protect it from client-side exposure, and reject expired, malformed, or insufficiently privileged tokens.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-057",
    "index": 1,
    "question": "How does refresh work?",
    "answer": "When an access token expires, the client uses a refresh token or server-managed session to obtain a new access token. Refresh tokens should be protected, rotated where appropriate, and invalidated on logout or compromise.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-058",
    "index": 0,
    "question": "What happens after a 401?",
    "answer": "HTTP 401 means the request lacks valid authentication credentials, while 403 means the server understood the identity but refuses the operation. In a token-based API, an expired or invalid access token commonly results in 401 and may trigger re-authentication or token refresh logic.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-058",
    "index": 1,
    "question": "What happens after a 403?",
    "answer": "HTTP 403 indicates that the request is understood but the authenticated principal is not allowed to perform the operation. It is normally an authorization decision, not a signal that the client should simply send the same credentials again.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-059",
    "index": 0,
    "question": "What should be exposed to users?",
    "answer": "Expose only information required by the client and appropriate for the authenticated user. Keep internal identifiers, stack traces, secrets, database details, and sensitive operational metadata out of normal API responses.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-059",
    "index": 1,
    "question": "How do you correlate the error with logs?",
    "answer": "Handle the failure at the boundary that can make the correct decision: validate expected client errors explicitly, map them to stable error responses, log unexpected failures with correlation IDs, and avoid exposing internal details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-060",
    "index": 0,
    "question": "How should 500 be handled?",
    "answer": "Return a safe generic error response with a correlation ID, log the detailed exception server-side, and avoid exposing stack traces or internal infrastructure details. Monitor the error and investigate the underlying cause.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-060",
    "index": 1,
    "question": "Should React automatically retry 409?",
    "answer": "No. `409 Conflict` usually means the client’s state conflicts with current server state, such as optimistic locking. The UI should explain the conflict and refresh or reconcile rather than blindly repeating the same request.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-061",
    "index": 0,
    "question": "What if two users edit simultaneously?",
    "answer": "Use optimistic locking or conditional updates so the second update detects that its version is stale. Return a conflict and let the client refresh, compare changes, and explicitly resolve the conflict when necessary.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-061",
    "index": 1,
    "question": "How do you prevent duplicate mutations?",
    "answer": "Use a client-side pending guard for user experience and an idempotency key or unique business constraint on the backend for correctness. The server should treat repeated requests with the same key as the same operation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-062",
    "index": 0,
    "question": "How do you scan uploads?",
    "answer": "Validate the request, inspect file content, scan for malware where required, store uploads outside executable paths, and quarantine failures. Never trust a filename or browser-provided MIME type as the only security check.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-062",
    "index": 1,
    "question": "How do you generate download URLs?",
    "answer": "Generate short-lived signed URLs from the backend or storage service after authorization succeeds. The client receives a URL with limited scope and lifetime instead of direct unrestricted storage credentials.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-063",
    "index": 0,
    "question": "What if an external payment call fails?",
    "answer": "Avoid holding a database transaction open while waiting on a slow payment provider. Persist the payment attempt and business state, use provider idempotency where available, and reconcile asynchronous success or failure through callbacks or polling.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-063",
    "index": 1,
    "question": "When should work become asynchronous?",
    "answer": "Use asynchronous processing when work is slow, retryable, independent of the immediate response, or suitable for queue-based processing. Return a job or correlation ID when the client needs to check status later.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-064",
    "index": 0,
    "question": "Where is the idempotency key stored?",
    "answer": "Store idempotency records in shared durable storage when correctness must survive retries and multiple service instances. A database is common; Redis is suitable only when its durability and retention guarantees match the business risk.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-064",
    "index": 1,
    "question": "How long should it be retained?",
    "answer": "Retention should be based on legal, compliance, security, and business requirements, with the minimum period needed for the purpose. Define deletion or archival rules rather than retaining data indefinitely.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-065",
    "index": 0,
    "question": "JPA @Version?",
    "answer": "`@Version` enables optimistic locking. Hibernate includes the current version in the update condition and increments it after a successful update; if no row matches because another transaction changed it, an optimistic-lock exception is raised.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-065",
    "index": 1,
    "question": "When would you use pessimistic locking?",
    "answer": "Pessimistic locking is appropriate when conflicts are frequent or the cost of concurrent modification is high and the transaction can hold a lock for a short, predictable period. It reduces conflicting updates but can increase blocking and deadlocks, so optimistic locking is often preferable when conflicts are rare.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-066",
    "index": 0,
    "question": "Where should cache invalidation happen?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-066",
    "index": 1,
    "question": "What data should never be cached?",
    "answer": "Treat the database or service as the source of truth and define cache freshness, invalidation, and failure behavior explicitly. The cache should improve latency without allowing stale or unauthorized data to leak.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-067",
    "index": 0,
    "question": "How do you deprecate v1?",
    "answer": "Announce the deprecation, document the replacement, keep v1 compatible during a defined migration window, measure remaining usage, and communicate a removal date. Remove it only after consumers have migrated or an agreed exception exists.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-067",
    "index": 1,
    "question": "How do you handle renamed fields?",
    "answer": "Introduce the new field while continuing to accept the old one, map both to the same internal representation, migrate clients, and remove the old field only after the compatibility window ends.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-068",
    "index": 0,
    "question": "How do you detect breaking changes?",
    "answer": "Compare the proposed API schema against the previous contract in CI and flag removed fields, incompatible type changes, stricter requirements, or changed semantics. Contract tests can add runtime confidence for important interactions.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-068",
    "index": 1,
    "question": "Would you generate a full client or only types?",
    "answer": "Generate a full client when the API is stable and standardized request/response behavior provides meaningful productivity gains. Generate only types when the project already has a strong HTTP abstraction or needs custom transport, caching, and error handling.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-069",
    "index": 0,
    "question": "Where do contract tests fit?",
    "answer": "A contract test verifies the request and response shape a consumer depends on. It catches breaking API changes earlier than relying only on end-to-end tests.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-069",
    "index": 1,
    "question": "How do you mock authentication?",
    "answer": "Test the observable contract: inputs, outputs, side effects, and failure behavior. Keep unit tests deterministic and fast, then add integration or end-to-end coverage for wiring and critical user flows.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-070",
    "index": 0,
    "question": "Consumer-driven contracts?",
    "answer": "Consumer-driven contract tests let consumers define the API interactions they depend on and verify that the provider continues to satisfy them. They catch breaking changes earlier than waiting for full end-to-end environments.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-070",
    "index": 1,
    "question": "How do you handle optional fields?",
    "answer": "Define whether an optional field means absent, null, or a default value, and keep that meaning consistent across versions. Avoid making a previously required field optional without considering how old clients interpret the response.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-071",
    "index": 0,
    "question": "Build-time vs runtime frontend config?",
    "answer": "Build-time frontend configuration is embedded when the bundle is created, so changing it normally requires a rebuild. Runtime configuration can be loaded when the app starts, allowing the same artifact to be promoted between environments.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-071",
    "index": 1,
    "question": "How do you rotate secrets?",
    "answer": "Store secrets centrally, support overlapping old/new credentials during rotation when the provider allows it, deploy the new secret, verify usage, then revoke the old one. Automate rotation for credentials that support it.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-072",
    "index": 0,
    "question": "Where should TLS terminate?",
    "answer": "Use the defined API contract for this operation, validate untrusted input before processing it, and make success, failure, and boundary cases explicit to the caller.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-072",
    "index": 1,
    "question": "How do containers communicate?",
    "answer": "Containers communicate over the network using service discovery and stable service names rather than hard-coded container IPs. In orchestration platforms, services or DNS names provide the stable endpoint while instances scale dynamically.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-073",
    "index": 0,
    "question": "How do you handle SPA fallback routes?",
    "answer": "Keep routing declarative and map URL parameters to the data needed by the screen. Validate parameters, handle missing resources explicitly, and preserve navigation state in the URL when it should be bookmarkable.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-073",
    "index": 1,
    "question": "Where do rate limits belong?",
    "answer": "Use edge/gateway limits to protect the whole platform and service-level limits for business-specific quotas. For distributed instances, use a shared or coordinated limiter so clients cannot bypass limits by reaching another instance.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-074",
    "index": 0,
    "question": "Why does curl ignore CORS?",
    "answer": "curl does not enforce the browser same-origin policy, so an API call can succeed with curl even when browser JavaScript is blocked by CORS. CORS is primarily a browser security mechanism.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-074",
    "index": 1,
    "question": "CORS vs CSRF?",
    "answer": "CORS is a browser policy controlling whether JavaScript from one origin can read responses from another origin. CSRF is an attack where a victim's browser is induced to perform an authenticated action. CORS configuration does not replace CSRF protection for cookie-based authentication.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-075",
    "index": 0,
    "question": "Where should rate limiting happen?",
    "answer": "Enforce limits at the edge for broad protection and at the owning service for business-specific quotas. Use shared atomic state when multiple instances must enforce one global limit.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-075",
    "index": 1,
    "question": "How do you handle distributed counters?",
    "answer": "Use an atomic operation in a shared datastore such as Redis, or use database atomic updates when the consistency requirements fit. Define the time window and expiration carefully so counters cannot race or grow indefinitely.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-076",
    "index": 0,
    "question": "W3C Trace Context?",
    "answer": "Keep one authoritative owner for the value, derive data instead of duplicating it, and choose local state, Context, or a dedicated store based on how widely the value is shared and how frequently it changes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-076",
    "index": 1,
    "question": "What data should not go into a trace?",
    "answer": "Do not put passwords, tokens, payment credentials, raw sensitive payloads, or unnecessary PII into trace attributes. Keep trace fields small, structured, and safe to retain and share with observability systems.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-077",
    "index": 0,
    "question": "What should readiness depend on?",
    "answer": "Readiness should reflect whether the instance can safely receive traffic, including required application initialization and critical dependencies. It should not necessarily require every optional dependency to be healthy if the service can still perform useful work.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-077",
    "index": 1,
    "question": "How do rolling deployments use readiness?",
    "answer": "The orchestrator sends traffic only to instances whose readiness check passes, starts new instances, and removes old ones gradually. A correct readiness endpoint prevents requests from reaching instances that have started but cannot yet serve traffic.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-078",
    "index": 0,
    "question": "How do you roll back?",
    "answer": "Keep the previous application artifact available, stop the rollout when health or business metrics cross the defined threshold, and deploy the known-good version. Ensure database changes remain backward compatible so rollback does not break the schema contract.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-078",
    "index": 1,
    "question": "How do you manage database migrations in CI?",
    "answer": "Run versioned migrations through a controlled deployment stage, validate them against a representative database, and fail the pipeline on migration errors. Do not let application startup unpredictably perform destructive production migrations.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-079",
    "index": 0,
    "question": "How long should compatibility remain?",
    "answer": "Keep compatibility for the longest period required by active clients, deployment cadence, and the documented deprecation policy. Measure old-client usage so removal is based on evidence rather than guesswork.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-079",
    "index": 1,
    "question": "How do you detect old clients?",
    "answer": "Use explicit client/version metadata, API version usage metrics, or request headers where appropriate. Track the versions still making requests before removing compatibility behavior.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-080",
    "index": 0,
    "question": "What would you monitor after release?",
    "answer": "Monitor error rate, latency, saturation, dependency health, logs/traces, and business-specific success metrics. Compare them with the pre-release baseline and watch for regressions during the rollout window.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-080",
    "index": 1,
    "question": "What is your rollback plan?",
    "answer": "Keep the last known-good artifact deployable, define the rollback trigger metrics in advance, and make database changes backward compatible. If a release causes user impact, stop the rollout, restore the previous version, and then investigate using logs and traces.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-080",
    "index": 2,
    "question": "How do you prove authorization works?",
    "answer": "Test both allowed and denied cases at the API/service boundary, including missing roles, wrong resource ownership, expired credentials, and attempts to bypass the frontend. Security tests should verify the server rejects unauthorized requests directly.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-081",
    "index": 1,
    "question": "Why does fetch not reject on HTTP 404?",
    "answer": "fetch rejects for network-level failures, but a 404 or 500 still resolves normally. I must inspect response.ok or response.status before treating the response as success.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-081",
    "index": 2,
    "question": "Where should the API base URL come from?",
    "answer": "Keep the base URL in environment-specific configuration, not hard-coded source. In Vite, a value exposed to browser code must use the appropriate public environment prefix; never put secrets there.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-081",
    "index": 3,
    "question": "How do you cancel an in-flight request?",
    "answer": "Use AbortController, pass its signal to fetch, and abort the request during effect cleanup when the component unmounts or the request is no longer relevant.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-082",
    "index": 1,
    "question": "Why use JSON.stringify?",
    "answer": "fetch expects a string or other supported body type; JSON.stringify converts the JavaScript object into the JSON text sent over HTTP.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-082",
    "index": 2,
    "question": "What status should a successful create return?",
    "answer": "A successful creation commonly returns 201 Created, optionally with a Location header and the created representation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-082",
    "index": 3,
    "question": "How do you display validation errors from Spring Boot?",
    "answer": "Return a stable validation error contract such as field-to-message mappings with a 400 response, then map those fields back to the corresponding React form controls.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-083",
    "index": 1,
    "question": "Is PUT idempotent?",
    "answer": "PUT is designed to be idempotent: repeating the same complete replacement should produce the same resource state, assuming the server operation itself is correctly designed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-083",
    "index": 2,
    "question": "Is PATCH always non-idempotent?",
    "answer": "PATCH can be idempotent or non-idempotent depending on the patch operation. Setting quantity to 3 is naturally idempotent; an increment operation is not.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-083",
    "index": 3,
    "question": "What should React do after an update?",
    "answer": "Use the successful server response to update local state, or invalidate/refetch the affected server-state query. Do not assume the client copy is authoritative.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-084",
    "index": 1,
    "question": "Should the API client know React state?",
    "answer": "No. The client should return data or throw a typed/domain-relevant error; loading and UI state belong to the React layer.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-084",
    "index": 2,
    "question": "How do you attach an access token?",
    "answer": "Centralize token attachment in the request layer or an HTTP interceptor abstraction, while keeping token handling consistent with the chosen security architecture.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-084",
    "index": 3,
    "question": "How do you test the client?",
    "answer": "Mock fetch or the transport boundary and verify method, URL, headers, body and handling of representative 2xx/4xx/5xx responses.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-085",
    "index": 1,
    "question": "Why validate in both React and Spring Boot?",
    "answer": "React validation gives immediate UX feedback, while backend validation protects the API from any client, including scripts and modified requests.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-085",
    "index": 2,
    "question": "Where does @Valid apply here?",
    "answer": "@Valid tells Spring to validate the request body against its Bean Validation constraints before the controller proceeds with normal business processing.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-085",
    "index": 3,
    "question": "How should validation errors reach React?",
    "answer": "Expose structured field errors, for example {field: \"quantity\", message: \"must be positive\"}, so React can associate each error with a form field.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-086",
    "index": 1,
    "question": "What should happen to an unexpected exception?",
    "answer": "Unexpected exceptions should be logged with correlation information and mapped to a generic 500 response without exposing implementation details.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-086",
    "index": 2,
    "question": "Why return an error code as well as a message?",
    "answer": "A stable code lets the frontend choose behavior without coupling to changing human-readable text.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-086",
    "index": 3,
    "question": "Should React display the backend message directly?",
    "answer": "Only display backend messages directly when they are explicitly designed for end users. Otherwise map safe codes to frontend-owned messages.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-087",
    "index": 1,
    "question": "Should every error show a toast?",
    "answer": "No. Validation, empty results, permission failures and transient outages need different UI responses.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-087",
    "index": 2,
    "question": "How do you handle 401 globally?",
    "answer": "A 401 normally means the credential is missing or no longer valid; the client can clear relevant auth state and route through the application login flow, without retrying endlessly.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-087",
    "index": 3,
    "question": "What about 429 responses?",
    "answer": "Respect Retry-After when supplied, use bounded retry/backoff only where safe, and tell the user the operation is temporarily rate-limited.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-088",
    "index": 1,
    "question": "Can a React route guard replace Spring Security?",
    "answer": "No. A route guard only controls the UI. Every protected API operation must be authorized by the backend.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-088",
    "index": 2,
    "question": "What if the user changes the role in local storage?",
    "answer": "It must have no security effect; local storage is client-controlled and cannot grant backend privileges.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-088",
    "index": 3,
    "question": "Should 403 redirect to login?",
    "answer": "Usually no. If authentication is valid but authorization fails, an access-denied response is more accurate than sending the user to login.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-089",
    "index": 1,
    "question": "Why is OPTIONS called before POST?",
    "answer": "The browser asks the server for permission before sending a non-simple cross-origin request, especially when custom headers or methods are involved.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-089",
    "index": 2,
    "question": "Why can curl work while the browser fails?",
    "answer": "curl is not enforcing browser CORS rules, so it can succeed even when browser JavaScript is blocked.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-089",
    "index": 3,
    "question": "How does Spring Security interact with CORS?",
    "answer": "CORS must be configured in a way Spring Security recognizes; the security filter chain should process CORS before rejecting the browser preflight.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-090",
    "index": 1,
    "question": "Why can allow-origin * fail with credentials?",
    "answer": "Credentialed CORS cannot use the wildcard origin as the authorization response. The server must identify an allowed origin explicitly.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-090",
    "index": 2,
    "question": "What does SameSite control?",
    "answer": "SameSite controls when browsers attach cookies in cross-site contexts, reducing some cross-site request risks while affecting legitimate cross-site flows.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-090",
    "index": 3,
    "question": "Why is CSRF relevant to cookie authentication?",
    "answer": "Browsers automatically attach cookies to matching requests, so an attacker can cause state-changing requests unless the application has appropriate CSRF defenses.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-091",
    "index": 1,
    "question": "Can React decode a JWT and decide authorization?",
    "answer": "React can decode a token for display purposes, but only the backend can enforce authorization based on a validated credential.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-091",
    "index": 2,
    "question": "What is the difference between roles and scopes?",
    "answer": "Roles usually express application permissions/groups, while OAuth scopes describe delegated permissions granted to a client for protected resources.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-091",
    "index": 3,
    "question": "What if the JWT is expired?",
    "answer": "Spring Security should reject the credential as unauthenticated, typically producing a 401 response; the client should re-authenticate rather than treating the token as valid.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-092",
    "index": 1,
    "question": "Why keep access tokens short-lived?",
    "answer": "Short lifetimes reduce the useful window of a stolen access token. They do not eliminate the need for secure storage and revocation strategy.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-092",
    "index": 2,
    "question": "What is refresh token rotation?",
    "answer": "Rotation issues a new refresh token and invalidates the previous one, allowing reuse detection and limiting replay.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-092",
    "index": 3,
    "question": "What should happen after refresh fails?",
    "answer": "Clear the authenticated client state and require the appropriate login/re-authentication flow; do not loop refresh requests indefinitely.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-093",
    "index": 1,
    "question": "Why use method security if URL security already exists?",
    "answer": "URL rules protect coarse endpoint access, while method security can protect specific business operations and make authorization closer to the code that performs them.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-093",
    "index": 2,
    "question": "What if a user calls the endpoint manually?",
    "answer": "The backend still validates identity and authorization, so a manually crafted request is rejected if the caller lacks permission.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-093",
    "index": 3,
    "question": "Where should resource ownership be checked?",
    "answer": "Check ownership in the backend business/service layer or authorization component using trusted server-side data, not a userId supplied by the browser.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-094",
    "index": 1,
    "question": "Offset vs cursor pagination?",
    "answer": "Offset pagination is simple and works well for many administrative screens; cursor pagination is better for large or frequently changing datasets where stable traversal matters.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-094",
    "index": 2,
    "question": "What should happen when page size is too large?",
    "answer": "Validate and cap page size server-side to prevent excessive database work and response payloads.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-094",
    "index": 3,
    "question": "How do you preserve filters while changing pages?",
    "answer": "Keep filters and sort fields in the query state so a page change sends the same criteria with only the page cursor/index changed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-095",
    "index": 1,
    "question": "How do you prevent arbitrary sort fields?",
    "answer": "Allowlist valid sort properties and reject unknown ones before building the repository query.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-095",
    "index": 2,
    "question": "Where should search normalization happen?",
    "answer": "Normalize according to the business rule, for example trimming whitespace and applying a consistent case strategy; preserve semantics for fields where case matters.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-095",
    "index": 3,
    "question": "How do indexes affect filtering?",
    "answer": "Indexes can reduce scan work for common predicates and orderings, but they add storage/write overhead and must match real query patterns.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-096",
    "index": 1,
    "question": "Why can stale search responses appear?",
    "answer": "Requests can complete out of order, so an older response may overwrite a newer result unless the client tracks the latest request or aborts obsolete ones.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-096",
    "index": 2,
    "question": "How do you cancel old searches?",
    "answer": "Use AbortController or a request sequence/version check so an obsolete request cannot update current UI state.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-096",
    "index": 3,
    "question": "What debounce delay would you choose?",
    "answer": "A modest delay such as a few hundred milliseconds is a starting point; tune it using UX and backend request-volume measurements rather than treating one number as universal.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-097",
    "index": 1,
    "question": "When should you avoid optimistic UI?",
    "answer": "Avoid it when failure is common, the operation is irreversible, or the server applies complex rules that make the optimistic result unreliable.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-097",
    "index": 2,
    "question": "What if two users update the same order?",
    "answer": "The backend should enforce concurrency/business rules, for example optimistic locking; React must reconcile its state with the accepted server representation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-097",
    "index": 3,
    "question": "How do you rollback correctly?",
    "answer": "Capture the exact previous state or invalidate/refetch the affected server state after failure. Do not guess a rollback from partial information.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-098",
    "index": 1,
    "question": "Why not set Content-Type manually?",
    "answer": "The browser must generate the multipart boundary. Setting Content-Type manually can omit the boundary and break parsing.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-098",
    "index": 2,
    "question": "How do you limit upload size?",
    "answer": "Configure application/server multipart limits and also enforce business-level limits before expensive processing.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-098",
    "index": 3,
    "question": "Where should uploaded files be stored?",
    "answer": "For production, object storage is often preferable to storing large binary files directly in the relational database; keep metadata and references in the database.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-099",
    "index": 1,
    "question": "Why is byte[] risky for large files?",
    "answer": "A byte[] requires the whole payload in application memory, which can cause high heap usage or out-of-memory failures under concurrency.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-099",
    "index": 2,
    "question": "What about HTTP range requests?",
    "answer": "Range requests let clients request portions of a resource, supporting resume and efficient media/file delivery when the server/storage layer supports them.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-099",
    "index": 3,
    "question": "How do you authorize a download?",
    "answer": "Authorize the request server-side before issuing the file stream or a short-lived signed storage URL. Do not authorize based only on a filename in the browser.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-100",
    "index": 1,
    "question": "Are Vite environment variables secret?",
    "answer": "No. Anything bundled into browser JavaScript can be inspected by users. Only non-secret configuration belongs there.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-100",
    "index": 2,
    "question": "Why does changing .env sometimes require a rebuild?",
    "answer": "Static Vite variables are injected during the build, so changing them normally requires rebuilding the frontend artifact.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-100",
    "index": 3,
    "question": "What is a reverse proxy approach?",
    "answer": "Serve React and proxy /api requests through the same public origin, allowing the browser to call relative URLs while the proxy routes them to Spring Boot.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-101",
    "index": 1,
    "question": "Does same-origin remove authentication concerns?",
    "answer": "No. Same-origin mainly simplifies browser origin policy. Authentication and authorization are still required for protected operations.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-101",
    "index": 2,
    "question": "What does the proxy do with /api?",
    "answer": "It forwards API paths to the Spring Boot service while serving frontend assets for non-API routes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-101",
    "index": 3,
    "question": "How do SPA refreshes work?",
    "answer": "The server/proxy must fall back unknown frontend routes to index.html so React Router can resolve the client-side route.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-102",
    "index": 1,
    "question": "Why can refreshing /orders/42 return 404?",
    "answer": "If the web server does not fall back to index.html, it may look for a physical /orders/42 file and return 404 before React loads.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-102",
    "index": 2,
    "question": "Should React call /orders/42 for data?",
    "answer": "Normally no; use a distinct API namespace such as /api so browser navigation and backend resources are unambiguous.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-102",
    "index": 3,
    "question": "How does the proxy distinguish them?",
    "answer": "A common rule is to forward /api/* to Spring Boot and serve the SPA for other application paths with history fallback.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-103",
    "index": 1,
    "question": "What if an exception occurs halfway?",
    "answer": "A runtime exception that causes transaction rollback will undo participating database changes, subject to the transaction configuration and exception rules.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-103",
    "index": 2,
    "question": "Should the controller be @Transactional?",
    "answer": "It is generally cleaner to define the business transaction at the service layer where the use case is coordinated.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-103",
    "index": 3,
    "question": "What if a remote payment call is inside the transaction?",
    "answer": "Holding a database transaction open across a slow remote call can consume connections and create contention; use a design such as transactional state plus asynchronous orchestration when the business flow allows it.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-104",
    "index": 1,
    "question": "What HTTP status can represent a conflict?",
    "answer": "409 Conflict is a common choice when the request cannot be applied because the resource state conflicts with the client version.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-104",
    "index": 2,
    "question": "Why not trust the timestamp from React?",
    "answer": "Client timestamps are not authoritative and can suffer from clock differences. The server controls the version used for concurrency checks.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-104",
    "index": 3,
    "question": "How do you resolve the conflict?",
    "answer": "Reload the current server representation, show the user what changed, and either let them reapply their intended edit or use a defined merge rule.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-105",
    "index": 1,
    "question": "Why is a timeout dangerous after POST?",
    "answer": "The client may not know whether the server committed before the connection failed, so retrying can create a duplicate without server-side deduplication.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-105",
    "index": 2,
    "question": "Where should idempotency keys be stored?",
    "answer": "The backend needs durable storage tied to the operation and sufficient scope/expiry to recognize retries across instances.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-105",
    "index": 3,
    "question": "What if the same key is reused with different payloads?",
    "answer": "Reject the request as a key/payload mismatch rather than treating the key as permission to execute unrelated data.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-106",
    "index": 1,
    "question": "Should every API use {data: ...}?",
    "answer": "No. A wrapper is useful only when it solves a consistent problem; adding it everywhere can increase nesting without benefit.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-106",
    "index": 2,
    "question": "Where should pagination metadata live?",
    "answer": "It can live beside the collection data in a documented meta/page object, as long as the contract is consistent.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-106",
    "index": 3,
    "question": "How do you evolve the envelope?",
    "answer": "Add optional fields compatibly, version only when semantics truly break, and avoid removing/renaming fields while older clients may still be deployed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-107",
    "index": 1,
    "question": "Why can a frontend deploy lag behind the backend?",
    "answer": "Users may keep an older SPA bundle cached or deployments may be independent, so the backend often needs a compatibility window.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-107",
    "index": 2,
    "question": "When should you create v2?",
    "answer": "Create a new version when a change would break existing clients or alter semantics in a way that cannot be safely supported together.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-107",
    "index": 3,
    "question": "How do you retire v1?",
    "answer": "Measure usage, communicate a deprecation date, migrate clients, and remove the old version only after the compatibility window and operational evidence support it.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-108",
    "index": 1,
    "question": "Contract vs end-to-end test?",
    "answer": "A contract test focuses on an interface between services; an end-to-end test validates a complete deployed flow and catches more integration issues but is usually slower.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-108",
    "index": 2,
    "question": "What breaks if a field is renamed?",
    "answer": "An older frontend may fail at runtime or silently lose functionality, so the backend should evolve fields compatibly during the migration window.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-108",
    "index": 3,
    "question": "Who owns the contract?",
    "answer": "Both sides contribute: the producer must honor the published contract and the consumer must accurately state what it relies on.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-109",
    "index": 1,
    "question": "Why not call a real backend in every unit test?",
    "answer": "Real backend calls make tests slower and more environment-dependent; mocks let component behavior be tested deterministically.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-109",
    "index": 2,
    "question": "What should an E2E test cover?",
    "answer": "Cover a critical user journey such as login, creating an order, seeing the server result, and handling a failure.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-109",
    "index": 3,
    "question": "How do you avoid stale mocks?",
    "answer": "Keep mocks derived from the API contract or contract tests so they fail when the expected API shape changes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-110",
    "index": 1,
    "question": "MockMvc vs full server test?",
    "answer": "MockMvc can test MVC behavior without starting a real HTTP server; full server tests exercise more of the runtime stack and are useful for critical integration paths.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-110",
    "index": 2,
    "question": "What should not be asserted too tightly?",
    "answer": "Avoid asserting incidental JSON ordering or internal implementation details; assert the documented contract and important business outcomes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-110",
    "index": 3,
    "question": "How do you test authorization?",
    "answer": "Run tests with authenticated users having different authorities and assert allowed and denied responses at the endpoint/business boundary.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-111",
    "index": 1,
    "question": "Should fetch have a timeout by default?",
    "answer": "fetch itself has no built-in timeout option; AbortController can implement a client-side deadline. The server should also have appropriate upstream/downstream timeouts.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-111",
    "index": 2,
    "question": "How do you prevent duplicate clicks?",
    "answer": "Disable or guard the submit action while the same mutation is pending, while still keeping the backend idempotent when duplicate requests are possible.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-111",
    "index": 3,
    "question": "What backend metrics would you inspect?",
    "answer": "Inspect endpoint latency percentiles, database query time, downstream dependency latency, thread/connection pool saturation and error rate.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-112",
    "index": 1,
    "question": "Is N+1 only a frontend problem?",
    "answer": "No. A frontend N+1 can trigger backend/database load; a backend can also create N+1 SQL queries while assembling one API response.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-112",
    "index": 2,
    "question": "Would GraphQL automatically solve it?",
    "answer": "No. GraphQL can express related data but can still suffer resolver N+1 without batching/data loaders.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-112",
    "index": 3,
    "question": "What about database N+1 inside Spring?",
    "answer": "Use fetch joins, entity graphs, batch fetching or carefully designed projections according to the query, then verify generated SQL.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-113",
    "index": 1,
    "question": "ETag vs max-age?",
    "answer": "max-age tells a cache how long a response can be considered fresh; ETag supports conditional requests so the server can confirm whether the representation changed.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-113",
    "index": 2,
    "question": "Can authenticated responses be cached?",
    "answer": "They can be cached in controlled ways, but private/user-specific data requires careful cache directives and must not leak between users.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-113",
    "index": 3,
    "question": "What happens after a POST changes data?",
    "answer": "Invalidate or revalidate the affected client/server cache according to the data consistency requirement; do not assume a POST automatically updates every cache.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-114",
    "index": 1,
    "question": "What if If-Match fails?",
    "answer": "Return a conflict/precondition failure according to the API design, then let the client fetch the current representation and reconcile.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-114",
    "index": 2,
    "question": "ETag vs JPA @Version?",
    "answer": "JPA @Version protects database updates; ETag can expose a representation version at the HTTP boundary. They can be related but solve different layers.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-114",
    "index": 3,
    "question": "Can ETag be used for caching too?",
    "answer": "Yes. ETag supports conditional GET with If-None-Match as well as conditional mutation patterns such as If-Match.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-115",
    "index": 1,
    "question": "What happens when the pool is exhausted?",
    "answer": "Requests may wait for a connection and eventually time out if the pool remains exhausted. That often indicates slow queries, too much concurrency, or undersized infrastructure.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-115",
    "index": 2,
    "question": "Why not set pool size to 500?",
    "answer": "The database has finite CPU, memory and concurrency capacity; excessive connections add contention and context switching rather than unlimited throughput.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-115",
    "index": 3,
    "question": "What metrics matter?",
    "answer": "Track active/idle connections, acquisition wait time, query latency, pool timeouts and database CPU/locks.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-116",
    "index": 1,
    "question": "What is LazyInitializationException?",
    "answer": "It commonly occurs when lazy data is accessed after the persistence context is no longer available, depending on transaction/session configuration.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-116",
    "index": 2,
    "question": "Why not just make every relationship EAGER?",
    "answer": "EAGER loading can create large joins, unnecessary data retrieval and unpredictable performance. Fetch what the use case needs instead.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-116",
    "index": 3,
    "question": "How do DTOs help?",
    "answer": "DTOs define exactly what the API returns and let queries fetch only the required fields/relationships, reducing accidental graph traversal.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-117",
    "index": 1,
    "question": "Why not publish Kafka directly inside the transaction?",
    "answer": "A DB commit and broker publish are separate systems, so publishing directly can leave inconsistent states if one succeeds and the other fails.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-117",
    "index": 2,
    "question": "What if the publisher crashes after sending?",
    "answer": "The publisher should mark progress durably and consumers should be idempotent; duplicate publication is possible and must be tolerated.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-117",
    "index": 3,
    "question": "Does outbox give exactly-once delivery?",
    "answer": "Not by itself. Outbox improves atomicity between DB state and event intent, but delivery and consumption still require idempotency and failure handling.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-118",
    "index": 1,
    "question": "Why 202 instead of 200?",
    "answer": "202 Accepted indicates the request was accepted for processing but the work is not necessarily complete.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-118",
    "index": 2,
    "question": "How does React know completion?",
    "answer": "Return an operation/job ID and expose status polling, webhook/push, or another documented completion mechanism.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-118",
    "index": 3,
    "question": "What if the worker fails?",
    "answer": "Use retries with bounded backoff, dead-letter handling where appropriate, and a durable status model so the job can recover or be investigated.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-119",
    "index": 1,
    "question": "When is polling better?",
    "answer": "Polling is reasonable for low-frequency status changes, simpler deployments, and cases where seconds of delay are acceptable.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-119",
    "index": 2,
    "question": "How do you handle reconnects?",
    "answer": "Reconnect with bounded backoff, resubscribe safely, and reconcile missed events with a REST snapshot when necessary.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-119",
    "index": 3,
    "question": "Does WebSocket replace REST?",
    "answer": "No. REST can remain the command/query API while WebSocket is used as a notification channel.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-120",
    "index": 1,
    "question": "Should the client be allowed to choose the trace ID?",
    "answer": "A client-provided request ID can be accepted as a correlation value, but trusted tracing systems should validate/normalize context and avoid using it as an authorization signal.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-120",
    "index": 2,
    "question": "Where do you log it?",
    "answer": "Include it in structured logs and propagate it across service boundaries.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-120",
    "index": 3,
    "question": "How do traces differ from logs?",
    "answer": "Logs are individual records; traces represent a distributed operation across spans and timing. They complement each other.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-121",
    "index": 1,
    "question": "Why JSON logs?",
    "answer": "Structured fields are machine-queryable and consistent, making aggregation and filtering easier than parsing free-form messages.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-121",
    "index": 2,
    "question": "What should never be logged?",
    "answer": "Passwords, access/refresh tokens, secret keys and unnecessary sensitive personal data should not be logged.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-121",
    "index": 3,
    "question": "How do logs help with React errors?",
    "answer": "A client error can include a safe route, action and trace/correlation ID so support or engineers can locate the corresponding backend records.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-122",
    "index": 1,
    "question": "Why rate limit login differently?",
    "answer": "Login endpoints are attractive for credential attacks, so they often need stricter controls than ordinary authenticated reads.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-122",
    "index": 2,
    "question": "Where should rate limiting live?",
    "answer": "A gateway is useful for broad traffic protection; service-level limits can enforce business-specific quotas. Often both are used.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-122",
    "index": 3,
    "question": "How should React react to 429?",
    "answer": "Stop immediate retries, display a temporary message, and honor Retry-After when available.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-123",
    "index": 1,
    "question": "Why is a bearer header different?",
    "answer": "A browser does not automatically attach an arbitrary Authorization header to a cross-site form request, unlike cookies that are automatically included under their cookie rules.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-123",
    "index": 2,
    "question": "Where can the CSRF token come from?",
    "answer": "Spring can expose a CSRF token through a documented endpoint/cookie strategy, and React includes it in state-changing requests according to the configured repository.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-123",
    "index": 3,
    "question": "Which methods need protection?",
    "answer": "Protect state-changing operations such as POST, PUT, PATCH and DELETE; safe reads such as GET should not mutate state.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-124",
    "index": 1,
    "question": "Does backend validation prevent XSS?",
    "answer": "Validation can reject some unwanted input but output encoding/safe rendering is still required because different contexts have different escaping rules.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-124",
    "index": 2,
    "question": "When is dangerouslySetInnerHTML acceptable?",
    "answer": "Only for a genuine HTML requirement with a trusted sanitization process and a narrow, reviewed input path.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-124",
    "index": 3,
    "question": "What about malicious URLs?",
    "answer": "Validate allowed URL schemes and destinations; do not blindly render javascript: or attacker-controlled URLs into href/src attributes.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-125",
    "index": 1,
    "question": "Where do you prevent duplicate orders?",
    "answer": "Use a durable idempotency key at the backend, backed by a uniqueness constraint or equivalent durable record tied to the logical operation.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-125",
    "index": 2,
    "question": "What if the browser times out?",
    "answer": "The client should retry with the same idempotency key when the operation is safely retryable; the server returns the prior logical result instead of creating another order.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-125",
    "index": 3,
    "question": "What if fulfillment fails?",
    "answer": "Keep fulfillment status durable, retry transient failures with limits, and route poison messages to an operational recovery path such as a dead-letter mechanism.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-126",
    "index": 1,
    "question": "Where should roles be checked?",
    "answer": "Check roles/authorities in Spring Security rules and, for business-specific ownership, in the service/domain authorization logic.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-126",
    "index": 2,
    "question": "What happens when a token expires?",
    "answer": "The backend rejects the expired credential; the client can attempt the supported refresh/re-authentication flow and otherwise return to login.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-126",
    "index": 3,
    "question": "Why is React auth state not authoritative?",
    "answer": "The user can modify every client-side variable and network request, so only server-side validation and authorization can enforce access.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-127",
    "index": 1,
    "question": "Can roles alone protect customer data?",
    "answer": "No. A generic USER role does not prove that the user owns or is allowed to access account 42.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-127",
    "index": 2,
    "question": "Where should ownership be checked?",
    "answer": "At the backend business/authorization boundary using trusted resource data and the authenticated principal.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-127",
    "index": 3,
    "question": "What if an admin bypasses ownership?",
    "answer": "If the business policy grants admins broader access, encode that explicitly and audit it rather than accidentally skipping checks.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-128",
    "index": 1,
    "question": "Can tenantId come from the React request body?",
    "answer": "A browser-supplied tenantId is untrusted. The backend should derive or validate tenant context from authenticated identity and policy.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-128",
    "index": 2,
    "question": "Where should tenant filtering happen?",
    "answer": "Enforce it close to data access so every relevant query is scoped, while service-level authorization verifies the business policy.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-128",
    "index": 3,
    "question": "How do you test tenant isolation?",
    "answer": "Create tests where a user from tenant A attempts to read and mutate tenant B data and assert both paths are rejected, including direct API calls.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-129",
    "index": 1,
    "question": "What is a compensating action?",
    "answer": "A compensating action semantically reverses or offsets an earlier completed step, such as issuing a refund after a later step fails.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-129",
    "index": 2,
    "question": "Why not use one DB transaction?",
    "answer": "Independent services/databases cannot normally participate in one cheap ACID transaction; distributed transactions add coupling and operational complexity.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-129",
    "index": 3,
    "question": "What should React display during a Saga?",
    "answer": "Show a meaningful intermediate status such as PAYMENT_PENDING or FULFILLMENT_FAILED and provide recovery/support actions instead of claiming the operation is atomically complete.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-130",
    "index": 1,
    "question": "Can frontend and backend deploy independently?",
    "answer": "Yes, if the API contract is backward compatible and the deployment topology supports independent artifacts.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-130",
    "index": 2,
    "question": "What is a smoke test?",
    "answer": "A small post-deployment test verifies critical health and user-facing API behavior before broader rollout.",
    "track": "fullstack"
  },
  {
    "questionId": "fullstack-130",
    "index": 3,
    "question": "How do you rollback DB changes?",
    "answer": "Use backward-compatible expand-and-contract migrations so an application rollback does not immediately conflict with a newer schema.",
    "track": "fullstack"
  },
  {
    questionId: "cicd-001", index: 0,
    question: "What is continuous delivery vs continuous deployment?",
    answer: "Continuous delivery keeps every successful change in a releasable state, but production release can still require a manual approval. Continuous deployment automatically releases validated changes to production without that manual promotion step.", track: "cicd"
  },
  {
    questionId: "cicd-002", index: 0,
    question: "Can delivery still have manual approval?",
    answer: "Yes. Continuous delivery means the software is always ready to release; an organization can keep a human approval at the production boundary because of risk, compliance or business controls. Continuous deployment removes that manual production decision.", track: "cicd"
  },
  {
    questionId: "cicd-003", index: 0,
    question: "Why split pipelines into stages?",
    answer: "Stages isolate responsibilities, make failures easier to diagnose, allow independent parallelism or retries, and create clear security and promotion boundaries. For example, a failed unit-test stage should stop packaging and deployment immediately.", track: "cicd"
  },
  {
    questionId: "cicd-004", index: 0,
    question: "Artifact vs source code?",
    answer: "Source code is the input to the build; an artifact is the tested output produced from that source, such as a JAR, frontend bundle or container image. Deployment should normally consume the versioned artifact rather than rebuild the source.", track: "cicd"
  },
  {
    questionId: "cicd-005", index: 0,
    question: "What checks should be required?",
    answer: "At minimum, require compilation/build validation, unit tests and relevant lint or static checks. Depending on the system, add dependency/security scanning, contract tests and policy checks. Required checks should reflect the risk of merging into the protected branch.", track: "cicd"
  },
  {
    questionId: "cicd-006", index: 0,
    question: "When are longer-lived branches useful?",
    answer: "Longer-lived branches can be useful for release stabilization, major migrations or work that genuinely cannot be integrated incrementally. They should be used deliberately because divergence increases merge and integration risk.", track: "cicd"
  },
  {
    questionId: "cicd-007", index: 0,
    question: "How do you reduce slow pipeline time?",
    answer: "Parallelize independent checks, cache safe dependencies, avoid rebuilding unchanged work, use appropriate test layers and optimize the critical path. I would measure stage duration first rather than removing important quality checks blindly.", track: "cicd"
  },
  {
    questionId: "cicd-008", index: 0,
    question: "Can gates differ by branch/environment?",
    answer: "Yes. A pull request may require fast validation, while production can require stronger security, approval and deployment-health gates. The important point is that every gate is explicit, risk-based and enforceable.", track: "cicd"
  },
  {
    questionId: "cicd-009", index: 0,
    question: "How do you prevent secret leakage in logs?",
    answer: "Mask secret values, avoid printing environment variables or command arguments containing credentials, use structured logging with allowlisted fields, and use short-lived credentials where possible. Secret scanning can also detect accidental commits or exposures.", track: "cicd"
  },
  {
    questionId: "cicd-010", index: 0,
    question: "Where should URLs and credentials live?",
    answer: "Environment-specific URLs and non-secret configuration should be supplied through controlled configuration, while credentials should come from a secret manager or protected runtime configuration. Production secrets should never be baked into the application image.", track: "cicd"
  },
  {
    questionId: "cicd-011", index: 0,
    question: "Tag vs digest?",
    answer: "A tag such as 1.8.2 or a commit SHA is a human-friendly reference but can be moved. An image digest identifies the exact immutable image content. For strong deployment traceability, I prefer deploying by digest or recording the digest behind the release tag.", track: "cicd"
  },
  {
    questionId: "cicd-012", index: 0,
    question: "How do you roll back?",
    answer: "Roll back by selecting a previously validated immutable artifact or image and redeploying that known-good version. The release history should tell us exactly which artifact was running before the bad deployment.", track: "cicd"
  },
  {
    questionId: "cicd-013", index: 0,
    question: "Smoke vs end-to-end test?",
    answer: "A smoke test is a small, fast validation of critical functionality after deployment. An end-to-end test exercises a broader user workflow across multiple components and is usually slower. Smoke tests provide quick release confidence; they do not replace deeper testing.", track: "cicd"
  },
  {
    questionId: "cicd-014", index: 0,
    question: "What should not be cached?",
    answer: "Do not cache security-sensitive state or use a cache as the authoritative source for dependencies. Cache disposable items such as Maven or npm packages using keys tied to the lockfile and toolchain, and verify integrity during the build.", track: "cicd"
  },
  {
    questionId: "cicd-015", index: 0,
    question: "How do you investigate non-reproducible builds?",
    answer: "Compare the exact commit, lockfiles, dependency versions, compiler/runtime versions, base image, build commands and environment variables. Capture build metadata so another runner can reconstruct the same inputs instead of relying on a developer laptop.", track: "cicd"
  },
  {
    questionId: "cicd-016", index: 0,
    question: "What should block production?",
    answer: "Block production for failures that represent unacceptable release risk, such as failed required tests, critical security findings, failed policy checks or an unhealthy rollout. The threshold should be defined by a risk policy rather than by treating every warning as a blocker.", track: "cicd"
  },
  {
    questionId: "cicd-017", index: 0,
    question: "Why ephemeral runners?",
    answer: "Ephemeral runners start clean for each job and are then discarded, reducing the chance that credentials, artifacts or malicious modifications persist between builds. They also make the build environment easier to reason about and reproduce.", track: "cicd"
  },
  {
    questionId: "cicd-018", index: 0,
    question: "What is an SBOM?",
    answer: "An SBOM, or software bill of materials, lists the components and dependencies included in a software artifact. It improves supply-chain visibility, vulnerability response and auditability because teams can identify where a vulnerable component is actually used.", track: "cicd"
  },
  {
    questionId: "cicd-019", index: 0,
    question: "How is it different from canary?",
    answer: "Blue-green normally maintains two environments and moves traffic from the old environment to the new one. Canary sends only a small portion of traffic to the new version first and increases exposure gradually based on health signals.", track: "cicd"
  },
  {
    questionId: "cicd-020", index: 0,
    question: "What metrics decide promotion?",
    answer: "Use service and business health signals such as error rate, latency percentiles, saturation, availability and important business conversion or failure metrics. Define thresholds and observation windows before increasing traffic.", track: "cicd"
  },
  {
    questionId: "cicd-021", index: 0,
    question: "How do database migrations affect rollback?",
    answer: "Application rollback can fail if the database schema was changed incompatibly. Use backward-compatible expand-and-contract migrations so old and new application versions can coexist, and delay destructive schema changes until the old version is gone.", track: "cicd"
  },
  {
    questionId: "cicd-022", index: 0,
    question: "Why not build inside Kubernetes?",
    answer: "Kubernetes is primarily a runtime orchestration platform. Building inside the cluster mixes build and runtime privileges, complicates security and reproducibility, and can consume production resources. A CI system should normally build and scan the artifact before Kubernetes deploys it.", track: "cicd"
  },
  {
    questionId: "cicd-023", index: 0,
    question: "Readiness vs liveness?",
    answer: "Readiness answers whether an instance should receive traffic. Liveness answers whether the process is healthy enough to keep running. A readiness failure normally removes the pod from service endpoints; a liveness failure can trigger a restart.", track: "cicd"
  },
  {
    questionId: "cicd-024", index: 0,
    question: "Terraform vs Kubernetes manifests?",
    answer: "Terraform is commonly used to provision and manage infrastructure such as cloud resources, networks and clusters. Kubernetes manifests describe resources inside Kubernetes such as Deployments and Services. They can complement each other rather than being direct replacements.", track: "cicd"
  },
  {
    questionId: "cicd-025", index: 0,
    question: "Can approvals be bypassed?",
    answer: "A properly protected production environment should prevent ordinary pipeline users from bypassing required approvals. Emergency access should be controlled, audited and explicitly governed rather than using an undocumented SSH path.", track: "cicd"
  },
  {
    questionId: "cicd-026", index: 0,
    question: "Why can rerunning hide a bug?",
    answer: "A rerun can pass because the failure was transient, even though the underlying problem remains. Repeated reruns can therefore hide flaky tests, race conditions or environment-dependent failures. First identify whether the failure is deterministic or transient.", track: "cicd"
  },
  {
    questionId: "cicd-027", index: 0,
    question: "When is retry acceptable?",
    answer: "Retry is appropriate for bounded transient failures such as temporary network or infrastructure errors. It should not be used to permanently hide deterministic test failures. Flaky tests need root-cause investigation and ownership.", track: "cicd"
  },
  {
    questionId: "cicd-028", index: 0,
    question: "What if shared code changes?",
    answer: "The dependency graph must identify all services or packages affected by the shared change. A simple path filter that runs only the changed directory can miss consumers and create false confidence, so shared-library changes should trigger the relevant downstream validation.", track: "cicd"
  },
  {
    questionId: "cicd-029", index: 0,
    question: "Cache vs artifact?",
    answer: "A cache is a disposable optimization used to speed up future builds. An artifact is an intentional, versioned output that later pipeline stages or environments consume. Losing a cache should only make the build slower; losing a required artifact breaks the release flow.", track: "cicd"
  },
  {
    questionId: "cicd-030", index: 0,
    question: "Where should non-secret config live?",
    answer: "Non-secret environment configuration can live in versioned configuration or deployment resources such as ConfigMaps, depending on the application. Secrets should use protected secret-management mechanisms. The important design is to keep environment configuration outside the immutable application artifact.", track: "cicd"
  },
  {
    questionId: "cicd-031", index: 0,
    question: "Would you use one or two pipelines?",
    answer: "I would separate concerns logically: CI validates changes and produces immutable artifacts, while CD promotes and deploys those artifacts. They can be implemented as separate workflows or coordinated stages, but the validation and promotion responsibilities should remain clear.", track: "cicd"
  },
  {
    questionId: "cicd-032", index: 0,
    question: "What if only one replica exists?",
    answer: "With one replica there is no redundant instance to serve traffic while it is being replaced, so true zero-downtime rollout is not guaranteed. Multiple healthy replicas plus readiness probes are normally required for a rolling deployment with redundancy.", track: "cicd"
  },
  {
    questionId: "cicd-033", index: 0,
    question: "Why avoid immediate column deletion?",
    answer: "During a rolling deployment, old pods may still expect the column while new pods use the new schema. Deleting it immediately can therefore break the old version. Expand first, deploy compatible code, migrate data, then contract after the old version is retired.", track: "cicd"
  },
  {
    questionId: "cicd-034", index: 0,
    question: "What about rollback?",
    answer: "A rollback should point to the exact previously deployed artifact or image digest, together with its source and build metadata. Rebuilding an old commit can produce different bytes if dependencies or build inputs have changed.", track: "cicd"
  },
  {
    questionId: "cicd-035", index: 0,
    question: "How do you test cross-service compatibility?",
    answer: "Use API contract tests, integration tests and representative end-to-end scenarios where necessary. Contract tests are especially useful because they verify that a provider still satisfies the interface expected by its consumers without requiring every service to run together for every change.", track: "cicd"
  },
  {
    questionId: "cicd-036", index: 0,
    question: "What if metrics are delayed?",
    answer: "Use an observation window that accounts for metric latency and avoid making promotion decisions from incomplete data. A progressive rollout can pause while enough reliable telemetry arrives, and the gate should define what happens when telemetry is unavailable.", track: "cicd"
  },
  {
    questionId: "cicd-037", index: 0,
    question: "Why avoid cluster-admin?",
    answer: "Cluster-admin gives a pipeline broad control over the cluster. If the CI job or credential is compromised, the attacker could affect unrelated workloads and infrastructure. Use a narrowly scoped service identity with only the permissions required for the deployment.", track: "cicd"
  },
  {
    questionId: "cicd-038", index: 0,
    question: "Which metric indicates release quality?",
    answer: "Change-failure rate is a useful release-quality signal, while deployment frequency, lead time and recovery time provide complementary delivery information. I would use a balanced set rather than optimizing a single metric and accidentally encouraging risky releases.", track: "cicd"
  },
  {
    questionId: "cicd-039", index: 0,
    question: "When would you not rollback?",
    answer: "I would not automatically roll back when evidence shows the problem is external to the release and rollback would not reduce impact. For example, if a downstream provider is failing independently, I would mitigate that dependency while continuing to evaluate the release.", track: "cicd"
  },
  {
    questionId: "cicd-040", index: 0,
    question: "Where does Jenkins fit?",
    answer: "Jenkins is a CI/CD automation platform that can implement build, test, security, artifact and deployment stages. The important interview point is that Jenkins is a tool; the underlying architecture still needs immutable artifacts, quality gates, secure credentials, controlled promotion and observability.", track: "cicd"
  },

  {
    questionId: "cicd-lab-001", index: 0,
    question: "What should happen on test failure?",
    answer: "The pipeline should fail fast and stop the package or deployment stages that depend on successful tests. The failure should be visible through logs and test reports so the developer can diagnose and fix it before promotion.", track: "cicd"
  },
  {
    questionId: "cicd-lab-001", index: 1,
    question: "Why keep test reports?",
    answer: "Test reports provide durable evidence of what ran, which tests failed and how the build performed. They make failures easier to diagnose and give reviewers or release approvers evidence that the required validation actually passed.", track: "cicd"
  },
  {
    questionId: "cicd-lab-002", index: 0,
    question: "npm install vs npm ci?",
    answer: "npm ci is designed for clean, reproducible CI installs from the lockfile and normally removes the existing node_modules before installing. npm install can update the lockfile when dependency definitions change, so npm ci is generally preferred for deterministic CI builds.", track: "cicd"
  },
  {
    questionId: "cicd-lab-002", index: 1,
    question: "Where does the dist artifact go?",
    answer: "For a Vite React application, npm run build normally produces the production bundle in the dist directory. The CI pipeline can publish that directory as an artifact or package it into a container image for deployment.", track: "cicd"
  },
  {
    questionId: "cicd-lab-003", index: 0,
    question: "Why use commit SHA?",
    answer: "A commit SHA gives the image a direct relationship to the source revision that produced it. It avoids ambiguity from a mutable tag such as latest and makes it easier to trace a deployed image back to the exact source change.", track: "cicd"
  },
  {
    questionId: "cicd-lab-003", index: 1,
    question: "What should block publication?",
    answer: "Publication should be blocked when required tests fail, the image cannot be built, or policy-required security checks identify unacceptable vulnerabilities or other supply-chain violations. The blocking criteria should be defined before the pipeline runs.", track: "cicd"
  },
  {
    questionId: "cicd-lab-004", index: 0,
    question: "How do you prove the same image ran?",
    answer: "Record the image digest produced after the build and verify that staging and production deployments reference that same digest. A mutable tag alone is weaker evidence because the tag could be moved to different content.", track: "cicd"
  },
  {
    questionId: "cicd-lab-004", index: 1,
    question: "How do you rollback?",
    answer: "Keep the previously deployed immutable image digest and redeploy that known-good digest. The release history should also retain the source commit, build information and deployment revision for traceability.", track: "cicd"
  },
  {
    questionId: "cicd-lab-005", index: 0,
    question: "What evidence should the approver see?",
    answer: "The approver should see the source commit, build and test results, security-scan results, artifact or image digest, staging deployment status, smoke-test results and any relevant change or risk information. Approval should be an informed risk decision, not a blind button click.", track: "cicd"
  },
  {
    questionId: "cicd-lab-005", index: 1,
    question: "Can the approval be bypassed?",
    answer: "Normal users should not be able to bypass a protected production environment. Any emergency path should require explicit authorization, auditing and post-incident review; an undocumented manual deployment path defeats the purpose of the control.", track: "cicd"
  },
  {
    questionId: "cicd-lab-006", index: 0,
    question: "Why can local success mislead?",
    answer: "The local machine may use different Java or Node versions, dependency state, operating-system behavior, environment variables or cached files. CI exposes those differences, so reproducing the runner environment helps distinguish application defects from environment drift.", track: "cicd"
  },
  {
    questionId: "cicd-lab-006", index: 1,
    question: "What should be pinned?",
    answer: "Pin important build inputs such as Java or Node versions, dependency versions through lockfiles, build plugins or actions where appropriate, and container base images when practical. The goal is to make the build inputs explicit and reproducible.", track: "cicd"
  },
  {
    questionId: "cicd-lab-007", index: 0,
    question: "When is retry acceptable?",
    answer: "A limited retry can be reasonable for known transient infrastructure failures or as temporary evidence while investigating a flaky test. It should not turn an unreliable test into a permanently accepted green result.", track: "cicd"
  },
  {
    questionId: "cicd-lab-007", index: 1,
    question: "How do you quarantine safely?",
    answer: "Quarantine only the identified flaky test, make the quarantine visible, assign ownership and track an expiry or remediation issue. The rest of the quality gate should continue to run, and the quarantine should not silently become permanent.", track: "cicd"
  },
  {
    questionId: "cicd-lab-008", index: 0,
    question: "Where do deployment credentials come from?",
    answer: "Use the CI platform's protected identity mechanism or workload identity/OIDC where supported, with least-privilege permissions scoped to the target environment. Avoid storing long-lived cluster-admin credentials in source control.", track: "cicd"
  },
  {
    questionId: "cicd-lab-008", index: 1,
    question: "How do you rollback?",
    answer: "Verify the previous known-good Deployment revision or immutable image digest and restore it. Kubernetes rollout history can help identify the prior revision, while the CI/CD release record provides stronger traceability.", track: "cicd"
  },
  {
    questionId: "cicd-lab-009", index: 0,
    question: "Which metrics?",
    answer: "Use error rate, latency percentiles, availability, saturation and important business signals such as failed transactions. The exact metrics depend on the service, but they should detect both technical degradation and meaningful user impact.", track: "cicd"
  },
  {
    questionId: "cicd-lab-009", index: 1,
    question: "How long should each stage observe?",
    answer: "The observation window should be long enough to capture representative traffic and the normal latency of the relevant business signals. It should be based on traffic volume and metric delay rather than an arbitrary number of minutes.", track: "cicd"
  },
  {
    questionId: "cicd-lab-010", index: 0,
    question: "How do you handle DB migrations?",
    answer: "Use backward-compatible expand-and-contract migrations: expand the schema, deploy code that works with both versions, migrate or backfill data, and contract only after older application versions are retired. This keeps rolling and progressive deployments safe.", track: "cicd"
  },
  {
    questionId: "cicd-lab-010", index: 1,
    question: "How do you secure runners?",
    answer: "Use ephemeral runners where practical, least-privilege identities, isolated jobs, patched runner images, protected secrets and restricted network access. Deployment permissions should be scoped so a compromised build cannot control unrelated infrastructure.", track: "cicd"
  },
]
;

// Exact follow-up text is part of the key.
// This prevents collisions when IDs are reused by different lessons.
const followupKey = (questionId, index, question) =>
  `${questionId}::${index}::${question}`;

export const followupAnswerByKey = new Map(
  followupAnswers.map(item => [
    followupKey(item.questionId, item.index, item.question),
    item.answer
  ])
);

export const getFollowupAnswer = (questionId, index, question) =>
  followupAnswerByKey.get(followupKey(questionId, index, question));
