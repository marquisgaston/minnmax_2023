import React from "react";

const videoTile = (props) => {

    return (
        <div className="video-tile" key={props.key}>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
        </div>
    )
};

export default videoTile;