// FAQ.js
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQ = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Row className='d-flex justify-content-center align-items-center pt-md-5 pt-3 pb-lg-3 pb-2'>
      <Col md={10} xs={11}>
        <h4 className='hed1 pb-lg-5 pb-3 text-center'>{title}</h4>
        {faqs.map((item, index) => (
          <div key={index}>
            <div className='faq-header mb-3 d-flex justify-content-between align-items-center' onClick={() => toggleAccordion(index)}>
              <h1 className='hed3'>{item.question}</h1>
              <span className='icon'>
                {expandedIndex === index ? <IoIosArrowUp size={30} color='#FE5A0E' /> : <IoIosArrowDown size={30} color='#061b49' />}
              </span>
            </div>
            {expandedIndex === index && (
              <ul className='d-flex justify-content-between align-items-center'>
                <li className='d-flex justify-content-between align-items-center w-100'>
                  <span className='para'>{item.answer}</span>
                </li>
              </ul>
            )}
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default FAQ;