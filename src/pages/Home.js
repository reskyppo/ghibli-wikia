import React from "react";
import "../styles/tailwind.css";
import People from "../components/People";
import Films from "../components/Films";

function Home() {
  return (
    <>
      <div className="bg-akaroa-500 min-h-screen min-w-full">
        <section className="text-gray-700 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <People></People>
            <div className="" style={{ height: 150 }}></div>
            <Films></Films>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
