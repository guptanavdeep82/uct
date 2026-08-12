import { useState } from "react";

const COUNTRIES = ["India", "Timor-Leste", "Nepal", "Bangladesh", "Sri Lanka", "Other"];

const initialState = {
  name: "",
  email: "",
  phone: "",
  country: "India",
  state: "",
  neetScore: "",
  course: "MBBS",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone / WhatsApp number is required.";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.message.trim()) errors.message = "Please tell us a little about your enquiry.";
  return errors;
}

/**
 * Admission enquiry lead-gen form. Submission logic is API-ready: swap the
 * body of handleSubmit's setTimeout for a real fetch() call to your backend
 * or CRM endpoint — the validation/success/error UI already handles both.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // API-ready: replace with `fetch('/api/admission-enquiry', { method: 'POST', body: JSON.stringify(values) })`
    setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 700);
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Thank you! Your enquiry has been received — our counsellors will contact you within 24 hours.
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className={`form-field form-field--full${errors.name ? " has-error" : ""}`}>
          <label htmlFor="enq-name">Full Name *</label>
          <input id="enq-name" type="text" placeholder="e.g. Aarav Sharma" value={values.name} onChange={update("name")} />
          {errors.name && <span className="form-field__error">{errors.name}</span>}
        </div>

        <div className={`form-field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="enq-email">Email *</label>
          <input id="enq-email" type="email" placeholder="you@example.com" value={values.email} onChange={update("email")} />
          {errors.email && <span className="form-field__error">{errors.email}</span>}
        </div>

        <div className={`form-field${errors.phone ? " has-error" : ""}`}>
          <label htmlFor="enq-phone">Phone *</label>
          <input id="enq-phone" type="tel" placeholder="+91 98765 43210" value={values.phone} onChange={update("phone")} />
          {errors.phone && <span className="form-field__error">{errors.phone}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="enq-country">Country *</label>
          <select id="enq-country" value={values.country} onChange={update("country")}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="enq-state">State</label>
          <input id="enq-state" type="text" placeholder="e.g. Tamil Nadu" value={values.state} onChange={update("state")} />
        </div>

        <div className="form-field">
          <label htmlFor="enq-neet">NEET Score</label>
          <input id="enq-neet" type="text" placeholder="e.g. 480" value={values.neetScore} onChange={update("neetScore")} />
        </div>

        <div className="form-field">
          <label htmlFor="enq-course">Course</label>
          <select id="enq-course" value={values.course} onChange={update("course")}>
            <option value="MBBS">MBBS</option>
            <option value="Scholarship">Scholarship Enquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={`form-field form-field--full${errors.message ? " has-error" : ""}`}>
          <label htmlFor="enq-message">Message *</label>
          <textarea
            id="enq-message"
            placeholder="Tell us about your NEET score, preferred intake, or any questions…"
            value={values.message}
            onChange={update("message")}
          />
          {errors.message && <span className="form-field__error">{errors.message}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn--gold btn--lg btn--block" style={{ marginTop: "1.4rem" }} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <p className="form-note">We respect your privacy — your details are only used to guide you through admissions.</p>
    </form>
  );
}
