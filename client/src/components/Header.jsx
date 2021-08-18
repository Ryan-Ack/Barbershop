import React from 'react'
import { Router, Link } from '@reach/router';
import copyrightlogo from '../static/copyrightlogo.jpg'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src={copyrightlogo} className="bi me-2" width="40" height="32"></img>
                    <span className="fs-4">Your Business Name Here </span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="#" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Features</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Pricing</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">FAQs</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">About</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
