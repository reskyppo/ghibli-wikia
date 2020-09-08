import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-deep-cove-600 flex  px-8 pt-2 shadow-md justify-center items-center">
      <section className="flex w-1/2 items-center">
        <h1 className="text-2xl font-bold text-white py-3 mx-5">WikiGhibli</h1>
      </section>
      <section className="">
        <div className=" text-white flex justify-center items-center">
          <Link
            className="no-underline text-teal-dark border-b-2 border-transparent uppercase tracking-wide font-extrabold text-sm py-3 mr-8"
            to=""
          >
            Home
          </Link>
          <Link
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-3 mr-8"
            to="/films"
          >
            Films
          </Link>
          <Link
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-3 mr-8"
            to="/people"
          >
            People
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;
