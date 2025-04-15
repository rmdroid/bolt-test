import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="Team bei der Zusammenarbeit"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Über ConsultCo
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              ConsultCo wurde mit einer einzigen Mission gegründet: die erfolgreichste, kreativste und bahnbrechendste Beratungsagentur zu sein. Wir begegnen jedem unserer Kunden mit frischem Blick, um maßgeschneiderte, einzigartige Strategien zu entwickeln.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Obwohl wir seit unserer Gründung gewachsen sind, sind wir im Herzen immer noch dieselbe Agentur. Lassen Sie uns helfen, Ihre Träume Wirklichkeit werden zu lassen. Sind Sie bereit, Ihre Marke oder Ihr Unternehmen auf den Erfolgspfad zu bringen?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-blue-600 mb-2" />
                <span className="font-semibold text-gray-700">Expertenteam</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                <span className="font-semibold text-gray-700">Bewährte Ergebnisse</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <span className="font-semibold text-gray-700">Kundenorientiert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
