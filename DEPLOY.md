# Guia de Deploy - Parâmetro Moda Corporativa

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn instalado
- Conta em um serviço de hospedagem (Vercel, Netlify, etc.)

## 🚀 Build para Produção

```bash
# Instalar dependências
npm install

# Build de produção
npm run build
```

O build será gerado na pasta `dist/`.

## 🌐 Opções de Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Ou conecte o repositório GitHub diretamente no dashboard da Vercel.

### Netlify

1. Instale a CLI da Netlify:
```bash
npm i -g netlify-cli
```

2. Build command: `npm run build`
3. Publish directory: `dist`

### Outros Serviços

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18.x ou superior

## ⚙️ Variáveis de Ambiente

Nenhuma variável de ambiente é necessária no momento.

## 🔍 SEO e Otimizações

- ✅ Meta tags configuradas
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ SEO dinâmico por página

## 📝 Checklist Pós-Deploy

- [ ] Verificar se o site está acessível
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Verificar links externos (WhatsApp, Instagram, etc.)
- [ ] Testar formulário de orçamento
- [ ] Verificar velocidade de carregamento
- [ ] Submeter sitemap no Google Search Console
- [ ] Verificar SSL/HTTPS
- [ ] Testar em diferentes navegadores

## 🔗 URLs Importantes

- **Sitemap**: `https://seudominio.com.br/sitemap.xml`
- **Robots.txt**: `https://seudominio.com.br/robots.txt`

## 📞 Suporte

Em caso de problemas, entre em contato com o desenvolvedor.

