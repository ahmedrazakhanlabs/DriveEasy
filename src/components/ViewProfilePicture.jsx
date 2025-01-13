import React, { useState, useRef, useEffect } from "react";
import { Fullscreen, Upload } from "lucide-react";
import Modal from "./modals/Modal";
import Button from "./Button";
import { postRequest } from "../helpers/Functions";
import { motion } from "framer-motion";
import ShareMenu from "./Share";

const ViewProfilePicture = ({ currentImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState(null); // URL for preview
  const [file, setFile] = useState(null);

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

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={`bg-opacity-0 shadow-none`}
        backdrop={
          "bg-gradient-to-br from-[#9f9f9f] to-[#99999900] bg-black-1 bg-opacity-20 backdrop-blur "
        }
        content={
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={previewFile || currentImage}
                className="h-[305px] w-[305px] mb-3 rounded-full object-cover"
                alt="Profile picture"
              />
            </div>
            <ShareMenu shareUrl={window.location.href} />
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
          src={previewFile || currentImage}
          className="h-[65px] w-[65px] rounded-full object-cover"
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
              className="mb-8 mt-[50%]"
            >
              <div
                onClick={openModal}
                className={`bg-black-1  opacity-50 h-[65px] w-[65px] rounded-full flex items-center justify-center`}
              >
                <Fullscreen className="text-white" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProfilePicture;
