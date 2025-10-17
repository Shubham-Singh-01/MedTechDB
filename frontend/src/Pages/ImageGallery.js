import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Updated image paths to match the public folder structure
  const images = [
    { src: "Images/Pic1.jpg", alt: "Medical Technology Image 1" },
    { src: "Images/Pic2.jpg", alt: "Medical Technology Image 2" },
    { src: "Images/Pic3.jpg", alt: "Medical Technology Image 3" },
    { src: "Images/Pic4.jpg", alt: "Medical Technology Image 4" },
    { src: "Images/Pic5.jpg", alt: "Medical Technology Image 5" },
    { src: "Images/Pic6.jpg", alt: "Medical Technology Image 6" },
  ];
  
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="page-container">
      <div className="page-card gallery-card">
        <h1 className="page-title">Medical Technology Gallery</h1>
        
        <div className="image-gallery">
          {/* Main featured image */}
          <div className="featured-image-container">
            <img
              className="featured-image"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
            
            {/* Navigation arrows */}
            <button 
              className="arrow prev" 
              onClick={handlePrev}
              aria-label="Previous image"
            >
            </button>
            <button 
              className="arrow next" 
              onClick={handleNext}
              aria-label="Next image"
            >
            </button>
          </div>
          
          {/* Thumbnail strip */}
          <div className="image-strip">
            {images.map((image, index) => (
              <img
                key={image.src}
                className={index === currentIndex ? "active" : ""}
                src={image.src}
                alt={image.alt}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
