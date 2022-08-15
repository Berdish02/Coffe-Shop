import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import bestTwo from '../../resources/images/best2.png';
import bestThree from '../../resources/images/best3.jpg';

const Best = () => {
    return (
    <section className="best">
        <Container>
        <h2 className="best__title">Our best</h2>
            <Row className="justify-content-md-center">
                <Col md={2} className="card">
                    <div className="card__img"><img src="https://i.ibb.co/tBW7JcC/image.png" alt="1"/></div>
                    <div className="card__name">Solimo Coffee Beans 2 kg</div>
                    <div className="card__price">10.73$</div>
                </Col>
                <Col md={2} className="card">
                    <div className="card__img"><img src={bestTwo} alt="2"/></div>
                    <div className="card__name">Solimo Coffee Beans 2 kg</div>
                    <div className="card__price">10.73$</div>
                </Col>
                <Col md={2} className="card">
                    <div className="card__img"><img src={bestThree} alt="3"/></div>
                    <div className="card__name">Solimo Coffee Beans 2 kg</div>
                    <div className="card__price">10.73$</div>
                </Col>
            </Row>
        </Container>   
    </section>
    )
}

export default Best;