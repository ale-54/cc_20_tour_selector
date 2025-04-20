import React, {useState} from "react";

const TourCard = ({id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false); //state to show more info about the tour

    return (
        <div className ="tour-card">
        <h3>{name}</h3>
        <h5>${price}</h5>
        <img src={image} alt={name} />
        <p>
            {/* shows full description if readMore is true, otherwise shows first 100 characters */}
            {readMore ? info : `${info.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {/* toggles readMore state */}
                {readMore ? "Show Less" : "Read More"}</button></p>
        {/* button to remove the tour from the list */}
        <button className="remove-btn" onClick={() => onRemove(id)}>Not Interested</button>
        </div>
    )
}

export default TourCard;