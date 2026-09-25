export default function Hero({ name, tagline }) {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p>{tagline}</p>
    </section>
  );
}