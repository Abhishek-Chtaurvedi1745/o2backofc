import banner from '../../../../public/Image/customer-banner.jpg'
import { Row, Col } from 'react-bootstrap'
import img1 from '../../../../public/Image/icon6 (6).png';
import img2 from '../../../../public/Image/icon6 (5).png';
import img3 from '../../../../public/Image/icon6 (4).png';
import img4 from '../../../../public/Image/icon6 (3).png';
import img5 from '../../../../public/Image/icon6 (2).png';
import img6 from '../../../../public/Image/icon6 (1).png';
import img7 from '../../../../public/Image/customer-sec.png';
import img8 from '../../../../public/Image/icon7 (7).png';
import img9 from '../../../../public/Image/icon7 (6).png';
import img10 from '../../../../public/Image/icon7 (5).png';
import img11 from '../../../../public/Image/icon7 (4).png';
import img12 from '../../../../public/Image/icon7 (3).png';
import img13 from '../../../../public/Image/icon7 (2).png';
import img14 from '../../../../public/Image/icon7 (1).png';
import img15 from '../../../../public/Image/icon7 (8).png';
import TestimonialCarousel from '../../Home/Section7'
import check from '../../../../public/Image/Mask group (2).png';
import ThirdSec from '../../Home/ThirdSec';
import SecEgt from './../../Home/Section8';


export default function Customer() {
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
            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2' style={{ backgroundColor: "#4747475" }}
            >
                <h1 className='hed1 text-center pb-md-4 pb-0'>Why Outsource2Backoffice?</h1>
                <div className='d-flex flex-wrap justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-12 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 text-center  col-4 acc-sec-icon-div-2 '>
                        <img src={img15} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Upto 70% cost
                            Reduction</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center col-4  acc-sec-icon-div-2'>
                        <img src={img8} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Highly qualified
                            assistant</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 d-md-block d-none'>
                        <img src={img9} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>No Lock-in Contracts</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center col-3  acc-sec-icon-div-2'>
                        <img src={img10} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 Set-up Fees</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                  col-11 gap-lg-5 ga-md-3 gap-sm-2 gap-2 mb-lg-5 mb-sm-3 mb-2'>
                    <div className='col-lg-2 col-md-2 col-4 text-center acc-sec-icon-div-2'>
                        <img src={img14} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>0 charges for staff
                            change</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center col-4  acc-sec-icon-div-2'>
                        <img src={img12} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>24x7 service</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  col-4  acc-sec-icon-div-2' >
                        <img src={img13} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>Fixed hourly rate</p>
                    </div>
                    <div className='col-lg-2 col-md-2 text-center  acc-sec-icon-div-2 d-md-block d-none'>
                        <img src={img11} alt="sec-img" className='img-fluid' />
                        <p className='para pt-2 text-black'>
                            Hire for minimum 20 hours.</p>
                    </div>
                </div>




            </Row>

            <Row style={{ backgroundColor: "#061B49" }} className='py-lg-5 py-md-3 py-2 d-flex justify-content-center align-items-center'>
                <Col lg={10} md={10} xl={10} xs={11} >
                    <h1 className='hed1 text-white text-center '>Benefits of outsourcing customer service <br />
                        representative roles</h1>
                    {/* <p className='para text-white text-center'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p> */}
                    <div className='d-flex  flex-wrap justify-content-center align-items-center gap-lg-4 gap-md-3 gap-sm-2 gap-1 mt-md-5 mt-3'>
                        <div className='bg-light col-lg-3 col-sm-4 col-12 py-4 px-3  w-20'>
                            <img src={img1} alt="icon-6" className='img-fluid' /> <br></br>
                            <h3 className='hed3 pt-2 '>Reduced Costs</h3>
                            <p className=' para'>Save up to 70% on employment costs. </p>
                        </div>
                        <div className='bg-light col-lg-3 col-sm-4 col-12 py-4 px-3   w-20'>
                            <img src={img2} alt="icon-6" className='img-fluid' /> <br />
                            <h3 className='hed3 pt-2'>Expert support</h3>
                            <p className=' para'>Outsourced provider ensures success. </p>
                        </div>
                        <div className='bg-light col-lg-3  col-sm-4  col-12 py-4 px-3 '>
                            <img src={img3} alt="icon-6" className='img-fluid' /> <br />
                            <h3 className='hed3 pt-2'>Improve staff satisfaction</h3>
                            <p className=' para'>Increase satisfaction, decrease attrition.</p>
                        </div>

                    </div>
                    <div className='d-flex flex-wrap justify-content-center align-items-center gap-lg-4 gap-md-3 gap-sm-2 gap-1 mt-md-5 mt-3'>
                        <div className='bg-light col-lg-3 col-sm-4  py-4 px-3  col-12 w-20'>
                            <img src={img4} alt="icon-6" className='img-fluid' /> <br></br>
                            <h3 className='hed3 pt-2 '>Business growth</h3>
                            <p className=' para'>Foster sustainable longevity. </p>
                        </div>
                        <div className='bg-light col-lg-3 col-sm-4 py-4 px-3  col-12  w-20'>
                            <img src={img5} alt="icon-6" className='img-fluid' /> <br />
                            <h3 className='hed3 pt-2 '>flexibility and availability </h3>
                            <p className=' para'></p>Increase agility, ensure availability.
                        </div>
                        <div className='bg-light col-lg-3  col-sm-4 col-12 py-4 px-3 '>
                            <img src={img6} alt="icon-6" className='img-fluid' /> <br />
                            <h3 className='hed3 pt-2 '>Access a global talent pool</h3>
                            <p className=' para'>Access global talent,candidates</p>
                        </div>

                    </div>
                </Col>

            </Row>
            <Row className='py-lg-5 py-sm-3 py-2 d-flex justify-content-center align-items-center'>
                <Col lg={5} md={5} xl={5} xs={11}>
                    <h1 className='hed1'>Why is Customer
                        Support Vital?</h1>
                    <div className='para'>
                        <div className='para'>
                            <span className='hed4'>Multi-Channel Integration </span> - Use multiple channels, including voice and non-voice
                            services, to enhance business growth by understanding and addressing customer
                            needs.

                        </div>
                        <div className='para pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4'>Comprehensive Service Platforms </span> - Provide outstanding customer experiences
                            through telephone calls, emails, web chat sessions, SMS, and other self-service
                            mediums.

                        </div>
                        <div className='para pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4'>Experienced Team </span> - Our highly experienced inbound customer service
                            representatives focus on care and respect for your valued customers.
                            mediums.

                        </div>
                        <div className='para pt-md-3 pt-sm-2 pt-1'>
                            <span className='hed4'>    Commitment to Excellence </span> - Strive to exceed customer expectations in every
                            interaction, ensuring their satisfaction and loyalty to your brand.

                        </div>

                    </div>



                </Col>
                <Col lg={5} xl={5} md={5} xs={11}>
                    <img src={img7} alt="sec-image" className='img-fluid pt-sm-0  pt-2' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-md-3 py-2' style={{backgroundColor:"#80808007"}}>
            <h1 className='hed1 text-center pb-1'>What does a customer service representative
                    do?</h1>
                    <h2 className='hed4 text-center' style={{ color: "#FE5A0E" }}>The duties and tasks of a customer service representative may include:</h2>
                <Col  md={10} xs={11} className='d-flex justify-content-center align-items-center'>
                    <div className='customer-div-list'>
                        <ul>
                            <li className='para'>
                                <img src={check} alt="check" className='img-fluid' />Communicating with clients via various channels such as social media platforms, email, or phone.</li>
                            <li className='para'>
                                <img  src={check} alt="check" className='img-fluid' />Acknowledging and resolving customer complaints or issues on time.</li>
                            <li className='para'>
                                <img  src={check} alt="check" className='img-fluid' />Leveraging extensive product knowledge to facilitate order processing and customer applications.</li>
                            <li className='para'>
                                <img  src={check} alt="check" className='img-fluid' />Recording customer interactions on CRM database systems to track product issues, complaints, and previous
                                transactions effectively.</li>
                        </ul>
                        <p className='para text-center col-md-12'>These customer service responsibilities are well-suited for outsourcing. By outsourcing these tasks to Outsource 2 Backoffice customer service representatives, 
                        organizations can save their local service teams' time, allowing them to focus on higher-value, revenue-generating activities.</p>

                    </div>

                </Col>
               
            </Row>


            <ThirdSec />

            <TestimonialCarousel />
            <SecEgt />



        </>
    )
}