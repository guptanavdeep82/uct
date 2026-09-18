"use client";

import { useEffect, useRef } from "react";

const CRM_LEAD_SRC =
  "https://crm.winqire.com/lead-embed.js?token=dcab17aa9ac1d57fd6c56d1e673e8fd366ef16ebbeda4ac0";

export default function CrmLeadEmbed() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.replaceChildren();

    const script = document.createElement("script");
    script.src = CRM_LEAD_SRC;
    script.async = true;
    script.dataset.winqireLead = "true";
    host.appendChild(script);

    return () => {
      host.replaceChildren();
    };
  }, []);

  return <div className="crm-lead-embed" ref={hostRef} />;
}
