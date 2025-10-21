-- CreateTable
CREATE TABLE "public"."user_professional_experience" (
    "id" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "summary" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT NOT NULL,
    "at_university" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_professional_experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_professional_summary" (
    "id" TEXT NOT NULL,
    "experience_years" INTEGER NOT NULL,
    "summary" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_professional_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_academic_information" (
    "id" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "summary" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_academic_information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_skill" (
    "id" SERIAL NOT NULL,
    "skills" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_professional_summary_userId_key" ON "public"."user_professional_summary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_skill_userId_key" ON "public"."user_skill"("userId");

-- AddForeignKey
ALTER TABLE "public"."user_professional_experience" ADD CONSTRAINT "user_professional_experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_professional_summary" ADD CONSTRAINT "user_professional_summary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_academic_information" ADD CONSTRAINT "user_academic_information_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_skill" ADD CONSTRAINT "user_skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
