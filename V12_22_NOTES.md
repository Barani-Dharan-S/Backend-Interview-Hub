# V12.22 — Full-Stack Scenarios

## What changed
- Added a dedicated **Full Stack Scenarios** track.
- Added **40 production-oriented scenarios** across debugging, security, reliability, performance, architecture, deployment, database, messaging, testing and case studies.
- Each scenario includes: situation, investigation/diagnosis, solution, interview delivery, concrete follow-up questions with actual technical answers, and interview traps.
- Added sidebar navigation and header support for the new track.
- UI structure remains unchanged; this version adds content/functionality only.

## Validation
- 40 unique scenario IDs (`scenario-001` through `scenario-040`).
- 120 concrete follow-up answers.
- `node --check src/data/fullstackScenarios.js` passed.
- `node --check src/data/fullstack.js` passed.
- Full Vite build could not be run in the generation environment because dependencies/package-lock were unavailable there; test with `npm install && npm run dev` locally before pushing.

## Focus
This track is intended to bridge individual technology knowledge and real-world full-stack interview reasoning: **symptom → evidence → root cause → fix → trade-offs**.
