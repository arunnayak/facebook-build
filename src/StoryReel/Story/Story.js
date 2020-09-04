import React from 'react'
import './story.css';
import { Avatar } from '@material-ui/core';

function Story({image, profileSrc, title}) {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4 className="story__title">{title}</h4>
        </div>
    )
}

export default Story
