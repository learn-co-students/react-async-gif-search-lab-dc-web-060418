import React from 'react'


export default class GifSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchText: '',
        }
    }
    
render(){
    return(
        <form onSubmit={this.submitHandler}>
            Search Gif: <input onChange={this.searchHandler} value={this.state.searchText}/>
            <input type="submit"/>
        </form>
    )
}

searchHandler= (event) => {
    console.log(event.target)
    this.setState({
        searchText: event.target.value
    })
}

submitHandler= (event) =>{
    event.preventDefault();
    this.props.searchTerm(this.state.searchText)
 
}

}