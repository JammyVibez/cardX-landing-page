import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/HeaderLanding/HeaderLanding";
import Hero from "../../components/Hero/Hero"
import CardTier from "../../components/CardTier/CardTier";
import CommunitySec from "../../components/CommunitySec/CommunitySec";
import ArenaSection from "../../components/FullFeatures/ArenaSection";
import { Helmet } from 'react-helmet';
import "./LandingPage.css";



const LandingPage = () => {
  return (
    <>
     <Helmet>
        <title>Welcome | CardX</title>
      </Helmet>
      <Header />
      <div className="landing-page">
        <Hero/>
        <Carousel />
        <CardTier />
        <CommunitySec />
        <ArenaSection />
        {/* ⬇️ Add more sections below later like cards, hero, features etc */}
      </div>
    </>
  );
};

export default LandingPage;
