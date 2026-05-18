import "./PainSection.css";
import stressedAdmin from "../assets/pdf/Group 106.png";

export default function PainSection() {
  return (
    <section className="pain-section">
      <div className="pain-layout">
        <img className="pain-mockup-image" src={stressedAdmin} alt="Admin work overload" />

        <div className="pain-content">
          <h2>
            Drowning in Admin Work While<br />
            <span>Your Business Growth Slows Down?</span>
          </h2>
          <ul className="pain-list">
            <li>Endless emails, follow-ups, and scheduling</li>
            <li>Time spent on admin instead of closing deals</li>
            <li>Hiring locally is expensive and slow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
