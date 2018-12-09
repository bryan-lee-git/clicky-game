import React from "react";

const ImageCard = props => {
    return (
        <div className="card column is-one-fifth has-shadow" onClick={() => props.imageClick(props.id)}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.src} alt={props.name}></img>
                </figure>
            </div>
        </div>
    )
}

export default ImageCard;