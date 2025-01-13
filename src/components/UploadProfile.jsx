import React, { useState, useRef, useEffect } from "react";
import { Upload } from "lucide-react";
import Modal from "./modals/Modal";
import Button from "./Button";
import { postRequest } from "../helpers/Functions";
import { motion } from "framer-motion";
import { AuthUserPfpImage } from "../helpers";

const UploadableProfilePicture = () => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState(null); // URL for preview
  const [file, setFile] = useState(null);

  console.log("previewFile", previewFile);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setLoading(false);
    setPreviewFile(null);
    setFile(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setPreviewFile(previewURL); // Save preview URL
      openModal();
    }
  };
  useEffect(() => {
    console.log("file", previewFile);
    console.log("fileInputRef", fileInputRef.current.files[0]);
  }, [fileInputRef]);

  const handleUploadClick = async () => {
    if (!previewFile) {
      alert("Please select a file before uploading.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file); // Use the file input reference

      console.log("File to be uploaded:", file);

      await postRequest("pupil/uploadAvatar", formData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error uploading profile picture:", error);
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  useEffect(() => {
    return () => {
      if (previewFile) URL.revokeObjectURL(previewFile); // Cleanup preview URL
    };
  }, [previewFile]);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={previewFile || AuthUserPfpImage}
                className="h-[105px] w-[105px] mb-3 rounded-full object-cover"
                alt="Profile picture"
              />
              <p className="font-Monsterrat font-bold text-center mb-4 text-gray-800 text-[15px] w-44">
                Are you sure want to change Avatar?
              </p>
            </div>

            <div className="px-10 w-full">
              <Button
                label="Change Avatar"
                onClick={handleUploadClick}
                loading={loading}
                className={"mb-2 justify-center rounded-lg "}
              />
              <Button
                label="Cancel"
                onClick={closeModal}
                className={"mb-2 justify-center rounded-lg opacity-80"}
                disabled={loading}
              />
            </div>
          </div>
        }
      />
      <div
        className="relative h-full w-full cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={previewFile || AuthUserPfpImage}
          className="h-[190px] w-[190px] rounded-full object-cover"
          alt="Profile picture"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700`}
        >
          {isHovered && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mb-8 mt-[10%]"
            >
              <div
                className={`bg-black-1  opacity-50 h-[190px] w-[190px] rounded-full flex items-center justify-center`}
              >
                <Upload className="text-white h-8 w-16" />
              </div>
            </motion.div>
          )}
        </div>

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
