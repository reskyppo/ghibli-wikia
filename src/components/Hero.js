import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col text-center w-full  h-16 mb-2 sm:mb-12 field">
      <img
        src="https://wallpaperaccess.com/full/963498.jpg"
        alt="heder"
        className="object-cover hero-rounded "
        style={{ height: 600 }}
      />
      <div
        className="absolute w-full bg-blue-700 opacity-75 hero-rounded hidden lg:block"
        style={{ height: 600 }}
      />
    </div>
  );
};

export default Hero;
