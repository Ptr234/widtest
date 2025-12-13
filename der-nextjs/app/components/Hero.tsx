import Image from 'next/image';

export default function Hero() {
  return (
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
  );
}
