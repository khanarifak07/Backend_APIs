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
    //check if the file exists or not before unlink the file after successfull upload
    if (fs.existsSync(localFilePath)) {
      //unlink file after success
      fs.unlinkSync(localFilePath);
      console.log("File Unlink After Success", localFilePath);
    } else {
      console.warn("Local File Not Found", localFilePath);
    }
    return response;
  } catch (error) {
    //check file exists or not before unlink after failure
    if (fs.existsSync(localFilePath)) {
      //unlink file after faillure
      fs.unlinkSync(localFilePath);
      console.log("File unlink after failure", localFilePath);
    } else {
      console.warn("File nor found to unlink after failure", localFilePath);
    }
    return null;
  }
};
export { uploadFilesOnCloudinary };
