import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import WhatsAppLogo from '@/assets/WhatsaApp.png';

interface WhatsAppButtonProps {
  className?: string;
}

export const WhatsAppButton = ({ className }: WhatsAppButtonProps) => {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg hover:bg-emerald-500 transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/40',
        className
      )}
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={WhatsAppLogo} 
        alt="WhatsApp" 
        className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </a>
  );
};
