import React, { Component, Fragment } from "react";
import "../styles/tailwind.css";
import Films from "../components/Films";
import Button from "../components/Button";
import People from "../components/People";
import Header from "../components/Header";

class Ghibli extends Component {
  state = {
    page: "home",
  };

  handleFilms = () => {
    this.setState({
      page: "films",
    });
  };

  handlePeople = () => {
    this.setState({
      page: "people",
    });
  };

  handleLocations = () => {
    this.setState({
      page: "Locations",
    });
  };
  handlePeople = () => {
    this.setState({
      page: "people",
    });
  };
  handlePeople = () => {
    this.setState({
      page: "people",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="bg-akaroa-500 min-h-screen min-w-full">
          <section className="text-gray-700 body-font">
            <div className="container px-5 pt-24 mx-auto">
              <Header />
              <div className="container flex flex-row text-center justify-around my-6 ">
                <Button name="Films" onClick={this.handleFilms} />
                <Button name="People" onClick={this.handlePeople} />
                <Button name="Locations" onClick={this.handleFilms} />
                <Button name="Spesies" onClick={this.handleFilms} />
                <Button name="Vehicles" onClick={this.handleFilms} />
              </div>
              {
                {
                  home: (
                    <div className="container text-4xl text-center mt-10">
                      Please select your favorite category first!
                    </div>
                  ),
                  films: <Films />,
                  people: <People />,
                }[this.state.page]
              }
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Ghibli;
