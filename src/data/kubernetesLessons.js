export const kubernetesLessons = [
  {
    "id": "k8s-001",
    "level": "L1",
    "subtopic": "Foundations",
    "title": "What is Kubernetes?",
    "what": "Kubernetes is a container orchestration platform that declaratively manages workloads across a cluster. It schedules Pods, maintains desired state, provides service discovery and supports rolling delivery and self-healing.",
    "how": "A control plane stores desired state and controllers continuously reconcile it with observed cluster state. Nodes run workloads through a container runtime and kubelet.",
    "code": "kubectl get nodes\nkubectl get pods -A",
    "delivery": "I describe Kubernetes as a control loop around containers: declare the desired state, then let controllers keep the cluster converged on it.",
    "followups": [
      {
        "question": "Why not run Docker directly?",
        "answer": "Docker can run containers, but Kubernetes adds scheduling, service discovery, rollout, scaling, and reconciliation across many nodes."
      },
      {
        "question": "Is Kubernetes a VM manager?",
        "answer": "No. It orchestrates containerized workloads; the underlying nodes can themselves be VMs or physical machines."
      }
    ],
    "traps": [
      "Do not say Kubernetes replaces Docker in every sense.",
      "Do not treat Pods as permanent servers."
    ]
  },
  {
    "id": "k8s-002",
    "level": "L1",
    "subtopic": "Architecture",
    "title": "Cluster, Control Plane and Nodes",
    "what": "A Kubernetes cluster consists of a control plane that manages cluster state and worker nodes that run workloads.",
    "how": "The API server is the main API entry point. Controllers reconcile resources, the scheduler places Pods, and kubelets execute assigned Pods on nodes.",
    "code": "kubectl get nodes\nkubectl get --raw=/version",
    "delivery": "For an interview I separate management-plane responsibilities from node execution responsibilities and then explain how the API server connects them.",
    "followups": [
      {
        "question": "What does the scheduler do?",
        "answer": "It chooses a suitable node for an unscheduled Pod using resource and placement constraints."
      },
      {
        "question": "What runs on a worker node?",
        "answer": "Typically kubelet, a container runtime, and networking components, plus the Pods scheduled there."
      }
    ],
    "traps": [
      "Do not claim the API server directly starts containers.",
      "Do not confuse kubelet with the scheduler."
    ]
  },
  {
    "id": "k8s-003",
    "level": "L1",
    "subtopic": "Architecture",
    "title": "Pod",
    "what": "A Pod is the smallest deployable unit in Kubernetes and contains one or more containers that share networking and selected storage.",
    "how": "Containers in one Pod share the Pod network namespace and can communicate through localhost. Kubernetes schedules the Pod as one unit.",
    "code": "kubectl run demo --image=nginx:alpine\nkubectl get pod demo -o wide",
    "delivery": "I treat a Pod as the unit of scheduling and co-location, not simply as another name for a container.",
    "followups": [
      {
        "question": "Why can a Pod have multiple containers?",
        "answer": "For tightly coupled processes such as a main application and a sidecar that need shared network or volumes."
      },
      {
        "question": "Should every Pod contain multiple containers?",
        "answer": "No. One main container per Pod is common; multiple containers should have a clear shared-lifecycle reason."
      }
    ],
    "traps": [
      "Do not say Kubernetes schedules individual containers.",
      "Do not use multi-container Pods just to group unrelated services."
    ]
  },
  {
    "id": "k8s-004",
    "level": "L1",
    "subtopic": "Workloads",
    "title": "Deployment",
    "what": "A Deployment manages a set of stateless Pods through ReplicaSets and provides declarative rollout and rollback behavior.",
    "how": "Changing the Pod template creates a new ReplicaSet. The Deployment controller adjusts ReplicaSets until the requested replica and rollout state is reached.",
    "code": "kubectl create deployment api --image=my-api:1.0 --replicas=3\nkubectl rollout status deployment/api",
    "delivery": "A Deployment is my default workload abstraction for stateless Spring Boot or React-serving containers because it handles replica management and rolling updates.",
    "followups": [
      {
        "question": "Deployment vs ReplicaSet?",
        "answer": "The Deployment provides higher-level rollout and revision management; ReplicaSet maintains the desired number of matching Pods."
      },
      {
        "question": "How do you rollback?",
        "answer": "Use kubectl rollout undo deployment/<name> after checking rollout history."
      }
    ],
    "traps": [
      "Do not edit ReplicaSets as the primary deployment interface.",
      "Do not assume rollback restores database schema automatically."
    ]
  },
  {
    "id": "k8s-005",
    "level": "L1",
    "subtopic": "Workloads",
    "title": "ReplicaSet",
    "what": "A ReplicaSet ensures that a specified number of matching Pods are running.",
    "how": "Its controller observes Pods selected by labels and creates or removes Pods to converge on the replica count. Deployments normally own ReplicaSets.",
    "code": "kubectl get rs\nkubectl describe rs <name>",
    "delivery": "I explain ReplicaSet as the replica-maintenance mechanism underneath a Deployment, rather than the resource I normally manage directly.",
    "followups": [
      {
        "question": "What happens if a Pod dies?",
        "answer": "The owning ReplicaSet notices the count is below desired replicas and creates a replacement."
      },
      {
        "question": "Why not use ReplicaSet directly?",
        "answer": "Deployments add revisioned rollouts, rollback, and a stable higher-level lifecycle."
      }
    ],
    "traps": [
      "Do not confuse a ReplicaSet with a Service.",
      "Do not assume it manages traffic routing."
    ]
  },
  {
    "id": "k8s-006",
    "level": "L1",
    "subtopic": "Networking",
    "title": "Service",
    "what": "A Service gives a stable virtual endpoint for a changing set of Pods selected by labels.",
    "how": "The Service selects matching endpoints and kube-proxy or the cluster networking implementation routes traffic toward available backends.",
    "code": "kubectl expose deployment api --port=8080 --target-port=8080\nkubectl get svc api",
    "delivery": "I use a Service so clients depend on a stable name and port instead of individual Pod IP addresses.",
    "followups": [
      {
        "question": "Why are Pod IPs unsuitable for clients?",
        "answer": "Pods are replaceable and their IPs can change during rescheduling or rollout."
      },
      {
        "question": "How does a Service find Pods?",
        "answer": "Through its selector and the corresponding EndpointSlice data."
      }
    ],
    "traps": [
      "Do not say a Service is a process.",
      "Do not hard-code Pod IPs in application configuration."
    ]
  },
  {
    "id": "k8s-007",
    "level": "L1",
    "subtopic": "Networking",
    "title": "ClusterIP vs NodePort vs LoadBalancer",
    "what": "ClusterIP exposes a Service inside the cluster, NodePort exposes a port on nodes, and LoadBalancer integrates with an external load-balancing mechanism when supported.",
    "how": "Choose exposure based on the traffic boundary: internal service-to-service traffic usually uses ClusterIP; external entry commonly uses Ingress or a LoadBalancer service.",
    "code": "kubectl expose deployment api --type=ClusterIP --port=8080\nkubectl get svc",
    "delivery": "I prefer ClusterIP for internal APIs and an Ingress or managed load balancer for north-south HTTP traffic.",
    "followups": [
      {
        "question": "Why avoid NodePort for normal production HTTP?",
        "answer": "It exposes node-level ports and usually provides less expressive routing than an Ingress or gateway."
      },
      {
        "question": "Can LoadBalancer route by URL path?",
        "answer": "The basic Service abstraction is L4-oriented; HTTP path routing is typically handled by an Ingress or gateway."
      }
    ],
    "traps": [
      "Do not equate LoadBalancer with an HTTP reverse proxy.",
      "Do not expose databases through public LoadBalancer services without a strong reason."
    ]
  },
  {
    "id": "k8s-008",
    "level": "L1",
    "subtopic": "Networking",
    "title": "Ingress",
    "what": "Ingress is a Kubernetes API resource for HTTP/HTTPS routing to Services; it requires an Ingress controller or compatible implementation to actually process traffic.",
    "how": "Rules can route by host and path. TLS configuration is commonly attached to the Ingress and implemented by the controller.",
    "code": "kubectl get ingress\nkubectl describe ingress api",
    "delivery": "I separate the Ingress resource from the controller that implements it; the resource expresses desired HTTP routing, while the controller performs it.",
    "followups": [
      {
        "question": "Ingress vs Service?",
        "answer": "A Service provides stable access to Pods; Ingress adds HTTP-aware external routing to one or more Services."
      },
      {
        "question": "What if there is no controller?",
        "answer": "The Ingress object can exist, but no component may act on its rules."
      }
    ],
    "traps": [
      "Do not claim Ingress itself is a load balancer process.",
      "Do not assume all controllers support identical annotations."
    ]
  },
  {
    "id": "k8s-009",
    "level": "L1",
    "subtopic": "Configuration",
    "title": "ConfigMap",
    "what": "A ConfigMap stores non-secret configuration that Pods can consume as environment variables, arguments, or mounted files.",
    "how": "The Pod references the ConfigMap; changing it does not automatically restart every consuming application, and mounted-file update behavior depends on how it is consumed.",
    "code": "kubectl create configmap app-config --from-literal=LOG_LEVEL=INFO\nkubectl get configmap app-config -o yaml",
    "delivery": "I keep environment-specific non-secret settings outside the image and inject them through ConfigMaps or similar configuration mechanisms.",
    "followups": [
      {
        "question": "Should passwords go in ConfigMaps?",
        "answer": "No. Secrets are the intended Kubernetes abstraction for sensitive values, with the caveat that cluster secret handling still requires proper protection."
      },
      {
        "question": "Does changing a ConfigMap restart a Pod?",
        "answer": "Not automatically. Applications may need a rollout when configuration changes require process restart."
      }
    ],
    "traps": [
      "Do not store credentials in ConfigMaps.",
      "Do not assume every application rereads mounted configuration."
    ]
  },
  {
    "id": "k8s-010",
    "level": "L1",
    "subtopic": "Security",
    "title": "Secret",
    "what": "A Secret is a Kubernetes object intended for sensitive configuration such as credentials, tokens, or certificates.",
    "how": "Pods can consume Secrets as environment variables or mounted files. Access is controlled through RBAC and cluster storage should be protected appropriately.",
    "code": "kubectl create secret generic db-creds --from-literal=username=app --from-literal=password=change-me\nkubectl get secret db-creds",
    "delivery": "I treat Secrets as an interface for sensitive configuration, but I still protect RBAC, encryption at rest, secret delivery, and application logs.",
    "followups": [
      {
        "question": "Are Kubernetes Secrets encrypted by default everywhere?",
        "answer": "Base64 encoding is not encryption. Encryption at rest depends on cluster configuration and the storage provider."
      },
      {
        "question": "How should CI deliver secrets?",
        "answer": "Prefer a secret manager or protected CI/CD secret integration rather than committing plaintext credentials to Git."
      }
    ],
    "traps": [
      "Base64 is encoding, not encryption.",
      "Never print secret values in logs or manifests committed to source control."
    ]
  },
  {
    "id": "k8s-011",
    "level": "L1",
    "subtopic": "Configuration",
    "title": "Environment Variables in Pods",
    "what": "Container environment variables let an application read configuration supplied by the workload specification or referenced ConfigMaps and Secrets.",
    "how": "Kubernetes resolves references when creating the container environment. Treat environment variables as process configuration, not as a replacement for secret-management policy.",
    "code": "env:\n- name: SPRING_PROFILES_ACTIVE\n  value: prod",
    "delivery": "I use environment variables for simple runtime configuration and keep the image environment-neutral.",
    "followups": [
      {
        "question": "When prefer mounted files?",
        "answer": "Certificates, large configuration, or applications that already consume file-based configuration can be better served by volumes."
      },
      {
        "question": "Can you change an environment variable in a running container?",
        "answer": "Not in place through the Pod spec; changing it normally requires creating a new container through a rollout."
      }
    ],
    "traps": [
      "Do not bake environment-specific values into images.",
      "Do not assume changing a Deployment spec mutates existing processes."
    ]
  },
  {
    "id": "k8s-012",
    "level": "L1",
    "subtopic": "Health",
    "title": "Readiness Probe",
    "what": "A readiness probe determines whether a Pod should receive traffic.",
    "how": "When readiness fails, the Pod can remain running while its endpoint is removed from Service routing. This is useful during startup, dependency recovery, or controlled draining.",
    "code": "readinessProbe:\n  httpGet: { path: /actuator/health/readiness, port: 8080 }",
    "delivery": "I use readiness to protect users from traffic reaching an application that is alive but not ready to serve requests.",
    "followups": [
      {
        "question": "Does readiness restart the container?",
        "answer": "No. Readiness affects traffic eligibility; liveness is the mechanism commonly used for restart decisions."
      },
      {
        "question": "Why is readiness important during deployment?",
        "answer": "It prevents a new Pod from receiving traffic before the application is actually ready."
      }
    ],
    "traps": [
      "Do not use readiness as a restart mechanism.",
      "Do not make readiness depend on every optional downstream system unless that dependency truly determines serving ability."
    ]
  },
  {
    "id": "k8s-013",
    "level": "L1",
    "subtopic": "Health",
    "title": "Liveness Probe",
    "what": "A liveness probe tells Kubernetes whether a running container is unhealthy enough to restart.",
    "how": "Repeated probe failures can cause kubelet to restart the container according to the workload policy. The check should detect unrecoverable process health, not transient dependency failure.",
    "code": "livenessProbe:\n  httpGet: { path: /actuator/health/liveness, port: 8080 }",
    "delivery": "I keep liveness conservative because a bad probe can turn a recoverable dependency problem into a restart loop.",
    "followups": [
      {
        "question": "Readiness or liveness for a database outage?",
        "answer": "Usually readiness if the application should stop receiving traffic while staying alive; liveness should not restart healthy application processes merely because a dependency is down."
      },
      {
        "question": "What is a restart loop?",
        "answer": "A process starts, fails health or exits, gets restarted, and repeats, often visible through Pod events and container logs."
      }
    ],
    "traps": [
      "Do not put fragile downstream checks into liveness.",
      "Do not assume a failed liveness probe means the application code is definitely broken."
    ]
  },
  {
    "id": "k8s-014",
    "level": "L1",
    "subtopic": "Health",
    "title": "Startup Probe",
    "what": "A startup probe gives a slow-starting application time to initialize before liveness and readiness checks take over.",
    "how": "While startup is failing, Kubernetes delays the other probe behavior. Once startup succeeds, normal liveness/readiness checks apply.",
    "code": "startupProbe:\n  httpGet: { path: /actuator/health, port: 8080 }\n  failureThreshold: 30\n  periodSeconds: 10",
    "delivery": "For a Spring Boot application with slow initialization, I use a startup probe to avoid liveness killing the process before it has finished starting.",
    "followups": [
      {
        "question": "When is startup probe valuable?",
        "answer": "When startup time is variable or long, such as large JVM applications, migrations, or cold caches."
      },
      {
        "question": "Does startup replace readiness?",
        "answer": "No. Startup protects initialization; readiness controls whether traffic should be sent."
      }
    ],
    "traps": [
      "Do not use huge probe thresholds to hide genuine failures.",
      "Do not omit readiness just because startup succeeds."
    ]
  },
  {
    "id": "k8s-015",
    "level": "L2",
    "subtopic": "Scaling",
    "title": "Resource Requests and Limits",
    "what": "Requests express the resources a Pod asks the scheduler to reserve; limits cap resource usage enforced by the node/runtime.",
    "how": "The scheduler uses requests for placement. CPU limits can throttle, while exceeding a memory limit can lead to an OOM kill.",
    "code": "resources:\n  requests: { cpu: \"250m\", memory: \"512Mi\" }\n  limits: { cpu: \"1\", memory: \"1Gi\" }",
    "delivery": "I set requests based on realistic baseline consumption and limits based on safe workload ceilings, then validate with metrics instead of guessing.",
    "followups": [
      {
        "question": "What does the scheduler use?",
        "answer": "Primarily resource requests when deciding whether a Pod fits on a node."
      },
      {
        "question": "What happens when memory exceeds the limit?",
        "answer": "The container can be terminated by the kernel/runtime with an out-of-memory condition."
      }
    ],
    "traps": [
      "Do not set tiny memory limits for JVM services without measuring.",
      "Do not assume CPU limit breaches kill a container like memory breaches can."
    ]
  },
  {
    "id": "k8s-016",
    "level": "L2",
    "subtopic": "Scaling",
    "title": "Horizontal Pod Autoscaler",
    "what": "HPA adjusts the replica count of a scalable workload based on observed metrics and target utilization or values.",
    "how": "The controller periodically reads metrics and changes the workload scale subresource. It needs a metrics source such as Metrics Server for resource metrics.",
    "code": "kubectl autoscale deployment api --min=2 --max=10 --cpu-percent=70\nkubectl get hpa",
    "delivery": "I use HPA when load varies and the application is horizontally scalable, but I also validate that the downstream database and dependencies can absorb the extra concurrency.",
    "followups": [
      {
        "question": "Does HPA scale nodes?",
        "answer": "No. HPA changes workload replicas. Cluster autoscaling is a separate mechanism for node capacity."
      },
      {
        "question": "What if new Pods cannot be scheduled?",
        "answer": "HPA can request more replicas but pending Pods still require available cluster capacity or node scaling."
      }
    ],
    "traps": [
      "Do not confuse HPA with cluster autoscaling.",
      "Do not autoscale stateless APIs without checking downstream capacity."
    ]
  },
  {
    "id": "k8s-017",
    "level": "L2",
    "subtopic": "Scaling",
    "title": "Rolling Update",
    "what": "A rolling update replaces old Pods with new Pods incrementally so the Service can continue serving during deployment.",
    "how": "Deployment strategy parameters such as maxSurge and maxUnavailable control rollout pace and temporary capacity. Readiness determines when new Pods can receive traffic.",
    "code": "kubectl set image deployment/api api=my-api:2.0\nkubectl rollout status deployment/api",
    "delivery": "I combine rolling updates with readiness probes and controlled surge/unavailable settings to reduce deployment risk.",
    "followups": [
      {
        "question": "What does maxUnavailable control?",
        "answer": "The maximum number of Pods that can be unavailable during the rollout relative to the desired count."
      },
      {
        "question": "Why can a rollout appear stuck?",
        "answer": "New Pods may fail readiness, image pulls, scheduling, hooks, or application startup, so I inspect rollout status, Pod events and logs."
      }
    ],
    "traps": [
      "Do not equate a created Pod with a ready Pod.",
      "Do not roll out incompatible API/schema changes blindly."
    ]
  },
  {
    "id": "k8s-018",
    "level": "L2",
    "subtopic": "Delivery",
    "title": "Rollback",
    "what": "A Deployment rollback moves the workload back to a previous ReplicaSet revision.",
    "how": "Kubernetes retains rollout revisions according to its revision history settings. Rollback changes the Pod template back; external database changes are not automatically undone.",
    "code": "kubectl rollout history deployment/api\nkubectl rollout undo deployment/api",
    "delivery": "I treat rollback as application artifact rollback, then separately evaluate schema, data, and external side effects before declaring the whole release reverted.",
    "followups": [
      {
        "question": "How do you verify a rollback?",
        "answer": "Check rollout status, the active image, ready replicas, application health, and key user-facing metrics."
      },
      {
        "question": "Can rollback undo a database migration?",
        "answer": "Not automatically. Database changes require backward-compatible migration strategy or a deliberate database rollback plan."
      }
    ],
    "traps": [
      "Do not assume Kubernetes can reverse data changes.",
      "Do not rollback blindly if the new version already produced irreversible events."
    ]
  },
  {
    "id": "k8s-019",
    "level": "L2",
    "subtopic": "Networking",
    "title": "DNS and Service Discovery",
    "what": "Kubernetes provides DNS records for Services so workloads can resolve stable service names rather than tracking Pod IPs.",
    "how": "A client resolves a Service DNS name to a stable virtual endpoint, while the Service routes to matching endpoints. Namespace-aware names can shorten or qualify lookups.",
    "code": "kubectl exec deploy/api -- getent hosts postgres\n# example: http://orders.default.svc.cluster.local",
    "delivery": "I configure services by DNS name such as http://orders rather than hard-coding cluster IPs.",
    "followups": [
      {
        "question": "What does namespace add to the name?",
        "answer": "A Service can be addressed as service.namespace, with the full cluster DNS name including svc and the cluster domain."
      },
      {
        "question": "Can Pods call each other by Pod IP?",
        "answer": "Technically yes, but it is usually fragile because Pod IPs change."
      }
    ],
    "traps": [
      "Do not use localhost for another Pod.",
      "Do not assume every external DNS name is handled by cluster DNS."
    ]
  },
  {
    "id": "k8s-020",
    "level": "L2",
    "subtopic": "Networking",
    "title": "NetworkPolicy",
    "what": "NetworkPolicy defines allowed Pod traffic at selected network boundaries, provided the cluster networking implementation enforces it.",
    "how": "Policies select Pods and define allowed ingress and/or egress peers and ports. A policy model is usually deny-by-default plus explicit allows for sensitive services.",
    "code": "kubectl get networkpolicy\nkubectl describe networkpolicy api-policy",
    "delivery": "I use NetworkPolicy to reduce lateral movement: allow only the traffic paths the service actually needs.",
    "followups": [
      {
        "question": "Does NetworkPolicy work on every cluster automatically?",
        "answer": "Enforcement depends on the network plugin supporting NetworkPolicy."
      },
      {
        "question": "How would you secure a database?",
        "answer": "Restrict ingress to the application Pods/namespaces and only the required database port, then separately secure credentials and TLS."
      }
    ],
    "traps": [
      "Do not assume creating a policy alone blocks traffic on unsupported networking.",
      "Do not forget egress requirements such as DNS."
    ]
  },
  {
    "id": "k8s-021",
    "level": "L2",
    "subtopic": "Scheduling",
    "title": "Taints and Tolerations",
    "what": "Taints repel Pods from nodes unless those Pods have matching tolerations.",
    "how": "A node can be marked for dedicated or restricted workloads. A toleration permits scheduling but does not by itself force a Pod onto that node.",
    "code": "kubectl taint nodes node1 workload=infra:NoSchedule\n# Pod toleration: workload=infra, effect=NoSchedule",
    "delivery": "I use taints to reserve or protect node pools, then tolerations to allow only intended workloads onto them.",
    "followups": [
      {
        "question": "Do tolerations force placement?",
        "answer": "No. They remove a taint-based scheduling restriction; affinity or node selectors are needed to express positive placement preference."
      },
      {
        "question": "What is NoExecute?",
        "answer": "It can prevent scheduling and can evict existing Pods that do not tolerate the taint."
      }
    ],
    "traps": [
      "Do not say toleration means \u201crun only here\u201d.",
      "Be careful with NoExecute on production nodes."
    ]
  },
  {
    "id": "k8s-022",
    "level": "L2",
    "subtopic": "Scheduling",
    "title": "Node Affinity",
    "what": "Node affinity expresses rules that influence which nodes can host a Pod based on node labels.",
    "how": "Required affinity is a hard scheduling requirement; preferred affinity is a weighted preference. It is useful for hardware, zone, or workload placement.",
    "code": "affinity:\n  nodeAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution: ...",
    "delivery": "I use affinity when placement is part of the workload design, for example zone distribution or specialized hardware.",
    "followups": [
      {
        "question": "Affinity vs nodeSelector?",
        "answer": "nodeSelector is simpler exact label matching; node affinity supports richer required and preferred expressions."
      },
      {
        "question": "Can affinity move a running Pod?",
        "answer": "Changing labels or rules does not automatically migrate an existing Pod; scheduling constraints mainly apply at placement."
      }
    ],
    "traps": [
      "Do not use hostnames as a long-term placement abstraction.",
      "Avoid overly restrictive rules that make Pods permanently pending."
    ]
  },
  {
    "id": "k8s-023",
    "level": "L2",
    "subtopic": "Availability",
    "title": "Pod Disruption Budget",
    "what": "A PodDisruptionBudget limits how many replicas of a workload can be voluntarily disrupted at once.",
    "how": "It helps protect availability during planned node drains or maintenance. It does not prevent every involuntary failure.",
    "code": "kubectl get pdb\nkubectl create pdb api-pdb --min-available=2 --selector=app=api",
    "delivery": "I use PDBs with multiple replicas so maintenance can drain nodes without taking the whole service offline.",
    "followups": [
      {
        "question": "Does PDB prevent node crashes?",
        "answer": "No. It primarily constrains voluntary disruptions such as eviction during maintenance."
      },
      {
        "question": "Why does it need multiple replicas?",
        "answer": "A budget is meaningful when there are multiple interchangeable replicas to preserve availability."
      }
    ],
    "traps": [
      "Do not treat PDB as a replacement for replicas.",
      "Do not set a budget that makes node maintenance impossible."
    ]
  },
  {
    "id": "k8s-024",
    "level": "L2",
    "subtopic": "Storage",
    "title": "PersistentVolume and PersistentVolumeClaim",
    "what": "A PersistentVolume represents storage capacity and a PersistentVolumeClaim is a workload request for storage.",
    "how": "The cluster binds a compatible claim to available or dynamically provisioned storage. Pods mount the claim rather than depending on a node-local path.",
    "code": "kubectl get pv\nkubectl get pvc",
    "delivery": "For stateful workloads I separate the application Pod lifecycle from storage lifecycle and use a PVC backed by an appropriate storage class.",
    "followups": [
      {
        "question": "Why not store database data in the container filesystem?",
        "answer": "The container filesystem is ephemeral and tied to the container lifecycle; durable data needs persistent storage."
      },
      {
        "question": "Who creates the PV?",
        "answer": "It can be provisioned statically by an administrator or dynamically through a StorageClass and CSI driver."
      }
    ],
    "traps": [
      "Do not assume a PVC means local disk.",
      "Do not delete PVCs casually when they contain production data."
    ]
  },
  {
    "id": "k8s-025",
    "level": "L2",
    "subtopic": "Storage",
    "title": "StatefulSet",
    "what": "StatefulSet manages stateful Pods that need stable identity, ordered behavior, or stable storage associations.",
    "how": "Each replica gets a stable ordinal identity and can use per-Pod volume claims. It is suited to databases and clustered systems when the application supports the required operational model.",
    "code": "kubectl get statefulset\nkubectl get pods -l app=postgres",
    "delivery": "I use StatefulSet when stable identity and storage lifecycle matter; I do not use it merely because an application has a database connection.",
    "followups": [
      {
        "question": "StatefulSet vs Deployment?",
        "answer": "StatefulSet provides stable network identity, ordered semantics, and stable storage association; Deployment targets interchangeable stateless replicas."
      },
      {
        "question": "Does StatefulSet make a database highly available automatically?",
        "answer": "No. Database HA still depends on the database architecture and operational tooling."
      }
    ],
    "traps": [
      "Do not claim StatefulSet provides database replication.",
      "Do not treat it as a magic database operator."
    ]
  },
  {
    "id": "k8s-026",
    "level": "L2",
    "subtopic": "Workloads",
    "title": "Job",
    "what": "A Job represents a finite workload that should run to completion rather than stay continuously available.",
    "how": "The Job controller creates Pods until the requested completion count succeeds, with retry behavior for failures.",
    "code": "kubectl create job migration --image=my-api:1.0 -- /app/migrate",
    "delivery": "I use Jobs for finite tasks such as migrations, batch processing, or one-off administrative work.",
    "followups": [
      {
        "question": "Job vs Deployment?",
        "answer": "A Job has a completion goal; a Deployment maintains long-running replicas."
      },
      {
        "question": "What happens after success?",
        "answer": "The Job records completion; Pods may remain according to cleanup policy until removed."
      }
    ],
    "traps": [
      "Do not run a forever-loop as a Job.",
      "Be explicit about idempotency for retried work."
    ]
  },
  {
    "id": "k8s-027",
    "level": "L2",
    "subtopic": "Workloads",
    "title": "CronJob",
    "what": "CronJob creates Jobs on a schedule.",
    "how": "The CronJob controller creates Job objects according to the schedule and concurrency policy, with history limits controlling retained Jobs.",
    "code": "apiVersion: batch/v1\nkind: CronJob\nspec:\n  schedule: \"0 2 * * *\"",
    "delivery": "I use CronJobs for scheduled batch work and make the job itself idempotent because scheduling and retries can create operational edge cases.",
    "followups": [
      {
        "question": "How do you avoid overlapping runs?",
        "answer": "Use an appropriate concurrencyPolicy such as Forbid when overlapping execution is unsafe."
      },
      {
        "question": "Where do you debug a failed CronJob?",
        "answer": "Inspect the CronJob, its created Jobs, Pod events, logs, and container exit codes."
      }
    ],
    "traps": [
      "Do not assume exactly-once execution.",
      "Do not put long-running services into CronJobs."
    ]
  },
  {
    "id": "k8s-028",
    "level": "L2",
    "subtopic": "Security",
    "title": "RBAC",
    "what": "Role-Based Access Control limits which identities can perform which API actions on which resources.",
    "how": "Roles or ClusterRoles define permissions; RoleBindings or ClusterRoleBindings attach them to users, groups, or service accounts.",
    "code": "kubectl auth can-i get pods --as=system:serviceaccount:default:api\nkubectl get rolebindings",
    "delivery": "I follow least privilege: give a workload only the API verbs and resources it actually needs.",
    "followups": [
      {
        "question": "Role vs ClusterRole?",
        "answer": "Role is namespace-scoped; ClusterRole can define cluster-scoped permissions and can also be bound into a namespace."
      },
      {
        "question": "How do you test access?",
        "answer": "kubectl auth can-i is useful for verifying a specific identity and action."
      }
    ],
    "traps": [
      "Do not give applications cluster-admin casually.",
      "Do not confuse Kubernetes RBAC with application authorization."
    ]
  },
  {
    "id": "k8s-029",
    "level": "L2",
    "subtopic": "Security",
    "title": "ServiceAccount",
    "what": "A ServiceAccount provides an identity for Pods when they interact with the Kubernetes API.",
    "how": "A Pod can specify serviceAccountName; projected credentials can then be made available to the workload according to cluster configuration.",
    "code": "kubectl create serviceaccount api\nkubectl get serviceaccount api",
    "delivery": "I use a dedicated ServiceAccount for workloads that need Kubernetes API access and pair it with minimal RBAC.",
    "followups": [
      {
        "question": "Should every application need a ServiceAccount with permissions?",
        "answer": "No. Most applications should have no Kubernetes API permissions unless they actually need them."
      },
      {
        "question": "Why dedicated identities?",
        "answer": "They make permissions auditable and prevent unrelated workloads from sharing broad credentials."
      }
    ],
    "traps": [
      "Do not mount powerful credentials by default.",
      "Do not confuse ServiceAccount identity with end-user identity."
    ]
  },
  {
    "id": "k8s-030",
    "level": "L2",
    "subtopic": "Security",
    "title": "SecurityContext and Non-Root Containers",
    "what": "SecurityContext controls selected Linux security properties such as user/group IDs, privilege escalation, capabilities, and filesystem behavior.",
    "how": "Set a non-root user where possible, drop unnecessary capabilities, and use read-only filesystems when compatible with the application.",
    "code": "securityContext:\n  runAsNonRoot: true\n  allowPrivilegeEscalation: false\n  readOnlyRootFilesystem: true",
    "delivery": "For production I harden the Pod and container security context instead of assuming the image is safe merely because it came from a registry.",
    "followups": [
      {
        "question": "Why run as non-root?",
        "answer": "It reduces the impact of an application compromise by limiting what the process can do inside the container and on the host boundary."
      },
      {
        "question": "What if the application writes to disk?",
        "answer": "Mount a dedicated writable volume such as emptyDir or persistent storage only where needed."
      }
    ],
    "traps": [
      "Do not enable privileged mode without a clear requirement.",
      "Do not assume non-root alone makes an image secure."
    ]
  },
  {
    "id": "k8s-031",
    "level": "L2",
    "subtopic": "Operations",
    "title": "kubectl get/describe/logs/exec",
    "what": "These kubectl commands form the basic Kubernetes debugging workflow: inspect resources, events, logs, and process state.",
    "how": "Start broad with get and describe, then inspect logs and execute only when needed. Use selectors and namespaces to narrow the investigation.",
    "code": "kubectl get pods -n prod\nkubectl describe pod api-xyz -n prod\nkubectl logs api-xyz -n prod\nkubectl exec -it api-xyz -n prod -- sh",
    "delivery": "My first response to an incident is evidence gathering: status, events, image, probes, endpoints, logs, and recent changes before I restart anything.",
    "followups": [
      {
        "question": "Where are scheduling failures visible?",
        "answer": "Pod events from kubectl describe often show insufficient resources, affinity conflicts, image pull problems, or taint issues."
      },
      {
        "question": "How do you inspect a previous crashed container?",
        "answer": "Use kubectl logs <pod> --previous when the container has restarted and previous logs are available."
      }
    ],
    "traps": [
      "Do not jump straight to delete Pod.",
      "Remember namespace context when commands appear to find nothing."
    ]
  },
  {
    "id": "k8s-032",
    "level": "L2",
    "subtopic": "Operations",
    "title": "CrashLoopBackOff",
    "what": "CrashLoopBackOff means a container is repeatedly failing and Kubernetes is backing off between restarts.",
    "how": "Investigate exit codes, previous logs, events, configuration, mounted files, probes, and dependencies before changing restart behavior.",
    "code": "kubectl get pod api-xyz\nkubectl logs api-xyz --previous\nkubectl describe pod api-xyz",
    "delivery": "I treat CrashLoopBackOff as a symptom, not the root cause. I first inspect the previous container logs and events.",
    "followups": [
      {
        "question": "What causes it?",
        "answer": "Application crashes, bad configuration, missing files, failing startup commands, or aggressive probes are common causes."
      },
      {
        "question": "Does Kubernetes itself cause the crash?",
        "answer": "Kubernetes restarts the container according to policy, but the underlying process failure can be in the application or environment."
      }
    ],
    "traps": [
      "Do not solve it by increasing restart delay without finding the cause.",
      "Check the container command and environment, not just application logs."
    ]
  },
  {
    "id": "k8s-033",
    "level": "L2",
    "subtopic": "Operations",
    "title": "Pending Pod",
    "what": "A Pending Pod has not reached running state, often because it cannot be scheduled, its image cannot be prepared, or it is waiting on cluster resources.",
    "how": "Use describe to inspect scheduler events, then check requests, node labels, taints, affinity, PVC binding, and capacity.",
    "code": "kubectl get pods\nkubectl describe pod api-xyz",
    "delivery": "I diagnose Pending from scheduler evidence rather than assuming the image or application is broken.",
    "followups": [
      {
        "question": "What are common causes?",
        "answer": "Insufficient requested resources, unsatisfied affinity, taints, unbound PVCs, or lack of eligible nodes."
      },
      {
        "question": "What is the fastest first command?",
        "answer": "kubectl describe pod usually exposes the latest scheduling events."
      }
    ],
    "traps": [
      "Do not troubleshoot application logs if the container never started.",
      "Do not reduce requests blindly just to force scheduling."
    ]
  },
  {
    "id": "k8s-034",
    "level": "L2",
    "subtopic": "Operations",
    "title": "ImagePullBackOff",
    "what": "ImagePullBackOff means Kubernetes cannot pull the required container image and is backing off retries.",
    "how": "Check the exact image name/tag, registry reachability, imagePullSecrets, credentials, and whether the tag exists.",
    "code": "kubectl describe pod api-xyz\nkubectl get secret image-pull-secret",
    "delivery": "I verify the exact image reference and registry authentication first because the application has not even started yet.",
    "followups": [
      {
        "question": "What does ErrImagePull mean?",
        "answer": "It indicates an image pull attempt failed; ImagePullBackOff means Kubernetes is backing off subsequent attempts."
      },
      {
        "question": "How do private registries work?",
        "answer": "The Pod can reference an imagePullSecret containing registry credentials, subject to appropriate secret handling."
      }
    ],
    "traps": [
      "Do not debug application code before the image is running.",
      "Avoid mutable latest tags for controlled production releases."
    ]
  },
  {
    "id": "k8s-035",
    "level": "L2",
    "subtopic": "Operations",
    "title": "Service Has No Endpoints",
    "what": "A Service with no endpoints means its selector currently matches no ready backend endpoints or the endpoint state is otherwise unavailable.",
    "how": "Compare the Service selector with Pod labels, then inspect readiness and EndpointSlice resources.",
    "code": "kubectl get svc api -o yaml\nkubectl get pods --show-labels\nkubectl get endpointslice -l kubernetes.io/service-name=api",
    "delivery": "I debug Service routing by checking selector \u2192 Pod labels \u2192 readiness \u2192 EndpointSlice rather than changing the Service blindly.",
    "followups": [
      {
        "question": "Can a running Pod be absent from endpoints?",
        "answer": "Yes. A Pod that is not Ready may be excluded from normal Service traffic."
      },
      {
        "question": "What if selectors match no Pods?",
        "answer": "The Service can exist with an empty endpoint set, so clients will have nowhere to route."
      }
    ],
    "traps": [
      "Do not assume Running means Ready.",
      "Check namespaces when comparing selectors and resources."
    ]
  },
  {
    "id": "k8s-036",
    "level": "L2",
    "subtopic": "Operations",
    "title": "Container Port vs Service Port",
    "what": "A container port documents or exposes a port in the Pod spec, targetPort is the backend port, and Service port is the port clients use on the Service.",
    "how": "The Service maps client-facing port to targetPort on selected Pods. ContainerPort is not what makes the process listen.",
    "code": "ports:\n- port: 80\n  targetPort: 8080",
    "delivery": "I verify the application listen port first, then the Service targetPort, then the client-facing Service port.",
    "followups": [
      {
        "question": "Does containerPort publish a port?",
        "answer": "No. It is metadata in the Pod spec; network exposure is provided by Services, Ingress, or other mechanisms."
      },
      {
        "question": "Why do 502s happen here?",
        "answer": "A gateway can reach the Service but fail to connect to the actual backend port or ready endpoint."
      }
    ],
    "traps": [
      "Do not confuse EXPOSE in Docker with Kubernetes Service exposure.",
      "Check protocol as well as port numbers."
    ]
  },
  {
    "id": "k8s-037",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "Namespace Isolation",
    "what": "Namespaces provide logical scope for namespaced Kubernetes resources and can support organizational, policy, and operational boundaries.",
    "how": "Resource names are generally unique within a namespace. RBAC, quotas, and network policies can be scoped or applied around namespaces.",
    "code": "kubectl get pods -n prod\nkubectl create namespace staging",
    "delivery": "I use namespaces to separate environments or teams when that matches the cluster governance model; namespaces are not a complete security boundary by themselves.",
    "followups": [
      {
        "question": "Do namespaces isolate nodes?",
        "answer": "No. Pods from different namespaces can run on the same nodes unless scheduling or policy rules separate them."
      },
      {
        "question": "Can a Service name be duplicated?",
        "answer": "Yes, the same Service name can exist in different namespaces."
      }
    ],
    "traps": [
      "Do not call namespaces a VM-like isolation boundary.",
      "Use RBAC and NetworkPolicy for actual control."
    ]
  },
  {
    "id": "k8s-038",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "ResourceQuota and LimitRange",
    "what": "ResourceQuota limits aggregate resource consumption in a namespace, while LimitRange can apply defaults or constraints to individual Pods/containers.",
    "how": "Quotas protect shared clusters from one namespace consuming everything. LimitRange can ensure workloads specify sane requests and limits.",
    "code": "kubectl get resourcequota -A\nkubectl get limitrange -A",
    "delivery": "For multi-team clusters I combine quotas with sensible per-container defaults so a single workload cannot consume uncontrolled capacity.",
    "followups": [
      {
        "question": "Why use both?",
        "answer": "Quota controls namespace totals; LimitRange controls per-object defaults and bounds."
      },
      {
        "question": "What happens when quota is exhausted?",
        "answer": "New resource creation that would exceed quota can be rejected until capacity is available."
      }
    ],
    "traps": [
      "Do not confuse quota with autoscaling.",
      "Do not set defaults that are too large for the node pool."
    ]
  },
  {
    "id": "k8s-039",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "Pod Topology Spread Constraints",
    "what": "Topology spread constraints distribute Pods across failure domains such as zones or nodes to improve availability.",
    "how": "The scheduler considers topology labels and skew limits when placing replicas. This is stronger and more explicit than hoping replicas land on different nodes.",
    "code": "topologySpreadConstraints:\n- maxSkew: 1\n  topologyKey: topology.kubernetes.io/zone\n  whenUnsatisfiable: DoNotSchedule",
    "delivery": "For a highly available API I spread replicas across zones or nodes so one failure domain does not remove every replica.",
    "followups": [
      {
        "question": "Why not just use replicas=3?",
        "answer": "Three replicas can still land on the same node or zone unless placement rules encourage or require distribution."
      },
      {
        "question": "What is maxSkew?",
        "answer": "It defines how uneven the distribution can be across the selected topology domains."
      }
    ],
    "traps": [
      "Do not spread replicas without ensuring enough topology capacity.",
      "Check actual node labels in the cluster."
    ]
  },
  {
    "id": "k8s-040",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "ServiceAccount Token Projection",
    "what": "Projected service account tokens provide workload identity credentials with controlled audience and expiration characteristics.",
    "how": "Modern clusters can project tokens into Pods and rotate them rather than relying on a long-lived static token. Workloads should request only the permissions they need.",
    "code": "volumes:\n- name: api-token\n  projected:\n    sources:\n    - serviceAccountToken: { path: token, audience: kubernetes }",
    "delivery": "For workload identity I prefer short-lived projected credentials and minimal RBAC over copying static cluster credentials into application configuration.",
    "followups": [
      {
        "question": "Why audience matters?",
        "answer": "It lets a token be intended for a specific recipient so it is less useful if replayed against an unrelated audience."
      },
      {
        "question": "Should applications manage tokens themselves?",
        "answer": "Usually the platform or identity integration should handle projection and rotation; the application simply reads credentials as required."
      }
    ],
    "traps": [
      "Do not log service account tokens.",
      "Do not treat projected tokens as universal cloud credentials."
    ]
  },
  {
    "id": "k8s-041",
    "level": "L3",
    "subtopic": "Delivery",
    "title": "Canary Deployment Strategy",
    "what": "A canary release sends a controlled portion of traffic to a new version before wider rollout.",
    "how": "Kubernetes Deployments can create replicas, but precise percentage traffic splitting often requires an ingress, gateway, service mesh, or progressive delivery controller.",
    "code": "# Example concept\napi-v1: 9 replicas\napi-v2: 1 replica\n# traffic splitting depends on routing layer",
    "delivery": "I distinguish replica-based canaries from true traffic-weighted canaries; the routing layer must control how requests are distributed.",
    "followups": [
      {
        "question": "Is 1 new Pod automatically a 10% canary?",
        "answer": "Not necessarily. Request distribution depends on connection behavior and the routing implementation, not simply replica count."
      },
      {
        "question": "What should you watch?",
        "answer": "Error rate, latency, saturation, business metrics, and logs for the canary before promotion."
      }
    ],
    "traps": [
      "Do not promise exact traffic percentages from replica counts alone.",
      "Have a rollback trigger before increasing traffic."
    ]
  },
  {
    "id": "k8s-042",
    "level": "L3",
    "subtopic": "Delivery",
    "title": "Blue-Green Deployment",
    "what": "Blue-green deployment keeps two versions available and switches traffic from the old environment to the new one.",
    "how": "The traffic switch can be implemented by changing a Service selector or gateway route. It provides fast rollback at the traffic layer but requires capacity for both versions.",
    "code": "# blue and green Deployments\nkubectl patch service api -p ...",
    "delivery": "I use blue-green when rapid cutover and rollback are more important than minimizing duplicate capacity.",
    "followups": [
      {
        "question": "Main trade-off?",
        "answer": "You need enough capacity to run both versions and must manage compatibility with shared state."
      },
      {
        "question": "How is rollback fast?",
        "answer": "Traffic can be switched back to the previous version without rebuilding the old artifact."
      }
    ],
    "traps": [
      "Do not forget database compatibility.",
      "Do not switch traffic before readiness and smoke validation."
    ]
  },
  {
    "id": "k8s-043",
    "level": "L3",
    "subtopic": "Reliability",
    "title": "Graceful Pod Termination",
    "what": "When a Pod is deleted or evicted, Kubernetes can run termination hooks and gives the container a termination grace period before forceful termination.",
    "how": "The workload should stop accepting new work and finish in-flight requests within the grace period. Readiness and application shutdown behavior should cooperate.",
    "code": "terminationGracePeriodSeconds: 30\npreStop:\n  exec: { command: [\"/bin/sh\",\"-c\",\"sleep 5\"] }",
    "delivery": "I design shutdown as part of availability: stop receiving traffic, drain work, close resources, and exit before the grace period expires.",
    "followups": [
      {
        "question": "Why can requests be dropped?",
        "answer": "If the application exits before in-flight requests complete, or traffic is still being routed during termination."
      },
      {
        "question": "What does SIGTERM do?",
        "answer": "The container process is normally sent SIGTERM first, allowing graceful shutdown before a forceful kill if it exceeds the grace period."
      }
    ],
    "traps": [
      "Do not rely only on preStop sleeps.",
      "Test shutdown behavior under real load."
    ]
  },
  {
    "id": "k8s-044",
    "level": "L3",
    "subtopic": "Reliability",
    "title": "Pod Eviction and Node Drain",
    "what": "Node drain safely prepares a node for maintenance by evicting eligible Pods while respecting disruption rules.",
    "how": "kubectl drain cordons the node and evicts workloads according to Kubernetes disruption behavior; controllers then recreate Pods elsewhere if possible.",
    "code": "kubectl cordon node-1\nkubectl drain node-1 --ignore-daemonsets",
    "delivery": "I use drain for planned maintenance and verify capacity, PDBs, and workload distribution before removing a node.",
    "followups": [
      {
        "question": "Why might drain fail?",
        "answer": "PDB constraints, unmanaged Pods, local storage, or insufficient replacement capacity can block or complicate draining."
      },
      {
        "question": "What is cordon?",
        "answer": "It marks a node unschedulable for new Pods while existing Pods continue running until changed or evicted."
      }
    ],
    "traps": [
      "Do not drain production nodes without checking capacity.",
      "DaemonSets are handled differently during drain."
    ]
  },
  {
    "id": "k8s-045",
    "level": "L3",
    "subtopic": "Observability",
    "title": "Kubernetes Events",
    "what": "Events record cluster activity such as scheduling failures, image pulls, probe failures, and evictions.",
    "how": "Events are time-sensitive operational evidence. They complement, rather than replace, application logs and metrics.",
    "code": "kubectl get events -A --sort-by=.lastTimestamp\nkubectl describe pod api-xyz",
    "delivery": "During incident response I inspect events early because they often explain why a Pod never started or why Kubernetes changed its state.",
    "followups": [
      {
        "question": "Are events permanent logs?",
        "answer": "No. Retention and availability depend on cluster configuration; use centralized observability for durable history."
      },
      {
        "question": "What do events not tell you?",
        "answer": "They rarely provide the detailed application-level root cause that logs and traces provide."
      }
    ],
    "traps": [
      "Do not treat events as a complete audit trail.",
      "Use namespace filtering to reduce noise."
    ]
  },
  {
    "id": "k8s-046",
    "level": "L3",
    "subtopic": "Observability",
    "title": "Metrics and the Metrics API",
    "what": "Kubernetes autoscaling and operational tooling can consume resource metrics exposed through a metrics pipeline such as Metrics Server.",
    "how": "Metrics sources collect CPU and memory observations; HPA uses the configured metric values to calculate desired replicas.",
    "code": "kubectl top pods\nkubectl top nodes\nkubectl get --raw \"/apis/metrics.k8s.io/v1beta1/nodes\"",
    "delivery": "I separate platform resource metrics from business and application metrics; HPA needs the former, while production diagnosis usually needs all three.",
    "followups": [
      {
        "question": "Why is kubectl top empty?",
        "answer": "The metrics pipeline may be missing, unhealthy, or not yet have data."
      },
      {
        "question": "Can HPA scale on custom metrics?",
        "answer": "Yes, with the appropriate metrics adapter and configuration; resource metrics are only one option."
      }
    ],
    "traps": [
      "Do not use CPU alone as a proxy for business load.",
      "Validate metric freshness before acting."
    ]
  },
  {
    "id": "k8s-047",
    "level": "L3",
    "subtopic": "Security",
    "title": "Image Security in Kubernetes",
    "what": "Kubernetes executes container images, so supply-chain controls such as trusted registries, scanning, signing, provenance, and immutable references reduce deployment risk.",
    "how": "CI should build and scan images, then deployment should use controlled artifacts. Admission policies can enforce organizational rules in suitable platforms.",
    "code": "image: registry.example.com/api@sha256:...",
    "delivery": "I prefer immutable image digests for production promotion and enforce image provenance and vulnerability policy before deployment.",
    "followups": [
      {
        "question": "Tag vs digest?",
        "answer": "A tag is mutable; a digest identifies the exact image content."
      },
      {
        "question": "Where should scanning happen?",
        "answer": "Ideally before promotion into production, with runtime or admission controls as an additional defense."
      }
    ],
    "traps": [
      "Do not trust latest as a release identifier.",
      "Scanning alone does not guarantee exploit-free software."
    ]
  },
  {
    "id": "k8s-048",
    "level": "L3",
    "subtopic": "Security",
    "title": "Pod Security Standards",
    "what": "Pod Security Standards define baseline and restricted security profiles for common Pod security controls.",
    "how": "Namespace-level enforcement can prevent workloads from requesting unsafe capabilities or privileged behavior, depending on policy configuration.",
    "code": "kubectl label namespace prod pod-security.kubernetes.io/enforce=restricted",
    "delivery": "I use Pod Security Standards as a cluster governance baseline, then make application-specific exceptions explicit and audited.",
    "followups": [
      {
        "question": "What does restricted aim to prevent?",
        "answer": "It requires a stronger hardened posture, such as avoiding privileged containers and unsafe host access."
      },
      {
        "question": "Does it scan images?",
        "answer": "No. Pod security policy controls runtime configuration; image scanning is a separate supply-chain control."
      }
    ],
    "traps": [
      "Do not confuse Pod security with RBAC.",
      "Test policy changes against existing workloads before enforcement."
    ]
  },
  {
    "id": "k8s-049",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "Operator and Controller Pattern",
    "what": "A Kubernetes controller watches resources and reconciles actual state toward desired state; an operator packages domain-specific operational knowledge into such controllers.",
    "how": "The controller watches API objects, computes desired actions, and updates resources or external systems. Operators are common for complex stateful systems.",
    "code": "kubectl get crd\nkubectl get pods -l app.kubernetes.io/managed-by=operator",
    "delivery": "I see operators as automation around the Kubernetes reconciliation model, useful when lifecycle management requires domain-specific logic.",
    "followups": [
      {
        "question": "Controller vs operator?",
        "answer": "A controller is the general reconciliation pattern; an operator is commonly a controller plus domain-specific operational knowledge."
      },
      {
        "question": "Why use an operator for a database?",
        "answer": "It can automate backups, failover, upgrades, and topology decisions that generic StatefulSet primitives do not understand."
      }
    ],
    "traps": [
      "Do not install operators without understanding their permissions.",
      "An operator does not remove the need to understand the underlying database."
    ]
  },
  {
    "id": "k8s-050",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "CRD",
    "what": "A CustomResourceDefinition extends the Kubernetes API with a new resource type that stores domain-specific desired state.",
    "how": "A controller watches the custom resource and reconciles it. The CRD alone defines storage/schema; it does not implement behavior.",
    "code": "kubectl get crd\nkubectl explain <custom-resource>",
    "delivery": "I explain CRDs as API extension plus controller reconciliation: the CRD defines the object, while the controller gives it behavior.",
    "followups": [
      {
        "question": "CRD without controller?",
        "answer": "The API can accept and store the custom resource, but no custom automation occurs unless another component watches it."
      },
      {
        "question": "Why use CRDs?",
        "answer": "They let platform teams model repeatable operational concepts through the Kubernetes API."
      }
    ],
    "traps": [
      "Do not call a CRD an operator.",
      "Do not grant controller permissions broader than required."
    ]
  },
  {
    "id": "k8s-051",
    "level": "L3",
    "subtopic": "Operations",
    "title": "Debugging a 502 Through Ingress",
    "what": "A 502 from an ingress or gateway usually means the proxy could not successfully communicate with the selected backend.",
    "how": "Trace the path: client \u2192 Ingress \u2192 Service \u2192 EndpointSlice \u2192 Pod \u2192 application listen port. Check readiness, targetPort, protocol, network policy, and application logs.",
    "code": "kubectl get ingress,svc,endpointslice\nkubectl describe ingress api\nkubectl exec deploy/api -- curl -v http://api:8080/actuator/health",
    "delivery": "I debug a 502 hop by hop and identify the first boundary where the expected response disappears.",
    "followups": [
      {
        "question": "What if Service endpoints are healthy?",
        "answer": "Then inspect target port, protocol, network policy, application listener, and gateway configuration."
      },
      {
        "question": "Why can curl from a Pod help?",
        "answer": "It separates cluster routing problems from the application or upstream gateway path."
      }
    ],
    "traps": [
      "Do not restart everything first.",
      "A 502 is a symptom at the proxy boundary, not a diagnosis."
    ]
  },
  {
    "id": "k8s-052",
    "level": "L3",
    "subtopic": "Operations",
    "title": "Debugging DNS Failure",
    "what": "A DNS failure means name resolution is failing before normal service routing can occur.",
    "how": "Check the Pod resolver configuration, CoreDNS health, Service name/namespace, and whether the target name exists.",
    "code": "kubectl exec deploy/api -- cat /etc/resolv.conf\nkubectl exec deploy/api -- nslookup api.default.svc.cluster.local",
    "delivery": "I distinguish DNS failure from connection refusal: first prove the name resolves, then test TCP/HTTP connectivity.",
    "followups": [
      {
        "question": "What if DNS resolves but connection fails?",
        "answer": "Then investigate Service endpoints, ports, network policy, and the backend listener rather than CoreDNS."
      },
      {
        "question": "What is CoreDNS?",
        "answer": "It is commonly the cluster DNS service that serves Kubernetes DNS records."
      }
    ],
    "traps": [
      "Do not change Service ports to fix a pure DNS problem.",
      "Remember namespace qualification."
    ]
  },
  {
    "id": "k8s-053",
    "level": "L3",
    "subtopic": "Operations",
    "title": "Debugging a Slow API in Kubernetes",
    "what": "Latency can come from application code, CPU throttling, GC, database saturation, network hops, noisy neighbors, or overloaded nodes.",
    "how": "Correlate request latency with Pod metrics, JVM metrics, database timings, and traces. Compare replicas and node placement before scaling blindly.",
    "code": "kubectl top pods\nkubectl top nodes\nkubectl get pods -o wide",
    "delivery": "I start with the latency budget and traces, then use Kubernetes metrics to determine whether the bottleneck is application, resource, node, or dependency related.",
    "followups": [
      {
        "question": "Would increasing replicas always help?",
        "answer": "No. If the database or downstream service is the bottleneck, more replicas can increase contention."
      },
      {
        "question": "How can CPU limits hurt latency?",
        "answer": "A low CPU limit can throttle a busy JVM and increase response time even when node-level CPU looks available."
      }
    ],
    "traps": [
      "Do not treat Kubernetes as the root cause by default.",
      "Check downstream saturation before scaling."
    ]
  },
  {
    "id": "k8s-054",
    "level": "L3",
    "subtopic": "Architecture",
    "title": "Multi-Environment Kubernetes Strategy",
    "what": "A production setup commonly separates environments through namespaces, clusters, or both depending on isolation and governance needs.",
    "how": "Choose boundaries based on blast radius, compliance, cost, operational complexity, and access controls. Use manifests or Helm/Kustomize-style configuration to keep environment differences explicit.",
    "code": "kubectl config get-contexts\nkubectl config current-context",
    "delivery": "I prefer strong production isolation where the risk justifies it, while keeping configuration reproducible and avoiding environment-specific manual edits.",
    "followups": [
      {
        "question": "Namespace vs cluster for prod?",
        "answer": "A separate cluster gives stronger blast-radius and control-plane isolation; namespaces are cheaper but share cluster infrastructure."
      },
      {
        "question": "How do you avoid manifest drift?",
        "answer": "Keep declarative configuration in Git and promote reviewed changes through environments."
      }
    ],
    "traps": [
      "Do not assume namespaces provide complete environment isolation.",
      "Avoid manual kubectl edits as the deployment system of record."
    ]
  },
  {
    "id": "k8s-055",
    "level": "L3",
    "subtopic": "Delivery",
    "title": "GitOps Deployment Model",
    "what": "GitOps treats declarative cluster configuration in Git as the desired state and uses an agent/controller to reconcile the cluster toward it.",
    "how": "A change is reviewed and merged in Git; the GitOps controller observes the desired state and applies it to the cluster. Drift can be detected and corrected.",
    "code": "git commit -am \"deploy api 2.1\"\n# GitOps controller reconciles desired state",
    "delivery": "I like GitOps because the deployment history, review process, and desired cluster configuration are versioned together.",
    "followups": [
      {
        "question": "How is this different from CI pushing kubectl commands?",
        "answer": "GitOps uses the cluster-side controller to pull or reconcile desired state, while a CI job may actively push changes into the cluster."
      },
      {
        "question": "What about secrets?",
        "answer": "Use encrypted or external secret mechanisms rather than plaintext credentials in Git."
      }
    ],
    "traps": [
      "Do not commit plaintext secrets.",
      "Do not assume GitOps removes the need for access control."
    ]
  },
  {
    "id": "k8s-056",
    "level": "L3",
    "subtopic": "Delivery",
    "title": "Kubernetes Deployment Strategies with Immutable Images",
    "what": "Immutable images make a deployment reference a specific artifact rather than a mutable tag.",
    "how": "CI builds once, scans and signs the image, pushes it, and deployment references its digest. Promotion changes configuration, not the binary artifact.",
    "code": "image: registry.example.com/api@sha256:abc...",
    "delivery": "For production I separate build from deploy: CI produces one immutable artifact, and each environment promotes that same artifact.",
    "followups": [
      {
        "question": "Why is rebuilding per environment risky?",
        "answer": "Different builds can produce different binaries, undermining reproducibility and making rollback less certain."
      },
      {
        "question": "Where does configuration live?",
        "answer": "Outside the image, through Kubernetes configuration, secrets, or external configuration systems."
      }
    ],
    "traps": [
      "Do not use environment-specific Docker builds without a reason.",
      "Keep provenance from source commit to image digest."
    ]
  },
  {
    "id": "k8s-057",
    "level": "L3",
    "subtopic": "Reliability",
    "title": "Zero-Downtime Deployment Checklist",
    "what": "Zero-downtime deployment requires capacity, readiness, graceful shutdown, backward compatibility, and controlled rollout rather than a single Kubernetes flag.",
    "how": "Validate at least two ready replicas, correct probes, rolling strategy, connection draining, compatible API/schema changes, and monitoring before release.",
    "code": "kubectl rollout status deployment/api\nkubectl get pods -l app=api\nkubectl get endpointslice -l kubernetes.io/service-name=api",
    "delivery": "I define zero downtime as preserving the user-facing availability objective during a change, then verify every dependency that can violate it.",
    "followups": [
      {
        "question": "What commonly breaks zero downtime?",
        "answer": "Insufficient replicas, broken readiness, incompatible schema changes, dropped connections, or a dependency outage."
      },
      {
        "question": "Is replicas=2 enough?",
        "answer": "It helps but is not sufficient by itself; placement, readiness, capacity, and application shutdown behavior still matter."
      }
    ],
    "traps": [
      "Do not equate rolling update with zero downtime.",
      "Measure availability instead of assuming it."
    ]
  },
  {
    "id": "k8s-058",
    "level": "L3",
    "subtopic": "Incident",
    "title": "Pod OOMKilled Investigation",
    "what": "OOMKilled means a container or node experienced memory pressure severe enough that the process was terminated.",
    "how": "Check container memory usage, limits, JVM heap sizing, off-heap/native memory, leaks, request/limit settings, and node pressure.",
    "code": "kubectl describe pod api-xyz\nkubectl top pod api-xyz\nkubectl get pod api-xyz -o jsonpath=\"{.status.containerStatuses[*].lastState.terminated.reason}\"",
    "delivery": "For a JVM OOM I separate heap pressure from container-limit pressure and node pressure before changing the heap or Kubernetes limit.",
    "followups": [
      {
        "question": "Why can a JVM OOM even below Xmx?",
        "answer": "Native memory, metaspace, threads, direct buffers, and other process memory consume the container budget."
      },
      {
        "question": "What is the first evidence?",
        "answer": "The Pod status and container termination reason, followed by memory metrics and JVM diagnostics."
      }
    ],
    "traps": [
      "Do not blindly double memory limits.",
      "Keep JVM sizing aligned with container limits and workload behavior."
    ]
  },
  {
    "id": "k8s-059",
    "level": "L3",
    "subtopic": "Incident",
    "title": "Node NotReady Investigation",
    "what": "A NotReady node cannot reliably accept or host workloads until its kubelet and node health recover.",
    "how": "Check node conditions, kubelet status, resource pressure, networking, runtime health, and recent infrastructure changes.",
    "code": "kubectl get nodes\nkubectl describe node node-1\nkubectl get pods -o wide --all-namespaces",
    "delivery": "I first determine whether the problem is node-local infrastructure or a cluster-wide control-plane issue, then assess affected workloads and capacity.",
    "followups": [
      {
        "question": "What happens to Pods?",
        "answer": "Controllers may reschedule eligible workloads onto healthy nodes if capacity and constraints permit."
      },
      {
        "question": "Why can rescheduling fail?",
        "answer": "Insufficient capacity, restrictive affinity, taints, PDBs, or storage constraints can prevent replacement."
      }
    ],
    "traps": [
      "Do not delete a NotReady node immediately.",
      "Check whether stateful workloads have storage constraints."
    ]
  },
  {
    "id": "k8s-060",
    "level": "L3",
    "subtopic": "Production",
    "title": "Kubernetes Production Readiness Review",
    "what": "A production-ready workload needs secure images, resource sizing, health probes, graceful shutdown, observability, network controls, RBAC, and a tested delivery/rollback process.",
    "how": "Review the workload from build artifact through runtime: image provenance, config, probes, requests/limits, security context, service exposure, policy, logs/metrics/traces, and disaster procedures.",
    "code": "kubectl get deploy,svc,pdb,networkpolicy -n prod\nkubectl get events -n prod",
    "delivery": "I use a repeatable readiness checklist instead of declaring a service production-ready because its Pods are Running.",
    "followups": [
      {
        "question": "What is often missed?",
        "answer": "Graceful shutdown, resource requests, rollback validation, secret handling, network policy, and dependency failure behavior."
      },
      {
        "question": "How do you prove readiness?",
        "answer": "Run failure drills and deployment tests, not just static manifest review."
      }
    ],
    "traps": [
      "Running is not the same as production-ready.",
      "Do not skip rollback and recovery tests."
    ]
  }
];
