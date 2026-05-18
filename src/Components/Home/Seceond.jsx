import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import img1 from '../../../public/Image/why-choose-us.webp';
import img2 from '../../../public/Image/why-choose-us.webp';
import img3 from '../../../public/Image/why-choose-us.webp';
import focused from '../../../public/Image/focused.png';
import quality from '../../../public/Image/quality.png';
import customized from '../../../public/Image/cutomized.png';
import './Home.css'

export default function SecondUI() {
  const textBoxes = [
    {
      icon: focused,
      title: "Focused on Business Growth",
      content: "We're not just about numbers; we're about realizing dreams and scaling aspirations. Your business growth is our primary focus, and we're committed to making it happen. Our experienced virtual staff isn't just about handling tasks; they're here to help you achieve your strategic goals and objectives."
    },
    {
      icon: customized,
      title: "Customized Solutions",
      content: "We believe that one size does not fit all. We understand that your business is unique, and your needs are distinct. That's why we tailor our solutions to be as unique as your fingerprint, ensuring that they perfectly match your distinct business needs. Your success isn't generic, and neither are our services."
    },
    {
      icon: quality,
      title: "Quality Assurance",
      content: "Obsession with quality defines our approach. Your success is our obsession, and we leave no stone unturned to achieve it. Our virtual staff undergoes rigorous training and quality control measures to ensure that every task, every project, and every interaction is nothing short of exceptional. Your satisfaction is our ultimate goal. We are not just a service provider; we're a partner on your journey to success. We are a privately-owned organization that places paramount importance on offering high-quality, creative, and scalable business outsourcing solutions. We have painstakingly assembled an exceptional team whose mission is to identify and secure the most suitable employees for your business."
    }
  ];

  return (
    <Row className="why-choose-us-section d-flex justify-content-center align-items-center py-sm-5 py-3">
      <Col xs={11} md={5} className="text-boxes-container">
        {textBoxes.map((box, index) => (
          <div key={index} className="text-box">
            <div className='text-box-header'>
              <img src={box.icon} alt={box.title} className='text-box-icon' />
              <h3>{box.title}</h3>
            </div>
            <p>{box.content}</p>
          </div>
        ))}
      </Col>
      <Col xs={11} md={5} className="carousel-container">
        <h1 className='section-title hed1 text-center'>Why Choose Us?</h1>
        <Carousel controls={false} interval={3000}>
          {[img1, img2, img3].map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="d-block w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}