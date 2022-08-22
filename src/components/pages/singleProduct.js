import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Registration from "../forms/registration";
import Login from "../forms/signIn";
import BasketModal from "../forms/basketModal";
import SingleCoffe from "../singleCoffe/singleCoffe";
import { firebaseContext, api } from "../service/context";

const SinglePage = ({modalVision}) => {
    const {Provider} = firebaseContext;
    const {setLoginVision,
          setRegistrVison,
          loginVision,
          registrVision,
          basketVision,
          setBasketVision,
          basketData,
          setBasketData} = modalVision;
    return (
        <>
            <Provider value={api}>
                <Header vision={{setRegistrVison, setLoginVision, setBasketVision, basketData}}/>
                    {(registrVision) ? <Registration nonVision={setRegistrVison}/> : null}
                    {(loginVision) ? <Login nonVision={setLoginVision}/> : null}
                    <BasketModal props={{setBasketVision,basketVision, basketData, setBasketData}}/>
                <SingleCoffe props={{setBasketData, basketData}}/>
            </Provider>
            <Footer/>
        </>
    )
}

export default SinglePage;