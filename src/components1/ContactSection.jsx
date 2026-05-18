import { useState } from "react";
import "./ContactSection.css";
import ReCAPTCHA from "react-google-recaptcha";

// Backend API URL — Vite env var (VITE_ prefix theek hai kyunki yeh sirf URL hai, email nahi)
const API_URL = import.meta.env.VITE_API_URL || "https://o2bo.onrender.com";
const REQUEST_TIMEOUT_MS = 60000;

export default function ContactSection({ isModal = false, onClose, onSubmitted }) {
  const emptyForm = {
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...emptyForm });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

const handleCaptcha = (value) => {
  setCaptchaValue(value);
};

  const update = (field) => (e) => {
    const value = field === "phone" ? e.target.value.replace(/\D/g, "") : e.target.value;
    setFormData({ ...formData, [field]: value });
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Client-side quick checks (UX ke liye sirf) ──
    const requiredFields = [formData.name, formData.phone, formData.email];
    const hasRequiredDetails = requiredFields.every((v) => v.trim() !== "");
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

    // ── Backend ko bhejo ──────────────────────────────
    let timeoutId;

    try {
      setIsSubmitting(true);
      setFormError("");

      const controller = new AbortController();
      timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          name:    formData.name.trim(),
          phone:   formData.phone.trim(),
          email:   formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      window.clearTimeout(timeoutId);

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        // Backend se aaya specific error dikhao
        setFormError(data.message || "Unable to submit right now. Please try again.");
        return;
      }

      // Success!
      setFormData({ ...emptyForm });
      onSubmitted?.();
    } catch (error) {
      // Network error (server down, etc.)
      const message =
        error.name === "AbortError"
          ? "Server is taking too long to respond. Please try again in a moment."
          : "Unable to reach server. Please check your connection.";

      setFormError(message);
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      setIsSubmitting(false);
    }
  };

  const stopModalClose = (e) => {
    if (isModal) e.stopPropagation();
  };

  return (
    <div
      className={`contact-section${isModal ? " contact-section-modal" : ""}`}
      onClick={stopModalClose}
    >
      {isModal && (
        <button
          className="contact-modal-close"
          type="button"
          aria-label="Close contact form"
          onClick={onClose}
        >
          ×
        </button>
      )}

      <div className="contact-top">
        <div className="contact-left">
          <h2>
            Ready to Get Your
            <br />
            Time Back?
          </h2>
          <p>
            Stop doing everything yourself. Get a dedicated virtual assistant backed by an
            Australian account manager
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
              style={{ marginRight: "7px", flexShrink: 0 }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
           <a
  href="tel:+610489276638"
  style={{
    color: "#696984",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.target.style.color = "white")}
  onMouseLeave={(e) => (e.target.style.color = "#d7d7d7")}
>
  0489276638
</a>
          </button>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
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
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <input
              className="form-input input-company"
              placeholder="Company Name (Optional)"
              value={formData.company}
              onChange={update("company")}
            />
            <input
              className="form-input input-email"
              placeholder="Work Email Id*"
              value={formData.email}
              onChange={update("email")}
              type="email"
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
          onChange={handleCaptcha} className="mb-4 -mt-3"
        />
      </div>
          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {formError && (
            <p className="form-message form-error" role="alert">
              {formError}
            </p>
          )}
        </form>
      </div>

      <div className="contact-bottom">
        <h3>Get Started In 7 Days</h3>
        <p>No Lock-In Contracts | Plans From $6 Per Hour | No Obligation.</p>
        <span>We'll Recommend The Best Setup For Your Business.</span>
      </div>
    </div>
  );
}
