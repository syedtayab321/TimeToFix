import React, { useState } from 'react';
import './../assets/css/quote.css';

const GetQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectDeadline, setProjectDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleQuoteRequest = (e) => {
    e.preventDefault();
    const quoteRequest = {
      name,
      email,
      phone,
      location,
      serviceType,
      projectBudget,
      projectDeadline,
      message,
    };

    console.log('Quote Request:', quoteRequest);
    alert('Your quote request has been submitted!');
  };

  return (
    <div className="get-quote-container">
      <h2 className="text-center mb-4">Get a Free Quote</h2>
      <form onSubmit={handleQuoteRequest} className="quote-form">
        <div className="grid-container">
          <div className="grid-item">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid-item">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid-item">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="grid-item">
            <label className="form-label">Select Location</label>
            <select
              className="form-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="grid-item">
            <label className="form-label">Service Type</label>
            <select
              className="form-select"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">Select Service Type</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <div className="grid-item">
            <label className="form-label">Project Budget</label>
            <input
              type="text"
              className="form-control"
              value={projectBudget}
              onChange={(e) => setProjectBudget(e.target.value)}
              required
            />
          </div>
          <div className="grid-item">
            <label className="form-label">Project Deadline</label>
            <input
              type="date"
              className="form-control"
              value={projectDeadline}
              onChange={(e) => setProjectDeadline(e.target.value)}
              required
            />
          </div>
          <div className="grid-item grid-full">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Request Quote
        </button>
      </form>
    </div>
  );
};

export default GetQuote;
