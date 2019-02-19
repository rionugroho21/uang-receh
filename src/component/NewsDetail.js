import React, {Component} from 'react';
import axios from 'axios';

export default class Detail extends Component {
    render() {
        const {match, datas} = this.props;
        const id = Number(match.params.id);
        const post = datas.find((post) => post.id === id);
        if (this.props.loading === true) {
            return <div className="loader"> ...loading </div>
        }else if (post){
            return <div className="content">
                    <div className="detail">
                        <h2 className="detail__title">{post.title}</h2>
                        <span className="detail__author">Author : {post.userId}</span>
                        <p className="detail__content">{post.body}</p>
                    </div>
                </div>
        } else {
            return <h1> ...No Post Found </h1>
        }
    }
}