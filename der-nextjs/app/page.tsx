'use client'; // This component uses client-side JavaScript for animations

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import Footer from './components/Footer'; // New Import

export default function Home() {
  // Client-side animation logic from original script.js
  useEffect(() => {
    const sections = document.querySelectorAll('.section-padding');

    const fadeInScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight * 0.85) {
          section.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', fadeInScroll);
    fadeInScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', fadeInScroll);
  }, []);

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        {/* Hero section content (now a component) */}
        {/* We are placing the Hero content directly here for now,
            but eventually, this could be its own component */}
        <header className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Empowering<br />Women in Design</h1>
            <p>Connect with Uganda's most talented women designers and trusted suppliers in the construction and design industry.</p>
            <div className="search-bar">
              <input type="text" placeholder="Find me a designer..." />
              <button><i className="fas fa-search"></i></button>
            </div>
          </div>
        </header>
        

        <section className="about section-padding">
          <div className="container about-grid">
            <div className="about-image-group">
              <Image src="/images/PBR-9740.jpg" alt="Women in Design Community" width={500} height={450} />
              <div className="play-overlay-small">
                <i className="fas fa-play"></i>
              </div>
              <div className="badge">W</div>
            </div>
            <div className="about-text">
              <span className="eyebrow">ABOUT THE COMMUNITY</span>
              <h2>Why We Exist</h2>
              <p>By spotlighting local talent and building a trusted design ecosystem, we're changing the narrative, one collaboration at a time.</p>
              <p>Women in Design Uganda was created to close the visibility and access gap for female professionals in the design industry. We believe elevating women's voices and work transforms spaces, businesses, and communities.</p>
              <Link href="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </section>

        <section className="approach section-padding">
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow">OUR APPROACH</span>
              <h2>How We Make It Happen</h2>
              <p>We connect women designers with clients, suppliers, and mentors across Uganda through a powerful digital platform and community. Our members gain visibility, build networks, and grow through structured programs.</p>
            </div>

            <div className="approach-grid">
              <div className="app-card">
                <Image src="/images/PBR-0179.jpg" alt="Designer" width={300} height={400} />
                <div className="app-label">Designer Directory</div>
              </div>
              <div className="app-card">
                <Image src="/images/mohammad-lotfian-DGRixfygKvE-unsplash (copy).jpg" alt="Supplier" width={300} height={400} />
                <div className="app-label">Supplier Network</div>
              </div>
              <div className="app-card text-card">
                <h3>Emerging talent gains support from experienced professionals and targeted workshops.</h3>
                <Link href="/programs" className="btn-small">Learn More</Link>
              </div>
              <div className="app-card">
                <Image src="/images/PBR-9740.jpg" alt="Community" width={300} height={400} />
                <div className="app-label">Community Impact</div>
              </div>
            </div>
          </div>
        </section>

        <div className="nav-arrows container">
          <button className="arrow-btn"><i className="fas fa-chevron-left"></i></button>
          <button className="arrow-btn"><i className="fas fa-chevron-right"></i></button>
        </div>

        <section className="stats section-padding">
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow">SO FAR</span>
              <h2>Community in Numbers</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="circle-icon"></div>
                <h3>150+</h3>
                <p>Women Designers</p>
              </div>
              <div className="stat-card">
                <div className="circle-icon"></div>
                <h3>200+</h3>
                <p>Trusted Suppliers</p>
              </div>
              <div className="stat-card">
                <div className="circle-icon"></div>
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <div className="circle-icon"></div>
                <h3>24</h3>
                <p>WiD Members</p>
              </div>
            </div>
          </div>
        </section>

        <section className="events section-padding">
          <div className="container">
            <div className="events-header">
              <div className="header-left">
                <h2>Upcoming<br />Events</h2>
              </div>
              <div className="header-right">
                <p>Stay connected with the latest from Uganda's vibrant design community. Our upcoming events bring together creatives, collaborators, and changemakers from across the country.</p>
              </div>
            </div>

            <div className="events-grid">
              <div className="event-main">
                <Image src="/images/leo_visions-KgaDrj-PfbE-unsplash.jpg" alt="Workshop" width={700} height={550} />
                <div className="event-overlay">
                  <h3>WiD Workshop</h3>
                  <p>12th November - 2025</p>
                </div>
              </div>

              <div className="event-side">
                <div className="event-card">
                  <Image src="/images/PBR-9443.jpg" alt="Pottery" width={350} height={265} />
                  <div className="event-overlay">
                    <h3>Tile Factory Tour</h3>
                    <p>12th November - 2025</p>
                  </div>
                </div>
                <div className="event-split">
                  <div className="event-card">
                    <Image src="/images/alim-TDZKKlsJwCk-unsplash.jpg" alt="Talks" width={350} height={265} />
                    <div className="event-overlay">
                      <h3>Ceramics Workshop</h3>
                      <p>13th Nov - 2025</p>
                    </div>
                  </div>
                  <div className="event-card">
                    <Image src="/images/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="Meetup" width={350} height={265} />
                    <div className="event-overlay">
                      <h3>Career Workshop</h3>
                      <p>14th Nov - 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}