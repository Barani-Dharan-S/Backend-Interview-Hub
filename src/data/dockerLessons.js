export const dockerLessons = [
  {
    "id": "docker-001",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "What is Docker?",
    "what": "Docker packages an application and its runtime dependencies into an image that can run as an isolated container. The important distinction is that the image is the packaged artifact and the container is a running instance of that artifact.",
    "how": "A developer builds an image once, then the same image can be started locally, in CI, or by a deployment platform. Docker uses OS-level isolation rather than booting a separate guest kernel for every container.",
    "code": "docker run nginx:alpine",
    "delivery": "In an interview, I would describe Docker as a repeatable packaging and runtime model: build an immutable image, run it as a container, and keep environment-specific configuration outside the image.",
    "followups": [
      {
        "question": "Why is the image useful in CI/CD?",
        "answer": "The image is a portable artifact. CI can build and test one image, push that exact artifact to a registry, and deployment can promote the same image without rebuilding it for each environment."
      },
      {
        "question": "Does Docker provide a full virtual machine?",
        "answer": "No. A normal Linux container shares the host kernel and isolates processes, filesystem, networking, and resources. A VM boots a separate guest operating system."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-002",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "Container vs Virtual Machine",
    "what": "A container shares the host kernel while a virtual machine includes a guest operating system and virtualized hardware. Containers usually start faster and use fewer resources, while VMs provide stronger OS-level isolation.",
    "how": "Docker uses namespaces and cgroups on Linux, with a container runtime creating the isolated process environment. A VM instead boots a complete guest OS on a hypervisor.",
    "code": "Container: process + isolated filesystem/network/process view. VM: guest OS + virtual hardware.",
    "delivery": "The trade-off is not simply “containers are better”; choose the isolation, startup time, resource overhead, and operational model required.",
    "followups": [
      {
        "question": "Why are containers usually faster to start than VMs?",
        "answer": "A container starts a process using the existing host kernel instead of booting a complete guest operating system. The exact startup time still depends on image size and application initialization."
      },
      {
        "question": "When would you prefer a VM?",
        "answer": "When you need a separate guest OS/kernel, stronger isolation boundaries, or workloads that do not fit the container runtime model."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-003",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "Docker Image vs Container",
    "what": "An image is a read-only, versioned template containing filesystem layers and configuration. A container is a runtime instance with a writable container layer and process state.",
    "how": "docker run creates a container from an image. Removing the container does not remove the image unless you explicitly remove the image too.",
    "code": "docker images\ndocker ps -a\ndocker run --name demo nginx:alpine",
    "delivery": "I keep images immutable and treat containers as disposable runtime instances. Persistent state belongs in external storage such as volumes or a database.",
    "followups": [
      {
        "question": "What happens to data written only to the container layer?",
        "answer": "It disappears when that container is removed. Persistent application data should use a volume or, for production databases, an appropriate persistent database service."
      },
      {
        "question": "Can two containers run from the same image?",
        "answer": "Yes. Each container gets its own runtime state while sharing the immutable image layers."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-004",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "Docker Engine",
    "what": "Docker Engine is the platform that exposes the Docker API and manages images, containers, networks, and volumes.",
    "how": "The Docker CLI sends requests to the Docker API; the engine coordinates container lifecycle and lower-level runtime components.",
    "code": "docker version\ndocker info",
    "delivery": "The useful interview distinction is CLI versus engine: the CLI is a client, while the engine performs the requested lifecycle operations.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "The useful interview distinction is CLI versus engine: the CLI is a client, while the engine performs the requested lifecycle operations. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-005",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "Docker CLI Essentials",
    "what": "The CLI is the primary developer interface for building images and inspecting or controlling containers.",
    "how": "Common commands map to lifecycle tasks: build, run, ps, logs, exec, inspect, stop, rm, images, pull, push, network, and volume.",
    "code": "docker build -t user-api:1.0 .\ndocker run -d --name user-api -p 8080:8080 user-api:1.0\ndocker logs -f user-api",
    "delivery": "I use a small command set repeatedly: ps to see state, logs to see application output, exec to inspect a running container, and inspect for configuration details.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I use a small command set repeatedly: ps to see state, logs to see application output, exec to inspect a running container, and inspect for configuration details. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-006",
    "level": "L1",
    "subtopic": "Dockerfile",
    "title": "Dockerfile Fundamentals",
    "what": "A Dockerfile is a build recipe for producing an image. Instructions define the base image, files, dependencies, metadata, user, and startup behavior.",
    "how": "FROM establishes the base. COPY transfers files. RUN executes build-time commands. WORKDIR sets the working directory. CMD or ENTRYPOINT defines the default runtime behavior.",
    "code": "FROM eclipse-temurin:21-jre\nWORKDIR /app\nCOPY target/app.jar app.jar\nENTRYPOINT [\"java\",\"-jar\",\"app.jar\"]",
    "delivery": "A good Dockerfile is deterministic, minimal, and arranged so stable dependency layers can be cached while frequently changing application code is copied later.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "A good Dockerfile is deterministic, minimal, and arranged so stable dependency layers can be cached while frequently changing application code is copied later. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-007",
    "level": "L1",
    "subtopic": "Dockerfile",
    "title": "FROM, RUN, COPY and WORKDIR",
    "what": "FROM chooses the base image, RUN performs build-time commands, COPY copies build context files, and WORKDIR changes the default directory for later instructions and the process.",
    "how": "Each instruction can affect the image filesystem or metadata. RUN is executed during build, while COPY is used to transfer build artifacts or source files.",
    "code": "FROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .",
    "delivery": "The interview trap is confusing build-time RUN with runtime commands. RUN belongs to image creation; CMD and ENTRYPOINT are runtime configuration.",
    "followups": [
      {
        "question": "Can CMD and ENTRYPOINT be used together?",
        "answer": "Yes. With exec-form ENTRYPOINT, CMD commonly supplies default arguments. This is useful when the executable is fixed but operators may override defaults."
      },
      {
        "question": "Why prefer exec form?",
        "answer": "Exec form launches the application as the container process more directly, which improves signal handling and graceful shutdown compared with wrapping it in a shell unnecessarily."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-008",
    "level": "L1",
    "subtopic": "Dockerfile",
    "title": "CMD vs ENTRYPOINT",
    "what": "CMD supplies a default command or arguments; ENTRYPOINT defines the executable behavior of the container.",
    "how": "If both are present in exec form, CMD commonly supplies default arguments to ENTRYPOINT. Runtime arguments can override CMD, while replacing an ENTRYPOINT generally requires an explicit Docker option.",
    "code": "ENTRYPOINT [\"java\",\"-jar\",\"/app/app.jar\"]\nCMD [\"--server.port=8080\"]",
    "delivery": "I use exec-form ENTRYPOINT for a fixed application process and CMD for defaults that an operator may reasonably override.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "I use exec-form ENTRYPOINT for a fixed application process and CMD for defaults that an operator may reasonably override. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-009",
    "level": "L1",
    "subtopic": "Dockerfile",
    "title": "EXPOSE vs Published Ports",
    "what": "EXPOSE documents the port the image expects the application to listen on; it does not publish that port to the host.",
    "how": "Host access is created with docker run -p hostPort:containerPort. Container-to-container traffic on a Docker network does not require publishing the port to the host.",
    "code": "EXPOSE 8080\ndocker run -p 8080:8080 user-api:1.0",
    "delivery": "If a container listens on 8080 but localhost cannot reach it, I check whether the application is listening on the correct interface and whether the host port was published.",
    "followups": [
      {
        "question": "Does EXPOSE make a port reachable from my laptop?",
        "answer": "No. EXPOSE is documentation/metadata. Host access normally requires -p or another networking mechanism."
      },
      {
        "question": "Why does container-to-container traffic not need -p?",
        "answer": "Containers on the same Docker network can communicate over the internal network. Publishing is specifically about exposing a container port through the host/network boundary."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-010",
    "level": "L1",
    "subtopic": "Dockerfile",
    "title": "Build Context and .dockerignore",
    "what": "The build context is the set of files sent to the Docker build process. .dockerignore excludes unnecessary or sensitive files.",
    "how": "A small context improves build speed and prevents accidental inclusion of .git, local build output, credentials, and dependency caches.",
    "code": "node_modules\ndist\n.git\n.env\n*.log",
    "delivery": "I treat .dockerignore as part of the build security boundary. Secrets should not be sent in the build context just because they are ignored from the final image.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "I treat .dockerignore as part of the build security boundary. Secrets should not be sent in the build context just because they are ignored from the final image. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-011",
    "level": "L1",
    "subtopic": "Images",
    "title": "Image Layers and Cache",
    "what": "Docker images are composed of layers, and build cache can reuse unchanged layers.",
    "how": "Put stable dependency installation before frequently changing source files. If package manifests have not changed, the dependency layer can often be reused.",
    "code": "COPY package*.json ./\nRUN npm ci\nCOPY src ./src",
    "delivery": "Caching is a build-performance feature, not a correctness mechanism. I still make builds deterministic so a cache miss produces the same intended artifact.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "Caching is a build-performance feature, not a correctness mechanism. I still make builds deterministic so a cache miss produces the same intended artifact. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-012",
    "level": "L2",
    "subtopic": "Images",
    "title": "Multi-Stage Builds",
    "what": "Multi-stage builds separate compilation from runtime so the final image contains only what is needed to run the application.",
    "how": "A Java build stage can contain Maven and source code, while the runtime stage contains only a small JRE and the produced JAR.",
    "code": "FROM maven:3.9-eclipse-temurin-21 AS build\nCOPY . /workspace\nRUN mvn -f /workspace/pom.xml package -DskipTests\n\nFROM eclipse-temurin:21-jre\nCOPY --from=build /workspace/target/app.jar /app/app.jar\nENTRYPOINT [\"java\",\"-jar\",\"/app/app.jar\"]",
    "delivery": "For production images I prefer multi-stage builds because build tools and source files increase image size and attack surface.",
    "followups": [
      {
        "question": "Why avoid latest in production?",
        "answer": "latest is mutable, so the same reference can point to different content later. Version tags plus immutable digests make releases traceable and reproducible."
      },
      {
        "question": "What should CI record after pushing an image?",
        "answer": "At minimum the repository and release tag; for strong provenance, also record the immutable image digest and build metadata."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-013",
    "level": "L2",
    "subtopic": "Images",
    "title": "Image Tags vs Digests",
    "what": "A tag such as 1.4 or latest is a human-friendly mutable reference, while a digest identifies a specific image content.",
    "how": "CI can build an image with a release tag and also record the immutable digest. Deployments that need strong reproducibility can pin the digest.",
    "code": "docker pull nginx:1.27\ndocker image inspect nginx:1.27",
    "delivery": "I never treat latest as a stable production version. For traceable deployments, I want a versioned tag and preferably an immutable digest.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I never treat latest as a stable production version. For traceable deployments, I want a versioned tag and preferably an immutable digest. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-014",
    "level": "L2",
    "subtopic": "Images",
    "title": "Docker Registry",
    "what": "A registry stores and distributes container images. CI typically pushes an image and deployment infrastructure later pulls it.",
    "how": "The flow is build image → authenticate → tag → push → deployment pulls by tag or digest. Registries can be public or private.",
    "code": "docker tag user-api:1.0 registry.example.com/team/user-api:1.0\ndocker push registry.example.com/team/user-api:1.0",
    "delivery": "The registry is the hand-off point between CI and deployment. I separate image build credentials from runtime application credentials.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "The registry is the hand-off point between CI and deployment. I separate image build credentials from runtime application credentials. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-015",
    "level": "L2",
    "subtopic": "Runtime",
    "title": "Container Lifecycle",
    "what": "A container moves through created, running, stopped, and removed states. Its lifecycle is independent from the image it came from.",
    "how": "docker run creates and starts a container; stop sends a graceful stop request; rm removes the stopped container. Restart policies can automate recovery.",
    "code": "docker ps -a\ndocker stop user-api\ndocker rm user-api",
    "delivery": "Containers should be disposable. If deleting a container destroys important business data, the persistence boundary is probably in the wrong place.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "Containers should be disposable. If deleting a container destroys important business data, the persistence boundary is probably in the wrong place. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-016",
    "level": "L2",
    "subtopic": "Runtime",
    "title": "Environment Variables",
    "what": "Environment variables provide runtime configuration without rebuilding the image.",
    "how": "Use -e, --env-file, Compose environment configuration, or the deployment platform’s secret/configuration mechanisms. Do not bake credentials into image layers.",
    "code": "docker run --env-file .env.production user-api:1.0",
    "delivery": "I keep the image environment-neutral and inject environment-specific configuration at deployment time. Secrets require a secret-management mechanism rather than plain source files.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "I keep the image environment-neutral and inject environment-specific configuration at deployment time. Secrets require a secret-management mechanism rather than plain source files. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-017",
    "level": "L2",
    "subtopic": "Runtime",
    "title": "Volumes and Persistent Data",
    "what": "Container writable layers are ephemeral. Volumes provide persistent storage managed separately from the container lifecycle.",
    "how": "Mount a named volume into a container path. Removing and recreating the container keeps the volume unless it is explicitly removed.",
    "code": "docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres:16",
    "delivery": "For databases I usually use managed database services in production, but volumes are essential for understanding stateful containers and local development.",
    "followups": [
      {
        "question": "Why use a user-defined network instead of the default bridge?",
        "answer": "User-defined networks provide built-in DNS-based service discovery and clearer isolation between application groups."
      },
      {
        "question": "Why does localhost fail for a database in another container?",
        "answer": "Because localhost resolves inside the API container itself. The database is a different network endpoint, normally addressed by its service/container DNS name."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-018",
    "level": "L2",
    "subtopic": "Networking",
    "title": "Docker Networks",
    "what": "A user-defined Docker network lets containers communicate by container/service name and isolates traffic from unrelated networks.",
    "how": "Attach services to the same network and connect using the service name rather than localhost. localhost inside a container means that same container.",
    "code": "docker network create app-net\ndocker run -d --network app-net --name db postgres:16\ndocker run -d --network app-net --name api user-api:1.0",
    "delivery": "The classic mistake is using localhost from the API container to reach PostgreSQL. The API should use db:5432 when both are on the same Docker network.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "The classic mistake is using localhost from the API container to reach PostgreSQL. The API should use db:5432 when both are on the same Docker network. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-019",
    "level": "L2",
    "subtopic": "Networking",
    "title": "Bridge Networking and Port Mapping",
    "what": "The default bridge provides container networking, while user-defined bridge networks provide better service discovery and isolation.",
    "how": "-p publishes a container port onto the host. It is unrelated to whether two containers can communicate over their internal network.",
    "code": "docker run -d --name api --network app-net -p 8080:8080 user-api:1.0",
    "delivery": "I distinguish host-to-container access from container-to-container access: publish ports only when external access is required.",
    "followups": [
      {
        "question": "Does depends_on guarantee database readiness?",
        "answer": "Not by itself. It can establish startup relationships, but the application still needs readiness checks or retry behavior because a database process may be running before it can accept connections."
      },
      {
        "question": "What is a better readiness strategy?",
        "answer": "Use a meaningful healthcheck and application retry/backoff or orchestration readiness semantics so traffic starts only when the dependency path is usable."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-020",
    "level": "L2",
    "subtopic": "Compose",
    "title": "Docker Compose",
    "what": "Compose defines a multi-container application as declarative configuration, making local environments reproducible.",
    "how": "A compose file can define services, networks, volumes, environment, dependencies, health checks, and port mappings.",
    "code": "services:\n  api:\n    build: .\n    ports: [\"8080:8080\"]\n  db:\n    image: postgres:16",
    "delivery": "Compose is excellent for local integration environments and simple deployments; it is not a replacement for a production orchestrator when you need cluster scheduling and self-healing.",
    "followups": [
      {
        "question": "Why run as non-root?",
        "answer": "If an attacker gains code execution in the container, an unprivileged process has fewer permissions inside the container and reduces the blast radius of the compromise."
      },
      {
        "question": "What else is needed besides USER?",
        "answer": "Least-privilege filesystem permissions, a trusted minimal base, vulnerability scanning, secret hygiene, and platform isolation are still required."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-021",
    "level": "L2",
    "subtopic": "Compose",
    "title": "Compose Service Discovery",
    "what": "Compose creates a network where services can normally reach one another by service name.",
    "how": "If the service is named db, the API connection string can use db as the hostname. The host machine’s localhost is a different network namespace.",
    "code": "spring.datasource.url=jdbc:postgresql://db:5432/app",
    "delivery": "When debugging Compose connectivity, I first inspect the network and confirm both containers are attached to the same network before changing application code.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "When debugging Compose connectivity, I first inspect the network and confirm both containers are attached to the same network before changing application code. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-022",
    "level": "L2",
    "subtopic": "Compose",
    "title": "Compose depends_on vs Readiness",
    "what": "depends_on controls startup ordering but does not necessarily mean a dependency is ready to accept requests.",
    "how": "A robust Compose setup uses a database healthcheck and application retry/readiness behavior rather than assuming process creation equals service readiness.",
    "code": "healthcheck:\n  test: [\"CMD-SHELL\",\"pg_isready -U postgres\"]\n  interval: 5s\n  timeout: 3s\n  retries: 10",
    "delivery": "The interview point is startup ordering versus readiness. A process can be running while the database is still initializing.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "The interview point is startup ordering versus readiness. A process can be running while the database is still initializing. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-023",
    "level": "L2",
    "subtopic": "Security",
    "title": "Run Containers as Non-Root",
    "what": "Running as a non-root user reduces the impact of a container compromise.",
    "how": "Create or use an unprivileged user in the image and set USER before the application starts. Ensure file ownership and required permissions are correct.",
    "code": "RUN useradd --system --uid 10001 appuser\nUSER 10001\nENTRYPOINT [\"java\",\"-jar\",\"/app/app.jar\"]",
    "delivery": "I treat USER as a production hardening control, not a substitute for host or cluster security.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I treat USER as a production hardening control, not a substitute for host or cluster security. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-024",
    "level": "L2",
    "subtopic": "Security",
    "title": "Secrets in Docker",
    "what": "Secrets are credentials or sensitive configuration that should not be committed, baked into images, or casually printed in logs.",
    "how": "Use a secret manager or orchestrator-native secrets. Build arguments and environment variables can have exposure risks depending on how they are handled, so they are not automatically secure secret stores.",
    "code": "Bad: ARG DB_PASSWORD\nBetter: inject DB_PASSWORD at runtime from a secret store.",
    "delivery": "My rule is simple: source control, Dockerfiles, image layers, and normal logs should not become secret storage.",
    "followups": [
      {
        "question": "Why prefer structured stdout logs?",
        "answer": "Container platforms can collect stdout/stderr centrally. Logs written only to ephemeral container files may disappear with the container or require extra collection configuration."
      },
      {
        "question": "What should not appear in logs?",
        "answer": "Passwords, tokens, private keys, and unnecessary sensitive data. Logs are an operational data store and need the same care as other production data."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-025",
    "level": "L2",
    "subtopic": "Security",
    "title": "Image Vulnerability Scanning",
    "what": "Container images contain operating-system packages and application dependencies that can have vulnerabilities.",
    "how": "CI can scan the image before publishing or deploying it. Findings should be triaged by severity, exploitability, runtime exposure, and whether a patched base/dependency is available.",
    "code": "CI: build → scan → fail policy → push",
    "delivery": "I want security scanning before promotion to production, with explicit policies rather than blindly failing on every low-risk finding.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I want security scanning before promotion to production, with explicit policies rather than blindly failing on every low-risk finding. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-026",
    "level": "L2",
    "subtopic": "Observability",
    "title": "Docker Logs",
    "what": "Docker can collect stdout and stderr from containers through its configured logging mechanism.",
    "how": "Use docker logs for immediate troubleshooting. Production environments often centralize logs so they survive container replacement and can be searched across replicas.",
    "code": "docker logs --since 10m api\ndocker logs -f api",
    "delivery": "If an application only writes to a file inside the container, operational visibility becomes harder. For containerized apps, structured stdout/stderr logging is usually simpler.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "If an application only writes to a file inside the container, operational visibility becomes harder. For containerized apps, structured stdout/stderr logging is usually simpler. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-027",
    "level": "L2",
    "subtopic": "Observability",
    "title": "Healthchecks",
    "what": "A healthcheck tells an orchestrator or operator whether a containerized service is functioning according to a defined probe.",
    "how": "A healthcheck can execute a command or HTTP check. Health should represent a useful dependency-aware condition without turning every transient downstream issue into a restart storm.",
    "code": "HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8080/actuator/health || exit 1",
    "delivery": "I distinguish liveness from readiness. A service that is alive but not ready should not necessarily be restarted.",
    "followups": [
      {
        "question": "What is the first command when a container exits?",
        "answer": "docker ps -a shows the exit state; docker logs <container> often gives the immediate application failure. Then inspect configuration if the logs are insufficient."
      },
      {
        "question": "Why not add sleep infinity as the fix?",
        "answer": "It hides the real startup failure and keeps a broken container alive. The correct fix is to identify and resolve the process termination reason."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-028",
    "level": "L2",
    "subtopic": "Debugging",
    "title": "docker exec and inspect",
    "what": "docker exec runs a command in a running container; docker inspect exposes low-level metadata such as networks, mounts, environment, and configuration.",
    "how": "Use exec for interactive checks and inspect for configuration/state. Neither should replace application metrics and logs for systematic production diagnosis.",
    "code": "docker exec -it api sh\ndocker inspect api",
    "delivery": "When a container is reachable from the host but not from another container, inspect the network attachments and test DNS/connectivity from inside the container.",
    "followups": [
      {
        "question": "What if the port mapping is correct but the endpoint still fails?",
        "answer": "Check that the application is listening on the mapped internal port and on an accessible interface, then inspect startup logs and test the endpoint from inside the container."
      },
      {
        "question": "What is a useful boundary sequence?",
        "answer": "Process alive → application listening → container network → published host port → external route/client."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-029",
    "level": "L2",
    "subtopic": "Debugging",
    "title": "Why does my container exit immediately?",
    "what": "A container exits when its main process exits. Docker is not a virtual machine that keeps an OS alive independently of the application process.",
    "how": "Check docker ps -a and docker logs. Common causes are a bad command, missing configuration, application startup failure, or a process that was never intended to stay alive.",
    "code": "docker ps -a\ndocker logs api",
    "delivery": "I start with the process exit reason, not by adding sleep forever. The goal is to understand why the main process terminated.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I start with the process exit reason, not by adding sleep forever. The goal is to understand why the main process terminated. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-030",
    "level": "L2",
    "subtopic": "Debugging",
    "title": "Container Port Is Not Reachable",
    "what": "A published port can still fail if the application is listening only on the wrong interface, the wrong internal port is mapped, or the application has not started.",
    "how": "Check docker ps for the mapping, inspect the container, inspect logs, and test from inside the container. For Spring Boot, confirm server.port and server.address behavior.",
    "code": "docker ps\ndocker logs api\ndocker exec api wget -qO- http://localhost:8080/actuator/health",
    "delivery": "I debug the boundary in order: process health → listening port → container network → host port → external client.",
    "followups": [
      {
        "question": "Why is reproducibility important during incidents?",
        "answer": "It lets the team reconstruct exactly what artifact was deployed and compare source, dependency, base image, and digest rather than guessing which mutable image was used."
      },
      {
        "question": "Is pinning only the Docker base image enough?",
        "answer": "No. Application dependency versions and build inputs also need deterministic management."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-031",
    "level": "L2",
    "subtopic": "Debugging",
    "title": "Docker DNS vs localhost",
    "what": "Within a Docker network, service names resolve through Docker DNS. localhost always refers to the current container.",
    "how": "Use the Compose service name for dependencies. Use localhost only when the dependency is inside the same container or intentionally exposed through the host networking model.",
    "code": "API → http://db:5432\nNot API → http://localhost:5432",
    "delivery": "This is one of the most common containerization mistakes because the same application works locally before it is split into separate containers.",
    "followups": [
      {
        "question": "What happens when a container exceeds its memory limit?",
        "answer": "Depending on the runtime and configuration it can be terminated by the OOM mechanism. The application and platform should expose memory usage so the limit can be diagnosed rather than guessed."
      },
      {
        "question": "Should every container have the same limit?",
        "answer": "No. Limits should reflect workload behavior, expected traffic, and observed resource usage."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-032",
    "level": "L2",
    "subtopic": "Builds",
    "title": "Reproducible Docker Builds",
    "what": "A reproducible build produces the same intended artifact from the same source and dependency inputs.",
    "how": "Pin important base image versions, lock application dependencies, make build steps deterministic, and record image digests in release metadata.",
    "code": "FROM eclipse-temurin:21-jre\n# dependency lockfile + deterministic build\n# release stores image digest",
    "delivery": "Reproducibility is what lets us investigate a production image months later instead of guessing what “latest” contained.",
    "followups": [
      {
        "question": "What signal does docker stop use?",
        "answer": "It requests graceful termination, normally allowing the process to handle a termination signal before the runtime escalates after the configured timeout."
      },
      {
        "question": "Why does graceful shutdown matter during deployments?",
        "answer": "Without it, in-flight requests can be interrupted and clients can see errors while old replicas are replaced."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-033",
    "level": "L3",
    "subtopic": "Production",
    "title": "Docker Resource Limits",
    "what": "Containers can consume CPU and memory aggressively unless the runtime or orchestrator applies limits.",
    "how": "Set resource requests/limits at the platform layer where possible. Observe actual usage before choosing limits; too-low limits can cause OOM kills or throttling.",
    "code": "docker run --memory=512m --cpus=1 user-api:1.0",
    "delivery": "I treat resource limits as an operational safety mechanism, not as a substitute for profiling or capacity planning.",
    "followups": [
      {
        "question": "What is the production concern here?",
        "answer": "I treat resource limits as an operational safety mechanism, not as a substitute for profiling or capacity planning. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "What is a common Docker mistake?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-034",
    "level": "L3",
    "subtopic": "Production",
    "title": "Graceful Shutdown",
    "what": "A containerized service should stop accepting new work and finish or safely cancel in-flight requests before termination.",
    "how": "The runtime sends a termination signal; the application needs signal-aware shutdown behavior and enough termination grace time. Spring Boot can coordinate graceful web-server shutdown.",
    "code": "docker stop api\n# runtime sends SIGTERM, then escalates after timeout",
    "delivery": "Graceful shutdown matters during rolling deployments because old replicas must drain traffic without losing in-flight work.",
    "followups": [
      {
        "question": "How would you troubleshoot this?",
        "answer": "Graceful shutdown matters during rolling deployments because old replicas must drain traffic without losing in-flight work. I would validate the assumption with logs, configuration, and runtime evidence before changing the design."
      },
      {
        "question": "How would you explain this to an interviewer?",
        "answer": "A common mistake is treating the container like a VM or relying on mutable runtime state. The safer approach is an immutable image, explicit configuration, clear persistence boundaries, and observable runtime behavior."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-035",
    "level": "L3",
    "subtopic": "Production",
    "title": "Docker Restart Policies",
    "what": "Restart policies allow the Docker runtime to restart containers after failures or daemon restarts according to defined rules.",
    "how": "Policies such as unless-stopped or on-failure can improve local/service resilience, but they do not provide full orchestration, health-aware traffic routing, or distributed scheduling.",
    "code": "docker run --restart unless-stopped --name api user-api:1.0",
    "delivery": "I use restart policies for simple runtime recovery, but for multi-node production systems I expect an orchestrator such as Kubernetes.",
    "followups": [
      {
        "question": "Why are multi-stage builds useful beyond image size?",
        "answer": "They create a clean boundary between build-time tooling and runtime content, reducing accidental inclusion of compilers, source, credentials, and development dependencies."
      },
      {
        "question": "Can the final image use a different base family?",
        "answer": "Yes, as long as the runtime contains everything required by the built artifact. For Java, a JRE runtime image can be enough when the application does not need build tools."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-036",
    "level": "L3",
    "subtopic": "Production",
    "title": "Docker BuildKit",
    "what": "BuildKit is Docker’s modern build engine with improved caching, parallelism, and build features.",
    "how": "It can reuse cache across builds and supports advanced build workflows. CI can export/import cache to reduce repeated dependency downloads.",
    "code": "DOCKER_BUILDKIT=1 docker build -t user-api:1.0 .",
    "delivery": "The practical value is faster and more repeatable builds, especially in CI where rebuilding dependencies on every commit is expensive.",
    "followups": [
      {
        "question": "Why might a tiny image be a bad optimization?",
        "answer": "Removing required tools or libraries can make the application fragile or difficult to diagnose. Optimization should preserve correctness and operational needs."
      },
      {
        "question": "What is a good first optimization?",
        "answer": "Use a multi-stage build and copy only the runtime artifact, then choose a supported minimal runtime base appropriate for the application."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-037",
    "level": "L3",
    "subtopic": "Production",
    "title": "Container Image Optimization",
    "what": "Smaller images reduce transfer time, startup overhead, storage use, and often attack surface.",
    "how": "Use a suitable minimal runtime base, multi-stage builds, package cleanup where appropriate, and avoid copying development artifacts into the final image.",
    "code": "build stage: Maven + source\nruntime stage: JRE + JAR only",
    "delivery": "I optimize after measuring. A tiny image is not useful if it becomes impossible to debug or lacks required runtime libraries.",
    "followups": [
      {
        "question": "Why should CI avoid rebuilding per environment?",
        "answer": "Rebuilding creates different artifacts that may have different dependencies or base layers. Promoting one tested image improves consistency between staging and production."
      },
      {
        "question": "Where should environment-specific values live?",
        "answer": "In deployment configuration or a secret/configuration system, injected at runtime rather than baked into the image."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-038",
    "level": "L3",
    "subtopic": "Production",
    "title": "Docker in CI/CD",
    "what": "A typical pipeline builds a versioned image, tests it, scans it, pushes it to a registry, and deploys that immutable artifact.",
    "how": "The key is promotion of the same image rather than rebuilding different images per environment. Environment configuration is injected at deployment time.",
    "code": "git push → test → docker build → scan → docker push → deploy digest",
    "delivery": "The image is the deployable artifact. CI should establish its provenance and deployment should reference the exact artifact that passed validation.",
    "followups": [
      {
        "question": "Why is Compose valuable even if production uses Kubernetes?",
        "answer": "It gives developers a simple reproducible integration environment and teaches service boundaries, networking, configuration, and persistence before cluster orchestration is introduced."
      },
      {
        "question": "What should the browser call in this setup?",
        "answer": "The browser uses the published frontend/API endpoint exposed to the host. The Spring Boot container uses the database service name for internal database traffic."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-039",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "React + Spring Boot + PostgreSQL with Docker",
    "what": "A full-stack local environment can run React, Spring Boot, and PostgreSQL as separate services connected through a Compose network.",
    "how": "The browser reaches the published frontend/backend ports; the Spring Boot container reaches PostgreSQL by service name. Persistent database data belongs in a volume.",
    "code": "services:\n  frontend: {build: ./frontend, ports: [\"3000:80\"]}\n  api: {build: ./backend, ports: [\"8080:8080\"]}\n  db: {image: postgres:16, volumes: [pgdata:/var/lib/postgresql/data]}",
    "delivery": "This mirrors production boundaries without pretending Compose is production Kubernetes. It is a powerful local integration environment.",
    "followups": [
      {
        "question": "Is converting Compose YAML to Kubernetes YAML mechanical?",
        "answer": "No. The concepts map, but Kubernetes separates concerns into resources such as Deployment, Service, ConfigMap, Secret, and probes, and adds cluster scheduling and reconciliation behavior."
      },
      {
        "question": "Why learn Docker first?",
        "answer": "Kubernetes runs container images and depends on concepts such as ports, health, configuration, images, and runtime behavior. Weak Docker fundamentals make Kubernetes debugging much harder."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  },
  {
    "id": "docker-040",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "Docker Compose to Kubernetes",
    "what": "Compose is a convenient local multi-container definition; Kubernetes provides cluster scheduling, self-healing, service discovery, rollout control, and scaling.",
    "how": "The conceptual mapping is service/container intent → Kubernetes Deployment/Pod/Service/ConfigMap/Secret, but the YAML and operational model are different.",
    "code": "Compose: services.api\nKubernetes: Deployment + Service",
    "delivery": "I learn Kubernetes after understanding Docker because Kubernetes is much easier when images, ports, networks, health, and configuration boundaries are already clear.",
    "followups": [
      {
        "question": "Why not restart the API immediately during an incident?",
        "answer": "Restarting can temporarily hide the symptom and destroy useful runtime evidence. First identify the failing boundary, collect logs/metrics, then mitigate safely if necessary."
      },
      {
        "question": "What should be compared after a deployment?",
        "answer": "Compare the running image digest, configuration, dependency versions, health status, resource usage, and traffic/error metrics with the previous healthy release."
      }
    ],
    "traps": [
      "Do not confuse image state with container runtime state.",
      "Do not put secrets into Dockerfiles or image layers."
    ]
  }
];
