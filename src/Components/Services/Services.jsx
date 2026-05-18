import { Row, Col } from 'react-bootstrap';
import banner from '../../../public/Image/services-banner.jpg';
import img1 from '../../../public/Image/icon5 (4).png';
import img2 from '../../../public/Image/icon5 (2).png';
import img3 from '../../../public/Image/icon5 (3).png';
import './Services.css';
import img4 from '../../../public/Image/icon5 (1).png';
import TestimonialCarousel from '../Home/Section7/'
import ServicesData from './Services.json';
import SixthSection from '../Home/SixthSection';
import SecEgt from '../Home/Section8';
import { Link } from 'react-router-dom';

function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export default function Services() {
    const chunkedServices = chunkArray(ServicesData, 3);

    return (
        <>
            <Row className='p-0'>
                <img src={banner} alt="banner" className='img-fluid px-0' />
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col lg={10} md={10} xl={10} className='d-flex justify-content-center align-items-center gap-5'>
                    <div className='div-servicesbanner'>
                        <img src={img1} alt="img1" className='img-fluid' />
                        <p className='para text-center'>98% Client Satisfaction</p>
                    </div>
                    <div className='div-servicesbanner'>
                        <img src={img2} alt="img2" className='img-fluid' />
                        <p className='para'>5 Years of Service</p>
                    </div>
                    <div className='div-servicesbanner'>
                        <img src={img3} alt="img3" className='img-fluid' />
                        <p className='para'>150+ Clients</p>
                    </div>
                    <div className='div-servicesbanner'>
                        <img src={img4} alt="img4" className='img-fluid' />
                        <p className='para'>70+ Recurring clients</p>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center'>
                <h1 className='hed1 text-center'>Our Services</h1>
                <p className='para text-center pb-4'>Efficiently streamline your business operations with our comprehensive back-office outsourcing solutions.</p>
            </Row>
            {chunkedServices.map((serviceChunk, chunkIndex) => (
                <Row key={chunkIndex} className='d-flex justify-content-center align-items-center'>
                    {serviceChunk.map((service, index) => (
                        <Col key={index} lg={3} md={3} xl={3} className='d-flex justify-content-center align-items-center gap-5'>
                           <div className='all-services-div shadow'>
                           <Link to={service.link} className="text-white para" style={{ textDecoration: 'none' }}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            ))}
     <SixthSection/>
     <TestimonialCarousel/>
     <SecEgt/>



        </>
    );
}
