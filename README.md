# Chácara Foto Clique - Landing Page

## Resumo do Projeto

Foi criada uma landing page moderna e sofisticada para a Chácara Foto Clique, com todas as funcionalidades solicitadas:

### ✅ Funcionalidades Implementadas

1. **Design Responsivo e Moderno**
   - Layout sofisticado com cores laranja e cinza
   - Totalmente responsivo para desktop e mobile
   - Animações suaves e efeitos visuais

2. **Seções Principais**
   - **Hero Section**: Imagem aérea da chácara com call-to-action
   - **Características**: 5 ícones destacando os principais atrativos
   - **Espaços Detalhados**: Apresentação de cada ambiente com fotos reais
   - **Galeria**: Grid de fotos com efeitos hover
   - **Agendamento**: Formulário integrado ao WhatsApp
   - **Footer**: Informações de contato e horários

3. **Sistema de Agendamento WhatsApp**
   - Formulário com campos: nome, telefone, data e horário
   - Validação de campos obrigatórios
   - Geração automática de mensagem para WhatsApp
   - Redirecionamento direto para o WhatsApp Web/App

4. **Imagens Utilizadas**
   - Todas as fotos reais fornecidas foram integradas
   - Vista aérea como imagem principal
   - Fotos do salão, quiosque, piscina, bar molhado e campo de futebol
   - Otimização para carregamento rápido

### 🛠️ Tecnologias Utilizadas

- **React 18** com Vite
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **JavaScript ES6+**
- Design responsivo e moderno

### 📱 Funcionalidades do Agendamento

O sistema de agendamento funciona da seguinte forma:
1. Usuário preenche nome, telefone, data e horário
2. Clica em "Agendar via WhatsApp"
3. É redirecionado para WhatsApp com mensagem pré-formatada
4. Mensagem inclui todos os dados preenchidos

### 🎨 Design e UX

- **Cores principais**: Laranja (#f97316) e tons de cinza
- **Tipografia**: Fontes modernas e legíveis
- **Layout**: Grid responsivo e bem estruturado
- **Animações**: Efeitos suaves de hover e transições
- **Navegação**: Menu fixo com scroll suave

### 📊 Seções de Conteúdo

1. **Características Principais**
   - Piscinas (adulto e infantil com borda infinita)
   - Salões (climatizados para grandes eventos)
   - Área Verde (jardins e lazer ao ar livre)
   - Campo Suíço (futebol para atividades esportivas)
   - Infraestrutura (completa para todos os tipos de eventos)

2. **Espaços Detalhados**
   - Salão de Festas (ambiente climatizado, capacidade para grandes eventos)
   - Quiosque com Churrasqueira (área coberta, churrasqueira profissional)
   - Piscina com Borda Infinita (vista panorâmica, piscina infantil integrada)
   - Bar Molhado (estrutura completa para drinks, integrado à piscina)

### 🔧 Personalização Necessária

Para colocar o site em produção, você precisa:

1. **Alterar número do WhatsApp**
   - No arquivo `src/App.jsx`, linha ~25
   - Trocar `5511999999999` pelo seu número real
   - Formato: código do país + DDD + número (sem espaços ou caracteres especiais)

2. **Atualizar informações de contato**
   - E-mail: `contato@chacarafotoclique.com.br`
   - Telefone: `(11) 99999-9999`
   - Localização: `São Paulo - SP`

3. **Ajustar horários de atendimento** (se necessário)
   - Segunda a Sexta: 9h às 18h
   - Sábado: 9h às 16h
   - Domingo: Sob agendamento

### 🚀 Como Fazer Deploy

O projeto está pronto para deploy. Opções recomendadas:
- **Vercel** (gratuito, ideal para React)
- **Netlify** (gratuito, fácil configuração)
- **GitHub Pages** (gratuito)

### 📁 Estrutura do Projeto

```
chacara-foto-clique/
├── src/
│   ├── assets/          # Imagens da chácara
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Ponto de entrada
├── public/              # Arquivos públicos
├── package.json         # Dependências
└── vite.config.js       # Configuração do Vite
```

### 📞 Suporte

O site está totalmente funcional e pronto para uso. Todas as imagens fornecidas foram integradas e o sistema de agendamento está operacional.

