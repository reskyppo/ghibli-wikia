import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/icons/logo.png";
const Header = () => {
  return (
    <div className="bg-akaroa-400 flex  px-8 pt-2 shadow-md justify-evenly items-center">
      <section className="flex w-2/3 items-center pb-4">
        <img src={Logo} alt="logo" style={{ height: 50 }} />
      </section>
      <section className="w-1/3">
        <div className=" flex justify-center items-center">
          <Link
            className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
            to=""
          >
            Home
          </Link>
          <Link
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            to="/films"
          >
            Films
          </Link>
          <Link
            className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
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
