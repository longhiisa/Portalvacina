"use client";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Hero Section */}
      <section
        className="gradient-hero"
        style={{
          position: "relative",
          overflow: "visible",
          color: "white",
          marginTop: "5rem", // 👈 espaço entre Navbar e faixa
          borderRadius: "1rem",
        }}
      >
        {/* camada de escurecimento suave */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "black",
            opacity: 0.15,
          }}
        ></div>

        <div
          className="container"
          style={{
            position: "relative",
            padding: "4rem 1rem", // 👈 altura reduzida (antes era 6rem)
            maxWidth: "960px", // 👈 limita largura para ficar mais proporcional
            margin: "0 auto",
          }}
        >
          <div className="text-center">
            {/* Ícone */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            {/* Título */}
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Portal de Vacinação
            </h1>

            {/* Parágrafo */}
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                marginBottom: "1.5rem",
                maxWidth: "42rem",
                margin: "0 auto 1.5rem",
                color: "white"
              }}
            >
              A vacinação é a forma mais eficaz de proteger você e toda a comunidade
              contra doenças graves. Informe-se e mantenha sua carteira de vacinação
              em dia.
            </p>

            {/* Botões */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-primary"
                style={{ fontSize: "1.125rem", padding: "0.875rem 1.75rem" }}
              >
                📅 Agendar Vacinação
              </button>
              <button
                className="btn-primary"
                style={{
                  fontSize: "1.125rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "rgb(59, 130, 246)",
                }}
              >
                📍 Encontrar Posto
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="container" style={{ marginTop: '1rem', paddingBottom: '5rem', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-3 gap-6">

          {/* Pessoas Vacinadas */}
          <div
            className="card card-interactive text-center"
            style={{
              backgroundColor: '#bae6fd', // azul mais vibrante
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid #38bdf8',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4a6e" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#0c4a6e', marginBottom: '0.5rem' }}>2.5M+</h3>
            <p className="text-gray-800">Pessoas Vacinadas</p>
          </div>

          {/* Postos de Vacinação */}
          <div
            className="card card-interactive text-center"
            style={{
              backgroundColor: '#bbf7d0',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid #34d399',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#065f46', marginBottom: '0.5rem' }}>150+</h3>
            <p className="text-gray-800">Postos de Vacinação</p>
          </div>

          {/* Tipos de Vacinas */}
          <div
            className="card card-interactive text-center"
            style={{
              backgroundColor: '#e9d5ff',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid #c084fc',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7e22ce" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#7e22ce', marginBottom: '0.5rem' }}>25+</h3>
            <p className="text-gray-800">Tipos de Vacinas</p>
          </div>

        </div>
      </section>




      {/* Why Vaccinate */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Por que se vacinar?</h2>
        <div className="grid grid-cols-3">
          <div className="card hover-lift" style={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              backgroundColor: '#dbeafe',
              borderRadius: '50%',
              width: '4rem',
              height: '4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Proteção Individual</h3>
            <p className="text-gray-600">As vacinas protegem você contra doenças graves, reduzindo significativamente o risco de complicações.
            </p>
          </div>
          <div className="card hover-lift">
            <div style={{ backgroundColor: '#d1fae5', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Proteção Coletiva</h3>
            <p className="text-gray-600">
              Ao se vacinar, você protege também quem está ao seu redor, especialmente pessoas vulneráveis.
            </p>
          </div>
          <div className="card hover-lift">
            <div style={{ backgroundColor: '#e9d5ff', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Erradicação de Doenças</h3>
            <p className="text-gray-600">
              A vacinação em massa já erradicou doenças como a varíola e está próxima de eliminar a poliomielite.
            </p>
          </div>
        </div>
      </section>

      {/* Vaccines Calendar */}
      <section className="bg-blue-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Calendário de Vacinas</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Confira as vacinas recomendadas para cada faixa etária
          </p>
          <div className="grid grid-cols-4">
            <div className="card hover-lift">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👶</div>
              <h3 className="text-xl font-bold mb-2">0-2 Anos</h3>
              <ul style={{ color: 'var(--gray-600)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• BCG</li>
                <li style={{ marginBottom: '0.5rem' }}>• Hepatite B</li>
                <li style={{ marginBottom: '0.5rem' }}>• Pentavalente</li>
                <li style={{ marginBottom: '0.5rem' }}>• Poliomielite</li>
                <li>• Rotavírus</li>
              </ul>
            </div>
            <div className="card hover-lift">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧒</div>
              <h3 className="text-xl font-bold mb-2">2-10 Anos</h3>
              <ul style={{ color: 'var(--gray-600)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Tríplice Viral</li>
                <li style={{ marginBottom: '0.5rem' }}>• Varicela</li>
                <li style={{ marginBottom: '0.5rem' }}>• Hepatite A</li>
                <li style={{ marginBottom: '0.5rem' }}>• Febre Amarela</li>
                <li>• HPV</li>
              </ul>
            </div>
            <div className="card hover-lift">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨</div>
              <h3 className="text-xl font-bold mb-2">Adultos</h3>
              <ul style={{ color: 'var(--gray-600)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Tétano</li>
                <li style={{ marginBottom: '0.5rem' }}>• Difteria</li>
                <li style={{ marginBottom: '0.5rem' }}>• Hepatite B</li>
                <li style={{ marginBottom: '0.5rem' }}>• Febre Amarela</li>
                <li>• COVID-19</li>
              </ul>
            </div>
            <div className="card hover-lift">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👴</div>
              <h3 className="text-xl font-bold mb-2">Idosos</h3>
              <ul style={{ color: 'var(--gray-600)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Influenza</li>
                <li style={{ marginBottom: '0.5rem' }}>• Pneumocócica</li>
                <li style={{ marginBottom: '0.5rem' }}>• COVID-19</li>
                <li style={{ marginBottom: '0.5rem' }}>• Herpes Zóster</li>
                <li>• Difteria/Tétano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Schedule */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Como Agendar sua Vacinação</h2>
        <div className="grid grid-cols-3">
          <div className="text-center">
            <div style={{ backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Escolha a Vacina</h3>
            <p className="text-gray-600">
              Consulte o calendário e identifique quais vacinas você precisa tomar ou atualizar.
            </p>
          </div>
          <div className="text-center">
            <div style={{ backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Agende Online</h3>
            <p className="text-gray-600">
              Use nosso sistema para agendar dia e horário em um posto próximo a você.
            </p>
          </div>
          <div className="text-center">
            <div style={{ backgroundColor: '#2563eb', color: 'white', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Compareça ao Posto</h3>
            <p className="text-gray-600">
              Leve seus documentos e carteira de vacinação no dia agendado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '5rem 0', borderRadius: '1rem' }}>
        <div className="container text-center" style={{ maxWidth: '64rem' }}>
          <h2 className="text-4xl font-bold mb-6">
            Sua saúde em primeiro lugar
          </h2>
          <p className="text-xl mb-8" style={{color: 'white'}}>
            Não espere! Mantenha sua carteira de vacinação em dia e proteja quem você ama.
          </p>
          <button className="btn-primary" style={{
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
            
          }}>
            Agendar Minha Vacinação Agora
          </button>
        </div>
      </section>
    </div>
  );
}

