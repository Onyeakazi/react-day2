export default function UserCard({ name, role, isPremium }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Status: {isPremium ? "Premium Member" : "Free Tier"}</p>
    </div>
  );
}