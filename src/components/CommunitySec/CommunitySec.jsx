import React from "react";
import "./CommunitySec"

const communities = [
  {
    name: "Anime ⚔️",
    image: "/comm-img/hero-1.jpg",
    description: "Home of warriors and magical cards.",
    live: 312,
    topPulls: [
      { name: "Yami", card: "6⭐ Ichigo" },
      { name: "Sakura", card: "S Naruto" }
    ]
  },
  {
    name: "Tech 🛠️",
    image: "/community/tech.png",
    description: "Mech cards, gear systems, and robots.",
    live: 198,
    topPulls: [
      { name: "NeonX", card: "SS Cyberbot" },
      { name: "Byte", card: "S HackDrone" }
    ]
  },
  {
    name: "Entertainment 🎬",
    image: "/community/entertainment.png",
    description: "Celebrity cards, VFX magic, and rare skins.",
    live: 421,
    topPulls: [
      { name: "Starboy", card: "L MJ Skin" },
      { name: "Luna", card: "SS VFX King" }
    ]
  }
];
const CommunitySec = () => {
  return (
    <section
      id="community"
      className="py-20 px-8  from-[#0e0f3a] to-[#0b0c28] text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Choose Your Side</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {communities.map((c, idx) => (
          <div
            key={idx}
            className="group bg-[#1a1c40] p-6 rounded-2xl shadow-xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 floating"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-28 h-28 mx-auto mb-4 glowing"
            />

            <h3 className="text-xl font-bold mb-1">{c.name}</h3>
            <p className="text-sm text-pink-300">{c.description}</p>

            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:scale-105 transition-all">
              Join {c.name}
            </button>

            {/* Mini Leaderboard */}
            <div className="mt-6 text-left text-xs bg-black/20 p-3 rounded-lg backdrop-blur-md">
              <h4 className="font-bold text-pink-400 mb-2">Top Pulls</h4>
              <ul className="space-y-1">
                {c.topPulls.map((user, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{user.name}</span>
                    <span>{user.card}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Count */}
            <div className="mt-4 text-xs text-gray-300">
              <span className="text-green-400">●</span> {c.live} online now
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySec;
