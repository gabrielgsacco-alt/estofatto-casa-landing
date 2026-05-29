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

  // FOLD 4: Imposing physical showroom architecture. No people.
  showroom: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
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
    role: "Moradora do Chácara Cachoeira",
    rating: 5,
    text: "Eu estava quase fechando um sofá em uma loja de grife super famosa aqui de Campo Grande, mas o preço estava absurdo por causa de comissões de projeto. Uma amiga me indicou a Estofatto Casa. Encontrei um modelo com o mesmo design moderno, estrutura idêntica em madeira maciça e tecido de altíssima qualidade, por praticamente metade do preço. Valeu cada centavo!",
    date: "Há 1 semana"
  },
  {
    id: 2,
    author: "Thiago & Aline Ramos",
    role: "Clientes do Carandá Bosque",
    rating: 5,
    text: "Fizemos questão de pesquisar bastante antes de mobiliar nossa sala. Fomos em lojas super caras e a qualidade da Estofatto é exatamente a mesma, mas sem aquela 'gourmetização' que encarece o produto. O atendimento da Elisabete foi super honesto, sem empurrar coisas caras. O sofá de R$ 7.500 que compramos parece que custou R$ 20.000.",
    date: "Há 3 semanas"
  },
  {
    id: 3,
    author: "Juliana Medeiros",
    role: "Arquiteta e Urbanista",
    rating: 5,
    text: "Como arquiteta, prezo muito pela qualidade técnica dos móveis que indico. A Estofatto Casa é fantástica porque trabalha com venda direta, sem taxas embutidas de intermediação. Consigo oferecer aos meus clientes de classe média e média-alta um projeto com cara de revista, móveis extremamente duráveis e confortáveis, mas dentro de um orçamento muito mais realista.",
    date: "Há 1 mês"
  },
  {
    id: 4,
    author: "Ricardo Fontes",
    role: "Morador do Rita Vieira",
    rating: 5,
    text: "Excelente custo-benefício. Comprei uma mesa de jantar com as cadeiras e um estofado para a sala de TV. A estrutura é super firme, espuma de ótima densidade que não deforma. O preço é muito justo e a qualidade bate de frente com qualquer marca famosa do shopping.",
    date: "Há 2 meses"
  }
];
