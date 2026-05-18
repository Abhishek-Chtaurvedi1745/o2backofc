import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Button.css'; // Assuming the CSS is saved in ButtonStyles.css

export default function ButtonLayoutDynamic({ firstButtonHeading }) {
    return (

        <div className="ac-sec-button-list mt-md-4 mt-1">
            <ul className="d-flex align-items-center gap-lg-5 gap-md-5 gap-xl-4">
                <li className="button-text">{firstButtonHeading}</li>
                <li className="arrow-icon fw-normal"><FaLongArrowAltRight size={25} /></li>
            </ul>
        </div>
    );
}
