import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import clineimg from '../../../public/Image/Marc-from-boutique-realty-Case-Study.webp';
import clineimg2 from '../../../public/Image/shane-from-king-clean-Case-Study.webp';
import clineimg3 from '../../../public/Image/jay-from-king-buyers-Case-Study.webp';
import clineimg4 from '../../../public/Image/adam-from-hampton-dental-Case-study.webp';

// Assume caseStudyData.json is imported or available as an array
const caseStudyData = [
  {
    id: 1,
    image: clineimg,
    title:"Boutique Realty",
    testimonial: 'How Marc from Boutique Realty Supercharged His Sales and Cut Costs with Outsource2Backoffice.',
  },
  {
    id: 2,
    image: clineimg2,
    title:"King Clean",
    testimonial: 'How Shane from King Clean Boosted Sales and Achieved Zero Complaints from Commercial Customers with Outsource2Backoffice.',
  },
  {
    id: 3,
    image: clineimg3,
    title:"King Buyers Agents",
    testimonial: "How Jay from King Buyers Agents Skyrocketed Sales and managed heavy work flow with Outsource2Backoffice.",
  },
  {
    id: 4,
    image: clineimg4,
    title:"Hampton Dental",
    testimonial: 'How Adam from Hampton Dental Boosted Revenue and Transformed Operations with Outsource2Backoffice.',
  }
];

const CaseStudySection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Row className="py-md-5 py-4 d-flex justify-content-center align-items-center">
      <Col md={10} xs={8} sm={10}>
        <h1 className="text-center hed1">
          Case Studies
        </h1>
        <p className="text-center hed5">
          See how our solutions drive measurable business growth.
        </p>
        <Row className="position-relative">
          <Swiper
            spaceBetween={10}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-2"
          >
            {caseStudyData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="d-flex justify-content-center">
                <div className="main-div-blog">
                  <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.testimonial}
                      className="img-fluid"
                    />

                    <div className="p-3">
                    <Link to={`/case-study/${testimonial.id}`}
                      style={{backgroundColor:"#5e5e5e30",color:"#3e3e3e",border:"0px",fontWeight:"400",padding:"5px 10px",fontSize:"16px"}}
                       className="BUTTON-BANNER2 text-decoration-none">
                        Case Studies
                      </Link>
                      <h4 className='hed4 mt-3'>{testimonial.title}</h4>
                      <p className="para mt-2">{testimonial.testimonial}</p>
                      {/* Link to the case study page */}
                     
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={navigationPrevRef} className="custom-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <div ref={navigationNextRef} className="custom-swiper-button-next">
            <IoIosArrowForward />
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default CaseStudySection;
