import React from 'react';

export default class NewBookForm extends React.Component{

state={
    title: "",
    author: "",
    url: ""
}

newBook= (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })

}

newBookSubmit= (event) => {
    event.preventDefault();
    this.props.newBookFormSubmit({
        title: this.state.title,
        url: this.state.url,
        author: this.state.author,
    })
    this.setState({
        title: "",
        author: "",
        url: ""
    })
}


    render(){
        return(
            <div>
                <h2>Enter a new book</h2>
                <form onSubmit={this.newBookSubmit}>
                    <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.newBook}></input>
                    <input type="text" name="url" value={this.state.url} placeholder="url" onChange={this.newBook}></input>
                    <input type="text" name="author" value={this.state.author} placeholder="author" onChange={this.newBook}></input>
                    <input type="submit" value="submit"/>

                </form>
                
            </div>
        )
    }
}