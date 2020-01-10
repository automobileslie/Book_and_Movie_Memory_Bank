import React from 'react';
import './App.css';
import BookIndex from './BookIndex';
import MovieIndex from './MovieIndex';
import NewBookForm from './NewBookForm';
import ExpandMediaTitle from './ExpandMediaTitle';
import NewMovieForm from './NewMovieForm';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults'


export default class App extends React.Component{

  state={
    books: [],
    movies: [],
    selectedMedia: [],
    search: []
    
  }

  componentDidMount= () => {

    fetch("http://localhost:3000/books")
    .then(r => r.json())
    .then(booksArray => {
      this.setState({
        books: booksArray
      })
    })

    fetch("http://localhost:3000/movies")
    .then(r => r.json())
    .then(moviesArray => {
      this.setState({
        movies: moviesArray
      })
    })

  }

  mediaExpand= (media) => {
    if (this.state.selectedMedia !== media) { 
    this.setState({
      selectedMedia: media
    })
  }

  else {
    this.setState({
      selectedMedia: this.state.selectedMedia
    })
  }

  }

  emptySelectedMedia= () => {
    this.setState({
      selectedMedia: []
    })
  }

  newBookFormSubmit= (book) => {
    console.log(book)

    const bookTitle= book.title
    const bookUrl= book.url
    const bookAuthor= book.author

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: bookTitle,
        url: bookUrl,
        author: bookAuthor,
      })
      
    })
    .then(r => r.json())
    .then((newBook) => {
      this.setState({
        books: [...this.state.books, newBook]
      })
    })
    
  }

  newMovieFormSubmit= (movie) => {

    const movieTitle= movie.title
    const movieUrl= movie.url
    const movieDirector= movie.director

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: movieTitle,
        url: movieUrl,
        director: movieDirector,
      })
      
    })
    .then(r => r.json())
    .then((newMovie) => {
      this.setState({
        movies: [...this.state.movies, newMovie]
      })
    })
    
  }

  movieDelete= () => {
      
    fetch(`http://localhost:3000/movies/${this.state.selectedMedia.id}`, {
     method: "DELETE"
    })
    .then(r => r.json())
    .then((newMovieArray) => {
      this.setState({
      movies: newMovieArray,
      selectedMedia: []
      })
    })
  }

  bookDelete= () => {
      
    fetch(`http://localhost:3000/books/${this.state.selectedMedia.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then((newBookArray) => {
    this.setState({
    books: newBookArray,
    selectedMedia: []
    })
  })
  }

  deleteButton=() => {

    if (this.state.movies.includes(this.state.selectedMedia)) {
      this.movieDelete()
        }

    else {
      this.bookDelete()
    }
  }

  doASearch= (the_search_term) => {

    const filteredMovies= this.state.movies.filter(movie=> {
      const lowerCaseMovieTitles= movie.title.toLowerCase()
      const movieTitles= lowerCaseMovieTitles.includes(the_search_term.toLowerCase());
       const lowerCaseMovieDirectors= movie.director.toLowerCase()
       const movieDirectors=lowerCaseMovieDirectors.includes(the_search_term.toLowerCase());
      return movieTitles + movieDirectors
    })

    const filteredBooks= this.state.books.filter(book=> {
      const lowerCaseTitles= book.title.toLowerCase()
      const bookTitles= lowerCaseTitles.includes(the_search_term.toLowerCase());
       const lowerCaseAuthors= book.author.toLowerCase()
       const bookAuthors= lowerCaseAuthors.includes(the_search_term.toLowerCase());
      return bookTitles + bookAuthors
    })
  
    const filteredSearchArray= [...filteredMovies, ...filteredBooks]

    this.setState({
          search: filteredSearchArray
      })
}

clearSearch= () => {
  this.setState({
    search: []
  })
}

render(){
  return(
    <div>

      <h1 id="top-of-page-heading">Book and Movie Memory Bank</h1>

        <div id="list-container">

          <div id="book-container">
          <BookIndex books={this.state.books} mediaExpand={this.mediaExpand}/>
          </div>

          <div id="center-container">
          <ExpandMediaTitle selectedMedia={this.state.selectedMedia} emptySelectedMedia={this.emptySelectedMedia} bookDeleteOnClick={this.bookDeleteOnClick}/> 
          </div>

          <div id="movie-container">
          <MovieIndex movies={this.state.movies} mediaExpand={this.mediaExpand}/>
          </div>

        </div>

        <div className="selected-media-information-container">
          <div className="selected-media-one"></div>

          <div className="selected-media-two"> 
            <h2 id="selected-media-title">{this.state.selectedMedia.title}</h2>
          </div>
          <div className="selected-media-three"></div>
        </div>

        <div className="selected-media-information-container">
          <div className="selected-media-one"></div>
          <div className="selected-media-two"> 
          <p>{ this.state.selectedMedia.author ? <h4 id="selected-media-author">{this.state.selectedMedia.author}</h4> : <h4 id="selected-media-director">{this.state.selectedMedia.director}</h4> }</p>
          </div>
          <div className="selected-media-three"></div>
        </div>

        <div className="selected-media-information-container">
          <div className="selected-media-one"></div>

          <div className="selected-media-two"> 
          {this.state.selectedMedia.id ? <p id="delete-button" onClick={this.deleteButton}>Delete the selected book or movie</p> : <div></div> }
          </div>

          <div className="selected-media-three"></div>
        </div>
      <SearchBar doASearch={this.doASearch} clearSearch={this.clearSearch}/>
      <SearchResults search={this.state.search}/>
      <NewBookForm newBookFormSubmit={this.newBookFormSubmit}/>
      <NewMovieForm newMovieFormSubmit={this.newMovieFormSubmit}/>

    </div>
    
  )
}

}
