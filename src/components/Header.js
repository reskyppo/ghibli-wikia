import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [toogle, setToogle] = useState(() => false);

  const handlerToogle = () => {
    setToogle(!toogle);
  };
  return (
    <nav className=" bg-deep-cove-600 flex  px-8 pt-2 shadow-md lg:justify-center items-center py-2">
      <div class="relative select-none bg-grey lg:flex lg:items-stretch w-full">
        <div class="flex flex-no-shrink items-stretch h-12">
          <Link
            to="/"
            class="flex-no-grow flex-no-shrink relative py-2 px-4 text-lg font-bold leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
          >
            WikiGhibli
          </Link>

          <button
            onClick={handlerToogle}
            class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {toogle ? (
          <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <Link
                to="/"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                Home
              </Link>
              <Link
                to="films"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                Films
              </Link>
              <Link
                to="people"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                People
              </Link>
            </div>
          </div>
        ) : (
          <div class="hidden lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <Link
                to="/"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                Home
              </Link>
              <Link
                to="films"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                Films
              </Link>
              <Link
                to="people"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-indigo-900"
              >
                People
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
