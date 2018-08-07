
import React, { Component } from 'react';
class GifList extends Component {
    

    mapGifs = ()=> {
        return this.props.gifList.map(gif=>{
            return (<li key={gif.id}>
                <img src={gif.images.original.url}/>
            </li>)
        })
    }
    
    render() { 
        return (<ul>
            {this.mapGifs()}
        </ul>  );
    }
}
 
export default GifList;