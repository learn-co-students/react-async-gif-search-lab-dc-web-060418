import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state ={
            gifTopThreeList: [],
            searchTerm: 'cat'
        }
    }

    render(){
        return(
            <div>GifListContainer
                <GifSearch searchTerm={this.setSearchTerm}/>
                <GifList gifs={this.state.gifTopThreeList}/>
            </div>
        )
    }

    setSearchTerm = (newSearchTerm)=>{
        this.setState({
            searchTerm: newSearchTerm
        })
    }

    componentDidMount(){
        this.getGifs()
    }

    componentDidUpdate(){
        this.getGifs()
    }

    getGifs= ()=>{
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifs => {this.setState({ gifTopThreeList: gifs.data.slice(0,3)})})
    }

}