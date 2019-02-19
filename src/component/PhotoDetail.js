import React, {Component} from 'react';
import axios from 'axios';

export default class Detail extends Component {
    state = {
        title: "",
        image: "",
        author: ""
    }

    componentDidMount(){
        const {match} = this.props;
        const id = Number(match.params.id);
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => {
            const photo = res.data;
            this.setState({
                title: photo.title,
                image: photo.url,
                author: photo.id
            })
        });
    }

    render() {
        return <div className="content">
                <div className="photoDetail">
                    <img src={this.state.image} className="photoDetail__img" alt=""/>
                    <p className="photoDetail__content">{this.state.title}</p>
                    <span className="photoDetail__author">Author : {this.state.author}</span>
                </div>
            </div>
    }
}