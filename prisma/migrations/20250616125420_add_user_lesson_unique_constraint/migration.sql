/*
  Warnings:

  - A unique constraint covering the columns `[userId,lessonId]` on the table `UserLesson` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserLesson_userId_lessonId_key` ON `UserLesson`(`userId`, `lessonId`);
