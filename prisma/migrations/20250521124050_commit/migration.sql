-- DropForeignKey
ALTER TABLE `Cours` DROP FOREIGN KEY `Cours_categoryId_fkey`;

-- DropIndex
DROP INDEX `Cours_categoryId_fkey` ON `Cours`;

-- AlterTable
ALTER TABLE `Cours` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
