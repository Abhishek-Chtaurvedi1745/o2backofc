import {Row} from 'react-bootstrap';
import { TbUsersGroup } from "react-icons/tb";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { IoMicOffSharp } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { TbMugOff } from "react-icons/tb";
import './Accounts.css'
export default function Why(){
    return(
        <>
              <Row className='d-flex justify-content-center align-items-center py-lg-5 py-sm-3 py-4'>
            <h1 className='hed1 text-center pb-2'>Reasons to Work With Outsource2Backoffice?</h1>
            <div className='col-xl-10 col-md-10 col-lg-10 pb-4 col-11 '>
            <p>Outsource2Backoffice is your go-to partner for business outsourcing, offering 10 years of industry experience, exceptional expertise, and top-tier reliability. Our services are designed to deliver significant cost savings while ensuring excellence and indispensability in all your business operations. Choose us for a seamless, efficient, and trustworthy outsourcing experience</p>
            </div>
                <div className='d-flex flex-wrap justify-content-center align-items-center col-lg-10 col-md-12 col-lg-12 col-xl-12
                 gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
              
                <div className='col-lg-2 col-md-4   col-6  col-sm-4 text-cente d-flex border justify-content-center align-items-center
                acc-sec-icon-div gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
                <FaPenToSquare  size={20}/>
                    <p className='para p-0 text-black text-center m-0'>10 Years Of Experience</p>
                </div>
                <div className='col-lg-2 col-md-4   col-5 col-sm-4 text-cente d-flex border justify-content-center align-items-center
                acc-sec-icon-div gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
                <TbUsersGroup size={25} />
                    <p className='para p-0 m-0 text-black'>Top Of Our Game</p>
                </div>
                <div className='col-lg-2 col-md-4  col-6  col-sm-4 text-cente d-flex border justify-content-center align-items-center
                acc-sec-icon-div gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
                <PiLightbulbFilamentBold size={25} />
                    <p className='para p-0 m-0  text-black'>Delivering Cost Savings</p>
                </div>
                <div className='col-lg-2 col-md-4 col-5  col-sm-4 text-cente d-flex border justify-content-center align-items-center
                acc-sec-icon-div gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
                <IoMicOffSharp  size={25}/>
                    <p className='para p-0 m-0 text-black'>Reliability</p>
                </div>
                <div className='col-lg-2 col-md-4  col-5    col-sm-4 text-cente d-flex border justify-content-center align-items-center
                acc-sec-icon-div  gap-xl-2 gap-lg-1 gap-md-1 gap-1'>
                <TbMugOff   size={25}/>
                    <p className='para p-0 m-0 text-black'>Indispensable</p>
                </div>
                </div>
                

                


            </Row> 
        </>
    )
}