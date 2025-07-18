'use client'

import { useState ,useRef} from "react";
import emailjs from '@emailjs/browser'; 
import { AnimatePresence, motion } from "motion/react"
import "./hire.css"; 

export default function HireMe() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
       form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email.',error.text);
        },
      );
  };
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <>
    
    <div className="main-container">
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 ,transition: { duration: 0.8, }}}
        exit={{ opacity: 0, scale: 0 }} 
        className="form">
      <div className="hire-me-container">
        <h2 className="hire-title">Hire Me</h2>
        <p className="hire-subtitle">Fill out the form and I’ll get back to you soon.</p>

        <form ref={form} onSubmit={sendEmail} className="hire-form">
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
    </motion.div>
    </AnimatePresence>
    </div>
    
    </>
  );
}
