import React from "react";
import {BsFillBasket3Fill} from 'react-icons/bs';

const Basket = ({nonVision}) => {
    const {setBasketVision} = nonVision; 
    const onClickBasket = () => {
       setBasketVision(true);
    }
    
    return (
        <>
            <div onClick={onClickBasket} className="basket"><BsFillBasket3Fill/></div>
        </>
    )
}

// const listCreator = () => {
//     return (
        
//     )
// }

export default Basket;