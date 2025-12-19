import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';
import { WhatsAppLogoIcon } from '@/components/ui/whatsapp-logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { useToast } from '@/hooks/use-toast';

const segments = [
  "Indústria",
  "Serviços",
  "Alimentação",
  "Saúde",
  "Eventos",
  "Hotelaria",
  "Tecnologia",
  "Varejo",
  "Outro",
];

const productTypes = [
  { id: "uniformes", label: "Uniformes" },
  { id: "bordado", label: "Bordado" },
  { id: "estampa", label: "Estampa" },
  { id: "acessorios", label: "Acessórios" },
];

export const QuoteFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    segment: '',
    quantity: '',
    types: [] as string[],
    deadline: '',
    city: '',
    observations: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTypeChange = (typeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      types: checked 
        ? [...prev.types, typeId]
        : prev.types.filter(t => t !== typeId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.segment || !formData.types.length) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Orçamento enviado!",
      description: "Entraremos em contato em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="orcamento" ref={ref} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-10 md:p-12 rounded-3xl card-gradient border border-accent/30 shadow-xl"
          >
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-4">
              Orçamento enviado com sucesso!
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Nossa equipe entrará em contato em breve para entender melhor suas necessidades.
            </p>
            <Button variant="whatsappBlack" size="lg" asChild className="h-14 text-base">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogoIcon size={24} />
                Falar agora no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Orçamento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4 px-4 sm:px-0 leading-tight">
            Solicite seu orçamento
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Preencha o formulário e receba uma proposta personalizada para sua empresa.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-10 rounded-3xl card-gradient border border-border shadow-xl">
            {/* Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">Nome *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">Empresa *</Label>
                <Input
                  id="company"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  required
                  className="h-12"
                />
              </div>
            </div>

            {/* Segment & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label className="text-sm font-medium text-foreground">Segmento *</Label>
                <Select 
                  value={formData.segment} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, segment: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    {segments.map(seg => (
                      <SelectItem key={seg} value={seg}>{seg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="quantity" className="text-sm font-medium text-foreground">Quantidade aproximada</Label>
                <Input
                  id="quantity"
                  placeholder="Ex: 50 peças"
                  value={formData.quantity}
                  onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                  className="h-12"
                />
              </div>
            </div>

            {/* Product Types */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">Tipo de produto *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {productTypes.map(type => (
                  <div 
                    key={type.id} 
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      formData.types.includes(type.id)
                        ? 'border-accent bg-accent/10'
                        : 'border-border bg-card hover:border-accent/30'
                    }`}
                    onClick={() => handleTypeChange(type.id, !formData.types.includes(type.id))}
                  >
                    <Checkbox
                      id={type.id}
                      checked={formData.types.includes(type.id)}
                      onCheckedChange={(checked) => handleTypeChange(type.id, checked as boolean)}
                      className="shrink-0"
                    />
                    <Label htmlFor={type.id} className="cursor-pointer font-normal text-sm flex-1">
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadline & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label htmlFor="deadline" className="text-sm font-medium text-foreground">Prazo desejado</Label>
                <Input
                  id="deadline"
                  placeholder="Ex: 15 dias"
                  value={formData.deadline}
                  onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                  className="h-12"
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="city" className="text-sm font-medium text-foreground">Cidade/UF</Label>
                <Input
                  id="city"
                  placeholder="Ex: São Paulo/SP"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="h-12"
                />
              </div>
            </div>

            {/* Observations */}
            <div className="space-y-2.5">
              <Label htmlFor="observations" className="text-sm font-medium text-foreground">Observações</Label>
              <Textarea
                id="observations"
                placeholder="Descreva detalhes adicionais sobre seu projeto, necessidades específicas ou qualquer informação relevante..."
                rows={5}
                value={formData.observations}
                onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
                className="resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="flex-1 h-20 md:h-14 text-lg md:text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group py-6 md:py-0" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    <span className="w-6 h-6 border-3 border-current border-t-transparent rounded-full animate-spin" />
                    <span className="text-lg md:text-base">Enviando...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    <Send className="w-6 h-6 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                    <span className="text-lg md:text-base">Enviar pedido</span>
                  </span>
                )}
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
              <Button variant="whatsappBlack" size="lg" asChild className="h-20 md:h-14 text-lg md:text-base w-full sm:w-auto py-6 md:py-0">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <WhatsAppLogoIcon size={24} className="md:w-5 md:h-5" />
                  <span>Falar no WhatsApp</span>
                </a>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
