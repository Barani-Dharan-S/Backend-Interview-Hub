# V12.16 — JavaScript runtime fix

Fixed the JavaScript lesson `js-092` code example so `${apiBase}` is preserved inside the displayed code sample instead of being evaluated by the outer template literal.

Validated with `node --check src/data/javascript.js`.
No UI changes.
