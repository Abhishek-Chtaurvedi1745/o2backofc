import React, { useState } from 'react';
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import firstImage from '../../../public/Image/Expert-Technical-support-blog.webp';
import secImage from '../../../public/Image/Sales-team-support-blogs.webp';
import thirdImage from '../../../public/Image/Recruitment-finding-top-talent-Blog.webp';
import FouthImage from '../../../public/Image/virtual-assistants-rise-Blogs.webp';
import FifhtImage from '../../../public/Image/professional-social-media-management-blogs.webp';
import SixthImage from '../../../public/Image/professional-accounting-services-Blogs.webp';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Section13() {
    const navigate = useNavigate();
    const BlogData = [
        {
          "id": 1,
          "title": "Boost Your Business Efficiency with Expert Technical Support",
          "content": "In today’s tech-driven world, seamless operations are paramount for business success. But what happens when your team encounters technical roadblocks that prevent smooth functioning? That’s where professional technical support comes in — a game-changer for businesses of all sizes.",
          "image": firstImage
        },
        {
          "id": 2,
          "title": "Supercharge Your Sales Team with Dedicated Sales Support",
          "content": "Sales are the backbone of any business, but achieving consistent growth requires more than just good products and services—it requires a skilled and motivated sales team. Hiring and managing an in-house sales team can be expensive, time-consuming, and difficult to scale.",
          "image": secImage
        },
        {
          "id": 3,
          "title": "How Professional Social Media Management Can Help Your Brand Thrive",
          "content": "In the fast-paced world of digital marketing, a strong and consistent social media presence is essential for building brand awareness and engaging with your target audience. However, managing social media platforms and creating engaging content can be overwhelming, especially if you’re juggling other aspects of your business.",
          "image": FifhtImage
        },
        {
          "id": 4,
          "title": "Recruitment Your Secret Weapon to Finding Top Talent",
          "content": "In a competitive job market, finding the right talent is often one of the most challenging tasks for business owners and HR teams. With the rise of remote work and global hiring, companies are looking beyond traditional methods to meet their staffing needs.",
          "image": thirdImage // Using firstImage again; replace with appropriate image if available
        },
        {
          "id": 5,
          "title": "The Value of Professional Accounting Services for Your Business",
          "content": "As your business grows, so does the complexity of managing your finances. Handling accounting internally can take up valuable time and resources, especially if you don’t have a dedicated finance team.",
          "image": SixthImage // Using secImage again; replace with appropriate image if available
        },
        {
            "id": 6,
            "title": "The Rise of Virtual Assistants Boosting Productivity and Redefining Work-Life Balance",
            "content": "In today's fast-paced digital world, businesses are constantly seeking innovative ways to stay ahead of the competition while maintaining a healthy work-life balance. One of the most significant trends in recent years is the rise of virtual assistants. ",
            "image": FouthImage
            
        }
      ];
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = BlogData.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(BlogData.length / recordsPerPage);

    const handlePageClick = (index) => setCurrentPage(index);

    const movePage = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const generateSlug = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    };

    return (
        <>
            <Row className='d-sm-flex d-none justify-content-center align-items-center pb-5'>
                <Col md={11} xl={10} lg={11} xs={11}>
                    <div className='text-center'>
                        <h1 className='hed1 text-center'>Blogs</h1>
                        <p className='para text-center text-black'>Innovative Solutions Tailored to Your Needs</p>
                    </div>
                    <div className='d-flex gap-xl-4 gap-lg-3 gap-2'>
                        {visibleRecords.map((item) => (
                            <Col key={item.id} onClick={() => navigate(`/blog/${generateSlug(item.title)}`)} md={4} 
                                className="d-flex flex-column justify-content-center align-items-center pt-2 pb-3">
                                <div className='main-div-blog'>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <h4 className='hed3 fw-bold pt-lg-3 pt-md-1 pt-xl-3 pt-1 text-center px-1' style={{ color: "#46A4D9" }}>{item.title}</h4>
                                    <h6 className='para pt-1 pb-xl-4 pb-lg-3 pb-2 text-center px-xl-3 px-lg-2 px-1'>{item.content}</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center know-more-button-div'>
                                    <Button onClick={() => navigate(`/blog/${generateSlug(item.title)}`)}>Know More</Button>
                                </div>
                            </Col>
                        ))}
                    </div>
                    <div className='AllbuttonForMove d-flex justify-content-center align-items-center gap-2'>
                        <Button onClick={() => movePage('prev')} disabled={currentPage === 1}>{'<'}</Button>
                        <Button onClick={() => movePage('next')} disabled={currentPage === numberOfPages}>{'>'}</Button>
                    </div>
                </Col>
            </Row>

            {/* Carousel for Small Screens */}
            <Row className="d-sm-none d-flex justify-content-center align-items-center py-4">
                <div className="text-center">
                    <h1 className="hed1 text-center">Blogs</h1>
                    <p className="para text-center text-black">Innovative Solutions Tailored to Your Needs</p>
                </div>
                <Col md={3} lg={3} xs={11}>
                    <Carousel controls={false} indicators={false}>
                        {visibleRecords.map((item, index) => (
                            <Carousel.Item key={index}>
                                <div className='main-div-blog' onClick={() => navigate(`/blog/${generateSlug(item.title)}`)}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <h4 className='hed3 fw-bold pt-lg-3 pt-md-1 pt-xl-3 pt-1 text-center px-1' style={{ color: "#46A4D9" }}>{item.title}</h4>
                                    <h6 className='para pt-1 pb-4 text-center px-3'>{item.content}</h6>
                                </div>
                                <div className='d-flex align-items-center justify-content-center know-more-button-div'>
                                    <Button onClick={() => navigate(`/blog/${generateSlug(item.title)}`)}>Know More</Button>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}
