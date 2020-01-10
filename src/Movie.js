import React from 'react';

export default class Movie extends React.Component{

movieTitleList= () => {
    return <div>
        <p className="movie-title-list" onClick={() => {this.props.mediaExpand(this.props.movie)}}>{this.props.movie.title}</p>
    </div>
}




render(){
    
    return(
        <span>
            {this.movieTitleList()}
        </span>

    )
}    

}