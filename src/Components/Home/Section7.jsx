import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import clineimg from '../../../public/Image/client-1 (1).jpeg';
import clineimg2 from '../../../public/Image/client-1 (2).jpeg';
import clineimg3 from '../../../public/Image/Client-Reviews-Charlie-White.webp';
import clineimg4 from '../../../public/Image/Client-Review-Edward-lee.webp';
import clineimg5 from '../../../public/Image/Client-Reviews-Abena-Smith.webp';
import clineimg6 from '../../../public/Image/client-1 (6).jpeg';

const TestimonialCarousel = () => {

  const testimonials = [
    {
      image: clineimg,
      name: 'Adam Brown',
      title: 'Managing Director',
      testimonial: 'Outsource2Backoffice has been a lifesaver for my small business. Their team handles everything from customer support to social media management, and I couldn’t be more relieved. I no longer have to worry about staying up late answering emails or managing my social profiles. It’s like having an entire team working behind the scenes for me—highly recommend!"',
      rating: 5,
    },
    {
      image: clineimg2,
      name: 'Abilene Jones',
      title: 'Operations Director',
      testimonial: 'We needed help with recruitment and found Outsource2Backoffice to be a great partner. They helped us find the right candidates faster and took care of all the initial screening. It saved us time, and we could focus on getting the right person in the role. Their process is smooth, and they really understand what we are looking for',
      rating: 5,
    },
    {
      image: clineimg3,
      name: 'Charlie White',
      title: 'Vice President',
      testimonial: "I was drowning in admin tasks, and I just didn’t have the bandwidth to keep up. Hiring a virtual assistant from Outsource2Backoffice was a game-changer. Now I can focus on the things that actually grow my business, while they handle scheduling, emails, and research. Best decision ever",
      rating: 5,
    },
    {
      image: clineimg4,
      name: 'Edward Lee',
      title: 'HR Manager',
      testimonial: 'We started using Outsource2Backoffice for our accounting services, and it’s been a huge relief. Their team is professional, efficient, and they take care of everything—from bookkeeping to tax prep. I don’t have to stress about numbers anymore, which lets me focus on the creative side of my work. They’re a true partner in our success',
      rating: 5,
    },
    {
      image: clineimg5,
      name: 'Abena Smith',
      title: 'General Manager',
      testimonial: 'Running a tech startup means juggling a lot of tasks, but since we’ve partnered with Outsource2Backoffice for tech support, it’s been so much easier. Their team is responsive, knowledgeable, and always ready to jump in. They’ve saved us countless hours, allowing us to focus on innovation rather than troubleshooting',
      rating: 5,
    },
    {
      image: clineimg6,
      name: 'David Taylor',
      title: 'Finance Manager',
      testimonial: '7.	Their services helped us scale quickly without the overhead of hiring a huge team. From sales support to accounting, everything runs smoothly, and their customer service is top-notch. They’re like an extension of our in-house team.',
      rating: 5,
    },
  ];
  

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Row className="py-md-5  py-4 d-flex justify-content-center align-items-center">
      <Col md={10} xs={8} sm={10}>
        <h1 className="text-center hed1">
          Client Reviews
        </h1>
        <p className="text-center  hed5" >
          We don't need to promote our quality, our happy clients do it for us
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <div className="profile shadow-sm p-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="profile-img img-fluid" 
                    />
                    <h5 className="mt-2 mb-1 hed3">{testimonial.name}</h5>
                    <p className="text-muted mb-2 hed5">{testimonial.title}</p>
                    <div className="rating mb-2 hed5">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} style={{ color: '#FFD700' }}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-text para">
                      {testimonial.testimonial}
                    </p>
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

export default TestimonialCarousel;
