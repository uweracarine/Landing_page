import './App.css';

// ── Navbar ──────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">MyBrand</a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#contact" className="nav-cta">Get Started</a></li>
      </ul>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🚀 Now in public beta</span>
        <h1>Build Amazing <span>Websites</span> Faster</h1>
        <p>
          Modern, responsive, and beautiful web experiences — built with the
          tools you already love.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started Free</button>
          <button className="btn-secondary">See Demo →</button>
        </div>
      </div>
    </section>
  );
}

// ── Features ─────────────────────────────────────────────
const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for performance from day one. Your site loads instantly, keeping users engaged.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description:
      'Professionally crafted components that look great on every device and screen size.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'Built-in security best practices so you can ship with confidence and peace of mind.',
  },
  {
    icon: '📊',
    title: 'Analytics Ready',
    description:
      'Track user behavior and conversions with deep analytics integrations out of the box.',
  },
  {
    icon: '🔧',
    title: 'Easy to Customize',
    description:
      'Tweak every pixel with a clean, well-documented codebase that scales with your team.',
  },
  {
    icon: '🌍',
    title: 'Global CDN',
    description:
      'Deployed on edge infrastructure worldwide so your users always get the fastest experience.',
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <p className="section-label">Features</p>
      <h2 className="section-title">Everything you need to launch</h2>
      <p className="section-subtitle">
        Stop piecing together tools. We give you everything in one place.
      </p>
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────
const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your free account in under 30 seconds. No credit card required.',
  },
  {
    number: '2',
    title: 'Choose a Template',
    description: 'Pick from dozens of professionally designed templates to get started fast.',
  },
  {
    number: '3',
    title: 'Customize',
    description: 'Make it yours — change colors, fonts, content, and layout with ease.',
  },
  {
    number: '4',
    title: 'Launch',
    description: 'Hit publish and your site goes live instantly on our global CDN.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <p className="section-label">Process</p>
      <h2 className="section-title">Up and running in minutes</h2>
      <p className="section-subtitle">
        Our simple four-step process gets you from zero to live without the headache.
      </p>
      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" id="contact">
      <span className="logo">MyBrand</span>
      <ul className="footer-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
      <span className="footer-copy">© 2026 MyBrand. All rights reserved.</span>
    </footer>
  );
}

// ── App (root) ────────────────────────────────────────────
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
