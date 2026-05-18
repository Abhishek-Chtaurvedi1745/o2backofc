import "./Hero.css";
import Navbar from "./Navbar";
import heroGraphic from "../assets/pdf/banner imagee1 2.png";

export default function Hero({ onBookCall }) {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-content">
        <h1>
          Hire a Virtual Assistant<br />
          <span className="orange">Backed by an Australian<br />Account Manager</span>
        </h1>
        <p className="hero-subtitle">Reliable, managed support without the offshore headaches.</p>
        <p className="hero-offer">
          Save up to <span className="pct">70%</span> on labour costs.&nbsp;Plans from{" "}
          <span className="price">$6/hr</span>
        </p>
        <p className="hero-start">Start within 7 days</p>
        <button className="btn-primary" type="button" onClick={onBookCall}>Book a Free Strategy Call</button>
      </div>

      <div className="hero-image-wrap">
        <img src={heroGraphic} alt="Virtual assistant backed by an account manager" />
      </div>
    </section>
  );
}
