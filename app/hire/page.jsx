'use client'

import { useEffect, useState } from "react";
import { sendEmail } from "@/components/sendEmail"; 
import "./hire.css"; 

export default function HireMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(formData);
    if (result.success) {
      alert('Email sent successfully!');
      setFormData({ name: "", email: "", message: "" }); // reset form
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="main-container">
      <div className="form">
      <div className="hire-me-container">
        <h2 className="hire-title">Hire Me</h2>
        <p className="hire-subtitle">Fill out the form and I’ll get back to you soon.</p>

        <form onSubmit={handleSubmit} className="hire-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required 
          />
          <button type="submit" className="hire-btn primary">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
}
