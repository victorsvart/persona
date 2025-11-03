/*
  Warnings:

  - You are about to drop the column `generatedResume` on the `application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."application" DROP COLUMN "generatedResume",
ADD COLUMN     "generatedResumeHtml" TEXT;
