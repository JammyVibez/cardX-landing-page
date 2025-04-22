// // import React, { useState, useEffect, useRef } from "react";
// // import "./Carousel.css";

// // const Carousel = ({ media }) => {
// //   const [current, setCurrent] = useState(0);
// //   const slideRef = useRef();

// //   // Autoplay every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % media.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [media.length]);

// //   // Swipe handling
// //   useEffect(() => {
// //     const slide = slideRef.current;
// //     let startX = 0;

// //     const handleTouchStart = (e) => {
// //       startX = e.touches[0].clientX;
// //     };

// //     const handleTouchEnd = (e) => {
// //       const endX = e.changedTouches[0].clientX;
// //       if (startX - endX > 50) nextSlide();
// //       else if (endX - startX > 50) prevSlide();
// //     };

// //     slide.addEventListener("touchstart", handleTouchStart);
// //     slide.addEventListener("touchend", handleTouchEnd);
// //     return () => {
// //       slide.removeEventListener("touchstart", handleTouchStart);
// //       slide.removeEventListener("touchend", handleTouchEnd);
// //     };
// //   }, [current]);

// //   const nextSlide = () => setCurrent((prev) => (prev + 1) % media.length);
// //   const prevSlide = () => setCurrent((prev) => (prev - 1 + media.length) % media.length);

// //   const renderMedia = (item) => {
// //     if (item.type === "video") {
// //       return <video src={item.src} controls muted autoPlay loop />;
// //     } else {
// //       return <img src={item.src} alt={item.caption || "Media"} />;
// //     }
// //   };

// //   return (
// //     <div className="media-carousel">
// //       <button className="nav-button left" onClick={prevSlide}>❮</button>

// //       <div className="carousel-slide" ref={slideRef}>
// //         {renderMedia(media[current])}
// //         {media[current].caption && <div className="caption">{media[current].caption}</div>}
// //       </div>

// //       <button className="nav-button right" onClick={nextSlide}>❯</button>

// //       <div className="thumbnails">
// //         {media.map((item, idx) => (
// //           <div
// //             key={idx}
// //             className={`thumb ${idx === current ? "active" : ""}`}
// //             onClick={() => setCurrent(idx)}
// //           >
// //             {item.type === "video" ? (
// //               <video src={item.src} muted loop />
// //             ) : (
// //               <img src={item.src} alt={`Thumb ${idx}`} />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;


// // import React, { useState } from "react";
// // import "./Carousel.css";

// // const mediaItems = [
// //   { type: "image", src: "/media/anime1.jpg" },
// //   { type: "video", src: "/media/trailer1.mp4" },
// //   { type: "gif", src: "/media/fightscene.gif" },
// //   { type: "image", src: "/media/anime2.jpg" },
// //   { type: "video", src: "/media/op2.mp4" },
// //   { type: "gif", src: "/media/magic.gif" },
// // ];

// // const Carousel = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const handleScroll = (direction) => {
// //     setActiveIndex((prevIndex) =>
// //       (prevIndex + direction + mediaItems.length) % mediaItems.length
// //     );
// //   };

// //   return (
// //     <div className="vr-carousel-wrapper">
// //       <div className="vr-carousel-bg" />
// //       <div className="carousel-3d">
// //         {mediaItems.map((item, index) => {
// //           const offset = index - activeIndex;
// //           const rotate = offset * 40;
// //           const zIndex = 100 - Math.abs(offset);
// //           const scale = offset === 0 ? 1 : 0.8;

// //           return (
// //             <div
// //               key={index}
// //               className="carousel-item"
// //               style={{
// //                 transform: `translateX(${offset * 180}px) rotateY(${rotate}deg) scale(${scale})`,
// //                 zIndex,
// //               }}
// //             >
// //               {item.type === "image" || item.type === "gif" ? (
// //                 <img src={item.src} alt={`media-${index}`} />
// //               ) : (
// //                 <video src={item.src} autoPlay loop muted />
// //               )}
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <div className="carousel-nav">
// //         <button onClick={() => handleScroll(-1)}>⟵</button>
// //         <button onClick={() => handleScroll(1)}>⟶</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Carousel;


// import React from "react";
// import "./Carousel.css";

// const mediaItems = [
//   { type: "image", src: "/media/anime1.jpg" },
//   { type: "video", src: "/media/trailer1.mp4" },
//   { type: "gif", src: "/media/actionscene.gif" },
//   { type: "image", src: "/media/anime2.jpg" },
//   { type: "video", src: "/media/trailer2.mp4" },
//   { type: "gif", src: "/media/magic.gif" },
// ];

// const Carousel = () => {
//   return (
//     <div className="glass-carousel-wrapper">
//       <div className="glass-carousel">
//         {mediaItems.map((item, index) => (
//           <div className="glass-card" key={index}>
//             {item.type === "image" || item.type === "gif" ? (
//               <img src={item.src} alt={`media-${index}`} />
//             ) : (
//               <video src={item.src} autoPlay muted loop />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;




// import React, { useState, useEffect, useRef } from "react";
// import "./Carousel.css";

// const mediaItems = [
//   { type: "image", src: "/media/anime1.jpg" },
//   { type: "video", src: "/media/trailer1.mp4" },
//   { type: "gif", src: "/media/actionscene.gif" },
//   { type: "image", src: "/media/anime2.jpg" },
//   { type: "video", src: "/media/trailer2.mp4" },
//   { type: "gif", src: "/media/magic.gif" },
// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
//   const slideRef = useRef();

//   // Autoplay every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % mediaItems.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Swipe handling
//   useEffect(() => {
//     const slide = slideRef.current;
//     let startX = 0;

//     const handleTouchStart = (e) => {
//       startX = e.touches[0].clientX;
//     };

//     const handleTouchEnd = (e) => {
//       const endX = e.changedTouches[0].clientX;
//       if (startX - endX > 50) nextSlide();
//       else if (endX - startX > 50) prevSlide();
//     };

//     slide.addEventListener("touchstart", handleTouchStart);
//     slide.addEventListener("touchend", handleTouchEnd);
//     return () => {
//       slide.removeEventListener("touchstart", handleTouchStart);
//       slide.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [current]);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % mediaItems.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

//   return (
//     <div className="glass-carousel-wrapper" ref={slideRef}>
//       <div className="glass-card">
//         {mediaItems[current].type === "image" ||
//         mediaItems[current].type === "gif" ? (
//           <img src={mediaItems[current].src} alt={`media-${current}`} />
//         ) : (
//           <video
//             src={mediaItems[current].src}
//             autoPlay
//             muted
//             loop
//             controls={false}
//           />
//         )}
//       </div>

//       <div className="thumbnails">
//         {mediaItems.map((item, idx) => (
//           <div
//             key={idx}
//             className={`thumb ${idx === current ? "active" : ""}`}
//             onClick={() => setCurrent(idx)}
//           >
//             {item.type === "video" ? (
//               <video src={item.src} muted loop />
//             ) : (
//               <img src={item.src} alt={`Thumb ${idx}`} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;








