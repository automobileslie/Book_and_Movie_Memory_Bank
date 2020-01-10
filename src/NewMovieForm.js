import React from 'react';

export default class NewMovieForm extends React.Component{

    state={
        title: "",
        author: "",
        url: ""
    }
    
    newMovie= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    
    }
    
    newMovieSubmit= (event) => {
        event.preventDefault();
        this.props.newMovieFormSubmit({
            title: this.state.title,
            url: this.state.url,
            director: this.state.director,
        })
        this.setState({
            title: "",
            url: "",
            director: ""
        })
    }
    
    
        render(){
            return(
                <div>
                    <h2>Enter a new movie</h2>
                    <form onSubmit={this.newMovieSubmit}>
                        <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.newMovie}></input>
                        <input type="text" name="url" value={this.state.url} placeholder="url" onChange={this.newMovie}></input>
                        <input type="text" name="director" value={this.state.director} placeholder="director" onChange={this.newMovie}></input>
                        <input type="submit" value="submit"/>
    
                    </form>
                    
                </div>
            )
        }
    }