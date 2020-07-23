import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button className="rounded text-sm sm:text-2xl mx-1 p-2 sm:w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none" onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}
