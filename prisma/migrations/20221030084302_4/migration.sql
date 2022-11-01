/*
  Warnings:

  - A unique constraint covering the columns `[reading]` on the table `article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[give]` on the table `article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fans]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[articlesnum]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `article_reading_key` ON `article`(`reading`);

-- CreateIndex
CREATE UNIQUE INDEX `article_give_key` ON `article`(`give`);

-- CreateIndex
CREATE UNIQUE INDEX `user_fans_key` ON `user`(`fans`);

-- CreateIndex
CREATE UNIQUE INDEX `user_articlesnum_key` ON `user`(`articlesnum`);
