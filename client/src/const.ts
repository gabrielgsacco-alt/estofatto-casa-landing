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
