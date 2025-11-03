-- CreateTable
CREATE TABLE "public"."application" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "generatedResume" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat_message" (
    "id" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."application" ADD CONSTRAINT "application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_message" ADD CONSTRAINT "chat_message_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "public"."application"("id") ON DELETE CASCADE ON UPDATE CASCADE;
