export default function VacinasPage() {
  const vaccines = [
    {
      name: "BCG",
      description: "Protege contra tuberculose",
      age: "Ao nascer",
      doses: "Dose única",
      color: "#dbeafe"
    },
    {
      name: "Hepatite B",
      description: "Previne hepatite B",
      age: "0, 2, 4 e 6 meses",
      doses: "4 doses",
      color: "#dbeafe"
    },
    {
      name: "Tríplice Viral",
      description: "Protege contra sarampo, caxumba e rubéola",
      age: "12 e 15 meses",
      doses: "2 doses",
      color: "#d1fae5"
    },
    {
      name: "COVID-19",
      description: "Previne formas graves da COVID-19",
      age: "Todas as idades",
      doses: "Múltiplas doses",
      color: "#fef3c7"
    },
    {
      name: "Influenza",
      description: "Protege contra gripe",
      age: "Anual",
      doses: "Dose anual",
      color: "#e9d5ff"
    },
    {
      name: "Pentavalente",
      description: "Protege contra 5 doenças (DTP, Hib, Hepatite B)",
      age: "2, 4 e 6 meses",
      doses: "3 doses",
      color: "#dbeafe"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            💉 Tipos de Vacinas
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Conheça as principais vacinas disponíveis no programa nacional de imunização
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="🔍 Buscar vacina..." 
            style={{ 
              padding: '1rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '0.5rem',
              border: '2px solid #e5e7eb',
              width: '100%'
            }}
          />
        </div>
      </section>

      {/* Vaccines Grid */}
      <section className="container py-20">
        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {vaccines.map((vaccine, index) => (
            <div 
              key={index} 
              className="card hover-lift"
              style={{ borderTop: `4px solid ${vaccine.color}` }}
            >
              <div style={{
                backgroundColor: vaccine.color,
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '2rem'
              }}>
                💉
              </div>
              <h3 className="text-xl font-bold mb-2">{vaccine.name}</h3>
              <p className="text-gray-600 mb-4">{vaccine.description}</p>
              <div style={{ 
                borderTop: '1px solid #e5e7eb', 
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '0.875rem' }}>
                  <strong>Idade:</strong> {vaccine.age}
                </div>
                <div style={{ fontSize: '0.875rem' }}>
                  <strong>Doses:</strong> {vaccine.doses}
                </div>
              </div>
              <button 
                className="btn-primary" 
                style={{ marginTop: '1rem', width: '100%' }}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-blue-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de mais informações?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Consulte nosso calendário completo ou fale com nossa equipe
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              📅 Ver Calendário
            </button>
            <button className="btn-secondary">
              📞 Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}