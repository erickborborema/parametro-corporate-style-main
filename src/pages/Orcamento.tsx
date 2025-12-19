import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { QuoteFormSection } from '@/components/sections/QuoteFormSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { siteConfig } from '@/config/site';

const Orcamento = () => {
  return (
    <Layout
      seo={{
        title: 'Solicitar Orçamento - Parâmetro Moda Corporativa',
        description: 'Solicite seu orçamento sem compromisso. Preencha o formulário e receba uma proposta personalizada para sua empresa.',
        keywords: 'orçamento, solicitar orçamento, cotação, uniformes, preço',
      }}
    >
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 hero-gradient texture-noise">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Orçamento
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
              Solicite seu orçamento sem compromisso
            </h1>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e receba uma proposta personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <QuoteFormSection />

      {/* FAQ */}
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
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Informações importantes sobre pedidos e orçamentos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {siteConfig.faq.map((item, index) => (
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
    </Layout>
  );
};

export default Orcamento;
