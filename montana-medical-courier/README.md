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

## Deployment (Vercel)

### 1. Import the Repository

1. Push the repo to GitHub (or ensure it's already there).
2. Go to [vercel.com/new](https://vercel.com/new) and click **Import Git Repository**.
3. Select the `montana_courier-site` repository.

### 2. Configure Project Settings

Because the Next.js app is in a subdirectory, set the **Root Directory** during import:

| Setting            | Value                        |
| ------------------ | ---------------------------- |
| **Framework**      | Next.js (auto-detected)      |
| **Root Directory** | `montana-medical-courier`    |
| **Build Command**  | `npm run build` *(default)*  |
| **Output Dir**     | `.next` *(default)*          |
| **Node.js Version**| 20.x                         |

> **Tip:** You can also set the root directory later under **Settings → General → Root Directory**.

### 3. Add Environment Variables

In the Vercel dashboard go to **Settings → Environment Variables** and add:

| Variable             | Value                               | Environments       |
| -------------------- | ----------------------------------- | ------------------- |
| `RESEND_API_KEY`     | Your API key from resend.com        | Production, Preview |
| `CONTACT_TO_EMAIL`   | Inbox that receives form messages   | Production, Preview |
| `CONTACT_FROM_EMAIL` | Sender address for outgoing mail    | Production, Preview |

### 4. Deploy

Click **Deploy**. Vercel will install dependencies, run `npm run build`, and publish the site.

Every push to `main` will trigger a **Production** deployment. Pull-request branches automatically get **Preview** deployments.

### 5. Custom Domain (Optional)

1. Go to **Settings → Domains**.
2. Add your domain (e.g. `montanamedicalcourier.com`).
3. Update your DNS records as instructed by Vercel.
4. Vercel provisions an SSL certificate automatically.

### Troubleshooting

| Issue | Fix |
| ----- | --- |
| Build fails with module not found | Verify **Root Directory** is set to `montana-medical-courier` |
| Contact form returns 500 | Ensure `RESEND_API_KEY` is set and valid in the environment |
| Styles missing in production | Run `npm run build` locally first to catch Tailwind purge issues |
| Node version mismatch | Set Node.js to **20.x** under Settings → General |
