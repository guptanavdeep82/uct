import useTilt from "../../hooks/useTilt";

/** Wraps children in a 3D tilt shell with a soft cursor glare. */
export default function TiltCard({ children, className = "", maxTilt = 8, as: Tag = "div", ...rest }) {
  const ref = useTilt(maxTilt);

  return (
    <Tag ref={ref} className={`tilt-card ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
