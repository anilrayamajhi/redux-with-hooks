import React from "react";
import {Link} from 'react-router-dom'

function Choice({ title, filename, nextRoute, clickHandler }) {
    return (
        <Link to={nextRoute} className="choice-container" onClick={clickHandler}>
            <div className="choice-img">
                <div className="choice-text">{filename}</div>
            </div>
            <div className="choice-title">
                {title}
            </div>
        </Link>
    );
}

export default Choice;
