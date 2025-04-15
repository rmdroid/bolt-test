import React, { useState } from 'react';
import { MessageSquare, X, Bot } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Chat öffnen"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">ConsultCo Assistent</span>
          </div>
          <button onClick={toggleChat} aria-label="Chat schließen">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Body (Einfacher Platzhalter) */}
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="flex mb-3">
            <div className="bg-gray-200 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm text-gray-800">
                Hallo! Wie kann ich Ihnen heute helfen? Fragen Sie gerne nach unseren Leistungen oder fordern Sie eine Beratung an.
              </p>
            </div>
          </div>
          {/* Hier später weitere Chat-Nachrichten oder Eingabefeld hinzufügen */}
        </div>

        {/* Footer (Optionaler Eingabebereich) */}
        <div className="p-3 border-t border-gray-200">
          <input
            type="text"
            placeholder="Ihre Nachricht eingeben..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            disabled // Deaktiviert für diese Basisversion
          />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
