-- DropForeignKey
ALTER TABLE `fanlist` DROP FOREIGN KEY `fanList_userId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_articleId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_userId_fkey`;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fanList` ADD CONSTRAINT `fanList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
