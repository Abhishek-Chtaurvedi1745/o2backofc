import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import outSourcelogo from '../../../public/Image/outsource2backoffice.png';
import fb from '../../../public/Image/facebook (3) 1.png';
import instra from '../../../public/Image/instagram (1) 1.png';

export default function Footer() {
    const services1 = [
        { "text": "Virtual Assistants", "link": "/ourservices/virtual-assitant" },
        { "text": "Tech Support", "link": "/ourservices/techinal-support" },
        { "text": "Admin and Data Entry", "link": "/ourservices/admin-and-data-entry" },
        { "text": "Accountants & Book Keeping", "link": "/ourservices/accountants-and-book-keeping" },
        { "text": "Customer Service", "link": "/ourservices/customer-services" },
        { "text": "Call Centre outsourcing", "link": "/ourservices/call-center-outsourcing" },
        { "text": "Sales Support", "link": "/ourservices/sales-support" },
        { "text": "Social Media Management", "link": "/ourservices/social-media-management" },
        { "text": "HR and Recruitment", "link": "/ourservices/hr-recuirtment" },
    ];

    const services2 = [
        { "text": "About", "link": "/about" },
        { "text": "How It works", "link": "/how-it-works" },
        { "text": "Blogs", "link": "/blog" },
        { "text": "Reach us", "link": "/contact-us" },
    ];

    return (
        <footer className="footer bg-dark text-white py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={10} lg={10} xl={10}>
                        <Row className="gy-4 justify-content-between">
                            {/* Company Info Column */}
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <img src={outSourcelogo} alt="footerLogo" className="img-fluid mb-3 bg-white object-contain" />
                                <p className="footer-text">
                                    Outsource2backoffice partners with businesses to deliver impactful, results-driven solutions
                                    through strategic offshore outsourcing. By harnessing the expertise of market specialists, we
                                    empower businesses to optimize costs, enhance productivity, and drive sales growth for rapid
                                    and efficient expansion. Our team designs customized solutions that are attuned to each
                                    client's unique market needs, supporting sustainable growth and maximizing operational
                                    efficiency.
                                </p>
                            </Col>

                            {/* Services Column */}
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <h4 className="footer-heading mb-3">Our Services</h4>
                                <ul className="list-group">
                                    {services1.map((service, index) => (
                                        <li key={index} className="mb-2 list-unstyled w-auto" >
                                            <Link to={service.link} className="footer-link  text-decoration-none text-white w-auto">
                                                <span className="arrow">→</span>
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            {/* Other Links Column */}
                            <Col xs={12} sm={6} md={3} lg={3}>
                                <h4 className="footer-heading mb-3">Other Links</h4>
                                <ul className="list-group">
                                    {services2.map((service, index) => (
                                        <li key={index} className="mb-3 list-group-item">
                                            <Link to={service.link} className="footer-link text-decoration-none text-muted ">
                                                <span className="arrow">→</span>
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Contact Information Row */}
            <div className="footer-contact mt-4 border-top pt-4">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={10} md={9}>
                            <p className="mb-2 d-flex flex-wrap justify-content-center justify-content-md-start">
                                <span className="fw-bold">Outsource2Backoffice HQ</span>
                                <span className="mx-1">/</span>
                                <span>Australia: <a href="tel:0489276638" className="footer-link text-decoration-none text-white">0489276638

</a></span>
                                <span className="mx-1">/</span>
                                {/* <span>Canada: <a href="tel:2368857206" className="footer-link
                                text-decoration-none text-white">236 885 7206</a></span> */}
                                <span className="mx-1">|</span>
                                <span className='mail-link'><a href="mailto:info@outsource2backoffice.com" className="footer-link
                                   " >
                                    info@outsource2backoffice.com
                                </a></span>
                            
                            </p>

                        </Col>
                        <Col xs={10} lg={2} className="text-center text-md-end">
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=61559578997785"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-3">
                                    <img src={fb} alt="Facebook" className="social-icon" />
                                </a>
                                <a href="https://www.instagram.com/outsource2backoffice/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={instra} alt="Instagram" className="social-icon" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Copyright Row */}
            <div className="footer-bottom mt-4 pt-4  border-top">
                <Container>
                    <Row className="text-center text-sm-start justify-content-center">
                        <Col xs={12} sm={5} className="mb-2 mb-sm-0">
                            <small><span> <Link to="/privacy-policy" className="footer-link
                                   " >
                                    Privacy-policy
                                </Link></span> & Terms & Conditions</small>
                        </Col>
                        <Col xs={12} sm={5} className="text-sm-end">
                            <small>© COPYRIGHT 2023 Outsource2backoffice - ALL RIGHTS RESERVED</small>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}