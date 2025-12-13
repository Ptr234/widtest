'use client'; // This component uses client-side JavaScript for dynamic content and interactivity

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Footer from '../components/Footer'; // New Import
import styles from './about.module.css'; // Import the CSS module

// Define the TeamMember interface as per TypeScript best practices
interface TeamMember {
  role: string;
  name: string;
  company: string;
  img: string;
}

const teamMembers: TeamMember[] = [
    { role: "President", name: "Masika Christine. T", company: "REWARD DESIGN CO.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { role: "Vice President", name: "Amanda Diana", company: "HELAN DESIGN / SCHOOL", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=400" },
    { role: "Local Partnerships Rep", name: "Brenda Mpiriwa Ssali", company: "KWANZI ACCENTS INTERIORS", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
    { role: "Community Administrator", name: "Aisha Namugalu", company: "LUSU CREATIVE STUDIO", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" },
    { role: "Community Research & Dev't", name: "Mokomiko Noelline", company: "WEKO CREATIONS", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
    { role: "Community Research & Dev't", name: "Arch. Agnes C. Nakiganda", company: "LAMC DESIGN STUDIO", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" },
    { role: "International Partnerships", name: "Ritah Kigozi", company: "HERMIE HOMES DESIGN", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
    { role: "Community Marketing", name: "Georgina Mwebaza", company: "APCON HOMES", img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400" },
    { role: "Business Growth Co-ord", name: "Arinda Abigail", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", company: "TOTAL HOME STUDIO" }
];

export default function AboutPage() {
  useEffect(() => {
    // Any client-side specific logic for the team section, or fade-in scroll effects
  }, []);

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <section className={styles['about-hero']}> {/* Use local hero styling */}
          <p className={styles['hero-subtitle']}>ABOUT THE COMMUNITY</p>
          <h1 className={styles['hero-title']}>Our Story</h1>
          <p className={styles['hero-desc']}>Women in Design Uganda was created to close the visibility and access gap for female professionals in the design industry. We believe elevating women's voices and work transforms spaces, businesses, and communities.</p>
          <Link href="/join" className={styles['btn-hero']}>Join Our Community</Link>
        </section>

        <section className={styles['section-dark']}>
          <div className={styles.container}>
            <div className={styles['who-grid']}>
              <div className={styles['gallery-wrapper']}>
                <div className={styles['main-video']}>
                  <Image src="/images/PBR-9693.jpg" alt="Group" width={800} height={450} />
                  <div className={styles['play-overlay']}><i className="fas fa-play"></i></div>
                </div>
                <div className={styles.thumbnails}>
                  <div className={styles['nav-arrow']}>&lt;</div>
                  <div className={styles['thumb-img']}><Image src="/images/PBR-9713.jpg" alt="Thumb 1" width={200} height={150} /></div>
                  <div className={styles['thumb-img']}><Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=200" alt="Thumb 2" width={200} height={150} /></div>
                  <div className={styles['thumb-img']}><Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=200" alt="Thumb 3" width={200} height={150} /></div>
                  <div className={styles['nav-arrow']}>&gt;</div>
                </div>
              </div>

              <div className={styles['text-block']}>
                <div className={styles['sub-heading']}>About The Community</div>
                <h2 className={styles['section-title']}>Who We Are</h2>
                <p>Women in Design is a foundation uniting interior designers, architects, contractors, decor shop owners, furniture makers, art collectors, and design enthusiasts across Uganda.</p>
                <p>We believe design is a universal language—one that shapes how people live, work, and thrive. As a community, we champion awareness, collaboration, skills development, and business growth for women in the design and construction ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['section-light']}>
          <div className={styles.container}>
            <div className={styles['objectives-grid']}>
              <div className={styles['cards-stack']}>
                <div className={`${styles['info-card']} ${styles['card-vision']}`}>
                  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" className={styles['card-bg-img']} alt="Our Vision" width={400} height={300} />
                  <h3>Our Vision</h3>
                  <p>To create a global network of women in interior design who support, mentor, and uplift each other—driving innovation, excellence, and community impact.</p>
                </div>
                <div className={`${styles['info-card']} ${styles['card-mission']}`}>
                  <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className={styles['card-bg-img']} alt="Our Mission" width={400} height={300} />
                  <h3>Our Mission</h3>
                  <p>To advance the art and science of interior design in Uganda through education, networking, community engagement, and recognition of our members' achievements.</p>
                </div>
              </div>

              <div className={styles['obj-list-container']}>
                <h2>Our Objectives</h2>
                <p className={styles['obj-intro']}>We are dedicated to fostering growth and maintaining high standards within the industry through these core objectives.</p>
                <ul className={styles['obj-list']}>
                  <li>Build a strong community of women in design <i className="fas fa-plus"></i></li>
                  <li>Promote design awareness in Uganda <i className="fas fa-plus"></i></li>
                  <li>Train and empower through knowledge sharing <i className="fas fa-plus"></i></li>
                  <li>Create reliable partnerships locally & internationally <i className="fas fa-plus"></i></li>
                  <li>Lobby for business as a collective <i className="fas fa-plus"></i></li>
                  <li>Build ethical & professional standards <i className="fas fa-plus"></i></li>
                  <li>Create pathways to profitable opportunities <i className="fas fa-plus"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['section-dark']}>
          <div className={styles.container}>
            <div className={styles['team-intro']}>
              <div className={styles['sub-heading']}>Meet The</div>
              <h2 className={styles['section-title']}>The Governing team</h2>
              <p>Dedicated professionals leading the charge for a better design future in Uganda.</p>
            </div>

            <div className={styles['team-container']}>
              {teamMembers.map((member, index) => (
                <div className={styles['team-card']} key={index}>
                  <div className={styles['team-img']}>
                    <Image src={member.img} alt={member.name} width={400} height={400} />
                  </div>
                  <span className={styles['team-role']}>{member.role}</span>
                  <div className={styles['team-name']}>{member.name}</div>
                  <div className={styles['team-company']}>{member.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}