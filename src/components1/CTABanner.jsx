import "./CTABanner.css";

export default function CTABanner({ onBookCall }) {
  return (
    <div className="cta-banner">
      <div>
        <h2>Get Started Today</h2>
        <p className="cta">Stop Doing Everything Yourself. <br /> Let O2BO Handle The Workload While You Focus On Growth.</p>
      </div>
      <button className="btn-white" type="button" onClick={onBookCall}>Book A Call</button>
    </div>
  );
}
