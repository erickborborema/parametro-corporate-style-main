export const siteConfig = {
  name: "Parâmetro",
  tagline: "Moda Corporativa",
  slogan: "A identidade da sua empresa da cabeça aos pés",
  description: "Uniformes, bordados e estampas com acabamento premium e durabilidade. Mais de 20 anos no mercado.",
  
  // Contact
  phone: "11937009908",
  phoneFormatted: "(11) 93700-9908",
  address: "Rua Catumbi, 552, Belenzinho – SP",
  cep: "03021-000",
  fullAddress: "Rua Catumbi, 552, Belenzinho – SP | 03021-000",
  
  // Social & External Links
  whatsappNumber: "5511937009908",
  whatsappUrl: "https://wa.me/5511937009908?text=Ol%C3%A1%2C+vim+do+instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es.+",
  instagramUrl: "https://instagram.com/parametro.uniformes",
  email: "admparametro@gmail.com",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Catumbi+552+Belenzinho+SP",
  
  // Business Info
  yearsInMarket: "20+",
  
  // Navigation
  navigation: [
    { name: "Início", href: "/" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Como funciona", href: "/como-funciona" },
    { name: "Clientes", href: "/clientes" },
    { name: "Orçamento", href: "/orcamento" },
    { name: "Contato", href: "/contato" },
  ],
  
  // Clients/Partners
  clients: [
    "MasterChef",
    "Samsung",
    "Huawei",
    "OYO",
    "Eucerin",
    "Milklandia",
    "HK",
    "Perdigão",
  ],
  
  // Client logos mapping
  clientLogos: {
    "MasterChef": "/src/assets/MasterChefhttps___www.google.com_url_sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F849350810954940762%2F&ved=0CBUQjRxqFwoTCIDgrePAyJEDFQAAAAAdAAAAABAH&opi=89978449.png",
    "Samsung": "/src/assets/Samsung.png",
    "Huawei": "/src/assets/Huaweihttps___www.google.com_url_sa=t&source=web&rct=j&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOYO_Rooms_(logo).png&ved=0CBUQjRxqFwoTCMi5s7bByJEDFQAAAAAdAAAAABAH&opi=89978449.png",
    "OYO": "/src/assets/OYO.png",
    "Eucerin": "/src/assets/Eucerin.png",
    "Milklandia": "/src/assets/Milklandia.png",
    "HK": "/src/assets/HK.png",
  } as Record<string, string>,
  
  // Services
  solutions: [
    {
      title: "Uniformes Corporativos",
      description: "Vestuário completo para sua equipe, com cortes modernos e tecidos de qualidade.",
      icon: "Shirt",
    },
    {
      title: "Bordados Premium",
      description: "Bordados em pontos estratégicos com acabamento impecável e durabilidade.",
      icon: "Scissors",
    },
    {
      title: "Estampas Diversas",
      description: "Estampas em diversos tecidos, do básico ao sofisticado.",
      icon: "Palette",
    },
    {
      title: "Bolsas e Mochilas",
      description: "Acessórios personalizados para eventos, brindes ou uso corporativo.",
      icon: "Briefcase",
    },
    {
      title: "Toalhas Bordadas",
      description: "Toalhas com bordados elegantes para hotéis, spas e empresas.",
      icon: "Bath",
    },
    {
      title: "Linha Urbana",
      description: "Peças com estilo urbano personalizadas para sua marca.",
      icon: "TrendingUp",
    },
  ],
  
  // How it works
  steps: [
    {
      number: "01",
      title: "Envie sua necessidade",
      description: "Informe quantidade, modelo desejado e tipo de aplicação (bordado ou estampa).",
    },
    {
      number: "02",
      title: "Receba recomendações",
      description: "Nossa equipe indica o melhor tecido e tipo de personalização para seu projeto.",
    },
    {
      number: "03",
      title: "Produção e entrega",
      description: "Produzimos com qualidade premium e entregamos no prazo combinado.",
    },
  ],
  
  // Segments
  segments: [
    "Indústria",
    "Serviços",
    "Eventos",
    "Saúde",
    "Alimentação",
    "Tecnologia",
    "Varejo",
    "Hotelaria",
  ],
  
  // FAQ
  faq: [
    {
      question: "Qual a quantidade mínima de peças?",
      answer: "Trabalhamos com pedidos a partir de 10 peças, dependendo do tipo de produto e personalização.",
    },
    {
      question: "Qual o prazo médio de produção?",
      answer: "O prazo varia de 7 a 21 dias úteis, dependendo da complexidade e quantidade do pedido.",
    },
    {
      question: "Vocês atendem todo o Brasil?",
      answer: "Sim! Enviamos para todo o território nacional com opções de frete econômico e expresso.",
    },
    {
      question: "Posso enviar minha própria arte?",
      answer: "Claro! Aceitamos arquivos em alta resolução (AI, PDF, PNG). Nossa equipe também pode criar a arte.",
    },
    {
      question: "Qual a diferença entre bordado e estampa?",
      answer: "O bordado é mais durável e transmite maior sofisticação, ideal para logos. A estampa permite mais cores e detalhes, ideal para designs complexos.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
