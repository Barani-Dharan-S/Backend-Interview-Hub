export const fullStackScenarios = [
  {
    id: 'scenario-001', level: 'L2', subtopic: 'Debugging', title: 'React page gets 401 after login',
    situation: 'The login call succeeds, but the next GET /api/orders returns 401 even though the user can see a token in the browser.',
    diagnosis: 'Check the browser Network tab first: confirm the Authorization or session credential is actually sent on the failing request, then inspect token expiry, issuer/audience, signature validation and Spring Security configuration. If the token is sent and rejected, use the backend trace/logs to identify the validation failure.',
    solution: 'Fix the request authentication path rather than bypassing security. Centralize authenticated requests in one API client, handle 401 consistently, and refresh or re-authenticate according to the chosen session architecture. Never make the backend accept an invalid token just because the frontend has one.',
    delivery: 'I start at the browser network request, verify whether the credential is present, then follow the same request through Spring Security. A token existing in storage proves nothing; the server must successfully validate it.',
    followups: [
      { question: 'Would you retry a 401 automatically?', answer: 'Only for a controlled refresh flow. If an access token expires, the client can perform one refresh attempt and replay the original request once. If refresh fails, clear the authenticated state and send the user to login. Do not blindly retry every 401 because invalid credentials or revoked sessions will create loops.' },
      { question: 'What is the difference between 401 and 403 here?', answer: '401 means the server could not establish a valid authenticated identity, such as a missing, expired or invalid token. 403 means authentication succeeded but the authenticated principal lacks the required authority.' },
      { question: 'Where should the real authorization check happen?', answer: 'On the backend. Spring Security or application service authorization must verify the authenticated principal and required role/permission before the protected operation executes. React route guards are only a UX layer.' }
    ],
    traps: ['Do not fix a 401 by disabling Spring Security.', 'Do not trust a token merely because it is present in local storage.']
  },
  {
    id: 'scenario-002', level: 'L2', subtopic: 'Debugging', title: 'CORS works locally but fails after deployment',
    situation: 'React works against localhost during development, but the deployed browser reports a CORS error when calling the production API.',
    diagnosis: 'Compare the exact browser Origin in production with the origins allowed by Spring Boot. Inspect the OPTIONS preflight and the actual request. Check whether credentials are used and whether the gateway or reverse proxy is stripping CORS headers.',
    solution: 'Configure explicit production origins and required methods/headers at the correct server boundary. Ensure OPTIONS requests reach the application or gateway and that credential rules are consistent. Do not use wildcard origins with credentialed requests.',
    delivery: 'I treat CORS as a browser-origin policy and inspect the preflight request before changing code. Localhost and production are different origins, so the production allow-list must be configured explicitly.',
    followups: [
      { question: 'Why does Postman work while the browser fails?', answer: 'Postman is not enforcing the browser same-origin policy, so it can call the API without requiring CORS response headers. A browser requires the server to explicitly permit the cross-origin request.' },
      { question: 'What is a preflight request?', answer: 'For certain cross-origin requests, the browser sends an OPTIONS request first to ask whether the origin, method and headers are allowed. The server must return the appropriate Access-Control-Allow-* headers before the browser sends the actual request.' },
      { question: 'Where would you configure CORS if there is an API gateway?', answer: 'Prefer one clear ownership point, usually the gateway for global cross-origin policy, or the application if that is the established architecture. Avoid conflicting policies at multiple layers without understanding which headers win.' }
    ],
    traps: ['Do not diagnose CORS from the React console message alone; inspect Network.', 'Do not permanently allow every origin to make production errors disappear.']
  },
  {
    id: 'scenario-003', level: 'L2', subtopic: 'Data Consistency', title: 'User double-clicks Create Order',
    situation: 'A customer double-clicks the checkout button and two POST /api/orders requests arrive, creating duplicate orders.',
    diagnosis: 'Confirm duplicate request IDs or equivalent payloads in server logs and inspect whether the operation is retried by the client, browser, gateway or user action. Determine whether the endpoint is intended to be idempotent.',
    solution: 'Introduce an idempotency key for order creation. The client generates a unique key for one logical submission; the server stores the result associated with that key and returns the same result for a repeated request. Enforce a database uniqueness constraint where appropriate as a final consistency boundary.',
    delivery: 'For business commands such as order creation, I do not rely on disabling the button. I make the server operation idempotent so duplicate delivery cannot create duplicate business state.',
    followups: [
      { question: 'Why is disabling the button not enough?', answer: 'A request can be duplicated by retries, network behavior, users opening multiple tabs, or intermediaries. Client-side UI prevention reduces accidental duplicates but cannot guarantee server-side uniqueness.' },
      { question: 'Where should the idempotency key be stored?', answer: 'The backend should persist the key with the operation result or enough state to reproduce the same outcome. The exact retention period depends on business requirements, but it must cover the window in which duplicate requests are possible.' },
      { question: 'Can a database unique constraint replace idempotency?', answer: 'A unique constraint is excellent for enforcing a specific invariant, but it does not automatically provide the same response for a duplicate request. Idempotency handling can combine the constraint with stored request/result state.' }
    ],
    traps: ['Do not assume POST can never be retried.', 'Do not use a random client-generated key without defining its lifecycle and server retention.']
  },
  {
    id: 'scenario-004', level: 'L2', subtopic: 'Performance', title: 'Orders page takes five seconds to load',
    situation: 'The React orders screen takes about five seconds in production, while the same screen feels fast locally.',
    diagnosis: 'Use browser Network timing to separate DNS, connection, server waiting and download time. Then use the request trace to measure Spring controller/service/database/downstream timings. Check SQL execution plans, result size and N+1 queries before optimizing React rendering.',
    solution: 'Optimize the first proven bottleneck: paginate at the database, remove N+1 queries, select only required fields, add justified indexes, cache stable reference data, or improve a slow downstream call. On React, avoid unnecessary re-renders and oversized payloads, but only after the network/server evidence identifies a client bottleneck.',
    delivery: 'I do not guess that React is slow. I measure the request end-to-end, find the largest latency contributor, fix that boundary, and verify the improvement with the same production-like workload.',
    followups: [
      { question: 'How would you detect an N+1 query?', answer: 'Enable suitable SQL logging or APM database instrumentation and look for one query fetching the parent list followed by repeated child queries for each row. Then inspect the JPA fetch strategy and query shape rather than simply making everything EAGER.' },
      { question: 'Would you add an index immediately?', answer: 'No. First identify the expensive query and inspect its execution plan and selectivity. Add an index when it matches the access pattern and improves the workload enough to justify its write and storage cost.' },
      { question: 'What metric would you watch after the fix?', answer: 'Track API latency percentiles such as p95/p99, error rate, database query latency and throughput. Averages alone can hide a tail-latency problem.' }
    ],
    traps: ['Do not optimize based only on local timings.', 'Do not add indexes without checking query plans and write cost.']
  },
  {
    id: 'scenario-005', level: 'L2', subtopic: 'Frontend State', title: 'Search results show an older query',
    situation: 'A user types "java", then quickly types "javascript". The UI sometimes ends up showing the slower response for "java".',
    diagnosis: 'The requests are concurrent and responses can complete out of order. Inspect Network timing to confirm that an earlier request resolves after a later request.',
    solution: 'Debounce typing to reduce request volume and cancel or ignore stale requests using AbortController/request identity. The state update should only be accepted for the latest active query.',
    delivery: 'The bug is a race condition, not a Spring response-order problem. I make the client aware of request identity and cancel stale work where possible.',
    followups: [
      { question: 'Why does debounce alone not completely solve it?', answer: 'Debounce reduces how often requests are started, but once multiple requests are in flight, responses can still arrive out of order. Cancellation or stale-response protection is still needed.' },
      { question: 'How does AbortController help?', answer: 'The controller supplies an AbortSignal to fetch. When a newer query supersedes the old one, aborting the previous request stops or rejects that fetch so the client does not continue processing stale work.' },
      { question: 'Should the backend guarantee response ordering?', answer: 'No. HTTP requests are independent. The client must handle concurrency correctly; if ordering is a business requirement, the API contract needs an explicit sequence or version mechanism.' }
    ],
    traps: ['Do not assume the last request sent is the last response received.', 'Do not swallow AbortError as if it were a server failure.']
  },
  {
    id: 'scenario-006', level: 'L2', subtopic: 'Error Handling', title: 'Spring Boot returns 500 for invalid form input',
    situation: 'Submitting an invalid registration form causes HTTP 500 instead of a clear validation response.',
    diagnosis: 'Check whether request DTO validation is configured, whether validation exceptions are handled globally, and whether the frontend sends the expected JSON shape.',
    solution: 'Use Bean Validation on request DTOs and map validation failures to a stable 400 response containing field-level errors. Keep unexpected exceptions mapped to 500 and avoid exposing stack traces.',
    delivery: 'Invalid client input is not a server crash. I make validation failures explicit as 400 responses and keep unexpected failures separate so React can render useful field messages.',
    followups: [
      { question: 'Where should field validation errors be returned?', answer: 'The API should return a structured 400 payload, for example an error code plus a list or map of field names to messages. React can bind those messages directly to the relevant inputs.' },
      { question: 'Should business validation also use Bean Validation?', answer: 'Simple structural constraints fit Bean Validation. Rules requiring database state or multiple fields often belong in the service/domain layer, where the application can evaluate the business invariant.' },
      { question: 'Why not return the exception message directly?', answer: 'Exception messages can expose implementation details and are not stable API contracts. A client should depend on documented error codes and safe messages.' }
    ],
    traps: ['Do not turn all exceptions into 400.', 'Do not expose stack traces in production responses.']
  },
  {
    id: 'scenario-007', level: 'L2', subtopic: 'Authentication', title: 'Access token expires during checkout',
    situation: 'A user spends several minutes on checkout and receives 401 when submitting the order because the access token expired.',
    diagnosis: 'Inspect token expiry and the authentication flow. Determine whether a refresh token/session mechanism exists and whether the failing request is safely replayable.',
    solution: 'Use a short-lived access token with a controlled refresh flow. On one 401 caused by expiry, refresh the session and retry the original request once. For non-idempotent commands, ensure the server also has idempotency protection before replaying.',
    delivery: 'Token refresh is an authentication concern, while duplicate command protection is a business consistency concern. I solve both rather than blindly replaying every failed request.',
    followups: [
      { question: 'Why is one retry the limit?', answer: 'Unlimited retries can create loops when the session is invalid or the server is returning 401 for another reason. A single coordinated refresh attempt is predictable and prevents request storms.' },
      { question: 'What if the refresh token is invalid?', answer: 'Treat the session as unauthenticated, clear client authentication state, and require a new login. The server should reject the invalid refresh credential.' },
      { question: 'Is retrying POST safe after refresh?', answer: 'Only if the operation is designed to tolerate replay, typically through idempotency or another server-side uniqueness mechanism. Authentication refresh does not make a POST inherently idempotent.' }
    ],
    traps: ['Do not refresh repeatedly in parallel from many failed requests.', 'Do not store long-lived credentials in places accessible to arbitrary scripts without considering the XSS threat model.']
  },
  {
    id: 'scenario-008', level: 'L2', subtopic: 'Concurrency', title: 'Two users overwrite the same order',
    situation: 'Two operators open the same order. User A saves a status change, then User B saves an older copy and silently overwrites A.',
    diagnosis: 'Inspect whether the API carries a version or last-modified value and whether the database update checks it. The problem is a lost update caused by concurrent writes.',
    solution: 'Use optimistic locking with a version column or an equivalent conditional update. The API should reject a stale update with 409 Conflict or another documented concurrency response, after which React can reload the current state and ask the user to reconcile.',
    delivery: 'I prefer optimistic concurrency when conflicts are possible but long locks are undesirable. The server detects stale state and the UI handles the conflict explicitly.',
    followups: [
      { question: 'How does @Version help in JPA?', answer: 'JPA increments the version when an entity is updated and includes the expected version in the update condition. If another transaction already changed the row, the update affects zero rows and JPA raises an optimistic locking exception.' },
      { question: 'Why return 409?', answer: '409 communicates that the request conflicts with the current state of the resource. It gives the client a meaningful signal that the operation should be reconciled rather than blindly retried.' },
      { question: 'When would you use pessimistic locking?', answer: 'When the business operation truly requires a database lock to serialize access and the expected contention/transaction duration makes that safe. It increases blocking and deadlock considerations, so it should not be the default for every update.' }
    ],
    traps: ['Do not silently overwrite stale data.', 'Do not keep database locks open while waiting for user interaction.']
  },
  {
    id: 'scenario-009', level: 'L2', subtopic: 'API Design', title: 'Frontend breaks after a backend response change',
    situation: 'The backend renames `customerName` to `name`, and the deployed React application starts rendering blank values.',
    diagnosis: 'Check the deployed frontend version and API response contract. This is a compatibility failure between independently deployed components.',
    solution: 'Use additive API evolution where possible: return the new field while keeping the old field during a migration window, update consumers, then remove the old field after all supported clients have moved. Contract tests can detect breaking changes before deployment.',
    delivery: 'I treat API DTOs as contracts. A backend should not make a breaking response change while older frontend versions may still be running.',
    followups: [
      { question: 'Would API versioning solve every breaking change?', answer: 'Versioning can isolate incompatible contracts, but it also creates maintenance cost. Prefer backward-compatible additive changes when practical and use versioning when incompatibility is intentional and significant.' },
      { question: 'What is a contract test?', answer: 'A contract test verifies that a provider API and its consumer agree on the expected request/response structure and semantics. It catches incompatible changes before they reach production.' },
      { question: 'Why can old frontend versions still be active?', answer: 'Browsers may keep an already-loaded application running, users may not refresh immediately, and CDN caches can temporarily serve older assets. Backend compatibility therefore matters during rollout.' }
    ],
    traps: ['Do not assume deployment finishes for every browser at the same time.', 'Do not expose database column names as accidental API contracts.']
  },
  {
    id: 'scenario-010', level: 'L2', subtopic: 'Deployment', title: 'Environment API URL is wrong in production',
    situation: 'The deployed React app still calls localhost instead of the production Spring Boot API.',
    diagnosis: 'Inspect the built JavaScript bundle and the browser Network URL. Then check the Vite environment configuration and the value injected during the production build.',
    solution: 'Keep environment-specific API configuration outside hard-coded component logic. With Vite, expose only intentionally public variables using the supported `VITE_` prefix, build with the correct environment values, and validate the generated artifact before deployment.',
    delivery: 'A React production bundle is static, so the API URL used by the browser must be available to the build or through a deliberate runtime configuration mechanism. I verify the actual deployed asset rather than assuming the environment file was used.',
    followups: [
      { question: 'Are VITE_ variables secrets?', answer: 'No. Variables exposed to browser code are public because users can inspect the built JavaScript. Secrets such as database passwords or private API keys must stay on the server.' },
      { question: 'How can one frontend artifact work in multiple environments?', answer: 'Use runtime configuration served by the deployment environment, such as a small config endpoint or generated config file, if avoiding separate builds is important. Otherwise build the static app separately for each environment.' },
      { question: 'Where would you configure the production API behind the same domain?', answer: 'A reverse proxy can route `/api` to Spring Boot while serving the React assets from the same origin. Then the frontend can call a relative `/api/...` URL and avoid cross-origin configuration for that path.' }
    ],
    traps: ['Never put database credentials in Vite environment variables.', 'Do not test only the development `.env` file; inspect the production build.']
  },
  {
    id: 'scenario-011', level: 'L2', subtopic: 'File Upload', title: 'Large file upload fails intermittently',
    situation: 'Users can upload small documents, but large files fail with 413 or connection resets.',
    diagnosis: 'Check browser request size, Spring multipart limits, reverse-proxy limits, timeout settings and available disk/object-storage capacity. Identify which layer returns the failure.',
    solution: 'Set explicit size limits at every relevant boundary and return a clear 413 response. For genuinely large files, prefer direct upload to object storage using a controlled pre-signed URL flow so the application server does not proxy the entire payload.',
    delivery: 'I trace the upload through browser, proxy, application and storage. For large files I separate authorization from data transfer and let object storage handle the heavy payload where architecture permits.',
    followups: [
      { question: 'Why use pre-signed URLs?', answer: 'The backend can authorize an upload and issue a short-lived signed URL, while the browser uploads directly to object storage. This reduces application-server bandwidth and memory pressure.' },
      { question: 'How do you prevent an unauthorized user from uploading?', answer: 'The backend authenticates and authorizes the upload request, controls the object key, size and content constraints, and issues a short-lived scoped URL. Storage policies should also enforce the intended boundary.' },
      { question: 'Would you store files in MySQL?', answer: 'For many applications, object storage is a better fit for large binary files, while the database stores metadata such as owner, object key, content type and status. The right choice depends on scale and transactional requirements.' }
    ],
    traps: ['Do not increase every size limit blindly.', 'Do not trust the browser-provided MIME type as the only file validation.']
  },
  {
    id: 'scenario-012', level: 'L2', subtopic: 'Caching', title: 'Reference data causes excessive API traffic',
    situation: 'Every page load fetches the same country and status lists, producing unnecessary requests.',
    diagnosis: 'Measure request frequency and determine whether the data changes rarely and can safely be reused. Check whether the browser or API currently sends cache validators.',
    solution: 'Use HTTP caching semantics such as Cache-Control and ETag where appropriate, and keep server-state caching in the frontend if the application already has a consistent cache layer. Invalidate or expire data according to its business freshness requirement.',
    delivery: 'I cache data based on its change characteristics, not because caching is always faster. HTTP caching is especially useful for stable reference data because it can avoid both server work and network transfer.',
    followups: [
      { question: 'What does ETag provide?', answer: 'An ETag identifies a representation version. The browser can send If-None-Match on a later request, and the server can return 304 Not Modified when the representation has not changed, avoiding the response body transfer.' },
      { question: 'What is the risk of caching user-specific data publicly?', answer: 'A shared cache could serve one user’s representation to another. User-specific responses need appropriate cache controls, commonly private/no-store depending on the data.' },
      { question: 'When would you skip caching?', answer: 'When data is highly volatile, security-sensitive, cheap to compute, or incorrect freshness would cause unacceptable business behavior. Cache invalidation must match the actual requirement.' }
    ],
    traps: ['Do not cache sensitive responses in a shared cache accidentally.', 'Do not add a long TTL without deciding how updates become visible.']
  },
  {
    id: 'scenario-013', level: 'L2', subtopic: 'Pagination', title: 'Pagination becomes slow on deep pages',
    situation: 'Page 1 is fast, but requesting page 10,000 of a large order table becomes increasingly slow.',
    diagnosis: 'Inspect the SQL generated for OFFSET/LIMIT and the execution plan. Large offsets can force the database to scan and discard many rows.',
    solution: 'For very large or frequently changing datasets, use cursor/keyset pagination based on a stable indexed ordering such as `(created_at, id)`. Return an opaque cursor to the frontend instead of a huge page number.',
    delivery: 'Offset pagination is simple and fine for moderate datasets. When deep-page performance matters, I move to keyset pagination so the database can seek from an indexed boundary instead of skipping millions of rows.',
    followups: [
      { question: 'Why include id with created_at in the cursor?', answer: 'Timestamps may not be unique. Combining a timestamp with a unique id creates a deterministic ordering and prevents records with identical timestamps from being skipped or duplicated.' },
      { question: 'Can users jump directly to page 5000 with cursor pagination?', answer: 'Not naturally. Cursor pagination is optimized for sequential traversal rather than arbitrary page-number jumps. If random page access is a hard requirement, offset pagination or another indexing strategy may be more appropriate.' },
      { question: 'What should the React UI store?', answer: 'Store the returned cursor associated with the current navigation state and request the next cursor from the API. Avoid constructing database-specific cursor values in the browser.' }
    ],
    traps: ['Do not expose raw database internals as public cursors.', 'Do not choose cursor pagination solely because it sounds more scalable.']
  },
  {
    id: 'scenario-014', level: 'L2', subtopic: 'Search', title: 'Search endpoint overloads the database',
    situation: 'A user typing into a search box generates hundreds of requests per minute and the database CPU spikes.',
    diagnosis: 'Measure requests per user, query latency and database load. Check whether the query uses indexes and whether the frontend fires on every keystroke.',
    solution: 'Debounce the frontend input, require a minimum query length when appropriate, paginate results, and ensure the search query has a suitable index. For complex text search, consider a search engine rather than forcing relational SQL to handle workloads it is not designed for.',
    delivery: 'I solve both sides: reduce unnecessary requests in React and make the backend query efficient. If the search requirements exceed database text-search capabilities, I introduce a dedicated search technology deliberately.',
    followups: [
      { question: 'Why not just increase database capacity?', answer: 'Capacity can postpone the problem but does not remove unnecessary traffic or inefficient queries. Fixing request volume and query shape usually provides a more durable improvement.' },
      { question: 'How would you protect the API from abusive search traffic?', answer: 'Apply authentication where appropriate, rate limiting, request-size/query-length limits, pagination and potentially per-user quotas. The limits should reflect normal usage rather than simply blocking legitimate bursts.' },
      { question: 'When would Elasticsearch/OpenSearch be justified?', answer: 'When requirements such as relevance ranking, stemming, fuzzy search, faceting or very large text-search workloads exceed what the relational database can provide efficiently and reliably.' }
    ],
    traps: ['Do not run `%term%` searches over huge tables without understanding index usage.', 'Do not rate-limit only the browser; clients can call the API directly.']
  },
  {
    id: 'scenario-015', level: 'L2', subtopic: 'Transactions', title: 'Order created but payment status is inconsistent',
    situation: 'The API creates an order in MySQL, then a payment provider call fails. Users see an order that appears stuck or incorrectly marked as paid.',
    diagnosis: 'Determine which operations are inside the database transaction and which are external side effects. A database transaction cannot automatically roll back a remote payment call.',
    solution: 'Model payment as an explicit state machine. Persist the order/payment intent transactionally, call the provider with an idempotency key, and reconcile asynchronous provider callbacks/webhooks. Use an outbox or durable event mechanism when reliable publication is required.',
    delivery: 'I do not try to wrap a remote payment provider in a database transaction. I make the workflow stateful and idempotent, then use asynchronous confirmation and reconciliation for the external side effect.',
    followups: [
      { question: 'Why is @Transactional not enough?', answer: '@Transactional controls the database transaction boundary. It cannot undo a successful remote HTTP call if the database transaction later rolls back.' },
      { question: 'What is the outbox pattern doing here?', answer: 'The service writes the business state and an event record in the same database transaction. A separate publisher reliably sends the event later, avoiding the gap between committing the order and publishing an event.' },
      { question: 'How do you handle duplicate payment webhooks?', answer: 'Store a provider event ID or another unique business key and process it idempotently. A database uniqueness constraint can prevent the same event from being applied twice.' }
    ],
    traps: ['Do not keep a database transaction open during a slow payment call without a strong reason.', 'Do not treat a network timeout as proof that payment did not happen.']
  },
  {
    id: 'scenario-016', level: 'L3', subtopic: 'Reliability', title: 'Payment provider times out intermittently',
    situation: 'The payment provider sometimes takes 8–15 seconds or times out, causing threads to pile up and checkout latency to spike.',
    diagnosis: 'Measure provider latency, timeout rate, concurrent requests and thread-pool saturation. Check whether the client has finite connect/read timeouts and whether retries are multiplying the load.',
    solution: 'Set bounded timeouts, use a circuit breaker where appropriate, retry only transient failures with strict limits and backoff, and use provider idempotency keys. Move long-running confirmation to an asynchronous workflow when the business process permits it.',
    delivery: 'External dependency latency must not consume unlimited application resources. I bound time, concurrency and retries, then model an asynchronous state when immediate confirmation is not guaranteed.',
    followups: [
      { question: 'Why can retries make the outage worse?', answer: 'If the dependency is already overloaded, retries add more requests and consume more local threads. Exponential backoff, jitter and a retry budget prevent a retry storm.' },
      { question: 'What does a circuit breaker do?', answer: 'It stops sending calls to a failing dependency after configured failure conditions, allowing the dependency and application to recover. After a wait period it permits controlled test calls before closing again.' },
      { question: 'What should React display when payment is processing?', answer: 'Show a clear pending state and avoid claiming success or failure until the backend has a confirmed state. Provide a safe refresh/status mechanism rather than asking the user to submit the payment again.' }
    ],
    traps: ['Do not set extremely long timeouts to avoid visible failures.', 'Do not retry non-idempotent payment commands without provider/server idempotency.']
  },
  {
    id: 'scenario-017', level: 'L3', subtopic: 'Observability', title: 'User reports a generic "Something went wrong"',
    situation: 'Support has a screenshot of a generic error, but engineers cannot locate the corresponding backend request.',
    diagnosis: 'Check whether the frontend captures a correlation/trace identifier and whether that identifier propagates through the gateway and Spring Boot logs.',
    solution: 'Generate or propagate a trace context, include a safe trace ID in the user-facing error response, and log structured server events with that ID. The UI should show the ID only as a support reference, never sensitive request data.',
    delivery: 'A generic message is good for users, but it needs an operational reference. I connect browser, API gateway and Spring logs with trace context so support can move from symptom to request.',
    followups: [
      { question: 'Should React generate the trace ID?', answer: 'It can participate in distributed tracing, but the system should follow the tracing standard and propagate context consistently. The backend or tracing infrastructure can also establish the trace. The important part is consistent propagation, not which component first creates it.' },
      { question: 'What should not be logged?', answer: 'Passwords, access tokens, full payment data, unnecessary personal data and other secrets should not be placed in logs. Use structured fields and safe identifiers instead.' },
      { question: 'How is a trace different from a log?', answer: 'A trace represents the journey of one operation across components, while logs are individual event records. Tracing provides timing and parent/child relationships; logs provide detailed event context.' }
    ],
    traps: ['Do not display stack traces to users.', 'Do not solve traceability by logging entire HTTP payloads.']
  },
  {
    id: 'scenario-018', level: 'L3', subtopic: 'Concurrency', title: 'Inventory goes below zero during flash sale',
    situation: 'Two customers buy the last item at nearly the same time and both requests succeed, resulting in negative inventory.',
    diagnosis: 'Inspect the inventory update for a read-then-write race. If both transactions read stock=1 before either writes, application-level checks alone are insufficient.',
    solution: 'Use an atomic conditional update such as `UPDATE inventory SET quantity = quantity - 1 WHERE product_id=? AND quantity > 0`, then verify that exactly one row was updated. For more complex workflows, use optimistic/pessimistic locking or a reservation model based on the contention pattern.',
    delivery: 'The invariant must be enforced where concurrent requests meet. I prefer an atomic database operation for a simple decrement because the database can guarantee that only one request consumes the final unit.',
    followups: [
      { question: 'Why is synchronized in the Spring service not enough?', answer: 'A Java monitor only coordinates threads inside one JVM instance. With multiple application instances, requests can execute concurrently on different machines. The database or another distributed coordination mechanism must enforce the invariant.' },
      { question: 'What does the affected-row count tell you?', answer: 'If the conditional update returns one affected row, the stock decrement succeeded. If it returns zero, the item was unavailable or the condition was not met, so the service should not create a successful purchase for that unit.' },
      { question: 'When would you use reservations?', answer: 'When inventory must be held for a period while the customer completes payment or another multi-step workflow. A reservation has its own expiry and state, which avoids permanently decrementing stock for abandoned checkouts.' }
    ],
    traps: ['Do not read stock, check it, then update it as separate unprotected operations.', 'Do not rely on a JVM-local lock in a horizontally scaled service.']
  },
  {
    id: 'scenario-019', level: 'L3', subtopic: 'Messaging', title: 'Kafka event is processed twice',
    situation: 'A consumer receives the same OrderCreated event twice and sends two notification emails.',
    diagnosis: 'Determine whether the topic has at-least-once delivery semantics and whether the consumer commits offsets only after processing. Inspect consumer logs and the notification side effect.',
    solution: 'Design the consumer idempotently. Persist a unique event ID or business operation key and enforce uniqueness before producing the side effect. Commit the Kafka offset after successful processing according to the chosen delivery strategy.',
    delivery: 'I assume duplicate delivery can happen and make the business side effect idempotent. Kafka offset management alone does not make an external email provider exactly-once.',
    followups: [
      { question: 'Why can Kafka deliver a message twice?', answer: 'If processing succeeds but the consumer crashes before its offset commit is durably recorded, the message can be delivered again after restart or rebalance. At-least-once processing therefore requires idempotent consumers.' },
      { question: 'Can Kafka give exactly-once processing?', answer: 'Kafka supports exactly-once semantics for certain Kafka-to-Kafka transactional workflows, but external side effects such as email or HTTP calls still require their own idempotency strategy.' },
      { question: 'Where should the deduplication key live?', answer: 'A durable store with a uniqueness constraint is a common choice. The key can be an event ID or a business key that uniquely identifies the side effect being applied.' }
    ],
    traps: ['Do not claim exactly-once just because offsets are committed.', 'Do not deduplicate only in an in-memory Set.']
  },
  {
    id: 'scenario-020', level: 'L3', subtopic: 'Messaging', title: 'Outbox event is published twice',
    situation: 'An outbox publisher crashes after sending an event but before marking the outbox row as published, so the event is sent again.',
    diagnosis: 'This is the expected failure window in many outbox implementations: the external broker publication and database status update are not one atomic transaction.',
    solution: 'Make consumers idempotent and use stable event IDs. The publisher can safely retry unpublished rows; duplicates are tolerated at the consumer boundary. If the broker supports transactions and the architecture needs them, use them deliberately, but still define the business semantics.',
    delivery: 'The outbox solves the lost-event problem between database commit and publication; it does not magically provide exactly-once external side effects. I pair it with idempotent consumers.',
    followups: [
      { question: 'Why not mark the row published before sending?', answer: 'A crash after marking but before publishing would lose the event. Marking after sending favors at-least-once delivery, which is safer when consumers are idempotent.' },
      { question: 'What should the outbox table contain?', answer: 'Typically a unique event ID, event type, aggregate/business key, serialized payload, creation time and publication status/attempt metadata. Retention and cleanup are also part of the design.' },
      { question: 'How do you prevent the publisher from overwhelming Kafka?', answer: 'Use bounded batches, rate limits where necessary, backoff on failures and monitor lag/attempt counts. The publisher should not continuously hammer an unavailable broker.' }
    ],
    traps: ['Do not delete outbox rows immediately without a recovery/retention strategy.', 'Do not assume one broker publish attempt equals one business effect.']
  },
  {
    id: 'scenario-021', level: 'L3', subtopic: 'Security', title: 'Admin endpoint is hidden in React but still accessible',
    situation: 'The Admin menu is hidden for normal users, but a user manually calls POST /api/admin/users and succeeds.',
    diagnosis: 'The frontend implemented a presentation rule but the backend endpoint lacks authorization enforcement.',
    solution: 'Protect the endpoint with Spring Security roles/authorities or service-layer authorization. Return 403 for authenticated users without permission. Keep frontend route/menu checks only as a usability feature.',
    delivery: 'Anything the browser can call must be treated as untrusted. I enforce the real permission at the Spring Security or service boundary and use React only to avoid showing controls the user cannot use.',
    followups: [
      { question: 'Can the frontend send the role to the backend?', answer: 'The backend must derive the trusted identity and authorities from validated authentication context. It should not accept a browser-provided role as proof of permission.' },
      { question: 'Where can @PreAuthorize be useful?', answer: 'It can enforce method-level authorization close to the business operation, for example `@PreAuthorize` with `hasRole(ADMIN)`. The exact placement depends on the application security architecture.' },
      { question: 'What should the React app do after a 403?', answer: 'Show an authorization error or navigate away from the protected feature. It should not repeatedly retry the same request because the user lacks permission.' }
    ],
    traps: ['Never use hidden buttons as security.', 'Do not trust role data from localStorage as authorization evidence.']
  },
  {
    id: 'scenario-022', level: 'L3', subtopic: 'Security', title: 'CSRF concern for cookie-based authentication',
    situation: 'The application uses an HttpOnly session cookie. The team assumes CSRF cannot happen because JavaScript cannot read the cookie.',
    diagnosis: 'HttpOnly protects the cookie from JavaScript access, but the browser still automatically sends the cookie to the target origin, which is the property CSRF attacks exploit.',
    solution: 'For cookie-authenticated state-changing requests, use an appropriate CSRF defense such as synchronizer tokens or SameSite cookie protections according to the threat model and framework configuration. Keep XSS defenses separate because XSS and CSRF are different problems.',
    delivery: 'HttpOnly helps against token theft through JavaScript, but it does not by itself prevent cross-site request forgery. I choose CSRF controls based on the authentication mechanism.',
    followups: [
      { question: 'Does bearer-token authentication have the same CSRF behavior?', answer: 'A bearer token manually attached by JavaScript is not automatically sent by the browser to an attacker-controlled site in the same way as a cookie, so the classic CSRF threat is different. XSS and token exposure remain important risks.' },
      { question: 'What does SameSite do?', answer: 'SameSite controls when browsers attach cookies to cross-site requests. Strict or Lax can reduce CSRF exposure, while None requires Secure and permits broader cross-site use. The exact setting must match application flows.' },
      { question: 'Why is XSS still dangerous?', answer: 'Injected script executes in the application origin and can perform actions as the user or access data available to that script. HttpOnly can protect the cookie value itself, but it does not make the application immune to XSS.' }
    ],
    traps: ['Do not say HttpOnly equals CSRF protection.', 'Do not treat CORS as a replacement for CSRF defense.']
  },
  {
    id: 'scenario-023', level: 'L3', subtopic: 'Database', title: 'API latency rises because of connection pool exhaustion',
    situation: 'Spring Boot response time increases sharply and logs show threads waiting for database connections.',
    diagnosis: 'Inspect HikariCP active/idle/pending metrics, database max connections, transaction duration and slow queries. Determine whether connections are being held longer than expected.',
    solution: 'Fix the workload first: shorten transactions, remove unnecessary DB calls, resolve slow queries and ensure resources are closed. Then tune pool size based on database capacity and application concurrency rather than simply making the pool huge.',
    delivery: 'A connection pool is a concurrency boundary, not an infinite performance knob. I identify why connections are occupied and tune the pool only after understanding database capacity.',
    followups: [
      { question: 'Why can a larger pool make things worse?', answer: 'If the database cannot process more concurrent work, a larger pool increases contention, CPU pressure and queueing. The optimal pool size depends on query cost and database capacity.' },
      { question: 'What would you monitor?', answer: 'Pool active/idle/pending counts, connection acquisition time, query latency, transaction duration, database CPU and lock waits are useful signals.' },
      { question: 'How can long transactions hurt?', answer: 'They hold connections and possibly locks for longer, reducing pool availability and increasing contention. User interaction or remote calls should generally not occur inside a database transaction unless explicitly justified.' }
    ],
    traps: ['Do not increase pool size as the first response.', 'Do not keep transactions open across slow external HTTP calls.']
  },
  {
    id: 'scenario-024', level: 'L3', subtopic: 'JPA', title: 'Serialization causes infinite recursion',
    situation: 'Returning a JPA entity directly from Spring Boot causes Jackson to recurse through bidirectional relationships and fail or produce a huge payload.',
    diagnosis: 'Inspect the entity graph and JSON serialization path. Bidirectional `Order -> Customer -> Orders -> Customer` relationships can create cycles and over-fetching.',
    solution: 'Use dedicated response DTOs and explicitly select the fields required by the API. This avoids accidental graph traversal and decouples the HTTP contract from JPA mappings.',
    delivery: 'The clean fix is usually DTO-based API design rather than adding serialization annotations everywhere. The API should intentionally define what data crosses the boundary.',
    followups: [
      { question: 'Why not simply use @JsonIgnore?', answer: 'It can solve a particular serialization cycle, but it couples the JSON contract to the entity model and can hide useful data in other use cases. DTOs provide clearer, use-case-specific contracts.' },
      { question: 'Can DTOs also improve performance?', answer: 'Yes. A DTO query can select only required columns/relationships, reducing database work and response size. It also avoids loading an entire entity graph merely for serialization.' },
      { question: 'Should lazy loading solve the problem?', answer: 'Lazy loading controls when relationships are fetched; it does not define a safe API contract. Serialization can trigger lazy loading or fail outside a session, so explicit DTO mapping is still preferable.' }
    ],
    traps: ['Do not expose entities as your default REST contract.', 'Do not switch every relationship to EAGER to make serialization work.']
  },
  {
    id: 'scenario-025', level: 'L3', subtopic: 'Database', title: 'Delete operation fails because of foreign keys',
    situation: 'Deleting a customer from the React admin screen returns 409/500 because orders still reference the customer.',
    diagnosis: 'Inspect the database foreign-key constraint and clarify the business rule: should the customer be deletable, soft-deleted, or should dependent records be removed?',
    solution: 'Choose the behavior deliberately. For historical business data, soft deletion or deactivation is often safer. If true deletion is required, define referential actions and application behavior carefully; do not cascade destructive deletes simply to make the endpoint succeed.',
    delivery: 'A foreign-key failure is often protecting a business invariant. I first clarify the lifecycle requirement, then align database constraints and API semantics with that rule.',
    followups: [
      { question: 'When is soft delete useful?', answer: 'When records have historical, audit or reporting value and should no longer be active but must remain stored. The application then filters inactive records consistently.' },
      { question: 'Should the frontend decide whether deletion is allowed?', answer: 'No. The backend and database enforce the real rule. React can disable or hide a delete action based on known state, but a direct API call must still be validated server-side.' },
      { question: 'What status would you return for a business conflict?', answer: '409 Conflict is appropriate when the current resource state prevents the requested operation. The error payload should explain the stable business reason without exposing internal database details.' }
    ],
    traps: ['Do not remove foreign keys to avoid errors.', 'Do not use cascading deletes without checking business and audit requirements.']
  },
  {
    id: 'scenario-026', level: 'L3', subtopic: 'Deployment', title: 'Blue-green rollout breaks because of a database migration',
    situation: 'Green application version expects a new non-null column, but blue instances are still running the old code and fail after the schema change.',
    diagnosis: 'The schema migration was not backward compatible with the previous application version.',
    solution: 'Use expand-and-contract migration: add the new column in a backward-compatible way, deploy code that can work with both schemas, backfill data, switch traffic, then enforce constraints/remove old structures in a later rollout.',
    delivery: 'Application rollback is only safe when the database schema remains compatible. I design migrations around the coexistence window of old and new application versions.',
    followups: [
      { question: 'Why not make the new column NOT NULL immediately?', answer: 'Old application versions may not populate it. Making it nullable or supplying a safe default during the expand phase allows both versions to operate until the new code is fully deployed.' },
      { question: 'How do you rename a column safely?', answer: 'Add the new column, support reads/writes for both names during a transition, migrate existing data, move all consumers, then remove the old column later.' },
      { question: 'Who should own migrations?', answer: 'The application delivery process should version and execute migrations predictably, commonly through a tool such as Flyway or Liquibase. Teams should treat schema changes as deployable artifacts, not manual production edits.' }
    ],
    traps: ['Do not combine destructive schema changes with the first deployment of dependent code.', 'Do not assume rollback means the database automatically rolls back.']
  },
  {
    id: 'scenario-027', level: 'L3', subtopic: 'Deployment', title: 'React assets are cached after deployment',
    situation: 'Some users see the old UI after a deployment while new users see the new version.',
    diagnosis: 'Inspect CDN/browser cache headers and whether Vite-generated asset filenames are content-hashed. Check whether the HTML entry point itself is being cached too aggressively.',
    solution: 'Use immutable caching for hashed static assets and short/revalidated caching for the HTML entry point. Ensure the deployment publishes a consistent set of assets and that CDN invalidation is used only where needed.',
    delivery: 'Static assets and HTML have different cache lifecycles. I want long-lived caching for fingerprinted files but a fresh or revalidated HTML entry so users discover the new asset graph.',
    followups: [
      { question: 'Why are hashed filenames useful?', answer: 'A content hash changes when the file content changes, so each version has a unique URL. Browsers can cache that URL for a long time without serving a different file under the same name.' },
      { question: 'Why not disable caching completely?', answer: 'It increases bandwidth and latency unnecessarily. Proper cache policy gives both performance and predictable deployments.' },
      { question: 'What if old HTML references assets that were deleted?', answer: 'Keep previous assets available for a safe overlap window or deploy atomically so an old HTML document can still load its referenced files. Cleanup should happen after the compatibility window.' }
    ],
    traps: ['Do not purge every cache on every request.', 'Do not delete old hashed assets immediately if older HTML may still reference them.']
  },
  {
    id: 'scenario-028', level: 'L3', subtopic: 'Resilience', title: 'Backend is unavailable and React keeps retrying',
    situation: 'Spring Boot is down for maintenance, but thousands of browsers repeatedly retry API calls and create a traffic spike when the service starts returning errors.',
    diagnosis: 'Inspect client retry behavior, polling intervals and gateway retries. Determine whether retries are synchronized across users.',
    solution: 'Use bounded retries with exponential backoff and jitter only for operations where retrying is safe. For polling, stop or slow down after repeated failures. The backend/gateway should also enforce rate limits and return meaningful availability signals.',
    delivery: 'Retries are part of the failure design. I avoid synchronized infinite retries and make retry behavior depend on operation safety and error type.',
    followups: [
      { question: 'What is jitter?', answer: 'Jitter adds controlled randomness to retry delays so many clients do not retry at exactly the same time. This reduces synchronized retry spikes during recovery.' },
      { question: 'Should React retry a 400 response?', answer: 'Usually no. A 400 indicates the request is invalid from the client perspective and retrying the same request will not fix it. Retry policies should target transient failures such as selected 5xx or network errors.' },
      { question: 'Who should own retries?', answer: 'Each layer should have a deliberate policy. A common mistake is letting React, gateway and backend client libraries all retry the same operation, multiplying traffic. Define where retries are appropriate and cap them.' }
    ],
    traps: ['Do not retry every failure automatically.', 'Do not let multiple layers independently retry without a budget.']
  },
  {
    id: 'scenario-029', level: 'L3', subtopic: 'API Gateway', title: 'Gateway returns 502 while Spring Boot is healthy',
    situation: 'Direct internal health checks show Spring Boot is running, but the public API returns 502 Bad Gateway.',
    diagnosis: 'Check gateway upstream configuration, DNS/service discovery, TLS, target port, health checks and timeout settings. A healthy application process does not prove the gateway can reach it.',
    solution: 'Trace the request from gateway to upstream. Fix the first failing network/configuration boundary and add gateway/upstream health metrics and alerts.',
    delivery: 'I separate application health from connectivity health. A 502 usually tells me the proxy could not obtain a valid upstream response, so I inspect the gateway-to-service path first.',
    followups: [
      { question: '502 vs 504?', answer: '502 generally means the gateway/proxy received an invalid response or could not establish a valid upstream exchange. 504 means the gateway timed out waiting for the upstream. Exact semantics depend on the proxy, but both point to the gateway/upstream boundary.' },
      { question: 'What health endpoint would you expose?', answer: 'Use liveness to indicate whether the process should be restarted and readiness to indicate whether it can receive traffic. Spring Boot Actuator can support these checks.' },
      { question: 'Would you expose Actuator publicly?', answer: 'Only the minimum required endpoints, protected and preferably restricted to internal operational access. Health information can reveal infrastructure details if exposed carelessly.' }
    ],
    traps: ['Do not restart a healthy service repeatedly without checking the gateway path.', 'Do not expose unrestricted operational endpoints.']
  },
  {
    id: 'scenario-030', level: 'L3', subtopic: 'Multi-tenancy', title: 'One tenant can see another tenant’s orders',
    situation: 'A multi-tenant React application sends `tenantId` from the browser, and a manipulated request returns another tenant’s records.',
    diagnosis: 'The backend is trusting a client-controlled tenant identifier instead of deriving tenant context from authenticated identity and enforcing it in every data-access path.',
    solution: 'Derive tenant context from validated authentication or a trusted gateway context, then enforce tenant isolation server-side. Queries and update/delete operations must include tenant constraints; database-level row-level security can provide an additional boundary where appropriate.',
    delivery: 'Tenant identity is security-sensitive. I never trust a browser-supplied tenant ID as authority; the backend derives it from trusted identity and applies the constraint consistently to reads and writes.',
    followups: [
      { question: 'Can React still send tenantId?', answer: 'It can send it as a filter or display context, but the backend must validate it against the authenticated user’s permitted tenants. It cannot be the source of truth for authorization.' },
      { question: 'Where should tenant filtering happen?', answer: 'Ideally at a centralized service/repository/data-access boundary so developers cannot accidentally omit it. Depending on architecture, database row-level security can provide defense in depth.' },
      { question: 'How would you test tenant isolation?', answer: 'Create users from multiple tenants and explicitly attempt cross-tenant GET, PUT and DELETE operations. Security tests should verify both positive access and forbidden cross-tenant access.' }
    ],
    traps: ['Do not trust tenantId from query parameters as authorization.', 'Do not test isolation only on GET; writes and deletes are equally important.']
  },
  {
    id: 'scenario-031', level: 'L3', subtopic: 'Architecture', title: 'Should the React app call three microservices directly?',
    situation: 'The frontend needs customer, order and inventory data and currently makes separate calls to three public microservices.',
    diagnosis: 'Evaluate coupling, authentication complexity, network round trips, browser exposure, aggregation needs and whether the services are truly independent public APIs.',
    solution: 'For a simple application, direct calls can be acceptable. If the UI requires orchestration or many backend calls, use a BFF/API gateway aggregation layer so the browser has a stable frontend-oriented contract while internal services remain independently designed.',
    delivery: 'I choose direct calls only when the service APIs are genuinely suitable for browsers. A BFF is useful when the frontend needs composition, security centralization or a UI-specific contract.',
    followups: [
      { question: 'What is a BFF?', answer: 'Backend for Frontend is a backend layer tailored to a particular frontend experience. It can aggregate calls, shape responses and handle frontend-specific concerns without forcing internal services to expose browser-oriented contracts.' },
      { question: 'Does a BFF remove microservice latency?', answer: 'It can reduce browser round trips by aggregating requests, but the BFF still has to call downstream services. Parallelization and response shaping can improve the critical path, but the downstream dependencies remain.' },
      { question: 'When would direct service calls be better?', answer: 'When the APIs are stable, secure for browser clients, independently useful, and the extra gateway/BFF layer would add complexity without meaningful value.' }
    ],
    traps: ['Do not introduce a BFF just because microservices exist.', 'Do not expose internal-only service APIs publicly without a security and contract decision.']
  },
  {
    id: 'scenario-032', level: 'L3', subtopic: 'Architecture', title: 'Frontend needs a combined dashboard',
    situation: 'A dashboard needs customer profile, order summary, inventory alerts and notification count. The naive implementation makes six sequential API calls.',
    diagnosis: 'Measure the waterfall in the browser. Sequential calls unnecessarily add latency when the data can be fetched independently.',
    solution: 'Parallelize independent calls on the backend/BFF or with controlled frontend concurrency. If the dashboard is a stable product surface, an aggregation endpoint can return the exact view model while preserving service ownership internally.',
    delivery: 'I first remove accidental sequential latency, then decide whether an aggregation API provides a better contract. The dashboard should not become tightly coupled to every internal service endpoint.',
    followups: [
      { question: 'Why not always combine everything into one endpoint?', answer: 'A large aggregation endpoint can become hard to maintain and may fetch data that some clients do not need. Aggregation is valuable when it matches a stable user experience and reduces meaningful coupling or latency.' },
      { question: 'How do you handle one downstream failure?', answer: 'Decide whether the failed data is critical. Return partial data with explicit status for optional widgets, or fail the whole request when the dashboard cannot be meaningfully rendered without that data.' },
      { question: 'How can React avoid waterfall requests?', answer: 'Start independent requests concurrently, or use a server-side aggregation/query layer. Avoid triggering dependent fetches from nested components when the dependency is not actually required.' }
    ],
    traps: ['Do not hide six sequential calls behind a single UI component.', 'Do not make optional dashboard widgets block the entire page unnecessarily.']
  },
  {
    id: 'scenario-033', level: 'L3', subtopic: 'Testing', title: 'React and Spring Boot disagree on an enum value',
    situation: 'Spring returns `IN_PROGRESS`, but the React code expects `IN-PROGRESS`, so the status badge is blank.',
    diagnosis: 'The API contract has an implicit enum representation that the frontend did not validate or centralize.',
    solution: 'Define documented API enum values and test the contract. Keep display labels separate from wire values so UI text can change without changing the API representation.',
    delivery: 'I distinguish machine-readable API values from presentation labels. Contract tests and centralized mapping prevent one component from silently assuming a different representation.',
    followups: [
      { question: 'Should the backend return display text?', answer: 'Usually the API should return stable semantic values, while the frontend maps them to localized or product-specific labels. Display text is a presentation concern unless the product explicitly requires server-driven localization.' },
      { question: 'How do you make unknown enum values safe?', answer: 'The frontend should have a fallback rendering path such as "Unknown status" and log/report the unexpected value. It should not crash the entire page because a new backend enum was introduced.' },
      { question: 'How can contract tests catch this?', answer: 'A provider contract can assert the exact allowed enum values in the response schema. CI then fails when a provider changes the contract incompatibly.' }
    ],
    traps: ['Do not use display text as a database/API enum key.', 'Do not let an unexpected enum value crash rendering.']
  },
  {
    id: 'scenario-034', level: 'L3', subtopic: 'Testing', title: 'A full-stack change passes unit tests but fails in production',
    situation: 'React unit tests and Spring service tests pass, but production fails because the API path and CORS configuration are different.',
    diagnosis: 'The test suite covers code behavior but not the deployed integration contract and environment configuration.',
    solution: 'Add integration/contract tests for the HTTP boundary, environment-specific smoke tests after deployment, and a deployment pipeline check that validates the actual API URL and authentication/CORS path.',
    delivery: 'Unit tests prove local behavior, not the entire deployed system. I add tests at the boundaries where configuration and integration can fail.',
    followups: [
      { question: 'What is a smoke test?', answer: 'A small set of fast checks run against a deployed environment to verify critical paths such as loading the frontend, authenticating, calling a health or business endpoint and completing one representative workflow.' },
      { question: 'What should contract tests cover?', answer: 'They should cover request paths, methods, required fields, response shapes, status codes and important semantic values. They should focus on the provider-consumer agreement rather than implementation details.' },
      { question: 'Would end-to-end tests replace unit tests?', answer: 'No. End-to-end tests are valuable but slower and more brittle. A balanced test pyramid uses unit tests for logic, integration/contract tests for boundaries and a smaller number of end-to-end tests for critical workflows.' }
    ],
    traps: ['Do not rely only on happy-path end-to-end tests.', 'Do not assume local environment configuration matches production.']
  },
  {
    id: 'scenario-035', level: 'L3', subtopic: 'Performance', title: 'React renders thousands of rows slowly',
    situation: 'The API returns 10,000 records successfully, but the browser freezes while rendering the table.',
    diagnosis: 'The bottleneck is now client rendering and DOM size rather than API latency. Use React profiling and browser performance tools to confirm render cost.',
    solution: 'Paginate or virtualize the list, reduce unnecessary state updates and avoid rendering thousands of DOM nodes simultaneously. The backend should normally paginate instead of returning 10,000 records just because the UI can technically receive them.',
    delivery: 'I fix the data volume and rendering strategy together. Virtualization helps when large lists are genuinely required, while server-side pagination prevents unnecessary transfer and processing.',
    followups: [
      { question: 'What is list virtualization?', answer: 'Virtualization renders only the rows currently visible plus a small buffer, while reusing DOM space as the user scrolls. Libraries can handle the measurement and scrolling mechanics.' },
      { question: 'Would useMemo solve this?', answer: 'Only if expensive calculations are being repeated unnecessarily. useMemo does not reduce the number of DOM nodes or make a fundamentally oversized list cheap to render.' },
      { question: 'Why paginate at the API too?', answer: 'It reduces database result processing, network transfer, JSON parsing and browser memory. Client-only pagination still pays the cost of fetching all records.' }
    ],
    traps: ['Do not render huge lists just because the API supports them.', 'Do not add memoization without measuring the actual render bottleneck.']
  },
  {
    id: 'scenario-036', level: 'L3', subtopic: 'State Management', title: 'Multiple screens have inconsistent user data',
    situation: 'After updating a profile, one React screen shows the new name while another still shows the old name.',
    diagnosis: 'The same server state exists in multiple independent component states and only one copy was updated.',
    solution: 'Establish a consistent server-state strategy: centralize shared data, update/invalidate the cache after mutations, or refetch from the authoritative source. Avoid duplicating the same server entity in unrelated local states.',
    delivery: 'The problem is state ownership. I distinguish local UI state from server state and make one source of truth responsible for synchronizing shared data after mutations.',
    followups: [
      { question: 'Is Context always the answer?', answer: 'No. Context is useful for certain shared client concerns, but server-state caching has different requirements such as staleness, refetching and invalidation. Choose a state solution based on the type of state.' },
      { question: 'When would you update the cache directly?', answer: 'When the mutation response contains the authoritative updated entity and the cache structure is simple enough to update safely. Direct updates avoid an extra request but must remain consistent with server behavior.' },
      { question: 'When would you refetch instead?', answer: 'When the server applies complex side effects, the response is incomplete, or cache invalidation is simpler and safer than trying to reconstruct all affected state locally.' }
    ],
    traps: ['Do not maintain many copies of the same server entity.', 'Do not treat every piece of shared data as global client state.']
  },
  {
    id: 'scenario-037', level: 'L3', subtopic: 'API Design', title: 'PATCH request accidentally clears fields',
    situation: 'The React UI changes only `phone`, but the backend clears `email` because the PATCH DTO is treated like a full replacement object.',
    diagnosis: 'The API implementation does not distinguish partial updates from complete replacements.',
    solution: 'Define PATCH semantics explicitly. Use nullable/optional update fields or a command object that distinguishes "not supplied" from "supplied as null". Validate immutable fields and apply only requested changes.',
    delivery: 'PATCH is about partial modification, but the exact null semantics must be defined. I make the update command explicit so omitted fields are not accidentally overwritten.',
    followups: [
      { question: 'PUT vs PATCH?', answer: 'PUT conventionally represents replacement of the resource representation, while PATCH represents a partial modification. The API should document its exact semantics rather than relying only on the method name.' },
      { question: 'How do you represent omitted vs null?', answer: 'A simple Java field can struggle to distinguish them. Use an explicit patch DTO/wrapper or a patch format such as JSON Merge Patch/JSON Patch when those semantics are required.' },
      { question: 'Should immutable fields be accepted in PATCH?', answer: 'Prefer rejecting or ignoring them according to a documented contract. Sensitive immutable properties should not be silently changed just because the client included them.' }
    ],
    traps: ['Do not implement PATCH by blindly copying every DTO field onto the entity.', 'Do not leave null semantics undocumented.']
  },
  {
    id: 'scenario-038', level: 'L3', subtopic: 'Reliability', title: 'Notification service is down during order creation',
    situation: 'The business requires an order to be accepted even if the email notification service is temporarily unavailable.',
    diagnosis: 'The notification is a secondary side effect, but the current implementation calls it synchronously inside the order request transaction.',
    solution: 'Persist the order and an outbox event transactionally, then publish/process the notification asynchronously. Track delivery status and retry transient failures without blocking order creation.',
    delivery: 'I separate the critical business transaction from non-critical notification delivery. The user gets a confirmed order while the system reliably retries the email independently.',
    followups: [
      { question: 'What if the notification is mandatory?', answer: 'If the business truly requires notification success before the operation is considered complete, the API contract should model that dependency explicitly. Otherwise asynchronous processing is preferable for resilience.' },
      { question: 'How does React know the email is pending?', answer: 'The order response can report the order state while a separate notification status can be exposed if users need visibility. The UI should not infer notification success from order creation alone.' },
      { question: 'Where do retries happen?', answer: 'Usually in the asynchronous consumer/worker, with bounded retries, backoff and a dead-letter or failure workflow for messages that cannot be processed automatically.' }
    ],
    traps: ['Do not make every secondary action part of the synchronous request.', 'Do not retry failed notifications forever without operational limits.']
  },
  {
    id: 'scenario-039', level: 'L3', subtopic: 'Observability', title: 'Production error rate rises after a frontend release',
    situation: 'A new React release is deployed and API 400/500 rates rise even though the backend code did not change.',
    diagnosis: 'Compare error rates by frontend version, endpoint and request payload. Inspect the deployed bundle and browser Network requests for changed field names, headers or serialization.',
    solution: 'If the release is clearly responsible, roll back or disable the feature quickly, then add contract/integration coverage for the incompatible request. Use frontend version/build metadata in telemetry so regressions can be correlated with releases.',
    delivery: 'I correlate the production spike with the client release before changing the backend. The fastest safe response is to restore the previous known-good client while investigating the exact contract regression.',
    followups: [
      { question: 'How can the backend identify frontend versions?', answer: 'The frontend can send a safe build/version identifier in a header or telemetry context. The server can record it in logs/metrics without treating it as trusted business data.' },
      { question: 'Would you always roll back?', answer: 'If impact is significant and rollback is safe, restoring the known-good version is often the fastest mitigation. If rollback is unsafe or the release is behind a feature flag, disable the feature instead.' },
      { question: 'What test would prevent this?', answer: 'A consumer/provider contract test or integration test that exercises the actual JSON request against the backend contract would catch many request-shape regressions before deployment.' }
    ],
    traps: ['Do not immediately modify the backend to accommodate an unknown client bug.', 'Do not delay mitigation while waiting for a perfect root-cause analysis.']
  },
  {
    id: 'scenario-040', level: 'L3', subtopic: 'Case Study', title: 'Design a complete order-management feature',
    situation: 'You are asked to build an order-management feature with React, Spring Boot, MySQL, authentication, search, pagination and asynchronous notifications.',
    diagnosis: 'Break the problem into boundaries: browser UI, API contract, authentication/authorization, service/business rules, transaction/data model, asynchronous events, deployment and observability.',
    solution: 'React provides forms, list/detail views and server-state handling. Spring Boot exposes DTO-based REST APIs and Spring Security protects them. MySQL stores orders and an outbox in one transaction. A worker publishes notifications idempotently. The API is paginated and searchable, while metrics/logs/traces cover the critical path.',
    delivery: 'I would design the system around clear ownership: React handles presentation and user interaction; Spring Boot owns business rules and security; MySQL owns transactional consistency; messaging handles asynchronous work; observability and deployment make the system operable in production.',
    followups: [
      { question: 'How do you prevent duplicate order creation?', answer: 'Use an idempotency key for the create command and enforce relevant business uniqueness at the database layer. The server returns the stored result for a repeated key instead of creating another order.' },
      { question: 'How would you handle a slow notification provider?', answer: 'Do not block the order transaction. Commit the order and outbox event, process notification asynchronously with bounded retries and expose a pending/failed state only if the business needs users to see it.' },
      { question: 'What would you monitor in production?', answer: 'Track order API p95/p99 latency, error rate, throughput, database latency/connection pool pressure, outbox backlog, notification failure rate, authentication failures and distributed traces for slow requests. Alert on user-impacting SLO violations rather than every low-level event.' }
    ],
    traps: ['Do not put business logic in React.', 'Do not expose JPA entities as the public API by default.', 'Do not make every downstream operation synchronous just because the feature starts from one button click.']
  }
];
