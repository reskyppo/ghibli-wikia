import React from "react";
import "../styles/tailwind.css";
import Hero from "../components/Hero";
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <div className="bg-akaroa-500 min-h-screen min-w-full">
        <Header/>
        <Hero />
        <section className="text-gray-700 body-font">
          <div className="container px-5 pt-12 mx-auto">
            <p>home</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
