/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `user_location_type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_location_type_name_key" ON "public"."user_location_type"("name");
