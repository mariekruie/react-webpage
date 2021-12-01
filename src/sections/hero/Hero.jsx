import React from 'react';
import './hero.css';
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";


const Hero = () => {
    return (
        <div className="hero container-pd" id="home">
            <div className="hero__content">
                <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="hero__input">
                    <input type="email" placeholder="Your email address"/>
                    <button type="button" class="button">Get started</button>
                </div>
                <div className="hero__people">
                    <img src={people} alt="people"/>
                    <span>1,600 people requested access a visit in last 24 hours</span>
                </div>
            </div>
            <div className="hero__image">
                <img src={ai} alt="ai"/>
            </div>
        </div>
    )
}

export default Hero;
