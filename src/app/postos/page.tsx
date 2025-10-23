import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

export default function PostosPage() {
  const postos = [
    {
      id: 1,
      nome: "UBS Centro",
      endereco: "Rua Principal, 123 - Centro",
      horario: "Segunda a Sexta: 8h às 17h",
      telefone: "(11) 3456-7890",
      vacinas: ["COVID-19", "Influenza", "Hepatite B", "Tétano"]
    },
    {
      id: 2,
      nome: "UBS Jardim das Flores",
      endereco: "Av. das Acácias, 456 - Jardim das Flores",
      horario: "Segunda a Sexta: 7h às 16h",
      telefone: "(11) 3456-7891",
      vacinas: ["COVID-19", "Influenza", "Febre Amarela", "HPV"]
    },
    {
      id: 3,
      nome: "UBS Vila Nova",
      endereco: "Rua Santos Dumont, 789 - Vila Nova",
      horario: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      telefone: "(11) 3456-7892",
      vacinas: ["COVID-19", "Influenza", "Tríplice Viral", "Pneumocócica"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Banner Azul */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Phone className="text-red-500" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Postos de Vacinação
            </h1>
          </div>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Encontre o posto de saúde mais próximo de você e mantenha sua vacinação em dia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Info Box */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <Calendar className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Documentos Necessários</h3>
              <p className="text-blue-800">
                Leve seu documento de identidade, CPF e carteira de vacinação (se tiver). 
                Para menores de idade, levar certidão de nascimento ou RG.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de Postos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {postos.map((posto) => (
            <div 
              key={posto.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2"></div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {posto.nome}
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{posto.endereco}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{posto.horario}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{posto.telefone}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Vacinas Disponíveis:</h3>
                  <div className="flex flex-wrap gap-2">
                    {posto.vacinas.map((vacina, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {vacina}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Informações Importantes
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">💉</div>
              <h3 className="font-semibold text-gray-800 mb-2">Gratuito</h3>
              <p className="text-gray-600 text-sm">
                Todas as vacinas são gratuitas pelo SUS
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🕐</div>
              <h3 className="font-semibold text-gray-800 mb-2">Sem Agendamento</h3>
              <p className="text-gray-600 text-sm">
                Compareça diretamente ao posto no horário de funcionamento
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold text-gray-800 mb-2">Para Todos</h3>
              <p className="text-gray-600 text-sm">
                Vacinas disponíveis para todas as idades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}