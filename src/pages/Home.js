import React from "react";
import "../styles/tailwind.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-woodsmoke-100 min-h-screen min-w-full ">
        <Header />
        <Hero />
        
        <section className="text-deep-cove-800 body-font mt-20 sm:mt-24 md:mt-32 lg:mt-64">
          <Blog category="Films" link="films" />
          <Blog category="People" link="people" />
        </section>

        <section className="bg-indigo-900">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
