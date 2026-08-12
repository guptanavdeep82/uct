export default function AdmissionSteps({ steps }) {
  return (
    <div className={`stepper${steps.length === 4 ? " stepper--4" : ""}`}>
      {steps.map((step, i) => (
        <div className="stepper__step" key={step.title} data-animate="fade-up" data-delay={i * 90}>
          <div className="stepper__num">{String(i + 1).padStart(2, "0")}</div>
          <h3>{step.title}</h3>
          {step.desc && <p>{step.desc}</p>}
          {step.items && (
            <ul>
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
