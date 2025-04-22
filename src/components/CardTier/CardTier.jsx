import React from "react";

const tiers = [
  {
    label: "1⭐",
    video: "/video-card/vid-card-10.mp4",
    bonus: "+10 XP",
    description: "Basic playable card",
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-800",
  },
  {
    label: "6⭐",
    video: "/video-card/vid-card-9.mp4",
    bonus: "+50 XP",
    description: "Unlock exclusive arena skin",
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    label: "S",
    image: "/image-card/fairytale.png",
    bonus: "Use in Auction Arena",
    description: "Limited edition series",
    bgColor: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
  {
    label: "SS",
    image: "/image-card/actor-card.png",
    bonus: "Power Boost x1.5",
    description: "Elite team playable",
    bgColor: "bg-gradient-to-br from-pink-500 to-red-500",
  },
  {
    label: "L",
    image: "/image-card/super-card.png",
    bonus: "Legend Unlock: Skin + XP",
    description: "Legendary class only",
    bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
];

const CardTiers = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 px-8 b from-[#0b0c28] to-[#0e0f3a] text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10">
        How It Works:{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Card Tiers
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative w-52 h-72 rounded-xl transform transition duration-500 hover:rotate-[1deg] hover:scale-105 shadow-2xl perspective overflow-hidden ${tier.bgColor}`}
          >
            <div className="absolute top-2 right-2 text-sm font-bold text-white drop-shadow-md">
              {tier.label}
            </div>

            {/* Conditional rendering for video or image */}
            {tier.video ? (
              <video
                src={tier.video}
                className="w-full h-36 object-cover rounded-lg shadow-inner"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={tier.image}
                alt={tier.label}
                className="w-full h-36 object-cover rounded-lg shadow-inner"
              />
            )}

            <div className="mt-4 px-2 text-center">
              <p className="font-bold text-white text-sm">{tier.bonus}</p>
              <p className="text-xs text-gray-200 mt-1">{tier.description}</p>
            </div>

            {/* Fancy border glow effect */}
            <div className="absolute inset-0 rounded-xl border border-white border-opacity-20 pointer-events-none shadow-[0_0_20px_#fff3]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardTiers;
