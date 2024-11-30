import React, { useState } from 'react';
import './Contact.css'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      message: formData.message === '',
    };

    setErrors(newErrors);

    // Check if there are no errors
    if (!Object.values(newErrors).includes(true)) {
      alert('Form submitted successfully!');
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({
        name: false,
        email: false,
        message: false,
      });
    }
  };

  return (
    <div className="contact bg-light-purple py-5">
      <div className="container">
        <h1 className="text-center mb-5">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <div className="invalid-feedback">Name is required.</div>}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">Email is required.</div>}
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <div className="invalid-feedback">Message is required.</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}