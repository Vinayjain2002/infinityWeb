import React, { useState, useEffect } from 'react';
import Banner from '../../assets/images/banner.jpg'
import hackathom from '../../assets/images/hackathon.png'

interface ImageSliderProps {
  images: string[];
  interval: number;
  autoplay?: boolean; // Make autoplay optional
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, autoplay = false, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplayActive, setAutoplayActive] = useState(autoplay); // Use clearer name
  const img=[Banner,hackathom];
  useEffect(() => {
    if (isAutoplayActive) {
      const intervalId = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      }, interval);
      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [isAutoplayActive, currentImageIndex]);

  const handlePrevClick = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const toggleAutoplay = () => {
    setAutoplayActive(!isAutoplayActive); // Toggle autoplay state
  };

  return (
      <div className=''>
          <div className="relative w-full bg-black h-200" style={{ height: "200px" }}>
            
            <div className="overflow-hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={img[index]}
                  alt={`Image ${index + 1}`}
                  className={`absolute inset-0 object-cover h-full w-full ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'hidden'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              className="absolute z-50 top-1/2 left-2 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 focus:outline-none rounded-full"
              onClick={handlePrevClick}
            >
             Next
            </button>

            <button
              type="button"
              className="absolute z-50 top-1/2 right-2 p-2 text-white bg-black bg-opacity-35  hover:bg-opacity-70 focus:outline-none  rounded-full"
              onClick={handleNextClick}
            >
              Next
            </button>

          </div>
      </div>
  );
}

export default ImageSlider;