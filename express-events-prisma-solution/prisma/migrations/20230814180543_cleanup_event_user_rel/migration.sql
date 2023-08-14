/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `_EventToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `createdBy`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_EventToUser`;

-- CreateIndex
CREATE INDEX `Event_userId_idx` ON `Event`(`userId`);
