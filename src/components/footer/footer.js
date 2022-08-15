import React from "react";
import { Link } from "react-router-dom";
import logo from '../../resources/icons/logo_black.svg';
import coffee from '../../resources/icons/coffe_black.svg';


const Footer = () => {
    return (
        <footer>
            <div className="navigation navigation-center">
                <Link to='/'><div className="navigation__logo navigation__logo-center"><img src={logo} alt="logo"/></div></Link>
                <Link to='/catalog' className="navigation__link navigation__link-black">Our coffee</Link>
                <a href="#" className="navigation__link navigation__link-black">For your pleasure</a>
            </div>
            <div className="divider divider-black">
                <div className="divider__line divider__line-black"></div>
                <div><img src={coffee} alt="Coffe"/></div>
                <div className="divider__line divider__line-black"></div>
            </div>
        </footer>   
    )
};


export default Footer;