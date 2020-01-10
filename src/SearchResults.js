import React from 'react';

export default function SearchResults(props){
    const displaySearchResults= () => {
        return props.search.map(result=> {
            return <ul>
                    <li>{result.title}</li>
                    {result.author ? <p>author: {result.author}</p> : <p>director: {result.director}</p>}
                    </ul>
        })
    }
        return(
            <div>
            {displaySearchResults()}
            </div>
        )
 }
