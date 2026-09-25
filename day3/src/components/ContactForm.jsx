import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload
    if (email === "") return alert("Email required!");
    
    // Simulate API call
    console.log("Sending email from:", email);
    setIsSubmitted(true);
    setEmail(""); // Reset input
  };

  return (
    <section className="contact-section">
      <h3>Contact Me</h3>
      
      {/* Conditional Rendering: Show success message OR the form */}
      {isSubmitted ? (
        <p className="success-msg">Thanks for reaching out!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}