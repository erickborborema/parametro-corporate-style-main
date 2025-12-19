import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Shirt, Scissors, Palette, Briefcase, Bath, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const iconMap = {
  Shirt,
  Scissors,
  Palette,
  Briefcase,
  Bath,
  TrendingUp,
};

export const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 320; // card width
      const gap = 24; // gap-6 = 24px
      const padding = 16; // px-4 = 16px
      
      // Calculate which card is most visible
      const adjustedScroll = scrollLeft + padding;
      const index = Math.round(adjustedScroll / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(index, siteConfig.solutions.length - 1));
      setActiveIndex(clampedIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="solucoes" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Nossas Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4 px-4 sm:px-0 leading-tight">
            Tudo para vestir sua marca
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Soluções completas em uniformes e personalizações para empresas de todos os portes.
          </p>
        </motion.div>

        {/* Solutions Cards - Horizontal Scrollable Carousel */}
        <div className="relative w-full overflow-x-hidden">
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-snap-x pb-4 md:pb-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 px-4 md:px-0">
              {siteConfig.solutions.map((solution, index) => {
                const Icon = iconMap[solution.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative p-6 lg:p-8 rounded-2xl card-gradient border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 w-[320px] md:w-auto flex-shrink-0 md:flex-shrink scroll-snap-item h-[400px] md:h-auto flex flex-col texture-noise"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative text-center flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
                        {solution.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {solution.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Button variant="ctaOutline" size="sm" asChild className="group/btn">
                          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Pedir orçamento
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll Indicator - Only visible on mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {siteConfig.solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const cardWidth = 320; // card width
                    const gap = 24; // gap-6 = 24px
                    const padding = 16; // px-4 = 16px
                    const scrollPosition = index * (cardWidth + gap) - padding;
                    container.scrollTo({
                      left: Math.max(0, scrollPosition),
                      behavior: 'smooth',
                    });
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30"
                )}
                aria-label={`Ir para solução ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
