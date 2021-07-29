import React from 'react'
import AboutUs from './AboutUs'
import Carousel from './Carousel'
import Reviews from './Reviews'
import Services from './Services'


const Main = () => {
    return (
        <div className="container" style={{ display: "flex", backgroundColor: "lightblue", borderRadius: 10, padding: 5 }}>
            <div style={{ width: "70%" }}>
                <Carousel />
                <div style={{ padding: 2 }}>

                    <h2>Luxe Barber & Shave Lounge</h2>
                    <h5>17 E Mongroe, The Palmer house Houtel/ Gound Lev, Chicago, Il, 60605</h5>
                </div>
                <hr />
                <Services />
                <hr />
                <Reviews />
            </div>
            <div style={{ display: "flex", width: "30%" }}>
                <AboutUs />
            </div>
        </div>
    )
}

export default Main
