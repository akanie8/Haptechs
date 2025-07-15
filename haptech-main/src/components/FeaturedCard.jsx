import React from "react";

const FeaturedCard = ({ image, title, description }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} />
      <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
