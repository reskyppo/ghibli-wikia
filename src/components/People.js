import React, { Component } from 'react'
import Axios from 'axios';

export default class People extends Component {
    state = {
        datas: []
    };

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
            <section className="text-gray-700 body-font overflow-hidden">
                  <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -mx-16 items-stretch">
                      {this.state.datas.map((data) => (
                        <div
                          className="p-12 md:w-1/2 flex flex-col"
                          key={data.id}
                        >
                          <span className="inline-block py-1 px-3 rounded bg-orange-100 text-woodsmoke-500 text-sm w-auto font-medium tracking-widest">
                            People
                          </span>
                          <h2 className="sm:text-3xl text-2xl title-font font-medium text-woodsmoke-500 mt-4 mb-4">
                            {data.name} ({data.gender})
                          </h2>
                          <p className="leading-relaxed mb-8">
                            age : {data.age},
                            <br></br>
                            eye color : {data.eye_color},
                            <br></br>
                            hair color : {data.hair_color},
                          </p>
                          </div>
                      ))}
                    </div>
                  </div>
                </section>
        )
    }
}
