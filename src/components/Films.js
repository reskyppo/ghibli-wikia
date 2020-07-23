import React, { Component } from 'react'
import Axios from 'axios';

export default class Films extends Component {
    state = {
        datas: []
    };

    componentDidMount() {
        Axios.get("https://ghibliapi.herokuapp.com/films").then(
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
            <section className="text-gray-700 body-font overflow-hidden">
                  <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -mx-16 items-stretch">
                      {this.state.datas.map((data) => (
                        <div
                          className="p-12 md:w-1/2 flex flex-col"
                          key={data.id}
                        >
                          <span className="inline-block py-1 px-3 rounded bg-orange-100 text-woodsmoke-500 text-sm w-16 font-medium tracking-widest">
                            Films
                          </span>
                          <h2 className="sm:text-3xl text-2xl title-font font-medium text-woodsmoke-500 mt-4 mb-4">
                            {data.title} ({data.release_date})
                          </h2>
                          <p className="leading-relaxed mb-8">
                            {data.description}
                          </p>
                          <p className="inline-flex items-center border-t-2 w-full pt-4">
                            <img
                              alt="blog"
                              src="https://dummyimage.com/104x104"
                              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900">
                                {data.director}
                              </span>
                              <span className="text-gray-500 text-sm">
                                Director
                              </span>
                            </span>
                            <span className="flex flex-col pl-8">
                              <span className="title-font font-medium text-gray-900">
                                {data.producer}
                              </span>
                              <span className="text-gray-500 text-sm">
                                Producer
                              </span>
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        )
    }
}
