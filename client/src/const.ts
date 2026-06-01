/**
 * Constantes de Imagens e Dados da Estofatto Casa
 * Seleção de imagens reais de altíssima qualidade do Unsplash que combinam com o Quiet Luxury.
 * O usuário pode substituir estas URLs por imagens reais do showroom posteriormente.
 */

export const IMAGES = {
  // FOLD 1: Showroom real da Estofatto Casa com sofá cinza claro, móveis de madeira e acabamento premium
  heroSofa: "/manus-storage/IMG_3140_a28f3515.jpg",

  // FOLD 2: Detalhe de acabamento - poltronas de couro marrom e sofá cinza com ambientação sofisticada
  textureDetail: "/manus-storage/IMG_1659_a556da71.JPG",

  // FOLD 3: The Curated Collection
  collection: {
    living: "/manus-storage/IMG_3140_a28f3515.jpg", // Living & Estofados - foto real do showroom
    jantar: "/manus-storage/26f033d6-e9d4-4940-9fd6-00a98c6d18ad_9f2001dc.webp", // Jantar & Recepção - mesa de madeira com cadeiras estofadas
    autor: "/manus-storage/IMG_9715_0c33e132.webp",  // Design de Autor - detalhe da poltrona com tecido e madeira
  },

  // FOLD 4: Fachada real do showroom Estofatto Casa
  showroom: "/manus-storage/IMG_0641_95710857.JPG",
};

// Informações de contato e localização do showroom
export const CONTACT_INFO = {
  address: "Rua 13 de Maio, 1459",
  neighborhood: "Centro",
  city: "Campo Grande",
  state: "MS",
  cep: "79004-422",
  phone: "(67) 3325-9999", // Telefone da loja
  whatsapp: "5567993310724", // WhatsApp para qualificação de leads
  instagram: "https://www.instagram.com/estofattocasacg/",
  hours: {
    weekday: "08:30 - 18:00",
    saturday: "08:00 - 12:30",
    sunday: "Fechado",
  },
};

export const REELS_VIDEOS = [
  {
    id: 1,
    title: "Teste de Conforto: Sofá Plural",
    description: "Cliente experimentando a maciez e a densidade da espuma D33 no showroom.",
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-comfortable-sofa-42354-large.mp4" // Vídeo placeholder elegante e leve
  },
  {
    id: 2,
    title: "O Queridinho da Classe Média",
    description: "Demonstração do Sofá Retrátil de 2.40m: Conforto de cinema por um preço justo.",
    thumbnail: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-resting-on-a-couch-at-home-42353-large.mp4"
  },
  {
    id: 3,
    title: "Detalhes de Costura e Acabamento",
    description: "Close-up na costura reforçada e na textura do linho antimanchas.",
    thumbnail: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-fabric-and-sewing-machine-41710-large.mp4"
  },
  {
    id: 4,
    title: "Entrega e Montagem na Prática",
    description: "Nossa equipe própria montando com cuidado na casa de um cliente no Jardim dos Estados.",
    thumbnail: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-delivery-man-carrying-a-cardboard-box-43184-large.mp4"
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Mariana Costa",
    role: "",
    rating: 5,
    text: "Fui até a Estofatto procurando um sofá para a sala de TV, mas confesso que estava bem indecisa com as medidas do meu espaço. O Gabriel me atendeu super bem, tirou todas as dúvidas e ajudou a escolher o tamanho perfeito sem pressa. A entrega também foi impecável e os entregadores muito cuidadosos. Super recomendo!",
    date: "Há 1 semana"
  },
  {
    id: 2,
    author: "Thiago & Aline Ramos",
    role: "",
    rating: 5,
    text: "A qualidade dos móveis é indiscutível. Adquiri peças para a minha sala de jantar e o acabamento é impecável. O que mais me chamou a atenção, além do design exclusivo, foi o suporte da Elisabete desde o primeiro contato até o pós-venda. Loja de altíssimo nível.",
    date: "Há 3 semanas"
  },
  {
    id: 3,
    author: "Juliana Medeiros",
    role: "",
    rating: 5,
    text: "Já é a segunda vez que compro na Estofatto. A primeira foi há uns 3 anos e a peça continua impecável, sem afundar ou perder a cor. Agora voltei para escolher umas poltronas novas e o atendimento da Bianca foi perfeito. É raro achar uma loja que mantém o mesmo padrão de excelência ao longo dos anos.",
    date: "Há 1 mês"
  },
  {
    id: 4,
    author: "Ricardo Fontes",
    role: "",
    rating: 5,
    text: "Procurava peças de destaque para a recepção da minha clínica e encontrei na Estofatto. A qualidade dos estofados salta aos olhos de qualquer um que entra no ambiente. O processo de compra foi muito ágil e os entregadores tiveram muito cuidado na montagem. Recomendo de olhos fechados para quem exige qualidade superior.",
    date: "Há 2 meses"
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Como funciona o frete e a entrega dos móveis em Campo Grande e no MS?",
    answer: "Entregamos e montamos em toda a cidade de Campo Grande e em todas as cidades do estado do Mato Grosso do Sul. O valor do frete varia de acordo com a sua localidade e o volume do pedido, sendo calculado de forma transparente pelo nosso consultor durante o atendimento."
  },
  {
    id: "faq-2",
    question: "Qual é o prazo de entrega dos móveis?",
    answer: "Para os produtos disponíveis em nosso showroom, a entrega é imediata e agendada conforme a sua disponibilidade. Para peças personalizadas ou sob medida encomendadas de fábrica, o prazo médio de entrega varia de 30 a 45 dias úteis, dependendo do fabricante e do nível de customização escolhido (tecidos especiais, alterações de medidas ou acabamentos específicos)."
  },
  {
    id: "faq-3",
    question: "Qual é a garantia oferecida nos móveis e estofados?",
    answer: "Todos os nossos móveis e estofados possuem garantia de fábrica contra defeitos de fabricação. Os estofados contam com garantia estrutural de 1 ano para a estrutura de madeira tratada e percintas elásticas, além de 90 dias de garantia legal para o tecido e espumas, conforme o Código de Defesa do Consumidor. Oferecemos também suporte de pós-venda dedicado para qualquer manutenção ou assistência necessária."
  },
  {
    id: "faq-4",
    question: "Posso personalizar as medidas e os tecidos dos sofás?",
    answer: "Sim, um dos nossos grandes diferenciais é a alta capacidade de personalização. A maioria dos nossos sofás e estofados pode ser encomendada sob medida para se adequar perfeitamente ao seu living ou sala de TV. Disponibilizamos um catálogo com centenas de opções de tecidos nobres, incluindo linhos, veludos, couros e opções com tratamentos antimanchas e pet-friendly (resistentes a arranhões)."
  },
  {
    id: "faq-5",
    question: "Como faço para agendar uma visita ou solicitar um orçamento?",
    answer: "Você pode iniciar o seu atendimento diretamente pelo nosso formulário de qualificação nesta página. Ao preenchê-lo, nossa equipe de especialistas (Elisabete, Gabriel ou Bianca) entrará em contato rapidamente para entender as necessidades do seu projeto, enviar orçamentos personalizados via WhatsApp ou agendar uma visita exclusiva ao nosso showroom."
  }
];
