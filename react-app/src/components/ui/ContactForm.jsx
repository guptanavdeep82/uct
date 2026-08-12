import { useState } from "react";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // API-ready: replace with `fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })`
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
        Thank you for reaching out! Our team will get back to you shortly.
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className={`form-field${errors.name ? " has-error" : ""}`}>
          <label htmlFor="contact-name">Name *</label>
          <input id="contact-name" type="text" placeholder="Your full name" value={values.name} onChange={update("name")} />
          {errors.name && <span className="form-field__error">{errors.name}</span>}
        </div>

        <div className={`form-field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="contact-email">Email *</label>
          <input id="contact-email" type="email" placeholder="you@example.com" value={values.email} onChange={update("email")} />
          {errors.email && <span className="form-field__error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">Phone</label>
          <input id="contact-phone" type="tel" placeholder="+91 98765 43210" value={values.phone} onChange={update("phone")} />
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" type="text" placeholder="How can we help?" value={values.subject} onChange={update("subject")} />
        </div>

        <div className={`form-field form-field--full${errors.message ? " has-error" : ""}`}>
          <label htmlFor="contact-message">Message *</label>
          <textarea id="contact-message" placeholder="Write your message…" value={values.message} onChange={update("message")} />
          {errors.message && <span className="form-field__error">{errors.message}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--block" style={{ marginTop: "1.4rem" }} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
