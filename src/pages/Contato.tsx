import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Clock, ExternalLink } from 'lucide-react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { siteConfig } from '@/config/site';

const Contato = () => {
  return (
    <Layout
      seo={{
        title: 'Contato - Parâmetro Moda Corporativa',
        description: 'Entre em contato com a Parâmetro Moda Corporativa. WhatsApp, telefone, e-mail e endereço. Estamos prontos para atender você e sua empresa.',
        keywords: 'contato, telefone, whatsapp, endereço, localização, São Paulo',
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
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6">
              Entre em contato
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos prontos para atender você e sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
                  Informações de contato
                </h2>
              </motion.div>

              {/* Address */}
              <motion.a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 texture-noise"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">{siteConfig.address}</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.cep}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm mt-2">
                    Abrir no Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${siteConfig.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 texture-noise"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">{siteConfig.phoneFormatted}</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-emerald-400/20 border border-emerald-400/40 hover:border-emerald-300/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-400/30 flex items-center justify-center shrink-0">
                  <WhatsAppLogoIcon size={28} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-emerald-300">Atendimento rápido</p>
                  <p className="text-muted-foreground text-sm mt-1">Clique para iniciar conversa</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${siteConfig.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 texture-noise"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">{siteConfig.email}</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">Instagram</h3>
                  <p className="text-muted-foreground">@parametro.uniformes</p>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3012339291464!2d-46.60699068502186!3d-23.556167684680167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a799d0c88d%3A0xf59e09f91f5c0e43!2sRua%20Catumbi%2C%20552%20-%20Belenzinho%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003021-000!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Parâmetro Moda Corporativa"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30 texture-fabric">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Prefere falar diretamente?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Chame no WhatsApp para atendimento imediato.
          </p>
          <Button variant="whatsappNeon" size="xl" asChild className="text-white">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white">
              <WhatsAppLogoIcon size={24} />
              <span className="text-white">Chamar no WhatsApp</span>
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
