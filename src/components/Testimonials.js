import React from 'react';
import { Star } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

function Testimonials() {
  const googleReviews = [
    {
      id: 1,
      author: "Hudson Quirino",
      text: "Exelente profissional, trabalho bem feito e dentro do tempo combinado.",
      rating: 5
    },
    {
      id: 2,
      author: "Vitor Augusto Lima Silva",
      text: "Fui muito bem atendido pelo Ronaldo da RCL car. Coloquei frisos no carro e também troquei os faróis por lâmpadas LED. Serviço de qualidade, recomendo!",
      rating: 5
    },
    {
      id: 3,
      author: "Éder Oliveira",
      text: "Atendimento nota 10,instalação super moderna,mão de obra especializada e atualizada,serviços entregue na data marcada.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <h2>O que dizem nossos <span className="text-red">Clientes</span></h2>
      <p className="section-subtitle">Confira nossas avaliações mais recentes no Google</p>
      
      <div className="testimonials-grid">
        {googleReviews.map((review) => (
          <a 
            href="https://www.google.com/maps/place/RCL+car/@-21.0008676,-47.6558084,17z/data=!4m8!3m7!1s0x94b9ef82b0ca9811:0xa6f6ee09a18daf92!8m2!3d-21.0008676!4d-47.6558084!9m1!1b1!16s%2Fg%2F11mvz_v06g?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noreferrer" 
            className="testimonial-card" 
            key={review.id}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
          >
            <div className="stars" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="#FFD700" color="#FFD700" size={20} />
                ))}
              </div>
              <FaGoogle color="#4285F4" size={20} />
            </div>
            <p className="quote">"{review.text}"</p>
            <div className="client-info">
              <h4>{review.author}</h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;