import "./HowItWorks.css";
import howItWorksImage from "../assets/pdf/Group 5705.png";
import icon1 from "../assets/pdf/icon1.png";
import icon2 from "../assets/pdf/icon2.png";
import icon3 from "../assets/pdf/icon3.png";

const steps = [
  {
    icon: icon1,
    title: "Book a Free Strategy Call",
    desc: "Tell us what tasks you need help with.",
  },
  {
    icon: icon2,
    title: "Get Matched with Your Virtual Assistant",
    desc: "Aligned to your workflow and supported by an Australian account manager.",
  },
  {
    icon: icon3,
    title: "Start Within 7 days",
    desc: "Your VA begins handling tasks immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-mockup">
        <img className="how-mockup-image" src={howItWorksImage} alt="Virtual assistant video call workflow" />
      </div>

      <div className="how-content">
        <h2>
          How It <span>Works</span>
        </h2>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div key={i} className="how-step">
              <div className="step-icon">
                <img src={s.icon} alt={`step ${i + 1}`} />
              </div>
              <div className="step-text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="how-note">
          No hiring delays. <span className="orange">No onboarding headaches.</span>
          <br />
          Just reliable support from day one.
        </p>
      </div>
    </section>
  );
}