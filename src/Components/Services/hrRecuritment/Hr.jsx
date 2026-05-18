import { Row, Col } from 'react-bootstrap'
import banner from '../../../../public/Image/hr-Recruitment-banner.png';
import SecEgt from '../../Home/Section8';
import { useNavigate } from 'react-router-dom';
import img10 from '../../../../public/Image/icon7 (5).png';
import img11 from '../../../../public/Image/icon7 (4).png';
import img12 from '../../../../public/Image/icon7 (3).png';
import img13 from '../../../../public/Image/icon7 (2).png';
import img14 from '../../../../public/Image/icon7 (1).png';
import img15 from '../../../../public/Image/icon7 (8).png';
import img8 from '../../../../public/Image/icon7 (7).png';
import img9 from '../../../../public/Image/icon7 (6).png';
import img1 from '../../../../public/Image/reasons-hr (5).png';
import img2 from '../../../../public/Image/reasons-hr (4).png';
import img3 from '../../../../public/Image/reasons-hr (3).png';
import img4 from '../../../../public/Image/reasons-hr (2).png';
import img5 from '../../../../public/Image/reasons-hr (1).png';
import hrsection from '../../../../public/Image/hr-section.png';
import blucechck from '../../../../public/Image/blucheck.png'
import { useState } from 'react';
import TestimonialCarousel from '../../Home/Section7';
import FAQ from '../../Home/faq';
import ThirdSec from '../../Home/ThirdSec';

export default function HrRecuirtment() {

    const faqs = [
        {
            question: "What bookkeeping and accounting services does Outsource2backoffice provide?",
            answer: "Outsource2backoffice offers comprehensive bookkeeping and accounting services, including accounts payable and receivable, payroll processing, financial reporting, tax preparation, bank reconciliation, and general ledger maintenance. Our services are designed to help Australian businesses streamline their financial operations and achieve significant cost savings."
        },
        {
            question: "How can outsourcing my bookkeeping and accounting tasks benefit my business?",
            answer: "Outsourcing your bookkeeping and accounting tasks to Outsource2backoffice can lead to substantial cost savings, improved accuracy, and increased efficiency. By leveraging our skilled overseas professionals, you can reduce overhead costs, eliminate the need for in-house staff, and focus on growing your core business. Our expertise ensures compliance with financial regulations and helps you make informed financial decisions."
        },
        {
            question: "How do you ensure the accuracy and reliability of your bookkeeping and accounting services?",
            answer: "We maintain the highest standards of accuracy and reliability through our meticulous hiring process, which includes background checks, skills assessments, and ongoing training. Our team of experienced accountants and bookkeepers uses advanced accounting software and follows best practices to ensure precise and reliable financial records. We also conduct regular quality checks and audits to maintain the integrity of our services."
        },
        {
            question: "What measures do you take to protect my financial data?",
            answer: "Data security is paramount at Outsource2backoffice. We employ robust security measures, such as data encryption, secure access controls, and regular security audits, to safeguard your financial information. Our team adheres to strict data protection policies and complies with international standards to ensure the confidentiality and security of your financial data."
        },
        {
            question: "How do I get started with outsourcing my bookkeeping and accounting tasks to Outsource2backoffice?",
            answer: "To get started, simply contact us through our website or call us to schedule a consultation. Our team will discuss your specific bookkeeping and accounting needs, provide a detailed overview of our services, and help you develop a customized outsourcing plan. We are dedicated to making the transition smooth and efficient, allowing you to experience the full benefits of outsourcing with Outsource2backoffice."
        }
    ];
    const benefits = [
        {
            title: "Recruitment and Staffing",
            subtitle: "Managing the end-to-end process of attracting, sourcing, interviewing, and hiring the right talent to meet organizational needs."
        },
        {
            title: "Employee Onboarding",
            subtitle: "Facilitating the smooth integration of new hires into the company by providing necessary training, resources, and orientation."
        },
        {
            title: "Training and Development",
            subtitle: "Offering ongoing employee training programs and career development opportunities to enhance skills and support professional growth."
        },
        {
            title: "Payroll and Benefits Administration",
            subtitle: "Handling payroll processing, benefits management, and compensation to ensure employees are paid accurately and receive appropriate perks."
        },
        {
            title: "HR Compliance and Risk Management",
            subtitle: "Ensuring adherence to labor laws, company policies, and industry regulations to mitigate risks and maintain a compliant and fair workplace."
        }
    ];


    return (
        <>
           
           <Row className="d-flex justify-content-center align-items-center px-0 position-relative">
  <img src={banner} className="img-fluid w-100 position-" alt="First slide" />
  {/* Button container that only appears on medium screens and up */}
  <div className="button-div d-none d-md-flex position-absolute bottom-0 mb-3">
    <button
      className="BUTTON-BANNER mx-2"
      onClick={() => Navigate('/how-it-works')}
    >
      How It Works
    </button>
  </div>
</Row>
            <Row className='d-flex justify-content-center align-items-center py-md-5 py-sm-3 py-2'>
                <Col md={5} lg={5} xl={5} xs={11} className='d-flex flex-column align-items-center 
                justify-content-center pt-md-5 pt-sm-3 pt-3'>
                    <h1 className="hed1">What does Outsourcing
                        HR Means?</h1>
                    {benefits.map((point, index) => (
                        <div key={index} >
                            <div className='d-flex pb-md-3 pb-xs-2 pb-1 pt-2 gap-2'>
                                <div>
                                    <img src={blucechck} style={{ height: "20px", width: "20px" }} />
                                </div>
                                <div className='d-flex'>
                                    <div className="para"><span className='hed4'>{point.title}</span> - {point.subtitle} </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col lg={5} xl={5} md={5} xs={11}>
                    <img src={hrsection} alt="texh" className='img-fluid' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center pb-md-5 pb-sm-3 pb-2'>
                <h1 className='hed1 text-center'>5 main areas of human resources BPO</h1>
                <Col md={10} xs={10} className='d-flex flex-wrap justify-content-center alilgn-items-center'>
                    <div className="d-flex gap-md-5 gap-2 flex-wrap justify-content-center align-items-center">
                        <div className='p-4 rounded shadow-sm bg-white d-flex flex-column align-items-center'>
                            <img src={img2} alt="Recruitment" className='img-fluid' />
                            <h4 className='hed4 text-center pt-2'>Talent Acquisition</h4>
                        </div>
                        <div className='p-4 rounded shadow-sm bg-white d-flex flex-column align-items-center'>
                            <img src={img1} alt="Recruitment" className='img-fluid' />
                            <h4 className='hed4 text-center pt-2'>Training</h4>
                        </div>
                        <div className='p-4 rounded shadow-sm bg-white d-flex flex-column align-items-center'>
                            <img src={img3} alt="Recruitment" className='img-fluid' />
                            <h4 className='hed4 text-center pt-2'>Engagement</h4>
                        </div>
                        <div className='p-4 rounded shadow-sm bg-white d-flex flex-column align-items-center'>
                            <img  src={img4} alt="Recruitment" className='img-fluid' />
                            <h4 className='hed4 text-center pt-2'>Performance</h4>
                        </div>
                        <div className='p-4 rounded shadow-sm bg-white d-flex flex-column align-items-center'>
                            <img  src={img5} alt="Recruitment" className='img-fluid' />
                            <h4 className='hed4 text-center pt-2'>Compliance</h4>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2'
                style={{ backgroundColor: "#061B49" }}
            >
                <h1 className='hed1 text-center pb-md-4 pb-0 text-white'>Why Outsource2Backoffice?</h1>
                <div className='d-flex justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2  bg-white p-4 rounded'>
                        <img  src={img15} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Upto 70% cost
                            Reduction</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2  bg-white p-4 rounded'>
                        <img  src={img8} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Highly qualified
                            assistant</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 d-md-block d-none  bg-white p-4 rounded'>
                        <img  src={img9} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>No Lock-in Contracts</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2  bg-white p-4 rounded'>
                        <img  src={img10} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 Set-up Fees</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center acc-sec-icon-div-2  bg-white p-4 rounded'>
                        <img  src={img14} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 charges for staff
                            change</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 d-md-block d-none  bg-white p-4 rounded'>
                        <img  src={img12} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>24x7 service</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2  bg-white p-4 rounded' >
                        <img  src={img13} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Fixed hourly rate</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2  bg-white p-4 rounded'>
                        <img  src={img11} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>
                            Hire for minimum 20 hours.</p>
                    </div>
                </div>




            </Row>



            <FAQ faqs={faqs} title="Frequently Asked Questions" />

            <SecEgt />

            <TestimonialCarousel />
            <ThirdSec />



        </>
    )
}