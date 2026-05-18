import banner from '../../../public/Image/contact us.png'
import { Row, Col, Form } from 'react-bootstrap'
import bg from '../../../public/Image/subscription-bg--desktop.webp'
import { FaPhoneAlt } from 'react-icons/fa';
import location from '../../../public/Image/loc.png';
import mail from '../../../public/Image/mailfooter.png';
import FormLayout from '../Form';
import '../Home/Home.css'
export default function Contact() {
    const bulletpoints = [
        "Strategic Outsourcing Solution",
        "Focus on Growth",
        "Integral Support",
        "Comprehensive Services",
        "Empower Strategic Vision"

    ]
    const formData = [
        {
            type: 'text',
            placeholder: 'Name',
            required: true,
            name: 'name'  // This matches the formValues state key
        },
        {
            type: 'email',
            placeholder: 'Email',
            required: true,
            name: 'email'  // This matches the formValues state key
        },
        {
            type: 'tel',  // Changed from 'number' to 'tel' for phone numbers
            placeholder: 'Phone',
            required: true,
            name: 'phoneNumber'  // This matches the formValues state key
        },
        {
            type: 'text',  // Changed from 'textarea' to 'text'
            placeholder: 'Company Name',
            required: true,
            name: 'CompanyName'  // This matches the formValues state key
        }
    ];

    const selectField = {
        type: 'select',
        placeholder: 'Service Type',
        options: [
            { label: 'Service Type', value: '', disabled: true },
            { label: 'Accountants & Book keeping', value: 'Accountants & Book keeping' },
            { label: 'Virtual Assistants', value: 'Virtual Assistants' },
            { label: 'Customer Service', value: 'Customer Service' },
            { label: 'Technical Support', value: 'Technical Support' },
            { label: 'Call Centre outsourcing', value: 'Call Centre outsourcing' },
            { label: 'HR &  Recruitment', value: 'HR &  Recruitment' },
            { label: 'Admin & Data Entry', value: 'Admin & Data Entry' },
            { label: 'Sales Support', value: 'Sales Support' },
            { label: 'Social Media Management', value: 'Social Media Management' }
        ],
        required: true
    };



    return (
        <>
            <Row >
                <img src={banner} alt="bannr" className='img-fluid object-cover' />

            </Row>

            <Row className="py-lg-5 py-md-3 py-2 position-relative overflow-hidden d-flex justify-content-center align-items-center">
                <h1 className='hed1 text-center fw-medium pb-lg-5 pb-md-3 pb-4 pt-md-0 pt-3' style={{ color: "#0C0649" }}>Get In Touch</h1>
                <Col lg={5} xl={5} xs={10} className="p-0  align-items-center flex-column">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.611445820101!2d145.0341216894053!3d-37.845981263589685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6421a9a096b7f%3A0x5be9b9de917a161!2s23%20Milton%20Parade%2C%20Malvern%20VIC%203144%2C%20Australia!5e0!3m2!1sen!2sin!4v1721712187712!5m2!1sen!2sin"
                            width="100%"
                            height="450px"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Col>
                <Col lg={5} xl={5} xs={11} className="d-flex align-items-center justify-content-center py-sm-0 py-2">
                    <FormLayout
                        heading="Streamline Your Business Operations Today!"
                        formData={formData}
                        selectField={selectField}
                        para="Book A FREE 30-Minutes Consultation"
                    />

                </Col>
                <div className="position-absolute opacity-20 d-md-block d-none" style={{ width: '250px', height: '250px', borderRadius: '50%', top: '-100px', right: '-100px', backgroundColor: "#0C0649" }}></div>
                <div className="position-absolute opacity-20 d-md-block d-none" style={{ width: '150px', height: '150px', borderRadius: '50%', bottom: '-75px', left: '-75px', backgroundColor: "#FE5A0E" }}></div>
            </Row>


            <Row
                className='d-flex justify-content-center py-lg-5 py-md-3 py-3 mt-lg-5 mt-sm-3 mt-2'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }} >
                <Col md={9} xl={9} lg={10} xs={10} className=' py-lg-5 py-md-3 py-3' >
                    <div className='d-flex flex-sm-row flex-column gap-2 '>
                        <div className='shadow p-4 col-md-3 col-xl-3 d-flex flex-column
                         align-items-center justify-content-center bg-white'>
                            <img src={location} className='img-fluid' />
                            <h4 className='mt-3 hed3' style={{ color: "#46A4D9" }}>Our Location</h4>
                            <p className='para text-center'>Australia - 23 Milton Parade
                             Canada – Vancouver, BC  </p>
                        </div>
                        <div className='shadow p-4 col-md-3 col-xl-3 bg-white d-flex flex-column align-items-center justify-content-center'>

                            <a href="https://wa.me/0489276638" target="_blank" rel="noopener noreferrer" className='text-decoration-none d-flex flex-column align-items-center justify-content-center'>
                                <FaPhoneAlt size={20} color="#FF631A" />
                                <h4 className='mt-3 hed3' style={{ color: "#46A4D9" }}>Call Us</h4>
                                <p className='para'>0489276638</p>
                            </a>

                        </div>
                        <div className='shadow p-2 col-md-3 col-xl-3 d-flex flex-column align-items-center justify-content-center bg-white'>
                        <a href="mailto:info@outsource2backoffice.com" className="footer-link
                                text-decoration-none  d-flex flex-column align-items-center justify-content-center">
                                <img src={mail} className='img-fluid' />
                                <h4 className='mt-3 hed3' style={{ color: "#46A4D9" }}>Email Us</h4>
                                <p className='para text-wrap text-center' style={{  wordBreak: "break-word" }}>
                                    info@outsource2backoffice.com
                                </p>
                            </a>
                        </div>
                          </div>
                   
                </Col>
            </Row>
          
        </>
    )
}