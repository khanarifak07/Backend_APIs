import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFilesOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uploaded successfully
    console.log("File Uploaded Successfully", response.url);
    //unlink file after success
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    //unlink file after faillure
    fs.unlinkSync(localFilePath);
    return null;
  }
};
export { uploadFilesOnCloudinary };
