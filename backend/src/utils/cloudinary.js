import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "dmt4d0pm6",
  api_key: "319756398925928",
  api_secret: "P-whSwjBZlOK5MQoGNjkjTV9qNk",
  secure:true,
});

export const uploadAvatar = async (filePath) => {
    return await cloudinary.uploader.upload(filePath,{
        folder: 'AvataresCeladores'
    })
}

export const deleteAvatar = async(publicId) => {
    return await cloudinary.uploader.destroy(publicId)
}