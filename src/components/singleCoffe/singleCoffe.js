import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import dataBaseRequests from '../service/requests';
import Spiner from "../spiner/spiner";
import coffeBlack from '../../resources/icons/coffe_black.svg' 
import { Container, Row, Col } from "react-bootstrap";


const SingleCoffe = ({props}) => {
    const [data, setData] = useState([]),
          [loading, setLoading] = useState(false),
          [vision, setVision] = useState([]);
    const {getProductById} = dataBaseRequests();
    const {productId} = useParams();
    const {setBasketData, basketData} = props;
    
    useEffect(() => {
        window.scrollTo(0, 100)
    },[]);

    useEffect(() => {
        onGetProduct();
    }, [productId])

    const onSetBasketData = (data) => {
        const arr = {name: data.name, price:data.price, src: data.src, id: data.id}
        setBasketData([...basketData, arr])
    }

    const onGetProduct = async() => {
        setLoading(true);
        await getProductById(productId)
        .then(prom => {
            setData([...prom]);
            setLoading(false);
            setVision(descriptionCreator(prom[0], coffeBlack, onSetBasketData))  
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <Container>
            <div className="single">
                <Row>
                    {(loading) ? <Spiner/> : vision}
                </Row> 
            </div>
        </Container>
    )

}

const descriptionCreator = (obj, img, click) => {
    const {src, country, price} = obj;
    return (
        <>
            <Col md={{offset:2, span:4}}>
                <div className="single__img">
                    <img src={src} alt="coffe"></img>
                </div>
            </Col>
            <Col md={5}>
                <div className="single__text">
                    <h2>About it</h2>
                    <div className="divider divider-black divider-black-mb26">
                        <div className="divider__line divider__line-black"></div>
                        <div><img src={img} alt="Coffe"/></div>
                        <div className="divider__line divider__line-black"></div>
                    </div>
                    <div className="single__country"><span>Country:</span>{country}</div>
                    <div className="single__descr"><span>Description:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat nemo quaerat itaque voluptatum maxime, asperiores ut ipsa unde debitis consequatur, expedita doloribus aliquam nobis! Eligendi asperiores accusantium sed provident.</div>
                    <div className="single__price"><span>Price:</span><span id="price">  {price}$</span></div>
                    <button onClick={() => click(obj)} className="button button-single">Buy</button>
                </div>
            </Col>
        </>
    )
}

export default SingleCoffe;