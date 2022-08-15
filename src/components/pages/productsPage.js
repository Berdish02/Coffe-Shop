import React from "react";
import Header from "../header/header";
import Description from "../productsDesrciption/description";
import Catalog from "../productsTabs/productsTabs";
import Footer from '../footer/footer';
import Registration from "../forms/registration";
import Login from "../forms/signIn";
import BasketModal from "../forms/basketModal";
import { firebaseContext, api } from "../service/context";

const Product = ({modalVision}) => {
    const {Provider} = firebaseContext;
    const {setLoginVision,
        setRegistrVison,
        loginVision,
        registrVision,
        basketVision,
        setBasketVision,
        basketData, 
        setBasketData} = modalVision;
    return(
        <>
            <Provider value={api}>
                <Header vision={{setRegistrVison, setLoginVision, setBasketVision}}/>
                {(registrVision) ? <Registration nonVision={setRegistrVison}/> : null}
                {(loginVision) ? <Login nonVision={setLoginVision}/> : null}
                {(basketVision) ? <BasketModal props={{setBasketVision, basketData, setBasketData}}/> : null}
                <Description/>
                <Catalog/>
            </Provider>
                <Footer/>
        </>
    )
}

export default Product;