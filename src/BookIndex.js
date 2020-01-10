import React from 'react';
import './App.css'
import { render } from '@testing-library/react';
import Book from './Book'

export default function BookIndex(props) {

   const {books}= props

   const listTheBooks= () => {
       return books.map(the_book => {
           return <Book book={the_book} mediaExpand={props.mediaExpand}/>
       })
   }

return(
    <div>
        <h2 id="book-list-heading">Books</h2>
{listTheBooks()}
</div>
)
}