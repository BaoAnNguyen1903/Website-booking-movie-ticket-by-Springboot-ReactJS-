import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');

    // Add logic to handle form submission, e.g., sending OTP
    console.log('Email submitted:', email);

    // Example: Simulating success and error messages
    if (email) {
      setMessage('OTP has been sent to your email!');
      setError('');
    } else {
      setError('Please enter a valid email.');
      setMessage('');
    }
  };

  return (
    <div style={{ paddingTop: '56px', backgroundColor: '#f9f9f9' }}>
      <h2 className="navbar-brand">SANCHOI247</h2>
      <div className="container">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;