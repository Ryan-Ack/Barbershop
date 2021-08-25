import React from 'react'
import { Router, Link } from '@reach/router';
import copyrightlogo from '../static/copyrightlogo.jpg'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">About</Link></li>
                </ul> */}
                <Breadcrumb style={{ display: "flex", justifyContent: "center", backgroundColor: "lightblue", borderRadius: 10, padding: 5, marginBottom: 5 }}>
                    <Breadcrumb.Item active><Link to="/"> Home </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/times"> Times </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/reviews"> Reviews </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> <Link to="/services"> Services </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/cart"> Cart </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/aboutus"> AboutUs </Link></Breadcrumb.Item>
                    {/* <Breadcrumb.Item><Link to="/bootstrap"> Bootstrap Practice </Link></Breadcrumb.Item> */}
                </Breadcrumb>
                <p className="text-center text-muted" style={{ borderRadius: 10,backgroundColor: "lightblue"}}>© 2021 (Your company's Logo)</p>
            </footer>
        </div>
    )
}

export default Footer
