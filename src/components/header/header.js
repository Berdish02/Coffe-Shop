import React, { useEffect } from "react";
import { useLocation, NavLink} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useContext, useState } from "react";
import { firebaseContext } from "../service/context";
import Basket from '../basket/basket';
import {Container, Row, Col} from 'react-bootstrap';
import logo from "../../resources/icons/Logo.svg";
import userIcon from '../../resources/icons/userIcon.png';




const Header = ({vision}) => {
    const [logoutVision, setLogoutVision] = useState(false)
    const {useAuthState, auth, signOut} = useContext(firebaseContext);
    const {setLoginVision, setRegistrVison, setBasketVision, basketData} = vision;
    const [user] = useAuthState(auth);
    const location = useLocation();
    const activeLink = {
        transform: 'scale(1.3)'
    }

    const logout = () => {
        signOut(auth)
        .then(console.log)
        .catch(console.error)
    }

    useEffect(() => {
        setLogoutVision(false)
    }, [user])

    return (
    <header className={(location.pathname === '/') ? 'header' : 'header header-products'}>
        <Container>
            <Row>
                <Col md={4}>
                    <div className="navigation">
                        <NavLink to='/'>
                        <div className="navigation__logo"><img src={logo} alt="logo"/></div>
                        </NavLink>
                        <NavLink 
                        to='/catalog'
                        className="navigation__link"
                        style={({isActive}) => isActive ? activeLink : null}
                        >Our coffee</NavLink>
                        <a href="#" className="navigation__link">For your pleasure</a>
                    </div>
                </Col>
                <Col md={{offset:5, span:2}}>
                    <div className="account__wrapper">
                        <div className="account" style={(user == null) ? {display: 'block'} : null}>
                            {(user !== null) ? <img onClick={() => setLogoutVision(!logoutVision)} src={userIcon}/> : authPanel(setRegistrVison, setLoginVision)}
                            <CSSTransition
                            in={logoutVision}
                            timeout={300}
                            unmountOnExit
                            classNames='logOut'>
                                <button className='button button-logout' onClick={logout}>Log out</button>
                            </CSSTransition>
                        </div>
                        {(location.pathname !== '/' && user !==null) ? <Basket nonVision={{setBasketVision, basketData}}/> : null}
                    </div>
                </Col>
            </Row>
            
            {(location.pathname !== '/') ? <h2>Our Coffee</h2> : null}
        </Container>

    </header>
    );
}

const authPanel = (registr, login, logout) => {
    return (
        <>
        <button onClick={() => login(true)} className="button button-invisible">Sign in</button>
        <button onClick={() => registr(true)} className="button button-registration">Sign up</button>
        </>
    )
}

export default Header