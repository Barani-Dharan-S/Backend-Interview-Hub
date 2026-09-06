export const questions = [
  {
    "id": 1,
    "topic": "java",
    "level": "L2",
    "title": "What is the difference between HashMap and ConcurrentHashMap?",
    "tags": [
      "Collections",
      "Concurrency"
    ],
    "short": "HashMap is not thread-safe; ConcurrentHashMap is designed for concurrent access with finer-grained coordination.",
    "answer": "HashMap is not thread-safe. ConcurrentHashMap supports concurrent reads and updates without synchronizing the entire map, reducing contention in multi-threaded applications. It also rejects null keys and values.",
    "code": "Map<String, Integer> counts = new ConcurrentHashMap<>();\ncounts.merge(\"java\", 1, Integer::sum);",
    "followups": [
      "Why does ConcurrentHashMap not allow null?",
      "When would you still use a synchronizedMap?",
      "What happens during concurrent updates?"
    ],
    "mistakes": [
      "Saying ConcurrentHashMap locks the whole map for every operation.",
      "Assuming it makes compound business operations automatically atomic."
    ],
    "interview": "HashMap is suitable for non-concurrent access, while ConcurrentHashMap is designed for shared access by multiple threads. It provides thread-safe map operations with better concurrency than synchronizing the entire map."
  },
  {
    "id": 2,
    "topic": "java",
    "level": "L2",
    "title": "Explain Java Streams and lazy evaluation.",
    "tags": [
      "Java 8",
      "Streams"
    ],
    "short": "Intermediate stream operations are lazy and execute when a terminal operation consumes the stream.",
    "answer": "A Stream is a pipeline over data, not a collection itself. Operations such as filter and map are intermediate and lazy. A terminal operation such as collect, reduce or forEach triggers traversal of the source.",
    "code": "List<String> result = names.stream()\n    .filter(n -> n.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .toList();",
    "followups": [
      "What is the difference between map and flatMap?",
      "Can a stream be reused?",
      "When would parallelStream be dangerous?"
    ],
    "mistakes": [
      "Thinking filter runs immediately when declared.",
      "Using parallel streams without considering shared state and workload size."
    ],
    "interview": "Streams let us express collection processing as a pipeline. Intermediate operations are lazy, so work is performed only when a terminal operation is invoked."
  },
  {
    "id": 3,
    "topic": "java",
    "level": "L2",
    "title": "What is the difference between Hashtable, synchronizedMap and ConcurrentHashMap?",
    "tags": [
      "Collections",
      "Concurrency"
    ],
    "short": "They differ in null handling, synchronization strategy and concurrency characteristics.",
    "answer": "Hashtable synchronizes its legacy methods and rejects null keys and values. Collections.synchronizedMap wraps a map and synchronizes access to its methods, but iteration requires external synchronization. ConcurrentHashMap is designed for high-concurrency access and also rejects nulls.",
    "code": "Map<K,V> safe = Collections.synchronizedMap(new HashMap<>());\nMap<K,V> concurrent = new ConcurrentHashMap<>();",
    "followups": [
      "Why is ConcurrentHashMap generally preferred for high concurrency?",
      "How should synchronizedMap be iterated safely?"
    ],
    "mistakes": [
      "Calling Hashtable modern best practice for concurrent maps.",
      "Assuming synchronizedMap and ConcurrentHashMap have identical iteration semantics."
    ],
    "interview": "For modern concurrent workloads I would normally choose ConcurrentHashMap. Hashtable is legacy, while synchronizedMap provides a synchronized wrapper around an ordinary map."
  },
  {
    "id": 4,
    "topic": "spring",
    "level": "L2",
    "title": "What is @Transactional?",
    "tags": [
      "Spring",
      "Transactions"
    ],
    "short": "It defines a transaction boundary around a method or class through Spring's transaction infrastructure.",
    "answer": "@Transactional lets Spring create and manage a transaction around a method or class. The proxy starts or joins a transaction before invocation and commits or rolls back according to the transaction outcome.",
    "code": "@Transactional\npublic void placeOrder(OrderRequest request) {\n    orderRepository.save(order);\n    paymentService.reserve(request.payment());\n}",
    "followups": [
      "What is transaction propagation?",
      "What is isolation?",
      "Why can self-invocation bypass @Transactional?"
    ],
    "mistakes": [
      "Assuming every exception rolls back automatically.",
      "Forgetting that proxy-based interception matters."
    ],
    "interview": "@Transactional defines the unit of work that should execute atomically. Spring's transaction interceptor starts or joins a transaction and commits it on successful completion or rolls it back when rollback rules are triggered."
  },
  {
    "id": 5,
    "topic": "spring",
    "level": "L2",
    "title": "Will a checked exception automatically roll back a Spring transaction?",
    "tags": [
      "Transactions",
      "Exceptions"
    ],
    "short": "Not by default. Spring's default rollback rules primarily target RuntimeException and Error.",
    "answer": "By default, Spring rolls back transactions for unchecked RuntimeException and Error. Checked exceptions generally do not trigger rollback unless you configure rollbackFor or another transaction policy.",
    "code": "@Transactional(rollbackFor = IOException.class)\npublic void process() throws IOException {\n    // transactional work\n}",
    "followups": [
      "What does rollbackFor do?",
      "Can a transaction be marked rollback-only?",
      "What happens if an inner transaction marks rollback-only?"
    ],
    "mistakes": [
      "Saying every exception causes rollback.",
      "Confusing Java exception handling with Spring transaction rollback rules."
    ],
    "interview": "A checked exception does not normally cause automatic rollback. If checked exceptions should roll back the work, I explicitly configure rollbackFor or an equivalent transaction rule."
  },
  {
    "id": 6,
    "topic": "spring",
    "level": "L2",
    "title": "Explain the Spring Security Filter Chain.",
    "tags": [
      "Security",
      "Filters"
    ],
    "short": "HTTP requests pass through security filters before controller processing.",
    "answer": "Spring Security uses a chain of servlet filters to establish and validate security context, authenticate requests, apply authorization and handle security exceptions. The exact filters depend on configuration and enabled features.",
    "code": "http\n  .authorizeHttpRequests(auth -> auth\n      .requestMatchers(\"/public/**\").permitAll()\n      .anyRequest().authenticated());",
    "followups": [
      "Where does JWT authentication happen?",
      "What is SecurityContext?",
      "Authentication vs authorization?"
    ],
    "mistakes": [
      "Thinking authorization happens only inside controllers.",
      "Treating JWT validation as a controller concern."
    ],
    "interview": "The Security Filter Chain sits before controller execution. Filters can extract credentials, authenticate the request, populate the SecurityContext and enforce authorization rules."
  },
  {
    "id": 7,
    "topic": "security",
    "level": "L2",
    "title": "Explain JWT authentication.",
    "tags": [
      "JWT",
      "Authentication"
    ],
    "short": "The client sends a signed token whose claims are validated by the server before the request is trusted.",
    "answer": "After successful login, the server issues an access token. The client sends it, commonly as a Bearer token. The resource server verifies the signature and validates claims such as expiration, issuer and audience before establishing authentication.",
    "code": "Authorization: Bearer eyJhbGciOi...",
    "followups": [
      "Is JWT encrypted?",
      "Where should access tokens expire?",
      "How do refresh tokens differ?"
    ],
    "mistakes": [
      "Saying JWT is encrypted by default.",
      "Trusting claims without signature and validation checks."
    ],
    "interview": "JWT is normally a signed token, not inherently an encrypted one. The server validates the signature and relevant claims before creating an authenticated security context."
  },
  {
    "id": 8,
    "topic": "microservices",
    "level": "L2",
    "title": "What is the purpose of an API Gateway?",
    "tags": [
      "Microservices",
      "Gateway"
    ],
    "short": "It provides a controlled entry point for clients and centralizes suitable cross-cutting concerns.",
    "answer": "An API Gateway routes external requests to internal services and can handle authentication, rate limiting, observability, request transformation and sometimes response aggregation. It reduces client coupling to internal service topology.",
    "code": "Client -> API Gateway -> Order Service\n                     -> Payment Service\n                     -> Inventory Service",
    "followups": [
      "What should not live in an API Gateway?",
      "Gateway vs load balancer?",
      "Can a gateway become a bottleneck?"
    ],
    "mistakes": [
      "Putting core business logic into the gateway.",
      "Assuming a gateway removes the need for service-level security."
    ],
    "interview": "The gateway is the controlled front door to the microservices environment. I use it for routing and cross-cutting policies, while keeping business logic inside domain services."
  },
  {
    "id": 9,
    "topic": "microservices",
    "level": "L2",
    "title": "How does a Circuit Breaker work?",
    "tags": [
      "Resilience",
      "Distributed Systems"
    ],
    "short": "It stops repeatedly calling a failing dependency and later probes it for recovery.",
    "answer": "A circuit breaker normally starts closed. Repeated failures can open the circuit, causing calls to fail fast. After a recovery timeout it becomes half-open and permits limited test calls. Success closes it; failure opens it again.",
    "code": "Closed -> failure threshold -> Open\nOpen -> wait -> Half-open\nHalf-open -> success -> Closed",
    "followups": [
      "Circuit breaker vs retry?",
      "Why should retries use backoff?",
      "What metrics should be monitored?"
    ],
    "mistakes": [
      "Using unlimited retries with a circuit breaker.",
      "Treating a circuit breaker as a replacement for timeouts."
    ],
    "interview": "I combine timeouts, bounded retries and circuit breaking. The circuit breaker protects the caller and downstream service from repeated failure amplification."
  },
  {
    "id": 10,
    "topic": "microservices",
    "level": "L3",
    "title": "How would you handle distributed transactions?",
    "tags": [
      "Architecture",
      "Consistency"
    ],
    "short": "Prefer local transactions plus explicit coordination, often through events, outbox patterns or sagas.",
    "answer": "I avoid trying to make multiple independent services participate in one database transaction. Instead, each service commits local state and communicates state changes through reliable events. Saga orchestration or choreography can coordinate multi-step business processes.",
    "code": "Order DB -> Outbox -> Broker -> Payment Service\n                         -> Inventory Service",
    "followups": [
      "What is the Outbox Pattern?",
      "Saga orchestration vs choreography?",
      "How do you make event handling idempotent?"
    ],
    "mistakes": [
      "Assuming Kafka alone provides business-level exactly-once semantics.",
      "Ignoring compensating actions."
    ],
    "interview": "For microservices I prefer local ACID transactions and eventual consistency across service boundaries. The Outbox Pattern and Saga patterns help make cross-service workflows reliable and recoverable."
  },
  {
    "id": 11,
    "topic": "sql",
    "level": "L2",
    "title": "What are SQL indexes and when should you create them?",
    "tags": [
      "SQL",
      "Performance"
    ],
    "short": "Indexes speed up data access paths at the cost of storage and write overhead.",
    "answer": "An index gives the database a structure for locating rows without scanning the whole table. Indexes are useful for frequently filtered, joined or sorted columns, but every additional index adds maintenance work to writes.",
    "code": "CREATE INDEX idx_employee_email ON employee(email);",
    "followups": [
      "What is a composite index?",
      "Why does column order matter?",
      "When can an index be ignored?"
    ],
    "mistakes": [
      "Indexing every column.",
      "Ignoring write overhead and selectivity."
    ],
    "interview": "I create indexes based on real query patterns, selectivity and execution plans. I consider WHERE, JOIN and ORDER BY usage and verify the effect rather than adding indexes blindly."
  },
  {
    "id": 12,
    "topic": "sql",
    "level": "L2",
    "title": "Find the second highest salary.",
    "tags": [
      "SQL",
      "Coding"
    ],
    "short": "Clarify whether the question asks for the second distinct salary.",
    "answer": "For a second distinct salary, DENSE_RANK is explicit and handles duplicates well. Another common solution is MAX(salary) below the overall maximum.",
    "code": "SELECT salary\nFROM (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rnk\n  FROM employee\n) x\nWHERE rnk = 2;",
    "followups": [
      "How would you return the employee name?",
      "What if there is no second salary?"
    ],
    "mistakes": [
      "Using OFFSET without clarifying duplicate handling.",
      "Forgetting that duplicate salaries can change the result."
    ],
    "interview": "I first clarify whether duplicates count. For the second distinct salary, I prefer DENSE_RANK because the intent is explicit."
  },
  {
    "id": 13,
    "topic": "jpa",
    "level": "L2",
    "title": "How does JpaRepository work internally?",
    "tags": [
      "JPA",
      "Spring Data"
    ],
    "short": "Spring Data creates repository proxies and delegates persistence operations to JPA infrastructure.",
    "answer": "A repository interface is detected by Spring Data and backed by a runtime-generated proxy. CRUD methods and derived query methods are implemented by Spring Data infrastructure, which ultimately uses EntityManager and the persistence provider.",
    "code": "public interface OrderRepository extends JpaRepository<Order, Long> {\n    List<Order> findByCustomerId(Long customerId);\n}",
    "followups": [
      "What is the persistence context?",
      "Entity states?",
      "Lazy vs eager loading?"
    ],
    "mistakes": [
      "Saying Spring generates a normal handwritten implementation class.",
      "Ignoring EntityManager and the persistence context."
    ],
    "interview": "JpaRepository is an abstraction over Spring Data JPA. Spring creates a proxy and resolves repository methods into persistence operations, ultimately interacting with the JPA EntityManager."
  },
  {
    "id": 14,
    "topic": "cloud",
    "level": "L2",
    "title": "Compare AWS, Azure and GCP at a high level.",
    "tags": [
      "Cloud",
      "Architecture"
    ],
    "short": "All provide compute, storage, networking, databases and managed services; selection depends on ecosystem, skills and workload.",
    "answer": "AWS has a broad service catalog and mature ecosystem. Azure is deeply integrated with Microsoft enterprise environments. GCP is particularly strong in data, analytics, Kubernetes and cloud-native infrastructure. The best choice depends on requirements, existing platform alignment and operational expertise.",
    "code": "Typical mapping:\nCompute -> VM / Container / Serverless\nStorage -> Object storage\nDatabase -> Managed relational / NoSQL",
    "followups": [
      "How would you choose a cloud for a new project?",
      "Managed service vs self-hosted?"
    ],
    "mistakes": [
      "Choosing solely based on brand popularity.",
      "Ignoring operational skills, region availability and migration cost."
    ],
    "interview": "I would compare clouds against concrete requirements: regions, managed services, networking, security, existing expertise, cost and portability. There is rarely a universal winner."
  },
  {
    "id": 15,
    "topic": "system",
    "level": "L3",
    "title": "How would you design a scalable order-processing system?",
    "tags": [
      "System Design",
      "Scalability"
    ],
    "short": "Separate synchronous order acceptance from reliable asynchronous processing and make downstream work idempotent.",
    "answer": "Start with requirements and traffic estimates. Persist the order and an outbox record in one local transaction. Publish the event reliably, then let payment, inventory and notification consumers process it independently. Use idempotency keys, retries with backoff, dead-letter handling and observability.",
    "code": "Client -> Order API -> Order DB + Outbox\n                         -> Broker\n                         -> Payment / Inventory / Notification",
    "followups": [
      "How do you prevent duplicate orders?",
      "How do you handle broker outages?",
      "How do you maintain order state?"
    ],
    "mistakes": [
      "Starting with technology before requirements.",
      "Ignoring retries, duplicates and partial failure."
    ],
    "interview": "I would first establish scale and consistency requirements. Then I would make order creation durable and use asynchronous events for downstream work, with idempotency and observability designed in from the beginning."
  },
  {
    "id": 16,
    "topic": "coding",
    "level": "L2",
    "title": "Find the first non-repeated character using Java Streams.",
    "tags": [
      "Java 8",
      "Streams"
    ],
    "short": "Count characters while preserving insertion order, then select the first entry with count one.",
    "answer": "Use groupingBy with LinkedHashMap so encounter order is preserved. Then find the first entry whose count equals one.",
    "code": "Character result = input.chars()\n    .mapToObj(c -> (char)c)\n    .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()))\n    .entrySet().stream()\n    .filter(e -> e.getValue() == 1)\n    .map(Map.Entry::getKey)\n    .findFirst().orElse(null);",
    "followups": [
      "What is the complexity?",
      "Why LinkedHashMap instead of HashMap?",
      "Can you solve it without streams?"
    ],
    "mistakes": [
      "Using HashMap and assuming encounter order.",
      "Not discussing complexity."
    ],
    "interview": "I preserve insertion order with LinkedHashMap, count occurrences, then select the first character with count one. The important detail is that ordinary HashMap does not preserve the required order."
  }
];
