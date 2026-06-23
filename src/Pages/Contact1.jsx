import React, { useState, useEffect } from "react";
import "../components1/ContactSection.css";
import ReCAPTCHA from "react-google-recaptcha";

import {
  NavDropdown,
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
} from "react-icons/fa";

import dropDownData from "../Components/Header/Header.json";

import Footer from "../components1/Footerl";
import ButtonComponent from "../Components/whatsappbutton/whbutton";

import "../Components/Header/Header.css";

const API_URL =
  import.meta.env.VITE_API_URL || "https://o2bo.onrender.com";

const REQUEST_TIMEOUT_MS = 60000;

function Contact1() {
  // =========================
  // HEADER STATES
  // =========================
  const [isDropDown, setDropDown] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);

  // =========================
  // FORM STATES
  // =========================
  const emptyForm = {
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  // =========================
  // HEADER FUNCTIONS
  // =========================
  const toggleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setDropDown(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();

    setSearchQuery(query);
    setShowResults(true);

    const filtered = dropDownData.filter((service) =>
      service.text.toLowerCase().includes(query)
    );

    setFilteredServices(filtered);
  };

  const handleServiceClick = (link) => {
    navigate(link);

    setSearchQuery("");
    setShowResults(false);
  };

  // =========================
  // CAPTCHA
  // =========================
  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  // =========================
  // FORM UPDATE
  // =========================
  const update = (field) => (e) => {
    const value =
      field === "phone"
        ? e.target.value.replace(/\D/g, "")
        : e.target.value;

    setFormData({
      ...formData,
      [field]: value,
    });

    setFormError("");
  };

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      formData.name,
      formData.phone,
      formData.email,
    ];

    const hasRequiredDetails = requiredFields.every(
      (v) => v.trim() !== ""
    );

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!hasRequiredDetails) {
      setFormError("Please fill your required details.");
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!captchaValue) {
      setFormError("Please verify captcha.");
      return;
    }

    let timeoutId;

    try {
      setIsSubmitting(true);
      setFormError("");

      const controller = new AbortController();

      timeoutId = window.setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT_MS);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        signal: controller.signal,

        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      window.clearTimeout(timeoutId);

      const contentType =
        response.headers.get("content-type") || "";

      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        setFormError(
          data.message ||
            "Unable to submit right now. Please try again."
        );

        return;
      }

      // SUCCESS
      setFormData(emptyForm);
      setCaptchaValue(null);

      alert("Form submitted successfully!");
    } catch (error) {
      const message =
        error.name === "AbortError"
          ? "Server is taking too long to respond."
          : "Unable to reach server.";

      setFormError(message);
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      setIsSubmitting(false);
    }
  };

  // =========================
  // CLOSE SEARCH
  // =========================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================
  // RESET SEARCH
  // =========================
  useEffect(() => {
    setSearchQuery("");
    setShowResults(false);
  }, [location]);

  return (
    <div>
      {/* ========================= HEADER ========================= */}

      <Navbar expand="lg" className="flex-column p-0 fixed-top pb-4">

        {/* TOP HEADER */}
        <Container fluid className="bg-light">
          <div className="container-fluid py-2 py-md-3">

            <div className="d-flex align-items-center justify-content-center">

              {/* LOGO */}
              <div className="text-center text-sm-start">
                <Navbar.Brand as={Link} to="/">
                  <img
                    src="/Image/outsource2backoffice.png"
                    alt="Outsource Logo"
                    className="img-fluid navbar-brand-logo"
                  />
                </Navbar.Brand>
              </div>

              {/* SEARCH */}
              {/* <div className="d-none d-md-flex col-md-5 position-relative search-container">

                <Form className="w-100">

                  <Form.Control
                    type="search"
                    placeholder="Search services..."
                    className="search-input-filed form-control"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onClick={() => setShowResults(true)}
                  />

                  {showResults && searchQuery && (
                    <div className="position-absolute w-100 mt-2 bg-white rounded shadow-sm search-results">

                      {filteredServices.length > 0 ? (
                        <ul className="list-unstyled mb-0">

                          {filteredServices.map(
                            (service, index) => (
                              <li
                                key={index}
                                className="px-3 py-2 search-result-item"
                                onClick={() =>
                                  handleServiceClick(
                                    service.link
                                  )
                                }
                              >
                                {service.text}
                              </li>
                            )
                          )}

                        </ul>
                      ) : (
                        <div className="px-3 py-2 text-muted">
                          No services found
                        </div>
                      )}
                    </div>
                  )}
                </Form>
              </div> */}

              {/* BUTTON */}
              <div className="text-center text-sm-end d-md-block">
                <ButtonComponent
                  btnName="Free Consultation"
                  btnClassName="for-header-button"
                />
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="d-md-none">
                <Button
                  onClick={toggleMobileMenu}
                  aria-controls="mobile-nav-items"
                  aria-expanded={isMobileMenuOpen}
                  className="navbar-toggler"
                >
                  <span className="navbar-toggler-icon"></span>
                </Button>
              </div>

            </div>
          </div>
        </Container>

        {/* MOBILE MENU */}
        <div
          id="mobile-nav-items"
          className={`d-sm-none ${
            isMobileMenuOpen ? "d-block" : "d-none"
          }`}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            zIndex: 1000,
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Nav className="flex-column py-2 px-3 mobile-nav-link">

            <Nav.Link onClick={() => handleNavigation("/")}>
              Home
            </Nav.Link>

            <Nav.Link onClick={() => handleNavigation("/about")}>
              About Company
            </Nav.Link>

            <div
              onClick={toggleDropDown}
              style={{ cursor: "pointer" }}
            >
              <span className="ourserv-span">
                Our Services{" "}
                {isDropDown ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {isDropDown && (
              <div className="ps-3 dropdown">

                {dropDownData.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    onClick={() =>
                      handleNavigation(item.link)
                    }
                    className="dropdown-item"
                  >
                    {item.text}
                  </NavDropdown.Item>
                ))}

              </div>
            )}

            <Nav.Link
              onClick={() =>
                handleNavigation("/how-it-works")
              }
            >
              How it Works
            </Nav.Link>

            <Nav.Link onClick={() => handleNavigation("/blog")}>
              Blogs
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                handleNavigation("/contact-us")
              }
            >
              Reach Us
            </Nav.Link>

          </Nav>
        </div>
      </Navbar>

      {/* ========================= CONTACT FORM ========================= */}

      <div className="contact-section ">

        <div className="contact-top">

          {/* LEFT */}
          <div className="contact-left">

            <h2>
              Ready to Get Your
              <br />
              Time Back?
            </h2>

            <p>
              Stop doing everything yourself.
              Get a dedicated virtual assistant
              backed by an Australian account manager
            </p>

            <button className="phone-btn">

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  marginRight: "7px",
                  flexShrink: 0,
                }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>

              <a
                href="tel:+610489276638"
                style={{
                  color: "#696984",
                  textDecoration: "none",
                }}
              >
                0489276638
              </a>

            </button>
          </div>

          {/* RIGHT FORM */}
          <form
            className="contact-right"
            onSubmit={handleSubmit}
          >

            <h3>Let's Connect</h3>

            <div className="form-grid">

              <input
                className="form-input input-name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={update("name")}
              />

              <input
                className="form-input input-phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={update("phone")}
              />

              <input
                className="form-input input-company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={update("company")}
              />

              <input
                type="email"
                className="form-input input-email"
                placeholder="Work Email Id*"
                value={formData.email}
                onChange={update("email")}
              />

            </div>

            <textarea
              className="form-textarea"
              placeholder="E.g What do you need help with? (Optional)"
              value={formData.message}
              onChange={update("message")}
            />

            <div className="mt-4">
              <ReCAPTCHA
                sitekey="6LeTNessAAAAABSWPsUMLLiRwmdbZshr_ywiTCMn"
                onChange={handleCaptcha}
                className="mb-4"
              />
            </div>

            <button
              className="btn-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit"}
            </button>

            {formError && (
              <p
                className="form-message form-error"
                role="alert"
              >
                {formError}
              </p>
            )}

          </form>
        </div>

        {/* <div className="contact-bottom ">
          <h3>Get Started In 7 Days</h3>

          <p>
            No Lock-In Contracts | Plans From $6 Per Hour |
            No Obligation.
          </p>

          <span>
            We'll Recommend The Best Setup For Your
            Business.
          </span>
        </div> */}
      </div>

      {/* ========================= CONTACT BOXES ========================= */}

   <Row
  className="d-flex justify-content-center py-lg-5 py-md-3 py-3 mt-lg-5 mt-sm-3 mt-2"
  style={{
    backgroundImage: `url(/Image/bg.webp)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    width: "100%",
   
    paddingTop: "140px",
    overflow: "hidden",
  }}
>

        <Col
          md={9}
          xl={9}
          lg={10}
          xs={10}
          className="py-lg-5 py-md-3 py-3"
        >

          <div className="d-flex flex-sm-row flex-column gap-2">

            {/* LOCATION */}
            <div className="shadow p-4 col-md-3 col-xl-3 d-flex flex-column align-items-center justify-content-center bg-white">

              <img
                src="/Image/loc.png"
                className="img-fluid"
                alt="location"
              />

              <h4
                className="mt-3 hed3"
                style={{ color: "#46A4D9" }}
              >
                Our Location
              </h4>

              <p className="para text-center">
                Australia - 23 Milton Parade
                <br />
                Canada – Vancouver, BC
              </p>

            </div>

            {/* CALL */}
            <div className="shadow p-4 col-md-3 col-xl-3 bg-white d-flex flex-column align-items-center justify-content-center">

              <a
                href="https://wa.me/0489276638"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >

                <FaPhoneAlt
                  size={20}
                  color="#FF631A"
                />

                <h4
                  className="mt-3 hed3"
                  style={{ color: "#46A4D9" }}
                >
                  Call Us
                </h4>

                <p className="para" style={{color:"#FFFFFF"}}>
                  0489276638
                </p>

              </a>
            </div>

            {/* EMAIL */}
            <div className="shadow p-2 col-md-3 col-xl-3 d-flex flex-column align-items-center justify-content-center bg-white">

              <a
                href="mailto:info@outsource2backoffice.com"
                className="footer-link text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >

                <img
                  src="/Image/mail.png"
                  className="img-fluid"
                  alt="mail"
                />

                <h4
                  className="mt-3 hed3"
                  style={{ color: "#46A4D9" }}
                >
                  Email Us
                </h4>

                <p
                  className="para text-wrap text-center"
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  info@outsource2backoffice.com
                </p>

              </a>
            </div>

          </div>
        </Col>
      </Row>

      <Footer />

    <style>{`
.contact-section {
  width: 1110px;
  max-width: calc(100% - 48px);
  height: auto;
//   min-height: 567px;
  align-items: center;
  border-radius: 0px;
  margin: 141px auto;
  box-sizing: border-box;
  color: #fff;
  overflow: hidden;
  margin-bottom:0px
}
`}</style>
    </div>
  );
}

export default Contact1;