import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <div className="cta container-mg">
            <div className="cta__content">
                <a href="#">Request Early Access to Get Started</a>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <div className="cta__btn">
                <button type="button" className="button">Get Started</button>       
            </div>
        </div>
    )
}

export default CTA;
