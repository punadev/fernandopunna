import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { preloadImage } from '../utils/imageOptimizer';
import { resumePdf } from '../assets/imageAssets';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // To track which modal to show

  // Preload the PDF to improve download performance
  useEffect(() => {
    preloadImage(resumePdf).catch(() => {
      // Ignore errors for PDF preloading
    });
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Téc. Marketing e Designer Gráfico",
      company: "Multitel",
      period: "2022 - Presente",
      location: "Angola - Luanda, Miramar - Rua Cristiano dos Santos",
      description: "Responsável pela criação de artes gráficas para meios digitais, materiais impressos e revistas digitais, assegurando a coerência da comunicação institucional. Desenvolvimento e execução de planos estratégicos de marketing digital, com foco na gestão de websites e redes sociais. Criação de conteúdos e comunicações para eventos, incluindo a elaboração de planos de publicações (postplan). Desenvolvimento de campanhas externas e na implementação de estratégias de endomarketing, promovendo a motivação e o alinhamento das equipas internas. Realização de pesquisas de mercado, análises da concorrência e estudos de benchmarking para apoiar a tomada de decisões estratégicas.",
      achievements: [
        "Desenvolvimento de identidades visuais marcantes, que fortaleceram a presença e o sucesso de eventos de exposição.",
        "Conceção e implementação de canais de captação de vendas, optimizados para gerar leads qualificados e aumentar as conversões de forma consistente.",
        "Crescimento de 60% no número de seguidores no LinkedIn, alcançado apenas através de estratégias de tráfego orgânico."
      ]
    },
    {
      id: 2,
      title: "Técnico de Marketing",
      company: "N' ASSINATURAS",
      period: "2025 - 2025",
      location: "Luanda - Angola, Talatona Business Park",
      description: "Responsável pelo Departamento de Marketing, com funções que incluem o desenvolvimento de planos estratégicos, gestão das redes sociais, criação de artes e materiais visuais, elaboração de apresentações institucionais e coordenação de propostas comerciais."
    },
        {
      id: 3,
      title: "Designer gráfico (Freelancer)",
      company: "Omnivoip - Telefonia IP e sistemas",
      period: "2025 - 2025",
      location: "Luanda - Angola",
      description: "Criação e desenvolvimento de artes gráficas para as redes sociais, incluindo design de publicações, stories, capas e banners, com foco em fortalecer a presença digital da marca, aumentar o engajamento e comunicar mensagens de forma criativa e profissional, adaptadas ao contexto e estilo visual angolano."
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Acucoin",
      period: "2021 - 2022",
      location: "Luanda - Angola, Sequele",
      description: "Trabalhei como responsável de T.I, onde desenvolvi APIs utilizando o framework Laravel.",
      achievements: [
        "Aprofundei os meus conhecimentos sobre criptomoedas e sobre a blockchain da TronLink",
        "Adquiri bases sólidas sobre o funcionamento de DApps e iniciei estudos na criação de contratos inteligentes."
      ]
    },
    {
      id: 5,
      title: "Web Designer (Remote Job)",
      company: "Iberdomotica",
      period: "2020 - 2021",
      location: "Zaragoza – Espanha",
      description: "Desempenhei funções como desenvolvedor WordPress, com foco no desenvolvimento de sistemas internos e dashboards interativos para o controlo e gestão de processos conectados a placas Arduino. O meu trabalho envolveu tanto a parte lógica do sistema como a interface visual, garantindo eficiência e usabilidade nas operações internas.",
      achievements: [
        "Aprofundei os meus conhecimentos em programação avançada com WordPress, explorando o uso de hooks, actions e filters para criar soluções personalizadas e dinâmicas. Desenvolvi integrações entre sistemas web e hardware (Arduino), o que permitiu automatizar tarefas e melhorar significativamente o desempenho operacional da empresa."
      ]
    },
    {
      id: 6,
      title: "Responsável do departamento de sistemas web",
      company: "Close Up",
      period: "2019 - 2023",
      location: "Luanda - Angola, Viana 500 casas",
      description: "A CloseUp foi mais do que uma experiência profissional: representou um espaço de crescimento onde pude explorar a fundo o meu lado de desenvolvedor web, assumindo responsabilidades que iam desde a gestão de projectos até à execução de múltiplas actividades técnicas e criativas. Esta experiência permitiu-me consolidar Competências em planeamento, resolução de problemas e adaptação a diferentes contextos de trabalho, e abriu-me portas para prestar serviços como freelancer em alguns países fora de Angola, ampliando a minha experiência internacional e a capacidade de lidar com projectos complexos e diversificados.",
      achievements: [
        "Execução de projectos web completos, desde a concepção até à implementação",
        "Gestão de tempo e gestão de projetos",
        "Fortalecimento da capacidade de gestão de múltiplas tarefas e prioridades em ambientes desafiantes"
      ]
    },
    {
      id: 7,
      title: "Formador de Design Gráfico",
      company: "SINFOCAB",
      period: "2019 - 2019",
      location: "Cabinda - Angola",
      description: "A convite do Director do Centro de Formação, tive a honra de exercer a função de formador no curso de Design Gráfico, partilhando conhecimentos técnicos e práticos sobre ferramentas de criação visual, identidade corporativa e comunicação visual.",
      achievements: [
        "Contribuí activamente para a capacitação de novos talentos na área do design",
        "Desenvolvi planos de aula e materiais didácticos adaptados à realidade do mercado angolano",
        "Promovi projectos práticos que incentivaram a criatividade e o pensamento crítico dos formandos"
      ]
    },
    {
      id: 8,
      title: "Designer Gráfico",
      company: "Fresh Studio",
      period: "2016 - 2018",
      location: "Cabinda - Angola",
      description: "Durante o meu percurso na empresa, actuei como Designer Gráfico, com foco na criação de artes e edição de imagens.",
    },
    {
      id: 9,
      title: "Designer Gráfico",
      company: "Hobbies Studios",
      period: "2012 - 2016",
      location: "Cabinda - Angola",
      description: "Na minha primeira experiência profissional, tive o privilégio de iniciar a minha carreira na Hobbies Studios, onde tudo começou com poucos anos de experiência. Foi neste espaço que adquiri e desenvolvi os conhecimentos que hoje aplico em Design Gráfico, Marketing e Desenvolvimento de Sistemas. Esta experiência foi fundamental para moldar a minha visão criativa, técnica e estratégica, permitindo-me crescer profissionalmente e assumir desafios cada vez maiores.",
      achievements: [
        "Aquisição prática de Competências em design gráfico, criação de artes e edição de imagens",
        "Introdução às estratégias de marketing digital e comunicação visual;",
        "Capacidade de trabalhar de forma autónoma e criativa, enfrentando desafios do início da carreira",
        "Construção de uma base sólida que impulsionou toda a evolução profissional subsequente.",
        "criação de artes visuais para RAV’s (festas) e outros eventos."
      ]
    }
  ];

  const education = [
    {
      id: 1,
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Faculdade AIEC, Brasil",
      period: "2024 - 2026",
      description: "No curso de Análise e Desenvolvimento de Sistemas na AIEC, aprendi a desenvolver e gerir sistemas de software, programar em algumas linguagens, criar aplicações web e móveis, gerir bases de dados e aplicar boas práticas de desenvolvimento e segurança, preparando-me para resolver problemas reais de forma práticas."
    },
    {
      id: 2,
      title: "Formado em Artes Visuais (PUNIV) ",
      institution: "Angola - Buco Ngoio, Cabinda",
      period: "2015 - 2017",
      description: "Formação em design visual, tipografia, branding e produção gráfica."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Inteligência Artificial para Marketing Essencial",
      issuer: "CONVERSION",
      date: "2025",
      description: "Aprendi a aplicar a inteligência artificial de forma prática no marketing, optimizando campanhas e tomando decisões mais assertivas."
    },
    {
      id: 2,
      title: "SEO SUMMIT",
      issuer: "CONVERSION",
      date: "2025",
      description: "Dominei técnicas de SEO para melhorar a visibilidade online de websites, atraindo tráfego qualificado e aumentando a performance digital."
    },
    {
      id: 3,
      title: "Marketing Digital",
      issuer: "RD Station",
      date: "2023",
      description: "Adquiri Competências essenciais em estratégias digitais, redes sociais, email marketing e campanhas online para gerar resultados concretos."
    },
    {
      id: 4,
      title: "Marketing Inbound (Estratégico)",
      issuer: "RD Station",
      date: "2023",
      description: "Especialização em design de interfaces e experiências do usuário."
    },

    {
      id: 3,
      title: "Transforme-se Com IA",
      issuer: "RD Station",
      date: "2023",
      description: "Explorei ferramentas e metodologias de IA para potencializar a produtividade pessoal e profissional, transformando processos de forma simples."
    },
    {
      id: 3,
      title: "Imersão em Planejamento para Lideranças de Marketing e Vendas",
      issuer: "RD Station",
      date: "2023",
      description: "Aprofundei a capacidade de planear e liderar estratégias de marketing e vendas, alinhando equipas e objetivos para alcançar resultados consistentes."
    },
        {
      id: 3,
      title: "Formação Completa para Agências de Marketing e Vendas",
      issuer: "RD Station",
      date: "2023",
      description: "Capacitei-me para gerir agências de marketing e vendas de forma completa, desde a prospecção de clientes até a execução e análise de campanhas."
    },
        {
      id: 3,
      title: "Gestão de Vendas",
      issuer: "Tis Angola",
      date: "2024",
      description: "Desenvolvi Competências em planeamento, execução e acompanhamento de processos de vendas, melhorando resultados e performance comercial."
    }

  ];

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
    setActiveTab(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  const getContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-indigo-200 dark:border-indigo-900 last:pb-0">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Principais Conquistas:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 mr-4">
                    <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'experience':
        return 'Experiência Profissional';
      case 'education':
        return 'Educação';
      case 'certifications':
        return 'Certificações';
      default:
        return '';
    }
  };

  const renderModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{getModalTitle()}</h3>
            <button 
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto p-6 flex-grow">
            {getContent()}
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={closeModal}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleDownload = () => {
    // Create a temporary link for downloading the PDF
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'FERNANDO PUNA - Técnico de Marketing.pdf';
    link.style.display = 'none';
    
    // Add to DOM, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Modal for all sections */}
      {renderModal()}
      
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experiência
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Minha trajectória profissional e formação acadêmica
          </p>
          <p className='p-5'>Clica por favor nas abas para mais detalhes</p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'experience', label: 'Experiência Profissional' },
            { id: 'education', label: 'Educação' },
            { id: 'certifications', label: 'Certificações' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => openModal(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id && !isModalOpen
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Download Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Currículo Completo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;