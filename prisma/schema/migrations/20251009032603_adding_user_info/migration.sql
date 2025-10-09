/*
  Warnings:

  - You are about to drop the column `details` on the `applications` table. All the data in the column will be lost.
  - Added the required column `professional_summary` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "auth"."user" ADD COLUMN     "location" TEXT,
ADD COLUMN     "professional_summary" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."applications" DROP COLUMN "details",
ADD COLUMN     "job_description" TEXT;

-- CreateTable
CREATE TABLE "public"."UserCertification" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserCertification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserEducation" (
    "id" TEXT NOT NULL,
    "university_name" TEXT NOT NULL,
    "enrollment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completion" TIMESTAMP(3),
    "finished" BOOLEAN NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserProfessionalSummary" (
    "id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserProfessionalSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserSkill" (
    "id" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserWorkExperience" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "enrollment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completion" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "currentWorkPlace" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserWorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfessionalSummary_userId_key" ON "public"."UserProfessionalSummary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_userId_key" ON "public"."UserSkill"("userId");

-- AddForeignKey
ALTER TABLE "public"."UserCertification" ADD CONSTRAINT "UserCertification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserEducation" ADD CONSTRAINT "UserEducation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserProfessionalSummary" ADD CONSTRAINT "UserProfessionalSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSkill" ADD CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserWorkExperience" ADD CONSTRAINT "UserWorkExperience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
