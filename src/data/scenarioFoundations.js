export const scenarioFoundations = [
  {
    id: 'foundation-001', level: 'L1', subtopic: 'Request Flow', title: 'The full-stack request path',
    what: 'A browser request travels through multiple boundaries: React code creates the HTTP request, a gateway or reverse proxy may route it, Spring Boot receives it, application layers execute business logic, and the database or another service supplies data.',
    how: 'Start debugging at the first boundary where you can observe evidence. Browser Network shows the URL, method, status, headers, timing and response. Backend logs then show whether the request reached Spring Boot. From there follow controller, service, repository and downstream calls.',
    code: 'React → HTTP → Gateway/Proxy → Spring Controller → Service → Repository → Database',
    delivery: 'I think about a full-stack request as a chain of boundaries. I identify the first boundary where the expected behavior changes, collect evidence there, and then move deeper instead of guessing.',
    followups: [
      { question: 'Why start with the browser Network tab?', answer: 'It tells me what the browser actually sent and what it actually received. I can verify the URL, method, status, request headers, payload, response and timing instead of assuming the React code behaved as expected.' },
      { question: 'What if the request never reaches Spring Boot?', answer: 'Then I investigate the boundary before the application: DNS, TLS, reverse proxy, API gateway, routing, firewall or browser policy such as CORS. Backend code cannot fix a request that never reaches it.' }
    ],
    traps: ['Do not jump straight into backend code without proving the request reached the backend.', 'Do not treat the frontend console message as the root cause.']
  },
  {
    id: 'foundation-002', level: 'L1', subtopic: 'HTTP', title: 'HTTP methods and status codes',
    what: 'HTTP methods describe the intended operation and status codes communicate the result. Common methods are GET, POST, PUT, PATCH and DELETE; common status families are 2xx success, 4xx client/request problems and 5xx server-side or upstream failures.',
    how: 'A frontend should interpret the response based on the API contract rather than displaying the same error for every non-2xx response. The backend should choose status codes consistently so clients can make correct decisions.',
    code: 'GET /api/orders/123 → 200 OK\nPOST /api/orders → 201 Created\nGET /api/orders/999 → 404 Not Found\nGET /api/orders → 500 Internal Server Error',
    delivery: 'I use status codes as diagnostic signals. A 401 points to authentication, 403 to authorization, 4xx generally to the request or resource, and 5xx to a server or upstream failure.',
    followups: [
      { question: 'What is the difference between 400 and 500?', answer: '400 means the server considers the request invalid or unacceptable from the client side, while 500 means the server encountered an unexpected condition while processing a request.' },
      { question: 'Why return 201 for creation?', answer: '201 Created communicates that a new resource was successfully created. The response can also include the created resource or a Location header according to the API contract.' }
    ],
    traps: ['Do not return 200 for every outcome.', 'Do not expose stack traces in 5xx responses.']
  },
  {
    id: 'foundation-003', level: 'L1', subtopic: 'Browser Debugging', title: 'Using Chrome Network tab',
    what: 'The Network tab is the primary browser tool for inspecting HTTP requests made by a web application.',
    how: 'Open Network, reproduce the action, select the request and inspect Request URL, method, status, request headers, payload, response headers, response body, timing and initiator. Compare a working request with the failing request when possible.',
    code: 'Check: URL → Method → Status → Request Headers → Payload → Response → Timing',
    delivery: 'For a frontend API problem I first reproduce it with DevTools open. I inspect the actual network request and compare it with a known-good request before changing application code.',
    followups: [
      { question: 'What does the Initiator tell you?', answer: 'It helps identify which browser code or resource triggered the request, which is useful when several components can call the same endpoint.' },
      { question: 'How do you investigate a slow API?', answer: 'I inspect the request timing, then correlate it with backend logs and downstream timings. I want to distinguish browser delay, network delay, gateway delay, application processing and database or external-service latency.' }
    ],
    traps: ['Do not only inspect Console when debugging HTTP behavior.', 'Do not assume a request URL from source code is the URL used by the deployed bundle.']
  },
  {
    id: 'foundation-004', level: 'L1', subtopic: 'CORS', title: 'CORS and browser origin policy',
    what: 'CORS is the mechanism by which a server tells a browser which cross-origin requests are permitted. It is enforced by browsers, not by Spring Boot itself.',
    how: 'When a request needs preflight, the browser sends OPTIONS first. The server must respond with appropriate Access-Control-Allow-* headers. Production frontend and API origins often differ from localhost, so the production allow-list must be configured deliberately.',
    code: 'Browser Origin: https://app.example.com\nAPI: https://api.example.com\nPreflight: OPTIONS /api/orders',
    delivery: 'I diagnose CORS from the Network tab, especially the OPTIONS preflight, and then verify the server or gateway response headers against the browser origin.',
    followups: [
      { question: 'Why does Postman work when the browser fails?', answer: 'Postman is not enforcing the browser same-origin policy, so it can call the API without requiring CORS response headers.' },
      { question: 'Can I use Access-Control-Allow-Origin: * with credentials?', answer: 'No. Credentialed browser requests require an explicit allowed origin rather than a wildcard origin.' }
    ],
    traps: ['Do not disable CORS globally just to make development work.', 'Do not confuse CORS with authentication or authorization.']
  },
  {
    id: 'foundation-005', level: 'L1', subtopic: 'Error Handling', title: 'Designing frontend API error handling',
    what: 'A production frontend should distinguish expected API outcomes from unexpected failures and present a useful state without leaking backend internals.',
    how: 'Centralize HTTP handling where practical. Map 401 to authentication recovery, 403 to permission messaging, 404 to resource handling, validation 4xx to field or request feedback, and 5xx/network failures to retry or generic error states. Keep technical details in logs rather than user-facing messages.',
    code: '401 → refresh/login\n403 → permission message\n422/400 → validation feedback\n404 → not found state\n5xx/timeout → safe retry/error state',
    delivery: 'I avoid one generic error path. The UI should react differently to authentication, authorization, validation, not-found and server failures while keeping sensitive implementation details out of the user message.',
    followups: [
      { question: 'Should React show the backend exception message?', answer: 'Only if the API contract explicitly provides a safe user-facing message. Raw exception text can leak internal details and should not be trusted as UI copy.' },
      { question: 'Where should unexpected errors be logged?', answer: 'The frontend can send safe diagnostic information to client monitoring, while the backend logs the server-side exception with a trace or correlation identifier. Avoid logging secrets or unnecessary personal data.' }
    ],
    traps: ['Do not expose stack traces to users.', 'Do not automatically retry every failed request.']
  },
  {
    id: 'foundation-006', level: 'L2', subtopic: 'Spring Request Lifecycle', title: 'What happens inside Spring Boot?',
    what: 'A request handled by Spring MVC typically passes through the servlet/filter chain, handler mapping, controller method, service logic, persistence or downstream calls, exception handling and response serialization.',
    how: 'Security filters can reject a request before the controller. Once accepted, Spring maps the URL and HTTP method to a controller. The controller should coordinate the use case rather than contain persistence logic. Exceptions can be translated centrally with controller advice.',
    code: 'HTTP → Filter/Security → DispatcherServlet → Controller → Service → Repository → Response',
    delivery: 'When debugging a Spring request I ask whether it failed before the controller, inside the controller or service, during persistence, or while calling a downstream system. That narrows the search quickly.',
    followups: [
      { question: 'Can Spring Security reject a request before the controller?', answer: 'Yes. Security filters run before controller execution and can reject missing or invalid authentication or authorization requirements.' },
      { question: 'Why use a service layer?', answer: 'It gives the business use case a clear boundary and prevents controllers from becoming tightly coupled to persistence and transaction details.' }
    ],
    traps: ['Do not put all business logic in controllers.', 'Do not assume a controller breakpoint will hit for an authentication failure.']
  },
  {
    id: 'foundation-007', level: 'L2', subtopic: 'Authentication', title: 'Authentication vs authorization',
    what: 'Authentication establishes who the caller is. Authorization decides whether that authenticated identity is allowed to perform a specific action.',
    how: 'A React application may hold session state or an access token, but the backend is the security boundary. Spring Security validates the credential and establishes the principal; authorization rules then check roles, authorities or business permissions.',
    code: 'Authentication: Who are you?\nAuthorization: Are you allowed to do this?',
    delivery: 'I keep the distinction clear: authentication establishes identity, authorization checks permission. Frontend route guards improve UX, but the backend must enforce authorization.',
    followups: [
      { question: 'What does 401 mean?', answer: 'The server could not establish a valid authenticated identity, for example because credentials are missing, expired or invalid.' },
      { question: 'What does 403 mean?', answer: 'The request reached an authenticated identity, but that identity does not have the required authority for the operation.' }
    ],
    traps: ['Do not rely on hiding a React button as authorization.', 'Do not put authorization decisions only in the frontend.']
  },
  {
    id: 'foundation-008', level: 'L2', subtopic: 'JWT', title: 'JWT validation from React to Spring Security',
    what: 'A JWT is a signed token containing claims. A backend must validate the token signature and relevant claims such as issuer, audience and expiry before trusting its identity information.',
    how: 'The browser sends the access token according to the chosen authentication architecture. Spring Security validates it and creates an authenticated principal. The application then uses that principal for authorization. Token presence in browser storage is not proof of validity.',
    code: 'React request → Authorization: Bearer <access-token> → Spring Security → validate signature/claims → principal',
    delivery: 'I never treat a JWT as trusted just because React has it. The backend validates the signature and required claims before creating the authenticated context.',
    followups: [
      { question: 'Should JWT claims be trusted by React for authorization?', answer: 'React can use claims to shape the UI, but the backend must independently enforce authorization because browser code and client state are under the user’s control.' },
      { question: 'What should happen when an access token expires?', answer: 'Use the defined refresh or re-authentication flow. A client can perform one controlled refresh and retry the original request once; otherwise clear authentication state and require login.' }
    ],
    traps: ['Never put secrets such as private keys in browser code.', 'Never skip backend token validation because the frontend decoded the JWT successfully.']
  },
  {
    id: 'foundation-009', level: 'L2', subtopic: 'Data Contracts', title: 'DTOs and API contracts',
    what: 'A DTO defines the data shape exchanged by the API without exposing the persistence model directly.',
    how: 'The controller receives or returns DTOs, validation applies at the API boundary, and the service maps DTOs to domain or persistence objects. This prevents accidental exposure of fields and allows the API contract to evolve independently of database structure.',
    code: 'POST /customers\nRequest DTO: name, email\nEntity: id, name, email, passwordHash, auditFields',
    delivery: 'I use DTOs at the API boundary so the external contract is deliberate and I do not accidentally expose persistence fields such as password hashes or internal audit data.',
    followups: [
      { question: 'Why not return the JPA entity directly?', answer: 'It couples the API to persistence structure and can expose fields that should never leave the server. DTOs also make API evolution and serialization behavior more explicit.' },
      { question: 'Where should validation happen?', answer: 'Basic request-shape and input validation belongs at the API boundary, while business invariants should also be enforced in the appropriate domain or service layer.' }
    ],
    traps: ['Do not expose password or security fields through JSON serialization.', 'Do not treat DTO validation as a replacement for database constraints.']
  },
  {
    id: 'foundation-010', level: 'L2', subtopic: 'Transactions', title: 'Transaction boundaries in full-stack flows',
    what: 'A database transaction groups database operations that must succeed or fail together. It does not automatically make remote HTTP calls transactional.',
    how: 'A Spring service method is a common transaction boundary for one business use case. Keep the transaction reasonably short. If a workflow includes an external API or message publication, use an explicit consistency pattern such as an outbox rather than assuming @Transactional can roll everything back.',
    code: 'Service transaction:\nupdate order + write outbox event → COMMIT\nPublisher later sends event',
    delivery: 'I place transactions around the business use case and keep them short. For remote calls, I design explicit failure and consistency behavior because a database rollback cannot undo an already completed HTTP call.',
    followups: [
      { question: 'Can @Transactional roll back a payment provider call?', answer: 'No. It controls the local transaction resource, typically the database. A successful remote call cannot be undone by a later local database rollback unless the remote system provides a compensating operation.' },
      { question: 'Why is the outbox pattern useful?', answer: 'The business state and an event record are written in one database transaction. A separate publisher then sends the event, closing the gap between database commit and message publication.' }
    ],
    traps: ['Do not hold database transactions open while waiting on slow external services without a strong reason.', 'Do not assume network timeout means the remote operation did not happen.']
  },
  {
    id: 'foundation-011', level: 'L2', subtopic: 'Idempotency', title: 'Making commands safe to retry',
    what: 'An idempotent operation can be repeated without creating additional unintended business effects. This matters because browsers, gateways, clients and message systems can retry operations.',
    how: 'For commands such as order creation, the client can send an idempotency key. The server persists the key and result, enforces uniqueness where appropriate, and returns the same logical result for duplicate submissions.',
    code: 'POST /orders\nIdempotency-Key: checkout-abc-123\n→ first call creates order\n→ repeat returns same result',
    delivery: 'I make business commands resilient to duplicate delivery rather than relying only on UI button disabling. The server owns the business consistency guarantee.',
    followups: [
      { question: 'Why is disabling the submit button insufficient?', answer: 'Requests can still be duplicated by retries, multiple tabs, intermediary behavior or client failures. UI prevention is useful, but it is not the final consistency boundary.' },
      { question: 'Where should the idempotency key be stored?', answer: 'The server should persist it with enough information to recognize the logical operation and safely return the prior result. A database uniqueness constraint is often part of the design.' }
    ],
    traps: ['Do not generate a new key for every automatic retry of the same logical operation.', 'Do not assume POST can never be retried.']
  },
  {
    id: 'foundation-012', level: 'L2', subtopic: 'Pagination', title: 'Offset vs cursor pagination',
    what: 'Offset pagination uses page number or offset plus limit. Cursor or keyset pagination uses a stable ordering boundary to fetch the next slice efficiently.',
    how: 'Offset is simple and supports random page access, but deep offsets can become expensive. Cursor pagination can seek from an indexed `(created_at, id)` boundary and is often better for large changing datasets.',
    code: 'Offset: GET /orders?page=10000&size=50\nCursor: GET /orders?after=opaqueCursor&limit=50',
    delivery: 'I choose pagination based on the user experience and data size. Offset is simple; cursor pagination is preferable when deep pages and continuously changing large datasets make offset scans expensive.',
    followups: [
      { question: 'Why use a unique tie-breaker with created_at?', answer: 'Two rows can have the same timestamp. Adding a unique id creates deterministic ordering so records are not skipped or repeated between pages.' },
      { question: 'Can cursor pagination jump directly to page 5000?', answer: 'Not naturally. It is designed for sequential traversal. If arbitrary page jumps are a hard requirement, offset pagination or another strategy may be more appropriate.' }
    ],
    traps: ['Do not expose raw database cursor details as a public contract.', 'Do not choose cursor pagination without considering the required UI navigation.']
  },
  {
    id: 'foundation-013', level: 'L2', subtopic: 'Search', title: 'Debouncing search requests',
    what: 'Debouncing waits for a short quiet period after user input before sending the search request, reducing unnecessary calls while the user is typing.',
    how: 'React state updates immediately for the input, while the API call is scheduled after a delay. A new keystroke resets the timer. The backend should still paginate, validate query size and use an appropriate index or search technology.',
    code: 'User types: c → ca → car → cart\nWithout debounce: 4 requests\nWith debounce: usually 1 request after typing pauses',
    delivery: 'I solve search load on both sides: debounce the UI to reduce request volume and optimize the backend query so each remaining request is efficient.',
    followups: [
      { question: 'Why not debounce only on the backend?', answer: 'The backend cannot prevent the network requests from reaching it. Client-side debounce reduces unnecessary traffic before it enters the system.' },
      { question: 'Should search require a minimum query length?', answer: 'Often yes, when very broad searches are expensive. The threshold should match the product requirement and query performance rather than being arbitrary.' }
    ],
    traps: ['Do not rely on debounce as a security control.', 'Do not forget pagination for large search results.']
  },
  {
    id: 'foundation-014', level: 'L2', subtopic: 'Caching', title: 'HTTP caching and ETag',
    what: 'HTTP caching allows a browser or intermediary to reuse a response according to cache directives. An ETag identifies a representation version so the client can ask whether it changed.',
    how: 'The server returns an ETag. A later request sends If-None-Match. If the representation is unchanged, the server can return 304 Not Modified without sending the full body again.',
    code: 'GET /countries → ETag: "v42"\nGET /countries\nIf-None-Match: "v42"\n→ 304 Not Modified',
    delivery: 'I use caching where freshness requirements permit it. ETags are useful because unchanged resources can avoid transferring the full response body.',
    followups: [
      { question: 'Can user-specific data be cached publicly?', answer: 'Not safely by default. A shared cache could return one user’s response to another. Sensitive or user-specific responses need appropriate cache controls.' },
      { question: 'When would you avoid caching?', answer: 'When data is highly volatile, sensitive, cheap to compute, or stale data would create unacceptable business behavior.' }
    ],
    traps: ['Do not put sensitive responses into shared caches accidentally.', 'Do not set long cache lifetimes without an invalidation or freshness strategy.']
  },
  {
    id: 'foundation-015', level: 'L2', subtopic: 'File Upload', title: 'Large file upload architecture',
    what: 'Small uploads can pass through Spring Boot, but large files can consume application bandwidth, memory, connection capacity and proxy limits.',
    how: 'For large files, a common architecture is backend authorization followed by a short-lived pre-signed object-storage URL. The browser uploads directly to storage, while the backend stores metadata and validates the resulting object.',
    code: 'React → POST /uploads/init → Spring Boot → signed URL\nReact → object storage upload\nReact → POST /uploads/complete',
    delivery: 'I separate authorization from heavy data transfer when scale requires it. The backend controls who can upload and what can be uploaded, while object storage handles the payload.',
    followups: [
      { question: 'What does a 413 response mean?', answer: 'It indicates the request payload is too large for the receiving boundary. The limit may be enforced by the proxy, gateway, application or another layer.' },
      { question: 'Is a browser MIME type enough for validation?', answer: 'No. Client-provided metadata can be manipulated. Server-side validation should inspect the file according to the application’s security and business requirements.' }
    ],
    traps: ['Do not increase upload limits blindly at every layer.', 'Do not expose unrestricted storage credentials to the browser.']
  },
  {
    id: 'foundation-016', level: 'L2', subtopic: 'Resilience', title: 'Timeouts, retries and circuit breakers',
    what: 'A timeout bounds how long the application waits for a dependency. Retries can recover transient failures but can also multiply load. A circuit breaker stops repeated calls to a failing dependency for a period.',
    how: 'Use finite connect/read timeouts, retry only operations that are safe to retry, apply exponential backoff and jitter, and use a circuit breaker when repeated dependency failures would otherwise consume application resources.',
    code: 'Request → dependency timeout\n→ limited retry + backoff\n→ circuit opens after failure threshold\n→ controlled recovery probe',
    delivery: 'I bound time, concurrency and retries around external dependencies. Resilience is not simply retrying; it is preventing a slow or failing dependency from taking down the caller.',
    followups: [
      { question: 'Why can retries make an outage worse?', answer: 'Retries add more traffic to an already failing dependency and consume local threads and connections. Backoff, jitter and retry budgets reduce retry storms.' },
      { question: 'Should every API call have a retry?', answer: 'No. Retrying depends on whether the failure is transient and whether repeating the operation is safe. Non-idempotent commands require particular care.' }
    ],
    traps: ['Do not use extremely long timeouts to hide dependency failures.', 'Do not retry non-idempotent operations blindly.']
  },
  {
    id: 'foundation-017', level: 'L2', subtopic: 'Observability', title: 'Logs, metrics and traces',
    what: 'Logs record detailed events, metrics measure numeric behavior over time, and traces show the path and timing of an operation across components.',
    how: 'Use a correlation or trace identifier consistently across browser, gateway and backend boundaries. Structured logs should contain safe identifiers and useful context. Metrics expose rates, latency and errors, while traces connect distributed work.',
    code: 'React → Gateway → Order Service → Payment Service\ntraceId=abc123 across the request',
    delivery: 'For production debugging I want three views: metrics tell me whether the system is unhealthy, traces show where time or failure occurred, and logs explain the detailed event.',
    followups: [
      { question: 'What should never be logged?', answer: 'Passwords, access tokens, payment secrets, private keys and unnecessary sensitive personal data should not be logged. Use safe identifiers and structured context instead.' },
      { question: 'Why is a trace ID useful?', answer: 'It lets engineers correlate events belonging to one logical request across multiple services and infrastructure boundaries.' }
    ],
    traps: ['Do not log sensitive credentials for easier debugging.', 'Do not rely on logs alone when metrics or traces can reveal the failure boundary faster.']
  },
  {
    id: 'foundation-018', level: 'L2', subtopic: 'Configuration', title: 'Frontend and backend environment configuration',
    what: 'Environment-specific configuration changes between development, test and production. Browser configuration is fundamentally different from server secrets because anything shipped to the browser is observable by users.',
    how: 'With Vite, intentionally public variables use the VITE_ prefix and are embedded into the client build. API URLs can also be supplied through runtime configuration or a same-origin reverse proxy. Secrets stay on the server.',
    code: 'Development: http://localhost:8080\nProduction: /api or https://api.example.com\nNever: VITE_DB_PASSWORD=...',
    delivery: 'I verify the actual production artifact and network requests rather than assuming the environment file was loaded. Anything exposed to React must be treated as public.',
    followups: [
      { question: 'Are VITE_ variables secrets?', answer: 'No. They are available to browser code and can be inspected by users in the built application. They must contain only intentionally public configuration.' },
      { question: 'How can one frontend artifact work in multiple environments?', answer: 'Use runtime configuration supplied by deployment infrastructure, such as a generated config file or endpoint, instead of rebuilding the static application for each environment.' }
    ],
    traps: ['Never put database passwords or private keys into VITE_ variables.', 'Do not assume localhost URLs disappear automatically in production.']
  },
  {
    id: 'foundation-019', level: 'L3', subtopic: 'Deployment', title: 'React + Spring Boot deployment flow',
    what: 'A production full-stack deployment typically builds the React static assets, deploys them to a web server/CDN, deploys Spring Boot separately, and connects them through an API route or gateway.',
    how: 'The frontend build is immutable static output. A reverse proxy can serve `/` from the frontend and route `/api/*` to Spring Boot, creating one browser origin. The backend needs its own configuration, database connectivity, health checks and deployment strategy.',
    code: 'Browser → Nginx/CDN\n          ├── / → React static assets\n          └── /api → Spring Boot',
    delivery: 'I separate frontend static delivery from backend application execution, then connect them through a deliberate routing layer. Same-origin `/api` routing can simplify browser configuration and CORS.',
    followups: [
      { question: 'Why is a reverse proxy useful?', answer: 'It can terminate TLS, serve static assets efficiently, route API traffic to backend services, centralize some headers and expose a single browser origin.' },
      { question: 'What should be checked after deployment?', answer: 'Health checks, frontend asset loading, API routing, authentication, database connectivity, logs, metrics, error rates and a small set of critical end-to-end flows.' }
    ],
    traps: ['Do not treat a successful frontend build as proof that the production API works.', 'Do not expose internal service addresses directly to browser code unless the architecture requires it.']
  },
  {
    id: 'foundation-020', level: 'L3', subtopic: 'End-to-End Debugging', title: 'Finding the first failing boundary',
    what: 'The most efficient production debugging approach is to locate the first boundary where observed behavior differs from expected behavior, then investigate that layer with evidence.',
    how: 'Build a chain of evidence: browser request, gateway access log, Spring request log, service logs, database query/metrics and downstream service trace. Compare timestamps and correlation IDs. Fix the earliest confirmed failure, then retest the whole flow.',
    code: 'Expected: Browser → Gateway → Spring → DB\nObserved: Browser → Gateway → X\nFirst failure = Gateway routing',
    delivery: 'I avoid changing multiple layers at once. I establish what happened at each boundary, find the first confirmed deviation, fix that boundary, and then validate the complete request path again.',
    followups: [
      { question: 'What if every layer appears healthy?', answer: 'I compare the exact request and response, timing, feature flags, configuration and data involved. A system can be healthy overall while one request is affected by bad input, authorization, stale configuration or a specific data condition.' },
      { question: 'How do you prevent debugging from becoming guesswork?', answer: 'Use observable evidence: request IDs, timestamps, Network traces, structured logs, metrics, traces and reproducible test cases. Make one hypothesis at a time and verify it.' }
    ],
    traps: ['Do not restart services repeatedly without collecting evidence.', 'Do not change frontend, backend and database code simultaneously because it destroys the ability to identify the actual cause.']
  }
];
