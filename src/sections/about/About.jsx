import React from 'react';
import Feature from "../../components/feature/Feature";
import './about.css';


const About = () => {
    return (
        <div className="about gradient__bg--light container-pd container-mg" id="about">
            <Feature cn={'flex'} title={'What is GPT-3'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
            <div className="about__quote">
                <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
                <a href="#">Explore The Library</a>
            </div>
            <div className="about__content">
                <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'}/>
                <Feature title={'Knowledgebase'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'}/>
                <Feature title={'Education'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'}/>
            </div>
            
        </div>
    )
}

export default About;

