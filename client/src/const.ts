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
    author: "Juliana Medeiros",
    role: "Arquiteta e Urbanista",
    rating: 5,
    text: "A Estofatto Casa é minha parceira indispensável em projetos de alto padrão. A precisão na escala dos estofados e a qualidade incomparável dos tecidos garantem que o resultado final seja exatamente como planejado no projeto 3D.",
    date: "Há 2 semanas"
  },
  {
    id: 2,
    author: "Roberto Albuquerque",
    role: "Proprietário no Damha",
    rating: 5,
    text: "Atendimento de altíssimo nível. Estávamos procurando um sofá de proporções específicas para nosso living com pé-direito duplo. A curadoria da equipe foi cirúrgica, e a entrega própria deles em Campo Grande foi impecável.",
    date: "Há 1 mês"
  },
  {
    id: 3,
    author: "Ana Beatriz Nogueira",
    role: "Designer de Interiores",
    rating: 5,
    text: "O acervo de design de autor é espetacular. Peças que trazem alma e exclusividade para o ambiente. Além disso, a segurança de saber que a logística é própria e extremamente cuidadosa faz toda a diferença para nós, profissionais.",
    date: "Há 3 meses"
  }
];
