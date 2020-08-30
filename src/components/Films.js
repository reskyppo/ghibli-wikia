import React, { useState, useEffect } from "react";

//import package
import Axios from "axios";
import AOS from "aos";
// import style
import "aos/dist/aos.css";
// initialization packaege AOS
AOS.init();
const Films = () => {
  const [datas, setDatas] = useState(() => []);

  const images = [
    "https://i.pinimg.com/originals/b4/e8/9e/b4e89e85b28618f522fdd9c7fa553d4b.jpg",
  ];

  useEffect(() => {
    Axios.get("https://ghibliapi.herokuapp.com/films").then(
      (res) => {
        console.log(res.data);
        setDatas(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <section className="text-gray-700  overflow-hidden">
      <div className="container px-5 mx-auto">
        {datas?.map((data, idx) => (
          <div
            className="flex flex-wrap -mx-16 items-stretch mb-8"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            key={data?.id}
          >
            <div className=" w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-auto"
                style={{ backgroundImage: `url(${images})` }}
                title="Woman holding a mug"
              ></div>
              <div className=" ml-8 lg:-ml-8 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-10  flex flex-col justify-between leading-normal">
                <div className="mb-6">
                  <div className="text-black font-bold text-xl mb-2">
                    {data.title} ({data?.release_date})
                  </div>
                  <p className="text-grey-darker text-base pr-4 ">
                    {data?.description}
                  </p>
                </div>

                <div className="flex">
                  <div className="flex items-center ">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-black leading-none">
                        {data?.director}
                      </p>
                      <p className="text-grey-dark">Director</p>
                    </div>
                  </div>
                  <div className="flex items-center ml-10 ">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-black leading-none">
                        {data?.producer}
                      </p>
                      <p className="text-grey-dark">Producer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Films;
