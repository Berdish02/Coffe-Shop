import React from "react";
import coffeBlack from '../../resources/icons/coffe_black.svg' ;
import {Container} from 'react-bootstrap'



const About = () => {
    return (
        <section className="about">
            <Container>
                <h2 className="about__title">About Us</h2>
                <div className="divider divider-black">
                    <div className="divider__line divider__line-black"></div>
                    <div><img src={coffeBlack} alt="Coffe"/></div>
                    <div className="divider__line divider__line-black"></div>
                </div>
                <div className="about__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.<br/><br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </Container>
        </section>
    )
}

export default About;