/*
  Warnings:

  - You are about to alter the column `give` on the `article` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `reading` on the `article` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `articlesnum` on the `user` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `fans` on the `user` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `article` MODIFY `give` INTEGER NOT NULL,
    MODIFY `reading` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `articlesnum` INTEGER NOT NULL,
    MODIFY `fans` INTEGER NOT NULL;
