/*
  Warnings:

  - You are about to alter the column `parentId` on the `ChildParentRelationship` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Parent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Parent` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `parentId` on the `Pickup` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `ChildParentRelationship` DROP FOREIGN KEY `childparentrelationship_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Pickup` DROP FOREIGN KEY `pickup_ibfk_2`;

-- AlterTable
ALTER TABLE `ChildParentRelationship` MODIFY `parentId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Parent` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Pickup` MODIFY `parentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ChildParentRelationship` ADD FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pickup` ADD FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
