import React from "react";
import "../styles/tailwind.css";
import People from "../components/People";


function Home() {
  return (
    <>
      <div className="bg-akaroa-500 min-h-screen min-w-full">
        <section className="text-gray-700 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <People></People>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
