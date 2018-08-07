import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    getGifs = (e, searchTerm) => {
        e.preventDefault()
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json()).then(data => {
            console.log(data.data)
            this.setState({
                gifs: data.data.slice(0,3)
            })
        })
    }

    render() {
        return(
            <div>
                <GifSearch submitHandler={this.getGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}