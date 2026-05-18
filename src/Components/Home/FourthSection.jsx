import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgimg from '../../../public/Image/Group 1954.png'


const FourthSection = () => {
    return (
        <>
            <Row className='d-flex align-items-center justify-content-center pb-5'>
            <h1 className='hed1 text-black text-center pt-5' style={{color:"#323131"}}>How it Works</h1>
                <Col md={10} className='d-flex  flex-column align-items-center justify-content-center' >
                 <div  className='px-5'>
                 <img src={bgimg} alt="" className='img-fluid' />
                 </div>
                    <div >
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <div className='col-md-3'>
                                <h4 className='hed4 text-center ps-5' style={{ color: "#4DA8B4", marginTop: "-70px" }}>Book Free Consultation</h4>
                                <p className='para text-center ps-5' style={{ color: "#4DA8B4" }}>Help us understand your needs,
                                    <br/>We are in all ears.</p>
                            </div>
                            <div className='col-md-3'>
                                <h4 className='hed4 text-center' style={{ color: "#203461", marginTop: "-25px" }}>Get your Proposal</h4>
                                <p className='para text-center' style={{ color: "#203461" }}>Upon understanding your requirements
                                    we submit our tailor made proposal
                                    to match your business needs. We
                                    expect to submit this within
                                    7 days.</p>
                            </div>
                            <div className='col-md-3'>
                                <h4 className='hed4 text-center' style={{ color: "#CF714C", marginTop: "-28px" }}>Recruitment and Training</h4>
                                <p className='para text-center' style={{ color: "#CF714C" }}>We select 2-3 top candidates through our
                                    extensive recruitment process and select
                                    the best match for you and train recruited
                                    staff to match your business needs.</p>
                            </div>
                            <div className='col-md-3'>
                                <h4 className='hed4 text-center' style={{ color: "#CF62B0", marginTop: "-50px" }}>Get started</h4>
                                <p className='para text-center' style={{ color: "#CF62B0" }}>You will have ongoing check-ins to
                                    support both you and your recruited
                                    staff throughout your partnership
                                    with Outsource2backoffice.</p>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>

        </>
    );
};





export default FourthSection;