import React, { useState, useEffect } from "react";
import { DefualtImage } from "../assets";

const Image = ({
  src, // Image URL (JPG or WebP)
  alt = "", // Alt text for accessibility
  defaultWidth = 600, // Default width if not provided
  defaultHeight = 400, // Default height if not provided
  defaultClass = "default-image-class", // Default class if not provided
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageSrcSet, setImageSrcSet] = useState("");
  const [imageSizes, setImageSizes] = useState("");
  const [imageHeight, setImageHeight] = useState(defaultHeight); // Default height
  const [imageWidth, setImageWidth] = useState(defaultWidth); // Default width
  const [imageClass, setImageClass] = useState(defaultClass); // Default class

  // Replace extension to use WebP if available
  const webpPath = src.replace(".jpg", ".webp");

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Set image properties based on screen size
    if (screenWidth < 600) {
      setImageSrcSet(`${webpPath} 400w, ${src} 400w`);
      setImageSizes("(max-width: 600px) 100vw");
      setImageHeight(300); // Smaller height for small screens
      setImageWidth(400); // Smaller width for small screens
      setImageClass("small-image"); // Class for small screen
    } else {
      setImageSrcSet(`${webpPath} 800w, ${src} 800w`);
      setImageSizes("(max-width: 1200px) 50vw, 600px");
      setImageHeight(defaultHeight); // Default height for larger screens
      setImageWidth(defaultWidth); // Default width for larger screens
      setImageClass("large-image"); // Class for larger screens
    }

    // Handle window resizing to dynamically adjust image properties
    const handleResize = () => {
      const updatedScreenWidth = window.innerWidth;

      if (updatedScreenWidth < 600) {
        setImageSrcSet(`${webpPath} 400w, ${src} 400w`);
        setImageSizes("(max-width: 600px) 100vw");
        setImageHeight(300);
        setImageWidth(400);
        setImageClass("small-image");
      } else {
        setImageSrcSet(`${webpPath} 800w, ${src} 800w`);
        setImageSizes("(max-width: 1200px) 50vw, 600px");
        setImageHeight(defaultHeight);
        setImageWidth(defaultWidth);
        setImageClass("large-image");
      }
    };

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [src, defaultHeight, defaultWidth, webpPath]); // Re-run effect when props change

  return (
    <img
      src={src || DefualtImage} // Default image if dynamic src is not set
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      loading="lazy"
      srcSet={imageSrcSet}
      sizes={imageSizes}
      className={imageClass}
    />
  );
};

export default Image;
