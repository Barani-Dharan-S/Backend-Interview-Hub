export const debugLabs = [
  {
    "id": "debug-001",
    "level": "L1",
    "subtopic": "Network",
    "title": "React shows “Failed to fetch”",
    "symptom": "The page works locally but fails in production. DevTools shows the request is not completing normally.",
    "diagnosis": "Check Network first: actual URL, DNS/TLS, request method, browser CORS messages and whether the request reached the server. Distinguish a browser-blocked cross-origin request from a backend 5xx.",
    "delivery": "The first failing boundary is the browser-to-API connection. I would inspect the exact request before changing React code.",
    "followups": [
      {
        "question": "If the API works in Postman but not the browser?",
        "answer": "That strongly suggests browser-specific policy such as CORS, mixed content or a frontend URL/configuration issue. Postman is not subject to browser CORS enforcement."
      },
      {
        "question": "What if there is no request in Network?",
        "answer": "Check whether the code path executed, whether the URL is malformed, and whether the browser blocked or failed before a normal HTTP exchange."
      }
    ],
    "traps": [
      "Do not immediately rewrite fetch code.",
      "“Works in Postman” does not prove the browser request is valid."
    ]
  },
  {
    "id": "debug-002",
    "level": "L1",
    "subtopic": "HTTP",
    "title": "React receives 401 after login",
    "symptom": "Login succeeds, but the next protected API call returns 401.",
    "diagnosis": "Inspect the protected request headers. Confirm the access token exists, is sent as Authorization: Bearer, has not expired, and is accepted by the configured issuer/signing key. Then inspect Spring Security logs safely.",
    "delivery": "Start with the failing request rather than the login response. A successful login does not prove the protected request carries a valid token.",
    "followups": [
      {
        "question": "401 vs 403?",
        "answer": "401 means authentication is missing or invalid. 403 means the caller is authenticated but is not permitted to access the resource under the authorization rules."
      },
      {
        "question": "What if the token is present?",
        "answer": "Check token expiry, issuer/audience, signature configuration, clock skew and whether the expected authorities are mapped."
      }
    ],
    "traps": [
      "Do not fix a 401 by making the endpoint public.",
      "Never paste production tokens into tickets or logs."
    ]
  },
  {
    "id": "debug-003",
    "level": "L1",
    "subtopic": "CORS",
    "title": "Browser says CORS blocked",
    "symptom": "The backend returns data when called from a server-side client, but the browser reports a CORS policy error.",
    "diagnosis": "Identify the exact frontend origin and API origin. Verify Spring Security/CORS configuration allows the required origin, methods and headers, and that preflight OPTIONS requests are handled.",
    "delivery": "CORS is a browser enforcement policy. I would configure the backend to explicitly allow the real frontend origin rather than trying to disable browser security.",
    "followups": [
      {
        "question": "Why can OPTIONS fail before the controller?",
        "answer": "The browser may send a preflight request and the CORS/security layer must handle it before the business controller is invoked."
      },
      {
        "question": "Can React fix CORS?",
        "answer": "No. React can send the request, but the server must return the appropriate CORS headers. A development proxy can hide the issue locally but does not replace production configuration."
      }
    ],
    "traps": [
      "Do not use allow-all origins blindly.",
      "Do not confuse CORS with authentication or authorization."
    ]
  },
  {
    "id": "debug-004",
    "level": "L2",
    "subtopic": "Database",
    "title": "API became slow after data grew",
    "symptom": "A query that was fast with 5,000 rows is now slow with millions.",
    "diagnosis": "Measure first. Inspect query latency, execution plan, row estimates, scans, joins, sorts and index usage. Check whether pagination and predicates are index-friendly and whether application code introduced N+1 queries.",
    "delivery": "I would avoid adding an index blindly. I want the actual query plan and production-like data volume, then I would change the query or index based on evidence.",
    "followups": [
      {
        "question": "What if the query already has an index?",
        "answer": "Verify the optimizer can use it effectively. A low-selectivity predicate, function on the indexed column, stale statistics or an inefficient query shape can still cause a scan."
      },
      {
        "question": "Could React be the problem?",
        "answer": "It could amplify the problem by making too many requests, but if individual API requests are slow, inspect backend/database latency separately."
      }
    ],
    "traps": [
      "Do not diagnose SQL performance from source code alone.",
      "Do not increase database resources before understanding the bottleneck."
    ]
  },
  {
    "id": "debug-005",
    "level": "L2",
    "subtopic": "Concurrency",
    "title": "Duplicate orders after a timeout",
    "symptom": "Users report duplicate orders after clicking once; logs show retries around a slow endpoint.",
    "diagnosis": "Correlate request IDs and inspect whether the client or gateway retried. Determine whether the command has an idempotency key and whether the database enforces uniqueness. Separate duplicate HTTP requests from duplicate business effects.",
    "delivery": "The key question is whether a retry can safely repeat the command. I would make the business operation idempotent instead of assuming network retries are rare.",
    "followups": [
      {
        "question": "Why can a timeout create duplicates?",
        "answer": "The server may have committed the first request while the response was lost. The client cannot know whether the operation succeeded and may retry."
      },
      {
        "question": "What is the strongest duplicate defense?",
        "answer": "A durable idempotency record or business uniqueness constraint enforced transactionally at the database boundary."
      }
    ],
    "traps": [
      "Do not simply tell users not to retry.",
      "Do not rely only on UI button disabling."
    ]
  },
  {
    "id": "debug-006",
    "level": "L2",
    "subtopic": "Spring Boot",
    "title": "API returns 500 but frontend sees little information",
    "symptom": "A production request fails with 500 and the browser only sees a generic error.",
    "diagnosis": "Use the correlation ID to find server logs, identify the exception, determine whether it is expected or unexpected, and check whether the API error handler mapped it correctly. Preserve the internal stack trace in logs, not the response.",
    "delivery": "I want the client to receive a stable safe error contract while the server retains enough diagnostic detail to find the root cause.",
    "followups": [
      {
        "question": "How do you prevent leaking stack traces?",
        "answer": "Configure exception handling so unexpected exceptions map to a generic 500 response while the full exception is logged with correlation context and appropriate access controls."
      },
      {
        "question": "What if logs are missing?",
        "answer": "Check log level, centralized logging pipeline, instance identity and whether the request actually reached the service."
      }
    ],
    "traps": [
      "Do not return exception.getMessage() blindly.",
      "Do not debug production by adding arbitrary verbose logging containing secrets."
    ]
  },
  {
    "id": "debug-007",
    "level": "L2",
    "subtopic": "React",
    "title": "Old search results overwrite new results",
    "symptom": "Typing quickly causes results for an older search term to appear after the latest term.",
    "diagnosis": "This is a race condition. Use AbortController to cancel obsolete requests or track a request sequence/token and only commit the latest response.",
    "delivery": "The bug is response ordering, not just request frequency. I would cancel stale work and make the state update conditional on the current request.",
    "followups": [
      {
        "question": "Does debounce solve it completely?",
        "answer": "No. Debounce reduces requests but two requests can still overlap and finish out of order."
      },
      {
        "question": "What if AbortController is not available?",
        "answer": "Track a monotonically increasing request ID and ignore responses that are not the latest issued request."
      }
    ],
    "traps": [
      "Do not assume network responses arrive in order.",
      "Do not mutate shared state from stale async callbacks."
    ]
  },
  {
    "id": "debug-008",
    "level": "L3",
    "subtopic": "Deployment",
    "title": "Works locally, blank page in GitHub Pages",
    "symptom": "The React app loads in development but deployed routes/assets fail on GitHub Pages.",
    "diagnosis": "Inspect the generated asset URLs and Vite base path. For a project site, the build base must include the repository path, and deployment must publish the dist output.",
    "delivery": "I would inspect the browser console and generated HTML first. A wrong base path causes assets to request from the domain root instead of the project path.",
    "followups": [
      {
        "question": "Why does it work with npm run dev?",
        "answer": "The dev server serves from root and handles module requests differently. The production build needs the correct public base for the hosting path."
      },
      {
        "question": "What else can break on client-side routing?",
        "answer": "Refreshing a deep route can produce a 404 on static hosting unless the hosting setup provides a fallback or the app uses a routing strategy compatible with the host."
      }
    ],
    "traps": [
      "Do not change React components to fix a build base problem.",
      "Do not assume a successful local dev server proves production asset paths are correct."
    ]
  },
  {
    "id": "debug-009",
    "level": "L3",
    "subtopic": "Security",
    "title": "User can see another user’s order",
    "symptom": "A user changes /orders/123 to /orders/124 and receives another customer’s order.",
    "diagnosis": "This is an authorization/ownership failure. Authentication succeeded, but the resource lookup did not constrain access by the authenticated principal. Fix service/repository authorization and test horizontal privilege escalation.",
    "delivery": "I would treat this as a security incident. The API must enforce ownership or permission server-side; hiding IDs in React is not a defense.",
    "followups": [
      {
        "question": "Where should ownership be checked?",
        "answer": "At a trusted server-side service/repository boundary, ideally close enough to the data access that every access path enforces the rule consistently."
      },
      {
        "question": "Is an unguessable UUID enough?",
        "answer": "No. It reduces enumeration risk but does not replace authorization. A caller who learns a valid ID still needs permission."
      }
    ],
    "traps": [
      "Do not rely on frontend route guards.",
      "Do not equate authentication with authorization."
    ]
  },
  {
    "id": "debug-010",
    "level": "L3",
    "subtopic": "Observability",
    "title": "Latency spikes only under load",
    "symptom": "The service is fast with one user but p95 latency becomes high during peak traffic.",
    "diagnosis": "Compare p50/p95/p99, CPU, memory/GC, thread pools, DB connection pool utilization, downstream latency, request volume and error rates. Use traces to find which span expands under load.",
    "delivery": "I would correlate the latency spike with resource saturation and downstream timings instead of optimizing the fastest-looking code path.",
    "followups": [
      {
        "question": "Why p95 instead of average?",
        "answer": "Average can hide a smaller population of very slow requests. Percentiles show the experience of slower users and are useful for latency objectives."
      },
      {
        "question": "What if the DB pool is exhausted?",
        "answer": "Find why connections are held too long or queries are slow, and size the pool based on workload and database capacity rather than blindly increasing it."
      }
    ],
    "traps": [
      "Do not optimize from CPU alone.",
      "Do not increase every pool size at once; that can amplify downstream overload."
    ]
  }
];
