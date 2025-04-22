import React, { useEffect, useRef } from "react";
import "./Carousel.css";

const mediaItems = [
  { type: "image", src: "/image-card/fairytale.png" },
  { type: "video", src: "/video-card/vid-card-1.mp4" },
  { type: "image", src: "/image-card/actor-card.png" },
  { type: "video", src: "/video-card/vid-card-2.mp4" },
  { type: "image", src: "/image-card/super-card.png" },
  { type: "video", src: "/video-card/vid-card-3.mp4" },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (container) {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 280, behavior: "smooth" }); // adjust scroll step if needed
        }
      }
    }, 5000); // scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-carousel-wrapper">
       <h2 className="text-4xl font-bold mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
         Card Display
        </span>
      </h2>
      <div className="glass-carousel" ref={carouselRef}>
        {mediaItems.map((item, index) => (
          <div className="glass-card floating" key={index}>
            {item.type === "image" || item.type === "gif" ? (
              <img src={item.src} alt={`media-${index}`} />
            ) : (
              <video src={item.src} autoPlay muted loop />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
