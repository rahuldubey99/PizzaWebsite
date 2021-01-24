import React from 'react';
import Pizza from "../img/pizza.jpg";
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About US</h3>
                        <h1>WELCOME TO MAESTRO PIZZINI</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore! Dignissimos, totam.
                        </p>
                    <div className="about__btn">
                        <a href="#" className="btn btn-smart">READ MORE</a>
                    </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src={Pizza} alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
