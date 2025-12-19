import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { siteConfig } from '@/config/site';

const detailedSteps = [
  {
    number: "01",
    title: "Você envia sua necessidade",
    description: "Entre em contato via WhatsApp ou formulário informando:",
    details: [
      "Quantidade de peças desejada",
      "Tipo de produto (uniformes, acessórios, etc.)",
      "Preferência de cores e modelos",
      "Se possui arte ou precisa de criação",
      "Prazo desejado para entrega",
    ],
  },
  {
    number: "02",
    title: "Receba recomendações personalizadas",
    description: "Nossa equipe especializada analisa seu pedido e:",
    details: [
      "Indica os melhores tecidos para sua aplicação",
      "Sugere tipo de personalização (bordado ou estampa)",
      "Apresenta opções de modelos e cores",
      "Elabora orçamento detalhado",
      "Envia amostras se necessário",
    ],
  },
  {
    number: "03",
    title: "Produção e entrega no prazo",
    description: "Após aprovação, iniciamos a produção:",
    details: [
      "Desenvolvimento da arte final",
      "Aprovação antes da produção",
      "Fabricação com controle de qualidade",
      "Embalagem cuidadosa",
      "Entrega no prazo combinado",
    ],
  },
];

const miniFaq = [
  {
    question: "Preciso ter a arte pronta?",
    answer: "Não necessariamente. Você pode enviar sua logo em qualquer formato e nossa equipe adapta. Se precisar, também criamos a arte do zero.",
  },
  {
    question: "Vocês fazem entrega para todo o Brasil?",
    answer: "Sim! Enviamos para todo o território nacional via transportadora ou Correios, conforme a necessidade do cliente.",
  },
  {
    question: "Qual o prazo médio de produção?",
    answer: "O prazo varia de 7 a 21 dias úteis, dependendo da quantidade e complexidade do pedido. Casos urgentes podem ser negociados.",
  },
  {
    question: "Posso fazer uma amostra antes?",
    answer: "Sim, para pedidos maiores oferecemos a possibilidade de produzir uma peça piloto para aprovação antes da produção em larga escala.",
  },
];

const ComoFunciona = () => {
  return (
    <Layout
      seo={{
        title: 'Como Funciona - Parâmetro Moda Corporativa',
        description: 'Processo simples e objetivo para uniformizar sua equipe. Três passos para receber uniformes com qualidade premium.',
        keywords: 'como funciona, processo, uniformes corporativos, pedido de uniformes',
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
              Como Funciona
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
              Processo simples, resultado excepcional
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Veja como é fácil uniformizar sua equipe com a Parâmetro.
            </p>
            <Button variant="whatsappBlack" size="xl" asChild>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogoIcon size={24} />
                Começar agora
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 md:pl-28"
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-sans font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Connection line */}
                {index < detailedSteps.length - 1 && (
                  <div className="absolute left-7 md:left-10 top-16 md:top-20 w-px h-full bg-accent/20" />
                )}

                <div className="pb-8">
                  <h3 className="text-2xl font-sans font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-secondary/30 texture-mesh">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre o processo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {miniFaq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 texture-noise"
                >
                  <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e receba um orçamento sem compromisso.
          </p>
          <Button variant="whatsappBlack" size="xl" asChild>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogoIcon size={24} />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;
