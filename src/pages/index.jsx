import React, { Component, Fragment } from 'react';
import '../styles/tailwind.css'
import Axios from 'axios';

class Ghibli extends Component{
    state = {
        datas : [],
        isLoading : 'home'

    }

    componentDidMount() {
        Axios.get('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                console.log(res);
                this.setState({
                    datas : res.data,
                })                
            },err => {
                console.log(err);
            })
           
    }
    
    handleFilms = () => {
        this.setState({
            isLoading : 'films'
        })
        console.log(this.state.isLoading);
    }

    render() {
        const {datas} = this.state
        return (
            <Fragment>
                <div className="bg-akaroa-500 min-h-screen">
                    <section className="text-gray-700 body-font">
                        <div className="container px-5 pt-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-2 sm:mb-12">
                                <h2 className="text-base text-storm-gray-500 tracking-widest font-medium title-font mb-1">GHIBLI WIKIA</h2>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font text-woodsmoke-500">Find your favorite ghibli movies</h1>   
                            </div>
                            <div className="container flex text-center justify-between mb-3">
                                <button className="rounded text-2xl w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none" onClick={this.handleFilms}>tes</button>
                                <button className="rounded text-2xl w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none">tes</button>
                                <button className="rounded text-2xl w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none">tes</button>
                                <button className="rounded text-2xl w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none">tes</button>
                                <button className="rounded text-2xl w-1/6 bg-storm-gray-400 sm:h-12 focus:outline-none">tes</button>
                            </div>
                            {   this.state.isLoading === 'home'? 
                                <div className="text-4xl">
                                    YO!
                                </div>
                                : <section className="text-gray-700 body-font overflow-hidden">
                                    <div className="container px-5 mx-auto">
                                        <div className="flex flex-wrap -mx-16 items-stretch">
                                            { 
                                            datas.map(data => 
                                                <div className="p-12 md:w-1/2 flex flex-col" key ={data.id} >
                                                    <span className="inline-block py-1 px-3 rounded bg-orange-100 text-woodsmoke-500 text-sm w-16 font-medium tracking-widest">Films</span>
                                                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-woodsmoke-500 mt-4 mb-4">{data.title} ({data.release_date})</h2>
                                                    <p className="leading-relaxed mb-8">{data.description}</p>
                                                    <p className="inline-flex items-center border-t-2 w-full pt-4">
                                                        <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                                                        <span className="flex flex-col pl-4">
                                                            <span className="title-font font-medium text-gray-900">{data.director}</span>
                                                            <span className="text-gray-500 text-sm">Director</span>
                                                        </span>
                                                        <span className="flex flex-col pl-8">
                                                            <span className="title-font font-medium text-gray-900">{data.producer}</span>
                                                            <span className="text-gray-500 text-sm">Producer</span>
                                                        </span>
                                                    </p>
                                                </div> 
                                                )
                                            }
                                        </div>
                                    </div>
                                </section>    
                            }
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default Ghibli;