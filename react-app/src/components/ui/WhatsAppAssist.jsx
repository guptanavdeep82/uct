import { siteInfo } from "../../data/siteInfo";

const PREFILL = "Hello UCT, I have a question about the MBBS program.";

export default function WhatsAppAssist() {
  const href = `${siteInfo.whatsappHref}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <a
      className="wa-assist"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UCT on WhatsApp"
    >
      <span className="wa-assist__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm5.1 12.8c-.2.6-1.2 1.1-1.7 1.1-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4 0-.1-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1.1.3 0 .4l-.3.4c-.1.1-.2.3-.1.5.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.3 2.5 1.4.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l2.1 1c.2.1.4.2.4.4 0 .1 0 .8-.4 1.4z" />
        </svg>
      </span>
    </a>
  );
}
