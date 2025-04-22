import React from "react";
import "./Hero.css";


const Hero = () => {
    return (

<div className="hero-section">
<h1>Collect. Compete. Conquer.</h1>
<p>Unleash the power of your cards in the ultimate anime-tech arena!</p>
<div className="cta-buttons">
  <button className="cta join">Join Arena</button>
  <button className="cta explore">Explore Cards</button>
  <button className="cta starter">Get Free Starter Card</button>
</div>
<div className="star-card-container floating-card">
<div className="star-card">
  <div className="card-front">
    <video src="/video-card/vid-card-8.mp4" alt="6-Star Front"  autoPlay muted loop className="vid-card"></video>
  </div>
  <div className="card-back">
  <video src="/video-card/vid-card-7.mp4" alt="6-Star Front"  autoPlay muted loop className="vid-card"></video>
  </div>
</div>
</div>

</div>

    );
};

export default Hero;