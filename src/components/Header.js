import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
            <div className="banner__content">
                <div className="container">
                     <div className="banner__text">
                        <h3>Pizza Delievery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>rahul james milii kevin rodies pilot aerospace show in india</p>
                        <div className="banner__btn">
                            <a href="#" className="btn btn-smart">DELIEVERY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
