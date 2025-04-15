import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center text-white pt-16" // pt-16 für Header-Offset hinzugefügt
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Wachstum fördern durch Expertenberatung
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Entfalten Sie mit uns das volle Potenzial Ihres Unternehmens. Strategische Einblicke, greifbare Ergebnisse.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
        >
          Jetzt starten
        </a>
      </div>
    </section>
  );
};

export default Hero;
