export const roadmap = [
  {
    id: "java", order: 1, icon: "☕", name: "Java",
    goal: "Build a strong Core Java foundation before moving into framework and distributed-system questions.",
    areas: [
      { id: "core", name: "Core Java & OOP", keys: ["oop", "object", "class", "interface", "inheritance", "polymorphism", "encapsulation", "immutab", "final", "string", "pass-by-value", "autobox", "wrapper", "record"] },
      { id: "collections", name: "Collections & Generics", keys: ["collections", "hashmap", "hashset", "arraylist", "linkedlist", "treeset", "linkedhashset", "treemap", "concurrenthashmap", "hashtable", "generics", "comparable", "comparator", "iterator", "listiterator", "fail-fast", "fail safe", "collection operations"] },
      { id: "java8", name: "Java 8+ & Functional", keys: ["java 8", "java 11", "java 17", "java 21", "streams", "stream api", "lambda", "functional", "optional", "method reference", "predicate", "consumer", "supplier", "map()", "flatmap", "peek", "intermediate", "terminal"] },
      { id: "concurrency", name: "Concurrency & Multithreading", keys: ["concurrency", "thread", "threads", "synchronized", "volatile", "executor", "executorservice", "forkjoinpool", "lock", "deadlock", "completablefuture", "atomic", "threadlocal", "virtual thread", "memory model"] },
      { id: "jvm", name: "JVM, Internals & Performance", keys: ["jvm", "jdk", "jre", "garbage collection", "garbage collector", "g1 gc", "gc", "memory area", "heap", "stackoverflow", "outofmemory", "classloader", "class loading", "internals", "memory leak", "profiling", "performance"] },
      { id: "exceptions", name: "Exceptions & Resource Handling", keys: ["exception handling", "checked exception", "unchecked exception", "custom exception", "throw", "throws", "try-with-resources", "error handling", "stackoverflowerror", "outofmemoryerror"] }
    ]
  },
  {
    id: "springboot", order: 2, icon: "🌱", name: "Spring Boot",
    goal: "Understand how Spring manages beans, requests, configuration, transactions and production concerns.",
    areas: [
      { id: "core", name: "Spring Core & IoC", keys: ["dependency injection", "inversion of control", "ioc", "spring bean", "beans", "bean lifecycle", "component scanning", "component", "service", "repository", "autowired", "qualifier", "primary", "container"] },
      { id: "web", name: "REST, MVC & APIs", keys: ["restcontroller", "controller", "rest api", "rest apis", "http method", "http methods", "put", "patch", "post", "request", "responseentity", "pagination", "sorting", "bindingresult", "validation", "valid", "upload files", "webclient", "resttemplate"] },
      { id: "data", name: "Transactions & Data", keys: ["transaction", "transactional", "transaction propagation", "transaction isolation", "jdbc", "repository", "jpa"] },
      { id: "aop", name: "AOP & Cross-cutting Concerns", keys: ["aop", "aspect", "proxy", "self-invocation", "interceptor", "cross-cutting"] },
      { id: "config", name: "Configuration & Production", keys: ["configuration", "application.properties", "application.yml", "configurationproperties", "value", "profile", "profiles", "externalized", "environment variable", "actuator", "health check", "devtools", "embedded server", "server port", "startup", "logging", "slow endpoint", "production"] },
      { id: "exceptions", name: "Exception Handling", keys: ["global exception", "controlleradvice", "exceptionhandler", "custom error", "error response"] }
    ]
  },
  {
    id: "jpa", order: 3, icon: "◉", name: "JPA / Hibernate",
    goal: "Master entity lifecycle, mappings, fetching, transactions and the performance traps interviewers ask about.",
    areas: [
      { id: "mapping", name: "Entities & Relationships", keys: ["entity", "entities", "one-to-many", "many-to-one", "many-to-many", "one-to-one", "mapping", "relationship", "relationships", "cascade", "orphanremoval"] },
      { id: "lifecycle", name: "Persistence Context & Lifecycle", keys: ["persistence context", "entitymanager", "persist", "merge", "entity states", "managed", "detached", "transient", "dirty checking", "flush"] },
      { id: "fetching", name: "Fetching, Cascade & N+1", keys: ["fetch", "lazy", "eager", "n+1", "join fetch", "entitygraph", "batch fetching"] },
      { id: "queries", name: "Queries & Spring Data", keys: ["jpql", "criteria", "query", "queries", "spring data", "jparepository", "derived query", "native query"] },
      { id: "performance", name: "Transactions & Performance", keys: ["performance", "transaction", "concurrency", "optimistic locking", "pessimistic locking", "version", "batch", "production"] }
    ]
  },
  {
    id: "microservices", order: 4, icon: "◈", name: "Microservices",
    goal: "Move from individual services to reliable distributed systems: communication, resilience, consistency and operations.",
    areas: [
      { id: "architecture", name: "Architecture & Service Boundaries", keys: ["microservices", "architecture", "service boundary", "service boundaries", "api gateway", "monolith", "decomposition", "bounded context"] },
      { id: "communication", name: "Communication & Networking", keys: ["rest", "http", "feign", "communication", "service discovery", "load balancing", "load balancer", "client-side", "server-side", "networking"] },
      { id: "resilience", name: "Resilience & Reliability", keys: ["resilience", "reliability", "circuit breaker", "resilience4j", "retry", "timeout", "bulkhead", "fault tolerance", "downstream failure"] },
      { id: "messaging", name: "Messaging & Event-driven", keys: ["messaging", "kafka", "ibm mq", "mq", "event-driven", "event driven", "producer", "consumer", "consumer group", "partition", "broker", "offset", "delivery"] },
      { id: "data", name: "Distributed Data & Transactions", keys: ["distributed transaction", "distributed transactions", "consistency", "saga", "choreography", "orchestration", "idempotency", "eventual consistency", "cqrs", "outbox", "duplicate transaction"] },
      { id: "operations", name: "Observability & Production", keys: ["observability", "monitoring", "centralized logging", "distributed tracing", "zipkin", "opentelemetry", "metrics", "health check", "deployment", "docker", "kubernetes", "pod", "rolling deployment", "horizontal scaling"] }
    ]
  },
  {
    id: "security", order: 5, icon: "🔐", name: "Security",
    goal: "Be able to explain authentication, authorization and token-based security end to end.",
    areas: [
      { id: "fundamentals", name: "Security Fundamentals", keys: ["security", "csrf", "cors", "session", "password storage", "password hashing"] },
      { id: "auth", name: "Authentication & Authorization", keys: ["authentication", "authorization", "oauth", "openid", "rbac", "roles", "permissions", "authorization code"] },
      { id: "jwt", name: "JWT & Token Security", keys: ["jwt", "token", "tokens", "access token", "refresh token", "bearer"] },
      { id: "micro", name: "Security in Microservices", keys: ["api gateway authentication", "service-to-service security", "service to service", "microservices security"] }
    ]
  },
  {
    id: "sql", order: 6, icon: "▤", name: "SQL",
    goal: "Move from writing queries to reasoning about joins, indexes, transactions and performance.",
    areas: [
      { id: "fundamentals", name: "Query Fundamentals", keys: ["select", "where", "subquery", "ddl", "dml", "order by", "group by", "stored procedure", "trigger"] },
      { id: "joins", name: "Joins & Aggregation", keys: ["join", "joins", "aggregation", "group by", "having", "aggregate", "window function", "row_number", "rank", "dense_rank", "self join", "cross join"] },
      { id: "indexes", name: "Indexes & Query Performance", keys: ["index", "indexes", "execution plan", "explain", "optimization", "slow sql", "slow query", "query performance", "query design"] },
      { id: "transactions", name: "ACID & Concurrency", keys: ["acid", "transaction", "transactions", "concurrency", "isolation", "locking", "deadlock", "dirty read", "non-repeatable", "phantom read", "read committed", "repeatable read", "serializable"] },
      { id: "modeling", name: "Data Modeling & Constraints", keys: ["data modeling", "constraints", "primary key", "foreign key", "unique key", "composite key", "normalization", "denormalization", "clustered", "non-clustered"] }
    ]
  },
  {
    id: "cloud", order: 7, icon: "☁", name: "Cloud",
    goal: "Understand the deployment building blocks behind modern Java backend systems.",
    areas: [
      { id: "containers", name: "Docker & Containers", keys: ["docker", "container", "image"] },
      { id: "kubernetes", name: "Kubernetes & Orchestration", keys: ["kubernetes", "k8s", "pod", "deployment", "rolling deployment"] },
      { id: "networking", name: "Cloud Networking", keys: ["networking", "load balancer", "vpc", "dns", "gateway"] },
      { id: "scaling", name: "Scaling, Storage & Operations", keys: ["scalability", "scaling", "storage", "autoscaling", "availability", "infrastructure as code", "devops", "deployment"] },
      { id: "security", name: "Cloud Security", keys: ["security", "iam", "identity", "secrets", "secure cloud"] },
      { id: "providers", name: "AWS, Azure & GCP", keys: ["aws", "azure", "gcp", "cloud provider"] }
    ]
  },
  {
    id: "system-design", order: 8, icon: "◇", name: "System Design",
    goal: "Learn to move from requirements to APIs, data, scaling, resilience and trade-offs.",
    areas: [
      { id: "fundamentals", name: "Requirements & Architecture", keys: ["system design", "requirements", "architecture", "capacity estimation", "trade-offs"] },
      { id: "apis", name: "APIs & Data", keys: ["api", "apis", "database", "databases", "storage", "data model", "ledger"] },
      { id: "scaling", name: "Scalability & Performance", keys: ["scalability", "performance", "caching", "redis", "cache eviction", "cache consistency", "load balancing", "scale"] },
      { id: "distributed", name: "Distributed Systems & Resilience", keys: ["distributed systems", "resilience", "availability", "messaging", "consistency", "idempotent", "retry", "rate limiter"] },
      { id: "operations", name: "Observability & Production", keys: ["observability", "production", "monitoring", "tracing", "audit logging"] }
    ]
  },
  {
    id: "coding", order: 9, icon: "</>", name: "Coding Problems",
    goal: "Practice the patterns that commonly appear in backend coding rounds and explain complexity clearly.",
    areas: [
      { id: "arrays", name: "Arrays & Strings", keys: ["arrays", "strings", "string", "anagram", "palindrome", "reverse"] },
      { id: "hashing", name: "Hashing & Collections", keys: ["maps", "hashmap", "hashset", "sets", "collections", "hash", "duplicate"] },
      { id: "streams", name: "Java Streams", keys: ["streams", "java 8", "grouping", "functional", "salary by department", "word frequency"] },
      { id: "pointers", name: "Two Pointers & Linked Lists", keys: ["two pointers", "linked list", "pointer", "merge two sorted", "remove duplicates from sorted"] },
      { id: "stackheap", name: "Stack, Heap & Algorithms", keys: ["stack", "heap", "algorithms", "binary search", "top k", "parentheses", "lru"] }
    ]
  }
];

function scoreArea(area, title, tags, body) {
  const t = title.toLowerCase();
  const tg = tags.join(" ").toLowerCase();
  const b = body.toLowerCase();
  let score = 0;
  for (const key of area.keys) {
    const k = key.toLowerCase();
    if (t.includes(k)) score += k.length >= 7 ? 12 : 8;
    if (tg.includes(k)) score += k.length >= 7 ? 5 : 3;
    if (b.includes(k)) score += 1;
  }
  return score;
}

function preferredArea(topic, title) {
  const t = title.toLowerCase();
  const rules = {
    java: [
      ["exception", "exceptions"], ["try-with-resources", "exceptions"], ["throw", "exceptions"],
      ["stream", "java8"], ["lambda", "java8"], ["optional", "java8"], ["functional interface", "java8"], ["method reference", "java8"], ["java 8", "java8"],
      ["thread", "concurrency"], ["concurrency", "concurrency"], ["deadlock", "concurrency"], ["volatile", "concurrency"], ["synchronized", "concurrency"], ["executor", "concurrency"], ["completablefuture", "concurrency"], ["atomic", "concurrency"], ["virtual thread", "concurrency"], ["threadlocal", "concurrency"], ["producer-consumer", "concurrency"],
      ["jvm", "jvm"], ["garbage collection", "jvm"], ["garbage collector", "jvm"], ["memory leak", "jvm"], ["outofmemory", "jvm"], ["stackoverflowerror", "exceptions"], ["class loading", "jvm"], ["classloader", "jvm"],
      ["hashmap", "collections"], ["hashset", "collections"], ["arraylist", "collections"], ["linkedlist", "collections"], ["treeset", "collections"], ["treemap", "collections"], ["concurrenthashmap", "collections"], ["hashtable", "collections"], ["comparable", "collections"], ["comparator", "collections"], ["iterator", "collections"], ["listiterator", "collections"], ["collection", "collections"], ["generics", "collections"],
      ["string", "core"], ["equals", "core"], ["immutable", "core"], ["interface", "core"], ["inheritance", "core"], ["polymorphism", "core"], ["encapsulation", "core"], ["serialization", "core"], ["transient", "core"]
    ],
    springboot: [
      ["exception", "exceptions"], ["controlleradvice", "exceptions"], ["exceptionhandler", "exceptions"], ["error response", "exceptions"],
      ["transaction", "data"], ["transactional", "data"],
      ["aop", "aop"], ["proxy", "aop"], ["self-invocation", "aop"], ["interceptor", "aop"],
      ["rest", "web"], ["controller", "web"], ["http", "web"], ["request", "web"], ["response", "web"], ["validation", "web"], ["valid", "web"], ["pagination", "web"], ["sorting", "web"], ["webclient", "web"], ["resttemplate", "web"], ["upload", "web"],
      ["dependency injection", "core"], ["inversion of control", "core"], ["bean", "core"], ["autowired", "core"], ["qualifier", "core"], ["primary", "core"], ["component scanning", "core"], ["component", "core"],
      ["configuration", "config"], ["profile", "config"], ["starter", "config"], ["cache", "config"], ["properties", "config"], ["yml", "config"], ["actuator", "config"], ["health", "config"], ["startup", "config"], ["server port", "config"], ["environment variable", "config"], ["devtools", "config"], ["spring boot", "config"]
    ],
    jpa: [
      ["lazy", "fetching"], ["eager", "fetching"], ["n+1", "fetching"], ["fetch", "fetching"], ["entitygraph", "fetching"], ["lazyinitialization", "fetching"],
      ["jpql", "queries"], ["query", "queries"], ["jparepository", "queries"], ["spring data", "queries"], ["connection pooling", "performance"], ["hikaricp", "performance"],
      ["transaction", "performance"], ["optimistic locking", "performance"], ["pessimistic locking", "performance"], ["@version", "performance"],
      ["persistence context", "lifecycle"], ["entity states", "lifecycle"], ["persist", "lifecycle"], ["merge", "lifecycle"], ["dirty checking", "lifecycle"], ["flush", "lifecycle"],
      ["entity", "mapping"], ["relationship", "mapping"], ["cascade", "mapping"], ["orphan", "mapping"], ["mappedby", "mapping"], ["hibernate", "mapping"], ["jpa", "lifecycle"]
    ],
    microservices: [
      ["kafka", "messaging"], ["mq", "messaging"], ["producer", "messaging"], ["consumer", "messaging"], ["topic", "messaging"], ["partition", "messaging"], ["broker", "messaging"], ["offset", "messaging"], ["delivery", "messaging"], ["queue", "messaging"], ["message", "messaging"], ["backpressure", "messaging"],
      ["retry", "resilience"], ["circuit breaker", "resilience"], ["resilience", "resilience"], ["timeout", "resilience"], ["bulkhead", "resilience"], ["dead-letter", "resilience"], ["cascading", "resilience"],
      ["saga", "data"], ["outbox", "data"], ["idempotency", "data"], ["eventual consistency", "data"], ["cqrs", "data"], ["distributed lock", "data"], ["double debit", "data"], ["transaction flow", "data"],
      ["tracing", "operations"], ["zipkin", "operations"], ["opentelemetry", "operations"], ["logging", "operations"], ["monitoring", "operations"], ["metrics", "operations"], ["health check", "operations"], ["deployment", "operations"], ["docker", "operations"], ["kubernetes", "operations"], ["pod", "operations"], ["rolling deployment", "operations"], ["horizontal scaling", "operations"],
      ["load balancing", "communication"], ["load balancer", "communication"], ["api versioning", "communication"], ["service discovery", "communication"], ["feign", "communication"], ["communication", "communication"], ["service mesh", "communication"], ["rest", "communication"], ["http", "communication"], ["rate limiting", "resilience"],
      ["api gateway", "architecture"], ["eureka", "architecture"], ["spring cloud config", "architecture"], ["service boundary", "architecture"], ["strangler", "architecture"], ["microservices architecture", "architecture"], ["microservices", "architecture"]
    ],
    security: [
      ["jwt", "jwt"], ["token", "jwt"], ["bearer", "jwt"], ["refresh", "jwt"],
      ["authentication", "auth"], ["authorization", "auth"], ["oauth", "auth"], ["openid", "auth"], ["rbac", "auth"], ["role", "auth"], ["permission", "auth"],
      ["service-to-service", "micro"], ["gateway authentication", "micro"], ["microservices security", "micro"],
      ["csrf", "fundamentals"], ["cors", "fundamentals"], ["password", "fundamentals"], ["session", "fundamentals"]
    ],
    sql: [
      ["index", "indexes"], ["explain", "indexes"], ["execution plan", "indexes"], ["slow sql", "indexes"], ["slow query", "indexes"], ["optimize", "indexes"],
      ["join", "joins"], ["window", "joins"], ["row_number", "joins"], ["rank", "joins"], ["dense_rank", "joins"], ["group by", "joins"], ["having", "joins"], ["aggregation", "joins"],
      ["acid", "transactions"], ["transaction", "transactions"], ["isolation", "transactions"], ["deadlock", "transactions"], ["dirty read", "transactions"], ["non-repeatable", "transactions"], ["phantom", "transactions"], ["serializable", "transactions"], ["read committed", "transactions"], ["repeatable read", "transactions"],
      ["primary key", "modeling"], ["unique key", "modeling"], ["foreign key", "modeling"], ["composite key", "modeling"], ["normalization", "modeling"], ["denormalization", "modeling"], ["clustered", "modeling"], ["non-clustered", "modeling"], ["constraints", "modeling"],
      ["select", "fundamentals"], ["where", "fundamentals"], ["subquery", "fundamentals"], ["stored procedure", "fundamentals"], ["trigger", "fundamentals"], ["order by", "fundamentals"], ["delete", "fundamentals"], ["truncate", "fundamentals"], ["drop", "fundamentals"]
    ],
    cloud: [
      ["aws", "providers"], ["azure", "providers"], ["gcp", "providers"], ["cloud provider", "providers"],
      ["kubernetes", "kubernetes"], ["k8s", "kubernetes"], ["pod", "kubernetes"], ["readiness", "kubernetes"], ["liveness", "kubernetes"], ["deployment", "kubernetes"],
      ["docker", "containers"], ["container", "containers"], ["image", "containers"], ["ci/cd", "containers"], ["jenkins", "containers"], ["git branching", "containers"],
      ["load balancer", "networking"], ["vpc", "networking"], ["dns", "networking"], ["networking", "networking"],
      ["security", "security"], ["iam", "security"], ["identity", "security"], ["secrets", "security"],
      ["scaling", "scaling"], ["autoscaling", "scaling"], ["storage", "scaling"], ["availability", "scaling"], ["infrastructure as code", "scaling"], ["performance", "scaling"], ["latency", "scaling"], ["monitoring", "scaling"], ["logging", "scaling"]
    ],
    "system-design": [
      ["caching", "scaling"], ["redis", "scaling"], ["cache", "scaling"], ["scal", "scaling"], ["load balancing", "scaling"],
      ["idempot", "distributed"], ["retry", "distributed"], ["consistency", "distributed"], ["availability", "distributed"], ["rate limiter", "distributed"], ["cap theorem", "distributed"],
      ["notification", "distributed"], ["messaging", "distributed"], ["payment processing", "distributed"], ["trade order", "distributed"],
      ["audit logging", "operations"], ["observability", "operations"], ["monitoring", "operations"], ["tracing", "operations"],
      ["database", "apis"], ["sharding", "apis"], ["read replicas", "apis"], ["storage", "apis"], ["api", "apis"], ["ledger", "apis"], ["wallet", "apis"], ["inventory", "apis"], ["authentication service", "apis"],
      ["requirements", "fundamentals"], ["capacity estimation", "fundamentals"], ["how to start", "fundamentals"], ["architecture", "fundamentals"], ["design", "fundamentals"]
    ],
    coding: [
      ["stream", "streams"], ["salary", "streams"], ["group employees", "streams"], ["word frequency", "streams"], ["grouping", "streams"], ["java 8", "streams"],
      ["duplicate", "hashing"], ["hash", "hashing"], ["hashset", "hashing"], ["map", "hashing"],
      ["linked list", "pointers"], ["two pointers", "pointers"], ["merge two sorted", "pointers"], ["remove duplicates from sorted", "pointers"],
      ["stack", "stackheap"], ["parentheses", "stackheap"], ["heap", "stackheap"], ["binary search", "stackheap"], ["top k", "stackheap"], ["lru", "stackheap"],
      ["array", "arrays"], ["string", "arrays"], ["anagram", "arrays"], ["palindrome", "arrays"], ["reverse", "arrays"]
    ]
  };
  const list = rules[topic] || [];
  for (const [needle, area] of list) if (t.includes(needle)) return area;
  return null;
}

export function classifyQuestion(question) {
  const stage = roadmap.find(r => r.id === question.topic);
  if (!stage) return { subtopic: "core", subtopicName: "Core Concepts" };
  const preferred = preferredArea(question.topic, question.title || "");
  const chosen = preferred ? stage.areas.find(a => a.id === preferred) : null;
  if (chosen) return { subtopic: chosen.id, subtopicName: chosen.name };
  const title = question.title || "";
  const tags = question.tags || [];
  const body = [question.short, question.answer, question.interview].filter(Boolean).join(" ");
  const ranked = stage.areas.map((area, index) => ({ area, score: scoreArea(area, title, tags, body), index }));
  ranked.sort((a, b) => b.score - a.score || a.index - b.index);
  const fallback = ranked[0].area;
  return { subtopic: fallback.id, subtopicName: fallback.name };
}
