import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchQuery: ""
         }
    }

    onChangeHandler = (e) => {
        this.setState({searchQuery: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.search(this.state.searchQuery)
        this.setState({searchQuery: ""})
    }

    render() { 
        return (
        <form onSubmit={this.submitHandler}>
            <input value={this.state.searchQuery} onChange={this.onChangeHandler} type="text" />
            <button type="submit">Find Gifs</button>
        </form>
        );
    }
}
 
export default GifSearch;