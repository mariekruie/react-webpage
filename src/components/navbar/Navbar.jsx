import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = ()  => {
    return(
        <>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#featues">Case studies</a></p>
        <p><a href="#footer">Library</a></p>
        </>
    )
};

const Navbar = () => {

    const [ toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar__links">
                    <Menu/>
                </div>
            </div>

            <div className="navbar__sign">
                <p>Sign in</p>
                <button type="button" class="button">Sign up</button>
            </div>

            <div className="navbar__menu">
                { toggleMenu 
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                { toggleMenu &&(
                    <div className="navbar__menu-content scale-up-center">
                        <div className="navbar__menu-links">
                            <Menu/>
                            <div className="navbar__menu-sign">
                                <p>Sign in</p>
                                <button type="button" class="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
