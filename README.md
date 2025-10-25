# Persona

A Next.js application for managing professional profiles, resumes, and job applications.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose

## Quick Setup

Run the automated setup script to configure everything:

```bash
./setup.sh
```

This script will:
- ✓ Check for required dependencies (Docker, pnpm)
- ✓ Create a `.env` file if it doesn't exist
- ✓ Install Node.js dependencies
- ✓ Start Docker containers (PostgreSQL + Adminer)
- ✓ Generate Prisma client
- ✓ Run database migrations

## Manual Setup

If you prefer to set up manually:

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env  # or create manually
   ```
   
   Add required environment variables:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/persona?schema=public"
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Start Docker containers:**
   ```bash
   pnpm run docker:up
   ```

4. **Generate Prisma client:**
   ```bash
   pnpm run db:generate
   ```

5. **Run database migrations:**
   ```bash
   pnpm run db:migrate
   ```

## Development

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint and fix issues
- `pnpm run type-check` - Run TypeScript type checking

### Database Scripts

- `pnpm run db:generate` - Generate Prisma client
- `pnpm run db:migrate` - Run database migrations
- `pnpm run db:push` - Push schema changes to database
- `pnpm run db:studio` - Open Prisma Studio (database GUI)
- `pnpm run db:reset` - Reset database

### Docker Scripts

- `pnpm run docker:up` - Start Docker containers
- `pnpm run docker:down` - Stop Docker containers
- `pnpm run docker:logs` - View Docker logs

## Database Management

Access the database through:
- **Prisma Studio:** Run `pnpm run db:studio` and open [http://localhost:5555](http://localhost:5555)
- **Adminer:** Open [http://localhost:8080](http://localhost:8080)
  - System: PostgreSQL
  - Server: db
  - Username: postgres
  - Password: postgres
  - Database: persona

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
