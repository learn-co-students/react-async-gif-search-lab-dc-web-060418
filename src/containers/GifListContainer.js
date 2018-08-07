import React, { Component } from 'react';
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";


class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs:[]
        }
    }

    search = (searchQuery) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res=>res.json())
        .then(gifData=>{
            this.setState({
                gifs: gifData.data.slice(0,3)
            })
        })
    }


    render() { 
        return ( 
        <div id="gif-list-container">
            <GifSearch search={this.search}/>
            <GifList gifList={this.state.gifs}/>
        </div> );
    }
}
 
export default GifListContainer;