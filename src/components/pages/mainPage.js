import React from "react";
import Promo from '../promo/promo';
import Header from '../header/header';
import About from '../about/about';
import Best from '../best/best';
import Footer from '../footer/footer';
import Registration from "../forms/registration";
import Login from "../forms/signIn";
import { firebaseContext, api } from "../service/context";
import BasketModal from "../forms/basketModal";

const Main = ({modalVision}) => {
    const {Provider} = firebaseContext;
    const {setLoginVision, setRegistrVison, loginVision, registrVision,basketVision, setBasketVision} = modalVision;    
    return (
        <>
            <Provider value={api}>
                <Header vision={{setRegistrVison, setLoginVision}}/>
                {(registrVision) ? <Registration nonVision={setRegistrVison}/> : null}
                {(loginVision) ? <Login nonVision={setLoginVision}/> : null}
                {(basketVision) ? <BasketModal nonVision={setBasketVision}/> : null}
            </Provider>
                <Promo/>
                <About/>
                <Best/>
                <Footer/>
           
        </>
    )
}

export default Main;