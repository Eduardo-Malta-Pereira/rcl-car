import React, { useState } from 'react';
import { Phone, MapPin, Clock, Copy, Check } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [copied, setCopied] = useState(false);
  const whatsappNumber = "5516991674717";
  const fullAddress = "R. Olinda Cortez, 150, Jd Primavera, Brodowski, São Paulo";
  const message = encodeURIComponent("Olá! Gostaria de agendar um serviço premium na RCL CAR.");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-info-panel">
          <h2>Informações de Contato</h2>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="icon-box"><Phone color="white" size={24}/></div>
              <div className="info-text">
                <span>WhatsApp</span>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${message}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <strong>(16) 99167-4717</strong>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><FaInstagram color="white" size={24}/></div>
              <div className="info-text">
                <span>Instagram</span>
                <a href="https://www.instagram.com/rcl.car/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <strong>@rcl.car</strong>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><MapPin color="white" size={24}/></div>
              <div className="info-text">
                <span>Endereço</span>
                <strong>{fullAddress}</strong>
                <button onClick={copyToClipboard} className="copy-btn">
                  {copied ? <Check size={14} color="#25D366" /> : <Copy size={14} />}
                  {copied ? " Copiado!" : " Copiar endereço"}
                </button>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><Clock color="white" size={24}/></div>
              <div className="info-text">
                <span>Horário</span>
                <strong>Seg-Sex: 9h-18h | Sáb: 9h-12h</strong>
              </div>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108.2227628451858!2d-47.65646261134846!3d-21.000954025730355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9ef82b0ca9811%3A0xa6f6ee09a18daf92!2sRCL%20car!5e1!3m2!1spt-BR!2sbr!4v1778182520320!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização RCL CAR"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-panel whatsapp-cta">
          <h2>Fale Conosco agora!</h2>
          <p>Clique no botão abaixo para iniciar uma conversa diretamente com nossa equipe técnica via WhatsApp.</p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-whatsapp"
          >
            <FaWhatsapp size={24} />
            Agendar via WhatsApp
          </a>
          <p className="cta-note">Atendimento rápido e personalizado para o seu veículo.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;