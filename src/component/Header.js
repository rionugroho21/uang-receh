import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return <div className="header">
                <div className="header-content">
                    <Link to="/"><h1 className="pageTitle">Today's News Headlines</h1></Link>
                </div>
            </div>
    }
}