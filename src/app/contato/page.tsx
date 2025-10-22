'use client';
import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            📞 Entre em Contato
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Estamos aqui para ajudar você com suas dúvidas sobre vacinação
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-20">
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  E-mail *
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Telefone
                </label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Assunto *
                </label>
                <select 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendamento de Vacina</option>
                  <option value="duvidas">Dúvidas sobre Vacinas</option>
                  <option value="carteira">Carteira de Vacinação</option>
                  <option value="postos">Localização de Postos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Mensagem *
                </label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                ✉️ Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ 
                    backgroundColor: '#dbeafe', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    minWidth: '3rem',
                    textAlign: 'center'
                  }}>
                    📞
                  </div>
                  <div>
                    <div className="font-bold mb-1">Telefone</div>
                    <div className="text-gray-600">0800 123 4567</div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      Seg-Sex: 8h às 18h
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ 
                    backgroundColor: '#d1fae5', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    minWidth: '3rem',
                    textAlign: 'center'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <div className="font-bold mb-1">E-mail</div>
                    <div className="text-gray-600">contato@vacinacao.gov.br</div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      Resposta em até 24h
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ 
                    backgroundColor: '#fef3c7', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    minWidth: '3rem',
                    textAlign: 'center'
                  }}>
                    💬
                  </div>
                  <div>
                    <div className="font-bold mb-1">WhatsApp</div>
                    <div className="text-gray-600">(11) 91234-5678</div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      Seg-Sex: 8h às 18h
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ 
                    backgroundColor: '#e9d5ff', 
                    padding: '0.75rem', 
                    borderRadius: '0.5rem',
                    minWidth: '3rem',
                    textAlign: 'center'
                  }}>
                    📍
                  </div>
                  <div>
                    <div className="font-bold mb-1">Endereço</div>
                    <div className="text-gray-600">
                      Ministério da Saúde<br/>
                      Esplanada dos Ministérios<br/>
                      Brasília - DF, 70058-900
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: '#eff6ff' }}>
              <h3 className="text-xl font-bold mb-3">Atendimento de Emergência</h3>
              <p className="text-gray-600 mb-4">
                Para situações urgentes relacionadas a reações adversas a vacinas, ligue para:
              </p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#2563eb',
                marginBottom: '0.5rem'
              }}>
                192 (SAMU)
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                Disponível 24 horas por dia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-blue-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Encontre um Posto Próximo</h2>
          <div style={{ 
            backgroundColor: '#e5e7eb', 
            height: '400px', 
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            color: '#6b7280'
          }}>
            🗺️ Mapa de Postos de Vacinação
          </div>
        </div>
      </section>
    </div>
  );
}