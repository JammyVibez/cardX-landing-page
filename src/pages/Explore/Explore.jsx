import React from "react";
import { FaFire, FaUsers, FaBoxOpen } from "react-icons/fa";
import { GiCardPick, GiGalaxy, GiTreasureMap } from "react-icons/gi";
import Header from "../../components/HeaderLanding/HeaderLanding"; 
import "./Explore.css"; // Custom styles for flips and glow effects

const trendingCards = [
  {
    id: 1,
    name: "Flame Spirit",
    type: "S-Class",
    power: 9200,
    rarity: "Legendary",
    owner: "XNeo",
    image: "/assets/cards/flame-spirit.png",
  },
  {
    id: 2,
    name: "Aqua Mage",
    type: "A-Class",
    power: 7800,
    rarity: "Epic",
    owner: "NamiX",
    image: "/assets/cards/aqua-mage.png",
  },
  {
    id: 3,
    name: "Cyber Shinobi",
    type: "B-Class",
    power: 6900,
    rarity: "Rare",
    owner: "DarkZero",
    image: "/assets/cards/cyber-shinobi.png",
  },
];

const clans = [
  {
    name: "Oblivion",
    logo: "/assets/clans/oblivion-logo.png",
    rank: "Top 1",
    motto: "Darkness is eternal",
    featuredCard: "Dark Phoenix",
  },
  {
    name: "Starlight",
    logo: "/assets/clans/starlight-logo.png",
    rank: "Top 2",
    motto: "Shine like never before",
    featuredCard: "Celestial Blade",
  },
];

const archetypes = ['Mage', 'Warrior', 'Beast', 'Mech', 'Cosmic', 'Demon'];

const liveEvents = [
  { title: "Mystic Tournament", participants: 128, countdown: "03:20:15" },
  { title: "Dragon Heist Auction", participants: 84, countdown: "01:02:44" },
  { title: "Daily Reward Race", participants: 150, countdown: "00:14:59" },
];

export default function Explore() {
  return (
    <>
    <Header />
    <div className="explore-wrapper from-[#0a0a23] to-[#0f0c29] text-white min-h-screen pt-20 px-4">
      {/* Galaxy Map */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2 mb-4 text-cyan-300">
          <GiGalaxy className="text-pink-500" /> Galaxy Map
        </h2>
        <p className="text-purple-300 mb-8">
          Hover stars. Enter card realms, auctions, and clan zones.
        </p>
        <div className="border border-purple-600 rounded-xl p-20 bg-[#1c1c3c] text-gray-400">
          [3D Galaxy Map Placeholder]
          <img src="/maps/map4.jpg" alt="Galaxy Map" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Trending Cards */}
      <section className="py-16 bg-[#131329]">
        <h2 className="text-4xl font-bold mb-10 flex items-center justify-center gap-2 text-pink-400">
          <FaFire /> Trending Cards
        </h2>
        <div className="flex gap-6 overflow-x-auto px-4">
          {trendingCards.map((card) => (
            <div key={card.id} className="card-flip-container glass-card w-60 min-w-[240px]">
              <div className="card-flip-inner">
                <div className="card-front rounded-t-lg overflow-hidden">
                  <img src={card.image} alt={card.name} className="w-full h-40 object-cover" />
                  <div className="p-4 bg-[#1e1e3f] text-white">
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p>{card.type}</p>
                  </div>
                </div>
                <div className="card-back bg-[#1a1a40] text-pink-300 p-4 rounded-lg">
                  <p>Power: {card.power}</p>
                  <p>Rarity: {card.rarity}</p>
                  <p>Owner: {card.owner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archetypes */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex justify-center items-center gap-2">
          <GiCardPick /> Explore by Archetype
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {archetypes.map((type, index) => (
            <div
              key={index}
              className="bg-[#1f1f3d] text-pink-300 rounded-2xl p-6 hover:scale-105 transition-all transform cursor-pointer font-semibold text-xl"
            >
              {type}
            </div>
          ))}
        </div>
      </section>

      {/* Clans */}
      <section className="py-16 px-4 bg-[#1a1a40]">
        <h2 className="text-4xl font-bold mb-8 text-violet-300 flex items-center justify-center gap-2">
          <FaUsers /> Top Clans & Creators
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {clans.map((clan, index) => (
            <div key={index} className="bg-[#2b2b5c] p-6 rounded-2xl w-64 text-center hover:scale-105 transition-transform">
              <img src={clan.logo} alt={clan.name} className="h-24 w-24 object-contain mx-auto" />
              <h3 className="mt-4 text-xl font-bold">{clan.name}</h3>
              <p className="text-sm text-pink-400">{clan.motto}</p>
              <p className="text-sm">Rank: {clan.rank}</p>
              <p className="text-sm">Featured: {clan.featuredCard}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Events */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 flex justify-center items-center gap-2">
          <GiTreasureMap /> Live Events & Quests
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {liveEvents.map((event, index) => (
            <div key={index} className="p-6 bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 rounded-xl text-white relative">
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p>Participants: {event.participants}</p>
              <div className="absolute top-2 right-4 bg-black bg-opacity-30 px-3 py-1 rounded-full text-sm">
                ⏳ {event.countdown}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mystery Boxes */}
      <section className="py-16 px-4 bg-[#0e0e24]">
        <h2 className="text-4xl font-bold text-pink-400 mb-10 flex justify-center items-center gap-2">
          <FaBoxOpen /> Mystery Boxes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 text-center bg-[#20203c] text-white rounded-xl hover:shadow-2xl transition-all">
              <div className="glow-box mb-4 w-20 h-20 mx-auto bg-pink-500 rounded-full animate-pulse" />
              <p>Box #{i}</p>
              <p className="text-sm text-pink-300">Hover to reveal</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center my-16">
        <button className="px-8 py-4 text-lg font-bold bg-pink-600 hover:bg-pink-500 rounded-full glow-button transition-all duration-300">
          🚀 Begin Your Journey
        </button>
      </div>
    </div>
    </>
  );
}
