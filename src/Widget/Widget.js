import React from 'react'
import './widget.css';

function Widget() {
    return (
        <div className="widget">
            <iframe src="https://jockeys-27d21.web.app"
            width="300"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            allowTransparency="true"
            />
        </div>
    )
}

export default Widget
