/*
  Warnings:

  - You are about to drop the `UserCertification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEducation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserProfessionalSummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserWorkExperience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."UserCertification" DROP CONSTRAINT "UserCertification_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserEducation" DROP CONSTRAINT "UserEducation_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserProfessionalSummary" DROP CONSTRAINT "UserProfessionalSummary_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserSkill" DROP CONSTRAINT "UserSkill_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserWorkExperience" DROP CONSTRAINT "UserWorkExperience_userId_fkey";

-- DropTable
DROP TABLE "public"."UserCertification";

-- DropTable
DROP TABLE "public"."UserEducation";

-- DropTable
DROP TABLE "public"."UserProfessionalSummary";

-- DropTable
DROP TABLE "public"."UserSkill";

-- DropTable
DROP TABLE "public"."UserWorkExperience";

-- CreateTable
CREATE TABLE "public"."user_certifications" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_education" (
    "id" TEXT NOT NULL,
    "university_name" TEXT NOT NULL,
    "enrollment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completion" TIMESTAMP(3),
    "finished" BOOLEAN NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_professional_summary" (
    "id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_professional_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_skill" (
    "id" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_work_experience" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "enrollment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completion" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "currentWorkPlace" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_work_experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_professional_summary_userId_key" ON "public"."user_professional_summary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_skill_userId_key" ON "public"."user_skill"("userId");

-- AddForeignKey
ALTER TABLE "public"."user_certifications" ADD CONSTRAINT "user_certifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_education" ADD CONSTRAINT "user_education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_professional_summary" ADD CONSTRAINT "user_professional_summary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_skill" ADD CONSTRAINT "user_skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_work_experience" ADD CONSTRAINT "user_work_experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
