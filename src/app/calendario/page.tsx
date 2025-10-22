export default function CalendarioPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            📅 Calendário de Vacinação
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Confira o calendário nacional de vacinação e mantenha sua carteira em dia
          </p>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="container py-20">
        <div className="grid grid-cols-1" style={{ gap: '3rem' }}>
          
          {/* Bebês e Crianças (0-2 anos) */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem' }}>👶</div>
              <div>
                <h2 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Bebês e Crianças (0-2 anos)</h2>
                <p className="text-gray-600">Vacinas essenciais para os primeiros anos de vida</p>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>BCG</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Dose única ao nascer. Protege contra tuberculose.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>Hepatite B</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Ao nascer, 2, 4 e 6 meses.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>Pentavalente</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>2, 4 e 6 meses. Protege contra 5 doenças.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>Poliomielite (VIP/VOP)</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>2, 4, 6 meses e reforço aos 15 meses.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>Rotavírus</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>2 e 4 meses.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1e40af' }}>Pneumocócica 10</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>2, 4 e 6 meses com reforço aos 12 meses.</p>
              </div>
            </div>
          </div>

          {/* Crianças (2-10 anos) */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem' }}>🧒</div>
              <div>
                <h2 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Crianças (2-10 anos)</h2>
                <p className="text-gray-600">Reforços e novas vacinas importantes</p>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>Tríplice Viral (SCR)</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>12 meses e 15 meses. Protege contra sarampo, caxumba e rubéola.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>Varicela</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>15 meses e 4 anos. Protege contra catapora.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>Hepatite A</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>15 meses.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>Febre Amarela</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>9 meses e reforço aos 4 anos.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>HPV</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>9 a 14 anos (2 doses).</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#065f46' }}>Meningocócica ACWY</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>11-12 anos (reforço).</p>
              </div>
            </div>
          </div>

          {/* Adolescentes e Adultos */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem' }}>👨</div>
              <div>
                <h2 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Adolescentes e Adultos</h2>
                <p className="text-gray-600">Mantenha sua proteção atualizada</p>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#92400e' }}>Tétano e Difteria (dT)</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Reforço a cada 10 anos.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#92400e' }}>Hepatite B</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>3 doses se não vacinado antes.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#92400e' }}>Febre Amarela</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Reforço a cada 10 anos.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#92400e' }}>COVID-19</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Esquema completo + reforços anuais.</p>
              </div>
            </div>
          </div>

          {/* Idosos (60+) */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '3rem' }}>👴</div>
              <div>
                <h2 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Idosos (60+ anos)</h2>
                <p className="text-gray-600">Proteção especial para a terceira idade</p>
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#e9d5ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#6b21a8' }}>Influenza (Gripe)</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Anual, geralmente em abril/maio.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#e9d5ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#6b21a8' }}>Pneumocócica 23</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Dose única, reforço após 5 anos.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#e9d5ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#6b21a8' }}>COVID-19</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Esquema completo + reforços.</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#e9d5ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#6b21a8' }}>Herpes Zóster</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>A partir de 50 anos (2 doses).</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#e9d5ff', borderRadius: '0.5rem' }}>
                <h3 className="font-bold mb-2" style={{ color: '#6b21a8' }}>Tétano/Difteria</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Reforço a cada 10 anos.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Está em dia com suas vacinas?</h2>
          <p className="text-lg mb-6" style={{ maxWidth: '40rem', margin: '0 auto 1.5rem' }}>
            Agende sua vacinação agora e proteja sua saúde
          </p>
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            📅 Agendar Vacinação
          </button>
        </div>
      </section>
    </div>
  );
}