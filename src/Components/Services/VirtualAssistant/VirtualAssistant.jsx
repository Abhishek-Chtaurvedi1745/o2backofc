
import { Row, Col } from 'react-bootstrap'
import bannerImg from '../../../../public/Image/virtual assitant banner.jpg'
import Why from '../Accounts/Why'
import FirstComponent from '../../AboutUs/FirstComponent'
import img1 from '../../../../public/Image/virtual-2.png'
import img2 from '../../../../public/Image/virtual-sec.png'
import bgimg from '../../../../public/Image/virtual-sec3.png'
import img3 from '../../../../public/Image/virtual-sec4.png'
import img8 from '../../../../public/Image/icon2 (1).png';
import img9 from '../../../../public/Image/icon2 (2).png';
import img10 from '../../../../public/Image/icon2 (3).png';
import img11 from '../../../../public/Image/icon2 (4).png';
import img12 from '../../../../public/Image/icon2 (5).png';
import img13 from '../../../../public/Image/icon2 (6).png';
import img14 from '../../../../public/Image/icon2 (7).png';
import img15 from '../../../../public/Image/icon2 (8).png';
import TestimonialCarousel from '../../Home/Section7'
import Section13 from '../../Home/Section13'
import FAQ from '../../Home/faq'
import bg from '../../../../public/Image/SDFGVNB 1.png'
import ThirdSec from '../../Home/ThirdSec'
import { useNavigate } from 'react-router-dom'

export default function VirtualAssistant() {
    const faqs = [
        {
            question: "What tasks can Virtual Assistants from Outsource2backoffice handle?",
            answer: "Virtual Assistants from Outsource2backoffice can handle a wide range of tasks, including administrative support, calendar management, email management, customer service, data entry, social media management, research, and more. Our Virtual Assistants are skilled professionals who can take on various responsibilities to help your business operate more efficiently."
        },
        {
            question: "How can outsourcing tasks to Virtual Assistants benefit my business?",
            answer: "Outsourcing to Virtual Assistants can significantly reduce your operational costs, allowing you to allocate resources more effectively. By leveraging the expertise of our Virtual Assistants, you can focus on core business activities, increase productivity, and achieve growth. Our services provide flexibility, scalability, and access to a global talent pool, helping your business expand without the need for additional in-house staff."
        },
        {
            question: "How do you ensure the quality and reliability of your Virtual Assistants?",
            answer: "We ensure the quality and reliability of our Virtual Assistants through a rigorous recruitment and selection process. Candidates undergo thorough background checks, skills assessments, and interviews to ensure they meet our high standards. We also provide continuous training and performance monitoring to ensure our Virtual Assistants consistently deliver excellent service."
        },
        {
            question: "What measures do you take to protect my business data when using Virtual Assistants?",
            answer: "Data security is a top priority at Outsource2backoffice. We implement comprehensive security protocols, including data encryption, secure access controls, and regular security audits, to protect your business information. Our Virtual Assistants are trained on data protection policies and compliance standards to ensure the confidentiality and security of your data."
        },
        {
            question: "How do I get started with outsourcing Virtual Assistants from Outsource2backoffice?",
            answer: "Getting started is easy. Contact us through our website or call us to schedule a consultation. Our team will discuss your specific needs, provide a detailed overview of our Virtual Assistant services, and help you develop a customized outsourcing plan. We are committed to ensuring a smooth and efficient transition, enabling you to fully benefit from outsourcing with Outsource2backoffice."
        }
    ];
    const Navigate=useNavigate()

    return (
        <>
<Row className="d-flex justify-content-center align-items-center px-0 position-relative">
  <img src={bannerImg} className="img-fluid w-100 position-" alt="First slide" />
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
          
            {/* <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2' style={{ backgroundColor: "#4747475" }}
            >
                <h1 className='hed1 text-center pb-lg-4 pb-md-3 pb-2'>Why Outsource to Backoffice</h1>
                <div className='d-flex justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img15} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Upto 70% cost
                            Reduction</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img8} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Highly qualified
                            assistant</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img9} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>No Lock-in Contracts</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2'>
                        <img src={img10} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 Set-up Fees</p>
                    </div>
                </div>
                <div className='d-flex col-lg-12 col-xl-12 col-md-12   justify-content-center align-items-center 
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
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




            </Row> */}
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

            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2'>
                <Col lg={5} xl={5} md={5} xs={11}>
                    <img src={img1} alt="img1" className='img-fluid' />
                </Col>
                <Col lg={4} xl={4} md={4} xs={11}>
                    <h1 className='hed1 pt-sm-0 pt-2'>What can a virtual
                        Assistant do?</h1>

                    <div className='para pt-md-3 pt-sm-2 pt-0'>
                        <span className='hed4'>Manageable Workload</span> - Struggling with unmanageable work pressure, even with a
                        manageable workload, can be alleviated with help.
                    </div>
                    <div className='para pt-md-3 pt-sm-2 pt-1'>
                        <span className='hed4' >Virtual Assistant Capabilities</span> - A virtual assistant can handle tasks such as managing
                        your calendar, answering emails, conducting research, making calls, and more.
                    </div>
                    <div className='para pt-md-3 pt-sm-2 pt-1'>
                        <span className='hed4' >Affordability and Effectiveness</span> - Virtual assistants offer a cost-effective and efficient
                        solution for managing repetitive tasks and reducing work pressure.
                    </div>
                </Col>

            </Row>
            <Row className=' d-md-flex d-none py-sm-5 py-3 justify-content-center align-items-center'
                style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <Col xl={10} lg={10} md={10} xs={11}>

                    <div className='col-lg-5 col-xl-5  col-xs-11 justify-content-center align-items-center ps-md-5'>
                        <h1 className='hed1'>How Does a Virtual
                            Assistant work?</h1>

                        <div className='para pt-2'>
                            <span className='hed4'>Calendar and Appointments</span> -  Managing and updating the client’s calendar
                            and appointments..
                        </div>
                        <div className='para pt-2'>
                            <span className='hed4' >Email and Call Management</span> -  Answering and managing emails and calls on
                            behalf of the client.
                        </div>
                        <div className='para pt-2'>
                            <span className='hed4' >Streamlining Work</span> - Performing monotonous tasks to streamline the client's
                            work and allow focus on core responsibilities.
                        </div>
                        <div className='para pt-2'>
                            <span className='hed4' >Additional Tasks</span> -  Conducting research, updating events (e.g., weather),
                            setting alarms and reminders, handling social media, managing finances,
                            providing translations, and more.
                        </div>
                        <div className='para pt-2'>
                            <span className='hed4' >Small Tasks</span> - Ordering products, sending messages, and managing a to-
                            do list.
                        </div>
                    </div>
                </Col>
                {/* <Col lg={4} xl={4} md={4}>
                    <img src={img2} alt="img1" className='img-fluid' />
                </Col> */}

            </Row>


            <Row className='d-flex justify-content-center gap-1 align-items-center mt-sm-5 mt-2'
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover', // Adjust this property as needed
                    backgroundPosition: 'center', // Adjust this property as needed
                    backgroundRepeat: 'no-repeat', // Adjust this property as needed

                }}>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h2 className='hed1 text-white mb-md-4 mt-md-0 mt-3' >How to get start?</h2>
                    < div className='para text-white my-2' >Thinking about how to start? Don’t worry, we have got you covered. Getting your
                        Virtual Assistant is a simple 3 step process,
                    </div>
                    <div className='py-md-3 py-xs-2 py-1 text-white para'>
                        1.Click the button below and start
                        the process of hiring your offshore VA.
                    </div>
                    <div className='py-md-3 py-xs-2 py-1 text-white para'>

                        2.
                        Fill the form so that we can provide
                        you an offer based on your requirement </div>
                    <div className='py-md-3 py-xs-2 py-1 text-white para'>
                        3. click “Submit”
                    </div>
                    <div className='py-md-3 py-xs-2 py-1 text-white para'>
                        And that’s it, That’s how you can get your Virtual assistant at the most affordable
                        price.
                    </div>



                </Col>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <img src={img3} alt="vitual-sec-4" className='img-fluid' />

                </Col>

            </Row>


            <TestimonialCarousel />
            <ThirdSec />
            {/* <SecEgt /> */}
            <FAQ faqs={faqs} title="Frequently Asked Questions" />

            <Section13 />
        </>

    )
}