import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shirt, Scissors, Palette, Briefcase, Bath, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { siteConfig } from '@/config/site';

const iconMap = {
  Shirt,
  Scissors,
  Palette,
  Briefcase,
  Bath,
  TrendingUp,
};

const detailedSolutions = [
  {
    ...siteConfig.solutions[0],
    details: [
      "Camisas, polos e camisetas",
      "Calças e bermudas",
      "Jalecos e aventais",
      "Vestidos e saias",
      "Conjuntos completos",
    ],
  },
  {
    ...siteConfig.solutions[1],
    details: [
      "Bordado computadorizado",
      "Bordado 3D",
      "Logos e emblemas",
      "Nomes e cargos",
      "Aplicações especiais",
    ],
  },
  {
    ...siteConfig.solutions[2],
    details: [
      "Silk screen",
      "Sublimação",
      "Transfer digital",
      "DTF (Direct to Film)",
      "Estampas localizadas",
    ],
  },
  {
    ...siteConfig.solutions[3],
    details: [
      "Mochilas corporativas",
      "Bolsas térmicas",
      "Necessaires",
      "Sacolas personalizadas",
      "Estojos e cases",
    ],
  },
  {
    ...siteConfig.solutions[4],
    details: [
      "Toalhas de banho",
      "Toalhas de rosto",
      "Roupões",
      "Kits spa",
      "Personalizações hoteleiras",
    ],
  },
  {
    ...siteConfig.solutions[5],
    details: [
      "Bonés e chapéus",
      "Moletons e jaquetas",
      "Camisetas casual",
      "Acessórios urbanos",
      "Linha streetwear",
    ],
  },
];

const Solucoes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Layout
      seo={{
        title: 'Soluções - Parâmetro Moda Corporativa',
        description: 'Conheça nossas soluções em uniformes corporativos, bordados premium, estampas diversas, bolsas, toalhas e linha urbana.',
        keywords: 'uniformes corporativos, bordados premium, estampas, soluções corporativas, moda corporativa',
      }}
    >
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 hero-gradient texture-noise">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Nossas Soluções
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
              Soluções completas para vestir sua marca
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Do uniforme completo aos acessórios, temos tudo para padronizar sua equipe com qualidade premium.
            </p>
            <Button variant="whatsappBlack" size="xl" asChild>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogoIcon size={24} />
                Solicitar orçamento
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedSolutions.map((solution, index) => {
              const Icon = iconMap[solution.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 lg:p-8 rounded-2xl bg-card border border-border flex flex-col h-full texture-noise"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {solution.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button variant="ctaOutline" size="sm" asChild className="group w-full">
                      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Pedir orçamento
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Bordado vs Estampa */}
      <section className="section-padding bg-secondary/30 texture-dots">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Bordado ou Estampa?
            </h2>
            <p className="text-muted-foreground text-lg">
              Entenda qual a melhor opção para cada situação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bordado */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <Scissors className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-sans font-semibold text-foreground mb-4">
                Bordado
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Maior durabilidade e resistência</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Aspecto premium e sofisticado</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Ideal para logos e textos pequenos</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Resiste a lavagens frequentes</span>
                </li>
              </ul>
              <p className="text-sm text-accent font-medium">
                Recomendado para: uniformes corporativos, hotelaria, saúde
              </p>
            </motion.div>

            {/* Estampa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <Palette className="w-10 h-10 text-highlight mb-4" />
              <h3 className="text-xl font-sans font-semibold text-foreground mb-4">
                Estampa
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                  <span>Maior variedade de cores e detalhes</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                  <span>Custo mais acessível para grandes áreas</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                  <span>Ideal para designs complexos</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                  <span>Diversos tipos de técnicas disponíveis</span>
                </li>
              </ul>
              <p className="text-sm text-highlight font-medium">
                Recomendado para: eventos, promoções, camisetas casual
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Não sabe qual escolher?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Nossa equipe analisa seu projeto e indica a melhor solução para suas necessidades.
          </p>
          <Button variant="whatsappBlack" size="xl" asChild>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogoIcon size={24} />
              Falar com especialista
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Solucoes;
