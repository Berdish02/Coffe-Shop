import React from "react";
import {BsFillBasket3Fill} from 'react-icons/bs';

const Basket = ({nonVision}) => {
    const {setBasketVision, basketData} = nonVision; 
    const onClickBasket = () => {
       setBasketVision(true);
    }
    
    return (
        <>
            <div onClick={onClickBasket} className="basket"><BsFillBasket3Fill/>{(basketData.length !== 0) ? <div className="basket__counter">{basketData.length}</div> : null}</div>
        </>
    )
}

// const listCreator = () => {
//     return (
        
//     )
// }

export default Basket;