import React from 'react';
import './App.css'
import { render } from '@testing-library/react';
import Movie from './Movie';

export default function MovieIndex(props) {
    const listTheMovies= () => {
        return props.movies.map(the_movie => {
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