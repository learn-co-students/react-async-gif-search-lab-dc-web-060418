import React from "react";

class GifSearch extends React.Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getGifs(this.state.input);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
      </form>
    );
  }
}

export default GifSearch;
