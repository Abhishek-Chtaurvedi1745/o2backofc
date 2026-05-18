import React, { useEffect, useState } from "react";

import Hero from "../components1/Hero";
import Clients from "../components1/Clients";
import Testimonials from "../components1/Testimonials";
import PainSection from "../components1/PainSection";
import SolutionSection from "../components1/SolutionSection";
import CTABanner from "../components1/CTABanner";
import TasksSection from "../components1/TasksSection";
import HowItWorks from "../components1/HowItWorks";
import ContactSection from "../components1/ContactSection";
import Footer from "../components1/Footerl";

// import "../styles/global.css";

function Landing() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      isContactOpen || isThankYouOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactOpen, isThankYouOpen]);

  const handleFormSubmitted = () => {
    setIsContactOpen(false);
    setIsThankYouOpen(true);
  };

  return (
    <div className="o2bo-root">

      {/* HERO */}
      <Hero
        onBookCall={() => setIsContactOpen(true)}
      />

      {/* CLIENTS */}
      <Clients />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PAIN SECTION */}
      <PainSection />

      {/* SOLUTION SECTION */}
      <SolutionSection />

      {/* CTA */}
      <CTABanner
        onBookCall={() => setIsContactOpen(true)}
      />

      {/* TASKS */}
      <TasksSection />

      <HowItWorks />

      <ContactSection
        onSubmitted={handleFormSubmitted}
      />

      <Footer />

      <button
        className="mobile-sticky-book-call"
        type="button"
        onClick={() => setIsContactOpen(true)}
      >
        Book A Call
      </button>

      {isContactOpen && (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          onClick={() => setIsContactOpen(false)}
        >
          <ContactSection
            isModal
            onClose={() => setIsContactOpen(false)}
            onSubmitted={handleFormSubmitted}
          />
        </div>
      )}

      {/* THANK YOU MODAL */}
      {isThankYouOpen && (
        <div
          className="thank-you-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Thank you"
          onClick={() => setIsThankYouOpen(false)}
        >
          <div
            className="thank-you-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="thank-you-close"
              type="button"
              aria-label="Close thank you message"
              onClick={() => setIsThankYouOpen(false)}
            >
              ×
            </button>

            <div
              className="thank-you-tick"
              aria-hidden="true"
            ></div>

            <h3>Thank You</h3>

            <p>
              Your form is submitted.
              We will connect with you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;