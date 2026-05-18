import "./SolutionSection.css";
import solutionMockup from "../assets/pdf/Group 107.png";

export default function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="solution-layout">
        <div className="solution-content">
          <h2>
            Get Your Time Back with a<br />
            <span>Dedicated Virtual Assistant</span>
          </h2>
          <ul className="pain-list">
            <li>We handle your admin, follow-ups, and day-to-day tasks</li>
            <li>You focus on closing deals and growing your business</li>
            <li>Fully managed support with an Australian-based account manager</li>
          </ul>
        </div>

        <img className="solution-mockup-image" src={solutionMockup} alt="Virtual assistant workflow preview" />
      </div>
    </section>
  );
}
