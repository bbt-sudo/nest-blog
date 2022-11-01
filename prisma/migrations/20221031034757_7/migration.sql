/*
  Warnings:

  - A unique constraint covering the columns `[Attention]` on the table `fanList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `fanList_Attention_key` ON `fanList`(`Attention`);
