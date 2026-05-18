import bannerblog from '../../../public/Image/blog-banner.png'
import { Row, Col } from 'react-bootstrap'
import './Blog.css'
import { FaStar } from "react-icons/fa6";
import Service from '../AboutUs/Services'
import TestimonialCarousel from '../Home/Section7';
import SecEgt from '../Home/Section8';
import ThirdSec from '../Home/ThirdSec';
import Section13 from '../Home/Section13';

export default function Blog() {

  const listitems = [
    "Posts widgets with multiple category",
    "Choose posts categories",
    "8 awesome bloglist styles",
    "As page option & shortcode",
    "Lorem Ipsum is simply dummy text",
    "Number of posts per page",
    "Custom recent & popular",
    "Customizable sidebars",
    "Lorem Ipsum is simply dummy text",
    "Video lightboxes In bloglist",
    "Lorem Ipsum is simply dummy text",
    "Show/Hide featured Image",
    "Lorem Ipsum is simply dummy text",
    "Posts carousels & sliders",
    "Highlighted sticky posts In masonry",
    "Sidebar & footer settings",
    "Fancy titles In various styles",
    "Optional share buttons"
  ]

 

  return (
    <>
      <Row className='mb-0'>
        <img src={bannerblog} alt="banner-blog" className='img-fluid px-0' />
      </Row>
      <Section13/>
      <SecEgt />
      <TestimonialCarousel />
    


    </>
  )
}
