import React from "react";
import "../styles/tailwind.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <div className="bg-woodsmoke-100 min-h-screen min-w-full ">
        <Header />
        <Hero />
        <div className="text-deep-cove-800 body-font mt-20 sm:mt-24 md:mt-32 lg:mt-64">
          <section>
            <Blog category="Films" link="films" />
            <Blog category="People" link="people" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
