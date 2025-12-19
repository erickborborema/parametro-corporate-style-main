import { siteConfig } from '@/config/site';
import SamsungLogo from '@/assets/Samsung.png';
import HuaweiLogo from '@/assets/Huaweihttps___www.google.com_url_sa=t&source=web&rct=j&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOYO_Rooms_(logo).png&ved=0CBUQjRxqFwoTCMi5s7bByJEDFQAAAAAdAAAAABAH&opi=89978449.png';
import MasterChefLogo from '@/assets/MasterChefhttps___www.google.com_url_sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F849350810954940762%2F&ved=0CBUQjRxqFwoTCIDgrePAyJEDFQAAAAAdAAAAABAH&opi=89978449.png';
import OYOLogo from '@/assets/OYO.png';
import EucerinLogo from '@/assets/Eucerin.png';
import MilklandiaLogo from '@/assets/Milklandia.png';
import HKLogo from '@/assets/HK.png';
import PerdigaoLogo from '@/assets/Perdigão-3.png';

interface ClientLogoProps {
  clientName: string;
  className?: string;
}

const logoMap: Record<string, string> = {
  "Samsung": SamsungLogo,
  "Huawei": HuaweiLogo,
  "MasterChef": MasterChefLogo,
  "OYO": OYOLogo,
  "Eucerin": EucerinLogo,
  "Milklandia": MilklandiaLogo,
  "HK": HKLogo,
  "Perdigão": PerdigaoLogo,
};

export const ClientLogo = ({ clientName, className = "" }: ClientLogoProps) => {
  const logoPath = logoMap[clientName] || siteConfig.clientLogos[clientName];

  if (logoPath) {
    return (
      <img
        src={logoPath}
        alt={clientName}
        className={`max-h-16 md:max-h-20 max-w-[180px] md:max-w-[220px] object-contain ${className}`}
        loading="lazy"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    );
  }

  // Se não houver logo, não mostra nada (removido o fallback de texto)
  return null;
};

