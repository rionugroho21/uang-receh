import React from 'react';
import PropTypes from 'prop-types';
import NewsList from './NewsList';
import PhotoSide from './PhotoSide';

function Content(props) {
    return <div className="content">
            <div className="news">
                {props.datas
                .map((post, index) => <NewsList key={index} post={post} {...props} index={index}/>)}
            </div>
            <div className="photo">
                <PhotoSide/>
            </div>
        </div>
}

Content.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default Content;