import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">RCL CAR</div>
        <div className="nav-links">
          <a href="#home">Início</a>
          <a href="#services">Serviços</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>Estética Automotiva Premium</h1>
            <p>O cuidado que o seu carro merece, com detalhamento impecável e proteção duradoura.</p>
            <a href="https://www.instagram.com/rcl.car/" target="_blank" rel="noreferrer" className="cta-button">
              Agendar Avaliação
            </a>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Polimento</h3>
              <p>Remoção de riscos e restauração do brilho original da pintura com produtos de alta tecnologia.</p>
            </div>
            <div className="service-card">
              <h3>Higienização</h3>
              <p>Limpeza profunda e revitalização do interior do seu veículo, eliminando odores e manchas.</p>
            </div>
            <div className="service-card">
              <h3>Vitrificação</h3>
              <p>Proteção cerâmica de extrema durabilidade contra intempéries e raios UV.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h2>RCL CAR</h2>
          <p>Transformando carros, superando expectativas.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 RCL CAR. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;