/*
  Warnings:

  - You are about to drop the column `date` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `star` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Todo" DROP COLUMN "date",
DROP COLUMN "star",
ADD COLUMN     "description" TEXT;
