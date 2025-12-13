'use client'; // This component uses client-side JavaScript for interactivity

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer'; // Import the global Footer component
import styles from './events.module.css'; // Import the CSS module

interface EventData {
  date: string;
  title: string;
  description: string;
  image: string;
}

const upcomingEvents: EventData[] = [
  {
    date: "20th - July - 2025",
    title: "Ceramic - Master class",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop",
  },
];

const nextMonthEvents: EventData[] = [
  {
    date: "28th - July - 2025",
    title: "Landscaping Amature to pro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1558905540-2128470535b7?q=80&w=400&auto=format&fit=crop",
  },
  {
    date: "28th - July - 2025",
    title: "Working with Wood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=400&auto=format&fit=crop",
  },
];

// Simplified calendar data for demonstration
const calendarEvents = [
  { day: 10, title: "Ceramic Master Class" },
  { day: 28, title: "Tiling Workshop" },
];

export default function EventsPage() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const showPopup = (event: EventData) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    // Client-side interactions if any
    // The original script.js had general fade-in scroll, which is now handled by root page
    // No direct event-specific JS to migrate here other than the calendar popup logic
  }, []);

  return (
    <> {/* Fragment to return multiple elements */}
      <main>
        <section className={styles.hero}>
          <p className={styles['hero-subtitle']}>Be Apart of Our Gathering</p>
          <h1 className={styles['hero-title']}>Don't walk alone</h1>
          <p className={styles['hero-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore.</p>
        </section>

        <div className={styles['events-container']}>
          <div className={styles['events-left-col']}>
            <p className={styles['section-header']}>This Month</p>
            <h2 className={styles['section-title']}>Upcoming Event</h2>

            {upcomingEvents.map((event, index) => (
              <div className={styles['event-card-large']} key={index}>
                <div className={styles['large-card-content']}>
                  <p className={styles['large-card-date']}>{event.date}</p>
                  <h3 className={styles['large-card-title']}>{event.title}</h3>
                  <p className={styles['large-card-desc']}>{event.description}</p>
                </div>
                <Image src={event.image} alt={event.title} width={800} height={400} className={styles['large-card-img']} />
              </div>
            ))}
          </div>

          <div className={styles['events-right-col']}>
            <div>
              <p className={styles['section-header']}>Next Month</p>
              <h2 className={styles['section-title']}>Upcoming Event</h2>
            </div>

            {nextMonthEvents.map((event, index) => (
              <div className={styles['event-card-small']} key={index}>
                <div className={styles['small-card-content']}>
                  <p className={styles['small-card-date']}>{event.date}</p>
                  <h3 className={styles['small-card-title']}>{event.title}</h3>
                  <p className={styles['small-card-desc']}>{event.description}</p>
                </div>
                <Image src={event.image} alt={event.title} width={400} height={200} className={styles['small-card-img']} />
              </div>
            ))}
          </div>
        </div>

        <section className={styles['calendar-section']}>
          <p className={styles['cal-head-sub']}>Event Calendar</p>
          <h2 className={styles['cal-head-title']}>Connection opportunites</h2>
          <p className={styles['cal-head-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore.</p>

          <div className={styles['calendar-grid']}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <div className={styles['cal-header-cell']} key={index}>{day}</div>
            ))}

            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => { // Simplified to 30 days
              const event = calendarEvents.find(e => e.day === day);
              return (
                <div
                  className={styles['cal-cell']}
                  key={day}
                  style={event ? { backgroundColor: 'var(--primary-dark)', color: 'white' } : {}}
                  onClick={() => event && showPopup(upcomingEvents[0])} // Using first upcoming event as example for popup
                >
                  {day}
                  {event && <div className={styles['event-marker']}>{event.title}</div>}
                </div>
              );
            })}
          </div>

          {popupVisible && selectedEvent && (
            <div className={styles['cal-popup']} onClick={hidePopup}>
              <div className={styles['popup-content']} onClick={(e) => e.stopPropagation()}>
                <p className={styles['popup-date']}>{selectedEvent.date}</p>
                <h4 className={styles['popup-title']}>{selectedEvent.title}</h4>
                <p className={styles['popup-desc']}>{selectedEvent.description}</p>
                <Image src={selectedEvent.image} alt={selectedEvent.title} width={400} height={200} className={styles['popup-img']} />
              </div>
            </div>
          )}
        </section>

        <section className={styles['newsletter-section']}>
          <p className={styles['news-sub']}>Event Reminders</p>
          <h2 className={styles['news-title']}>Stay in the know</h2>
          <p className={styles['news-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <form className={styles['news-form']} onSubmit={(e) => e.preventDefault()}>
            <input type="text" className={styles['news-input']} placeholder="Name" />
            <input type="email" className={styles['news-input']} placeholder="Email" />
            <button className={styles['btn-subscribe']}>Subscribe</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}