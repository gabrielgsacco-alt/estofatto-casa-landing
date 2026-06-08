import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ChatMessage = {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

const FAQ_RESPONSES: Record<string, string> = {
  'frete': 'Entregamos em toda Campo Grande e Mato Grosso do Sul. O frete é calculado conforme a localidade e volume do pedido. Fale com um consultor para mais detalhes!',
  'prazo': 'Produtos em estoque: entrega em poucos dias úteis. Peças personalizadas: 30 a 45 dias úteis. Garantimos qualidade em cada etapa!',
  'garantia': 'Todos os móveis têm garantia de 1 ano contra defeitos de fabricação. Oferecemos suporte dedicado de pós-venda.',
  'personalizar': 'Sim! Praticamente todos os modelos podem ser personalizados em tamanho, modulação e tecido. Nossos consultores ajudam a projetar a peça perfeita.',
  'showroom': 'Rua 13 de Maio, 1459, Centro, Campo Grande. Seg-Sex: 08:30-18:00 | Sábado: 08:00-12:30. Venha nos visitar!',
  'contato': 'WhatsApp: (67) 99331-0724 | Telefone: (67) 3325-9999 | Instagram: @estofattocasacg',
  'oi': 'Olá! Bem-vindo à Estofatto Casa! Como posso ajudá-lo? Pergunte sobre frete, prazos, garantia, personalização ou visite nosso showroom!',
  'olá': 'Olá! Bem-vindo à Estofatto Casa! Como posso ajudá-lo? Pergunte sobre frete, prazos, garantia, personalização ou visite nosso showroom!',
};

const KEYWORDS: Record<string, string[]> = {
  'frete': ['frete', 'entrega', 'envio', 'transporte'],
  'prazo': ['prazo', 'quanto tempo', 'quando chega', 'demora'],
  'garantia': ['garantia', 'defeito', 'problema', 'qualidade'],
  'personalizar': ['personalizar', 'medida', 'tamanho', 'tecido', 'cor'],
  'showroom': ['showroom', 'loja', 'endereço', 'onde', 'visita'],
  'contato': ['contato', 'telefone', 'whatsapp', 'instagram', 'fone'],
};

function findMatchingResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, keywords] of Object.entries(KEYWORDS)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return FAQ_RESPONSES[key];
    }
  }
  
  return 'Obrigado pela pergunta! Para dúvidas específicas, fale com um de nossos consultores pelo WhatsApp (67) 99331-0724. Estamos aqui para ajudar!';
}

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Olá! 👋 Bem-vindo à Estofatto Casa! Como posso ajudá-lo?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Adicionar mensagem do usuário
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simular delay de resposta do bot
    setTimeout(() => {
      const botResponse = findMatchingResponse(inputValue);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-24 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300',
          'bg-primary text-primary-foreground hover:bg-primary/90',
          'flex items-center justify-center w-14 h-14',
          isOpen && 'hidden'
        )}
        aria-label="Abrir chat de suporte"
        title="Chat de Suporte"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-background border-2 border-border rounded-lg shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-[6px]">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <h3 className="font-semibold text-sm">Suporte Estofatto Casa</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary/80 rounded transition-colors"
              aria-label="Fechar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs px-4 py-2 rounded-lg text-sm',
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm">Digitando...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Digite sua pergunta..."
              disabled={isLoading}
              className="text-sm"
            />
            <Button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              size="sm"
              className="px-3"
            >
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
