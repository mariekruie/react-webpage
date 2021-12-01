import React from 'react';
import { Blog, Features, Hero, Footer, Possibility, About} from './sections';
import { CTA, Navbar, Brand} from './components';

import './app.css';

const App = () => {
    return (
        <div>
            <div className="gradient__bg">
                <Navbar/>
                <Hero/>
            </div>

            <Brand/>
            <About/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
};

export default App;
