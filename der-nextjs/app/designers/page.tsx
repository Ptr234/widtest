'use client'; // This component uses client-side JavaScript for interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './designer.module.css'; // Import the CSS module

// Define interfaces for data structures
interface Member {
  name: string;
  role: string;
  company: string;
  img: string;
}

interface Project {
  name: string;
  type: string;
  img: string;
}

interface PricePlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isCorporate?: boolean;
}

const members: Member[] = [
  { name: "Sophia Nyanzi", role: "Interior Designer", company: "Takai Spaces", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Rachael Baine", role: "Principal Interior Designer", company: "LUMBAJE DESIGN STUDIO", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Grace Linda", role: "Interior Designer", company: "Takai Spaces", img: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400&h=500" },
  { name: "Sharon Tumusiime", role: "Interior Designer", company: "PALIT Woodwork", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=500" },
];

const featuredProjects: Project[] = [
  { name: "Serena Kigo", type: "Wood works", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=150" },
  { name: "Kisaasi Home", type: "Interior Designer", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=150" },
  { name: "Hotel EXP", type: "Landscape Design", img: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=150" },
  { name: "Kikonye Resort", type: "Interior Designer", img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=150" },
  { name: "Serena Kigo", type: "Interior Designer", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=150" },
];

const pricingPlans: PricePlan[] = [
  {
    title: "Individual",
    price: "UGX 150,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Full event access", "Welcome brunch & Lunch", "Awards ceremony", "Event materials", "Networking directory"],
  },
  {
    title: "Corporate",
    price: "UGX 250,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Full event access", "Welcome brunch & Lunch", "Awards ceremony", "Event materials", "Networking directory", "1-year WID membership included"],
    isCorporate: true,
  },
  {
    title: "Students",
    price: "UGX 75,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: ["Full event access", "Welcome brunch & Lunch", "Awards ceremony", "Event materials", "Mentorship opportunities"],
  },
];


import Footer from '../components/Footer'; // New Import

export default function DesignersPage() {
  // Client-side interactions
  useEffect(() => {
    // Play Button Interaction
    const playBtn = document.querySelector(`.${styles['play-button']}`);
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        alert('Video modal trigger!');
      });
    }

    // Sign Up Buttons (using event delegation for dynamically added elements if any, though here directly selecting)
    const signups = document.querySelectorAll(`.${styles['btn-signup']}`);
    signups.forEach(btn => {
      const handleClick = (e: Event) => {
        e.preventDefault();
        const plan = (e.currentTarget as HTMLElement).closest(`.${styles['price-card']}`)?.querySelector('h3')?.innerText;
        alert(`Selected Plan: ${plan}`);
      };
      btn.addEventListener('click', handleClick);
      return () => btn.removeEventListener('click', handleClick); // Cleanup
    });
  }, []); // Empty dependency array means this runs once on mount


  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <header className={styles.hero}>
          <div className={styles['hero-overlay']}></div>
          <div className={styles['hero-content']}>
            <span className={styles['sub-label']}>OUR COMMUNITY OF DESIGNER</span>
            <h1 className={styles['hero-content']}>Meet Our Members</h1>
            <p className={styles['hero-content']}>Connect with Uganda's most talented women designers and trusted suppliers in the construction and design industry.</p>

            <div className={styles['members-carousel']}>
              <button className={`${styles['nav-arrow']} ${styles.left}`}><i className="fas fa-chevron-left"></i></button>

              {members.map((member, index) => (
                <div className={styles['member-card']} key={index}>
                  <Image src={member.img} alt={member.name} width={400} height={500} />
                  <div className={styles['card-info']}>
                    <h3>{member.name}</h3>
                    <p>{member.role}<br />{member.company}</p>
                  </div>
                </div>
              ))}

              <button className={`${styles['nav-arrow']} ${styles.right}`}><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </header>

        <section className={styles['featured-section']}>
          <div className={styles['featured-container']}>

            <div className={styles['featured-profile']}>
              <div className={styles['profile-circle']}>
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" alt="Sophia Nyanzi" width={400} height={400} />
              </div>
              <div className={styles['profile-details']}>
                <small>WID-001</small>
                <h3>Sophia Nyanzi</h3>
                <p>Interior Designer</p>
                <p className={styles.company}>Takai Spaces</p>
                <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className={styles['featured-video']}>
              <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600&h=800" alt="Interior Design Room" width={600} height={800} />
              <div className={styles['play-button']}>
                <i className="fas fa-play"></i>
              </div>
            </div>

            <div className={styles['featured-list']}>
              <h3>Featured Projects:</h3>

              {featuredProjects.map((project, index) => (
                <div className={styles['project-item']} key={index}>
                  <Image src={project.img} alt={project.name} width={150} height={100} />
                  <div className={styles['project-text']}>
                    <h4>{project.name}</h4>
                    <p>{project.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['cta-container']}>
            <Link href="#" className={styles['btn-pill-large']}>SEE BEST-IN-CLASS PROJECTS</Link>
          </div>
        </section>

        <section className={styles['pricing-section']}>
          <div className={styles['pricing-header']}>
            <span className={styles['sub-label-dark']}>OUR APPROACH</span>
            <h2>Subscription Packages</h2>
            <p>We connect women designers with clients, suppliers, and mentors across Uganda through a powerful digital platform and community. Our members gain visibility, build networks, and grow through structured programs.</p>
          </div>

          <div className={styles['pricing-cards']}>
            {pricingPlans.map((plan, index) => (
              <div className={`${styles['price-card']} ${plan.isCorporate ? styles.corporate : ''}`} key={index}>
                <h3>{plan.title}</h3>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.desc}>{plan.description}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href="#" className={styles['btn-signup']}>SIGN UP</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}