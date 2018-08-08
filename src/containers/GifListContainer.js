import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }

  }



  findGifs = (searchInput) => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(gifs => {
        let list = []
        for(let i = 0; i < 3; i++) {
          list.push(gifs.data[i].images.original.url)
        }
        this.setState({gifs: list})
      })
  }

  searchHandler = (input) => {
    this.findGifs(input)
  }

  render() {

    return(
      <div>
        <GifSearch submitHandler={this.searchHandler}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
