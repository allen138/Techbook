import React from "react";
import moment from "moment";

const Comment = props => {
    const { name, image, comment, createdAt, id } = props.details
    return (
      <div className="comments">
      <div className="author">  
      <img src={ image } alt={ name } style={{width: 25, height:25, borderRadius: 5}}/>
        <span className="author-name">{ name }</span><span>{moment(createdAt).format('llll')}</span>
      </div>
    
        <p className="comment">{ comment }<button className="remove-comment" onClick={() => props.deleteComment(id)}>&times;</button></p>
      </div>
    );
  }

export default Comment;
