# Pranav Bhasin — Personal Site

## Overview
A Next.js 15 personal website with app router, React 19, TypeScript, and Tailwind CSS 4. Migrated from Vercel to Replit.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package manager**: npm

## Running the App
- **Dev**: `npm run dev` — starts on port 5000 at 0.0.0.0
- **Build**: `npm run build`
- **Start (prod)**: `npm start` — starts on port 5000 at 0.0.0.0

## Project Structure
- `src/app/` — App router pages and layouts
- `src/components/` — Shared React components
- `src/lib/` — Utility libraries (e.g. YouTube API client)
- `public/` — Static assets

## Environment Variables Required
The following secrets must be set for full functionality:
- `YOUTUBE_API_KEY` — YouTube Data API v3 key (used in `src/lib/youtube.ts`)
- `YOUTUBE_CHANNEL_HANDLE` — YouTube channel handle for fetching videos
- `GOOGLE_SHEETS_WEBHOOK_URL` — Webhook URL for quiz lead capture (`src/app/api/quiz-lead/route.ts`)

## Replit Configuration
- Dev server runs on port 5000, bound to 0.0.0.0 (required for Replit preview)
- Workflow: "Start application" runs `npm run dev`
