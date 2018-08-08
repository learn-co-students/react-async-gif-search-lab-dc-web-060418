import React, { Component } from 'react'

class GifSearch extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(e.target.input.value)
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="input"></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default GifSearch
