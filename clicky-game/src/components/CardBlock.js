import React from "react";
import ImageCard from "./ImageCard";

const CardBlock = props => {
    return (
        <div className="container cards-container has-shadow">
            <div className="columns is-multiline">
                    {props.characters.map((character, index) => (
                        <ImageCard key={index} id={character.id} name={character.name} src={character.src} imageClick={props.imageClick}/>
                    ))}
            </div>
        </div>
    )
}

export default CardBlock;