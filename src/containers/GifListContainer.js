import React, {Component} from "react"
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
constructor(props) {
    super(props)
    this.state ={
        firstThreeGifs: []
    }
}

// componentDidMount() {
//     fetch(`http://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC&rating=g`)
//     .then(response => response.json())
//     .then(gifArray => 
//         this.setState({
//             firstThreeGifs: gifArray.data.slice(0,3)
//         })
//     )
// }


submitHandler = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(gifArray => 
        this.setState({
            firstThreeGifs: gifArray.data.slice(0,3)
        })
    )
}


render() {
    console.log(this.state.firstThreeGifs)
    return(
        <div>
            <GifSearch submitHandler={this.submitHandler} />
            <GifList firstThreeGifs={this.state.firstThreeGifs}/>
        </div>
    )
}
}

export default GifListContainer;