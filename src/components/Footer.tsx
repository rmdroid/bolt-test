import React from 'react';
import { Briefcase, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Spalte 1: Logo und Über */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="text-blue-500 h-8 w-8" />
              <span className="text-2xl font-bold text-white">ConsultCo</span>
            </div>
            <p className="text-sm">
              Bereitstellung von Experten-Unternehmensberatungsdiensten, um Ihrem Unternehmen zu helfen, in einem wettbewerbsintensiven Markt erfolgreich zu sein.
            </p>
          </div>

          {/* Spalte 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition duration-300 text-sm">Startseite</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition duration-300 text-sm">Leistungen</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition duration-300 text-sm">Über Uns</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300 text-sm">Kontakt</a></li>
            </ul>
          </div>

          {/* Spalte 3: Soziale Medien */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Verbinden Sie sich mit uns</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} ConsultCo. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
