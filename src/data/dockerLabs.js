export const dockerLabs = [
  {
    "id": "docker-lab-001",
    "level": "L1",
    "kind": "Build",
    "title": "Containerize a Spring Boot API",
    "objective": "Create a production-style image for a Spring Boot REST API using a multi-stage build.",
    "approach": "Build with Maven in one stage, copy the JAR into a JRE runtime image, expose 8080, run as a non-root user, and verify the health endpoint.",
    "code": "docker build -t user-api:1.0 .\ndocker run --rm -p 8080:8080 user-api:1.0",
    "delivery": "I would separate build and runtime concerns, keep the final image small, avoid secrets, and verify the container as the exact artifact I intend to deploy.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-002",
    "level": "L1",
    "kind": "Build",
    "title": "Containerize a React Frontend",
    "objective": "Build the React application and serve the static output from a lightweight web server container.",
    "approach": "Use a Node build stage and a runtime web-server stage. Ensure the SPA fallback is configured and only runtime static assets are copied.",
    "code": "docker build -t interview-ui:1.0 .\ndocker run --rm -p 3000:80 interview-ui:1.0",
    "delivery": "The frontend image should contain built static assets, not node_modules or the full development toolchain.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-003",
    "level": "L2",
    "kind": "Build",
    "title": "Run React + Spring Boot + PostgreSQL with Compose",
    "objective": "Create a three-service local environment with persistent database storage and service-name networking.",
    "approach": "Compose frontend, API, and DB. The API connects to db:5432, while the browser reaches published host ports. Add a database healthcheck and appropriate startup behavior.",
    "code": "docker compose up --build\ndocker compose ps\ndocker compose logs -f api",
    "delivery": "This is the bridge from single-container Docker knowledge to a realistic full-stack environment.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-004",
    "level": "L2",
    "kind": "Build",
    "title": "Add Image Health and Non-Root Runtime",
    "objective": "Harden the API image with a healthcheck and non-root user.",
    "approach": "Create an application user, set USER, add a healthcheck against the API, and verify status through docker inspect/ps.",
    "code": "docker inspect --format=\"{{json .State.Health}}\" api",
    "delivery": "Security and health are part of the container contract, not afterthoughts added only when production fails.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-005",
    "level": "L2",
    "kind": "Build",
    "title": "Publish an Image to a Registry",
    "objective": "Build, tag, authenticate, and push a versioned image to a registry.",
    "approach": "Use a unique release tag and capture the resulting digest. Never put registry credentials into the Dockerfile or source control.",
    "code": "docker tag user-api:1.0 registry.example.com/team/user-api:1.0\ndocker push registry.example.com/team/user-api:1.0",
    "delivery": "The registry becomes the artifact hand-off between CI and deployment.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-006",
    "level": "L2",
    "kind": "Debug",
    "title": "Container Exits on Startup",
    "objective": "A Spring Boot container exits seconds after starting. Diagnose it without changing the image blindly.",
    "approach": "Inspect status and logs, then compare environment variables, mounted files, Java version, and startup command. Identify the first exception.",
    "code": "docker ps -a\ndocker logs user-api\ndocker inspect user-api",
    "delivery": "I would find the process-level failure first rather than masking it with a long-running shell command.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-007",
    "level": "L2",
    "kind": "Debug",
    "title": "API Cannot Reach PostgreSQL",
    "objective": "The API starts but reports connection refused to PostgreSQL in Compose.",
    "approach": "Check the JDBC hostname, Compose network, DB health/readiness, exposed versus internal ports, and credentials. The API should normally use db:5432 rather than localhost.",
    "code": "docker compose ps\ndocker compose exec api sh\n# test DNS/connectivity to db",
    "delivery": "I debug the network boundary before changing application retry settings.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-008",
    "level": "L2",
    "kind": "Debug",
    "title": "Port Mapping Looks Correct but Browser Gets 502",
    "objective": "The container shows 8080:8080, but the endpoint is unreachable.",
    "approach": "Check application bind address, internal listening port, startup logs, health, and whether a reverse proxy is targeting the correct service/port.",
    "code": "docker ps\ndocker logs api\ndocker exec api sh -c \"wget -qO- http://localhost:8080/actuator/health\"",
    "delivery": "Port publishing only proves a mapping exists; it does not prove the application is healthy or listening correctly.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-009",
    "level": "L3",
    "kind": "Debug",
    "title": "Image Works Locally but Fails in CI",
    "objective": "A Docker build succeeds on a laptop but fails in CI.",
    "approach": "Compare Dockerfile, build context, architecture, dependency lockfiles, credentials, network access, and cache assumptions. Make the build deterministic instead of relying on local state.",
    "code": "docker build --no-cache -t user-api:ci .",
    "delivery": "A clean CI environment is valuable because it exposes hidden local dependencies.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  },
  {
    "id": "docker-lab-010",
    "level": "L3",
    "kind": "Architecture",
    "title": "Design the Production Image Pipeline",
    "objective": "Design the artifact flow from Git commit to a deployable Docker image.",
    "approach": "Run tests, build the image, scan it, tag it with release metadata, push it to a registry, and promote the exact digest to deployment.",
    "code": "git push → CI → test → build → scan → push → deploy digest",
    "delivery": "The central principle is build once, promote the same artifact, and keep environment configuration outside the image.",
    "followups": [
      {
        "question": "What would you check first?",
        "answer": "Start at the first failing boundary: image/build, container process, network, dependency, published port, or deployment layer. Use evidence from status, logs, inspect output, and health checks."
      },
      {
        "question": "What is the production lesson?",
        "answer": "Keep the image immutable and reproducible, inject configuration at runtime, make health observable, and design the container so it can be safely replaced."
      }
    ],
    "traps": [
      "Do not use localhost for a dependency in another container.",
      "Do not bake secrets into the image."
    ]
  }
];
