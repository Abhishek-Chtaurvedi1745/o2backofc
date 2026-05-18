
import { Row, Col } from 'react-bootstrap';
import bannerImg from '../../../../public/Image/social media out -banner.png';
import TestimonialCarousel from '../../Home/Section7';
import SecEgt from '../../Home/Section8';
import Section13 from '../../Home/Section13';
import socialmediasec from '../../../../public/Image/social-media.png';
import img8 from '../../../../public/Image/icon7 (7).png';
import img9 from '../../../../public/Image/icon7 (6).png';
import img10 from '../../../../public/Image/icon7 (5).png';
import img11 from '../../../../public/Image/icon7 (4).png';
import img12 from '../../../../public/Image/icon7 (3).png';
import img13 from '../../../../public/Image/icon7 (2).png';
import img14 from '../../../../public/Image/icon7 (1).png';
import img15 from '../../../../public/Image/icon7 (8).png';
import bg from '../../../../public/Image/Rectangle 275.png'
import '../Services.css'
import { useNavigate } from 'react-router-dom'
import blucechck from '../../../../public/Image/blucheck.png'
import '../Accounts/Accounts.css'


export default function SocialMedia() {
    const benefits = [
        {
            title: "Strategic Social Media Growth",
            subtitle: "Outsourcing social media tasks allows businesses to enhance their online presence and engage effectively with their audience."
        },
        {
            title: "Expert Management Across Platforms",
            subtitle: "Our team specializes in managing platforms like Facebook, Twitter, LinkedIn, Google+, and YouTube."
        },
        {
            title: "Advanced Tool Utilization",
            subtitle: "We use cutting-edge social media management tools to enhance performance and streamline processes."
        },
        {
            title: "Time Savings",
            subtitle: "Hiring our virtual assistants saves valuable time, allowing you to focus on your core business activities."
        },
        {
            title: "Enhanced Productivity",
            subtitle: "By outsourcing social media management, you can maximize productivity and efficiency in your business operations."
        },
        {
            title: "Engagement and Audience Building",
            subtitle: "Our virtual assistants engage across platforms, building and managing audiences to drive growth."
        }
    ];
    const array = [
        "Establishing and maintaining profiles across diverse social media platforms",
        "Conducting research, curating, and updating content on social channels",
        "Utilizing Buffer, Hootsuite, Social Sprout, and similar tools to schedule posts",
        "Engaging with and cultivating your audience on various social media channels",
        "Analyzing metrics to assess engagement across different social platforms",
        "Monitoring competitors' activities in the social media sphere",
        "Overseeing and executing social media campaigns",
        "Advertising your business on multiple social media platforms"
    ]




    const Navigate = useNavigate()
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
            <Row className='d-flex justify-content-center align-items-center pt-md-5 pt-sm-3 pt-0'>
                <Col md={5} lg={5} xl={5} xs={11} className='d-flex flex-column align-items-center justify-content-center pt-md-5 pt-sm-3 pt-3'>
                    <h1 className="hed1 ">What is Social Media Management Outsourcing?</h1>
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
                    <img  src={socialmediasec} alt="texh" className='img-fluid' />
                </Col>
            </Row>




            <Row className='d-flex justify-content-center align-items-center '>
                <h1 className='hed1 text-center pb-4 pt-md-0 pt-4'>What Our Social Media Team Offers.</h1>
                {/* Container for all cards */}
                <Col md={10} className='d-flex flex-wrap justify-content-center gap-md-3 ga-sm-3 gap-xs-2 gap-1'>
                    {array.map((tech, index) => (
                        <Col key={index} lg={2} md={10} xs={11} className='d-flex justify-content-center mb-md-4'>
                            <div className='all-social-media-div text-center'>
                                <p>{tech}</p>
                            </div>

                        </Col>
                    ))}
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





            <TestimonialCarousel />
            <SecEgt />
            <div className='mt-sm-5 mt-2'>
                <Section13 />
            </div>


        </>

    )
}