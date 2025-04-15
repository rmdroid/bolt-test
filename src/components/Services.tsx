import React from 'react';
import { BarChart3, Target, Lightbulb, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-blue-100 p-4 rounded-full mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Marktanalyse',
      description: 'Tiefgehende Marktforschung und -analyse zur Identifizierung von Wachstumschancen und Wettbewerbsvorteilen.',
    },
    {
      icon: Target,
      title: 'Strategische Planung',
      description: 'Entwicklung umsetzbarer Strategien zur Erreichung Ihrer langfristigen Geschäftsziele und Visionen.',
    },
    {
      icon: Lightbulb,
      title: 'Prozessoptimierung',
      description: 'Optimierung Ihrer Abläufe für höhere Effizienz, Kostensenkung und verbesserte Leistung.',
    },
    {
      icon: Users,
      title: 'Organisationsentwicklung',
      description: 'Verbesserung von Teamstrukturen, Führungskompetenzen und Unternehmenskultur für nachhaltigen Erfolg.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Unsere Beratungsleistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
