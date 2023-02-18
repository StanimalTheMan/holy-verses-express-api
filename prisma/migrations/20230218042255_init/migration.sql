-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verse" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "book" VARCHAR(25) NOT NULL,
    "chapter" INTEGER NOT NULL,
    "verses" INTEGER[],
    "content" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Verse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Verse" ADD CONSTRAINT "Verse_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
