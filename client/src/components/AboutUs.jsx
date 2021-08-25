import React, { useState, useEffect } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../static/avatar.jpg'
import avatarpng from '../static/avatar.png'
import facebook from '../static/facebook.png'
import instagram from '../static/instagram.png'
import envelope from '../static/envelope.png'
import geolocation from '../static/geolocation.png'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { auto } from '@popperjs/core';
const AboutUs = () => {


    // const businessCoordinates= '45.522641,-122.656824'
    // const businessHref = `https://maps.google.com/maps?hl=en&amp;q=${businessCoordinates}&amp;sll=${businessCoordinates}&amp;z=13&amp;markers=${businessCoordinates}`
    return (
        <div className="container" style={{ backgroundColor: "lightgray", borderRadius: 10, padding: 10 }}>
            <div>
                <h6>Get Directions: </h6>
                <a href="https://maps.google.com/maps?hl=en&amp;q=45.522641,-122.656824&amp;sll=45.522641,-122.656824&amp;z=13&amp;markers=45.522641,-122.656824" target="_blank">
                    <img id="lu_map" src={geolocation} title="Map of (your busines name here)" alt="Map of (your busines name here)" style={{ minWidth: 65, height: "auto", maxWidth: "100%", maxHeight: "100%" }}></img>
                </a>
            </div>
            <div>
                <h6>Description: </h6>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita eaque porro facilis voluptatum dolore consequuntur accusantium numquam natus excepturi aliquam, aspernatur ad voluptate, omnis amet dolores repellat quidem eius? Exercitationem...</p>
            </div>
            <div >
                <h6>Staffer Members: </h6>
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
                <h6>Contact and Business Hours</h6>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "baseline" }}>
                    <p>(555) 555-1234</p>
                    <a href="tel:(555) 555-1234"><button type="button" className="btn btn-success"> Call </button></a>
                </div>
                <hr />
                <div>
                    {/* <p> Table? loop (Day of week + hours) API Call for hours/days?</p> */}
                    <h6>Sunday</h6>
                    <p> 09:00 AM - 07:00PM </p>
                    <h6>Monday - Friday </h6>
                    <p> 08:00 AM - 05:00PM </p>
                    <h6>Saturday</h6>
                    <p> 11:00 AM - 07:00PM </p>
                </div>
                <hr />
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




