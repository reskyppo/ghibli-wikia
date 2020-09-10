import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="mt-4 md:mt-8 md:mx-48 px-6 md:px-6 text-gray-400">
        <div className=" flex flex-col sm:flex-row pt-4">
          <section className="py-2 sm:pl-8 lg:ml-24 lg:pl-5 full sm:w-1/2">
            <h1 className="text-2xl mb-2 font-semibold">About Me!</h1>
            <p className="text-gray-500">
              I am a student who likes challenges and makes projects to improve
              my abilities. This page is one of them
            </p>
          </section>

          <section className="sm:ml-16  md:ml-20 lg:ml-64 py-2 w-full sm:w-1/2">
            <h1 className="text-2xl mb-2 font-semibold">Source</h1>

            <section className="flex flex-col text-gray-500">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://ghibliapi.herokuapp.com/"
              >
                Ghibli APi
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ghibli.fandom.com/wiki/Ghibli_Wiki"
              >
                Ghibli Fandom
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.imdb.com/"
              >
                IMDb
              </a>
            </section>
          </section>
        </div>
        <div className="text-gray-700 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500  sm:py-2 sm:mt-0 mt-4">
              Made with ❤ by
              <a
                className="text-gray-600 ml-1 "
                href="https://github.com/reskyppo"
                rel="noopener noreferrer"
                target="_blank"
              >
                Reskyppo
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-500"
                rel="noopener noreferrer"
                target="_blank"
                href=" https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Hi+Kyppo&to=reskybeen@gmail.com"
              >
                <HiOutlineMail />
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://github.com/reskyppo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GoMarkGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
