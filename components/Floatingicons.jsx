import "@/components/FloatingIcons.css";

export default function FloatingIcons() {
  const icons = ["html-5.svg", "css3.svg", "js.svg", "mysql.svg", "react.svg", "node.svg"];

  return (
    <div className="circular-orbit">
      {icons.map((icon, i) => (
        <div key={i} className="orbit-icon" style={{ "--i": i } }>
          <img src={`/icons/${icon}`} alt={icon} className="floating-icon" />
        </div>
      ))}
    </div>
  );
}
