'use client'; // This component uses client-side JavaScript for interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './programs.module.css'; // Import the CSS module
import Footer from '../components/Footer'; // New Import for global Footer

interface ProgramCard {
  date: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const programCards: ProgramCard[] = [
  {
    date: "28th - July - 2025",
    title: "Program name.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop",
    buttonText: "Read More",
  },
  {
    date: "28th - July - 2025",
    title: "Networking Brunch",
    description: "A bi-annual gathering that strengthens partnerships, business visibility, and sharing.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
    buttonText: "Read More",
  },
  {
    date: "28th - July - 2025",
    title: "Program name.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop",
    buttonText: "Read More",
  },
  {
    date: "28th - July - 2025",
    title: "Program name.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600&auto=format&fit=crop",
    buttonText: "Read More",
  },
  {
    date: "28th - July - 2025",
    title: "Program name.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    buttonText: "Read More",
  },
  {
    date: "28th - July - 2025",
    title: "Program name.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=600&auto=format&fit=crop",
    buttonText: "Book Your Slot",
  },
];

export default function ProgramsPage() {
  const [activePage, setActivePage] = useState(1);

  // For the signup form
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form Submitted!');
    // Implement actual form submission logic here
  };

  useEffect(() => {
    // Card hover effects are generally handled by CSS. If there was JS for it,
    // it would go here. For now, assuming CSS handles transform effects.

    // Pagination Interaction
    const paginationSpans = document.querySelectorAll(`.${styles.pagination} span`);
    paginationSpans.forEach(span => {
      const handleClick = () => {
        const pageNum = parseInt(span.textContent || '1');
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= 9) { // Assuming 9 pages max
          setActivePage(pageNum);
        }
      };
      span.addEventListener('click', handleClick);
      return () => span.removeEventListener('click', handleClick);
    });
  }, []);

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <section className={styles.hero}>
          <p className={styles['hero-subtitle']}>Look No Further</p>
          <h1 className={styles['hero-title']}>Learn or teach a skill</h1>
          <p className={styles['hero-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore.</p>
        </section>

        <section className={styles['programs-section']}>
          <div className={styles['grid-container']}>
            {programCards.map((card, index) => (
              <div className={styles.card} key={index}>
                <div className={styles['card-content']}>
                  <div>
                    <p className={styles['card-date']}>{card.date}</p>
                    <h3 className={styles['card-title']}>{card.title}</h3>
                    <p className={styles['card-text']}>{card.description}</p>
                  </div>
                  <button className={styles['btn-read-more']}>{card.buttonText}</button>
                </div>
                <Image src={card.image} alt={card.title} width={600} height={400} className={styles['card-image']} />
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <span>&lt;</span>
            {Array.from({ length: 9 }, (_, i) => i + 1).map(pageNumber => (
              <span
                key={pageNumber}
                className={activePage === pageNumber ? styles.active : ''}
                // onClick is now handled by useEffect to set activePage
              >
                {pageNumber}
              </span>
            ))}
            <span>...</span>
            <span>&gt;</span>
          </div>
        </section>

        <section className={styles['signup-section']}>
          <p className={styles['signup-label']}>Sign Up</p>
          <h2 className={styles['signup-title']}>Upskill and Upsell</h2>
          <p className={styles['signup-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <form className={styles['signup-form']} onSubmit={handleSignUpSubmit}>
            <input type="text" className={styles['form-input']} placeholder="Name" />
            <input type="text" className={styles['form-input']} placeholder="Contact" />
            <input type="email" className={styles['form-input']} placeholder="Email" />

            <div className={styles['form-row-2']}>
              <input type="text" className={styles['form-input']} placeholder="Business Name" />
              <input type="text" className={styles['form-input']} placeholder="Business Location" />
              <button type="submit" className={styles['btn-signup']}>Sign Up</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
