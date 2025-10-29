import React, { useState } from 'react';
import { Briefcase, User, MessageSquare, X, Quote } from 'lucide-react';

const ProfessionalApproachSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const approaches = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Comprometimento",
      description: "Dedicação total aos objectivos do projecto, cumprindo prazos e entregando soluções de alta qualidade."
    },
    {
      icon: <User className="w-10 h-10" />,
      title: "Colaboração",
      description: "Trabalho em estreita parceria com clientes e equipes para garantir alinhamento e satisfação."
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Comunicação",
      description: "Transparência em todos os processos, mantendo todos os stakeholders informados sobre o progresso."
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para formatar textos com ** em negrito
  const formatText = (text: string) => {
    const parts = text.split('**');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // Parte entre ** - deve ser negrito
        return <strong key={index} className="font-bold">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Minha Abordagem Profissional
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Minha abordagem profissional é baseada em três pilares fundamentais que garantem resultados em cada projecto.
          </p>
          {/* Botão para abrir a modal */}
          <button
            onClick={openModal}
            className="mt-8 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
          >
            Ver Abordagem Completa
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 sm:p-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 sm:p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Minha Abordagem Profissional
              </h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="overflow-y-auto flex-grow">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {approaches.map((approach, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-600"
                    >
                      <div className="p-2 sm:p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 w-fit mb-3 sm:mb-4">
                        {approach.icon}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{approach.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{approach.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalApproachSection;