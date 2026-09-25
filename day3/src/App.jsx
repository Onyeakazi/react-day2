// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the state
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    // Conditionally apply a dark mode class to the main wrapper
    <div className={isDarkMode ? 'app dark-theme' : 'app light-theme'}>
      
      {/* Pass state and the toggle function as PROPS to the Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Pass static data as props to the Hero */}
      <Hero name="Alex mary" tagline="Senior Frontend Architect" />
      
      <ServicesList />
      
      <ContactForm />
    </div>
  );
}