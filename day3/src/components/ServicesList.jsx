import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const services = [
    { id: 1, title: "Web Dev", desc: "React & Node" },
    { id: 2, title: "SEO", desc: "Google Ranking" },
    { id: 3, title: "UI Design", desc: "Figma Prototyping" },
  ];

  return (
    <section className="services-section">
      <h3>My Services</h3>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            title={service.title} 
            desc={service.desc} 
          />
        ))}
      </div>
    </section>
  );
}