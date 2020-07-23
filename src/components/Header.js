import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
             <div className="flex flex-col text-center w-full mb-2 sm:mb-12">
                <h2 className="text-base text-storm-gray-500 tracking-widest font-medium title-font mb-1">
                  GHIBLI WIKIA
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-woodsmoke-500">
                  Find your favorite ghibli movies
                </h1>
              </div>
        )
    }
}

