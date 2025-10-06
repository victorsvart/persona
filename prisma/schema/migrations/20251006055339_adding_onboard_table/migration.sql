/*
  Warnings:

  - You are about to drop the column `onboarded` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "auth"."user" DROP COLUMN "onboarded";

-- CreateTable
CREATE TABLE "public"."onboards" (
    "id" TEXT NOT NULL,
    "onboarded" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "onboards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onboards_userId_key" ON "public"."onboards"("userId");

-- AddForeignKey
ALTER TABLE "public"."onboards" ADD CONSTRAINT "onboards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
