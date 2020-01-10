import React from 'react';


export default class ExpandMediaTitle extends React.Component{






    render(){
        return(
            <div>
                <img className="image-in-center-container" onClick={this.props.emptySelectedMedia}src={this.props.selectedMedia.url} alt={this.props.selectedMedia.title}/>
            </div>
        )
    }
}