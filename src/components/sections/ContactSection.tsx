import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contato" ref={ref} className="section-padding bg-secondary/50 relative overflow-hidden texture-fabric">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4 px-4 sm:px-0 leading-tight">
            Fale com a gente
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Estamos prontos para atender sua empresa com excelência.
          </p>
        </motion.div>

        {/* Contact Info - Horizontal Layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Address and Phone */}
            <div className="space-y-6">
              {/* Address */}
              <motion.a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {siteConfig.address}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    Abrir no Maps <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${siteConfig.phone}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-2">Telefone</h3>
                    <p className="text-muted-foreground text-sm font-medium mb-2">
                      {siteConfig.phoneFormatted}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    Ligar agora <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Right Column - WhatsApp and Instagram */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-emerald-400/10 border-2 border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-300 hover:-translate-y-1 min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-400/30 transition-colors">
                  <WhatsAppLogoIcon size={24} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-emerald-300 text-sm font-medium mb-2">
                      Resposta rápida
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-emerald-300 text-sm font-medium group-hover:gap-2 transition-all">
                    Abrir no WhatsApp <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1 min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center shrink-0 group-hover:from-purple-600/30 group-hover:to-pink-500/30 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-2">Instagram</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      @parametro.uniformes
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-pink-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Abrir no Instagram <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
