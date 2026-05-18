import React, { useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import arrow from '../../../public/Image/arrow.png';
import img1 from '.././../../public/Image/about-sec3.png';
import img2 from '.././../../public/Image/what-we-can-virtual-assistants.webp';
import img3 from '.././../../public/Image/what-we-can-Customer-Service.webp';
import img4 from '.././../../public/Image/What-we-can-Technical-support.webp';
import img7 from '.././../../public/Image/what we can do for you HR.webp';
import img8 from '.././../../public/Image/what we can do for you call centre.webp';
import img9 from '.././../../public/Image/what we can do for you accounting and booking.webp';
import img10 from '.././../../public/Image/what we can data entry.webp';
import img11 from '../../../public/Image/Sales Support (1).jpg'
import img12 from '../../../public/Image/what we can do for you social media.webp'

import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function ThirdSec() {
    const [paused, setPaused] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    const servicesData = [
        {
            img: img2,
            title: 'Virtual Assistants',
            description: 'Efficient virtual support to handle your administrative tasks seamlessly.',
            route: '/ourservices/virtual-assitant',
        },
        {
            img: img3,
            title: 'Customer Service',
            description: 'Exceptional customer service that ensures satisfaction and loyalty for clients.',
            route: '/ourservices/customer-services',
        },
        {
            img: img4,
            title: 'Technical Support',
            description: 'Expert technical assistance to resolve issues and enhance user experience.',
            route: '/ourservices/techinal-support',
        },
        {
            img: img9,
            title: 'Accountants & Book keeping',
            description: 'Precision-driven financial management to streamline your business operations effectively.',
            route: '/ourservices/accountants-and-book-keeping',
        },
        {
            img: img8,
            title: 'Call Centre outsourcing',
            description: 'Professional call centre solutions for superior customer communication and support.',
            route: '/ourservices/call-center-outsourcing',
        },
        {
            img: img7,
            title: 'HR & Recruitment',
            description: 'Strategic HR and recruitment services to build your ideal team.',
            route: '/ourservices/hr-recuirtment',
        },
        {
            img: img10,
            title: 'Admin & Data Entry',
            description: 'Accurate and organized data entry to maintain your administrative efficiency.',
            route: '/ourservices/admin-and-data-entry',
        },
        {
            img: img11,  // Example duplicate image for this item
            title: 'Sales Support',
            description: 'Optimize performance and drive growth with expert support.',
            route: '/ourservices/sales-support',
        },
        {
            img:img12,
            title:'Social Media Management',
            description:'Enhance engagement, boost brand visibility, and grow your online presence.',
            route:'/ourservices/social-media-management'
        }
        // Add more service items here if necessary
    ];

    const chunkedData = [];
    const chunkSize = 3; // Adjust based on how many items per carousel you want
    for (let i = 0; i < servicesData.length; i += chunkSize) {
        chunkedData.push(servicesData.slice(i, i + chunkSize));
    }

    return (
        <Row className='justify-content-center align-items-center py-md-5 py-3' style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className="hed1 pb-4 text-center" style={{ color: "#FFFF" }}>What We Can Do For You</h1>
            <Col md={10} xs={11}>
                <Carousel
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    interval={paused ? null : 1000} // Pause when `paused` is true
                    controls={true}
                    indicators={false}
                    className='d-flex justify-content-center carousel-indicators-what-we-section'>
                    {chunkedData.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <div className='d-flex justify-content-center gap-4 align-items-center'>
                                {chunk.map((service, idx) => (
                                    <Col md={5} lg={4} sm={4} xs={12} key={idx}>
                                        <div className='d-flex flex-column align-items-center thirdsecdiv'
                                            onClick={() => navigate(service.route)}>
                                            <img src={service.img} alt={service.title} className='img-services' />
                                            <h3 className='hed4 text-black fw-bold pt-4'>{service.title}</h3>
                                            <p className='para text-center px-4'>{service.description}</p>
                                            <div className='d-flex justify-content-center align-items-center text-center'>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                    <p className='text-center m-0 para fw-bold' style={{ color: "#FE5A0E" }}>Know More</p>
                                                    <img src={arrow} alt="arrow" className='img-fluid m-0 ml-2' style={{ width: "30px", height: "30px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
}
