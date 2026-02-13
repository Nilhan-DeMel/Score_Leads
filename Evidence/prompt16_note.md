# Score_Leads SPA Rewrite Note (Prompt #16)

## Rationale

Since Score_Leads is a Single Page Application (SPA) using client-side routing (React Router), any direct request to a sub-path like `/results` or `/history` would normally result in a **404 Not Found** on a standard static server, because those physical files do not exist.

## Vercel Behavior

Vercel is configured via `vercel.json` (or inherited from the Vite framework preset) to perform a **rewrites** operation.

- **Rule**: If a request does not match a physical file or an API route, it is rewritten to `index.html`.
- **Outcome**: The browser loads the app shell, and React Router then reads the URL path and renders the correct view on the client side.

## Proof

The HTTP receipts in `prompt16_http.log` show that hitting `/results` and `/history` returns a **200 OK** (rather than a 404), proving the rewrites are active and the app shell is serving correctly for deep links.
