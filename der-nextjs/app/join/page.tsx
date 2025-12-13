'use client'; // This component uses client-side JavaScript for form submission

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Footer from '../components/Footer'; // New Import

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you would typically send formData to an API endpoint
    console.log('Form submitted:', formData);
    alert('Thank you for joining!');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <div className="background-wrapper">
          <Image
            src="/images/spacejoy-OlFHzNjg9kY-unsplash.jpg"
            alt="Blurred background"
            fill
            style={{ objectFit: 'cover', filter: 'blur(5px)' }}
            priority // Load this image with high priority
          />
        </div>

        <div className="auth-form-container">
          <div className="auth-form-box join">
            <h2>Join Women in Design</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p className="auth-form-box login-link">
              Already have an account? <Link href="/login">Login here</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
