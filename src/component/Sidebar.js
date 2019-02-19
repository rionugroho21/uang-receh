import React from 'react';
import SideComment from './SideComment';
import PropTypes from 'prop-types';

function Sidebar(props) {
    return <div className="sidebar">
        {props.comment
        .map((comm, index) => <SideComment key={index} comm={comm} {...props} index={index}/>)}
    </div>
}

Sidebar.propTypes = {
    comment: PropTypes.array.isRequired,
}

export default Sidebar;