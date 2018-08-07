import React from 'react';

export default class GifList extends React.Component {

    // renderGifs = () => {
    //     return this.props.gifs.map(gif => {
    //         return gif.title
    //     })
    // }
    render() {
        return(
            <div>
                <ul>List of Gifs</ul>
                {this.props.gifs.map(gif => {return <li key={gif.id}><img src={gif.images.preview_gif.url} alt={gif.title}/></li>})}
            </div>
        )
        
    }
}