import React from "react";

export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleSearchTyping = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.submitHandler(e, this.state.searchTerm)}>
                <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTyping}/>
                <input type="submit" value="Find Gifs"/>
            </form>
        )
    }
}