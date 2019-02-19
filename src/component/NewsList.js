import React from 'react';
import {Link} from 'react-router-dom';

function Newslist(props){
    const post = props.post;
    return <div key={post.id} className="newsList">
            <Link to={`/Detail/${post.id}`}><h3 className="newsList__title">{post.title}</h3></Link>
            <span className="newsList__author">Author : {post.userId}</span>
            <p className="newsList__news">{post.body}</p>
        </div>
}

export default Newslist;