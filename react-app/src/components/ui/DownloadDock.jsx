import { useEffect, useId, useState } from "react";
import { downloadItems, OTP_CODE } from "../../data/downloads";
import { postJson } from "../../lib/api";

const initialLead = { name: "", whatsapp: "", email: "" };

function validateLead(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp number is required.";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(values.whatsapp)) {
    errors.whatsapp = "Enter a valid WhatsApp number.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

export default function DownloadDock() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [step, setStep] = useState("lead");
  const [lead, setLead] = useState(initialLead);
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [status, setStatus] = useState("idle");
  const titleId = useId();

  const closeModal = () => {
    setActiveItem(null);
    setStep("lead");
    setLead(initialLead);
    setErrors({});
    setOtp("");
    setOtpError("");
    setStatus("idle");
  };

  const openItem = (item) => {
    setPanelOpen(false);
    setActiveItem(item);
    setStep("lead");
    setLead(initialLead);
    setErrors({});
    setOtp("");
    setOtpError("");
    setStatus("idle");
  };

  useEffect(() => {
    if (!activeItem) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  const update = (field) => (e) => setLead((v) => ({ ...v, [field]: e.target.value }));

  const triggerDownload = (item) => {
    if (item.external) {
      window.open(item.file, "_blank", "noopener,noreferrer");
      return;
    }
    const link = document.createElement("a");
    link.href = item.file;
    link.download = item.filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateLead(lead);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep("otp");
    setOtp("");
    setOtpError("");
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.trim() !== OTP_CODE) {
      setOtpError("Invalid OTP. Please enter the code sent to your WhatsApp.");
      return;
    }
    setStatus("submitting");
    try {
      await postJson("/api/download-leads", {
        ...lead,
        document_id: activeItem.id,
        document_label: activeItem.label,
      });
    } catch {
      // Still allow the file download if the lead save fails.
    }
    setStatus("success");
    triggerDownload(activeItem);
  };

  return (
    <>
      <div className={`download-dock${panelOpen ? " is-open" : ""}`}>
        <button
          type="button"
          className="download-dock__tab"
          aria-expanded={panelOpen}
          aria-controls="download-dock-panel"
          onClick={() => setPanelOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3v12M8 11l4 4 4-4M5 21h14" />
          </svg>
          Downloads
        </button>
        <div id="download-dock-panel" className="download-dock__panel" aria-hidden={!panelOpen}>
          <p className="download-dock__kicker">Get the files</p>
          <strong>Official Documents</strong>
          <div className="download-dock__options">
            {downloadItems.map((item) => (
              <button key={item.id} type="button" className="download-dock__option" onClick={() => openItem(item)}>
                <span>{item.label}</span>
                <small>{item.desc}</small>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeItem && (
        <div className="download-modal" role="presentation" onClick={closeModal}>
          <div
            className="download-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="download-modal__close" aria-label="Close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="download-modal__head">
              <span className="pill-tag">{activeItem.shortLabel}</span>
              <h2 id={titleId}>{activeItem.label}</h2>
              <p>
                {step === "success"
                  ? "Your download has started. If the prospectus opens in a new tab, use Google Drive’s download button."
                  : step === "otp"
                    ? "Enter the OTP sent to your WhatsApp number to start the download."
                    : "Share your details and we will send an OTP to your WhatsApp before the file downloads."}
              </p>
            </div>

            {status === "success" ? (
              <div className="form-success" role="status">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Thank you, {lead.name.split(" ")[0] || "there"}. Your {activeItem.shortLabel.toLowerCase()} is downloading.
              </div>
            ) : step === "otp" ? (
              <form className="form-grid form-grid--single" onSubmit={handleOtpSubmit} noValidate>
                <div className={`form-field${otpError ? " has-error" : ""}`}>
                  <label htmlFor="dl-otp">Enter OTP *</label>
                  <input
                    id="dl-otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="4-digit OTP"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      setOtpError("");
                    }}
                  />
                  {otpError && <span className="form-field__error">{otpError}</span>}
                </div>
                <p className="form-note">OTP sent to {lead.whatsapp}. For now, use <strong>1234</strong>.</p>
                <button type="submit" className="btn btn--gold btn--lg btn--block" disabled={status === "submitting"}>
                  {status === "submitting" ? "Saving…" : "Verify & Download"}
                </button>
              </form>
            ) : (
              <form className="form-grid form-grid--single" onSubmit={handleLeadSubmit} noValidate>
                <div className={`form-field${errors.name ? " has-error" : ""}`}>
                  <label htmlFor="dl-name">Full Name *</label>
                  <input id="dl-name" type="text" placeholder="e.g. Aarav Sharma" value={lead.name} onChange={update("name")} />
                  {errors.name && <span className="form-field__error">{errors.name}</span>}
                </div>
                <div className={`form-field${errors.whatsapp ? " has-error" : ""}`}>
                  <label htmlFor="dl-whatsapp">WhatsApp Number *</label>
                  <input
                    id="dl-whatsapp"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={lead.whatsapp}
                    onChange={update("whatsapp")}
                  />
                  {errors.whatsapp && <span className="form-field__error">{errors.whatsapp}</span>}
                </div>
                <div className={`form-field${errors.email ? " has-error" : ""}`}>
                  <label htmlFor="dl-email">Email ID *</label>
                  <input id="dl-email" type="email" placeholder="you@example.com" value={lead.email} onChange={update("email")} />
                  {errors.email && <span className="form-field__error">{errors.email}</span>}
                </div>
                <button type="submit" className="btn btn--gold btn--lg btn--block">
                  Send OTP
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
