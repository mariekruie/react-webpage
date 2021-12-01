import React from 'react';
import './feature.css';

const Feature = ({title, text, cn}) => {
    return (
            <div className={cn}>
                <div className="feature__title">
                {title}
                </div>
                <p className="feature__text">
                {text}
                </p>
            </div>
        
    )
}

export default Feature


