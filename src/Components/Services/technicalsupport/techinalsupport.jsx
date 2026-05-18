
import { Row, Col } from 'react-bootstrap'
import bannerImg from '../../../../public/Image/techsupportbanner.jpg'
import TestimonialCarousel from '../../Home/Section7'
import SecEgt from '../../Home/Section8'
import Section13 from '../../Home/Section13'
import techsec from '../../../../public/Image/technicalsection.png'
import techinalchunk from './technicalchunk.json'; // Import JSON data
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


export default function TechnicalSupport() {
    const benefits = [
        {
            title: "Strategic Growth Opportunity",
            subtitle: "Outsourcing IT help desk services allows businesses to fuel rapid growth by accessing specialized expertise and support."
        },
        {
            title: "Access to Professionals and Technology",
            subtitle: "Businesses can tap into dedicated professionals and cutting-edge technologies."
        },
        {
            title: "Streamlined Operations",
            subtitle: "Outsourcing helps streamline operations, boosting productivity and enabling businesses to prioritize core objectives."
        },
        {
            title: "Comprehensive Support",
            subtitle: "IT help desks address software glitches, resolve hardware malfunctions, and provide guidance on product usage."
        },
        {
            title: "Primary Customer Interface",
            subtitle: "Help desks serve as the main interface between customers and businesses."
        },
        {
            title: "Multi-Channel Availability",
            subtitle: "Services are available through phone support, email correspondence, live chat, and ticketing systems, catering to diverse customer preferences and needs."
        }
    ];



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
                    <h1 className="hed1 ">What does Virtual Tech support mean?</h1>
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
                <Col lg={5} xl={5} md={5} xs={11} className='pt-sm-0 pt-2'>
                    <img src={techsec} alt="texh" className='img-fluid' />
                </Col>
            </Row>




            <Row className='d-flex justify-content-center align-items-center '>
            <h1 className='hed1 text-center pb-sm-4 pb-2 pt-md-0 pt-3'>What Our Tech Support Team Offers.</h1>
                {/* Container for all cards */}
                <Col md={10} className='d-flex flex-wrap justify-content-center gap-md-4 ga-sm-3 gap-xs-2 gap-1'>
                    {techinalchunk.map((tech, index) => (
                        <Col key={index} lg={3} md={6} xs={11} className='d-flex justify-content-center mb-md-4'>
                            <a href={tech.link} className='text-decoration-none'>
                                <div className='all-tech-div text-center'>
                                    <h3>{tech.title}</h3>
                                    <p>{tech.description}</p>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-md-5 py-xs-3 py-2 pb-md-0 pb-5'
             style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
                <h1 className='hed1 text-center pb-md-4 pb-xs-3 pb-2 text-white'>Why Outsource2Backoffice?</h1>
                <div className='d-flex justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 '>
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
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 d-md-block d-none'>
                        <img src={img10} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 Set-up Fees</p>
                    </div>
                </div>
                <div className='d-md-flex d-none justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center acc-sec-icon-div-2 d-md-block d-none'>
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





            <TestimonialCarousel />
            <SecEgt />
            <div className='mt-sm-5 mt-2'>
            <Section13 />
            </div>

          
        </>

    )
}