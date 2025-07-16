import React from "react";
import Users from "../components/Users";
import Img from "../assets/img/banner-img.png";
import Button from "../components/Button";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              let's expore <br /> Three-Dimensional Visually
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
              At Haptech, we push the boundaries of reality with cutting-edge 3D
              immersive technology. Experience the future today with our
              innovative devices designed to elevate your digital world
            </p>
            {/* btns*/}
            <div className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start">
              <Button>Get it now</Button>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Expore Device
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div>
            <img src={Img} alt="Haptech 3D immersive device" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
