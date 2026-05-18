import {Row,Col,Carousel} from 'react-bootstrap';
import img3 from '.././../../public/Image/about-sec3.png'
import img4 from '.././../../public/Image/icon3 (4).png';
import img5 from '.././../../public/Image/icon3 (3).png';
import img6 from '.././../../public/Image/icon3 (2).png';
import img7 from '.././../../public/Image/icon3 (1).png';

export default function Services(){
    return(
        <>
         <Row className='d-flex justify-content-center align-items-center py-4' style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h1 className='hed1 text-center text-light'>Our Services</h1>
                <p className='para text-center text-light'>Interested in what we have to offer, have a look yourself</p>
                <Col lg={10} md={10} xl={10} className='carousel-indicators-services-section-main-page'>
                    <Carousel indicators={false}>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center align-items-center py-4 gap-5'>
                                <ServiceItem img={img4} text="Virtual Assistant" />
                                <ServiceItem img={img5} text="Customer Services" />
                                <ServiceItem img={img6} text="Tech Support" />
                                <ServiceItem img={img7} text="Call OutSourcing" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center align-items-center py-4 gap-5'>
                                <ServiceItem img={img4} text="Virtual Assistant" />
                                <ServiceItem img={img5} text="Customer Services" />
                                <ServiceItem img={img6} text="Tech Support" />
                                <ServiceItem img={img7} text="Call OutSourcing" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}
const ServiceItem = ({ img, text }) => {
    return (
        <div className='div-about-sec col-lg-2 col-md-2'>
            <img src={img} alt="icon" className='img-fluid' />
            <p className='para pt-2'>{text}</p>
        </div>
    );
};
