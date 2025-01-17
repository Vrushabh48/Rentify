/*
  Warnings:

  - Added the required column `cost` to the `RentedItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "earnings" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "RentedItem" ADD COLUMN     "cost" INTEGER NOT NULL;
