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
    author: "Cliente Estofatto Casa",
    role: "Atendimento por Elisabete",
    rating: 5,
    text: "Ficou lindo! Moramos em uma cidade distante e que aqui não temos muita opção.. então nos atendimentos me senti como se estivesse na loja.. tirei todas minhas dúvidas e estou bem contente com o meu produto!",
    date: "Depoimento via WhatsApp",
    whatsappImage: "/manus-storage/pasted_file_fNPv4Y_image_14b31646.png"
  },
  {
    id: 2,
    author: "Camila",
    role: "Atendimento por Isadora",
    rating: 5,
    text: "Quero agradecer de coração por todo o carinho e atenção durante o atendimento. A forma como fui recebida, com tanta simpatia, respeito e delicadeza, fez toda a diferença. É raro encontrar um atendimento tão acolhedor e humano — obrigada por cada gesto e por todo o cuidado!",
    date: "Depoimento via WhatsApp",
    whatsappImage: "/manus-storage/pasted_file_RMWedD_image_b526b34b.png"
  },
  {
    id: 3,
    author: "Alyne",
    role: "Atendimento por Mary",
    rating: 5,
    text: "Gostaria de agradecer por todo atendimento. Tudo o que combinou foi entregue com pontualidade britânica. Agora já sabemos quem procurar. Um beijo e parabéns pelo seu trabalho!",
    date: "Depoimento via WhatsApp",
    whatsappImage: "/manus-storage/pasted_file_G7K7zE_image_c649be35.png"
  },
  {
    id: 4,
    author: "Cliente Estofatto Casa",
    role: "Feedback de pós-venda",
    rating: 5,
    text: "Boa tarde! Gostamos da gentileza. De sempre tentarem encontrar soluções para o que precisamos. A preocupação de realmente adquirirmos uma peça que vai ser compatível com o ambiente, que vai se ajustar. As formas de pagamento. Entrega em pouco tempo e com flexibilidade de horário.",
    date: "Depoimento via WhatsApp",
    whatsappImage: "/manus-storage/pasted_file_2PlZUx_image_05f307c0.png"
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Como funciona o frete e a montagem para Campo Grande e região?",
    answer: "Entregamos e montamos em toda a cidade de Campo Grande e em todas as cidades do estado do Mato Grosso do Sul. O valor do frete varia de acordo com a sua localidade e o volume do pedido, sendo calculado de forma transparente pelo nosso consultor durante o atendimento."
  },
  {
    id: "faq-2",
    question: "Quais são os prazos de entrega dos estofados?",
    answer: "Para produtos em estoque, a entrega em Campo Grande é quase imediata, realizada em poucos dias úteis. Para estofados personalizados sob medida (onde você escolhe o tecido, tamanho e cor), o prazo médio de produção e entrega é de 30 a 45 dias úteis, garantindo que sua peça seja fabricada com o máximo rigor de qualidade."
  },
  {
    id: "faq-3",
    question: "Qual é o prazo e a cobertura da garantia dos móveis?",
    answer: "Todos os nossos móveis e estofados possuem garantia de fábrica contra defeitos de fabricação de 1 ano. Oferecemos também suporte de pós-venda dedicado para qualquer manutenção ou assistência necessária."
  },
  {
    id: "faq-4",
    question: "É possível personalizar o tamanho e o tecido dos sofás?",
    answer: "Sim! Essa é uma das nossas maiores especialidades. Praticamente todos os nossos modelos de estofados podem ser personalizados em termos de modulação, largura total, profundidade e tipo de tecido (linhos nobres, couro, boucle, tecidos antimanchas, etc.). Nossos consultores ajudam você a projetar a peça perfeita para a sua planta."
  },
  {
    id: "faq-5",
    question: "O showroom físico está aberto para visitação? Onde fica?",
    answer: "Sim, adoramos receber nossos clientes! Nosso showroom monumental fica na Rua 13 de Maio, 1459, no Centro de Campo Grande, MS. Funcionamos de segunda a sexta das 08:30 às 18:00, e aos sábados das 08:00 às 12:30. Venha experimentar o conforto de nossas peças pessoalmente!"
  }
];


/**
 * Função para gerar URL de login com OAuth
 * Encoda a origem e o caminho de retorno no estado para segurança
 */
export function getLoginUrl(returnPath?: string): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const state = btoa(JSON.stringify({ origin, returnPath: returnPath || '/' }));
  const portalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || '';
  const appId = import.meta.env.VITE_APP_ID || '';
  
  return `${portalUrl}/oauth/authorize?client_id=${appId}&redirect_uri=${encodeURIComponent(origin)}/api/oauth/callback&state=${state}&response_type=code`;
}

export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
