import React from 'react';



export default class Book extends React.Component{

bookTitleList= () => {
    
return <p className="book-title-list" onClick={() => {this.props.mediaExpand(this.props.book)}}>{this.props.book.title}</p>  

}  


render(){
    return(
            <div>
            {this.bookTitleList()}
            </div>
    )
}    
}