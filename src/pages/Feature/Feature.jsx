import React from "react";
import { FaUsers, FaGavel, FaPoll, FaCrown, FaTv, FaGift, FaIdBadge, FaShoppingCart, FaUserEdit } from "react-icons/fa";
import Header from "../../components/HeaderLanding/HeaderLanding"; 
import "./Feature.css";

const features = [
  {
    title: "Massive Clans Community",
    description: "Join real-time chat groups, clans, and card-based communities.",
    icon: <FaUsers />,
  },
  {
    title: "Auction & Exchange",
    description: "Auction, buy, or exchange your cards easily in real-time.",
    icon: <FaGavel />,
  },
  {
    title: "Poll Your Cards",
    description: "Vote and run polls on favorite cards inside the clan.",
    icon: <FaPoll />,
  },
  {
    title: "Daily Leaderboard",
    description: "Two daily leaderboard rankings—flex your power and win!",
    icon: <FaCrown />,
  },
  {
    title: "Anime + Stream",
    description: "Stream anime, movies, and series—all in one dashboard.",
    icon: <FaTv />,
  },
  {
    title: "Win Cards & Rewards",
    description: "Get cards & rewards in exchange for 💎, money, or other assets.",
    icon: <FaGift />,
  },
  {
    title: "Verified = Earn",
    description: "Get verified and start earning through your card activities.",
    icon: <FaIdBadge />,
  },
  {
    title: "3D Marketplace",
    description: "Buy rare cards, gear, and unique items in our virtual shop.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Custom Profile Hub",
    description: "Personalize your profile with skins, avatars, badges & more.",
    icon: <FaUserEdit />,
  }
];

const FeaturesSection = () => {
  return (
    <>
    <Header />
    <section className=" from-[#0e0f3a] to-[#0b0c28] text-white py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14 glow-text">Core Features</h2>
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/30 border border-pink-500 p-6 rounded-2xl backdrop-blur-md shadow-2xl hover:scale-105 transition-all transform hover:rotate-1 glow-card"
          >
            <div className="text-pink-400 text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-gradient-to-br from-pink-500 to-purple-600 px-10 py-4 rounded-xl shadow-lg hover:scale-110 transition-all text-white font-semibold">
          Join Now
        </button>
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
