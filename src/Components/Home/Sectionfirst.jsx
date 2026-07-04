import { Row, Col } from 'react-bootstrap';
import bgimg from '../../../public/Image/Take-control-your-time-Background.webp';
import FormLayout from '../Form';
import userimg from '../../../public/Image/user.png';
import phoneimg from '../../../public/Image/ph.png';
import mailimg from '../../../public/Image/mail.png';
import compnayimg from '../../../public/Image/com.png';
import { FaCheck } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import smart from '../../../public/Image/smart-savings-optimized-service.webp';
import './Home.css'

export default function SectionFirst() {
    const bulletpoints = [
        "Strategic Outsourcing Solution",
        "Focus on Growth",
        "Integral Support",
        "Comprehensive Services",
        "Empower Strategic Vision"
    ];

    const formData = [
        { type: "text", placeholder: "Name", required: true, name: "name" },
        { type: "email", placeholder: "Email", required: true, name: "email" },
        { type: "tel", placeholder: "Phone Number", required: true, name: "phoneNumber" },
        { type: "text", placeholder: "Company Name", required: false, name: "CompanyName" }
    ];
    

    const icons = {
        'text': userimg,
        'email': mailimg,
        'number': phoneimg,
        'textarea': compnayimg,
    };

    const selectField1 = {
        type: 'Select',
        options: [
            { label: 'Accountants & Book keeping', value: 'general_enquiry' },
            { label: 'Virtual Assistants', value: 'book_appointment' },
            { label: 'Customer Service', value: 'book_appointment' },
            { label: 'Technical Support', value: 'book_appointment' },
            { label: 'Call Centre outsourcing', value: 'book_appointment' },
            { label: 'HR &  Recruitment', value: 'book_appointment' },
            { label: 'Admin & Data Entry', value: 'book_appointment' },
            { label: 'Sales Support', value: 'book_appointment' },
            { label: 'Social Media Management', value: 'book_appointment' },
        ],
        required: true
    };

    const smartsaving = [
        { name: "Efficiency & Savings", description: "Experience up to 70% cost savings." },
        { name: "Budget-Friendly", description: "We prioritize your budget, ensuring maximum value." },
        { name: "Tailored Solutions", description: "Services customized to meet your unique business needs." },
        { name: "Quality Assurance", description: "Reduce operational costs without compromising quality." },
        { name: "Precision Handling", description: "Tasks managed meticulously for your business to thrive." }
    ];

    return (
        <>
            <Row className="d-flex justify-content-center gap-xl-5 gap-md-3  gap-3 py-lg-5 py-sm-3 py-1
             py-2">
                <Col xs={11} md={11} sm={12} className="d-flex flex-column flex-md-row justify-content-center align-items-center py-sm-4 
                rounded" style={{
                    backgroundImage: `linear-gradient(to right, #00000099, #00000099), url(${bgimg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    <Col xs={11} md={5} lg={6} className="time-control-content">
                        <h1 className="hed1 text-white mt-md-0 mt-3">Take Control of Your Time</h1>
                        <p className="text-white para time-control-para">
                            Time is your most valuable asset in today's fast-paced business world. Recognizing this, we offer strategic outsourcing solutions designed to help you reclaim control of your schedule. By delegating time-consuming tasks to our dedicated virtual staff, you can redirect your focus towards what truly matters – nurturing the growth and success of your business.
                        </p>
                        <div className="time-control-features">
                            {bulletpoints.map((item, id) => (
                                <div key={id} className="time-control-feature para">
                                    <span className="time-control-check" aria-hidden="true">
                                        <FaCheck />
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} md={5}  sm={7} className="mt-4 mt-md-0 d-md-flex d-none">
                        <FormLayout
                            heading="Streamline Your Business Operations Today!"
                            formData={formData}
                            icons={icons}
                            selectField={selectField1}
                            para="Book A FREE 30-Minutes Consultation"
                        />
                    </Col>
                </Col>
            </Row>

            <Row className="d-sm-flex d-none justify-content-center align-items-center gap-lg-4 gap-2">
                <Col xs={12} md={5}>
                    <h1 className="hed1 ps-xl-5 ps-lg-0 ps-3  pb-2">Smart Savings & Optimized Service</h1>
                    {smartsaving.map((smart, id) => (
                        <ul key={id}>
                            <li className=" para" style={{ listStyle: "none" }}>
                                <BsCheck size={25} className="para" /> {smart.name} - {smart.description}
                            </li>
                        </ul>
                    ))}
                </Col>
                <Col xs={11} md={5}>
                    <img src={smart} alt="smart" className="img-fluid" />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center pt-md-5 pt-0">
                <Col xs={11} md={10} className="divfirst py-3">
                    <h1 className="hed1 text-center text-white">Tailor-Made Excellence</h1>
                    <p className="para text-white">
                        We take customization to the next level. Once you join forces with us, our seasoned experts work closely with you to craft a strategic game plan. This ensures that your virtual staff consistently deliver the right results, at the right time, and in the right way, leaving no room for compromise.
                    </p>
                </Col>
            </Row>
        </>
    );
}
