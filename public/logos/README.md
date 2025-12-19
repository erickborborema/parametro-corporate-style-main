# Logos de Clientes

Esta pasta contém os logos das empresas clientes.

## Como adicionar logos

1. Adicione os arquivos de imagem (SVG, PNG, JPG) nesta pasta
2. Atualize o arquivo `src/config/site.ts` na propriedade `clientLogos`:

```typescript
clientLogos: {
  "Samsung": "/logos/samsung.svg",
  "MasterChef": "/logos/masterchef.png",
  // Adicione mais logos aqui
} as Record<string, string>,
```

## Formato recomendado

- **Formato**: SVG (preferencial) ou PNG com fundo transparente
- **Tamanho**: Máximo 200px de largura
- **Altura**: Proporcional, máximo 100px
- **Cor**: Preferencialmente em branco ou cores da marca (o componente ajusta automaticamente)

## Exemplo

Se você adicionar `samsung.svg` nesta pasta, atualize o `site.ts`:

```typescript
clientLogos: {
  "Samsung": "/logos/samsung.svg",
}
```

O componente `ClientLogo` automaticamente exibirá a imagem quando disponível, ou mostrará o nome da empresa como fallback.

