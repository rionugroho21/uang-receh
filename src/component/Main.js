import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import NewsDetail from './NewsDetail';
import PhotoDetail from './PhotoDetail';

import {Route} from 'react-router-dom';

class Main extends Component {
    state = { loading: true }

    componentDidMount() {
        this.props.startLoadNewsList().then(() => {
            this.setState({loading: false});
        });
        this.props.startLoadingComment();
    }
  
    render() {
        return (
        <div>
            <Header/>
            <div className="wrap">
                <Route exact path="/" render={() => ( 
                    <Content {...this.props}/> 
                )}/>
                <Route path="/Detail/:id" render={(params) => ( 
                    <NewsDetail loading={this.state.loading} {...this.props} {...params}/> 
                )}/>
                <Route path="/Photo/:id" render={(params) => ( 
                    <PhotoDetail {...params}/> 
                )}/>
                <Sidebar {...this.props}/>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Main;