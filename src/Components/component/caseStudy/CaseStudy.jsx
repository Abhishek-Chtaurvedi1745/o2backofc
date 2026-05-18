import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; 
import caseStudyData from './caseStudy.json';
import banner from '../../../../public/Image/case study-banner.png';

const CaseStudy = () => {
  const { id } = useParams();
  
  const caseStudy = caseStudyData.find((caseItem) => caseItem[`case${id}`]);

  if (!caseStudy) {
    return <div>Case study not found.</div>;
  }

  const data = caseStudy[`case${id}`];

  return (
    <>

       
          <Row>
            <img 
              src={banner} 
              alt="banner" 
              className='img-fluid px-0'
            />
          </Row>

          <Row className="py-5 justify-content-center align-items-center">
            <Col lg={10}>
              <h1 
                className="text-center mb-3 hed1" 
              >
                {data.title}
              </h1>
              <p 
                className="text-center mb-4 text-lg fw-normal" 
               
              >
                {data.introduction}
              </p>

              <div 
                className="mb-5 p-4" 
                style={{
                  background: 'rgba(254, 90, 14, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(254, 90, 14, 0.2)'
                }}
              >
                <h2 
                  className="text-center  hed1 mb-2" 
                 
                >
                  The Process
                </h2>
                <p 
                  className="text-center mb-4" 
                  style={{color: '#666'}}
                >
                  {data.process.description}
                </p>
                {data.process.steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="mb-3 p-3" 
                    style={{
                      background: 'white',
                      borderLeft: `4px solid #FE5A0E`,
                      borderRadius: '5px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <FaCheckCircle style={{color: "#FE5A0E", marginRight: "10px"}} />
                      <h3 
                        className="mb-0" 
                        style={{
                          color:"#FE5A0E", 
                          fontWeight: 600
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p style={{color: '#666'}}>{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <h2 
                  className="text-center mb-4 hed1" 
                >
                  The Results
                </h2>
                <Row className="g-4">
                  {data.results.map((result, index) => (
                    <Col md={6} key={index}>
                      <div 
                        style={{
                          background: 'white',
                          border: '1px solid #fabea2',
                          borderRadius: '15px',
                          padding: '20px',
                          height: '100%',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                          transition: 'transform 0.3s ease'
                        }}
                        className="hover-lift"
                      >
                        <h3 
                          className="mb-3" 
                          style={{
                            color:"#FE5A0E", 
                            fontWeight: 600
                          }}
                        >
                          {result.title}
                        </h3>
                        <p style={{color: '#666'}}>{result.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <div 
                className="mb-5 p-4 text-center" 
                style={{
                  background: 'rgba(254, 90, 14, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(254, 90, 14, 0.2)'
                }}
              >
                <h2 
                  className="mb-4 hed1" 
                 
                >
                  What {data.clientName} Had to Say
                </h2>
                <blockquote 
                  className="mb-0" 
                  style={{
                    fontStyle: 'italic',
                    color: '#666',
                    position: 'relative',
                    paddingLeft: '30px',
                    paddingRight: '30px'
                  }}
                >
                  "{data.testimonial}"
                </blockquote>
              </div>

              <div 
                className="text-center p-3" 
                style={{
                    background: 'rgba(254, 90, 14, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(254, 90, 14, 0.1)'
                  }}
              
              >
                <h2 className="mb-3 hed2">{data.ctaSection.title}</h2>
                <p className="mb-3">{data.ctaSection.description}</p>
                <p>{data.ctaSection.callToAction}</p>
              </div>
            </Col>
          </Row>
     </>
   
  );
};

export default CaseStudy;