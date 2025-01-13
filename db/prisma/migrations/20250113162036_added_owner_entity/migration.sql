/*
  Warnings:

  - Added the required column `ownerId` to the `RentedItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RentedItem" ADD COLUMN     "ownerId" INTEGER NOT NULL,
ALTER COLUMN "approved_status" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "RentedItem" ADD CONSTRAINT "RentedItem_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
