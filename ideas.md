# Brainstorming de Design - Estofatto Casa Landing Page

Este documento explora três abordagens estilísticas distintas e filosofias de design para a landing page da Estofatto Casa, uma marca de móveis de luxo em Campo Grande, MS.

---

<response>
<text>
## Ideia 1: "Sussurro Silencioso" (Minimalismo Ultra-Premium & Wabi-Sabi Moderno)

### Design Movement
**Quiet Luxury / Warm Minimalism**. Uma estética que não grita por atenção, mas se impõe pela pureza das formas, qualidade dos materiais e uso magistral do espaço vazio. Inspirado no design escandinavo contemporâneo e na filosofia japonesa Wabi-Sabi, adaptada ao mercado de altíssimo padrão brasileiro.

### Core Principles
1. **Espaço como Luxo**: Áreas generosas de respiro (whitespace) para que cada móvel seja apreciado como uma obra de arte em uma galeria.
2. **Textura Tátil**: Contraste sutil entre superfícies foscas, texturas de linho e veios de madeira natural.
3. **Simetria Imperfeita**: Layouts levemente assimétricos que trazem dinamismo e sensação de curadoria orgânica.
4. **Foco Absoluto no Produto**: Ausência completa de elementos decorativos supérfluos. O móvel é o herói absoluto.

### Color Philosophy
Uma paleta extremamente sofisticada e orgânica, baseada em tons de areia, gesso, travertino e cinza-quente, com acentos em marrom-oliva e preto-carvão escovado.
- **Fundo**: Gesso Suave (`oklch(0.97 0.01 80)`) e Areia Quente (`oklch(0.93 0.015 75)`)
- **Texto**: Cinza-Carvão (`oklch(0.25 0.01 70)`) para legibilidade impecável e suavidade visual.
- **Acentos**: Bronze Antigo (`oklch(0.45 0.03 60)`) e Oliva Profundo (`oklch(0.35 0.02 110)`)

### Layout Paradigm
**Layout de Galeria Assimétrica**. Em vez de uma grade rígida e centralizada, as seções usam grids desconstruídos de 2 ou 3 colunas com alturas variadas. Isso simula a experiência de caminhar por um showroom físico de alta decoração, onde cada ambiente se revela de forma única.

### Signature Elements
- **Bordas Ultrafinas e Linhas de Grade**: Linhas de 0.5px em tons de bronze ou cinza-claro para delimitar seções de forma extremamente sutil, lembrando desenhos arquitetônicos.
- **Efeito de Vidro Jateado (Frosted Glass)**: Menus e cartões com desfoque de fundo suave (`backdrop-blur-md`) evocando sofisticação contemporânea.
- **Indicadores Numéricos Elegantes**: Uso de numeração romana ou serifada clássica pequena (ex: *I. Living*, *II. Jantar*) para guiar a navegação.

### Interaction Philosophy
Interações extremamente suaves e desaceleradas. O hover em botões ou imagens não deve dar um "pulo", mas sim transicionar como um véu de seda se movendo ao vento. Efeitos de zoom sutil nas imagens ao passar o mouse para revelar a textura do tecido.

### Animation
- **Transições**: 250ms a 400ms com curva de easing personalizada (`cubic-bezier(0.215, 0.61, 0.355, 1)`).
- **Entradas**: Revelação gradual (fade-in + slide-up de apenas 15px) com atraso (stagger) para os blocos de texto e imagens, criando uma sensação de revelação poética.

### Typography System
- **Display/Headings**: *Playfair Display* ou *Cinzel* (carregadas via Google Fonts) em pesos Light (300) e Regular (400), com espaçamento entre letras (letter-spacing) amplo.
- **Body**: *Plus Jakarta Sans* ou *Satoshi* em pesos Light (300) e Regular (400) para uma leitura extremamente fluida, limpa e moderna.
</text>
<probability>0.08</probability>
</response>

---

<response>
<text>
## Ideia 2: "Herança Brutalista" (Monolítico, Modernista Brasileiro & Concreto)

### Design Movement
**Modernismo Brutalista Brasileiro / Luxo Arquitetônico**. Inspirado nas obras de Oscar Niemeyer, Lina Bo Bardi e no design de mobiliário dos anos 50/60 (Sérgio Rodrigues, Tenreiro). É uma abordagem que celebra a estrutura, a solidez e a herança do design nacional.

### Core Principles
1. **Solidez e Estrutura**: Uso de formas geométricas fortes, blocos monolíticos e bordas bem definidas.
2. **Contraste de Peso**: Títulos extremamente pesados contrastando com grandes áreas vazias e textos de apoio delicados.
3. **Sombra Arquitetônica**: Sombras profundas e suaves que dão peso tridimensional aos elementos na tela, simulando a luz do sol batendo em concreto e madeira.

### Color Philosophy
Inspirada nos materiais brutos da arquitetura modernista: concreto, jacarandá, couro natural e latão oxidado.
- **Fundo**: Cinza Concreto Claro (`oklch(0.92 0.005 250)`) e Terracota Queimada (`oklch(0.35 0.08 45)`) para seções de destaque.
- **Texto**: Preto Asfalto (`oklch(0.15 0.01 250)`) e Creme Suave (`oklch(0.96 0.01 80)`) em fundos escuros.
- **Acentos**: Ouro Velho (`oklch(0.65 0.07 85)`) e Verde Floresta Imperial (`oklch(0.28 0.04 145)`).

### Layout Paradigm
**Split-Screen Monolítico**. Divisões de tela verticais exatas de 50/50. De um lado, uma imagem arquitetônica monumental e estática; do outro, o texto e a interação rolam de forma independente. Isso cria uma forte ancoragem visual e uma presença imponente.

### Signature Elements
- **Blocos de Cor Sólidos**: Transições abruptas, porém elegantes, entre seções totalmente claras e seções totalmente escuras (terracota ou verde floresta).
- **Molduras Grossas**: Uso de bordas sólidas de 1px ou 2px que emolduram as imagens como se fossem quadros em uma exposição de arte concreta.
- **Monogramas Grandes**: Letras capitulares ou iniciais da marca gigantes em background com opacidade baixíssima (5%).

### Interaction Philosophy
Interações táteis e mecânicas. Os botões parecem se "pressionar" fisicamente na tela (`active:scale-95` com sombras que diminuem). O cursor do mouse pode se transformar em um círculo elegante que interage com os elementos de imagem.

### Animation
- **Transições**: Movimentos rápidos e firmes (150ms a 250ms) usando curvas físicas como `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Entradas**: Revelações em bloco (clip-path ou máscaras de direção) que parecem erguer as paredes da página conforme o usuário rola.

### Typography System
- **Display/Headings**: *Cormorant Garamond* ou *DM Serif Display* em itálico e pesos pesados (Bold/SemiBold) para os títulos principais, mesclado com *Syne* ou *Clash Display* para títulos modernos.
- **Body**: *DM Sans* ou *Instrument Sans* para um aspecto técnico, limpo e arquitetônico.
</text>
<probability>0.06</probability>
</response>

---

<response>
<text>
## Ideia 3: "Sombra & Luz" (Claro-Escuro Cinematográfico & Editorial de Alta Moda)

### Design Movement
**Cinematic Luxury / High-Fashion Editorial**. Uma abordagem altamente dramática que usa o contraste extremo de luz e sombra (Chiaroscuro) para criar mistério, desejo e exclusividade. Lembra o layout de revistas de alta moda como Vogue Casa, AD (Architectural Digest) ou portfólios de grifes como Armani Casa.

### Core Principles
1. **Drama Visual**: Alternância dramática entre luz focada e sombras profundas.
2. **Narrativa Sequencial**: Cada dobra da página funciona como o capítulo de um livro de luxo, contando uma história de sofisticação.
3. **Curation Over Abundance**: Pouquíssimos elementos na tela, mas cada um com um refinamento estético extremo.

### Color Philosophy
Uma paleta baseada no mistério da noite e na sofisticação do preto e branco cinematográfico, com toques de metais preciosos.
- **Fundo**: Preto Obsidiana (`oklch(0.12 0.01 280)`) como fundo predominante, intercalado com seções em Off-White Gélido (`oklch(0.98 0.002 240)`).
- **Texto**: Branco Marfim (`oklch(0.95 0.005 80)`) e Cinza Platina (`oklch(0.65 0.005 240)`).
- **Acentos**: Ouro Champagne (`oklch(0.78 0.06 85)`) e Prata Polida.

### Layout Paradigm
**Layout de Revista de Luxo (Editorial Grid)**. Uso de sobreposição de elementos (imagens que entram ligeiramente sob blocos de texto), colunas deslocadas e textos verticais elegantes. Evita completamente qualquer sensação de site "padrão bootstrap".

### Signature Elements
- **Sobreposições Elegantes (Layering)**: Blocos de texto com fundos semitransparentes que flutuam sobre as imagens dos móveis.
- **Linhas de Tensão**: Linhas verticais finas que conectam seções diferentes, criando um fluxo visual contínuo de cima a baixo.
- **Máscaras de Imagem**: Imagens com cantos arqueados suaves ou silhuetas orgânicas em vez de retângulos perfeitos.

### Interaction Philosophy
Interações misteriosas e reveladoras. Elementos que se iluminam suavemente quando o mouse passa sobre eles. Imagens que revelam detalhes ocultos em preto e branco que ganham cores suaves no hover.

### Animation
- **Transições**: Transições ultra-lentas e imersivas (500ms a 800ms) com `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Entradas**: Efeito de "revelação por cortina" ou desfoque gradual (`blur-in`) que simula a focagem de uma câmera cinematográfica de cinema.

### Typography System
- **Display/Headings**: *Bodoni Moda* ou *Didot* (carregadas via Google Fonts) com seu contraste extremo de traços finos e grossos, evocando a alta costura e o design editorial italiano.
- **Body**: *Montserrat* ou *Inter* em pesos ultra-finos (200/300) e bem espaçados para manter o minimalismo técnico.
</text>
<probability>0.05</probability>
</response>

---

## Decisão e Compromisso de Design

Para a **Estofatto Casa**, escolhemos a **Ideia 1: "Sussurro Silencioso" (Minimalismo Ultra-Premium & Wabi-Sabi Moderno)**.

### Por que esta escolha?
1. **Alinhamento com o Briefing**: O briefing exige um tom "exclusivo, sofisticado, autoritativo e consultivo" onde "o luxo sussurra, não grita". A Ideia 1 é a personificação perfeita desta diretriz.
2. **Foco no Produto e Escala**: O layout de galeria assimétrica e o uso generoso de whitespace dão destaque absoluto às texturas e proporções exatas dos móveis (como o sofá de 2.40m na parede de 3.90m), sem distrações.
3. **Filtro de Qualificação**: Um design extremamente limpo, artístico e "galeria de arte" afasta naturalmente o comprador de varejo focado em preço baixo e atrai arquitetos, designers de interiores e clientes de alto poder aquisitivo que buscam curadoria exclusiva.

### Diretrizes de Implementação
- **Tipografia**: Títulos em *Playfair Display* (Light/Regular, letter-spacing amplo) e corpo em *Plus Jakarta Sans*.
- **Paleta de Cores**: Fundo Off-White/Gesso, textos em Cinza-Carvão escuro, acentos em Bronze/Champagne metalizado sutil e Oliva Profundo para elementos de destaque e botões de ação primária (conferindo um ar de sobriedade e sofisticação orgânica).
- **Imagens**: Usaremos placeholders de imagens reais com proporções exatas (16:9 para hero, 1:1 para texturas, 16:9 para showroom) com sobreposições elegantes e zoom suave no hover.
- **Formulário de Qualificação**: Será o ápice do design — limpo, espaçado, com inputs de linhas minimalistas e dropdowns customizados que parecem um questionário de curadoria VIP de um concierge de luxo.
