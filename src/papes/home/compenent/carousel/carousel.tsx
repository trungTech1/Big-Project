import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carousel.scss";

interface Image {
  src: string;
  link: string;
}

const Carousel: React.FC = () => {
  const images: Image[] = [
    {
      src: "https://routine.vn/media/amasty/webp/banner/tmp/images/Tet_Gieo_Loc.__jpg.webp",
      link: "#",
    },

    {
      src: "https://routine.vn/media/amasty/webp/banner/tmp/images/WINTER_COLLECTION_2023_2_jpg.webp",
      link: "#",
    },
    {
      src: "https://routine.vn/media/amasty/webp/banner/tmp/images/Coffee-Lovers-Collection-Series-2_2_jpg.webp",
      link: "#",
    },
    {
      src: "https://routine.vn/media/amasty/webp/banner/tmp/images/Couple_Collection_Desktop_jpg.webp",
      link: "#",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 2 seconds

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="carousel-container">
      <Link to={images[currentImageIndex].link}>
        <img src={images[currentImageIndex].src} alt="" />
      </Link>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
