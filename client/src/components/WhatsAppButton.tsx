import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = '5567993310724'; // Formato internacional: +55 67 99331-0724
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os móveis de luxo da Estofatto Casa.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Overlay para fechar o menu ao clicar fora */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Container do botão flutuante */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Menu expandido */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-in fade-in zoom-in duration-200">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    Fale conosco no WhatsApp
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    Responderemos em breve com informações sobre nossos móveis de luxo.
                  </p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} />
                Abrir WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Botão flutuante principal */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
          aria-label="Abrir WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </>
  );
}
