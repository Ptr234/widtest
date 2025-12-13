'use client'; // This component uses client-side JavaScript for interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './suppliers.module.css'; // Import the CSS module

interface SupplierCard {
  type: 'image' | 'text';
  businessName: string;
  specialty: string;
  image?: string;
  description?: string;
}

const supplierCards: SupplierCard[] = [
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'text', businessName: "Business Name", specialty: "Speciality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1605117882932-f9e32b03ef76?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'text', businessName: "Business Name", specialty: "Speciality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=300" },
  { type: 'image', businessName: "Business Name", specialty: "Speciality", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300" },
];

import Footer from '../components/Footer'; // New Import

export default function SuppliersPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Implement actual search logic here
  };

  const handleSupplierSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for signing up! We will be in touch.');
    // Implement actual form submission logic here
  };

  useEffect(() => {
    // Client-side interactions if any
    // Filter click handling (for demo visualization)
    const filterItems = document.querySelectorAll(`.${styles['filter-list']} li`);
    filterItems.forEach(item => {
        const handleClick = () => {
            setActiveFilter(item.textContent || 'ALL');
            // In a real app, this would filter the grid items
        };
        item.addEventListener('click', handleClick);
        return () => item.removeEventListener('click', handleClick);
    });

    // Pagination click handling
    const paginationItems = document.querySelectorAll(`.${styles.pagination} .${styles['page-num']}`);
    paginationItems.forEach(item => {
        const handleClick = () => {
            const pageNum = parseInt(item.textContent || '1');
            if (!isNaN(pageNum)) {
                setActivePage(pageNum);
            }
        };
        item.addEventListener('click', handleClick);
        return () => item.removeEventListener('click', handleClick);
    });
  }, []);

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <header className={styles.hero}>
          <div className={styles['hero-overlay']}></div>
          <div className={styles['hero-content']}>
            <span className={styles['hero-subtitle']}>LOOK NO FURTHER</span>
            <h1 className={styles['hero-title']}>Find a genuine supplier</h1>
            <div className={styles['search-container']}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className={styles['search-bar']}
                  placeholder="Search supplier by keyword....."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className={styles['search-btn']}><i className="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </header>

        <div className={styles.container}>
          <div className={styles['filter-section']}>
            <span className={styles['filter-label']}>FILTER:</span>
            <ul className={styles['filter-list']}>
              {['ALL', 'TILLING', 'CERAMIC', 'WOOD WORK', 'PAINTING', 'PAVING', 'ROOFING'].map(filter => (
                <li
                  key={filter}
                  className={activeFilter === filter ? styles.active : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['supplier-grid']}>
            {supplierCards.map((card, index) => (
              <div className={`${styles['supplier-card']} ${card.type === 'text' ? styles['text-card'] : ''}`} key={index}>
                {card.type === 'image' && card.image && (
                  <div className={styles['card-image']}>
                    <Image src={card.image} alt={card.businessName} width={400} height={300} />
                  </div>
                )}
                <div className={styles['card-content']}>
                  <h3 className={styles['business-name']}>{card.businessName}</h3>
                  <p className={styles.specialty}>{card.specialty}</p>
                  {card.type === 'text' && card.description && (
                    <p className={styles.desc}>{card.description}</p>
                  )}
                  {card.type === 'image' ? (
                    <Link href="#" className={styles['btn-see-more']}>SEE MORE</Link>
                  ) : (
                    <Link href="#" className={styles['btn-contact']}>SEE CONTACT</Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <i className="fas fa-chevron-left"></i>
            {Array.from({ length: 9 }, (_, i) => i + 1).map(pageNumber => (
              <span
                key={pageNumber}
                className={activePage === pageNumber ? styles.active : ''}
                onClick={() => setActivePage(pageNumber)}
              >
                {pageNumber}
              </span>
            ))}
            <span>...</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>

        <section className={styles['signup-section']}>
          <span className={styles['signup-subtitle']}>SIGN UP</span>
          <h2 className={styles['signup-title']}>Join our supplier list</h2>
          <p className={styles['signup-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <form className={styles['signup-form']} onSubmit={handleSupplierSignUp}>
            <input type="text" className={styles['form-input']} placeholder="Name" />
            <input type="text" className={styles['form-input']} placeholder="Contact" />
            <input type="email" className={styles['form-input']} placeholder="Email" />
            <input type="text" className={styles['form-input']} placeholder="Business Name" />
            <input type="text" className={styles['form-input']} placeholder="Business location" />
            <button type="submit" className={styles['btn-signup-submit']}>Sign Up</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}