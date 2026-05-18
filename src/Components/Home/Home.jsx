import { useState } from 'react';
import '../Home/Home.css'
import homeBanner from '../../../public/Image/outsource home page bannner (1).jpg';
import homeBanner2 from '../../../public/Image/outsource home page bannner final (1).jpg';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import SectionFirst from './Sectionfirst';
import Seceond from './Seceond';
import ButtonComponent from '../whatsappbutton/Button';
import StepsComponent from './ThirdSec';
import SixthSection from './SixthSection';
import SecSev from './Section7';
import img1 from '../../../public/Image/icon4-2.png';
import img2 from '../../../public/Image/icon (1).png';
import img3 from '../../../public/Image/icon (2).png';
import img4 from '../../../public/Image/icon (3).png';
import SecEgt from './Section8';
import Section13 from './Section13';
import CustomCard from '../How/SectionFirst/Section';
import MobileCarousel from '../How/MobileCarousel';
import { useNavigate } from 'react-router-dom';
import FAQ from './faq';
import bannerImg from '../../../public/Image/virtual assitant banner.jpg'
import CaseStudySection from './CaseStudySection';

export default function Home() {
  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  const faqs = [
    {
      question: "How can outsourcing to Outsource2backoffice benefit my business?",
      answer: "Outsourcing with Outsource2backoffice allows your business to reduce operational costs, access a global talent pool, and focus on core business activities. By delegating routine tasks to our skilled professional, you can enhance productivity, achieve significant cost savings, and drive business growth and expansion."
    },
    {
      question: "How do you ensure the quality of your outsourced staff?",
      answer: "We have a rigorous recruitment and screening process to ensure we hire only the best talent. Ourstaff undergoes thorough background checks, skills assessments, and training to meet the highest standards. Additionally, we provide continuous performance monitoring and support to ensure our team consistently delivers top-quality service."
    },
    {
      question: "What measures do you take to protect my business data?",
      answer: "Data security is a top priority at Outsource2backoffice. We implement robust security protocols, including data encryption, secure access controls, and regular security audits, to protect your sensitive information. Our team is trained on data protection policies and compliance standards to ensure your business data remains safe and confidential."
    },
    {
      question: "Can I customize the outsourcing services to suit my business needs?",
      answer: "Absolutely! We understand that every business has unique requirements. Outsource2backoffice offers flexible and customizable outsourcing solutions tailored to meet your specific needs. We work closely with you to develop a customized plan that aligns with your business goals and objectives."
    },
    {
      question: "How do I get started with Outsource2backoffice?",
      answer: "Getting started is simple. Contact us through our website or give us a call to schedule a consultation. Our team will discuss your business needs, provide a detailed overview of our services, and help you develop a tailored outsourcing strategy. We are committed to making the transition smooth and efficient, ensuring you experience the full benefits of outsourcing with Outsource2backoffice."
    }
  ];
  const cardData = [
    {
      howcardheading: "1",
      howImage: img1,
      howTitle: "Book Free Consultation",
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

  const Navigate = useNavigate()

  return (
    <>
      <Carousel
        interval={paused ? null : 5000}
        className="d-flex justify-content-center align-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        controls={true}
        indicators={false}
        pause="hover"
        fade
      >
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center px-0 position-relative">
            <img src={homeBanner} className="img-fluid w-100" alt="First slide" />

          </Row>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center px-0 position-relative">
            <img src={bannerImg} className="img-fluid w-100" alt="Second slide" />
            <div className="button-div d-none d-md-flex position-absolute bottom-0 mb-3">
              {/* <button
              className="BUTTON-BANNER mx-2"
              onClick={() => Navigate('/how-it-works')}
            >
              How It Works
            </button>
            <ButtonComponent
              btnName="Free consultation"
              btnClassName="BUTTON-BANNER2"
              showHeaderStyle={false}
            /> */}
            </div>
          </Row>
        </Carousel.Item>

        {/* Carousel Item 3 */}
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center px-0 position-relative">
            <img src={homeBanner2} className="img-fluid w-100" alt="Third slide" />

          </Row>
        </Carousel.Item>
      </Carousel>

      <SectionFirst />
      <Seceond />
      <StepsComponent />
      {/* <FourthSection /> */}
      {/* <Row className='d-flex justify-content-center align-items-center py-lg-5 py-3'>
                <h1 className='hed1 text-center pt-0' style={{ color: "#323131" }}>How it Works</h1>
                <Col md={10} lg={10} xs={10} className='d-flex justify-content-center align-items-center gap-lg-5 gap-1  py-lg-5 py-2'>
                    <CustomCard howcardheading="1"
                        howImage={img1}
                        howTitle="Book Free Consultation"
                        HowText="Help us understand your needs, 
    We are in all ears.We 
          expect to submit this within 
           7 days."/>
                    <CustomCard howcardheading="2"
                        howImage={img4}
                        howTitle="Get your Proposal"
                        HowText="Upon understanding your requirements 
we submit our tailor made proposal 
to match your business needs. We 
expect to submit this within 
7 days."/>
                    <CustomCard howcardheading="3
"
                        howImage={img3}
                        howTitle="Recruitment and Training"
                        HowText="We select 2-3 top candidates through our 
extensive recruitment process and select 
the best match for you and train recruited 
staff to match your business needs."/>
                    <CustomCard howcardheading="4"
                        howImage={img2}
                        howTitle="Get started"
                        HowText="You will have ongoing check-ins to 
support both you and your recruited 
staff throughout your partnership 
with Outsource2backoffice.."/>

                </Col>


            </Row> */}
      <Row className='d-flex justify-content-center align-items-center py-lg-5 py-4'>
        <h1 className='hed1 text-center pb-3'>How It Works?</h1>
        <Col md={10} lg={10} xs={10} className='py-lg-5 py-2'>
          {/* Desktop view */}
          <div className='d-none d-md-flex justify-content-center align-items-center gap-xl-5 gap-lg-4 gap-md-3 gap-2'>
            {cardData.map((card, index) => (
              <CustomCard key={index} {...card} />
            ))}
          </div>

          {/* Mobile view carousel */}
          <Carousel className="d-md-none" interval={5000} controls={false} indicators={false}>
            {cardData.map((card, index) => (
              <Carousel.Item key={index}>
                <MobileCarousel cards={cardData} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <SixthSection />
      <SecSev />
      <SecEgt />
      <CaseStudySection />
      <FAQ faqs={faqs} title="Frequently Asked Questions" />
      <Section13 />
    </>
  );
}
