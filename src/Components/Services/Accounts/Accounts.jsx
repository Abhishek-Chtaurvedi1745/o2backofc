import { Row, Col } from 'react-bootstrap'
import banner from '../../../../public/Image/acccountant-banner.jpg';
import img1 from '../../../../public/Image/start-up-seminar-concept 1.png'
import img2 from '../../../../public/Image/icon1 (1).png';
import img3 from '../../../../public/Image/icon1 (2).png';
import img4 from '../../../../public/Image/icon1 (3).png';
import img5 from '../../../../public/Image/icon1 (4).png';
import bg from '../../../../public/Image/bg-accounts.png';
import img6 from '../../../../public//Image/acc-sec.png';
import img7 from '../../../../public/Image/acc-sec2.png'
import './Accounts.css'
import TestimonialCarousel from '../../Home/Section7';
import SecEgt from '../../Home/Section8';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FAQ from '../../Home/faq';
import check from '../../../../public/Image/check.png'
import img8 from '../../../../public/Image/icon2 (1).png';
import img9 from '../../../../public/Image/icon2 (2).png';
import img10 from '../../../../public/Image/icon2 (3).png';
import img11 from '../../../../public/Image/icon2 (4).png';
import img12 from '../../../../public/Image/icon2 (5).png';
import img13 from '../../../../public/Image/icon2 (6).png';
import img14 from '../../../../public/Image/icon2 (7).png';
import img15 from '../../../../public/Image/icon2 (8).png';
import ThirdSec from '../../Home/ThirdSec';

export default function Accounts() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
   
   
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
    
    
  
  const array= [
        { "title": "Initial Consultation", "description": "We begin with a consultation to understand your accounting needs, business goals, and preferences" },
        { "title": "Tailored Matching", "description": "We match you with a virtual accountant or team best suited to your industry and objectives" },
        { "title": "Seamless Integration", "description": "Our virtual accountants integrate into your existing workflows, ensuring a smooth transition with minimal disruption" },
        { "title": "Continouos Monitoring", "description": "We ensure high standards of quality, accuracy, and  efficiency through continuous performance monitoring." },
        { "title": "Continuous Improvement", "description": "We value your feedback and are committed to continuous improvement to meet your evolving needs." },
    ]
    
    const Navigate=useNavigate()
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


            <Row className='d-flex justify-content-evenly align-items-center  py-lg-5 py-md-3 py-2'>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <img src={img1} alt="img-1" className='img-fluid' />
                </Col>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed1 pt-md-0 pt-2'>How can a Virtual
                        Accountant Help me?</h1>
                    <p className='para'>
                        A virtual accountant can effectively change the way you manage your finances
                        by offering support and expertise specific to your needs without the overheads
                        of a full-time employee. Our virtual accountants are proficient in a variety of
                        accounting tasks, including bookkeeping, payroll processing, financial reporting,
                        tax preparation, and more. By outsourcing these critical functions to our team,
                        you can:
                    </p>
                    <div className='d-md-flex d-none flex-column gap-3 '>
                        <div className='d-flex gap-0'>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={img2} alt="img-2" className='img-fluid' style={{ height: "50px", width: "50px" }} />
                                <p className='hed3 m-0'>Ensure accuracy and compliance</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={img3} alt="img-2" className='img-fluid' style={{ height: "50px", width: "50px" }} />
                                <p className='hed3 m-0'>Save time and resources</p>
                            </div>
                        </div>
                        <div className='d-flex gap-5'>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={img4} alt="img-2" className='img-fluid' style={{ height: "50px", width: "50px" }} />
                                <p className='hed3 m-0'>Enhance scalability and  flexibility</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 ps-md-5 ps-lg-5 ps-xl-2'>
                                <img src={img5} alt="img-2" className='img-fluid' style={{ height: "50px", width: "50px" }} />
                                <p className='hed3 m-0 text-sm'>Gain access to specialized expertise</p>
                            </div>
                        </div>
                    </div>



                </Col>

            </Row>
            <Row className='d-md-flex d-none justify-content-center gap-5 align-items-center'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover', // Adjust this property as needed
                    backgroundPosition: 'center', // Adjust this property as needed
                    backgroundRepeat: 'no-repeat', // Adjust this property as needed
                    height: '100vh', // Adjust the height as needed
                }}

            >
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed1 text-light ps-4'>How does Virtual
                        Accountants work?</h1>
                        <div>
                            {array.map((item,id)=>(
                                <ul key={id} className='my-4'>
                                    <li className='para text-white' style={{listStyle:"none"}}>
                                    <img src={check} alt="check" className='img-fluid' style={{height:"20px"}} /> 
                                    <span className='fw-bold'>{item.title}</span> -  {item.description}</li>
                                </ul>
                            ))}
                        </div>
                    
                        {/* Working with a virtual accountant is simple and straightforward with
                        Outsource2Backoffice. Our process begins with consultation to understand your
                        accounting needs, business goals, and preferences in detail. Based on this
                        understanding, we carefully match you with a virtual accountant or team that
                        best suits your industry and objectives. Our virtual accountants seamlessly
                        integrate into your existing workflows and systems, ensuring a smooth transition
                        with minimal disruption to your operations. You'll have direct communication with
                        your dedicated virtual accountant, ensuring real-time collaboration, feedback,
                        and updates as needed. Continuous performance monitoring ensures that our
                        virtual accountants maintain high standards of quality, accuracy, and efficiency
                        in their work. We highly value your feedback and are committed to continuous
                        improvement, making necessary adjustments to meet your evolving needs and
                        expectations. With Outsource2Backoffice, experience unparalleled efficiency and
                        effectiveness in your accounting processes. */}
              
                </Col>
                <Col lg={5} md={5} xl={5} className='d-flex align-items-start'>
                    <img src={img6} alt="sec-img" className='img-fluid' />
                </Col>
            </Row>
            <Row className='py-lg-5 py-md-3 py-2 d-flex justify-content-center align-items-center'>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <img src={img7} alt="sec-img" className='img-fluid' />
                </Col>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed1 pt-md-0 pt-2'>Why hiring a Virtual
                        Accountant is better?</h1>
                  <div>
                  <div className='para pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4' >Cost Savings</span> - Save up to 70% on staffing costs by outsourcing to our efficient 
                            virtual accountants.
                        </div>
                        <div className='para  pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4' >Skilled Accountants</span> - Access a pool of experienced accountants without in-
                            house hiring.
                        </div>
                        <div className='para  pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4' >Scalability</span> - Scale your team up or down within a week with no long-term 
                            commitment
                        </div>
                        <div className='para  pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4' >Focus on Core Activities</span> - Outsource routine tasks and focus on core business 
                            activities.
                        </div>
                        <div className='para  pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4' >Accuracy and Compliance</span> - Ensure accuracy, compliance, and adherence to 
                            industry standards and regulations.
                        </div>
                  </div>
                </Col>
            </Row>
            {/* <Why /> */}
            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2' style={{ backgroundColor: "#4747475" }}
            >
                <h1 className='hed1 text-center pb-sm-4 pb-2'>Why Outsource2Backoffice?</h1>
                <div className='d-flex flex-wrap col-lg-12 col-xl-12 col-md-12 
                  col-12 gap-lg-5 gap-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2  justify-content-center align-items-center '>
                    <div className='col-lg-2 col-md-2 col-5 text-center  acc-sec-icon-div-2'>
                        <img src={img15} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Upto 70% cost
                            Reduction</p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-5 text-center  acc-sec-icon-div-2'>
                        <img src={img8} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Highly qualified
                            assistant</p>
                    </div>
                    <div className='col-lg-2 col-md-2  col-5 text-center  acc-sec-icon-div-2'>
                        <img src={img9} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>No Lock-in Contracts</p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-5 text-center  acc-sec-icon-div-2'>
                        <img src={img10} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 Set-up Fees</p>
                    </div>
                </div>
                <div className='d-md-flex flex-wrap d-none col-lg-12 col-xl-12 col-md-12 
                  col-11 gap-lg-5 gap-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2  justify-content-center align-items-center '>
                    <div className='col-lg-2 col-md-2 text-center acc-sec-icon-div-2'>
                        <img src={img14} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 charges for staff
                            change</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img12} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>24x7 service</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2' >
                        <img src={img13} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Fixed hourly rate</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img11} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>
                            Hire for minimum 20 hours.</p>
                    </div>
                </div>




            </Row>
         
<ThirdSec/>
            <TestimonialCarousel />
            <SecEgt />
            <FAQ faqs={faqs} title="Frequently Asked Questions" />


        </>
    )
}