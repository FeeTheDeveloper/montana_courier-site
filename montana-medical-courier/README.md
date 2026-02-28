# Montana Medical Courier

Professional HIPAA-compliant medical courier services across Montana.

## Prerequisites

- **Node.js ≥ 20** (ships with `npm`)
- A [Resend](https://resend.com) API key (for the contact form)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Then edit .env.local with your Resend API key and email addresses

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start dev server             |
| `npm run build`  | Production build             |
| `npm run start`  | Serve production build       |
| `npm run lint`   | Run Next.js ESLint           |

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Resend** for transactional email
- **Zod** for form validation

## Project Structure

```
app/
  (site)/       – Public pages (layout, home, services, etc.)
  api/contact/  – POST endpoint for the contact form
components/
  site/         – Page-level sections (Hero, Navbar, Footer…)
  ui/           – Primitives (Button, Card, Input, Textarea, Badge)
lib/            – Utilities, constants & validators
public/         – Static assets (logo, OG image)
```

## Environment Variables

Copy `.env.example` → `.env.local` and fill in the values:

| Variable             | Description                         |
| -------------------- | ----------------------------------- |
| `RESEND_API_KEY`     | API key from resend.com             |
| `CONTACT_TO_EMAIL`   | Inbox that receives form messages   |
| `CONTACT_FROM_EMAIL` | Sender address for outgoing mail    |

## Deployment

Push to GitHub and import the repo on [Vercel](https://vercel.com). Add the environment variables above in the Vercel dashboard. No extra configuration needed.
