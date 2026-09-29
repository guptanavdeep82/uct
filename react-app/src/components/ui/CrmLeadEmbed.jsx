"use client";

const CRM_LEAD_SRC =
  "https://api.winqire.com/embed/lead-form?token=dcab17aa9ac1d57fd6c56d1e673e8fd366ef16ebbeda4ac0";

export default function CrmLeadEmbed() {
  return (
    <div className="crm-lead-embed">
      <iframe
        src={CRM_LEAD_SRC}
        title="Admission enquiry form"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
