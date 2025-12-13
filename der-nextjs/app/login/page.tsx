'use client'; // This component uses client-side JavaScript for form submission

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Footer from '../components/Footer'; // New Import

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Here you would typically send formData to an API endpoint for authentication
    console.log('Login submitted:', formData);
    alert('Login attempt with: ' + formData.email);
    // Optionally reset form or redirect
    setFormData({
      email: '',
      password: '',
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
          <div className="auth-form-box login">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
              <Link href="#" className="auth-form-box forgot-password">Forgot Password?</Link>
            </form>
            <p className="auth-form-box signup-link">
              Don't have an account? <Link href="/join">Sign up now</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
