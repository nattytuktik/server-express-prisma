/*
  Warnings:

  - You are about to alter the column `number` on the `mitors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(4)` to `Int`.

*/
-- AlterTable
ALTER TABLE `mitors` MODIFY `number` INTEGER NOT NULL;
