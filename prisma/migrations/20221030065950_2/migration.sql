/*
  Warnings:

  - Added the required column `give` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articlesnum` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fans` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `give` BIGINT NOT NULL,
    ADD COLUMN `reading` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `articlesnum` BIGINT NOT NULL,
    ADD COLUMN `fans` BIGINT NOT NULL;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    `userId` INTEGER UNSIGNED NOT NULL,
    `articleId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
