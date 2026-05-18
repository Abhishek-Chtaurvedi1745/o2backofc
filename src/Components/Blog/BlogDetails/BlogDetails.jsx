import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Section13 from '../../Home/Section13';
import blogData from './blogData.json';


export default function BlogDetails() {
  const { title } = useParams();  // Capture the title parameter from the URL
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    // Find the blog data that matches the title
    const blog = blogData.find(blog => blog.title.toLowerCase().replace(/\s+/g, '-') === title);
    setBlogContent(blog);
  }, [title]);  // Re-run the effect if the title changes

  if (!blogContent) {
    return <div>Loading...</div>;  // Show loading message while data is being fetched
  }

  return (
    <>
       {/* Banner Section */}
    <Row className='p-0'>
      <img  src={blogContent.bannerImage}  // Use dynamic banner image
          alt={`banner-${blogContent.title}`} 
          className='img-fluid p-0'/>
    </Row>
    <div className="blog-details-wrapper">
      {/* Content Section */}
      <div className="content-section py-5">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={10} className="blog-content">
              {/* Title */}
              <h1 className="blog-title mb-4  hed1">
                {blogContent.title}
              </h1>
              {/* Description */}
              <div className="description mb-4">
                <p className="lead text-muted" style={{ fontSize: '1.1rem' }}>
                  {blogContent.description}
                </p>
                <p className="lead text-muted para" style={{ fontSize: '1.1rem' }}>
                  {blogContent.secondDes}
                </p>
              </div>

              {/* Key Points */}
              <div className="key-points mb-4">
                {/* Dynamic Points Heading */}
                <h3 className="points-title mb-3 hed2">
                  {blogContent.pointsHeading} 
                 {/* Display the dynamic points heading here */}
                </h3>
                <ul className="points-list">
                  {blogContent.points.map((point, idx) => (
                    <li key={idx} className="d-flex align-items-start mb-3">
                      <FaArrowAltCircleRight className="mt-1 me-2 text-primary" style={{ fontSize: '1.3rem' }} />
                      <span style={{ fontSize: '1.1rem' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Conclusion */}
              <div className="conclusion p-4 bg-light rounded" style={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
                <p className="mb-0" style={{ fontSize: '1.2rem' }}>
                  {blogContent.conclusion}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Section13 Component */}
      <Section13 />
    </div>
    </>
  );
}
