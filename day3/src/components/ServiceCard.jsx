export default function ServiceCard({ title, desc }) {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}