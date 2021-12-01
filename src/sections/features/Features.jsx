import React from 'react';
import Feature from "../../components/feature/Feature";
import './features.css';


const Features = () => {
    return (
        <div className="features container-pd" id="features">
            <div className="features__heading">
                <h2 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                <a href="#">Request Early Access to Get Started</a>
            </div>
            <div className="features__content">
                <Feature cn={'flex2'} title={'Improving end distrusts instantly'} text={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'}/>
                <Feature cn={'flex2'} title={'Become the tended active'} text={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'}/>
                <Feature cn={'flex2'} title={'Message or am nothing'} text={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'}/>
                <Feature cn={'flex2'} title={'Really boy law county'} text={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'}/>
            </div>
        </div>
    )
}

export default Features
