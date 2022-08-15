import React from 'react';
import coffeBlack from '../../resources/icons/coffe_black.svg' 
import image from '../../resources/images/description_img.png';
import {Container, Row, Col} from 'react-bootstrap';

const Description = () => {

    return(
        <div className='description'>
            <Container>
                <Row>
                    <Col md={{span:4,offset:2}}>
                        <img className='description__img' src={image} alt="Whoman" />
                    </Col>
                    <Col md={4}>
                        <div className='description__content'>
                            <h2>About our beans</h2>
                            <div className="divider divider-black divider-black-mb26">
                                <div className="divider__line divider__line-black"></div>
                                <div><img src={coffeBlack} alt="Coffe"/></div>
                                <div className="divider__line divider__line-black"></div>
                            </div>
                            <div className='description__text'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                            </div>
                        </div>
                    </Col>
                </Row>
                <div id='line'></div>
            </Container>
        </div>
    )
};

export default Description;