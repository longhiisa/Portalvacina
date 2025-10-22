export default function InformativosPage() {
  const news = [
    {
      title: "Nova Campanha de Vacinação contra a Gripe em 2025",
      date: "20 de Outubro de 2025",
      category: "Campanha",
      excerpt: "Ministério da Saúde anuncia início da campanha nacional de vacinação contra influenza para grupos prioritários.",
      image: "📰"
    },
    {
      title: "Atualização do Calendário Nacional de Vacinação",
      date: "15 de Outubro de 2025",
      category: "Calendário",
      excerpt: "Confira as mudanças no calendário vacinal e as novas recomendações para todas as faixas etárias.",
      image: "📅"
    },
    {
      title: "Importância da Vacinação na Prevenção de Doenças",
      date: "10 de Outubro de 2025",
      category: "Educação",
      excerpt: "Entenda como as vacinas funcionam e por que são essenciais para a saúde pública.",
      image: "🔬"
    },
    {
      title: "Novos Postos de Vacinação em Botucatu",
      date: "5 de Outubro de 2025",
      category: "Notícia Local",
      excerpt: "Cidade inaugura três novos postos para facilitar o acesso à vacinação da população.",
      image: "🏥"
    },
    {
      title: "Vacinação contra COVID-19: Doses de Reforço",
      date: "1 de Outubro de 2025",
      category: "COVID-19",
      excerpt: "Saiba quem deve tomar a dose de reforço e onde se vacinar contra a COVID-19.",
      image: "💉"
    },
    {
      title: "Mitos e Verdades sobre Vacinas",
      date: "25 de Setembro de 2025",
      category: "Educação",
      excerpt: "Especialistas esclarecem as principais dúvidas e desinformações sobre imunização.",
      image: "❓"
    }
  ];

  const categoryColors: { [key: string]: string } = {
    "Campanha": "#dbeafe",
    "Calendário": "#d1fae5",
    "Educação": "#fef3c7",
    "Notícia Local": "#e9d5ff",
    "COVID-19": "#fee2e2"
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            📰 Informativos e Notícias
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Fique por dentro das últimas novidades sobre vacinação
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="container" style={{ marginTop: '-3rem', paddingBottom: '3rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'center' }}>
            <div style={{
              backgroundColor: '#eff6ff',
              borderRadius: '0.5rem',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem'
            }}>
              🎯
            </div>
            <div>
              <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                Destaque
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Campanha Nacional de Multivacinação 2025
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                O Ministério da Saúde lança a maior campanha de atualização da carteira de vacinação. 
                Todas as vacinas do calendário nacional estarão disponíveis para crianças e adolescentes 
                menores de 15 anos. A campanha acontece de outubro a novembro em todos os postos do país.
              </p>
              <button className="btn-primary">
                Saiba Mais →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-8">Últimas Notícias</h2>
        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {news.map((item, index) => (
            <div key={index} className="card hover-lift" style={{ cursor: 'pointer' }}>
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                padding: '2rem 0',
                backgroundColor: '#f9fafb',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
              }}>
                {item.image}
              </div>
              <div 
                className="badge" 
                style={{ 
                  backgroundColor: categoryColors[item.category],
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}
              >
                {item.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                {item.date}
              </p>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <a 
                href="#" 
                style={{ 
                  color: '#2563eb', 
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Ler mais →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 py-20">
        <div className="container">
          <div className="card" style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
            <h2 className="text-2xl font-bold mb-4">Receba Notícias por E-mail</h2>
            <p className="text-gray-600 mb-6">
              Inscreva-se em nossa newsletter e fique por dentro das últimas novidades sobre vacinação
            </p>
            <div style={{ display: 'flex', gap: '1rem', maxWidth: '32rem', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Seu e-mail"
                style={{ flex: 1 }}
              />
              <button className="btn-primary">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Categorias</h2>
        <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
          {Object.keys(categoryColors).map((category, index) => (
            <a 
              key={index}
              href="#"
              className="card text-center hover-lift"
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: categoryColors[category],
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                📑
              </div>
              <h3 className="font-bold" style={{ color: '#1f2937' }}>{category}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}