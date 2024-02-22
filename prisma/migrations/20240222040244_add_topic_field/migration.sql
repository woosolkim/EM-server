/*
  Warnings:

  - Added the required column `topic` to the `Read` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Read` ADD COLUMN `topic` VARCHAR(50) NOT NULL;
