import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { siteConfig } from '@/config/site';
import heroBg from '@/assets/hero-bg.jpg';

export const FinalCtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50 texture-noise">
      <div className="container-custom px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left w-full max-w-2xl lg:max-w-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Sua marca merece um{' '}
              <span className="text-accent">padrão premium</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed">
              Resposta rápida. Atendimento consultivo. Qualidade garantida.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Com mais de {siteConfig.yearsInMarket} anos de experiência, desenvolvemos uniformes corporativos que refletem a identidade e os valores da sua empresa. Nossos produtos são fabricados com materiais de alta qualidade e acabamento impecável, garantindo durabilidade e conforto para sua equipe.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Tecidos premium selecionados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Bordados e estampas de alta precisão</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Atendimento personalizado do início ao fim</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="whatsappBlack" size="xl" asChild>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppLogoIcon size={24} />
                  Solicitar orçamento
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6"
            >
              <EncryptedText 
                text={`${siteConfig.yearsInMarket}+ ANOS TRANSFORMANDO EMPRESAS EM MARCAS MEMORÁVEIS`}
                className="text-accent/80 text-xs sm:text-sm tracking-[0.15em]"
              />
            </motion.div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0 w-full lg:w-auto lg:ml-auto flex justify-center lg:justify-end"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm">
              <img
                src={heroBg}
                alt="Uniforme corporativo premium"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
