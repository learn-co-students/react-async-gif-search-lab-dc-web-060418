import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstThreeGifs: []
    };
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList firstThreeGifs={this.state.firstThreeGifs} />
      </div>
    );
  }

  fetchGIFs = query => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          firstThreeGifs: data.map(gif => ({ url: gif.images.original.url }))
        });
      });
  };

  componentDidMount() {
    this.fetchGIFs();
  }
}
