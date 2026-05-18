import banner from '../../../public/Image/aboutbanner.png'
import { Row, Col, } from 'react-bootstrap'
import img1 from '../../../public/Image/about-sec (2).png'
import img2 from '../../../public/Image/about-sec (1).png'
import FirstComponent from './FirstComponent'
import Why from '../Services/Accounts/Why'
import './About.css'
import SecEgt from '../Home/Section8'
import ThirdSec from './../Home/ThirdSec'
import '../Services/Accounts/Accounts.css'


export default function About() {
    return (
        <>
            <Row className="px-0">
                <img src={banner} alt="about-banner" className='img-fluid p-0 object-cover' />
            </Row>
            <Row className='d-flex justify-content-center align-items-center pt-md-5 pt-3'>
                <div className='col-lg-10 col-md-10 col-11'>
                    <h1 className='hed1 text-center'>About Outsource2Backoffice</h1>
                    <p className='para text-center'>As founders, we understand that managing back-office operations efficiently can be a challenging task.Even the most successful businesses sometimes need specialized support to optimize their processes and reduce costs.
                        There are outstanding service providers globally, and our goal is to make it as easy as possible for businesses to compare, select, and collaborate with the best, every time.
                        That’s why we created a platform that combines innovative technology with personalized service, knowing that matching businesses with the right outsourcing partners can lead to exceptional operational efficiency at fair costs and terms for both parties. We aim to be catalysts in enhancing the businesses of tomorrow.

                        This is why we’ve built Outsource2Backoffice, at no cost to you.

                    </p>
                </div>
            </Row>
            <FirstComponent
                image={img1}
                mainHeading="Building Better Businesses"
                Paragraph="Outsource2Backoffice believes in providing transparency and insights into service provider performance. We want the small startup to benefit from the same efficiencies and cost savings as large enterprises.Everyone should have access to the expertise and investment that outsourcing partners bring to the table.With the feedback you provide on your chosen partners, combined with performance data from these engagements, you’ll be contributing to a knowledge base that benefits businesses everywhere, fostering continuous improvement in this vital industry.
            "
                image2={img2}
                mainHeading2="Why Outsourcing?"
                Paragraph2="The value outsourcing brings to business operations is substantial. Over the past two decades, many companies have tried to handle everything in-house. Yet, when it comes to specialized and technical back-office functions requiring expert attention, outsourcing remains a highly effective solution.Technology alone cannot replace the nuanced, analytical, and motivational aspects of having industry experts handle your back-office operations.
"
            />

            <ThirdSec />
            <Why />

            {/* <Services/> */}
            {/* <TestimonialCarousel/> */}
            <SecEgt />



        </>
    )

}
