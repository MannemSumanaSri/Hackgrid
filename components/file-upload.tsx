"use client";

import toast from "react-hot-toast";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof OurFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  // ✅ Pass `endpoint` correctly
  const { startUpload } = useUploadThing(endpoint);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (files: FileList | null) => {
    if (!files) return;

    setIsUploading(true);
    try {
      // ✅ Convert FileList to File[] before passing to startUpload()
      const res = await startUpload(Array.from(files)); 
      if (res) onChange(res[0]?.url);
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e.target.files)} disabled={isUploading} />
      {isUploading && <p>Uploading...</p>}
    </div>
  );
};
