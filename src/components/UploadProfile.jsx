import React, { useState, useRef } from "react";
import { Upload } from "lucide-react";

const UploadableProfilePicture = ({ currentImage, defaultImage, onUpload }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      await onUpload(file);
    }
  };

  return (
    <div>
      <div
        className="relative h-full w-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={
            currentImage !== "https://example.com/profile.jpg"
              ? currentImage
              : defaultImage
          }
          className="h-[50px] w-[50px] rounded-full"
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center bg-black-1 justify-center bg-black bg-opacity-50 transition-opacity">
            <Upload className="h-8 w-8 text-white" />
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default UploadableProfilePicture;
