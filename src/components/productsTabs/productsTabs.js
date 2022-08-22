import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import dataBaseRequests from '../service/requests';
import Spiner from '../spiner/spiner';
import { Container, Row, Col } from 'react-bootstrap';

const Catalog = () => {
    const [cardsInfo, setCardsInfo] = useState([]),
          [currentInfo, setCurrentInfo] = useState([]),
          [visibleCards, setVisibleCards] = useState(false),
          [offset, setOffset] = useState(0),
          [buttonVision, setButtonVision] = useState(false),
          [inputValue, setInputValue] = useState(''),
          [loading, setLoading] = useState(false),
          [activeTab, setActiveTab] = useState(0);

    const {getAllProducts, getProductsByCountry} = dataBaseRequests();

    useEffect(() => {
        onGetHeroes();
    }, []);
    
    useEffect(() => {
            setVisibleCards(cardsInfo.map((item) => tabCreator(item.src, item.name, item.country, item.price, item.id)));
    },[cardsInfo, currentInfo]);

    const onGetHeroes = () => {
        setLoading(true);
        getAllProducts(offset)
        .then(prom => {
            setLoading(false);
            setOffset(offset + 6);
            if(prom.length === 6) {
                setButtonVision(true);
            } else {
                setButtonVision(false);
            }
            setCardsInfo([...cardsInfo, ...prom]);
            setCurrentInfo([...cardsInfo, ...prom]);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const onGetTabAll = () => {
        getAllProducts(0)
        .then(prom => {
            setOffset(6);
            setButtonVision(true);
            setCardsInfo(prom);
            setCurrentInfo(prom);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const onGetTab = (country, active) => {
        setActiveTab(active);
        setOffset(0);
        setInputValue('')
        getProductsByCountry(country)
        .then(prom => {
            if(prom.length === 6) {
                setButtonVision(true);
            } else {
                setButtonVision(false);
            }
            setCardsInfo(prom);
            setCurrentInfo(prom);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    const onChangeInput = (e) => {
        const target = e.target.value;
        setInputValue(target);
        const arr = currentInfo.filter(item  => item.name.indexOf(target) > -1);
        console.log(arr);
        setCardsInfo(arr);
    };

    return(
        <div className='catalog'>
        <Container>
            <Row>
                <Col md={{span:4, offset:2}}>
                    <div className='catalog__search'>
                        <div>Looking for</div>
                        <input type="text" onChange={onChangeInput} value={inputValue}  placeholder='start typing here...' />
                    </div>
                </Col>
                <Col md={5}>
                    <div className='catalog__tabs'>
                        <div className='catalog__tabs__subtitle'>Or filter</div>
                        <div className='catalog__buttons'>
                            <button onClick={() => onGetTab('Brasil', 1)} className={(activeTab !== 1) ? "button button-tabs" : 'button button-tabs button-active'}>Brasil</button>
                            <button onClick={() => onGetTab('Ethiopia', 2)} className={(activeTab !== 2) ? "button button-tabs" : 'button button-tabs button-active'}>Ethiopia</button>
                            <button onClick={() => onGetTab('Columbia', 3)} className={(activeTab !== 3) ? "button button-tabs" : 'button button-tabs button-active'}>Columbia</button>
                            <button onClick={() => {
                                 setOffset(0);
                                 setActiveTab(4);
                                 onGetTabAll();
                            }} className={(activeTab !== 4) ? "button button-tabs" : 'button button-tabs button-active'}>All</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:10, offset:1}}>
                    <div className='charBox'>
                        {(visibleCards) ? visibleCards  : <Spiner/> }
                        
                    </div>
                        {(loading) ?  <div className='char__spiner'><Spiner/></div> : null}
                </Col>
            </Row>
          {(buttonVision) ?  <button 
                            onClick={() => onGetHeroes()} 
                            className={(loading) ?'button button-nonDisplay' : 'button button-load'}
                            >Load more</button> : null}
        </Container>
        </div>
    )
}

const tabCreator = (src, name, country, price, id) => {
    return(
       
        <div key={id} className='productItem'>
            <Link to={`/catalog/${id}`} style={{textDecoration: 'none'}}>
                <div className='productItem__imgWrapper'><img src={src} alt="card"/></div>
                <div className='productItem__name'>{name}</div>
                <div className='productItem__country'>Country: {country}</div>
                <div className='productItem__price'>{price}$</div>
            </Link>
        </div>

    )
}
export default Catalog;