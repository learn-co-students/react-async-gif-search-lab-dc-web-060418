import React, {Component} from "react"

class GifSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    onChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }


    render() {
        // console.log(this.state)
        return(
            <div>
                <input type="text" onChange={this.onChangeHandler} value={this.state.searchTerm} />
                <button onClick={() => this.props.submitHandler(this.state.searchTerm)}>Find Gifs</button>
            </div>
        )
    }
}

export default GifSearch;