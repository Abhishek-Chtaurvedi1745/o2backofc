import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import './whbutton.css'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/0481612016"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 shadow-lg transition-colors duration-300 ease-in-out"
    >
      {/* Mobile version - only icon */}
      <div className="d-md-none fixed right-0 bottom-50 left-50 bg-green-500 text-white p-1 rounded-full hover:bg-green-600">
        <BsWhatsapp className="text-3xl" />
      </div>

      {/* Desktop version - full button with text */}
      <div 
        className="d-none d-md-flex fixed right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-1 rounded-l-lg hover:bg-green-600 items-center gap-2"
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        <span className="text-base font-normal transform -rotate-180 whitespace-nowrap">Need Help? Chat Now</span>
        <BsWhatsapp className="text-xl transform -rotate-90" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
