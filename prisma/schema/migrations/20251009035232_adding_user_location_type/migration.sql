-- AlterTable
ALTER TABLE "auth"."user" ADD COLUMN     "locationTypeId" INTEGER,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "public"."user_location_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "user_location_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "auth"."user" ADD CONSTRAINT "user_locationTypeId_fkey" FOREIGN KEY ("locationTypeId") REFERENCES "public"."user_location_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
