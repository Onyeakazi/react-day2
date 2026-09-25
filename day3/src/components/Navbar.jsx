export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>AlexCode.dev</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleTheme}>
        {/* Conditional text rendering based on Prop */}
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}