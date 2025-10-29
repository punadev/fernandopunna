import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl w-full mx-auto">
        {/* Contact Info - Two columns layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Title and Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Vamos Conversar
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Nada melhor do que uma boa conversa para nos conhecermos. Que tal agendarmos um meeting para falar sobre a sua proposta e as possibilidades de trabalharmos juntos?
            </p>
          </div>
          
          {/* Right Column - Contact Methods */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                value: "fernandomabiala97@gmail.com",
                action: "mailto:fernandomabiala97@gmail.com"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Telefone",
                value: "+244 930009134",
                action: "tel:+244930009134"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Localização",
                value: "Luanda, Angola",
                action: "#"
              }
            ].map((contact, index) => (
              <a 
                key={index}
                href={contact.action}
                className="flex items-start p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mr-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{contact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;