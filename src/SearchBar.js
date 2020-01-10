import React from 'react';

export default class SearchBar extends React.Component{


    state={
        search: ""
    }

    searchText= (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    submitSearch= (event) => {
        event.preventDefault();
        this.props.doASearch(
        this.state.search)

        this.setState({
            search: ""
        })
    }

    render(){
        return(
            <div>
                <h2 onClick={this.props.clearSearch}>Search</h2>
                    <form onSubmit={this.submitSearch}>
                        <input type="text" name="search" value={this.state.search} placeholder="search" onChange={this.searchText}></input>
                        <input type="submit" value="submit"/>
                    </form>
            </div>
        )
    }
}