import React from "react";

interface FeaturedCardProps {
  image: string;
  title: string;
  description: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, title, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-md p-6 transition-all duration-300">
        <h4 className="font-semibold text-xl mb-2 text-white drop-shadow-md">
          {title}
        </h4>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
