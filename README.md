# Landing Page - Beatriz Favinchi Rossi

Landing Page moderna e responsiva para Beatriz Favinchi Rossi, psicóloga especializada em psicanálise com gamificação através de jogos de tabuleiro.

## 🎯 Objetivo

Desenvolver uma Landing Page focada em:
- Apresentar a profissional Beatriz Favinchi Rossi e suas competências em Psicanálise
- Aumentar o número de pacientes particulares
- Envolver usuários com a dinâmica da profissional que utiliza jogos de tabuleiro para auxiliar na melhora de saúde mental

## 🎨 Paleta de Cores

- **#805D93** (Roxo principal) - Headers, CTAs, destaques
- **#F49FBC** (Rosa suave) - Acentos, hover states
- **#FFD3BA** (Pêssego claro) - Backgrounds suaves, cards
- **#9EBD6E** (Verde claro) - Sucesso, confirmações
- **#169873** (Verde escuro) - Textos secundários, elementos de apoio

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Deploy**: Vercel

## 📁 Estrutura do Projeto

```
Psi_BiaRossi/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/              # Componentes React
│   │   ├── sections/            # Seções da landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gamification.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── ui/                  # Componentes UI reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── Card.tsx
│   │   └── layout/              # Componentes de layout
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/                     # Utilitários
│   │   └── utils.ts
│   └── types/                   # TypeScript types
│       └── index.ts
├── public/                      # Assets estáticos
│   ├── images/
│   └── icons/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📋 Seções da Landing Page

1. **Hero** - Banner principal com CTA
2. **Sobre** - Biografia e formação da profissional
3. **Serviços** - Listagem de serviços oferecidos
4. **Gamificação** - Explicação da metodologia com jogos de tabuleiro
5. **Depoimentos** - Carrossel com depoimentos de pacientes
6. **Contato** - Formulário de contato e informações

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Menu hambúrguer para mobile
- ✅ Formulário de contato com validação
- ✅ Carrossel de depoimentos
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ Otimização de performance

## 📝 Pontos de Atenção

1. **Conteúdo**: Textos são placeholders - substituir com conteúdo real da profissional
2. **Imagens**: Usar placeholders - substituir com fotos reais quando disponíveis
3. **Formulário**: Estrutura pronta, mas requer backend/API para funcionamento completo
4. **Depoimentos**: Estrutura pronta para receber depoimentos reais
5. **SEO**: Adicionar meta tags e Open Graph quando conteúdo real estiver disponível

## 🔮 Melhorias Futuras

- Integração com calendário para agendamento online
- Blog/artigos sobre psicanálise
- Área de login para pacientes
- Chat online
- Integração com redes sociais
- Analytics e tracking

## 📄 Licença

Este projeto é privado e destinado ao uso da profissional Beatriz Favinchi Rossi.

