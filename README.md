# StandyCord front page (separate site)

Static site: `index.html` (home), `support.html`, `terms.html`, `style.css`, `site.js`, `vercel.json`.

## Before you deploy
Open `site.js` and change the first lines:
- `CONTACT_EMAIL`: your real support email (it fills in on the Support page and in the Terms automatically).
- `APP_URL`: already set to https://standycord.vercel.app (all "Open StandyCord" buttons use it).

## Deploy
New GitHub repo -> upload all these files at the top level -> import in Vercel -> Deploy. No env vars, no database.
