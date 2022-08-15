import React from 'react';
import { Container } from 'react-bootstrap';
import coffe from'../../resources/icons/Coffe.svg';


const Promo = () => {
    return(
        <section className="promo">
            <Container>
                <h1 className="promo__title">Everything You Love About Coffee</h1>
                <div className="divider">
                    <div className="divider__line"></div>
                    <div><img src={coffe} alt="Coffe"/></div>
                    <div className="divider__line"></div>
                </div>
                <h2 className="promo__subtitle">We makes every day full of energy and taste <br/>
                                            <span>Want to try our beans?</span></h2>
                <div className="promo__more">More</div>
            </Container>
        </section>
    )
};

export default Promo;
