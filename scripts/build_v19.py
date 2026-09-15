from pathlib import Path
import re, zipfile, shutil
root=Path('/mnt/data/v19work')
src=root/'src'

titles=[
('Foundations','AWS vs Azure vs GCP: how do you choose?','Cloud choice should follow workload, team skills, existing contracts, regional needs, and managed-service requirements.'),
('Foundations','What is an AWS Region and Availability Zone?','A Region is a geographic area containing multiple isolated Availability Zones; AZ separation supports high availability.'),
('Foundations','What is the shared responsibility model?','The provider secures the cloud infrastructure while the customer secures what they configure, deploy, and store.'),
('IAM','What is IAM and why is least privilege important?','IAM controls identities and permissions; least privilege limits blast radius when credentials or workloads are compromised.'),
('IAM','IAM user vs role: which should workloads use?','Long-lived users are for exceptional human cases; workloads should normally assume short-lived roles.'),
('Networking','What is a VPC?','A VPC is an isolated virtual network where you define address ranges, subnets, routes, and security boundaries.'),
('Networking','Public vs private subnet?','A public subnet has a route to an internet gateway; private workloads normally reach outbound services through controlled egress such as NAT.'),
('Networking','Security group vs network ACL?','Security groups are stateful, instance-level controls; network ACLs are stateless subnet-level controls.'),
('Networking','What is a route table?','A route table determines where packets go next based on destination CIDR, such as local, NAT, peering, or internet routes.'),
('Networking','How do you expose a private Spring Boot service?','Place the service on private subnets and expose it through an internet-facing or internal load balancer, not a public application node.'),
('Compute','EC2 vs containers vs serverless?','Choose EC2 for OS-level control, containers for portable managed workloads, and serverless when the execution model fits the service.'),
('Compute','How do you size an EC2 instance?','Start from CPU, memory, network, storage, latency and workload measurements, then validate with load testing rather than guessing.'),
('Compute','What is an Auto Scaling Group?','It maintains a desired range of instances and can replace unhealthy nodes or scale capacity based on policies.'),
('Compute','Why put a load balancer in front of application instances?','It distributes traffic, performs health checks, terminates TLS when appropriate, and removes unhealthy targets.'),
('Containers','What is ECR?','Amazon ECR is a managed container registry for storing and retrieving images with IAM-controlled access.'),
('Containers','How should you tag production container images?','Prefer immutable identifiers such as Git SHA or digest for deployment; human-readable tags can point to those versions.'),
('Containers','Why deploy by image digest?','A digest identifies exact image content, preventing a mutable tag from silently changing what production runs.'),
('Storage','S3 vs EBS vs EFS?','S3 is object storage, EBS is block storage attached to compute, and EFS provides shared file storage.'),
('Database','RDS vs self-managed PostgreSQL on EC2?','RDS reduces operational work through managed backups, patching and failover features, while EC2 gives more OS-level control.'),
('Database','How do you make RDS highly available?','Use Multi-AZ where supported, automated backups, tested restore procedures, monitoring, and an application strategy that tolerates failover.'),
('Database','Where should database credentials live?','Use a secrets manager or equivalent secret store and inject short-lived or rotated credentials without committing them to Git.'),
('Database','How should Spring Boot connect to production PostgreSQL?','Use private networking, TLS where required, a connection pool, bounded timeouts, credentials from a secret store, and migration controls.'),
('Load Balancing','ALB vs NLB: when would you choose each?','ALB is suited to HTTP-aware routing such as paths and hosts; NLB is for high-performance L4 traffic and protocols needing transport-level behavior.'),
('Load Balancing','What is health-check based routing?','The load balancer sends traffic only to targets that pass configured health checks, preventing known-bad instances from receiving requests.'),
('DNS','What does Route 53 do?','It provides DNS management and routing policies, and can integrate domain resolution with health checks and cloud endpoints.'),
('DNS','How would you map app.example.com to a load balancer?','Create the appropriate DNS record, commonly an alias to the load balancer, and verify TLS certificate coverage for the hostname.'),
('Security','How do you secure a public API?','Use TLS, authentication and authorization, validation, rate limiting where needed, secure headers, logging, and tightly scoped network access to dependencies.'),
('Security','Where should TLS terminate?','It can terminate at a managed load balancer or ingress, with re-encryption to the service when internal encryption is required by the threat model.'),
('Security','What is AWS KMS used for?','KMS manages encryption keys used by supported services and applications, with IAM and key policies controlling usage.'),
('Observability','What should you monitor after deployment?','Monitor availability, latency, errors, saturation, dependency health, logs, traces and business signals relevant to the release.'),
('Observability','CloudWatch metrics vs logs?','Metrics are numeric time-series signals for alerting and trends; logs are event records used for detailed diagnosis.'),
('Observability','How do you trace a request across React, API and database?','Propagate a correlation or trace identifier through the API and use distributed tracing plus structured logs to connect the request path.'),
('Deployment','How would you deploy a React frontend?','Build immutable static assets and serve them through object storage plus CDN, or through a container platform when server-side behavior requires it.'),
('Deployment','How would you deploy Spring Boot on AWS?','A common path is containerize it, publish to a registry, run it on ECS/EKS or another compute platform, place it behind a load balancer, and connect privately to data services.'),
('Deployment','What is blue-green deployment?','Maintain two environments, send traffic to the new version after validation, and switch traffic as one controlled promotion.'),
('Deployment','What is canary deployment?','Release to a small traffic slice, observe defined health signals, then progressively increase traffic or abort.'),
('Deployment','How do you rollback a bad deployment?','Keep the previous immutable artifact and deployment revision, stop promotion, restore traffic to the known-good version, and investigate with telemetry.'),
('CI/CD','How does GitHub Actions deploy to AWS securely?','Prefer OIDC federation to assume a narrowly scoped cloud role instead of storing long-lived AWS access keys in repository secrets.'),
('CI/CD','Build once or rebuild per environment?','Build once and promote the same immutable artifact; environment-specific configuration should be injected at deployment time.'),
('CI/CD','How do you separate staging and production?','Use distinct environments, permissions, secrets, accounts or roles where appropriate, and explicit promotion gates.'),
('CI/CD','How do you protect production deployments?','Require protected branches, review, successful checks, scoped deployment identities, environment approvals and auditable release records.'),
('Kubernetes','EKS vs ECS?','EKS provides managed Kubernetes control planes and Kubernetes portability; ECS is AWS-native container orchestration with a simpler AWS-specific operating model.'),
('Kubernetes','What does EKS manage for you?','AWS manages the Kubernetes control plane; you still manage workloads, configurations, access, networking choices, and worker capacity depending on the operating mode.'),
('Kubernetes','How should Kubernetes workloads access AWS services?','Use workload identities such as IAM roles for service accounts or the current EKS workload identity approach rather than static keys in Pods.'),
('Reliability','What does high availability mean for a web application?','The system continues serving acceptable traffic despite expected component failures, typically through redundancy, health checks and automated recovery.'),
('Reliability','How do you design for an Availability Zone failure?','Spread application capacity across multiple AZs, use a multi-AZ data strategy, and ensure load balancing and scaling do not depend on one zone.'),
('Reliability','What is a health check vs readiness check?','A health check asks whether a process is alive; readiness asks whether it should receive traffic or perform work.'),
('Reliability','How do you handle graceful shutdown?','Stop accepting new work, allow in-flight requests to finish within a deadline, close resources, and let orchestration remove the instance safely.'),
('Performance','How do you diagnose high API latency in cloud?','Break latency by application, database, network and dependency timing using metrics, traces and logs before changing capacity.'),
('Performance','When should you scale horizontally?','Scale out when independent instances can share load and the bottleneck is capacity that can be distributed without violating state or consistency requirements.'),
('Cost','How do you control cloud cost?','Right-size resources, autoscale, use appropriate storage classes, remove idle infrastructure, set budgets/alerts, and review usage regularly.'),
('Cost','What is a cost-effective production architecture?','Use managed services where they reduce operational burden, right-size compute, scale with demand, and avoid always-on capacity that the workload does not need.'),
('Operations','How do you manage configuration across environments?','Keep non-secret configuration versioned and inject environment-specific values at deployment; keep secrets in a secret manager.'),
('Operations','How do you perform a production incident investigation?','Establish impact and timeline, identify the first failing boundary, correlate recent changes with telemetry, mitigate first, then perform root-cause analysis.'),
('Operations','What should a production runbook contain?','Symptoms, dashboards, commands, dependency checks, safe mitigations, rollback steps, escalation paths, and verification criteria.'),
('Architecture','Design React + Spring Boot + PostgreSQL on AWS.','Use CDN/object storage for React, a load balancer in front of private Spring Boot compute, private PostgreSQL, IAM-based access, secrets management, observability, autoscaling and multi-AZ placement.'),
('Architecture','Design a production microservices deployment.','Give services independent deployability, private networking, centralized observability, service discovery, scoped identities, resilient dependencies and progressive delivery.'),
('Architecture','How would you migrate a VM-based Spring Boot app to containers?','Externalize configuration, make the process stateless where possible, build a production image, validate behavior in a container, publish it, then move traffic progressively.'),
('Architecture','How would you migrate PostgreSQL safely?','Assess compatibility, establish backup/restore confidence, rehearse migration, use replication or a controlled cutover where suitable, validate data and keep rollback options.'),
('Architecture','How do you design for disaster recovery?','Define RTO/RPO first, choose backups/replication and a recovery environment accordingly, automate restoration where possible, and test the plan.'),
]
assert len(titles)==60, len(titles)

followup_pairs=[
('When would you not choose the largest cloud provider?','If the workload, team expertise, required managed service, geography or existing contract favors another provider, I optimize for total operational fit rather than market size.'),
('Why multiple Availability Zones?','They reduce dependence on a single datacenter failure domain, but the application and data layer must also be designed to use the redundancy.'),
('Does the provider secure my application code?','No. The provider secures the underlying cloud infrastructure; I remain responsible for application configuration, identities, data and workload security.'),
('What is the blast radius of excessive permissions?','A compromised identity can access every resource its policy permits, so narrow permissions directly reduce potential impact.'),
('Why avoid access keys on EC2?','They are long-lived credentials that can leak; instance or workload roles provide temporary credentials and central policy control.'),
('What CIDR would you use?','I choose an address range that avoids overlap with connected networks and leaves room for growth; the exact CIDR depends on the organization topology.'),
('Does a private subnet mean no internet access?','Not necessarily. It can have controlled outbound access through NAT while remaining unreachable directly from the public internet.'),
('Are security groups stateful?','Yes. Return traffic for an allowed connection is automatically permitted, unlike stateless network ACL rules.'),
('What happens if no route matches?','The packet is not forwarded through that route table; the network design must provide an explicit valid path.'),
('Why not expose the Pod directly?','A load balancer or ingress gives a stable entry point and health-aware routing while keeping application nodes private.'),
('When is EC2 preferable?','When I need OS-level control, specialized agents, legacy software, or a workload that does not fit the container/serverless operating model.'),
('How do you validate sizing?','Use representative load tests and production telemetry, then tune based on CPU, memory, latency, throughput and saturation.'),
('What happens when an instance becomes unhealthy?','The group can remove it from service and replace it, assuming health checks and desired capacity are configured correctly.'),
('Can a load balancer fix application bugs?','No. It can stop routing to unhealthy targets, but application-level failures still require code or dependency remediation.'),
('How do you scan images?','Scan dependencies and OS packages before promotion, set severity gates, and track exceptions with expiry rather than ignoring findings.'),
('Why not use latest in production?','A mutable tag does not uniquely identify content, making rollback and auditability unreliable.'),
('Is a tag immutable?','Not by default. A registry policy can enforce immutability, but a digest is the strongest content identity.'),
('Can S3 mount like a normal disk?','S3 is object storage, so applications should use its object APIs or a purpose-built integration rather than treating it as POSIX block storage.'),
('Why use RDS?','It removes much of the routine database infrastructure work and provides managed operational features, while still requiring application-level reliability and security.'),
('What does Multi-AZ protect against?','It improves availability against an infrastructure/AZ failure, but it is not a substitute for backups or disaster recovery.'),
('How do you rotate secrets?','Store them centrally, rotate them on a schedule or event, update consumers safely, and avoid logging the secret during the transition.'),
('How do you avoid connection exhaustion?','Bound the pool, set timeouts, size it based on database capacity, and monitor active/idle connections.'),
('When is NLB better?','For L4 protocols, very high connection/throughput requirements, or workloads where HTTP-aware routing is not needed.'),
('What makes a health check useful?','It should represent the ability to serve real traffic without being so deep that a temporary dependency issue unnecessarily removes every instance.'),
('What if DNS caching delays a change?','Use an appropriate TTL and design cutovers around DNS propagation behavior; for rapid traffic switching, load-balancer-level controls can be better.'),
('Where do certificates live?','Prefer a managed certificate service integrated with the load balancer or ingress so renewal and key handling are centralized.'),
('Should every API be public?','No. Only the required edge should be public; internal services and databases should remain private.'),
('Why re-encrypt inside the VPC?','It protects traffic across internal trust boundaries and may satisfy security or compliance requirements.'),
('Who can use a KMS key?','Only identities allowed by the key policy and IAM controls, subject to the service integration and grants involved.'),
('What is a good release signal?','Error rate and latency are core signals, but I also include dependency health and business metrics that reveal user impact.'),
('Why use structured logs?','They make fields such as request ID, service, status and latency queryable and consistent across instances.'),
('What is the value of distributed tracing?','It shows where time and failures accumulate across service boundaries, which logs alone may not make obvious.'),
('Why use a CDN?','It serves static assets closer to users, reduces origin load and can improve latency and availability for frontend delivery.'),
('What deployment platform would you choose?','I choose based on team Kubernetes expertise, operational needs, portability, scale and how much platform management the organization wants.'),
('How do you know a blue-green switch is safe?','Validate the green environment with automated checks and telemetry before switching meaningful production traffic.'),
('What should abort a canary?','Predefined error, latency, saturation or business-metric thresholds should stop promotion automatically or trigger an operator decision.'),
('What makes rollback fast?','Keep the previous immutable artifact and deployment revision immediately available and make traffic switching reversible.'),
('Why OIDC instead of AWS keys?','OIDC lets GitHub Actions exchange a short-lived identity token for scoped AWS credentials without storing long-lived secrets.'),
('Should staging and production share credentials?','No. Separate identities and permissions reduce blast radius and make promotion auditable.'),
('What is an environment approval?','It is a protected deployment gate requiring authorized review before a workflow can access that environment or continue.'),
('When is EKS worth the complexity?','When Kubernetes capabilities, ecosystem, portability or existing platform expertise justify its operational complexity.'),
('How do Pods get AWS permissions?','Bind a workload identity to the Pod/service account and grant only the required IAM actions.'),
('What makes an architecture highly available?','Redundancy alone is insufficient; traffic routing, health checks, scaling, data failover and application behavior must all tolerate failures.'),
('Why readiness during startup?','A process may be alive before it is ready to serve traffic, so readiness prevents premature requests.'),
('What if shutdown takes too long?','Use bounded termination time, stop new traffic early, inspect slow requests, and fix workloads that routinely exceed the deadline.'),
('How do traces help latency debugging?','They let me decompose end-to-end latency into frontend/API/database/downstream spans instead of guessing at the bottleneck.'),
('What is a common scaling mistake?','Scaling the wrong layer. I identify the actual saturation point before adding instances.'),
('How do you prevent cost surprises?','Budgets, alerts, tagging, rightsizing, autoscaling and regular cost reviews make unexpected growth visible early.'),
('Should config be baked into images?','Environment-specific configuration should normally be injected at runtime so the same immutable artifact can be promoted.'),
('What is the first incident question?','I establish user impact, start time and scope, then identify the first failing boundary before changing unrelated components.'),
('Why are runbooks important?','During incidents they reduce cognitive load and make safe mitigation repeatable across engineers and shifts.'),
('Why private subnets for Spring Boot?','They reduce direct exposure; only the load balancer or ingress needs to be reachable from the public edge.'),
('How do microservices avoid a shared blast radius?','Use independent identities, resources, deployment boundaries, timeouts, bulkheads and observability rather than one shared runtime dependency.'),
('What makes container migration safe?','The application must behave predictably in the new runtime, configuration must be externalized, and rollout must be reversible.'),
('How do you validate a database migration?','Rehearse it against production-like data, measure duration and locking, verify application compatibility, and keep a tested recovery path.'),
('How do you test DR?','Perform controlled restore/failover drills and measure actual RTO/RPO rather than relying on documentation.'),
('Can RPO be zero?','Only with an architecture and cost profile that can provide effectively synchronous replication; it should be treated as a business requirement, not assumed.'),
('What evidence proves production readiness?','Successful failure drills, restore tests, load tests, security checks, alert validation and a repeatable rollback procedure.'),
('What is the key interview message?','I explain not only where components run, but how traffic, identity, data, delivery and failure recovery work together.'),
('What evidence proves production readiness?','Successful failure drills, restore tests, load tests, security checks, alert validation and a repeatable rollback procedure.'),
]
assert len(followup_pairs)==60, len(followup_pairs)

lesson_lines=["const lesson = (id, level, topic, title, what, how, code, delivery, followups, traps, followupAnswers) => ({ id, level, topic, title, what, how, code, delivery, followups, traps, followupAnswers });","","export const cloudLessons = ["]
for i,(topic,title,what) in enumerate(titles,1):
    level='L1' if i<=20 else ('L2' if i<=45 else 'L3')
    how=f"{what} In practice, I validate the design against failure modes, security boundaries, operational ownership and measurable workload requirements before choosing a service."
    code={
      'Networking': 'Internet\n  ↓\nLoad Balancer\n  ↓\nPrivate application subnets\n  ↓\nPrivate database subnet',
      'Deployment': 'git → CI → image/artifact → registry → cloud deployment → health check → traffic',
      'CI/CD': 'GitHub Actions\n  → OIDC\n  → cloud role\n  → registry\n  → deployment\n  → verify',
      'Database': 'Spring Boot → connection pool → private endpoint → PostgreSQL',
      'Kubernetes': 'React/CDN → LB/Ingress → EKS Pods → private AWS services',
      'Architecture': 'Users → DNS/CDN/LB → services → database\n                 ↘ observability',
    }.get(topic,'cloud architecture\n  → identity\n  → network\n  → workload\n  → data\n  → observability')
    delivery=f"I would explain {title.lower()} by first defining the boundary, then the failure/security implications, and finally the operational trade-off."
    fq,fa=followup_pairs[i-1]
    traps=['Choosing a service by name without explaining the workload requirement.','Ignoring security, failure recovery or operational ownership in the design.']
    lesson_lines.append(f"lesson('cloud-{i:03d}','{level}','{topic}',{title!r},{what!r},{how!r},{code!r},{delivery!r},[{fq!r}],[{traps[0]!r},{traps[1]!r}],[{fa!r}]),")
lesson_lines.append('];\n')
(src/'data'/'cloudLessons.js').write_text('\n'.join(lesson_lines))

labs=[
('cloud-lab-001','L1','Deploy a Spring Boot API on AWS','A containerized API must run behind a public load balancer while the application nodes stay private.','Create a minimal production-shaped deployment.',['Build and test the JAR/image','Publish the image to ECR','Create private compute capacity','Place an ALB in front','Configure health checks','Verify API and logs'],['docker build -t api:$GIT_SHA .','aws ecr get-login-password | docker login --username AWS --password-stdin $REGISTRY','curl https://api.example.com/actuator/health'],'The public edge should terminate traffic while application compute and database access remain private.',['Why private subnets?','How do you roll back?'],['Do not expose database ports to the internet.','Do not use mutable latest as the release identity.']),
('cloud-lab-002','L1','Host a React frontend with CDN delivery','A React build should be delivered globally without running an application server for static assets.','Build immutable frontend assets and expose them through a CDN-backed origin.',['Run npm build','Upload dist assets','Configure CDN origin','Set cache headers','Configure SPA fallback','Verify production hostname'],['npm run build','aws s3 sync dist/ s3://frontend-bucket/','curl -I https://app.example.com/'],'Static assets should be cacheable while deployment invalidation and SPA routing are handled deliberately.',['Why CDN?','How do you handle cache invalidation?'],['Do not publish source files as the production artifact.','Do not cache index.html indefinitely without a release strategy.']),
('cloud-lab-003','L2','Connect Spring Boot to private PostgreSQL','The API works locally but production must use a managed PostgreSQL database without exposing it publicly.','Create private connectivity, secret injection and a bounded connection pool.',['Provision RDS in private subnets','Create narrowly scoped security rules','Store credentials in a secret manager','Inject configuration at runtime','Configure pool/timeouts','Run migrations and smoke tests'],['spring.datasource.url=jdbc:postgresql://db.internal:5432/app','spring.datasource.hikari.maximum-pool-size=20','psql "$DATABASE_URL"'],'The application should never contain a production password in source control or an image.',['How do you rotate credentials?','How do you prevent connection exhaustion?'],['Do not open PostgreSQL to 0.0.0.0/0.','Do not bake secrets into the Docker image.']),
('cloud-lab-004','L2','Secure GitHub Actions with AWS OIDC','A workflow needs to publish and deploy without long-lived AWS keys.','Federate GitHub Actions into a narrowly scoped AWS role.',['Create an OIDC trust policy','Restrict repository/branch claims','Grant only required actions','Use aws-actions credentials','Publish artifact','Deploy and verify'],['permissions:\n  id-token: write\n  contents: read','aws-actions/configure-aws-credentials','aws sts get-caller-identity'],'OIDC reduces credential lifetime and removes the need to store static cloud keys.',['Why restrict the trust policy?','How do you audit the role?'],['Never use a wildcard trust policy for production.','Do not grant administrator access to the deployment role.']),
('cloud-lab-005','L2','Blue-green Spring Boot release','A release has a higher risk than normal and must be reversible.','Run a second version, validate it, then switch traffic with a reversible control.',['Deploy green version','Run health and smoke checks','Compare key telemetry','Switch traffic','Observe','Revert to blue if thresholds fail'],['deploy blue','deploy green','verify green','switch traffic'],'The old version remains available until the new version proves healthy.',['What is the rollback trigger?','How do you handle database changes?'],['Do not delete the previous environment before observing the new release.','Avoid incompatible database migrations in a one-step cutover.']),
('cloud-lab-006','L3','Canary release with health gates','A service should receive 5% traffic before full promotion.','Automate progressive delivery around measurable error and latency thresholds.',['Deploy candidate','Route 5%','Observe error/latency/business metrics','Promote to 25/50/100%','Abort on threshold breach','Record release revision'],['5% → 25% → 50% → 100%','# abort if 5xx or p95 exceeds agreed threshold'],'A canary is useful only when promotion and abort criteria are explicit and observable.',['Which metrics?','How long should each stage run?'],['Do not pick traffic percentages without meaningful health signals.','Do not continue promotion after a failed gate.']),
('cloud-lab-007','L3','Run Spring Boot on EKS','A containerized API needs Kubernetes orchestration with cloud-native identity and load balancing.','Deploy the service to EKS with workload identity and health probes.',['Build/push image','Create Deployment','Configure service/ingress','Attach workload identity','Add readiness/liveness probes','Verify rollout'],['kubectl apply -f deployment.yaml','kubectl rollout status deployment/api','kubectl get pods -o wide'],'Kubernetes should manage rollout and health while AWS identity is bound to the workload rather than stored as keys.',['How does the Pod access S3?','How do you rollback?'],['Do not put AWS access keys in Kubernetes Secrets.','Do not give the Pod cluster-admin.']),
('cloud-lab-008','L3','Design multi-AZ failure recovery','An Availability Zone becomes unavailable during peak traffic.','Keep the application available and prove the recovery path.',['Spread compute across AZs','Validate load balancer target distribution','Confirm database failover strategy','Drain/disable failed capacity','Observe autoscaling','Measure recovery time'],['kubectl get pods -o wide','aws elbv2 describe-target-health','record recovery duration'],'High availability is demonstrated by a controlled failure drill, not just by having resources in multiple zones.',['What about the database?','How do you measure RTO?'],['Do not assume multi-AZ automatically means application-level HA.','Do not skip the failure drill.']),
('cloud-lab-009','L3','Production observability drill','Users report slow API responses after a deployment.','Trace the request path and determine whether the release or a dependency is responsible.',['Check error and latency metrics','Correlate deployment revision','Inspect traces','Check database/HTTP dependency spans','Compare before/after','Mitigate or rollback'],['aws cloudwatch get-metric-data','kubectl logs deployment/api','inspect trace by request id'],'I diagnose from user impact inward, using telemetry to locate the first failing boundary before changing infrastructure.',['When would you not rollback?','What logs are essential?'],['Do not restart everything without evidence.','Do not treat deployment success as user-facing success.']),
('cloud-lab-010','L3','Build a production CI → AWS pipeline','A merge to main must produce an immutable artifact and deploy safely.','Connect GitHub Actions, OIDC, registry, staging and production gates.',['Run PR tests','Build once','Scan image','Push immutable tag','Deploy staging','Smoke test','Require production approval','Deploy and verify'],['git rev-parse HEAD','docker push $REGISTRY/api:$GIT_SHA','kubectl rollout status deployment/api'],'The same artifact should move through environments while permissions and approvals change by environment.',['Why build once?','Where do credentials come from?'],['Do not rebuild different bytes for production.','Do not share staging and production credentials.']),
('cloud-lab-011','L3','Disaster recovery restore drill','The primary database is unavailable and the business has a defined RTO/RPO.','Restore the service from tested backups and measure the actual recovery path.',['Identify latest valid backup','Provision recovery target','Restore data','Validate schema/data','Point application to recovery target','Measure RTO/RPO','Document gaps'],['aws rds describe-db-snapshots','record restore start/end timestamps','run application smoke tests'],'Backups are only useful when restoration is tested and the measured outcome matches the business requirement.',['How do you validate data?','What if RPO is missed?'],['Do not call an untested backup strategy a DR plan.','Do not hide recovery gaps from stakeholders.']),
('cloud-lab-012','L3','End-to-end production architecture review','React, Spring Boot microservices and PostgreSQL must run securely and reliably in AWS.','Produce and defend a complete architecture with delivery, identity, observability and failure recovery.',['Define traffic path','Choose compute model','Design private networking','Define identities/secrets','Design database HA/backup','Connect CI/CD','Define telemetry','Define rollback/DR'],['Users → Route 53 → CDN/LB → services → PostgreSQL','GitHub → Actions/OIDC → ECR → EKS/ECS → telemetry'],'The architecture is complete only when normal traffic, deployment, failure, security and recovery paths are all explainable.',['Where is the first trust boundary?','What happens during an AZ failure?'],['Do not design only the happy path.','Do not leave identity and recovery as afterthoughts.'])]
lab_lines=["const lab = (id, level, title, situation, goal, steps, commands, delivery, followups, traps, followupAnswers) => ({ id, level, title, situation, goal, steps, commands, delivery, followups, traps, followupAnswers });","","export const cloudLabs = ["]
for x in labs:
    id,level,title,situation,goal,steps,commands,delivery,followups,traps=x
    ans=[]
    for q in followups:
        if 'rollback' in q.lower(): a='Keep the previous immutable revision available, stop promotion, restore traffic to the known-good version, then investigate using telemetry.'
        elif 'credentials' in q.lower() or 'identity' in q.lower(): a='Use workload identity or OIDC with narrowly scoped permissions and short-lived credentials; avoid static keys in source, images or Pods.'
        elif 'database' in q.lower(): a='Use compatible, rehearsed migrations with backups and a recovery plan; avoid coupling an irreversible schema change to a release that must be instantly reversible.'
        elif 'metrics' in q.lower(): a='Use error rate, latency, saturation and relevant business metrics, with thresholds defined before promotion.'
        elif 'RTO' in q: a='Measure from incident or failover start until the service meets the agreed availability target; compare the measured time with the business RTO.'
        elif 'RPO' in q: a='Measure the time gap between the latest recoverable data point and the failure point; compare it with the agreed maximum data loss.'
        else: a='I would answer from the system boundary first, then explain the security, reliability and operational trade-offs that make the design safe.'
        ans.append(a)
    lab_lines.append(f"lab({id!r},{level!r},{title!r},{situation!r},{goal!r},{steps!r},{commands!r},{delivery!r},{followups!r},{traps!r},{ans!r}),")
lab_lines.append('];\n')
(src/'data'/'cloudLabs.js').write_text('\n'.join(lab_lines))

# Page cloned from GitHub Actions with cloud-specific names
page=(src/'pages'/'GitHubActionsLearning.jsx').read_text()
page=page.replace('githubActionsLessons','cloudLessons').replace('githubActionsLabs','cloudLabs').replace('GitHubActionsLearning','CloudLearning')
page=page.replace('GitHub Actions Lab','Cloud Lab').replace('GitHub Actions Lessons','Cloud Lessons').replace('GitHub Actions Labs','Cloud Labs')
page=page.replace('V18 · GITHUB ACTIONS ENGINEERING','V19 · CLOUD & DEPLOYMENT ENGINEERING')
page=page.replace('Automate the path.<br/><em>Ship with confidence.</em>','Deploy the system.<br/><em>Operate with confidence.</em>')
page=page.replace('Master GitHub Actions from workflow fundamentals through secure CI, Docker publishing, Kubernetes delivery, reusable workflows, OIDC, supply-chain security, progressive delivery, debugging and production migration from Jenkins.','Master cloud and deployment engineering from networking and IAM through compute, containers, databases, load balancing, DNS, observability, Kubernetes, secure CI/CD, progressive delivery, disaster recovery and production architecture.')
page=page.replace('<span>Code</span><b>→</b><span>Trigger</span><b>→</b><span>Build</span><b>→</b><span>Test</span><b>→</b><span>Scan</span><b>→</b><span>Publish</span><b>→</b><span>Deploy</span><b>→</b><span>Verify</span>', '<span>Code</span><b>→</b><span>Build</span><b>→</b><span>Registry</span><b>→</b><span>Cloud</span><b>→</b><span>Deploy</span><b>→</b><span>Observe</span><b>→</b><span>Recover</span>')
page=page.replace('Search Actions workflows, YAML, security, Docker, Kubernetes...','Search AWS, networking, IAM, Docker, EKS, RDS, deployment, observability...')
page=page.replace('⚙ Learn GitHub Actions','☁ Learn Cloud').replace('🛠 Actions Labs','🛠 Cloud Labs')
(src/'pages'/'CloudLearning.jsx').write_text(page)

# Patch app/sidebar/header
app=(src/'App.jsx').read_text()
app=app.replace('import GitHubActionsLearning from "./pages/GitHubActionsLearning";','import GitHubActionsLearning from "./pages/GitHubActionsLearning";\nimport CloudLearning from "./pages/CloudLearning";')
app=app.replace('view === "github-actions" ? <GitHubActionsLearning /> : <Questions', 'view === "github-actions" ? <GitHubActionsLearning /> : view === "cloud" ? <CloudLearning /> : <Questions')
(src/'App.jsx').write_text(app)

sb=(src/'components'/'Sidebar.jsx').read_text()
sb=sb.replace('import { githubActionsLabs } from "../data/githubActionsLabs";','import { githubActionsLabs } from "../data/githubActionsLabs";\nimport { cloudLessons } from "../data/cloudLessons";\nimport { cloudLabs } from "../data/cloudLabs";')
needle='''            <button className={view === "github-actions" ? "nav-item active" : "nav-item"} onClick={() => go("github-actions")}>\n              <span>◉</span><label>GitHub Actions</label><small>{githubActionsLessons.length + githubActionsLabs.length}</small>\n            </button>'''
replacement=needle+'''\n            <button className={view === "cloud" ? "nav-item active" : "nav-item"} onClick={() => go("cloud")}>\n              <span>☁</span><label>Cloud & Deployment</label><small>{cloudLessons.length + cloudLabs.length}</small>\n            </button>'''
sb=sb.replace(needle,replacement)
(src/'components'/'Sidebar.jsx').write_text(sb)

h=(src/'components'/'Header.jsx').read_text()
h=h.replace('import { githubActionsLabs } from "../data/githubActionsLabs";','import { githubActionsLabs } from "../data/githubActionsLabs";\nimport { cloudLessons } from "../data/cloudLessons";\nimport { cloudLabs } from "../data/cloudLabs";')
h=h.replace('  const githubActions = view === "github-actions";','  const githubActions = view === "github-actions";\n  const cloud = view === "cloud";')
h=h.replace(': githubActions ? "GitHub Actions Learning" : "Backend Interview Preparation"', ': githubActions ? "GitHub Actions Learning" : cloud ? "Cloud & Deployment Learning" : "Backend Interview Preparation"')
h=h.replace(': githubActions\n                        ? "GitHub Actions · CI · Docker · Kubernetes · OIDC · Security · Reusable Workflows · Production Delivery"\n                        :', ': githubActions\n                        ? "GitHub Actions · CI · Docker · Kubernetes · OIDC · Security · Reusable Workflows · Production Delivery"\n                        : cloud\n                          ? "AWS · Networking · IAM · Docker · EKS · RDS · Load Balancing · Observability · Production"\n                          :')
h=h.replace(': githubActions ? `${githubActionsLessons.length + githubActionsLabs.length} ACTIONS ITEMS` : `${questions.length} QUESTIONS`', ': githubActions ? `${githubActionsLessons.length + githubActionsLabs.length} ACTIONS ITEMS` : cloud ? `${cloudLessons.length + cloudLabs.length} CLOUD ITEMS` : `${questions.length} QUESTIONS`')
h=h.replace(': githubActions ? "devops@actions:~" : "backend@interview:~"', ': githubActions ? "devops@actions:~" : cloud ? "cloud@deployment:~" : "backend@interview:~"')
(src/'components'/'Header.jsx').write_text(h)

# notes/version
pkg=root/'package.json'; p=__import__('json').loads(pkg.read_text()); p['version']='19.0.0'; pkg.write_text(__import__('json').dumps(p,indent=2)+'\n')
(root/'V19_0_NOTES.md').write_text('''# V19.0 — Cloud & Deployment Engineering\n\n- Added 60 cloud/deployment lessons and 12 production labs.\n- Covers AWS fundamentals, Regions/AZs, shared responsibility, IAM, VPC, subnets, routing, security groups/NACLs, EC2, Auto Scaling, ALB/NLB, ECR, S3/EBS/EFS, RDS/PostgreSQL, DNS/Route 53, TLS, KMS, CloudWatch, tracing, React deployment, Spring Boot deployment, blue-green/canary, GitHub Actions → AWS OIDC, EKS/ECS, workload identity, HA, graceful shutdown, performance, cost, runbooks, incident response, DR/RTO/RPO and production architecture.\n- Learning flow: Code → Build → Registry → Cloud → Deploy → Observe → Recover.\n- Every lesson and lab has question-specific follow-up answers.\n- UI intentionally unchanged.\n- TypeScript remains removed from the roadmap.\n''')

# zip
out=Path('/mnt/data/backend-interview-hub-v19.0-cloud-deployment.zip')
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
    for path in root.rglob('*'):
        if path==out: continue
        if '__pycache__' in path.parts or path.name=='backend-interview-hub-v18.0-github-actions.zip': continue
        z.write(path, path.relative_to(root))
print(out, out.stat().st_size)
