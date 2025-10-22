import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Navbar */}
        <nav style={{ 
          backgroundColor: 'white', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}>
          <div className="container" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem',
            height: '80px'
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                backgroundColor: '#2563eb', 
                padding: '0.5rem', 
                borderRadius: '0.5rem' 
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                  Portal de Vacinação
                </h1>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0 }}>Saúde para todos</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: '#374151', fontWeight: 500 }}>Início</a>
              <a href="/vacinas" style={{ color: '#374151', fontWeight: 500 }}>Vacinas</a>
              <a href="/calendario" style={{ color: '#374151', fontWeight: 500 }}>Calendário</a>
              <a href="/postos" style={{ color: '#374151', fontWeight: 500 }}>Postos</a>
              <a href="/contato" style={{ color: '#374151', fontWeight: 500 }}>Contato</a>
            </div>

            {/* Action Buttons */}
            <div className="hidden-mobile" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button style={{ 
                color: '#2563eb', 
                fontWeight: 500,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                👤 Entrar
              </button>
              <button className="btn-primary">
                📅 Agendar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="visible-mobile" style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0' }}>
          <div className="container">
            <div className="grid" style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {/* About */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ backgroundColor: '#2563eb', padding: '0.5rem', borderRadius: '0.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Portal de Vacinação</h4>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  Comprometidos com a saúde e bem-estar de toda a comunidade.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Links Úteis</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Calendário de Vacinas</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Postos de Vacinação</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Perguntas Frequentes</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Contato</a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Serviços</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Agendar Vacina</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Consultar Carteira</a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Certificado Digital</a>
                  </li>
                  <li>
                    <a href="#" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Campanhas Ativas</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contato</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                    📞 0800 123 4567
                  </li>
                  <li style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                    ✉️ contato@vacinacao.gov.br
                  </li>
                  <li style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    ⏰ Seg-Sex: 8h às 18h
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ 
              borderTop: '1px solid #374151', 
              paddingTop: '2rem', 
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '0.875rem'
            }}>
              <p>&copy; 2025 Portal de Vacinação. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}