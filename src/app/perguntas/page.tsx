'use client';
import { useState } from 'react';

export default function PerguntasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Por que devo me vacinar?",
      answer: "A vacinação é a forma mais eficaz de prevenir doenças graves. As vacinas protegem você e sua comunidade, reduzindo a transmissão de doenças e salvando milhões de vidas todos os anos."
    },
    {
      question: "As vacinas são seguras?",
      answer: "Sim! As vacinas passam por rigorosos testes de segurança antes de serem aprovadas. Os efeitos colaterais são geralmente leves e temporários, como dor no local da aplicação ou febre baixa."
    },
    {
      question: "Quais documentos preciso levar?",
      answer: "Você deve levar documento de identidade com foto (RG, CNH ou carteira de trabalho), CPF e carteira de vacinação, se tiver. Para menores de idade, levar certidão de nascimento ou RG."
    },
    {
      question: "Como funciona o agendamento?",
      answer: "Você pode agendar através do nosso site clicando em 'Agendar Vacinação', escolher o posto mais próximo, data e horário disponível. Você receberá uma confirmação por e-mail e SMS."
    },
    {
      question: "Posso tomar várias vacinas no mesmo dia?",
      answer: "Sim, na maioria dos casos é possível tomar múltiplas vacinas no mesmo dia. O profissional de saúde avaliará cada caso e indicará a melhor opção."
    },
    {
      question: "Qual o intervalo entre doses?",
      answer: "O intervalo varia conforme a vacina. Geralmente varia de 30 dias a alguns meses. Consulte o calendário de vacinação ou fale com um profissional de saúde."
    },
    {
      question: "Perdi minha carteira de vacinação. O que fazer?",
      answer: "Você pode solicitar a segunda via no posto de saúde onde tomou suas vacinas ou consultar seu histórico vacinal online através do portal do governo."
    },
    {
      question: "Estou grávida. Posso me vacinar?",
      answer: "Algumas vacinas são recomendadas durante a gravidez, como a vacina contra gripe e dTpa. Outras são contraindicadas. Sempre consulte seu médico antes de se vacinar."
    },
    {
      question: "As vacinas causam autismo?",
      answer: "Não! Este mito foi completamente desmentido por diversos estudos científicos. Não há nenhuma relação entre vacinas e autismo."
    },
    {
      question: "Quanto tempo a vacina demora para fazer efeito?",
      answer: "Depende da vacina, mas geralmente leva de 2 a 4 semanas após a última dose para que o corpo desenvolva imunidade completa."
    },
    {
      question: "Preciso tomar reforço das vacinas?",
      answer: "Sim, algumas vacinas precisam de doses de reforço para manter a proteção. O calendário de vacinação indica quando cada reforço deve ser tomado."
    },
    {
      question: "A vacina pode me dar a doença?",
      answer: "Não. As vacinas não causam a doença. Algumas usam versões inativadas ou apenas partes do vírus/bactéria, sendo impossível causar a doença."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="gradient-hero" style={{ color: 'white', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
            ❓ Perguntas Frequentes
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Tire suas dúvidas sobre vacinação
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container py-20">
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ cursor: 'pointer' }}>
                <div 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <h3 className="text-lg font-bold" style={{ color: '#1f2937' }}>
                    {faq.question}
                  </h3>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    color: '#2563eb',
                    transition: 'transform 0.3s',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <div style={{ 
                    marginTop: '1rem', 
                    paddingTop: '1rem', 
                    borderTop: '1px solid #e5e7eb',
                    animation: 'slideDown 0.3s ease-out'
                  }}>
                    <p className="text-gray-600" style={{ lineHeight: '1.8' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Não encontrou sua resposta?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Entre em contato conosco e nossa equipe terá prazer em ajudar
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              📞 Ligar: 0800 123 4567
            </button>
            <button className="btn-secondary">
              ✉️ Enviar E-mail
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}