-- CreateTable
CREATE TABLE "public"."user_applications" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "job_post" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_applications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_applications" ADD CONSTRAINT "user_applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
