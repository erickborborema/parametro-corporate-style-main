import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-[#0a0a0a] border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-foreground">PARÂMETRO</h3>
              <p className="text-xs text-accent tracking-[0.3em] uppercase">{siteConfig.tagline}</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.slogan}
            </p>
            <p className="text-accent font-semibold">
              {siteConfig.yearsInMarket} anos no mercado
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-sans font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-sans font-semibold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.fullAddress}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-sans font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-foreground hover:bg-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppLogoIcon size={24} />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-foreground hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Desenvolvido por{' '}
            <a
              href="https://instagram.com/borboremaae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              ERICK BORBOREMA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
