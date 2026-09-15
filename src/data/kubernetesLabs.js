export const kubernetesLabs = [
  {
    "id": "k8slab-001",
    "level": "L2",
    "kind": "Build",
    "title": "Deploy Spring Boot API to Kubernetes",
    "objective": "Create a Deployment and Service for a Spring Boot API, add readiness/liveness probes, requests/limits, and verify traffic.",
    "approach": "Write deployment/service manifests, apply them, inspect rollout status, and call the Service.",
    "code": "kubectl apply -f k8s/\nkubectl rollout status deploy/api\nkubectl get pods,svc",
    "delivery": "I can explain every field and debug the request path from Service to Pod.",
    "followups": [
      {
        "question": "What proves readiness?",
        "answer": "The readiness probe succeeds and the Pod appears as a ready endpoint."
      }
    ],
    "traps": [
      "Do not expose the Pod IP directly."
    ]
  },
  {
    "id": "k8slab-002",
    "level": "L2",
    "kind": "Build",
    "title": "React + API on Kubernetes",
    "objective": "Run the React frontend and Spring Boot API as separate Deployments with Services and route browser traffic through an HTTP entry point.",
    "approach": "Keep API configuration environment-aware and verify browser-to-gateway-to-Service routing.",
    "code": "kubectl get deploy,svc,ingress\nkubectl describe ingress web",
    "delivery": "I separate static frontend delivery from API routing and keep backend service discovery internal.",
    "followups": [
      {
        "question": "Where should CORS be handled?",
        "answer": "At the application/gateway boundary based on the browser origin requirements."
      }
    ],
    "traps": [
      "Do not use localhost for browser-to-cluster API calls in production."
    ]
  },
  {
    "id": "k8slab-003",
    "level": "L2",
    "kind": "Build",
    "title": "ConfigMap + Secret Configuration",
    "objective": "Move Spring profiles, database URL, username, and password out of the image into Kubernetes configuration.",
    "approach": "Create ConfigMap and Secret, reference them from the Deployment, restart safely, and verify the application receives the expected values.",
    "code": "kubectl create configmap api-config --from-literal=SPRING_PROFILES_ACTIVE=prod\nkubectl create secret generic db-creds --from-literal=password=change-me",
    "delivery": "I keep images environment-neutral and inject configuration at deployment time.",
    "followups": [
      {
        "question": "Why not bake config into the image?",
        "answer": "It couples the artifact to an environment and makes secret leakage easier."
      }
    ],
    "traps": [
      "Never commit plaintext secret manifests."
    ]
  },
  {
    "id": "k8slab-004",
    "level": "L2",
    "kind": "Build",
    "title": "Production Probes + Graceful Shutdown",
    "objective": "Add startup, readiness, and liveness probes plus graceful termination behavior to a Spring Boot service.",
    "approach": "Use Actuator endpoints, realistic thresholds, and a termination grace period; test slow startup and rolling restart.",
    "code": "kubectl rollout restart deploy/api\nkubectl get pods -w",
    "delivery": "I can demonstrate that readiness protects traffic while startup and liveness protect lifecycle.",
    "followups": [
      {
        "question": "What happens during rollout?",
        "answer": "New Pods become endpoints only after readiness succeeds while old Pods are terminated according to rollout rules."
      }
    ],
    "traps": [
      "Do not make liveness depend on the database."
    ]
  },
  {
    "id": "k8slab-005",
    "level": "L2",
    "kind": "Build",
    "title": "HPA Under Load",
    "objective": "Deploy a stateless API with CPU requests and an HPA, then generate load and observe replicas.",
    "approach": "Install/verify metrics, configure HPA min/max and target, generate traffic, and inspect scaling decisions.",
    "code": "kubectl get hpa -w\nkubectl top pods",
    "delivery": "I explain HPA as a feedback loop and verify downstream capacity before increasing replicas.",
    "followups": [
      {
        "question": "Why might HPA not scale?",
        "answer": "Missing metrics, incorrect requests, insufficient load, or unsupported metric configuration."
      }
    ],
    "traps": [
      "Do not load-test a production database casually."
    ]
  },
  {
    "id": "k8slab-006",
    "level": "L2",
    "kind": "Build",
    "title": "Persistent Storage with StatefulSet",
    "objective": "Deploy a stateful sample using StatefulSet and PVCs, then verify data survives Pod recreation.",
    "approach": "Create StorageClass/PVC or use a cluster-provided class, mount storage, write data, delete the Pod, and verify persistence.",
    "code": "kubectl get pvc\nkubectl get statefulset",
    "delivery": "I distinguish stable storage identity from application-level database replication.",
    "followups": [
      {
        "question": "Does StatefulSet create backups?",
        "answer": "No. Backups remain an explicit operational concern."
      }
    ],
    "traps": [
      "Do not delete PVCs during cleanup without checking data."
    ]
  },
  {
    "id": "k8slab-007",
    "level": "L2",
    "kind": "Debug",
    "title": "Pending Pod",
    "objective": "Diagnose a Pod that stays Pending because its resource request or scheduling constraints cannot be satisfied.",
    "approach": "Use describe events, inspect node capacity, labels, taints, affinity, and requests; fix the actual constraint.",
    "code": "kubectl describe pod api-xyz\nkubectl get nodes -o wide",
    "delivery": "I identify the scheduler rejection before modifying the workload.",
    "followups": [
      {
        "question": "Where is the reason?",
        "answer": "Pod events usually contain the scheduling explanation."
      }
    ],
    "traps": [
      "Do not reduce requests blindly."
    ]
  },
  {
    "id": "k8slab-008",
    "level": "L2",
    "kind": "Debug",
    "title": "CrashLoopBackOff",
    "objective": "Diagnose a Spring Boot Pod repeatedly restarting because of a bad environment variable or startup failure.",
    "approach": "Inspect previous logs, exit code, events, env/config references, and probes; correct the root cause and verify rollout.",
    "code": "kubectl logs api-xyz --previous\nkubectl describe pod api-xyz",
    "delivery": "I use previous logs first because the failing process may have already restarted.",
    "followups": [
      {
        "question": "Why --previous?",
        "answer": "It retrieves logs from the previous terminated container instance when available."
      }
    ],
    "traps": [
      "Do not simply delete the Pod repeatedly."
    ]
  },
  {
    "id": "k8slab-009",
    "level": "L2",
    "kind": "Debug",
    "title": "ImagePullBackOff",
    "objective": "Fix a workload that cannot pull a private registry image.",
    "approach": "Verify image name/digest, registry reachability, imagePullSecret, ServiceAccount references, and credentials.",
    "code": "kubectl describe pod api-xyz\nkubectl get secret image-pull-secret",
    "delivery": "I prove the registry/authentication boundary before touching application code.",
    "followups": [
      {
        "question": "What is imagePullSecret for?",
        "answer": "It supplies registry credentials used to pull private images."
      }
    ],
    "traps": [
      "Do not put registry passwords in Git."
    ]
  },
  {
    "id": "k8slab-010",
    "level": "L2",
    "kind": "Debug",
    "title": "Service Has No Endpoints",
    "objective": "Find why a Service has no backend endpoints even though Pods appear Running.",
    "approach": "Compare selector labels, namespace, readiness state, and EndpointSlice membership.",
    "code": "kubectl get svc api -o yaml\nkubectl get pods --show-labels\nkubectl get endpointslice",
    "delivery": "I follow selector \u2192 labels \u2192 readiness \u2192 endpoints.",
    "followups": [
      {
        "question": "Can Running be unready?",
        "answer": "Yes; readiness is separate from process running state."
      }
    ],
    "traps": [
      "Do not change Service type first."
    ]
  },
  {
    "id": "k8slab-011",
    "level": "L2",
    "kind": "Debug",
    "title": "Ingress 502",
    "objective": "Diagnose a 502 by tracing Ingress to Service to Pod port.",
    "approach": "Check Ingress rules, Service targetPort, EndpointSlice, network policy, application listener, and logs.",
    "code": "kubectl describe ingress api\nkubectl get svc,endpointslice\nkubectl exec deploy/api -- curl -v http://api:8080/actuator/health",
    "delivery": "I isolate the first failing network hop.",
    "followups": [
      {
        "question": "What does 502 mean?",
        "answer": "The proxy/gateway could not successfully obtain a valid upstream response."
      }
    ],
    "traps": [
      "Do not assume the Ingress controller is the root cause."
    ]
  },
  {
    "id": "k8slab-012",
    "level": "L3",
    "kind": "Architecture",
    "title": "Design a Production Spring Boot Platform",
    "objective": "Design namespaces, ingress, Deployments, Services, probes, resource policies, HPA, PDB, RBAC, secrets, network policy, observability, and rollback for a Spring Boot microservice platform.",
    "approach": "Produce a manifest structure and explain build \u2192 registry \u2192 deploy \u2192 monitor \u2192 rollback.",
    "code": "Namespace \u2192 Deployment \u2192 Service \u2192 Ingress\nConfigMap/Secret \u2192 Pod\nHPA/PDB \u2192 availability",
    "delivery": "I would explain the platform as a set of independent safety controls rather than one Kubernetes manifest.",
    "followups": [
      {
        "question": "What is the rollback unit?",
        "answer": "The application image/config revision, while database compatibility is handled separately."
      }
    ],
    "traps": [
      "Do not make Kubernetes the only resilience layer."
    ]
  },
  {
    "id": "k8slab-013",
    "level": "L3",
    "kind": "Architecture",
    "title": "Docker Compose to Kubernetes",
    "objective": "Take the V14 React + Spring Boot + PostgreSQL Compose model and map it to Kubernetes primitives.",
    "approach": "Map services to Deployments/StatefulSets, ports to Services, env to ConfigMaps/Secrets, health checks to probes, and volumes to PVCs.",
    "code": "Compose service \u2192 Deployment/StatefulSet\nports \u2192 Service\nvolumes \u2192 PVC",
    "delivery": "I explain the migration as a change in operational primitives, not a mechanical YAML translation.",
    "followups": [
      {
        "question": "What does depends_on become?",
        "answer": "Readiness, startup behavior, service discovery, and application retry logic rather than a simple startup ordering flag."
      }
    ],
    "traps": [
      "Do not assume Kubernetes waits for database readiness automatically."
    ]
  },
  {
    "id": "k8slab-014",
    "level": "L3",
    "kind": "Architecture",
    "title": "Multi-Zone API Design",
    "objective": "Design an API deployment resilient to one node or zone failure.",
    "approach": "Use replicas, topology spread/affinity, PDB, readiness, and sufficient capacity; validate the Service routes only ready Pods.",
    "code": "topology.kubernetes.io/zone\nreplicas: 6\npdb minAvailable: 4",
    "delivery": "I design for failure domains first and then validate the rollout and drain behavior.",
    "followups": [
      {
        "question": "Why six replicas?",
        "answer": "The number is an example chosen to allow distribution and maintenance; the real count comes from availability and capacity requirements."
      }
    ],
    "traps": [
      "Do not assume replicas are automatically spread."
    ]
  },
  {
    "id": "k8slab-015",
    "level": "L3",
    "kind": "Incident",
    "title": "Production Deployment Failure Drill",
    "objective": "Simulate a bad image rollout and recover safely without losing availability.",
    "approach": "Deploy a broken image, observe rollout failure, inspect Pods/events, stop or rollback the rollout, and verify healthy revision.",
    "code": "kubectl rollout status deploy/api\nkubectl rollout undo deploy/api\nkubectl rollout history deploy/api",
    "delivery": "I would stop promotion based on readiness/error signals and rollback the immutable application artifact.",
    "followups": [
      {
        "question": "What about DB changes?",
        "answer": "Use backward-compatible migration patterns so application rollback remains safe."
      }
    ],
    "traps": [
      "Do not delete all replicas to recover."
    ]
  }
];
