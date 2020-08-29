import React, { useState, useEffect } from "react";

//import package
import Axios from "axios";
import AOS from "aos";

// import style
import "aos/dist/aos.css";

// import component
import PeopleFilms from "./PeopleFilms";

// initialization packaege AOS
AOS.init();

const People = () => {
  // Hooks Data
  const [datas, setDatas] = useState(() => []);

  // Array Image Picture
  const images = [
    "https://pm1.narvii.com/7288/d8611ee3aa521b669afc7d7f5144ca133a019366r1-1920-1038v2_hq.jpg",
    "https://i.pinimg.com/originals/d3/53/14/d353148abb86f47900d6e6daafd9fe75.jpg",
    "https://vignette.wikia.nocookie.net/disney/images/c/c3/5688-2094236141.jpg/revision/latest?cb=20140915192650",
    "https://cdn.anisearch.de/images/character/cover/full/13/13710.jpg",
    "https://cdn.myanimelist.net/r/360x360/images/characters/13/26803.jpg?s=504303563b3d53c224be36867274318a",
    "https://vignette.wikia.nocookie.net/jadensadventures/images/f/fa/General_Muoro.jpg/revision/latest/window-crop/width/200/x-offset/176/y-offset/0/window-width/451/window-height/450?cb=20160217003625",
    "https://feelinganimatedblog.files.wordpress.com/2019/11/mr-duffi-close-up-outside-home.jpg?w=525",
    "https://static.wikia.nocookie.net/studio-ghibli/images/8/80/Louis.jpg",
    "https://studioghiblimovies.com/wp-content/uploads/2014/11/image0105.jpg",
    "https://feelinganimatedblog.files.wordpress.com/2019/11/henri-frisking-pazu.jpg?w=525",
    "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
    "https://i.pinimg.com/originals/e8/4d/91/e84d91c4140425e1b753270cf57876f3.jpg",
    "https://vignette.wikia.nocookie.net/disney/images/3/3f/San.jpg/revision/latest?cb=20130927175850",
    "https://filmschoolrejects.com/wp-content/uploads/2019/10/Eboshi.jpg",
    "https://rubberslug.s3.amazonaws.com/user/2/2fc0843bb534c8b9a6e99997e745fee/amtqktguro_m.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/d/d1/Kohroku_gives.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/4/42/Gonza_%282%29.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/e/ef/Yakul.jpg",
    "https://i.pinimg.com/originals/db/e7/6d/dbe76d76733c6d69f76a9cb0d399c39a.jpg",
    "https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg",
    "https://pa1.narvii.com/6881/de03af345671b6fd58d1638477babddb4744fbdar1-500-397_hq.gif",
    "https://vignette.wikia.nocookie.net/disney/images/b/b9/Satsuki.jpg",
    "https://cdn.shopify.com/s/files/1/0100/4054/1243/files/mei_grande.png",
    "https://i.pinimg.com/originals/27/9e/e7/279ee73cc16eb9b103ee21c8d4f7fb3d.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
    "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
    "https://i.pinimg.com/originals/2c/12/15/2c121541c3122a04a0de71b771393432.png",
    "https://www.brightwalldarkroom.com/wp-content/uploads/2017/04/truechildrenscinema.png",
    "https://i.pinimg.com/originals/33/a7/89/33a7890e95c4267bbde24ca04ce10ae5.jpg",
    "https://i.pinimg.com/originals/a5/92/2e/a5922e26290a5610c5c9a65929654907.jpg",
    "https://am24.mediaite.com/tms/cnt/uploads/2016/05/catbus.jpg",
    "https://pm1.narvii.com/6552/6f8912b43dbffa28be43fa2841dfa243ee9be998_hq.jpg",
    "https://i.pinimg.com/originals/0f/44/8b/0f448b9c6f94d72bb4f6b1105f4bb763.jpg",
    "https://vignette.wikia.nocookie.net/villains/images/3/34/The_Cat_King.jpg",
    "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
    "https://pa1.narvii.com/7100/bcea4dc891f74dff4a1bbeff0a3f89fa3d5dd472r1-500-272_hq.gif",
    "https://vignette.wikia.nocookie.net/disney/images/c/c0/Baron_Humbert_von_Gikkingen.png",
    "https://i.pinimg.com/originals/93/58/ec/9358ec2100a8bfc732618ec9dd278571.jpg",
    "https://vignette.wikia.nocookie.net/disney/images/e/ef/582743-mushka2.jpg",
    "https://www.intofilm.org/intofilm-production/scaledcropped/1096x548https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3341-porco-rosso--hi_res-f86c8923.jpg/film__3341-porco-rosso--hi_res-f86c8923.jpg",
    "https://vignette.wikia.nocookie.net/ponyo/images/b/b9/Contrib.jpg",
  ];

  // Get Data Via API with Axios
  useEffect(() => {
    Axios.get("https://ghibliapi.herokuapp.com/people").then(
      (res) => {
        setDatas(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <div className="container mx-auto justify-evenly items-stretch flex flex-wrap ">
        {datas.map((data, idx) => (
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="max-w-sm mx-4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden my-8"
            key={idx}
          >
            <img
              className="w-96 h-56 object-cover object-center"
              src={images[idx]}
              alt="avatar"
            />
            {/* Send props from film array datas */}
            <div className="w-full bg-dove-gray-800 px-6 text-white text-2xl font-semibold">
              <PeopleFilms film={data.films} />
            </div>
            <div className="py-4 px-6">
              <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>

              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <h1 className="px-2 text-sm">Gender : {data.gender}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                </svg>
                <h1 className="px-2 text-sm">Eye color : {data.eye_color}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h1 className="px-2 text-sm">Age : {data.age}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default People;
