import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/server";

import { isTeacher } from "@/lib/teacher";

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  const isAuthorized = isTeacher(userId);

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", file);
    }),

  courseAttachment: f({ text: {}, image: {}, video: {}, audio: {}, pdf: {} })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", file);
    }),

  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512MB" } }) // Adjusted maxFileSize (UploadThing may have limits)
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", file);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
