/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Verse` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Verse_id_belongsToId_key" ON "Verse"("id", "belongsToId");
