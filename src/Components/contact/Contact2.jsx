import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

// import bg from "../assets/bg.jpg";
import bg from "../"
import location from "../assets/location.png";
import mail from "../assets/mail.png";

function Contact2() {
  return (
    <div>
      <Row
        className="d-flex justify-content-center py-lg-5 py-md-3 py-3 mt-lg-5 mt-sm-3 mt-2"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Col md={9} xl={9} lg={10} xs={10} className="py-lg-5 py-md-3 py-3">
          <div className="d-flex flex-sm-row flex-column gap-2">
            
            <div className="shadow p-4 col-md-3 col-xl-3 d-flex flex-column align-items-center justify-content-center bg-white">
              <img src={location} className="img-fluid" alt="location" />
              
              <h4 className="mt-3 hed3" style={{ color: "#46A4D9" }}>
                Our Location
              </h4>

              <p className="para text-center">
                Australia - 23 Milton Parade
                <br />
                Canada – Vancouver, BC
              </p>
            </div>

            <div className="shadow p-4 col-md-3 col-xl-3 bg-white d-flex flex-column align-items-center justify-content-center">
              <a
                href="https://wa.me/0489276638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <FaPhoneAlt size={20} color="#FF631A" />

                <h4 className="mt-3 hed3" style={{ color: "#46A4D9" }}>
                  Call Us
                </h4>

                <p className="para">0489276638</p>
              </a>
            </div>

            <div className="shadow p-2 col-md-3 col-xl-3 d-flex flex-column align-items-center justify-content-center bg-white">
              <a
                href="mailto:info@outsource2backoffice.com"
                className="footer-link text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <img src={mail} className="img-fluid" alt="mail" />

                <h4 className="mt-3 hed3" style={{ color: "#46A4D9" }}>
                  Email Us
                </h4>

                <p
                  className="para text-wrap text-center"
                  style={{ wordBreak: "break-word" }}
                >
                  info@outsource2backoffice.com
                </p>
              </a>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact2;