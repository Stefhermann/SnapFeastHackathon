import type { NextApiRequest, NextApiResponse } from "next";

import { createUploadthing } from "uploadthing/next-legacy";
import { UploadThingError } from "uploadthing/server";
import axios from "axios";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("file url", file);
      axios.post("http://localhost:3000/api/uploadthing", { url: file });
      return null;
    }
  ),
};

export type OurFileRouter = typeof ourFileRouter;
