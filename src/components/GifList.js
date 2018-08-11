import React, {Component} from "react"

class GifList extends Component {



    render() {
        console.log(this.props)
        const list = this.props.firstThreeGifs.map(gif => <li key={gif.id}> <img src={gif.images.original.url} alt="gif"/> </li>)
        
        return(
            <ul>
                {list}
            </ul>


        )
    }
}

export default GifList;