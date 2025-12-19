import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { MidCtaSection } from '@/components/sections/MidCtaSection';
import { QuoteFormSection } from '@/components/sections/QuoteFormSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

const Index = () => {
  return (
    <Layout
      seo={{
        title: 'Parâmetro Moda Corporativa - Uniformes, Bordados e Estampas Premium',
        description: 'Uniformes, bordados e estampas com acabamento premium e durabilidade. Mais de 20 anos no mercado. Atendemos empresas de todos os segmentos.',
        keywords: 'uniformes corporativos, bordados, estampas, moda corporativa, uniformes personalizados, São Paulo, SP',
      }}
    >
      <HeroSection />
      <AuthoritySection />
      <SolutionsSection />
      <HowItWorksSection />
      <ClientsSection />
      <MidCtaSection />
      <QuoteFormSection />
      <ContactSection />
      <FinalCtaSection />
    </Layout>
  );
};

export default Index;
