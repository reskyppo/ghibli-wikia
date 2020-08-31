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

  const imagesPoster = [
    "https://i.pinimg.com/originals/b4/e8/9e/b4e89e85b28618f522fdd9c7fa553d4b.jpg",
    "https://sthh84.files.wordpress.com/2015/12/graveofthefirefliesposter.jpg",
    "https://i.redd.it/to75rk5r8ao11.jpg",
    "https://i.pinimg.com/originals/74/d9/12/74d912286bf7e6a8135ba94f49178d6c.jpg",
    "https://image.tmdb.org/t/p/original/rkSE4sWmS9Lwyd16eqikRttkXfZ.jpg",
    "https://i.pinimg.com/originals/36/61/f6/3661f6300e0b67a59534513a3dc209ea.jpg",
    "https://image.tmdb.org/t/p/original/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "https://aryawardhana.files.wordpress.com/2017/09/mononoke-poster-intl.jpg",
    "https://i.pinimg.com/originals/f2/e6/00/f2e6003c49161b26c90ba8bc27a3a067.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYThhZDdiMjItYzRkNy00OTE3LTk5ZDEtMzUwNzE1ZmJkMTYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,669,1000_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "https://img.reelgood.com/content/movie/82f435b9-9de2-4f2f-b7fb-7d616420f863/poster-780.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_SY1000_SX675_AL_.jpg",
    "https://sournalistic.files.wordpress.com/2015/01/the_tale_of_the_princess_kaguya_51000058_ps_1_s-low-430x615_zps265d983d.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91Sruo1eOpL._SL1500_.jpg",
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
            data-aos="fade-left"
            data-aos-duration="1000"
            key={data?.id}
          >
            <div className=" w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-auto"
                style={{ backgroundImage: `url(${imagesPoster[idx]})` }}
                title={data?.title}
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
                  <div className="flex items-center">
                    <img
                      className="min-w-max-content h-10 rounded-full mr-4"
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
