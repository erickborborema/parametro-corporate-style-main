import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { ClientLogo } from '@/components/ui/client-logo';
import { cn } from '@/lib/utils';

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isInView) return;

    let scrollSpeed = 2.5; // Velocidade do scroll automático (aumentada)
    let lastScrollTime = Date.now();

    const autoScroll = () => {
      if (isPaused || isDragging) {
        autoScrollRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const now = Date.now();
      const deltaTime = now - lastScrollTime;
      lastScrollTime = now;

      // Scroll automático mais rápido
      container.scrollLeft += scrollSpeed * (deltaTime / 16);

      // Reset quando chegar ao fim (loop infinito)
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    // Touch events para detectar arrasto
    const handleTouchStart = () => {
      setIsDragging(true);
      setIsPaused(true);
    };

    const handleTouchMove = () => {
      setIsDragging(true);
      setIsPaused(true);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      // Aguarda um pouco antes de retomar o scroll automático
      setTimeout(() => {
        setIsPaused(false);
      }, 500);
    };

    // Mouse events
    const handleMouseDown = () => {
      setIsDragging(true);
      setIsPaused(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setTimeout(() => {
        setIsPaused(false);
      }, 500);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      setIsPaused(false);
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Inicia o scroll automático
    autoScrollRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInView, isPaused, isDragging]);

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Clientes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-foreground mb-4 px-4 sm:px-0 leading-tight">
            Empresas que confiam no nosso padrão
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Grandes marcas escolhem a Parâmetro para vestir suas equipes.
          </p>
        </motion.div>

        {/* Clients Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden py-8"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex overflow-x-auto scrollbar-hide",
              "cursor-grab active:cursor-grabbing",
              "select-none"
            )}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {[...siteConfig.clients, ...siteConfig.clients, ...siteConfig.clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 px-6 sm:px-8 py-4 rounded-xl bg-card border border-border flex items-center justify-center min-w-[160px] sm:min-w-[180px]"
              >
                <ClientLogo clientName={client} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
