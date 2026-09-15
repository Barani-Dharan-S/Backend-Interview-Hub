export const githubActionsLessons = [
  {
    "id": "gha-001",
    "title": "Workflow anatomy",
    "level": "L1",
    "topic": "Foundations",
    "what": "What are the main parts of a GitHub Actions workflow?",
    "how": "A workflow is a YAML document under .github/workflows. It defines triggers, jobs, runners, steps, permissions, environments, outputs and dependencies between jobs.",
    "code": "name: CI\non:\n  pull_request:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v5\n      - run: ./mvnw test",
    "delivery": "I would describe a workflow as the executable contract between a Git event and the delivery actions we allow the pipeline to perform.",
    "followups": [
      "What is the difference between a workflow, job and step?",
      "Where should workflow files live?"
    ],
    "followupAnswers": [
      "A workflow is the whole YAML automation, a job is an independently scheduled unit on a runner, and steps are ordered actions or commands inside a job.",
      "They belong in .github/workflows. Keeping workflow definitions in source control makes pipeline changes reviewable and versioned."
    ],
    "traps": [
      "Putting deployment logic into every step without job boundaries makes permissions and failures harder to reason about.",
      "Treating YAML as configuration only and ignoring its security implications is a production mistake."
    ]
  },
  {
    "id": "gha-002",
    "title": "Events and triggers",
    "level": "L1",
    "topic": "Foundations",
    "what": "How do GitHub Actions triggers work?",
    "how": "The on section decides when a workflow is eligible to start. Common triggers are push, pull_request, workflow_dispatch, schedule, workflow_call and release.",
    "code": "on:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n  workflow_dispatch:",
    "delivery": "I separate automatic triggers from operator-triggered releases so normal commits can validate code while production actions require an intentional event.",
    "followups": [
      "When would you use workflow_dispatch?",
      "Can a workflow have multiple triggers?"
    ],
    "followupAnswers": [
      "workflow_dispatch is useful for controlled reruns, releases, migrations or operational workflows where a human should explicitly start the job.",
      "Yes. Multiple events can be declared, but the workflow should remain safe under each trigger because the event context and permissions can differ."
    ],
    "traps": [
      "Assuming every trigger has the same token permissions.",
      "Using pull_request_target casually when untrusted fork code is involved."
    ]
  },
  {
    "id": "gha-003",
    "title": "Jobs and runners",
    "level": "L1",
    "topic": "Foundations",
    "what": "Why use multiple jobs instead of one long job?",
    "how": "Jobs provide isolation, independent failure boundaries and parallelism. Each job gets its own runner unless you deliberately coordinate them with needs and artifacts.",
    "code": "jobs:\n  test:\n    runs-on: ubuntu-latest\n  build:\n    needs: test\n    runs-on: ubuntu-latest",
    "delivery": "I split jobs when the stages have different responsibilities or can run independently, then use needs to express the release dependency graph.",
    "followups": [
      "Does a later job automatically see files from an earlier job?",
      "How do you run jobs in parallel?"
    ],
    "followupAnswers": [
      "No. Jobs run on separate runners by default. Persist required files with artifacts or rebuild from source.",
      "Jobs run in parallel unless a needs dependency creates an ordering constraint."
    ],
    "traps": [
      "Assuming the workspace survives between jobs.",
      "Creating a large serial pipeline when tests could run concurrently."
    ]
  },
  {
    "id": "gha-004",
    "title": "Step execution",
    "level": "L1",
    "topic": "Foundations",
    "what": "What is the difference between run and uses?",
    "how": "run executes shell commands on the runner. uses invokes an action published by GitHub or another repository. Actions package reusable behavior such as checkout, setup-node and artifact upload.",
    "code": "steps:\n  - uses: actions/checkout@v5\n  - uses: actions/setup-java@v5\n    with:\n      distribution: temurin\n      java-version: '21'\n  - run: ./mvnw test",
    "delivery": "I use uses for well-defined reusable actions and run for commands that are part of our repository's build contract.",
    "followups": [
      "Can a step use both uses and run?",
      "Why pin actions?"
    ],
    "followupAnswers": [
      "A step uses either uses or run for its main execution; inputs belong under with when using an action.",
      "Pinning reduces supply-chain risk and unexpected behavior from moving action tags. For higher assurance I prefer immutable commit SHAs with a controlled update process."
    ],
    "traps": [
      "Copying random actions from marketplace without checking ownership or permissions.",
      "Putting secrets into shell command strings."
    ]
  },
  {
    "id": "gha-005",
    "title": "Runner environments",
    "level": "L1",
    "topic": "Foundations",
    "what": "What is a GitHub-hosted runner?",
    "how": "It is a temporary virtual environment supplied for a job. It starts from a known image, executes the job, and is normally discarded afterward.",
    "code": "jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - run: java -version\n      - run: node --version",
    "delivery": "I assume runners are ephemeral. Anything required by another job must be stored as an artifact, cache, package, image or external service.",
    "followups": [
      "When would you use a self-hosted runner?",
      "What should not be persisted on a runner?"
    ],
    "followupAnswers": [
      "Self-hosted runners are useful for private networks, specialized hardware or software that GitHub-hosted runners cannot access, but they require stronger operational controls.",
      "Do not rely on the local workspace or unencrypted files surviving the job. Treat the runner as disposable and avoid leaving credentials behind."
    ],
    "traps": [
      "Assuming the runner is a permanent server.",
      "Installing production credentials broadly on a shared self-hosted runner."
    ]
  },
  {
    "id": "gha-006",
    "title": "Java and Maven CI",
    "level": "L1",
    "topic": "Java CI",
    "what": "How would you build a Spring Boot CI workflow?",
    "how": "A practical Java workflow checks out the repository, installs the required JDK, restores safe dependency caches, runs tests and packages the application. The artifact can then be passed to later jobs.",
    "code": "steps:\n  - uses: actions/checkout@v5\n  - uses: actions/setup-java@v5\n    with:\n      distribution: temurin\n      java-version: '21'\n      cache: maven\n  - run: ./mvnw -B verify",
    "delivery": "I keep compilation, unit tests and packaging in the CI contract and fail the job on any verification error.",
    "followups": [
      "Why use setup-java cache?",
      "Would you run integration tests here?"
    ],
    "followupAnswers": [
      "It avoids repeatedly downloading unchanged Maven dependencies while keeping the cache managed by the action. It improves speed without treating cache contents as trusted build outputs.",
      "Yes, when they are stable and the required services can be provisioned deterministically. I usually separate slower integration tests when they need containers or databases."
    ],
    "traps": [
      "Skipping tests because the build already compiles.",
      "Using an unpinned JDK version in a production pipeline."
    ]
  },
  {
    "id": "gha-007",
    "title": "Gradle CI",
    "level": "L1",
    "topic": "Java CI",
    "what": "How does the approach change for Gradle?",
    "how": "The stages stay the same, but the build command and dependency cache use Gradle conventions. The Gradle wrapper should be committed so the pipeline controls the build tool version.",
    "code": "steps:\n  - uses: actions/checkout@v5\n  - uses: actions/setup-java@v5\n    with:\n      distribution: temurin\n      java-version: '21'\n      cache: gradle\n  - run: ./gradlew build",
    "delivery": "I prefer the wrapper over relying on whatever Gradle happens to be installed on the runner.",
    "followups": [
      "Why commit gradle-wrapper files?",
      "What if Gradle tests are flaky?"
    ],
    "followupAnswers": [
      "The wrapper makes the build tool version part of the repository contract, improving reproducibility across developer machines and CI.",
      "First isolate whether the flake is timing, shared state or an external dependency. I quarantine only with evidence and track a fix rather than making retries hide deterministic failures."
    ],
    "traps": [
      "Installing the latest Gradle globally and hoping the project is compatible.",
      "Using retries to mask broken tests indefinitely."
    ]
  },
  {
    "id": "gha-008",
    "title": "Maven dependency cache",
    "level": "L2",
    "topic": "Java CI",
    "what": "How do you cache Maven dependencies safely?",
    "how": "Cache immutable or reproducible dependency downloads, not arbitrary build outputs. A cache key should incorporate the operating system and relevant dependency descriptor such as pom.xml or wrapper files.",
    "code": "- uses: actions/setup-java@v5\n  with:\n    distribution: temurin\n    java-version: '21'\n    cache: maven",
    "delivery": "I treat caches as performance hints. A cache miss must still produce a correct build, and cache data must never become a trust boundary for secrets.",
    "followups": [
      "Should target/ be cached?",
      "What causes stale dependency cache problems?"
    ],
    "followupAnswers": [
      "Usually no. target contains generated outputs and can hide build problems; rebuilding it keeps CI behavior deterministic.",
      "Over-broad keys, changed repositories or lock/descriptors not included in the key can reuse stale content. The build should remain correct after a clean cache."
    ],
    "traps": [
      "Making correctness depend on cache state.",
      "Caching credentials or private repository tokens."
    ]
  },
  {
    "id": "gha-009",
    "title": "JUnit reports and artifacts",
    "level": "L2",
    "topic": "Java CI",
    "what": "How do you preserve test evidence from a failed build?",
    "how": "Run tests, collect the reports even when earlier steps fail, and upload them as artifacts. This lets developers inspect failures without rerunning the entire workflow.",
    "code": "- name: Upload test reports\n  if: ${{ !cancelled() }}\n  uses: actions/upload-artifact@v4\n  with:\n    name: test-reports\n    path: '**/target/surefire-reports/*.xml'",
    "delivery": "I want failure evidence to survive the runner lifecycle, while keeping artifacts scoped and retained for a sensible period.",
    "followups": [
      "Why not upload on success only?",
      "What should an artifact contain?"
    ],
    "followupAnswers": [
      "Because the useful evidence is often produced precisely when the test step fails. !cancelled() lets cleanup/reporting run while still respecting cancellation.",
      "Only the files needed for diagnosis or promotion, with no secrets, credentials or unnecessary source dumps."
    ],
    "traps": [
      "Uploading the whole workspace.",
      "Allowing sensitive logs to become long-lived artifacts."
    ]
  },
  {
    "id": "gha-010",
    "title": "Integration tests with PostgreSQL",
    "level": "L2",
    "topic": "Java CI",
    "what": "How can GitHub Actions run Spring Boot integration tests against PostgreSQL?",
    "how": "Use a service container or a dedicated job container so the database lifecycle is tied to the job. Configure the application through environment variables and wait for readiness before tests.",
    "code": "services:\n  postgres:\n    image: postgres:16\n    env:\n      POSTGRES_PASSWORD: postgres\n    ports:\n      - 5432:5432\n    options: >-\n      --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5",
    "delivery": "I make the database disposable and deterministic. Tests should create their own schema/data rather than depending on a shared environment.",
    "followups": [
      "Why is a readiness check important?",
      "Would you use a shared test database?"
    ],
    "followupAnswers": [
      "Container startup does not mean the database is ready to accept connections. A health check prevents avoidable connection failures.",
      "For CI integration tests I prefer isolated disposable databases. A shared database introduces data coupling, race conditions and cleanup problems."
    ],
    "traps": [
      "Starting tests immediately after the container process starts.",
      "Allowing tests to mutate a persistent shared database."
    ]
  },
  {
    "id": "gha-011",
    "title": "Code quality gates",
    "level": "L2",
    "topic": "Java CI",
    "what": "Where should static analysis fit in CI?",
    "how": "Quality checks should run before an artifact is promoted. Examples include compiler warnings, unit tests, dependency checks, SpotBugs, Checkstyle or Sonar analysis depending on the team's standards.",
    "code": "- name: Verify\n  run: ./mvnw -B verify\n- name: Static analysis\n  run: ./mvnw -B checkstyle:check",
    "delivery": "I make quality gates explicit and fail the pipeline when a policy violation is detected rather than reporting warnings that nobody acts on.",
    "followups": [
      "Should every warning fail CI?",
      "Where does Sonar fit?"
    ],
    "followupAnswers": [
      "Only warnings with an agreed policy should fail CI. Otherwise teams learn to ignore noise; the threshold should reflect risk and be enforced consistently.",
      "Sonar can be a separate quality-analysis step or gate after compilation/tests, with the pipeline waiting for the configured quality result before promotion."
    ],
    "traps": [
      "Adding tools without defining a pass/fail policy.",
      "Treating a green analysis job as proof that the application is functionally correct."
    ]
  },
  {
    "id": "gha-012",
    "title": "Build once, deploy many",
    "level": "L3",
    "topic": "Java CI",
    "what": "Why should you build an artifact once and deploy the same artifact across environments?",
    "how": "Rebuilding for each environment can produce different binaries because dependencies, timestamps or build inputs change. A stronger promotion model creates one immutable artifact and changes only external configuration per environment.",
    "code": "jobs:\n  build:\n    steps:\n      - run: ./mvnw -B package\n      - uses: actions/upload-artifact@v4\n        with:\n          name: app-jar\n          path: target/*.jar\n  deploy:\n    needs: build\n    steps:\n      - uses: actions/download-artifact@v4\n        with:\n          name: app-jar",
    "delivery": "I use the artifact as the identity of what was tested. Promotion should move that exact artifact instead of recompiling it.",
    "followups": [
      "How do you inject environment-specific config?",
      "What about database migrations?"
    ],
    "followupAnswers": [
      "Keep environment configuration outside the binary using environment variables, secrets, ConfigMaps or deployment configuration. The application artifact remains unchanged.",
      "Migrations are a separate release concern with versioned, backward-compatible changes where possible. They should be controlled and observable rather than hidden inside an arbitrary application startup."
    ],
    "traps": [
      "Running npm/mvn build again during production deployment.",
      "Embedding production secrets in the built JAR."
    ]
  },
  {
    "id": "gha-013",
    "title": "SBOM in a Java pipeline",
    "level": "L3",
    "topic": "Java CI",
    "what": "Why generate an SBOM?",
    "how": "A software bill of materials records the components included in an artifact. It helps vulnerability response, license review and incident analysis because you can identify affected dependencies quickly.",
    "code": "- name: Generate SBOM\n  run: ./mvnw -B org.cyclonedx:cyclonedx-maven-plugin:makeAggregateBom\n- uses: actions/upload-artifact@v4\n  with:\n    name: sbom\n    path: target/bom.json",
    "delivery": "I treat the SBOM as release evidence tied to a specific artifact, not as a generic document detached from what was deployed.",
    "followups": [
      "Does an SBOM prevent vulnerabilities?",
      "Where should the SBOM go?"
    ],
    "followupAnswers": [
      "No. It improves visibility and response. You still need dependency updates, scanning and runtime controls.",
      "Store it alongside release evidence or in a software supply-chain system, with retention and access appropriate to the organization's policies."
    ],
    "traps": [
      "Claiming an SBOM is a security control by itself.",
      "Generating it from a different build than the deployed artifact."
    ]
  },
  {
    "id": "gha-014",
    "title": "React CI workflow",
    "level": "L1",
    "topic": "React CI",
    "what": "How would you validate a React application in Actions?",
    "how": "Install the expected Node version, install dependencies from the lockfile, run lint/tests and produce a production build. The build output can become an artifact or container input.",
    "code": "steps:\n  - uses: actions/checkout@v5\n  - uses: actions/setup-node@v5\n    with:\n      node-version: 22\n      cache: npm\n  - run: npm ci\n  - run: npm run build",
    "delivery": "I make npm ci plus the production build part of CI so a pull request cannot merge code that fails to compile for the target frontend environment.",
    "followups": [
      "Why npm ci instead of npm install?",
      "Should the dist folder be committed?"
    ],
    "followupAnswers": [
      "npm ci installs from the lockfile and is designed for reproducible CI installs; npm install may update dependency resolution.",
      "Normally no. Build output is generated by CI and should be produced from source and lockfile rather than committed as a second source of truth."
    ],
    "traps": [
      "Using npm install and silently changing the lockfile in CI.",
      "Assuming a successful lint means the production bundle is valid."
    ]
  },
  {
    "id": "gha-015",
    "title": "Node version strategy",
    "level": "L1",
    "topic": "React CI",
    "what": "How do you control the Node version in CI?",
    "how": "Pin a major/minor policy appropriate to the project and keep the same version expectation locally and in CI. The version should be visible in repository configuration or the workflow.",
    "code": "- uses: actions/setup-node@v5\n  with:\n    node-version: '22'",
    "delivery": "I want the Node runtime to be intentional because dependency resolution and bundling behavior can change between runtime versions.",
    "followups": [
      "Would you use latest?",
      "How do you upgrade Node?"
    ],
    "followupAnswers": [
      "I avoid latest for release pipelines because it can introduce unplanned breaking changes. I use a supported version and update it deliberately.",
      "Upgrade in a branch, run the complete CI matrix and application checks, then update the declared version and communicate the compatibility change."
    ],
    "traps": [
      "Using floating runtime versions in production CI.",
      "Upgrading the runner image without testing the application's toolchain."
    ]
  },
  {
    "id": "gha-016",
    "title": "Browser tests",
    "level": "L2",
    "topic": "React CI",
    "what": "How do you run Playwright or browser tests in Actions?",
    "how": "Install dependencies and browsers, start the application under test, run the browser suite and upload traces/screenshots on failure. The workflow should avoid depending on a developer laptop.",
    "code": "- run: npm ci\n- run: npx playwright install --with-deps\n- run: npm run build\n- run: npm run start -- --host 0.0.0.0 &\n- run: npx playwright test",
    "delivery": "I make the browser test environment explicit and preserve diagnostics so a failed selector or network issue can be investigated from the workflow run.",
    "followups": [
      "What evidence should be uploaded?",
      "How do you handle flaky browser tests?"
    ],
    "followupAnswers": [
      "Upload traces, screenshots, videos where useful and console/network logs, while excluding secrets and unrelated workspace data.",
      "Identify the flake source and fix timing, isolation or test data. A limited diagnostic retry can reduce noise, but it should not turn unstable tests into an accepted state."
    ],
    "traps": [
      "Running browser tests without waiting for the app to become ready.",
      "Uploading full environment files as test artifacts."
    ]
  },
  {
    "id": "gha-017",
    "title": "Environment variables in Vite",
    "level": "L2",
    "topic": "React CI",
    "what": "How do you handle frontend environment variables in CI?",
    "how": "Frontend variables used by a Vite build are compiled into the client bundle. Therefore they are configuration, not secrets. Real secrets must stay server-side.",
    "code": "- run: npm ci\n- run: npm run build\n  env:\n    VITE_API_BASE_URL: https://api.example.com",
    "delivery": "I assume anything shipped to the browser is public. I use VITE_* for non-secret configuration and keep credentials in backend services.",
    "followups": [
      "Can a VITE_ variable contain an API secret?",
      "How do you use different environments?"
    ],
    "followupAnswers": [
      "No. If the browser receives it, a user can inspect it. Use a backend or proxy for operations requiring confidential credentials.",
      "Use GitHub Environments or deployment configuration to select non-secret values per environment, while keeping sensitive credentials in protected secret stores."
    ],
    "traps": [
      "Calling a public frontend variable a secret.",
      "Putting database passwords in Vite env files."
    ]
  },
  {
    "id": "gha-018",
    "title": "Bundle size gate",
    "level": "L2",
    "topic": "React CI",
    "what": "How can CI detect an unexpectedly large frontend bundle?",
    "how": "After building, measure generated asset sizes and fail or warn according to a defined budget. The key is to compare against an explicit threshold instead of relying on intuition.",
    "code": "- run: npm run build\n- run: node scripts/check-bundle-size.mjs",
    "delivery": "I would put a simple budget gate in CI so a dependency or import change cannot silently create a large regression.",
    "followups": [
      "Why is bundle size a production concern?",
      "Would you block every small increase?"
    ],
    "followupAnswers": [
      "It affects download time, parse/execute cost and user experience, especially on slower networks and devices.",
      "I use a threshold with enough headroom to avoid noisy failures, and make larger increases intentional through review rather than blocking every byte."
    ],
    "traps": [
      "Optimizing only gzip size while ignoring runtime JavaScript cost.",
      "Setting a threshold so low that developers disable the check."
    ]
  },
  {
    "id": "gha-019",
    "title": "GITHUB_TOKEN permissions",
    "level": "L2",
    "topic": "Security",
    "what": "What are GITHUB_TOKEN permissions and why do they matter?",
    "how": "The workflow token is the credential Actions uses to access GitHub resources. Permissions should be least-privilege and explicitly narrowed for workflows that do not need write access.",
    "code": "permissions:\n  contents: read\n  packages: write",
    "delivery": "I start with the smallest permissions and add only what the workflow actually needs. A token with unnecessary write access increases blast radius if a step is compromised.",
    "followups": [
      "Where can permissions be set?",
      "Why is pull_request security important?"
    ],
    "followupAnswers": [
      "They can be set at workflow or job level. Job-level permissions are useful when only a deployment job needs elevated access.",
      "Pull requests, especially from forks, can execute code in a security-sensitive context. I avoid exposing privileged credentials to untrusted code and separate validation from trusted deployment workflows."
    ],
    "traps": [
      "Giving contents: write to every job by default.",
      "Assuming a PR workflow is safe because it is read-only in intent."
    ]
  },
  {
    "id": "gha-020",
    "title": "Secrets and variables",
    "level": "L2",
    "topic": "Security",
    "what": "How are GitHub Actions secrets different from variables?",
    "how": "Secrets are designed for sensitive values and are masked in logs under normal circumstances. Variables are for non-sensitive configuration. Neither should be treated as a replacement for proper secret management architecture.",
    "code": "env:\n  APP_ENV: test\nsteps:\n  - run: ./mvnw test\n    env:\n      DB_PASSWORD: ${{ secrets.DB_PASSWORD }}",
    "delivery": "I use secrets only where a credential is genuinely required and keep their scope as narrow as possible.",
    "followups": [
      "Can secrets be printed?",
      "When should you use an environment secret?"
    ],
    "followupAnswers": [
      "Do not print them. Masking is a safeguard, not permission to log sensitive values. I also avoid transforming secrets in ways that make masking unreliable.",
      "Use environment-level secrets when access should depend on a protected environment such as production and its approval policy."
    ],
    "traps": [
      "Passing secrets as command-line arguments that may be captured in process listings.",
      "Using repository secrets for every environment when stronger environment boundaries are available."
    ]
  },
  {
    "id": "gha-021",
    "title": "Fork pull requests",
    "level": "L2",
    "topic": "Security",
    "what": "Why should you be careful with secrets in fork PRs?",
    "how": "Forked code is controlled by someone outside the repository. If a workflow exposes a write-capable token or secret to that code, an attacker can modify the workflow execution to exfiltrate credentials or mutate resources.",
    "code": "on:\n  pull_request:\n    branches: [main]\npermissions:\n  contents: read",
    "delivery": "I keep untrusted PR validation separate from privileged deployment. The trusted path is triggered only after code is merged or otherwise explicitly approved.",
    "followups": [
      "What is the safer deployment trigger?",
      "Can pull_request_target solve everything?"
    ],
    "followupAnswers": [
      "A common pattern is validate on pull_request, then deploy from push to a protected branch or a controlled workflow_dispatch/release flow.",
      "No. pull_request_target changes the security context and can itself be dangerous if it checks out and executes untrusted PR code. It must be designed carefully."
    ],
    "traps": [
      "Using pull_request_target and checking out arbitrary PR code with secrets available.",
      "Assuming a fork cannot influence workflow inputs."
    ]
  },
  {
    "id": "gha-022",
    "title": "OIDC cloud authentication",
    "level": "L3",
    "topic": "Security",
    "what": "Why use OIDC instead of long-lived cloud access keys?",
    "how": "GitHub Actions can exchange an OIDC identity token for short-lived cloud credentials when the cloud trust policy allows the specific repository, branch, environment or workflow. This avoids storing long-lived access keys in GitHub secrets.",
    "code": "permissions:\n  id-token: write\n  contents: read\n\n# cloud login action configured with workload identity",
    "delivery": "I prefer workload identity federation because the credential lifetime and trust policy are controlled by the cloud provider instead of a permanent GitHub secret.",
    "followups": [
      "What does id-token: write allow?",
      "What should the cloud trust policy restrict?"
    ],
    "followupAnswers": [
      "It allows the workflow to request an OIDC identity token; it does not itself grant cloud access.",
      "Restrict it to the expected organization/repository, workflow or environment, and branch/ref claims as supported by the cloud provider."
    ],
    "traps": [
      "Thinking id-token: write is equivalent to cloud administrator access.",
      "Creating a trust policy that accepts tokens from any repository in the organization."
    ]
  },
  {
    "id": "gha-023",
    "title": "Dependency review",
    "level": "L3",
    "topic": "Security",
    "what": "How can Actions help prevent risky dependency changes?",
    "how": "A pull-request workflow can inspect dependency changes and fail or flag additions that violate policy. This complements vulnerability scanning by considering the change itself and its provenance.",
    "code": "- uses: actions/checkout@v5\n- uses: actions/dependency-review-action@v4",
    "delivery": "I use dependency review as an early gate and keep vulnerability scanning in the broader release process because they answer different questions.",
    "followups": [
      "Is dependency review enough for security?",
      "What would you block?"
    ],
    "followupAnswers": [
      "No. It is one layer. You still need patching, lockfile hygiene, build provenance, secret protection and runtime security.",
      "Block changes based on organization policy such as known high-risk dependencies, prohibited licenses or unsafe package changes, with an explicit exception process."
    ],
    "traps": [
      "Failing every dependency update without a remediation path.",
      "Assuming a package with no known CVE is automatically trustworthy."
    ]
  },
  {
    "id": "gha-024",
    "title": "Artifact attestations",
    "level": "L3",
    "topic": "Security",
    "what": "What problem do artifact attestations solve?",
    "how": "Attestations connect a build artifact with statements about how it was produced, such as source and workflow identity. They improve provenance and help a deployment system verify that an artifact came from an expected build process.",
    "code": "- name: Build image\n  run: docker build -t ghcr.io/acme/app:${{ github.sha }} .\n# Attest the image with the chosen GitHub provenance tooling",
    "delivery": "I treat provenance as part of the release evidence: not just 'this image exists', but 'this image came from this source and trusted workflow'.",
    "followups": [
      "Does provenance prove the code is secure?",
      "Where would you verify it?"
    ],
    "followupAnswers": [
      "No. Provenance proves origin and build relationships, not absence of vulnerabilities or malicious source code.",
      "Verification belongs at the promotion or deployment boundary, where policy can reject artifacts without acceptable provenance."
    ],
    "traps": [
      "Confusing provenance with vulnerability scanning.",
      "Generating provenance but never enforcing it."
    ]
  },
  {
    "id": "gha-025",
    "title": "Build and push to GHCR",
    "level": "L1",
    "topic": "Docker",
    "what": "How would you publish a Docker image to GitHub Container Registry?",
    "how": "Authenticate to GHCR with a token that has package write permission, build the image with an immutable commit tag, and push it. Production promotion should reference an immutable image identity such as a digest.",
    "code": "permissions:\n  contents: read\n  packages: write\n\n- run: echo '${{ secrets.GITHUB_TOKEN }}' | docker login ghcr.io -u '${{ github.actor }}' --password-stdin\n- run: docker build -t ghcr.io/acme/app:${{ github.sha }} .\n- run: docker push ghcr.io/acme/app:${{ github.sha }}",
    "delivery": "I tag with the commit SHA for traceability and avoid treating latest as the release identity.",
    "followups": [
      "Why use the commit SHA as a tag?",
      "Should production use latest?"
    ],
    "followupAnswers": [
      "It directly maps an image to source and avoids collisions between builds. I can still publish a human-friendly release tag in addition.",
      "I would not use latest as the production identity because it is mutable. I prefer an immutable digest or uniquely versioned tag selected by the release process."
    ],
    "traps": [
      "Pushing only latest.",
      "Using a package token with broader permissions than required."
    ]
  },
  {
    "id": "gha-026",
    "title": "Docker build cache",
    "level": "L2",
    "topic": "Docker",
    "what": "How can BuildKit caching speed up image builds in Actions?",
    "how": "BuildKit can export and import cache layers so unchanged Dockerfile stages do not need to rebuild from scratch. The cache should be treated as an optimization, not as a trusted artifact.",
    "code": "- uses: docker/build-push-action@v6\n  with:\n    context: .\n    push: true\n    tags: ghcr.io/acme/app:${{ github.sha }}\n    cache-from: type=gha\n    cache-to: type=gha,mode=max",
    "delivery": "I optimize the Dockerfile first, then use a scoped cache. A cache miss must still produce the same correct image.",
    "followups": [
      "What makes a Docker layer cache miss?",
      "Can cache poisoning be a concern?"
    ],
    "followupAnswers": [
      "Changes to a Dockerfile instruction or files included in its build context can invalidate that layer and later dependent layers.",
      "Yes. I keep cache scope and permissions controlled and never rely on cached data for secrets or correctness."
    ],
    "traps": [
      "Copying the entire repository before installing dependencies, causing unnecessary invalidation.",
      "Treating cache contents as trusted release artifacts."
    ]
  },
  {
    "id": "gha-027",
    "title": "Image scanning",
    "level": "L2",
    "topic": "Docker",
    "what": "Where should container image scanning happen?",
    "how": "Scan after the image is built and before promotion. The scanner should evaluate the exact image that will be pushed, and the pipeline should define severity thresholds and exception handling.",
    "code": "- uses: docker/build-push-action@v6\n  with:\n    load: true\n    tags: app:${{ github.sha }}\n- uses: aquasecurity/trivy-action@v0.28.0\n  with:\n    image-ref: app:${{ github.sha }}\n    severity: CRITICAL,HIGH\n    exit-code: '1'",
    "delivery": "I want the security gate tied to the immutable artifact rather than scanning a different source tree or a later rebuild.",
    "followups": [
      "Should every HIGH vulnerability block?",
      "What if the base image has an unavoidable CVE?"
    ],
    "followupAnswers": [
      "The organization should define policy based on exploitability, exposure and compensating controls. A blanket rule without ownership can stop releases without reducing risk.",
      "Document the exception with owner, rationale, expiry and compensating controls; do not silently ignore it forever."
    ],
    "traps": [
      "Scanning source but not the final image.",
      "Suppressing vulnerabilities globally to keep the pipeline green."
    ]
  },
  {
    "id": "gha-028",
    "title": "Multi-architecture builds",
    "level": "L2",
    "topic": "Docker",
    "what": "How do you build an image for amd64 and arm64?",
    "how": "Use Buildx with a multi-platform target. The resulting registry manifest points to architecture-specific images, allowing clients to pull the correct variant.",
    "code": "docker buildx build --platform linux/amd64,linux/arm64 \\\n  -t ghcr.io/acme/app:${GITHUB_SHA} --push .",
    "delivery": "I add multi-architecture builds when the runtime estate requires them and verify native dependencies behave on both architectures.",
    "followups": [
      "Does the build run natively on both architectures?",
      "Why might a Java image still fail on arm64?"
    ],
    "followupAnswers": [
      "Buildx can use emulation or native builders. The pipeline should be explicit about performance and compatibility trade-offs.",
      "Native libraries, base images or external binaries may lack an arm64 build even if the Java application itself is portable."
    ],
    "traps": [
      "Assuming every third-party binary is architecture-neutral.",
      "Publishing a multi-arch manifest without testing the image on supported platforms."
    ]
  },
  {
    "id": "gha-029",
    "title": "Environments and approvals",
    "level": "L2",
    "topic": "Deployments",
    "what": "How do GitHub Environments protect production?",
    "how": "An environment can hold environment-specific secrets and protection rules such as required reviewers. A deployment job references the environment, so promotion can be gated at the environment boundary.",
    "code": "jobs:\n  deploy-prod:\n    environment:\n      name: production\n    steps:\n      - run: ./deploy.sh",
    "delivery": "I put the production approval boundary on the deployment job, not on a developer-controlled shell flag.",
    "followups": [
      "Can anyone select production?",
      "What belongs in an environment?"
    ],
    "followupAnswers": [
      "No. Repository permissions and environment protection rules should restrict who can trigger or approve production deployment. The deployment job should also validate the target artifact.",
      "Environment-specific secrets and deployment protection rules belong there; ordinary build configuration belongs in source-controlled workflow configuration."
    ],
    "traps": [
      "Using a boolean input like deploy_prod=true as the only production control.",
      "Putting every repository secret into the production environment."
    ]
  },
  {
    "id": "gha-030",
    "title": "Concurrency controls",
    "level": "L2",
    "topic": "Deployments",
    "what": "Why use concurrency in deployment workflows?",
    "how": "Concurrency prevents overlapping runs from racing to deploy the same environment. A common policy cancels stale validation runs but serializes production deployments.",
    "code": "concurrency:\n  group: production\n  cancel-in-progress: false",
    "delivery": "I use different concurrency policies for CI and deployment: stale PR builds can often be cancelled, while production releases should not be cancelled blindly.",
    "followups": [
      "Can concurrency cancel a running deployment?",
      "What is a useful group key?"
    ],
    "followupAnswers": [
      "Yes, depending on configuration. For production I usually avoid cancellation of an active deployment because interruption can leave the environment in an uncertain state.",
      "Use a stable environment or service key such as production-api so only mutually exclusive deployments share the lock."
    ],
    "traps": [
      "Using one global concurrency group for every branch.",
      "Cancelling an active production deployment without verifying the platform's rollback behavior."
    ]
  },
  {
    "id": "gha-031",
    "title": "Artifacts between jobs",
    "level": "L2",
    "topic": "Deployments",
    "what": "How do you pass a built JAR between jobs?",
    "how": "Upload it after the build and download it in the deployment job. This makes the deployment consume the tested artifact rather than rebuilding it.",
    "code": "- uses: actions/upload-artifact@v4\n  with:\n    name: app\n    path: target/app.jar\n\n- uses: actions/download-artifact@v4\n  with:\n    name: app",
    "delivery": "I use artifacts for workflow-to-workflow-stage handoff and package registries for longer-lived release artifacts.",
    "followups": [
      "Are artifacts immutable?",
      "When would you use a registry instead?"
    ],
    "followupAnswers": [
      "They should be treated as controlled build outputs, but the exact retention and overwrite behavior depends on the artifact service and workflow design. Give artifacts unique names for release evidence.",
      "Use a registry when the artifact is a deployable package such as a container image that needs lifecycle management and access across workflows or clusters."
    ],
    "traps": [
      "Rebuilding instead of downloading the tested artifact.",
      "Using an artifact store as a general-purpose database."
    ]
  },
  {
    "id": "gha-032",
    "title": "Release tags",
    "level": "L3",
    "topic": "Deployments",
    "what": "How would you create a release image tag safely?",
    "how": "Use an immutable source reference such as a Git commit SHA and optionally add a release version tag. The release workflow should ensure the version is unique and points to the already-built artifact.",
    "code": "IMAGE=ghcr.io/acme/app\ndocker tag $IMAGE:${GITHUB_SHA} $IMAGE:${VERSION}\ndocker push $IMAGE:${VERSION}",
    "delivery": "I separate artifact identity from the human release label: the SHA or digest tells me exactly what ran, while the semantic version helps humans communicate the release.",
    "followups": [
      "What if someone reuses the version tag?",
      "Would you overwrite an existing release?"
    ],
    "followupAnswers": [
      "The release process should reject reuse or require an explicit policy. Immutable release tags make incident investigation and rollback much safer.",
      "Normally no. If releases are immutable, overwriting would break traceability and could cause different environments to run different code under the same version."
    ],
    "traps": [
      "Allowing mutable production version tags.",
      "Using the tag alone as proof of the binary contents."
    ]
  },
  {
    "id": "gha-033",
    "title": "Blue-green deployment",
    "level": "L3",
    "topic": "Deployments",
    "what": "How would Actions orchestrate blue-green deployment?",
    "how": "Build once, deploy the new version to the inactive environment, run health and smoke checks, then switch traffic at the routing layer. Keep the previous environment available for rapid rollback.",
    "code": "jobs:\n  deploy-green:\n    steps:\n      - run: ./deploy.sh green ${{ github.sha }}\n      - run: ./smoke-test.sh green\n      - run: ./switch-traffic.sh green",
    "delivery": "I want the traffic switch to be a small, auditable operation after the new environment has already proven healthy.",
    "followups": [
      "Where do you store the active color?",
      "When is rollback possible?"
    ],
    "followupAnswers": [
      "The routing layer or deployment controller should own the active target. Do not rely on a developer remembering which color is live.",
      "Rollback is fastest before the old environment is destroyed: switch traffic back after confirming the previous version remains healthy."
    ],
    "traps": [
      "Switching traffic before smoke tests complete.",
      "Destroying the old environment immediately after deployment."
    ]
  },
  {
    "id": "gha-034",
    "title": "Canary deployment",
    "level": "L3",
    "topic": "Deployments",
    "what": "How does a canary pipeline differ from blue-green?",
    "how": "Canary exposes the new version to a small percentage or selected traffic first. Metrics determine whether exposure increases or the release rolls back.",
    "code": "- run: ./deploy-canary.sh ${{ github.sha }} --percent 5\n- run: ./verify-metrics.sh\n- run: ./promote.sh --percent 100",
    "delivery": "I treat canary as a feedback loop: deploy a small slice, observe objective health signals, then progressively increase exposure.",
    "followups": [
      "Which metrics matter?",
      "Who decides when to promote?"
    ],
    "followupAnswers": [
      "Error rate, latency, saturation and business-critical indicators are common. The exact SLOs should be tied to service risk rather than arbitrary thresholds.",
      "Prefer an automated policy for objective gates, with human approval for high-risk changes where business context matters."
    ],
    "traps": [
      "Using CPU alone as a release signal.",
      "Promoting because the canary 'looks fine' without defined thresholds."
    ]
  },
  {
    "id": "gha-035",
    "title": "Kubernetes deployment",
    "level": "L3",
    "topic": "Deployments",
    "what": "How would Actions deploy a container to Kubernetes?",
    "how": "The workflow authenticates to the cluster through a controlled identity, updates the workload to the immutable image reference, waits for rollout health, and fails if the deployment does not become ready.",
    "code": "kubectl -n app set image deployment/api api=ghcr.io/acme/api:${GITHUB_SHA}\nkubectl -n app rollout status deployment/api --timeout=180s",
    "delivery": "I keep cluster credentials short-lived where possible and make rollout verification part of the same release job.",
    "followups": [
      "Why wait for rollout status?",
      "How do you roll back?"
    ],
    "followupAnswers": [
      "A successful kubectl command only means the API accepted the change. rollout status verifies that the new replicas actually become ready.",
      "Use the deployment controller's rollback mechanism or redeploy the last known-good immutable image, then verify the rollback state."
    ],
    "traps": [
      "Stopping after kubectl apply exits zero.",
      "Deploying a mutable latest tag and losing the exact image identity."
    ]
  },
  {
    "id": "gha-036",
    "title": "Deployment summaries",
    "level": "L3",
    "topic": "Deployments",
    "what": "How do you make a workflow useful to an on-call engineer?",
    "how": "Publish concise outputs: version, commit SHA, artifact digest, environment, deployment result and links to logs or dashboards. Avoid dumping huge logs into summaries.",
    "code": "- name: Summary\n  run: |\n    echo '### Deployment' >> $GITHUB_STEP_SUMMARY\n    echo '- Environment: production' >> $GITHUB_STEP_SUMMARY\n    echo '- Commit: $GITHUB_SHA' >> $GITHUB_STEP_SUMMARY",
    "delivery": "I design pipeline output as operational evidence so an engineer can answer what changed, where, and whether verification passed without reading every step.",
    "followups": [
      "What should never be in a summary?",
      "Where should detailed diagnostics live?"
    ],
    "followupAnswers": [
      "Never put secrets, tokens or sensitive customer data in summaries. Keep the content minimal and safe to share with the intended repository audience.",
      "Detailed logs, test reports, deployment-controller events and observability dashboards should hold the deeper evidence."
    ],
    "traps": [
      "Copying environment variables wholesale into the summary.",
      "Making the summary the only place where critical logs exist."
    ]
  },
  {
    "id": "gha-037",
    "title": "Matrix builds",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "What is a matrix strategy?",
    "how": "A matrix expands one job definition across combinations such as Java versions, operating systems or Node versions. It is useful for compatibility testing without duplicating YAML.",
    "code": "strategy:\n  matrix:\n    java: ['17','21']\n    os: [ubuntu-latest, windows-latest]\nruns-on: ${{ matrix.os }}",
    "delivery": "I use a matrix for supported compatibility dimensions and keep the matrix small enough that CI remains actionable.",
    "followups": [
      "Can matrix jobs run in parallel?",
      "When should you avoid a matrix?"
    ],
    "followupAnswers": [
      "Yes, matrix combinations are separate jobs and can run in parallel subject to runner availability.",
      "Avoid it when combinations are redundant, extremely expensive or represent unsupported environments. Use targeted compatibility tests instead."
    ],
    "traps": [
      "Creating every possible version combination without a support policy.",
      "Ignoring the cost of multiplying integration tests by every matrix dimension."
    ]
  },
  {
    "id": "gha-038",
    "title": "Fail-fast strategy",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "What does fail-fast mean in a matrix?",
    "how": "With fail-fast enabled, a failing matrix job can cancel in-progress or queued matrix jobs depending on strategy configuration. It can save time when one failure makes the remaining combinations less useful.",
    "code": "strategy:\n  fail-fast: true\n  matrix:\n    node: [20, 22]",
    "delivery": "I enable fail-fast when a matrix is mainly validating one compatibility contract and continuing after a fundamental failure adds little value.",
    "followups": [
      "Would you use fail-fast for release verification?",
      "Can one matrix entry be allowed to fail?"
    ],
    "followupAnswers": [
      "For release-critical compatibility evidence I may prefer all supported combinations to finish so the failure picture is complete.",
      "Yes, continue-on-error can be used selectively, but I make the exception explicit so it cannot silently become a supported release path."
    ],
    "traps": [
      "Allowing the production matrix entry to fail without blocking release.",
      "Using fail-fast to hide additional independent failures."
    ]
  },
  {
    "id": "gha-039",
    "title": "Reusable workflows",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "What is a reusable workflow?",
    "how": "A reusable workflow is invoked by another workflow through workflow_call. It centralizes repeated pipeline behavior while allowing callers to pass controlled inputs and secrets.",
    "code": "on:\n  workflow_call:\n    inputs:\n      environment:\n        required: true\n        type: string",
    "delivery": "I use reusable workflows for organization-wide patterns such as build, scan or deployment contracts, with a small explicit interface.",
    "followups": [
      "How are reusable workflows different from composite actions?",
      "Can a reusable workflow define multiple jobs?"
    ],
    "followupAnswers": [
      "A reusable workflow can contain jobs and orchestration. A composite action packages steps for use inside a job. I choose based on the level of reuse needed.",
      "Yes. It can define a complete job graph and be called by another workflow."
    ],
    "traps": [
      "Creating a reusable workflow with dozens of hidden assumptions.",
      "Passing arbitrary shell code as an input instead of defining a typed contract."
    ]
  },
  {
    "id": "gha-040",
    "title": "Composite actions",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "When would you create a composite action?",
    "how": "Use a composite action to package repeated step sequences such as setting up a tool, running a standard validation or producing common metadata. It lives in an action.yml file.",
    "code": "runs:\n  using: composite\n  steps:\n    - shell: bash\n      run: ./scripts/standard-check.sh",
    "delivery": "I keep composite actions focused on reusable steps and document inputs, outputs and expected permissions.",
    "followups": [
      "Where can composite actions live?",
      "What is a limitation compared with reusable workflows?"
    ],
    "followupAnswers": [
      "They can live in the repository or a separate action repository and are referenced through the appropriate path or repository syntax.",
      "A composite action is step-level reuse; it does not create a multi-job orchestration graph like a reusable workflow."
    ],
    "traps": [
      "Putting deployment policy into a hidden composite with broad permissions.",
      "Assuming composite actions isolate shell commands from the caller."
    ]
  },
  {
    "id": "gha-041",
    "title": "Workflow outputs",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "How do jobs pass structured information to later jobs?",
    "how": "A job can expose outputs derived from step outputs, and dependent jobs can read them through needs. This is useful for image tags, generated versions or deployment targets.",
    "code": "jobs:\n  build:\n    outputs:\n      image: ${{ steps.meta.outputs.image }}\n    steps:\n      - id: meta\n        run: echo 'image=ghcr.io/acme/app:123' >> $GITHUB_OUTPUT\n  deploy:\n    needs: build\n    steps:\n      - run: echo '${{ needs.build.outputs.image }}'",
    "delivery": "I keep outputs small and deterministic. Large files belong in artifacts or registries, not output strings.",
    "followups": [
      "Are outputs secret-safe?",
      "What if an output is missing?"
    ],
    "followupAnswers": [
      "Do not use outputs to transport secrets. Even if masking occurs, the value becomes part of workflow metadata and can leak through downstream commands.",
      "Fail the job or apply a safe default based on the contract; do not silently deploy an unintended image or environment."
    ],
    "traps": [
      "Passing a private key as a job output.",
      "Using a missing output to fall back to latest."
    ]
  },
  {
    "id": "gha-042",
    "title": "Conditional execution",
    "level": "L2",
    "topic": "Advanced Actions",
    "what": "How do you run cleanup after failure?",
    "how": "Use conditional expressions such as always() or !cancelled() carefully. Cleanup should release temporary resources without accidentally performing destructive production actions after a failure.",
    "code": "- name: Collect logs\n  if: ${{ !cancelled() }}\n  uses: actions/upload-artifact@v4\n  with:\n    name: diagnostics\n    path: logs/",
    "delivery": "I use conditions to preserve evidence and clean temporary resources, but I keep privileged actions behind explicit success and authorization conditions.",
    "followups": [
      "When would always() be dangerous?",
      "How do you detect a failed dependency?"
    ],
    "followupAnswers": [
      "always() runs even when prior steps fail, so using it around a destructive or production action can turn an error path into an unsafe action.",
      "Use job/step status and needs results explicitly, for example checking needs.build.result == 'success' before deployment."
    ],
    "traps": [
      "Putting production deployment in an always() block.",
      "Assuming a later step runs only when earlier steps succeed without checking conditions."
    ]
  },
  {
    "id": "gha-043",
    "title": "Workflow command injection",
    "level": "L3",
    "topic": "Advanced Actions",
    "what": "How can untrusted GitHub context lead to command injection?",
    "how": "Some event fields such as PR titles, branch names or issue text can be attacker-controlled. Interpolating them directly into shell code can turn data into executable syntax.",
    "code": "# Safer pattern\n- env:\n    PR_TITLE: ${{ github.event.pull_request.title }}\n  run: |\n    printf '%s\\n' \"$PR_TITLE\"",
    "delivery": "I treat event context as untrusted input and pass it through environment variables or validated arguments rather than concatenating it into shell source.",
    "followups": [
      "Which contexts deserve special care?",
      "Does quoting always solve it?"
    ],
    "followupAnswers": [
      "Pull request titles, commit messages, branch names, issue text and user-provided workflow inputs deserve careful handling.",
      "Quoting reduces shell interpretation risk, but validation and avoiding eval-like behavior are stronger controls. The safest approach is to keep data separate from code."
    ],
    "traps": [
      "run: echo '${{ github.event.pull_request.title }}' when the value can contain shell syntax.",
      "Using eval or constructing shell source from workflow inputs."
    ]
  },
  {
    "id": "gha-044",
    "title": "Third-party action governance",
    "level": "L3",
    "topic": "Advanced Actions",
    "what": "How do you govern third-party Actions?",
    "how": "Review ownership, source, permissions, release history and required tokens. Pin trusted actions and update them deliberately rather than allowing arbitrary action versions.",
    "code": "- uses: actions/checkout@v5\n# For high assurance, pin to an audited commit SHA",
    "delivery": "I treat Actions as executable dependencies. They should go through the same trust and update process as application libraries.",
    "followups": [
      "Should every action be copied into the repository?",
      "How do you update pinned actions?"
    ],
    "followupAnswers": [
      "Not necessarily. Central governance and immutable references can provide strong control while keeping maintenance practical.",
      "Review the upstream change, update the pin in a pull request, run the full pipeline and record the reason for the update."
    ],
    "traps": [
      "Using an action because it has many stars without reviewing its code or permissions.",
      "Allowing floating major tags in a high-assurance release workflow without policy."
    ]
  },
  {
    "id": "gha-045",
    "title": "Self-hosted runner security",
    "level": "L3",
    "topic": "Advanced Actions",
    "what": "What are the main risks of self-hosted runners?",
    "how": "A self-hosted runner is persistent infrastructure under your control. Workspace contamination, token leakage, network access and untrusted pull-request code can create a larger blast radius than ephemeral hosted runners.",
    "code": "runs-on: [self-hosted, linux, production-tools]",
    "delivery": "I isolate self-hosted runners, restrict which workflows can use them, keep them patched, avoid untrusted PR execution, and remove persistent secrets from the runner where possible.",
    "followups": [
      "Should production deployers run arbitrary PR code?",
      "How do you clean a runner?"
    ],
    "followupAnswers": [
      "No. A production-capable runner should not execute arbitrary untrusted code because that code may access the runner's network and filesystem.",
      "Prefer ephemeral runners or aggressive workspace cleanup and image re-provisioning. Also rotate credentials and inspect persistence mechanisms."
    ],
    "traps": [
      "Putting self-hosted runners on the same trust zone as production databases.",
      "Allowing public repositories to execute on a privileged shared runner."
    ]
  },
  {
    "id": "gha-046",
    "title": "Runner labels",
    "level": "L3",
    "topic": "Advanced Actions",
    "what": "How do runner labels help scheduling?",
    "how": "Labels describe capabilities such as operating system, architecture or installed tools. A job can request a compatible label set and GitHub schedules it on a runner matching those labels.",
    "code": "runs-on: [self-hosted, linux, arm64, docker]",
    "delivery": "I use labels to express capability, not ownership. The runner fleet should enforce the security boundary separately.",
    "followups": [
      "Can labels enforce security?",
      "What happens if no runner matches?"
    ],
    "followupAnswers": [
      "No. Labels are scheduling metadata, not an authorization boundary. Repository and organization controls must decide who can use the runner.",
      "The job stays queued until a compatible runner becomes available, so missing capacity should be visible through queue-time monitoring."
    ],
    "traps": [
      "Treating a label like a security role.",
      "Adding increasingly specific labels without monitoring runner capacity."
    ]
  },
  {
    "id": "gha-047",
    "title": "Debugging a failed workflow",
    "level": "L2",
    "topic": "Operations",
    "what": "How do you debug a failed Actions run systematically?",
    "how": "Start with the first failing step, inspect the exact command and relevant logs, reproduce locally when practical, then compare runner environment, permissions, inputs and artifacts. Avoid fixing later symptoms first.",
    "code": "- name: Diagnostics\n  if: ${{ failure() }}\n  run: |\n    java -version\n    node --version\n    env | sort | sed 's/=.*//'",
    "delivery": "I debug from the first broken boundary: trigger, checkout, toolchain, dependency install, test, artifact, credential, deployment or verification.",
    "followups": [
      "What if it works locally?",
      "How do you debug permissions?"
    ],
    "followupAnswers": [
      "Compare runtime versions, OS assumptions, filesystem paths, network access, environment variables and clean-install behavior. CI should not depend on local state.",
      "Inspect the job's effective permissions and the action/API being called. Grant only the missing scope and keep the change job-specific when possible."
    ],
    "traps": [
      "Rerunning repeatedly without reading the first failure.",
      "Printing secrets to discover whether authentication works."
    ]
  },
  {
    "id": "gha-048",
    "title": "Flaky workflow diagnosis",
    "level": "L2",
    "topic": "Operations",
    "what": "How do you distinguish a flaky test from an infrastructure failure?",
    "how": "Look at repeated runs, failure signatures and external signals. Test flakes often vary at assertion or timing points; infrastructure failures show runner, network, dependency or service-level symptoms.",
    "code": "- name: Test\n  run: ./mvnw test\n- name: Upload reports\n  if: ${{ !cancelled() }}\n  uses: actions/upload-artifact@v4",
    "delivery": "I collect enough evidence to classify the failure before adding retries. Retries are a containment tool, not a root-cause fix.",
    "followups": [
      "When is retry acceptable?",
      "How do you report flaky tests?"
    ],
    "followupAnswers": [
      "A limited retry is reasonable for known transient infrastructure failures or as a temporary mitigation, with monitoring and an owner. It should not hide deterministic product defects.",
      "Track the test, failure rate, owner and issue reference. Make flakiness visible so the suite does not normalize unreliable feedback."
    ],
    "traps": [
      "Adding three retries to every test.",
      "Closing flaky-test tickets because the retry made the pipeline green."
    ]
  },
  {
    "id": "gha-049",
    "title": "Rerun failed jobs",
    "level": "L2",
    "topic": "Operations",
    "what": "What is the value of rerunning failed jobs?",
    "how": "A rerun can distinguish a transient runner/network failure from a deterministic code failure, but it should not erase the original evidence. The rerun result should be interpreted alongside the first failure.",
    "code": "# No YAML required: rerun from the Actions UI\n# For deterministic pipelines, prefer fixing the cause over relying on reruns.",
    "delivery": "I use reruns as a diagnostic signal, not as the definition of success.",
    "followups": [
      "Should a release auto-rerun indefinitely?",
      "What should you compare?"
    ],
    "followupAnswers": [
      "No. Repeated retries can delay delivery while hiding an unstable system. Put a bounded policy around transient failures.",
      "Compare the first and rerun logs, runner allocation, external service state and exact commit to determine whether the failure was environmental."
    ],
    "traps": [
      "Treating the second green run as proof the first failure was irrelevant.",
      "Using retries to compensate for deterministic failing tests."
    ]
  },
  {
    "id": "gha-050",
    "title": "Rollback workflow",
    "level": "L3",
    "topic": "Operations",
    "what": "What should a rollback workflow require?",
    "how": "A rollback should select a known-good immutable artifact, verify the target environment and permissions, execute the platform rollback, and confirm health. It should be faster and simpler than a forward deployment.",
    "code": "workflow_dispatch:\n  inputs:\n    image_digest:\n      description: 'Known-good image digest'\n      required: true\n      type: string",
    "delivery": "I design rollback as a first-class, audited operation rather than an improvised reverse deployment.",
    "followups": [
      "Who should be allowed to rollback?",
      "Why require an immutable digest?"
    ],
    "followupAnswers": [
      "Operators or on-call engineers with appropriate production permissions should be able to trigger it, with the same environment protection and audit trail as deployment.",
      "A digest identifies exact image content. A mutable tag could point somewhere else when the rollback is executed."
    ],
    "traps": [
      "Allowing arbitrary image references in rollback inputs.",
      "Assuming rollback works without verifying database compatibility."
    ]
  },
  {
    "id": "gha-051",
    "title": "Database migration safety",
    "level": "L3",
    "topic": "Operations",
    "what": "How should CI/CD handle database migrations?",
    "how": "Schema changes should be versioned, tested and deployed with compatibility in mind. Application and schema rollout should tolerate the transition when old and new versions overlap.",
    "code": "- run: ./mvnw -B test\n- name: Migration check\n  run: ./scripts/migration-check.sh\n# Production migration is a controlled deployment step",
    "delivery": "I avoid coupling a destructive schema change to an application startup command when a safer expand-migrate-contract sequence is possible.",
    "followups": [
      "What is expand-and-contract?",
      "Should CI run production migrations?"
    ],
    "followupAnswers": [
      "Expand adds backward-compatible schema elements, migrate moves data, and contract removes obsolete elements only after all consumers stop using them.",
      "CI should validate migrations against disposable databases. Production execution belongs to a controlled release process with backup/observability/rollback planning."
    ],
    "traps": [
      "Dropping columns in the same release that stops reading them.",
      "Assuming application rollback automatically rolls back an irreversible database change."
    ]
  },
  {
    "id": "gha-052",
    "title": "Monorepo path filters",
    "level": "L3",
    "topic": "Architecture",
    "what": "How can a monorepo avoid running every pipeline for every change?",
    "how": "Use path filters at the trigger level or job conditions so changes affect only relevant services. Shared libraries should still trigger dependent validation.",
    "code": "on:\n  pull_request:\n    paths:\n      - 'services/orders/**'\n      - 'libs/common/**'",
    "delivery": "I optimize monorepo CI with dependency-aware filtering, but I keep a full validation path for shared infrastructure or scheduled assurance.",
    "followups": [
      "What is the danger of incorrect filters?",
      "How do you test the filters?"
    ],
    "followupAnswers": [
      "A false negative can allow broken code to merge because required checks never ran. Filter logic is therefore part of the build policy.",
      "Create representative change scenarios and verify which jobs are required. Keep a periodic full build to catch dependency-graph mistakes."
    ],
    "traps": [
      "Filtering so aggressively that shared library changes skip consumers.",
      "Having no full-build safety net."
    ]
  },
  {
    "id": "gha-053",
    "title": "Service-specific deployment",
    "level": "L3",
    "topic": "Architecture",
    "what": "How do you design Actions for a microservices repository?",
    "how": "Separate build/test/deploy responsibilities per service while centralizing reusable standards. A change to one service should produce and deploy only the affected artifact unless shared dependencies require broader validation.",
    "code": "jobs:\n  orders:\n    if: ${{ needs.changes.outputs.orders == 'true' }}\n  payments:\n    if: ${{ needs.changes.outputs.payments == 'true' }}",
    "delivery": "I want independent service delivery without creating independent security or quality standards.",
    "followups": [
      "How do you calculate changed services?",
      "Would every service have its own workflow?"
    ],
    "followupAnswers": [
      "Use path filters or a dedicated change-detection job that maps files to services and shared dependencies.",
      "It can, but reusable workflows are usually better for enforcing a consistent build/scan/deploy contract across services."
    ],
    "traps": [
      "Copy-pasting 15 nearly identical workflows.",
      "Deploying a service whose shared library contract was not validated."
    ]
  },
  {
    "id": "gha-054",
    "title": "Jenkins to Actions migration",
    "level": "L3",
    "topic": "Architecture",
    "what": "How would you migrate a Jenkins pipeline to GitHub Actions?",
    "how": "Map the existing stages and controls first, then reproduce the behavior with Actions jobs, reusable workflows, secrets/environments, artifacts and deployment identities. Validate parity before removing Jenkins.",
    "code": "# Conceptual mapping\n# Jenkins stage('Build') -> Actions job/step\n# Jenkins credentials -> GitHub Environment/OIDC\n# Jenkins archive -> upload-artifact\n# Jenkins agent -> GitHub-hosted/self-hosted runner",
    "delivery": "I migrate controls, not syntax. The success criterion is equivalent or stronger security, traceability and release behavior.",
    "followups": [
      "What should not be migrated one-to-one?",
      "How do you cut over safely?"
    ],
    "followupAnswers": [
      "Long-lived Jenkins credentials should be replaced with short-lived identities where possible, and shared-library logic may become reusable workflows rather than direct YAML copies.",
      "Run both pipelines against the same commit, compare artifacts and deployment outcomes, then move one service or environment at a time with rollback to Jenkins during the transition window."
    ],
    "traps": [
      "Copying Jenkins credentials into repository secrets without reviewing their scope.",
      "Deleting Jenkins before proving the replacement path."
    ]
  },
  {
    "id": "gha-055",
    "title": "Production pipeline architecture",
    "level": "L3",
    "topic": "Architecture",
    "what": "What does a mature GitHub Actions production pipeline look like?",
    "how": "It has a trusted CI path, immutable artifacts, security and quality gates, controlled promotion, environment protection, short-lived deployment identity, observability checks and a tested rollback path.",
    "code": "Commit → PR checks → merge → build once → test/scan → publish immutable artifact → approve → deploy → verify → promote/rollback",
    "delivery": "I judge maturity by the guarantees around the pipeline, not by the number of YAML files: reproducibility, least privilege, provenance, safe promotion and recovery matter most.",
    "followups": [
      "What is the most important control?",
      "How do you keep the pipeline maintainable?"
    ],
    "followupAnswers": [
      "There is no single control. I prioritize least privilege, immutable artifacts and an independently verified deployment boundary because they reduce the blast radius of pipeline compromise and release mistakes.",
      "Use reusable workflows, clear ownership, small interfaces, versioned actions and automated tests for workflow behavior. Avoid hidden shell magic."
    ],
    "traps": [
      "Calling a pipeline mature because it has many stages.",
      "Putting every environment and service into one enormous workflow."
    ]
  },
  {
    "id": "gha-056",
    "title": "End-to-end production path",
    "level": "L3",
    "topic": "Architecture",
    "what": "How would you connect React, Spring Boot, Docker, Kubernetes and Actions?",
    "how": "Actions builds the React frontend and Spring Boot backend, validates both, builds immutable images, scans and publishes them, then deploys the exact image digests to Kubernetes. Kubernetes handles runtime health and scaling while Actions provides release orchestration and auditability.",
    "code": "React build → API test → Docker build → scan → GHCR → Kubernetes rollout → readiness → smoke test → metrics",
    "delivery": "I would make the commit SHA and image digests the thread connecting source, CI evidence, registry artifacts and Kubernetes deployment state.",
    "followups": [
      "Where does Docker Compose fit?",
      "Where should runtime secrets live?"
    ],
    "followupAnswers": [
      "Compose is excellent for local multi-service development; Kubernetes becomes the production orchestration layer when operational requirements justify it.",
      "Use Kubernetes Secrets or, preferably for higher assurance, an external secret manager/workload identity integration. Do not bake secrets into images or frontend bundles."
    ],
    "traps": [
      "Using the same Compose configuration as a production Kubernetes substitute.",
      "Putting cloud/database credentials in the React build."
    ]
  },
  {
    "id": "gha-057",
    "title": "Manual approvals without bypasses",
    "level": "L2",
    "topic": "Operations",
    "what": "How do you make a manual production approval meaningful?",
    "how": "The approval should sit immediately before the privileged deployment action, and the deployment job should consume a fixed artifact already built and scanned. Approval should not allow arbitrary code or image changes.",
    "code": "environment:\n  name: production\n# protected reviewers configured in the repository settings",
    "delivery": "I make approval a decision about a known release candidate, not a prompt to choose arbitrary deployment inputs.",
    "followups": [
      "Can an approver change the artifact?",
      "What if the approval is rejected?"
    ],
    "followupAnswers": [
      "The release candidate should be fixed by the workflow before approval. Changing it should require a new controlled run so the reviewer sees the new artifact evidence.",
      "The deployment job should stop without mutating production; the release can be corrected and re-run through the normal path."
    ],
    "traps": [
      "Approving a mutable latest tag.",
      "Allowing hidden inputs to change after approval."
    ]
  },
  {
    "id": "gha-058",
    "title": "Timeouts and hung jobs",
    "level": "L2",
    "topic": "Operations",
    "what": "How do you prevent a workflow from hanging indefinitely?",
    "how": "Set job or command timeouts appropriate to the workload and make external waits bounded. A timeout should produce diagnostics that explain what was waiting.",
    "code": "jobs:\n  deploy:\n    timeout-minutes: 20\n    steps:\n      - run: ./deploy.sh",
    "delivery": "I prefer bounded failure over an indefinitely occupied runner, especially for deployment and integration-test stages.",
    "followups": [
      "Should every job have the same timeout?",
      "What should happen after timeout?"
    ],
    "followupAnswers": [
      "No. Unit tests, Docker builds and production rollouts have different expected durations and should have evidence-based limits.",
      "Collect diagnostics where possible, release temporary resources, and surface the timeout as a failure requiring investigation rather than silently retrying forever."
    ],
    "traps": [
      "Setting one huge timeout to avoid thinking about performance.",
      "Leaving external polling loops unbounded."
    ]
  },
  {
    "id": "gha-059",
    "title": "Scheduled maintenance workflows",
    "level": "L2",
    "topic": "Operations",
    "what": "When are scheduled workflows useful?",
    "how": "Schedules are useful for dependency refresh checks, security audits, cleanup or periodic full builds that are not tied to every commit.",
    "code": "on:\n  schedule:\n    - cron: '30 2 * * 1'",
    "delivery": "I keep scheduled workflows idempotent and low-risk because they run without a developer actively watching them.",
    "followups": [
      "Can scheduled workflows deploy production?",
      "How do you avoid duplicate work?"
    ],
    "followupAnswers": [
      "They can, but production changes should normally require stronger controls than a time-based trigger alone. Use protected environments or a controlled release workflow.",
      "Use concurrency, sensible schedules and change detection so periodic jobs do not compete with active releases."
    ],
    "traps": [
      "Running destructive cleanup against production on an unprotected schedule.",
      "Assuming scheduled jobs always have fresh secrets and dependencies."
    ]
  },
  {
    "id": "gha-060",
    "title": "Manual workflow inputs",
    "level": "L2",
    "topic": "Operations",
    "what": "How should workflow_dispatch inputs be designed?",
    "how": "Inputs should be small, typed where supported, validated and constrained to safe values. They are an operator interface, not a reason to expose arbitrary shell commands.",
    "code": "on:\n  workflow_dispatch:\n    inputs:\n      environment:\n        required: true\n        type: choice\n        options: [staging, production]",
    "delivery": "I allow operators to choose among safe release parameters, then validate again inside the privileged job.",
    "followups": [
      "Is a choice input enough authorization?",
      "How do you validate a version?"
    ],
    "followupAnswers": [
      "No. UI constraints are not a security boundary. The job must enforce authorization and target policy independently.",
      "Validate it against an expected format or known artifact list before using it in deployment commands."
    ],
    "traps": [
      "Accepting a free-form shell command as an input.",
      "Trusting UI validation without server-side workflow checks."
    ]
  },
];
