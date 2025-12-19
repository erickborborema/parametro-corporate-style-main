import WhatsAppLogo from '@/assets/WhatsaApp.png';

interface WhatsAppLogoProps {
  size?: number;
  className?: string;
}

export const WhatsAppLogoIcon = ({ size = 24, className = "" }: WhatsAppLogoProps) => {
  return (
    <img 
      src={WhatsAppLogo} 
      alt="WhatsApp" 
      className={`flex-shrink-0 object-contain ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        filter: 'brightness(0) invert(1)'
      }}
    />
  );
};

