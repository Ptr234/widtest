'use client'; // This component uses client-side JavaScript for interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './media.module.css'; // Import the CSS module
import Footer from '../components/Footer'; // New Import for global Footer

interface Video {
  ep: string;
  title: string;
  img: string;
}

const videos: Video[] = [
  { ep: "Episode 1", title: "Dealing with change", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
  { ep: "Episode 2", title: "Dealing with clients", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600" },
  { ep: "Episode 3", title: "Building your brand", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600" },
  { ep: "Episode 4", title: "Does niching pay?", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600" },
  { ep: "Episode 5", title: "Elevating the craft", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" },
  { ep: "Episode 6", title: "Staying creative", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600" }
];

const imagePlaceholders = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/300/300?random=${i + 10}`);

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    // Client-side interactions if any
  }, []);

  return (
    <>


      <section className={styles.hero}>
        <div className={styles['hero-sub']}>Design - Shaping Conversations</div>
        <h1 className={styles['hero-title']}>Spaces & Stories</h1>
        <p className={styles['hero-desc']}>Behind every beautiful space is a woman with a story.<br />Step into the world of women shaping design and redefining creativity.</p>

        <div className={styles['video-grid']}>
          {videos.map((video, index) => (
            <div className={styles['video-card']} key={index}>
              <div className={styles['video-meta']}>
                <span className={styles['episode-label']}>{video.ep}</span>
                <div className={styles['video-title']}>{video.title}</div>
              </div>
              <div className={styles['thumbnail-wrapper']}>
                <Image src={video.img} alt={video.title} width={600} height={400} />
                <div className={styles['play-btn']}><i className="fas fa-play" style={{ marginLeft: '4px' }}></i></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <span>&lt;</span>
          {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
            <span key={num}>{num}</span>
          ))}
          <span>...</span>
          <span>&gt;</span>
        </div>

        <button className={styles['btn-subscribe']}>Subscribe to our YouTube Channel</button>
      </section>

      <section className={styles['gallery-section']}>
        <div className={styles.filters}>
          <span style={{ fontWeight: 'bold', color: 'black' }}>Filter:</span>
          {['ALL', 'WORKSHOP', 'TRAINING', 'EVENT', 'AGM', 'WOMEN@WORK'].map(filter => (
            <span
              key={filter}
              className={activeFilter === filter ? styles.active : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className={styles['image-grid']}>
          {imagePlaceholders.map((src, index) => (
            <div className={styles['gallery-item']} key={index}>
              <Image src={src} alt={`Gallery item ${index + 1}`} width={300} height={300} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
