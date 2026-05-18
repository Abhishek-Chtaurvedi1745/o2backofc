import { useState, useEffect } from "react";
import "./Testimonials.css";
import abenaSmithImage from "../assets/pdf/Image.png";

const testimonials = [
  {
    name: "Abena Smith",
    role: "General Manager",
    image: abenaSmithImage,
    text: "Running a tech startup means juggling a lot of tasks, but since we've partnered with Outsource2Backoffice for tech support, it's been so much easier. Their team is responsive, knowledgeable, and always ready to jump in. They've saved us countless hours, allowing us to focus on innovation rather than troubleshooting.",
  },
  {
    name: "James Parker",
    role: "CEO, GrowthLab",
    text: "Hiring through O2BO was the best decision we made this year. Our VA handles all admin, scheduling and follow-ups. We've closed 30% more deals since getting started.",
  },
  {
    name: "Sarah O'Brien",
    role: "Director, RetailEdge",
    text: "The Australian account manager made all the difference. We always knew what was happening with our VA. Completely hassle-free and incredibly professional.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-layout">
          <div className="testimonials-left">
            <div className="testimonials-label">TESTIMONIALS</div>
            <h2>
              What Australian
              <br />
              Businesses Say About
              <br />
              O2BO
            </h2>
            <p className="rating-text">
              4.9 Stars From +2,500
              <br />
              Reviews Across Trustpilot,
              <br />
              Google Reviews And Glassdoor
            </p>
            <div className="stars">★★★★☆</div>
          </div>

          <div className="testimonial-card">
            <div className="author-avatar">
              {t.image ? (
                <img src={t.image} alt={t.name} />
              ) : (
                <span className="avatar-initials">{t.name.charAt(0)}</span>
              )}
            </div>

            <div className="card-inner">
              <div className="author-name">{t.name}</div>
              <div className="author-role">({t.role})</div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-nav">
        <button className="nav-btn nav-btn-prev" type="button" aria-label="Previous testimonial" onClick={prev} />
        <button className="nav-btn nav-btn-next" type="button" aria-label="Next testimonial" onClick={next} />
      </div>
    </section>
  );
}
