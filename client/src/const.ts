/**
 * Constantes de Imagens e Dados da Estofatto Casa
 * Seleção de imagens reais de altíssima qualidade do Unsplash que combinam com o Quiet Luxury.
 * O usuário pode substituir estas URLs por imagens reais do showroom posteriormente.
 */

export const IMAGES = {
  // FOLD 1: Majestic living room, focus on a high-end 2.40m luxury sofa, perfectly scaled against a 3.90m wall. Cinematic lighting, premium fabric texture. ZERO people.
  heroSofa: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",

  // FOLD 2: Macro close-up of premium textures (linen fabric, solid wood joinery).
  textureDetail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1000",

  // FOLD 3: The Curated Collection
  collection: {
    living: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Living & Estofados
    jantar: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800", // Jantar & Recepção
    autor: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",  // Design de Autor
  },

  // FOLD 4: Imposing physical showroom architecture. No people.
  showroom: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
};

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
