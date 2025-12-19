import { motion } from 'framer-motion';
import { Building2, Utensils, Heart, Calendar, Cpu, ShoppingBag, Hotel, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { siteConfig } from '@/config/site';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { ClientLogo } from '@/components/ui/client-logo';

const segmentIcons = {
  "Indústria": Factory,
  "Serviços": Building2,
  "Eventos": Calendar,
  "Saúde": Heart,
  "Alimentação": Utensils,
  "Tecnologia": Cpu,
  "Varejo": ShoppingBag,
  "Hotelaria": Hotel,
};

const testimonials = [
  {
    quote: "Excelente qualidade e atendimento. Os uniformes ficaram perfeitos e a entrega foi pontual.",
    author: "Cliente satisfeito",
    company: "Empresa do setor de serviços",
  },
  {
    quote: "Trabalhamos com a Parâmetro há anos. Sempre entregam no prazo com qualidade impecável.",
    author: "Cliente fidelizado",
    company: "Empresa do setor de alimentação",
  },
];

const Clientes = () => {
  return (
    <Layout
      seo={{
        title: 'Nossos Clientes - Parâmetro Moda Corporativa',
        description: 'Empresas de diversos segmentos confiam na Parâmetro para vestir suas equipes. Conheça nossos clientes e cases de sucesso.',
        keywords: 'clientes, cases, empresas, segmentos, uniformes corporativos',
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
              Nossos Clientes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
              {siteConfig.yearsInMarket} anos de história com grandes marcas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empresas de diversos segmentos confiam na Parâmetro para vestir suas equipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Logos */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Marcas que confiam em nós
            </h2>
            <p className="text-muted-foreground text-lg">
              TV, desfiles, workshops e institucionais diversos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {siteConfig.clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border flex items-center justify-center min-h-[100px] texture-noise"
              >
                <ClientLogo clientName={client} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Segments */}
      <section className="section-padding bg-secondary/30 texture-dots">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Segmentos que atendemos
            </h2>
            <p className="text-muted-foreground text-lg">
              Experiência comprovada em diversos setores do mercado.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {siteConfig.segments.map((segment, index) => {
              const Icon = segmentIcons[segment as keyof typeof segmentIcons] || Building2;
              return (
                <motion.div
                  key={segment}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground">
                    {segment}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              O que dizem sobre nós
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border texture-noise"
              >
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-foreground text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30 texture-mesh">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Faça parte dessa história
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa.
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

export default Clientes;
