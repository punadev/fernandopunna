import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  const skillsData = {
    marketing: {
      title: "Técnico de Marketing",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/50",
      textColor: "text-indigo-700 dark:text-indigo-300",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      responsibilities: [
        "Não trabalho com marketing por tendência — trabalho com estratégia. Desenvolvo campanhas orientadas por dados, com planeamento de conteúdo, gestão de redes sociais, gestão de website, SEO,automação de marketing, tudo pensado para atrair, converter e fidelizar. Meu foco é posicionar marcas de forma inteligente e fazê-las crescer de forma consistente."
      ],
      tools: ["Google Ads", "Meta Business", "Analytics", "Mailchimp", "RD Station"]
    },
    design: {
      title: "Designer Gráfico",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
      textColor: "text-purple-700 dark:text-purple-300",
      borderColor: "border-purple-200 dark:border-purple-800",
      responsibilities: [
        "Domino o design como ferramenta estratégica, não apenas estética. Crio identidades visuais autênticas, materiais publicitários envolventes e interfaces modernas, sempre com foco na mensagem, no público e nos resultados. Minha abordagem é simples: cada traço precisa vender uma ideia e despertar emoção."
      ],
      tools: ["Adobe Photoshop", "Figma", "Blender", "After Effects", "Adobe Premiere", "Canva"]
    },
    web: {
      title: "Web Developer",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
      textColor: "text-blue-700 dark:text-blue-300",
      borderColor: "border-blue-200 dark:border-blue-800",
      responsibilities: [
        "Como Web Developer, transformo conceitos em soluções digitais sólidas. Crio websites rápidos, responsivos e seguros, com código limpo e escalável, integrando design, usabilidade e tecnologia. Domino HTML, CSS, JavaScript, React, Node.js, MySQL e Wordpress construindo experiências digitais que refletem o poder e o propósito da marca."
      ],
      tools: ["React", "Javascript", "Node.js", "Tailwind CSS", "MySQL", "WordPress", "Git"]
    }
  };

  const currentSkill = skillsData[activeTab as keyof typeof skillsData];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
        </div>
        
        <div className="grid">
          {/* Skills Tabs */}
          <div className="space-y-6 w-full">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              {Object.entries(skillsData).map(([key, skill]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-center font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === key
                      ? `bg-white dark:bg-gray-700 shadow-sm ${skill.textColor}`
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${activeTab === key ? skill.bgColor : 'bg-gray-200 dark:bg-gray-700'}`}>
                      {skill.icon}
                    </div>
                    <span>{skill.title}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-10 shadow-lg border ${currentSkill.borderColor} transition-all duration-500 w-full`}>
              <div className="flex items-center mb-6 sm:mb-8">
                <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${currentSkill.color} text-white mr-4 sm:mr-5`}>
                  {currentSkill.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{currentSkill.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Competências</h4>
                  <ul className="space-y-3">
                    {currentSkill.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2.5 mr-3 ${currentSkill.bgColor}`}></div>
                        <span className="text-base text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Ferramentas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSkill.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-2 rounded-full text-sm font-medium ${currentSkill.bgColor} ${currentSkill.textColor}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;