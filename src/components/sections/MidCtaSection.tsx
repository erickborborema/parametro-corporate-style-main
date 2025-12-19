import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { siteConfig } from '@/config/site';

export const MidCtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden texture-mesh">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Hover Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-20 md:h-24 mb-6"
          >
            <TextHoverEffect text="PARÂMETRO" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-sans font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0 leading-tight"
          >
            Quer padronizar sua equipe com{' '}
            <span className="text-accent">mais presença?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto px-4 sm:px-0"
          >
            Uniformes bem feitos transmitem profissionalismo e fortalecem a identidade da sua marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="whatsappBlack" size="xl" asChild>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogoIcon size={24} />
                Solicitar orçamento agora
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
