"use client";

import { UploadButton } from "../utils/uploadthing";

const ImageUpload = () => {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res: any) => {
        // Assuming res contains the uploaded file information with the URL
        console.log(res);
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default ImageUpload;
