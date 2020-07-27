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
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-16 items-stretch">
              {
                this.state.datas.map(data=> (
                  <div
                          className = "mx-8 md:p-12 flex flex-col md:bg-storm-gray-500 m-2 md:w-2/5"
                          key       = {data.id}>
                      <h2 className     = "tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">People</h2>
                      <h1 className     = "title-font text-xl font-medium text-gray-900 mb-3">{data.name}</h1>
                      <p  className     = "leading-relaxed mb-5">ages : {data.age}</p>
                      <p  className     = "leading-relaxed mb-5">gender : {data.gender}</p>
                      <p  className     = "leading-relaxed mb-5">eye color : {data.eye_color}</p>
                      <p  className     = "leading-relaxed mb-5">hair color : {data.hair_color}</p>
                      <div className = ' border-b-2'></div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        )
    }
}
