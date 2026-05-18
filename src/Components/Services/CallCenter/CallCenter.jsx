import { Row, Col } from 'react-bootstrap'
import banner from '../../../../public/Image/call-center-banner.png';
import img1 from '../../../../public/Image/call-center-icons-why-choose (4).png';
import img2 from '../../../../public/Image/call-center-icons-why-choose (3).png';
import img3 from '../../../../public/Image/call-center-icons-why-choose (2).png';
import img4 from '../../../../public/Image/call-center-icons-why-choose (1).png';
import bg from '../../../../public/Image/bg-accounts.png';
import img5 from '../../../../public//Image/what we can do for you call centre.webp';
import img8 from '../../../../public/Image/order-processing.png';
import img7 from '../../../../public/Image/call-center-inbound-our-services.png';
import img10 from '../../../../public/Image/call-center-outbound-serviec.png'
import img9 from '../../../../public/Image/techinal-support.png';
import img11 from '../../../../public/Image/telemarketing.png';
import img12 from '../../../../public/Image/lead-genration.png';
import img13 from '../../../../public/Image/feedback.png';
import img14 from '../../../../public/Image/custom-solutions.png';
import img15 from '../../../../public/Image/advanced-technology.png';
import img16 from '../../../../public/Image/scalibilty.png';
import img17 from '../../../../public/Image/focus.png';
import img18 from '../../../../public/Image/customer-experience.png';
import TestimonialCarousel from '../../Home/Section7';
import SecEgt from '../../Home/Section8';
import ButtonlayOutDynamic from '../../Button/Button';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import FAQ from '../../Home/faq';
import check from '../../../../public/Image/check.png'
import ThirdSec from '../../Home/ThirdSec';


export default function Callcenter() {
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



    const array = [
        { "title": "Expertise and Experience", "description": "With over 10 years of experience and a dedicated team, we are a trusted partner for all your call center outsourcing needs." },

        { "title": "Comprehensive Solutions", "description": "We offer a range of solutions including customer inquiries, order processing, technical support, and more, ensuring each interaction positively reflects your brand" },

        { "title": "24/7 Support", "description": "Our 24/7 support ensures that your customers receive prompt and efficient assistance, regardless of the time or location." },

        { "title": "Inbound and Outbound Services", "description": " We provide both inbound and outbound call services, including telemarketing, lead generation, and customer feedback collection." },

        { "title": "Specialized Services", "description": " Our specialized services, such as multilingual support and custom solutions, cater to diverse customer bases and unique business requirement" },


        { "title": "Business Benefits", "description": "Outsourcing to us allows you to focus on core business activities while benefiting from reduced operational costs, scalable services,and enhanced customer experiences" },
    ]

    const Navigate = useNavigate()
    return (
        <>
            <Row>
                <img src={banner} alt="banner-call-center-outsourcing" className='img-fluid px-0' />
            </Row>
            <Row className='d-md-flex  justify-content-center  align-items-center py-lg-5 py-2'>
                <h1 className='hed1 text-center'> Why Choose Our Call Center OutSourcing</h1>
                <Col md={10} xs={11}>
                    <div className='d-flex flex-wrap'>
                        <div className='d-flex  flex-column justify-content-center align-items-center col-sm-3 col-6'
                            style={{ cursor: "pointer" }}>
                            <img src={img1} alt="icon-1" className='img-fluid mt-sm-4 mt-0' />
                            <h4 className='hed3 text-center pt-2'> Expert Team</h4>
                            <p className='para pt-0 text-center'>Skilled agents with excellent
                                communication skills ensurehigh-
                                quality customer interactions.</p>
                        </div>
                        <div className='d-flex  flex-column justify-content-center align-items-center  col-sm-3  col-6'>
                            <img src={img2} alt="icon-1" className='img-fluid' />
                            <h4 className='hed3 text-center pt-2'> 24/7 Support</h4>
                            <p className='para pt-0 text-center'>
                                Round-the-clock service to cater to
                                your global customer base.</p>
                        </div>
                        <div className='d-flex  flex-column justify-content-center align-items-center  col-sm-3  col-6'
                            style={{ cursor: "pointer" }}>
                            <img src={img3} alt="icon-1" className='img-fluid' />
                            <h4 className='hed3 text-center pt-2'>All-Language Support</h4>
                            <p className='para pt-0 text-center'>Multilingual capabilities to effectively
                                serve diverse customer needs.</p>
                        </div>
                        <div className='d-flex  flex-column justify-content-center align-items-center  col-sm-3  col-6' style={{ cursor: "pointer" }}>
                            <img src={img4} alt="icon-1" className='img-fluid' />
                            <h4 className='hed3 text-center pt-2'>Cost-Effective Solutions</h4>
                            <p className='para pt-0 text-center'>Reduce operational costs without
                                compromising on service quality.</p>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row className='d-md-flex d-none justify-content-center gap-5 py-5 align-items-center'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover', // Adjust this property as needed
                    backgroundPosition: 'center', // Adjust this property as needed
                    backgroundRepeat: 'no-repeat', // Adjust this property as needed
                    height: 'auto', // Adjust the height as needed
                }} 

            >
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed1 text-light ps-4 mb-3 mt-5'>Transform Your
                        Customer Service
                        Experience</h1>
                    <div>
                        {array.map((item, id) => (
                            <ul key={id} className='my-2'>
                                <li className='para text-white' style={{ listStyle: "none" }}>
                                    <img src={check} alt="check" className='img-fluid' style={{ height: "20px" }} />
                                    <span>
                                        <span className='fw-bold'>{item.title}</span> - <span className='fw-normal text:xs'>{item.description}</span>
                                    </span>

                                </li>

                            </ul>
                        ))}
                    </div>

                </Col>
                <Col lg={5} md={5} xl={5} className='d-flex align-items-start'>
                    <img src={img5} alt="sec-img" className='img-fluid' />
                </Col>
            </Row>
            <Row className='py-lg-5 py-md-3 py-2 d-flex justify-content-center align-items-center'>
                <h1 className='hed1 text-center'>Our Services</h1>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed2 pt-md-0 pt-2 text-center'>Inbound Call Handling</h1>
                    <div className='d-flex flex-wrap justify-content-center align-items-center pt-3'>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img2} alt="Customer Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Customer Support</h3>
                            <p className='para text-center'>Address customer queries and
                                issues promptly.</p>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img8} alt="Order Processing" className='img-fluid mt-sm-3' />
                            <h3 className='hed3 pt-2 text-center'>Order Processing</h3>
                            <p className='para text-center'>Efficient handling of order
                                placements and tracking.</p>
                        </div>

                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img9} alt="Technical Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Technical Support</h3>
                            <p className='para text-center'>Expert assistance for technical
                                issues and troubleshooting.</p>


                        </div>


                    </div>
                </Col>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <img src={img7} alt="sec-img" className='img-fluid' />
                </Col>
                <Col lg={5} md={5} xl={5} xs={11} className='pt-5 d-sm-flex d-none'>
                    <img src={img10} alt="sec-img" className='img-fluid' />
                </Col>
                <Col lg={5} md={5} xl={5} xs={11} className='pt-sm-5 pt-2'>
                    <h1 className='hed2 pt-md-0 pt-2 text-center'>Outbound Call Services</h1>
                    <div className='d-flex flex-wrap justify-content-center align-items-center pt-3'>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img11} alt="Customer Support" className='img-fluid mt-sm-4 mt-0' />
                            <h3 className='hed3 pt-2 text-center'>Telemarketing</h3>
                            <p className='para text-center'>Promote your products and
                                services effectively.</p>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img12} alt="Order Processing" className='img-fluid ' />
                            <h3 className='hed3 pt-2 text-center'>Lead Generation</h3>
                            <p className='para text-center'>Identify and nurture potential
                                customers.</p>
                        </div>

                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img13} alt="Technical Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Surveys and Feedback</h3>
                            <p className='para text-center'>Collect valuable insights through
                                customer feedback.</p>
                        </div>


                    </div>
                </Col>
                <Col lg={5} md={5} xl={5} xs={11} className='pt-sm-5 pt-0 d-sm-none'>
                    <img src={img10} alt="sec-img" className='img-fluid' />
                </Col>

                <Col lg={5} md={5} xl={5} xs={11} className='pt-sm-5 pt-0'>
                    <h1 className='hed2 pt-md-0 pt-2 text-center'>Specialized Services</h1>
                    <div className='d-flex flex-wrap justify-content-center align-items-center '>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img14} alt="Customer Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Custom Solutions</h3>
                            <p className='para text-center'>Tailored services to meet your unique
                                business needs.</p>
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img15} alt="Order Processing" className='img-fluid mt-3' />
                            <h3 className='hed3 pt-2 text-center'>Advanced Technology</h3>
                            <p className='para text-center'>Utilize the latest technology for
                                efficient call management.
                                Benefits of Outsourcing to Us</p>
                        </div>

                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img16} alt="Technical Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Scalability</h3>
                            <p className='para text-center'>Easily adjust the level of service as
                                your business grows.</p>
                        </div>

                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img17} alt="Technical Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Focus on Core Activities</h3>
                            <p className='para text-center'>Free up your internal resources to
                                focus on key business areas.</p>
                        </div>

                        <div className='col-md-7 d-flex flex-column justify-content-center align-items-center '>
                            <img src={img18} alt="Technical Support" className='img-fluid' />
                            <h3 className='hed3 pt-2 text-center'>Enhanced Customer Experience</h3>
                            <p className='para text-center'>Professional handling of customer interactions
                                leads to higher satisfaction and loyalty.</p>
                        </div>


                    </div>
                </Col>
                <Col lg={5} md={5} xl={5} xs={11} className='pt-sm-5 pt-0 pb-sm-0 pb-5'>
                    <img src={img10} alt="sec-img" className='img-fluid' />
                </Col>

            </Row>
         
          
            <SecEgt />
           
            <TestimonialCarousel />
            <ThirdSec />
          
            <FAQ faqs={faqs} title="Frequently Asked Questions" />


        </>
    )
}