import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../static/avatar.jpg'
import facebook from '../static/facebook.png'
import instagram from '../static/instagram.png'
import envelope from '../static/envelope.png'
import geolocation from '../static/geolocation.png'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { auto } from '@popperjs/core';
const AboutUs = () => {

    return (
        <div className="container" style={{ backgroundColor: "lightgray", borderRadius: 10, padding: 10 }}>
            <div>
                <p>***Google API Call for this location***</p>
                <img id="lu_map" src={geolocation} title="Map of Luxe Barber &amp; Shave Lounge" alt="Map of Luxe Barber &amp; Shave Lounge" style={{ minWidth: 65, height: "auto", maxWidth: "100%", maxHeight: "100%" }}></img>
            </div>
            <div>
                <p>Luxe Barber & Shave Lounge is an upscale experience, where we blend old school charm and new school freshness to truly groom our clients. Our barbershop is located in The Palmer House, a Hilton...</p>
            </div>
            <div >
                <p>Staffer Members: </p>
                <div style={{ display: "flex", justifyContent: 'space-around' }}>
                    <div >
                        {/* Staff map here. (loop every staff in staffers) */}
                        {/* Restrict to container */}
                        <img src={avatar} className="rounded-circle" alt="avatar" style={{ width: 65, maxWidth: "100%", height: "auto" }} />
                        <p>Tammy</p>
                    </div>
                    <div >
                        <img src={avatar} className="rounded-circle" alt="avatar" style={{ width: 65, maxWidth: "100%", height: "auto" }} />
                        <p>Timmy</p>
                    </div>
                    <div >
                        <img src={avatar} className="rounded-circle" alt="avatar" style={{ width: 65, maxWidth: "100%", height: "auto" }} />
                        <p>Tommy</p>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Contact and Business Hours
                </p>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "baseline" }}>
                    <p>(312) 285-2007</p>
                    <a href="tel:(312) 285-2007"><button type="button" className="btn btn-success"> Call </button></a>
                </div>
                <hr />
                <div>
                    {/* <p> Table? loop (Day of week + hours) </p> */}
                    <p>Sunday</p>
                    <p> 09:00 AM - 07:00PM </p>
                </div>
                <div >
                    <p>Social Media & Share</p>
                    <div style={{ display: "flex", justifyContent: 'space-around' }}>

                        <img src={facebook} alt="Link FB here" style={{ width: 50, height: "auto" }} />
                        <img src={instagram} alt="Link to IG here" style={{ width: 50, height: "auto" }} />
                        <img src={envelope} alt="Share" style={{ width: 50, height: "auto" }} />
                    </div>
                </div>
                <hr />
                <div>
                    <p>Payment & Cancellation Policy</p>
                </div>
                <hr />
                <div>
                    <p>Report</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
