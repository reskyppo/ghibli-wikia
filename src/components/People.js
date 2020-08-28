import React, { Component } from "react";
import Axios from "axios";

export default class People extends Component {
  state = {
    datas: [
      {
        img:
          "https://pm1.narvii.com/7288/d8611ee3aa521b669afc7d7f5144ca133a019366r1-1920-1038v2_hq.jpg",
      },
      {
        img:
          "https://1.bp.blogspot.com/-4e9tl6UsO18/Tn0VwLMxQHI/AAAAAAAAABo/Q4ifxdmApmY/s1600/laputa+4.png",
      },
    ],
  };

  images = [
    {
      id: 1,
      img:
        "https://pm1.narvii.com/7288/d8611ee3aa521b669afc7d7f5144ca133a019366r1-1920-1038v2_hq.jpg",
    },

    {
      id: 2,
      img:
        "https://1.bp.blogspot.com/-4e9tl6UsO18/Tn0VwLMxQHI/AAAAAAAAABo/Q4ifxdmApmY/s1600/laputa+4.png",
    },
  ];

  componentDidMount() {
    Axios.get("https://ghibliapi.herokuapp.com/people").then(
      (res) => {
        this.setState({
          datas: res.data,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <>
        <div className="container mx-auto justify-evenly items-stretch flex flex-wrap ">
          {this.state.datas.map((data, idx) => (
            <div
              className="max-w-sm mx-4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden my-4"
              key={idx}
            >
              {this.images.map((image) => (
                <img
                  key={image.id}
                  className="w-full h-56 object-cover object-center"
                  src={image.img}
                  alt="avatar"
                />
              ))}
              <div className="flex items-center px-6 py-3 bg-gray-900">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                </svg>
                <h1 className="mx-3 text-white font-semibold text-lg">
                  Focusing
                </h1>
              </div>
              <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.name}
                </h1>
                <p className="py-2 text-lg text-gray-700">
                  Full Stack maker & UI / UX Designer , love hip hop music
                  Author of Building UI.
                </p>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>

                  <h1 className="px-2 text-sm">Age : {data.age}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                  </svg>
                  <h1 className="px-2 text-sm">California</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                  </svg>
                  <h1 className="px-2 text-sm">patterson@example.com</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
