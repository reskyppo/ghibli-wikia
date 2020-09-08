import React from "react";
import hero from "../assets/icons/hero.png";
const Hero = () => {
  return (
    <>
      <section className="header-clipping pt-10 ">
        <div className="sunshine"></div>
        <div className="container mx-auto lg:flex lg:items-center lg:justify-evenly">
          <div>
            <h1 className="text-white font-bold pl-4 -mt-8 lg:mt-8 text-2xl lg:text-5xl">
              Discover the world's of Ghibli <br /> just from your hand
            </h1>
            <p className="text-woodsmoke-100 pl-4 mt-1 lg:mt-4 text-sm lg:text-lg">
              Studio Ghibli Inc. is a Japanese animation film studio
              headquartered in Koganei, Tokyo. The studio is best known for its
              animated feature films, and has also produced several short films,
              television commercials, and one television film.
            </p>
          </div>
          <img src={hero} alt="hero" className="h-64 " />
        </div>
      </section>
    </>
  );
};

export default Hero;
