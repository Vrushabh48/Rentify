-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "imgLink" DROP NOT NULL,
ALTER COLUMN "rent_amount" DROP NOT NULL,
ALTER COLUMN "rentedFor" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL;
