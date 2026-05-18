import "./Footer.css";
import logo from "../assets/pdf/logo.png";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Outsource2Backoffice"
            className="brand-logo-img"
          />
          <p className="brand-desc">
            Boutique outsourcing partner supporting Australian businesses with reliable,
            managed virtual assistant services.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <div className="col-title">Our Services</div>
          <ul className="services-list">
            <li><span className="arrow">→</span> Virtual Assistants</li>
            <li><span className="arrow">→</span> Admin and Data Entry</li>
            <li><span className="arrow">→</span> Customer Support</li>
            <li><span className="arrow">→</span> Call Centre outsourcing</li>
          </ul>
          <div className="extra-note">Additional support available based on your needs.</div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="col-title">Get In Touch</div>
          <ul className="contact-list">
         <p className="hq-text">
  Outsource2Backoffice HQ
</p>
           <li>
  <span className="contact-icon">📞</span>
Australia:
<a
  href="tel:+610489276638"
  style={{
    color: "#696984",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.target.style.color = "blue")}
  onMouseLeave={(e) => (e.target.style.color = "#696984")}
>
  0489276638
</a>
</li>

<li>
  <span className="contact-icon">✉️</span>

<a
  href="mailto:info@outsource2backoffice.com"
  style={{
    color: "#696984",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.target.style.color = "blue")}
  onMouseLeave={(e) => (e.target.style.color = "#696984")}
>
  info@outsource2backoffice.com
</a>
</li>
<li className="flex">
  <p>Address:</p>
  <p>Level 1, 530 Little Collins Street, Melbourne VIC 3000</p>
  
</li>
          </ul>
          <div className="social-row">
            <a
              className="social-btn sb-fb"
              href="https://www.facebook.com/profile.php?id=61559578997785"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              className="social-btn sb-ig"
              href="https://www.instagram.com/outsource2backoffice/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Privacy Policy &nbsp;|&nbsp; Term &amp; Service</span>
        <span>Trusted by Australian businesses for reliable outsourced support</span>
      </div>
    </footer>
  );
}
