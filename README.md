# Persona - AI-Powered Resumé Generator

Persona is an intelligent resumé building application that leverages AI to help you create professional, ATS-optimized resumés. Built with Next.js and powered by advanced language models, Persona guides you through the process of crafting compelling resumes that stand out to recruiters and hiring managers.

## Features

- **AI-Powered Assistance**: Get intelligent suggestions for resume content and formatting
- **ATS-Optimized**: Ensures your resume passes Applicant Tracking Systems
- **Interactive Chat Interface**: Natural conversation flow to build your resume
- **Resume History**: Save and manage multiple resume versions
- **Professional Templates**: Modern, clean designs that showcase your skills

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Docker and Docker Compose (for database)

### 1. Database Setup

Start the PostgreSQL database and Adminer using Docker Compose:

```bash
docker compose up -d
```

This will start:
- **PostgreSQL** on `localhost:5433` (uses port 5433 to avoid conflicts with local PostgreSQL)
  - Database: `persona_db`
  - User: `persona_user`
  - Password: `persona_password`
- **Adminer** (database management UI) on `http://localhost:8080`

To access Adminer:
1. Open [http://localhost:8080](http://localhost:8080)
2. Login with:
   - System: `PostgreSQL`
   - Server: `postgres`
   - Username: `persona_user`
   - Password: `persona_password`
   - Database: `persona_db`

To stop the database:
```bash
docker compose down
```

To stop and remove all data:
```bash
docker compose down -v
```

### 2. Environment Variables

Copy the example environment file and configure as needed:

```bash
cp env.example .env.local
```

The default values in `env.example` match the Docker Compose setup.

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
