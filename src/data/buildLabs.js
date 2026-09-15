export const buildLabs = [
  {
    "id": "lab-001",
    "level": "L1",
    "subtopic": "React + Spring Boot",
    "title": "Build a User List from a REST API",
    "objective": "Build a small feature that loads users from Spring Boot and renders loading, success and error states in React.",
    "approach": "Create GET /api/users returning a list of DTOs. In React, keep loading/data/error state, call the API in an effect, and render each state explicitly.",
    "code": "// React\nuseEffect(() => {\n  fetch(`${API_BASE}/api/users`)\n    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\n    .then(setUsers)\n    .catch(e => setError(e.message))\n    .finally(() => setLoading(false));\n}, []);",
    "delivery": "Start with the backend contract, then wire the React request. I would explicitly model loading, success and failure rather than assuming the network always succeeds.",
    "followups": [
      {
        "question": "Why should the UI check response.ok?",
        "answer": "fetch only rejects on network failures; a 404 or 500 still resolves the promise. Checking response.ok lets the UI treat non-2xx responses as failures."
      },
      {
        "question": "Where should the API base URL live?",
        "answer": "Keep it in environment-specific configuration such as Vite environment variables, not hard-coded in components. The deployed value can point to the appropriate backend host."
      }
    ],
    "traps": [
      "Do not assume fetch throws for HTTP 4xx/5xx.",
      "Do not expose internal Spring exception messages directly to users."
    ]
  },
  {
    "id": "lab-002",
    "level": "L1",
    "subtopic": "REST API",
    "title": "Add Create User with Validation",
    "objective": "Implement a POST /api/users flow with DTO validation and useful frontend validation/error handling.",
    "approach": "Define a request DTO with @NotBlank and @Email constraints, validate with @Valid, return 201 on success, and map validation failures to a stable error response. React submits JSON and displays field errors.",
    "code": "public record CreateUserRequest(\n    @NotBlank String name,\n    @Email @NotBlank String email\n) {}\n\n@PostMapping(\"/api/users\")\nResponseEntity<UserResponse> create(@Valid @RequestBody CreateUserRequest request) {\n    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(request));\n}",
    "delivery": "I would validate at the API boundary even if the frontend also validates. Client validation improves UX; server validation protects the actual contract.",
    "followups": [
      {
        "question": "Why use a DTO instead of accepting the entity?",
        "answer": "It prevents persistence details from becoming the API contract and lets validation, field exposure and versioning evolve independently."
      },
      {
        "question": "What status should successful creation return?",
        "answer": "201 Created is the conventional response for creating a resource, optionally with a Location header and the created representation."
      }
    ],
    "traps": [
      "Frontend validation is not a security boundary.",
      "Do not return a database entity blindly as the public API contract."
    ]
  },
  {
    "id": "lab-003",
    "level": "L1",
    "subtopic": "State Management",
    "title": "Build Edit Form with Server State",
    "objective": "Load one user, edit it, submit the change and keep the UI consistent after success.",
    "approach": "Use GET /api/users/{id}, controlled inputs, PUT or PATCH for the update, disable duplicate submits, and either update local state from the response or refetch the resource.",
    "code": "const [form, setForm] = useState({ name: '', email: '' });\nconst [saving, setSaving] = useState(false);\n\nasync function save() {\n  setSaving(true);\n  try {\n    const res = await fetch(`${API_BASE}/api/users/${id}`, {\n      method: 'PATCH',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(form)\n    });\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    setForm(await res.json());\n  } finally { setSaving(false); }\n}",
    "delivery": "The important engineering point is that the form is temporary client state while the saved user is server state. After a successful mutation, the UI must reflect the authoritative server result.",
    "followups": [
      {
        "question": "PUT vs PATCH here?",
        "answer": "Use PUT when the request represents replacement of the resource; PATCH is appropriate when the API intentionally supports partial updates. The contract should define the semantics."
      },
      {
        "question": "How do you prevent double submission?",
        "answer": "Disable the submit action while saving and, for important commands, make the backend operation idempotent or use an idempotency key."
      }
    ],
    "traps": [
      "Do not rely only on button disabling for duplicate prevention.",
      "Do not assume the submitted object equals the persisted object."
    ]
  },
  {
    "id": "lab-004",
    "level": "L1",
    "subtopic": "Pagination",
    "title": "Build Server-Side Pagination",
    "objective": "Create a user table that requests only one page from Spring Boot and displays page navigation.",
    "approach": "Expose GET /api/users?page=0&size=20&sort=name,asc. Validate page size server-side and return content plus total elements or a cursor depending on the API design.",
    "code": "GET /api/users?page=0&size=20&sort=name,asc\n\n{\n  \"content\": [...],\n  \"page\": 0,\n  \"size\": 20,\n  \"totalElements\": 248,\n  \"totalPages\": 13\n}",
    "delivery": "I would never load thousands of rows just to paginate them in React. Pagination belongs at the data source when the dataset can grow.",
    "followups": [
      {
        "question": "When would you use cursor pagination?",
        "answer": "For large or frequently changing feeds where stable traversal matters and arbitrary page numbers are less important. A cursor based on deterministic ordering avoids deep OFFSET costs."
      },
      {
        "question": "What should happen if page size is 10000?",
        "answer": "The backend should enforce a maximum, such as 100 or 200, to prevent a client from creating an expensive query."
      }
    ],
    "traps": [
      "Never trust client-supplied page size.",
      "Use deterministic ordering so pages do not shift unpredictably."
    ]
  },
  {
    "id": "lab-005",
    "level": "L2",
    "subtopic": "Search",
    "title": "Build Debounced Search",
    "objective": "Build a search box that avoids sending a request on every keystroke and ignores stale responses.",
    "approach": "Debounce input by about 300–500ms, cancel previous requests with AbortController, and make the backend query indexed searchable fields.",
    "code": "useEffect(() => {\n  const controller = new AbortController();\n  const timer = setTimeout(async () => {\n    const res = await fetch(`${API_BASE}/api/users?q=${encodeURIComponent(q)}`, {\n      signal: controller.signal\n    });\n    if (res.ok) setResults(await res.json());\n  }, 350);\n  return () => { clearTimeout(timer); controller.abort(); };\n}, [q]);",
    "delivery": "Debouncing reduces request volume; cancellation prevents obsolete requests from winning a race and updating the UI after the user has typed something newer.",
    "followups": [
      {
        "question": "Why is debounce not enough?",
        "answer": "Debounce reduces calls but does not guarantee response ordering. A slower older request can still finish after a newer request, so cancellation or request identity checks are useful."
      },
      {
        "question": "Where should search performance be fixed if SQL is slow?",
        "answer": "Inspect the query plan and indexes. If the query cannot use an appropriate index or the search semantics need specialized indexing, fix the data access design rather than only changing React."
      }
    ],
    "traps": [
      "Do not concatenate raw search text into SQL.",
      "Do not assume requests finish in the order they were started."
    ]
  },
  {
    "id": "lab-006",
    "level": "L2",
    "subtopic": "Security",
    "title": "Add JWT Authentication",
    "objective": "Protect a React page and Spring Boot API using a bearer JWT.",
    "approach": "Login returns an access token. React sends Authorization: Bearer <token>. Spring Security validates signature, expiry and required claims before allowing the controller to run.",
    "code": "fetch(`${API_BASE}/api/orders`, {\n  headers: { Authorization: `Bearer ${accessToken}` }\n});\n\n// Spring Security conceptually:\n// request -> bearer token filter -> JWT validation\n//         -> authorities -> controller/service",
    "delivery": "The browser should not decide whether a user is authorized. It can hide UI, but Spring Security must validate the token and enforce authorization on the API.",
    "followups": [
      {
        "question": "Authentication vs authorization?",
        "answer": "Authentication establishes who the caller is. Authorization decides what that authenticated caller is allowed to do."
      },
      {
        "question": "What must be validated in a JWT?",
        "answer": "At minimum verify the signature with the trusted key, expiry and relevant issuer/audience claims according to the security contract. Then map trusted claims to authorities."
      }
    ],
    "traps": [
      "Never trust a role sent only by the React client.",
      "Do not log access tokens."
    ]
  },
  {
    "id": "lab-007",
    "level": "L2",
    "subtopic": "Error Handling",
    "title": "Build a Consistent API Error Contract",
    "objective": "Make React handle validation, authentication, not-found and unexpected errors without parsing random Spring messages.",
    "approach": "Create a stable error shape such as {timestamp,status,code,message,fieldErrors}. Use @RestControllerAdvice to map known exceptions and keep internal stack traces out of responses.",
    "code": "{\n  \"status\": 400,\n  \"code\": \"VALIDATION_FAILED\",\n  \"message\": \"Request validation failed\",\n  \"fieldErrors\": {\n    \"email\": \"must be a valid email\"\n  }\n}",
    "delivery": "A predictable error contract is an integration feature. The frontend should branch on stable codes/statuses, not on fragile exception class names or free-form messages.",
    "followups": [
      {
        "question": "Where should the mapping happen?",
        "answer": "At the API boundary, typically through @RestControllerAdvice. Domain exceptions can remain meaningful internally while the API exposes a stable external contract."
      },
      {
        "question": "What should 500 responses contain?",
        "answer": "A safe user-facing message and a correlation/request ID if useful. Detailed exception data belongs in server logs, not the client response."
      }
    ],
    "traps": [
      "Do not expose SQL, stack traces or internal class names.",
      "Do not make every error a 200 response with an error field."
    ]
  },
  {
    "id": "lab-008",
    "level": "L2",
    "subtopic": "File Upload",
    "title": "Build a File Upload Feature",
    "objective": "Upload a profile document from React to Spring Boot with validation and safe storage.",
    "approach": "Use multipart/form-data, validate size/content type, stream or otherwise handle the file safely, store it outside the database when appropriate, and return a resource identifier rather than trusting the filename.",
    "code": "const formData = new FormData();\nformData.append('file', file);\nawait fetch(`${API_BASE}/api/documents`, {\n  method: 'POST',\n  headers: { Authorization: `Bearer ${token}` },\n  body: formData\n});",
    "delivery": "The file itself is untrusted input. The backend owns validation, authorization and storage policy. For large files, object storage and pre-signed upload flows can keep application servers out of the data path.",
    "followups": [
      {
        "question": "Why not trust the extension?",
        "answer": "An extension is client-controlled. Validate size and content characteristics appropriate to the file type and never use the original filename directly as a storage path."
      },
      {
        "question": "When would you use pre-signed URLs?",
        "answer": "When large files should upload directly to object storage, reducing application-server bandwidth and memory pressure while keeping authorization controlled by short-lived signed URLs."
      }
    ],
    "traps": [
      "Never build a filesystem path directly from the uploaded filename.",
      "Do not load very large files fully into memory unnecessarily."
    ]
  },
  {
    "id": "lab-009",
    "level": "L2",
    "subtopic": "Transactions",
    "title": "Build an Order Placement Flow",
    "objective": "Create an order command that writes the order and inventory change atomically in Spring Boot.",
    "approach": "Use a service transaction around the database changes. Lock or otherwise protect inventory correctly, validate stock, commit both changes together, and publish an event only after the database state is safely persisted.",
    "code": "@Transactional\npublic Order place(PlaceOrderCommand cmd) {\n    Inventory item = inventoryRepo.findForUpdate(cmd.productId());\n    if (item.available() < cmd.quantity()) throw new OutOfStockException();\n    item.decrease(cmd.quantity());\n    Order order = orderRepo.save(Order.create(cmd));\n    return order;\n}",
    "delivery": "The transaction boundary should match the business invariant: either the order and inventory reservation both succeed or neither database change is committed.",
    "followups": [
      {
        "question": "What about sending Kafka inside the transaction?",
        "answer": "A database transaction does not automatically make a broker publish atomic. For reliable cross-system delivery, an outbox pattern is a common approach."
      },
      {
        "question": "What if two users buy the last item?",
        "answer": "The database must serialize the conflicting inventory update, for example with row locking or an optimistic concurrency strategy with a version check."
      }
    ],
    "traps": [
      "Do not hold transactions across slow remote HTTP calls.",
      "Do not assume @Transactional covers external systems."
    ]
  },
  {
    "id": "lab-010",
    "level": "L2",
    "subtopic": "Idempotency",
    "title": "Build a Retry-Safe Payment Command",
    "objective": "Design a POST-like payment command so a client retry after a timeout does not create two charges.",
    "approach": "Require an idempotency key, persist the key with the resulting command outcome under a uniqueness constraint, and return the original result when the same key is retried.",
    "code": "POST /api/payments\nIdempotency-Key: 8f7c...\n\n// Database constraint:\nUNIQUE(user_id, idempotency_key)",
    "delivery": "A timeout tells the client that the response is unknown, not that the server definitely failed. The server therefore needs a way to recognize the same logical command when the client retries.",
    "followups": [
      {
        "question": "Where should uniqueness be enforced?",
        "answer": "At the database level with a unique constraint, because application-level check-then-insert logic can race under concurrency."
      },
      {
        "question": "What if the first request is still processing?",
        "answer": "The implementation should coordinate concurrent requests for the same key, for example by a unique record plus state, and return the finalized result once available rather than executing the business effect twice."
      }
    ],
    "traps": [
      "Do not use only an in-memory map for idempotency.",
      "Idempotency keys need a defined scope and retention policy."
    ]
  },
  {
    "id": "lab-011",
    "level": "L3",
    "subtopic": "Observability",
    "title": "Build Request Correlation End-to-End",
    "objective": "Trace one user action from React through Spring Boot and a database call using a correlation/request ID and structured logs.",
    "approach": "Generate or propagate a request ID, include it in server logs and error responses, and add timing around important boundaries. In a mature stack, use distributed tracing with trace/span IDs rather than relying only on a custom header.",
    "code": "// Browser\nfetch(url, { headers: { 'X-Request-ID': crypto.randomUUID() } });\n\n// Server log concept\n{\"requestId\":\"8f7...\",\"route\":\"/api/orders\",\"durationMs\":182,\"status\":500}",
    "delivery": "The goal is not to add random logging. It is to make one failing request reconstructable across boundaries without leaking secrets or personal data.",
    "followups": [
      {
        "question": "Request ID vs trace ID?",
        "answer": "A request ID is a simple correlation mechanism. A trace ID belongs to distributed tracing and can connect multiple spans across services, queues and downstream calls."
      },
      {
        "question": "What should not be logged?",
        "answer": "Passwords, access tokens, secrets and unnecessary sensitive personal data. Log identifiers and structured metadata that help diagnosis without creating a second data-leak surface."
      }
    ],
    "traps": [
      "Do not log entire request/response bodies by default.",
      "Correlation IDs should not be treated as authentication credentials."
    ]
  },
  {
    "id": "lab-012",
    "level": "L3",
    "subtopic": "Deployment",
    "title": "Deploy React and Spring Boot with Environment Configuration",
    "objective": "Prepare a production deployment where the React build points to the correct backend and the Spring Boot service gets environment-specific configuration.",
    "approach": "Build React with environment variables for the API origin, deploy the static assets, deploy Spring Boot with externalized configuration and secrets, configure CORS for the actual frontend origin, and verify health/readiness.",
    "code": "# React build-time configuration\nVITE_API_BASE=https://api.example.com npm run build\n\n# Spring Boot runtime configuration\nSPRING_DATASOURCE_URL=...\nSPRING_PROFILES_ACTIVE=prod",
    "delivery": "Frontend environment variables are generally build-time inputs, while Spring Boot configuration is commonly supplied at runtime. Secrets should stay server-side and in a proper secret-management mechanism.",
    "followups": [
      {
        "question": "Why can a frontend variable not be a secret?",
        "answer": "Anything shipped to the browser can be inspected by the user. Frontend variables are configuration, not a safe place for credentials."
      },
      {
        "question": "What should be checked after deployment?",
        "answer": "Browser network calls, CORS, API health/readiness, database connectivity, logs, static asset paths and the deployed API base URL."
      }
    ],
    "traps": [
      "Never put database passwords in React environment variables.",
      "Do not use wildcard CORS with credentialed requests as a shortcut."
    ]
  }
];
