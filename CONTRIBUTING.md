# Contributing

## Development setup

```bash
npm install
npm run dev
```

Before submitting changes, create a production build:

```bash
npm run build
```

## Project principles

Please keep contributions aligned with the purpose of the hub:

- Learning first; no scoring or gamification.
- Prefer conceptual depth over simply adding more questions.
- Explain why, how, internal behavior, production behavior, and failure modes.
- Keep interview-ready explanations grounded in the underlying system.
- Add meaningful follow-up answers rather than generic placeholders.
- Reuse shared components and utilities instead of duplicating page logic.
- Measure performance before adding heavy optimization machinery.
- Preserve keyboard accessibility and focus behavior.
- Avoid UI redesign unless there is a concrete usability or functional reason.

## Adding learning content

Keep data separate from rendering code. Follow the existing shape for the track you are extending and make follow-up answers specific to the actual question.

For production-oriented material, prefer realistic situations, diagnosis, trade-offs, recovery steps, and explanations that help a learner derive an interview answer.

## Pull requests

A useful change should include:

1. A focused description of the problem and solution.
2. Local verification steps.
3. Any relevant build or accessibility checks.
4. Notes about intentional behavior changes.

Keep unrelated formatting or UI changes out of focused changes when possible.
