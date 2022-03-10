/*
  Warnings:

  - You are about to drop the column `childId` on the `Pickup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Pickup` DROP FOREIGN KEY `pickup_ibfk_1`;

-- AlterTable
ALTER TABLE `Pickup` DROP COLUMN `childId`;
