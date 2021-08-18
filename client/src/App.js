import React, { useState } from 'react'
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Main from './components/Main';
// import Calendar from './components/Calendar';
import Times from './components/Times';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Bootstrap from './components/Bootstrap';
import Footer from './components/Footer';




function App() {


  return (
    <div className="container">
 
      <h1>Your Business Name Here</h1>
      <Breadcrumb style={{ display: "flex", justifyContent: "center", backgroundColor: "lightblue", borderRadius: 10, padding: 5, marginBottom: 5 }}>
        <Breadcrumb.Item active><Link to="/"> Home </Link></Breadcrumb.Item>
        {/* <Breadcrumb.Item><Link to="/calendar"> Calendar </Link></Breadcrumb.Item> */}
        <Breadcrumb.Item><Link to="/times"> Times </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/reviews"> Reviews </Link></Breadcrumb.Item>
        <Breadcrumb.Item> <Link to="/services"> Services </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/cart"> Cart </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/aboutus"> AboutUs </Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/bootstrap"> Bootstrap Practice </Link></Breadcrumb.Item>
      </Breadcrumb>
      <Router>
        <Main path="/" />
        <Times path="/times" />
        <Cart path="/cart" />
        <Reviews path="/reviews" />
        <Services path="/services" />
        {/* <Calendar path="/calendar" /> */}
        <Bootstrap path="/bootstrap" />
        <AboutUs path="/aboutus" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;


// Bootstrapping https://www.youtube.com/watch?v=8pKjULHzs0s  // how to bootstrap
//https://getbootstrap.com/docs/5.0/components/carousel/ //carousel
// https://ej2.syncfusion.com/react/documentation/calendar/getting-started/  //calendar
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max // date picker
// https://www.alt-codes.net/miscellaneous-symbols  //alt codes for emojis
//https://www.iconfinder.com/iconsets/social-media-hexagon-1 // icons for social media