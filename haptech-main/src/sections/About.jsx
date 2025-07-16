import React from "react";

import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";
const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24" id="About">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            <div className="self-start">
              <img src={Img1} alt="" />
            </div>
            <div className="self-end">
              <img src={Img2} alt="" />
            </div>
          </div>
          <div className="flex-1 flex-col items-start justify-center mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6">
              Ready to unlock new Experience?
            </h2>
            <p className="font-secondary mb-6">
              Haptech is a cutting-edge technology company focused on delivering
              immersive 3D and virtual experiences. We specialize in creating
              innovative mixed-reality hardware and software that blend the
              digital and physical worlds seamlessly. From advanced headsets and
              AI-driven interfaces to collaborative virtual environments,
              Haptech is shaping the future of how people interact, learn, and
              connect in the metaverse. Our mission is to make immersive tech
              more accessible, intuitive, and impactful, empowering creators,
              learners, and explorers alike
            </p>
            <button className="btn">Get it Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
