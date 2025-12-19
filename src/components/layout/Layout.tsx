import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SEO } from '@/components/seo/SEO';

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
  };
}

export const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <SEO {...seo} />
      <div className="min-h-screen flex flex-col bg-background w-full max-w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};
