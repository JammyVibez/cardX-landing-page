import React from "react";

import "./ArenaSection.css";

const highlights = [
  {
    title: "🔥 Top Users",
    content: [
      { name: "KaiSen", badge: "L", avatar: "/avatar/gojopfp.jpg" },
      { name: "Nova", badge: "SS", avatar: "/avatar/cyberpunkpfp.png" },
    ],
  },
  {
    title: "✨ Most Traded Card",
    content: [{ name: "6⭐ Phoenix Blade", img: "/image-card/pheonix-card.jpg" }],
  },
  {
    title: "🎯 Weekly Challenge",
    content: ["Bid War for S Card starts now!", "Join the Blitz Arena"]
  }
];

const marketplaceCards = [
  {
    name: "SS Cyber Dragon",
    stars: "SS",
    timeLeft: "1h 22m",
    video: "/video-card/vid-card-15.mp4",
  },
  {
    name: "L Thunderbolt",
    stars: "L",
    timeLeft: "45m",
    video: "/video-card/vid-card-12.mp4",
  }
];

const testimonials = [
    {
      username: "KaiSen",
      avatar: "/avatar/gojopfp.jpg",
      rank: "L",
      highestCard: "6⭐ Divine Emperor",
      clan: "Crimson Order",
      message: "I pulled a legendary on my first day – now I’m in the Top 10!"
    },
    {
      username: "Nova",
      avatar: "/avatar/cyberpunkpfp.png",
      rank: "SS",
      highestCard: "SS Cyber Valkyrie",
      clan: "Void Syndicate",
      message: "The auction arena is pure 🔥."
    },
    {
      username: "Aether",
      avatar: "/avatar/superpfp.jpg",
      rank: "S",
      highestCard: "S Thunder Wolf",
      clan: "Nightshard",
      message: "My S-card got me exclusive dev access to a secret Discord!"
    }
  ];
  

const ArenaSections = () => {
  return (
    <>
      {/* Arena Battle Highlights */}
      <section className=" from-[#0e0f3a] to-[#0b0c28] text-white py-24 px-8 md:px-16 ">
        <h2 className="text-5xl font-bold text-center mb-16 glow-text tracking-wide">Arena Battle Highlights</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((h, i) => (
            <div key={i} className="p-8 bg-black/30 rounded-3xl backdrop-blur-xl border border-purple-500 glow-card transform hover:scale-[1.03] transition duration-300 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">{h.title}</h3>
              <div className="space-y-4 text-base">
                {h.content.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {item.avatar && <img src={item.avatar} className="w-10 h-10 rounded-full border border-white/30" />}
                    {item.img && <img src={item.img} className="w-14 h-14 rounded-md" />}
                    <span>{item.name || item}</span>
                    {item.badge && <span className="ml-auto bg-gradient-to-br from-pink-500 to-purple-600 px-2 py-1 rounded text-xs font-bold">{item.badge}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketplace Auction */}
      <section className=" text-white py-24 px-8 md:px-16">
        <h2 className="text-5xl font-bold text-center mb-16 glow-text tracking-wide">Marketplace Auction</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {marketplaceCards.map((card, i) => (
            <div key={i} className="w-64 h-96 bg-black/30 rounded-3xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition duration-300 perspective-1000 shadow-2xl flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front p-5 flex flex-col justify-center items-center">
                  <video src={card.video} className="w-full h-48 object-cover rounded-lg mb-4" ></video>
                  <h3 className="text-xl font-bold text-pink-300">{card.name}</h3>
                  <p className="text-sm mt-2">{card.stars} Tier</p>
                  <p className="text-xs text-gray-300">Ends in: {card.timeLeft}</p>
                </div>
                <div className="flip-card-back p-6 flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl">
                  <p className="text-white text-lg font-bold">🔥 Live Auction</p>
                  <p className="text-sm">Place your bid now!</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIP & Rewards */}
      <section className=" from-[#140c33] to-[#1b1142] text-white py-24 px-8 md:px-16 text-center relative overflow-hidden">
        <h2 className="text-5xl font-bold mb-4 glow-text">VIP & Rewards</h2>
        <p className="mb-10 text-pink-300 text-lg">Unlock exclusive perks by becoming a VIP or L Card Holder</p>
        <div className="relative flex justify-center z-10">
          <video src="/video-card/vid-card-14.mp4" className="w-44 h-64 animate-float glow-card border-2 border-pink-500 rounded-2xl"></video>
        </div>
      </section>

      {/* Testimonials */}
     {/* Testimonials Section */}
<section className=" text-white py-24 px-8 md:px-16 ">
  <h2 className="text-5xl font-bold text-center mb-14 glow-text">User Shouts</h2>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {testimonials.map((user, idx) => (
      <div key={idx} className="bg-black/30 border border-pink-500 p-6 rounded-3xl backdrop-blur-xl shadow-xl hover:scale-[1.02] transition-all">
        <div className="flex items-center mb-4 gap-4">
          <img src={user.avatar} className="w-14 h-14 rounded-full border-2 border-white/20" />
          <div>
            <h3 className="text-lg font-bold">{user.username}</h3>
            <div className="text-xs text-gray-400">
              <span className="mr-2 bg-gradient-to-br from-pink-500 to-purple-600 px-2 py-0.5 rounded-md font-semibold">{user.rank} Rank</span>
              <span className="italic">🏹 {user.clan}</span>
            </div>
          </div>
        </div>
        <div className="mb-3 text-sm text-gray-300">🔥 Highest Card: <span className="text-white font-semibold">{user.highestCard}</span></div>
        <blockquote className="italic text-sm text-gray-200 border-l-4 pl-4 border-pink-400">
          “{user.message}”
        </blockquote>
      </div>
    ))}
  </div>
</section>


      {/* Final CTA */}
      <section className="relative  from-[#0b0c28] to-black text-white py-28 text-center overflow-hidden">
        <h2 className="text-5xl font-bold mb-6 glow-text">Start Collecting Now</h2>
        <p className="mb-8 text-pink-400 text-lg">Get your Free Card & Join the Arena</p>
        <button className="px-10 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-xl hover:scale-105 transition-all">
          Join the CardX Arena
        </button>
      </section>
    </>
  );
};

export default ArenaSections;
