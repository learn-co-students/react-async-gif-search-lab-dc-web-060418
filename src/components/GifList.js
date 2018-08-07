import React from "react";

export default class GifList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.firstThreeGifs.map(gif => (
          <img key={gif.url} src={gif.url} alt="gif" />
        ))}{" "}
      </div>
    );
  }
}
