import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import bgimg from '../../../public/Image/clients banner 1.png';
import './Home.css';

// Import all images individually
import partner1 from '../../../public/Image/partnrs1 (1).png';
import partner2 from '../../../public/Image/partnrs1 (2).png';
import partner3 from '../../../public/Image/spotify.png';
import partner4 from '../../../public/Image/partnrs1 (3).png';
import partner5 from '../../../public/Image/partnrs1 (5).png';
import partner6 from '../../../public/Image/partnrs1 (6).png';
import partner7 from '../../../public/Image/partnrs1__7.png';
import partner8 from '../../../public/Image/partnrs1 (8).png';
import partner9 from '../../../public/Image/partnrs1 (9).png';
import partner10 from '../../../public/Image/partnrs1__10.png';
import partner11 from '../../../public/Image/bond-cleaning-service.png';
import partner12 from '../../../public/Image/king-buyers.png';
import partner13 from '../../../public/Image/king-clean.png';

// Updated partners array with imported images
const partners = [
    { src: partner1, alt: 'Partner 1' },
    { src: partner2, alt: 'Partner 2' },
    { src: partner3, alt: 'Partner 3' },
    { src: partner4, alt: 'Partner 4' },
    { src: partner5, alt: 'Partner 5' },
    { src: partner6, alt: 'Partner 6' },
    { src: partner7, alt: 'Partner 7' },
    { src: partner8, alt: 'Partner 8' },
    { src: partner9, alt: 'Partner 9' },
    { src: partner10, alt: 'Partner 10' },
    { src: partner11, alt: 'Partner 11' },
    { src: partner12, alt: 'Partner 12' },
    { src: partner13, alt: 'Partner 13' }
];

export default function SecEgt() {
    return (
        <Row
            className="d-flex justify-content-center align-items-center py-lg-5 py-3"
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <h1 className="hed1 text-white text-center">Top Clients</h1>
            <p className="para text-white text-center pb-md-4 pb-2">
                Share the secret of success with the top businesses of Australia
            </p>
            <Col md={12} xs={10} className="d-flex flex-column justify-content-center align-items-center pb-md-5 pb-0 pb-1">
                <Marquee 
                    className="marquee-container mb-md-4 mb-0"
                    gradient={false}
                    speed={40}
                >
                    <div className="d-flex align-items-center">
                        {[...partners.slice(0, 6), ...partners.slice(0, 6)].map((partner, index) => (
                            <div key={index} className="clients-div mx-4">
                                <img 
                                    src={partner.src} 
                                    alt={partner.alt} 
                                    className="img-fluid client-logo"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
                <Marquee 
                    direction="right"
                    className="marquee-container d-md-flex d-none"
                    gradient={false}
                    speed={40}
                >
                    <div className="d-flex align-items-center">
                        {[...partners.slice(6), ...partners.slice(6)].map((partner, index) => (
                            <div key={index} className="clients-div mx-4">
                                <img 
                                    src={partner.src} 
                                    alt={partner.alt} 
                                    className="img-fluid client-logo"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </Col>
        </Row>
    );
}
