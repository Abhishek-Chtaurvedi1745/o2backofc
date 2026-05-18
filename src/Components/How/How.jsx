import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import banner from '../../../public/Image/howitworks.png';
import CustomCard from './SectionFirst/Section';
import './How.css';
import img1 from '../../../public/Image/icon4-2.png';
import img2 from '../../../public/Image/icon (1).png';
import img3 from '../../../public/Image/icon (2).png';
import img4 from '../../../public/Image/icon (3).png';
import SixthSection from '../Home/SixthSection';
import SecEgt from '../Home/Section8';
import Section13 from '../Home/Section13';
import MobileCarousel from './MobileCarousel';
import ButtonComponent from '../whatsappbutton/Button';

export default function How() {
  const cardData = [
    {
      howcardheading: "1",
      howImage: img1,
      howTitle: "Book Free consultation",
      HowText: "Help us understand your needs. We are all ears and eager to learn about your requirements."
    },
    {
      howcardheading: "2",
      howImage: img4,
      howTitle: "Get your Proposal",
      HowText: "Upon understanding your requirements we submit our tailor made proposal to match your business needs."
    },
    {
      howcardheading: "3",
      howImage: img3,
      howTitle: "Recruitment and Training",
      HowText: "We select 2-3 top candidates through our extensive recruitment process and select the best match for you and train recruited staff to match your business needs."
    },
    {
      howcardheading: "4",
      howImage: img2,
      howTitle: "Get started",
      HowText: "You will have ongoing check-ins to support both you and your recruited staff throughout your partnership with Outsource2backoffice."
    }
  ];

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center px-0 position-relative '>
                        <img src={banner} className='img-fluid px-0' alt="First slide" />
                        <div className="button-div  d-none d-md-flex">
                               <ButtonComponent btnName="Free consultation" btnClassName="BUTTON-BANNER2" 
                               showHeaderStyle={false} />
                        </div>
                    </Row>

      <Row className='process-section py-lg-5 py-md-3 py-2'>
        <h1 className='hed1 text-center pb-3'>Our Process for Seamless Business Solutions</h1>

        <Col xs={12} md={10} lg={12} className='py-lg-5 py-md-3 py-2 px-md-0 px-4'>
          {/* Desktop and tablet view */}
          <div className='d-none d-md-flex justify-content-center align-items-center flex-wrap gap-4'>
            {cardData.map((card, index) => (
              <CustomCard key={index} {...card} />
            ))}
          </div>

          {/* Mobile view carousel */}
          <Carousel className="d-md-none" interval={3000} controls={false} indicators={false}>
            {cardData.map((card, index) => (
              <Carousel.Item key={index}>
                <MobileCarousel cards={[card]} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <SixthSection />
      <SecEgt />
      <Section13 />
    </>
  );
}