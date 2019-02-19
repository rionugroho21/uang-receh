import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PhotoSide extends Component {
    state = {
        listPhoto: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            const photo = res.data;
            let listArray = [];
            for (var i = 0; i < 5; i++) {
                listArray.push(photo[i]);
            }
            this.setState({
                listPhoto: listArray
            })
        });
    }

    render () {
        const listContent = this.state.listPhoto.map(list => (
            <div key={list.id} className="photoList">
                <Link to={`/Photo/${list.id}`}><img src={list.url} alt=""/></Link>
                <div className="photoBox">
                    <Link to={`/Photo/${list.id}`}><h3 className="photoList__title">{list.title}</h3></Link>
                    <span className="photoList__author">Author : {list.albumId}</span>
                </div>
            </div>
        ))
        return (
            <div>
                {listContent}
            </div>
        )
    }
}