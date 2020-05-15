import React from 'react';
import './App.css'
import Movie from './Movie';

export default function MovieIndex(props) {
    const listTheMovies= () => {

        let theMoviesAlphabetized= props.movies.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
        return theMoviesAlphabetized.map(the_movie => {
            return <Movie movie={the_movie} mediaExpand={props.mediaExpand}/>
        })
    }

return(
<div>
<h2 id="movie-list-heading">Movies</h2>
{listTheMovies()}

</div>

)
}