import React from 'react';

function SideComment(props){
    const comm = props.comm;
    return <div key={comm.id} className="comment">
            <h5 className="comment__title">{comm.name}</h5>
            <span className="comment__email">Author : {comm.email}</span>
            <p className="comment__content">{comm.body}</p>
        </div>
}

export default SideComment;