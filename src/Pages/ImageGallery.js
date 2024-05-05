import React, { useState } from "react";

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "image1.jpg", alt: "Image 1 Description" },
    { src: "image2.jpg", alt: "Image 2 Description" },
    { src: "image3.jpg", alt: "Image 3 Description" },
    { src: "image4.jpg", alt: "Image 4 Description" },
    { src: "image5.jpg", alt: "Image 5 Description" },
    { src: "image6.jpg", alt: "Image 6 Description" },
    // Add more images here
  ];
  
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-gallery">
      <img
        className="featured-image"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
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
      <button className="arrow next" onClick={handleNext}>
        &#8594;
      </button>
      <button className="arrow prev" onClick={handlePrev}>
        &#8592;
      </button>
      </div>
  );
};

export default ImageGallery;
