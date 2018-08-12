import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifList: []
  };

  getGifs = input => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(resp => resp.json())
      // .then(console.log);
      .then(json => this.setState({ gifList: json.data }));
  };

  componentDidMount() {
    this.getGifs();
  }

  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifList={this.state.gifList} />
      </div>
    );
  }
}

export default GifListContainer;
