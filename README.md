
```
# 💼 UBS HERMES - Expense Manager  – Frontend

Frontend de um sistema corporativo de controle de despesas desenvolvido para resolver um problema real do UBS: a gestão de gastos de funcionários que atualmente é feita por meio de planilhas e e-mails, sem rastreabilidade adequada.

> Nota: Este repositório documenta exclusivamente o FRONTEND da aplicação. Para a API backend, consulte o repositório do backend.
> 

---

## 🎯 Visão Geral

O UBS Expense Manager é um sistema full-stack de gestão de despesas corporativas que oferece uma interface moderna, intuitiva e robusta para controle de gastos, promovendo maior transparência, governança e redução de riscos financeiros.

O frontend é responsável por toda a experiência do usuário, incluindo:

- Autenticação e controle de acesso por perfil
- Navegação contextual baseada em roles
- Formulários inteligentes com validações
- Visualização de dados em tempo real
- Fluxos de aprovação hierárquica

---

## ❗ Problema Resolvido

O controle manual de despesas corporativas apresenta diversos riscos operacionais:

| Problema | Impacto | Solução Implementada |
| --- | --- | --- |
| ❌ Falta de rastreabilidade | Auditoria impossível | ✅ Histórico completo de ações com timestamps |
| ❌ Planilhas e e-mails | Processos lentos e propensos a erros | ✅ Sistema centralizado em tempo real |
| ❌ Estouro de orçamento | Riscos financeiros | ✅ Alertas automáticos e limites por categoria |
| ❌ Reembolsos indevidos | Perdas financeiras | ✅ Workflow de aprovação hierárquica |
| ❌ Relatórios manuais | Tomada de decisão lenta | ✅ Dashboards interativos e exportação automatizada |

---

## ✨ Funcionalidades

### 🔐 Autenticação e Autorização

- Login seguro com usuário e senha
- Controle de acesso baseado em roles:
    - **Employee**: Registra despesas e consulta status
    - **Manager**: Aprova/rejeita despesas da equipe
    - **Finance**: Validação final e controle de orçamento

### 🧾 Gestão de Despesas

- Registro de despesas com categorização (Viagem, Refeição, Transporte, Outros)
- Validação automática contra limites configurados
- Histórico completo de status e alterações

### ✅ Workflow de Aprovação

- Fluxo visual de aprovação: Funcionário → Gestor → Financeiro
- Notificações de mudança de status
- Registro de motivos de rejeição
- Rastreabilidade (quem aprovou, quando)

### 🚨 Alertas e Validações

- Alertas em tempo real para despesas fora das regras
- Validação de limites por categoria (diário/mensal)
- Controle de orçamento por departamento

### 📊 Relatórios

- Gastos por funcionário, equipe e departamento
- Visualizações interativas com gráficos (Recharts)
- Exportação em CSV/JSON

### 🏢 Administração

- Gestão de usuários e hierarquias
- Configuração de departamentos e orçamentos
- Gestão de categorias e limites
- Auditoria de ações

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
| --- | --- | --- |
| **Next.js** | 16.1.1 | Framework React com App Router e SSR |
| **TypeScript** | 5.9.3 | Tipagem estática e maior segurança |
| **Tailwind CSS** | 4.1.18 | Estilização utilitária e consistente |
| **shadcn/ui** | Latest | Componentes acessíveis e reutilizáveis |
| **React Hook Form** | 7.69.0 | Gerenciamento de formulários |
| **Zod** | 4.2.1 | Validação de schemas |
| **Recharts** | 2.15.4 | Gráficos e visualizações de dados |
| **Axios** | 1.13.2 | Cliente HTTP para API |
| **date-fns** | 4.1.0 | Manipulação de datas |

---

## 🏗️ Arquitetura e Padrões

### Princípios Arquiteturais

### 📦 Feature-Based Architecture

O código é organizado por domínio de negócio, não por tipo técnico. Cada feature é isolada e independente:

```
features/
├─ expenses/          # Tudo relacionado a despesas
│  ├─ components/     # UI específica
│  ├─ api.ts          # Camada de comunicação
│  ├─ schemas.ts      # Validações
│  └─ types.ts        # Contratos de dados

```

**Benefícios**:

- ✅ Redução de acoplamento
- ✅ Facilidade de manutenção
- ✅ Reutilização de código
- ✅ Escalabilidade

### 🧩 Separação de Responsabilidades

| Camada | Responsabilidade |
| --- | --- |
| **Components** | Apresentação visual |
| **API** | Comunicação com backend |
| **Schemas** | Validações e contratos |
| **Types** | Tipagem e interfaces |

### 🧪 Tipagem Forte

- Nenhum uso de `any` ou `unknown` genéricos
- Tipos compartilhados entre frontend e backend
- Validação em runtime com Zod
    
    ---
    

### 📁 Estrutura do Projeto

```
ubs-expense-manager-frontend/
│
├─ app/                          # App Router do Next.js
│  ├─ (auth)/                    # Rotas públicas de autenticação
│  │  └─ login/
│  │     └─ page.tsx             # Tela de login
│  │
│  ├─ (dashboard)/               # Área protegida (autenticada)
│  │  ├─ layout.tsx              # Layout base (sidebar, header)
│  │  ├─ alerts/                 
│  │  │  ├─ page.tsx             # Tela de gestão de alertas
│  │  ├─ categories/             
│  │  │  └─ page.tsx             # Tela de gestão de categorias
│  │  ├─ departments/            
│  │  │  └─ page.tsx             # Tela de gestão de departamentos
│  │  ├─ employees/              
│  │  │  └─ page.tsx             # Tela de gestão de funcionários
│  │  ├─ expense-logs/           
│  │  │  └─ page.tsx             # Tela de gestão de auditoria
│  │  ├─ expenses/               
│  │  │  └─ page.tsx             # Tela de gestão de despesas
│  │  └─ reports/                
│  │     └─ page.tsx             # Tela de gestão de relatórios
│  │
│  ├─ layout.tsx                 # Layout raiz
│  └─ globals.css                # Estilos globais
│
├─ components/
│  ├─ shared/                    # Componentes reutilizáveis globais
│  └─ ui/                        # Componentes base (shadcn/ui)
│
├─ features/                     # Organização por domínio
│  ├─ auth/
│  │  ├─ components/
│  │  │  └─ login-form.tsx
│  │  ├─ hooks/
│  │  │  └─ use-login.ts
│  │  ├─ api.ts
│  │  ├─ schemas.ts
│  │  └─ types.ts
│  │
│  ├─ expenses/
│  │  ├─ components/     # UI específica
│  │  ├─ api.ts          # Camada de comunicação
│  │  ├─ constants.ts    # Constantes do domínio
│  │  ├─ schemas.ts      # Validações
│  │  └─ types.ts        # Contratos de dados
│  │
│  ├─ categories/
│  ├─ alerts/
│  ├─ currencies/
│  ├─ employees/
│  ├─ departments/
│  └─ expense-logs/
│  └─ reports/

hooks/                        # Hooks globais
lib/                          # Utilitários e configurações

```

---

## 👥 Fluxos de Usuário

### 1️⃣ Employee (Funcionário)

1. Login com credenciais
2. Acessa dashboard pessoal
3. Cria nova despesa:
    - Seleciona categoria
    - Preenche valor, data e descrição
    - Faz upload simulado de nota fiscal
4. Visualiza status das despesas (Pendente, Aprovada, Rejeitada)
5. Recebe notificações de mudança de status

### 2️⃣ Manager (Gestor)

1. Login com credenciais
2. Acessa painel de aprovações
3. Visualiza despesas pendentes da equipe
4. Revisa cada despesa:
    - Verifica categoria, valor e justificativa
    - Valida contra limites configurados
5. Aprova ou rejeita (com motivo obrigatório)
6. Acompanha gastos da equipe em relatórios

### 3️⃣ Finance (Financeiro)

1. Login com credenciais
2. Acessa painel de validação final
3. Revisa despesas já aprovadas pelo gestor
4. Valida contra orçamento do departamento
5. Aprova ou rejeita (validação final)
6. Gerencia alertas de violação de regras
7. Acessa relatórios consolidados:
    - Gastos por departamento
    - Comparação orçamento x realizado
    - Exporta dados para análise

---

## 🧪 Testes

---

## Deployment

### Vercel (Recomendado)

1. Faça push do código para GitHub/GitLab
2. Importe o projeto no [Vercel](https://vercel.com/)
3. Configure as variáveis de ambiente
4. Deploy automático!

---

## 🚀 Instalação e Execução

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.x ou superior ([Download](https://nodejs.org/))
- **npm**, **yarn** ou **pnpm** (gerenciador de pacotes)
- **Backend API** rodando (consulte o README do backend)
- **Git** para controle de versão

### 1. Clone o Repositório

```bash
git clone https://github.com/ubs/expense-manager-frontend.git

```

### 2. Instale as Dependências

```bash
# Usando npm
npm install

# Usando yarn
yarn install

# Usando pnpm
pnpm install

```

### 3. Execute o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Modo produção (build + start)
npm run build
npm run start

```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000/)

### 4. Credenciais de Acesso

Use as seguintes credenciais para testar diferentes perfis:

| Perfil | E-mail | Senha | Permissões |
| --- | --- | --- | --- |
| **Employee** | employee@ubs.com | 123456 | Criar e visualizar despesas |
| **Manager** | manager@ubs.com | 123456 | Aprovar despesas da equipe |
| **Finance** | finance@ubs.com | 123456 | Validação final e relatórios |

### 📧 Contatos e Suporte

---

- **Documentação Backend**: https://github.com/lucasbeniti/ubs-expense-manager-grupo-7-backend
- Autores do Projeto:

| Gabriel Lemos Barbosa |
| --- |
| Guilherme Albuquerque de Souza |
| Larissa Navarro Pizarro |
| Lucas André Beniti Bernardo |
| Oscar Thiago Nunes Gomes Ferreira |
