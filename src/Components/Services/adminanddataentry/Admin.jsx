import { Row, Col } from 'react-bootstrap'
import banner from '../../../../public/Image/admin and data antery-banner.png'
import React from 'react';
import img1 from '../../../../public/Image/acountingand-finacne-data.png';
import img2 from '../../../../public/Image/shipping-records.png';
import img3 from '../../../../public/Image/company-payroll.png';
import img4 from '../../../../public/Image/operations-data.png';
import img5 from '../../../../public/Image/crucial-data.png';
import bg from '../../../../public/Image/bg-accounts.png';
import beyondcost from '../../../../public/Image/beyond-cost-saving.png'
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
import TestimonialCarousel from '../../Home/Section7';
import SecEgt from '../../Home/Section8';
import FAQ from '../../Home/faq';
import '../Accounts/Accounts.css'
export default function Admin() {
  const array = [
    { "title": "Expert Team", "description": "Our highly experienced professionals ensure efficient handling of admin and data entry tasks, allowing your in-house staff to focus on core business activities." },
    { "title": "Cost Savings Beyond Finances", "description": "While saving costs is important, our services offer additional benefits such as improved efficiency and resource allocation." },
    { "title": "Scalable and Flexible Solutions", "description": "We provide scalable solutions that adapt to your changing needs, ensuring that our services align with your business growth and requirements." },
    { "title": "Quality Control Measures", "description": "Our efficient quality control processes maintain accuracy and compliance, ensuring reliable and precise handling of tasks." },
    { "title": "Advanced Technologies", "description": "Utilizing advanced technologies and resources, we enhance the effectiveness of admin and data entry processes, leading to improved customer experiences and satisfaction." },
  ];
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
      <Row className="d-md-flex d-none  justify-content-center align-items-center py-sm-5 py-2 ">
        <h1 className='hed1 text-center pb-sm-4 pb-2'>Experience in multiple domains</h1>
        <Col md={10} sm={10} xs={11} className="d-flex  flex-wrap justify-content-center align-items-center  gap-sm-5  gap-2">
          <div className='shadow bg-white p-2 d-flex flex-column  justify-content-center align-items-center'>
            <img  src={img1} alt="Accounting and 
        Finance Data"  className='img-fluid' />
            <h4 className='hed4 pt-3 text-center'>Accounting and
              Finance Data</h4>
          </div>
          <div className='shadow bg-white p-2 d-flex flex-column  justify-content-center align-items-center'>
            <img  src={img2} alt="Shipping Records" className='img-fluid' />
            <h4 className='hed4 pt-3 text-center'>Shipping Records</h4>
          </div>
          <div className='shadow bg-white p-2 d-flex flex-column  justify-content-center align-items-center rounded'>
            <img  src={img3} alt="Company Payroll" className='img-fluid' />
            <h4 className='hed4 pt-3 text-center'>Company Payroll</h4>
          </div>

          <div className='shadow bg-white p-2 d-flex flex-column  justify-content-center align-items-center rounded'>
            <img  src={img4} alt="Operations Data" className='img-fluid' />
            <h4 className='hed4 pt-3 text-center'>Operations Data</h4>
          </div>
          <div className='shadow bg-white p-2 d-flex flex-column  justify-content-center align-items-center rounded'>
            <img  src={img5} alt="Crucial Data" className='img-fluid' />
            <h4 className='hed4 pt-3 text-center'>Crucial Data</h4>
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
          <h1 className='hed1 text-light ps-4'>Beyond Cost Saving</h1>
          <div>
            {array.map((item, id) => (
              <ul key={id} className='my-2'>
                <li className='para text-white' style={{ listStyle: "none" }}>
                  <img  src={check} alt="check" className='img-fluid' style={{ height: "20px" }} />
                  <span className='fw-bold'>{item.title}</span> -  {item.description}</li>
              </ul>
            ))}
          </div>

        </Col>
        <Col lg={5} md={5} xl={5} className='d-flex align-items-start'>
          <img  src={beyondcost} alt="sec-img" className='img-fluid' />
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
      <ThirdSec />
      <TestimonialCarousel />
      <SecEgt />
      <FAQ faqs={faqs} title="Frequently Asked Questions" />

    </>
  )
}

