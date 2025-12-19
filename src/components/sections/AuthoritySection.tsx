import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Palette, Users, LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { CountUp } from '@/components/ui/count-up';
import { cn } from '@/lib/utils';

const differentials = [
  {
    icon: Award,
    title: "Qualidade e durabilidade",
    description: "Materiais premium que resistem ao uso intenso e lavagens frequentes."
  },
  {
    icon: Palette,
    title: "Variedade de tecidos",
    description: "Ampla gama de tecidos e aplicações para cada necessidade."
  },
  {
    icon: Users,
    title: "Atendimento consultivo",
    description: "Ajudamos você a escolher a melhor solução para seu projeto."
  }
];

interface DifferentialCardProps {
  item: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}

const DifferentialCard = ({ item, index, isInView }: DifferentialCardProps) => {
  const [isTouching, setIsTouching] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
      onMouseDown={() => setIsTouching(true)}
      onMouseUp={() => setIsTouching(false)}
      onMouseLeave={() => setIsTouching(false)}
      className={cn(
        "group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 text-center",
        "transition-all duration-300 ease-out",
        "md:hover:scale-105",
        isTouching && "scale-110 md:scale-105"
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
        <item.icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
        {item.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

export const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-secondary/30 texture-dots">
      <div className="container-custom">
        {/* Years Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-border">
            <span className="text-5xl md:text-6xl font-sans font-bold text-accent">
              <CountUp end={20} duration={2000} suffix="+" />
            </span>
            <span className="text-left text-foreground font-medium">
              anos no<br />mercado
            </span>
          </div>
        </motion.div>

        {/* Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <DifferentialCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
