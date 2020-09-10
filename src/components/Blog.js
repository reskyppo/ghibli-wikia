import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
const Blog = ({ category, link }) => {
  const [people, setPeople] = useState(() => []);

  console.log(people[0]);
  console.log(people[1]);
  console.log(people[2]);

  useEffect(() => {
    Axios.get("https://ghibliapi.herokuapp.com/people").then(
      (res) => {
        console.log(res);
        setPeople(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return category === "Films" ? (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="-my-8">
          <div className="py-8 flex flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                {category}
              </span>
              <span className="mt-1 text-gray-600 font-semibold text-sm">1986</span>
            </div>
            <div className="md:flex-grow ">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Castle in the Sky
              </h2>
              <p className="leading-relaxed">
                The orphan Sheeta inherited a mysterious crystal that links her
                to the mythical sky-kingdom of Laputa. With the help of
                resourceful Pazu and a rollicking band of sky pirates, she makes
                her way to the ruins of the once-great c`ivilization. Sheeta and
                Pazu must outwit the evil Muska, who plans to use Laputa's
                science to make himself ruler of the world.
              </p>
              <Link
                className="text-blue-500 inline-flex items-center mt-4"
                to={`/${link}`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="py-8  border-t-2 border-gray-200 flex-wrap md:flex-no-wrap hidden sm:flex">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                {category}
              </span>
              <span className="mt-1 text-gray-600 font-semibold text-sm">1988</span>
            </div>
            <div className="md:flex-grow ">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Grave of the Fireflies
              </h2>
              <p className="leading-relaxed">
                In the latter part of World War II, a boy and his sister,
                orphaned when their mother is killed in the firebombing of
                Tokyo, are left to survive on their own in what remains of
                civilian life in Japan. The plot follows this boy and his sister
                as they do their best to survive in the Japanese countryside,
                battling hunger, prejudice, and pride in their own quiet,
                personal battle.
              </p>
              <Link
                className="text-blue-500 inline-flex items-center mt-4"
                to={`/${link}`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="-my-8">
          <div className="py-8 flex flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                {category}
              </span>
              <span className="mt-1 text-gray-600 font-semibold text-sm">13 year old</span>
            </div>
            <div className="md:flex-grow ">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Pazu
              </h2>
              <p className="leading-relaxed">
                Pazu is the protagonist of Castle in the Sky. He is Sheeta's
                best friend. Pazu has made proving that Laputa exists his
                mission in life after his father found the place and was
                believed to be a liar for his discovery.
              </p>
              <Link
                className="text-blue-500 inline-flex items-center mt-4"
                to={`/${link}`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="py-8  border-t-2 border-gray-200 flex-wrap md:flex-no-wrap hidden sm:flex">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                {category}
              </span>
              <span className="mt-1 text-gray-600 font-semibold text-sm">13 year old</span>
            </div>
            <div className="md:flex-grow ">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Lusheeta Toel Ul Laputa
              </h2>
              <p className="leading-relaxed">
                Sheeta, whose full name is Lusheeta Toel Ul Laputa ("Toel"
                meaning "true" and "Ul" meaning "ruler" in Laputian), is a
                13-year-old orphaned farm girl. Her glowing stone keeps Laputa
                alive.
              </p>
              <Link
                className="text-blue-500 inline-flex items-center mt-4"
                to={`/${link}`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
