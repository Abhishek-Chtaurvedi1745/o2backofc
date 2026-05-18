import {Row,Col} from 'react-bootstrap';


export default function FirstComponent({image,mainHeading,Paragraph,mainHeading2,Paragraph2,image2}){
    return(
        <>
     
            <Row className='d-flex justify-content-center py-lg-5 py-md-3 py-2'>
            <Col md={5} lg={5} xs={11}>
                    <img src={image2} alt="about-sec-img" className='img-fluid' />
                </Col>
                
                <Col md={5} lg={5} xs={11}>
                    <h1 className='hed1 pt-md-0 pt-2'>{mainHeading2}</h1>
                    <p className='para pt-md-3 pt-1'>{Paragraph2}</p>
                    {/* <ButtonLayoutDynamic firstButtonHeading="Get Started" /> */}


                </Col>
                
            </Row>
            <Row className='d-flex justify-content-center py-lg-5 py-md-3 py-0 pb-md-0 pb-5 gap-lg-5 gap-md-3  gap-sm-2 gap-0'>
               
                <Col md={5} lg={5} xs={11}>
                    <h1 className='hed1'>{mainHeading}</h1>
                    <p className='para pt-md-3 pt-1'>{Paragraph}</p>
                    {/* <ButtonLayoutDynamic firstButtonHeading="Get Started" /> */}


                </Col>
                <Col md={5} lg={5} xs={11}>
                    <img src={image} alt="about-sec-img" className='img-fluid' />
                </Col>
            </Row>
        
        </>
    )
}