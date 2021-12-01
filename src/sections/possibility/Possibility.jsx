import React from 'react';
import posImg from "../../assets/possibility.png";
import './possibility.css';



const Possibility = () => {
    return (
        <div className="possibility container-pd container-mg" id="possibility">
            <div className="possibility__image">
                <img src={posImg} alt="possibility"></img>
            </div>
            <div className="possibility__content">
                <a href="#">Request Early Access to Get Started</a>
                <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <a href="#">Request Early Access to Get Started</a>
            </div>
        </div>
    )
}

export default Possibility
