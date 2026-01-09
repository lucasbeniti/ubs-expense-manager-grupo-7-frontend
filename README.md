# 💼 UBS Expense Manager – Frontend

Frontend de um sistema corporativo de **controle de despesas** desenvolvido para resolver um problema real do **UBS**, que atualmente gerencia gastos de funcionários por meio de planilhas e e-mails, sem rastreabilidade adequada.

Este repositório documenta **exclusivamente o FRONTEND** da aplicação.

---

## 📌 Visão Geral

O sistema tem como objetivo oferecer uma interface moderna, intuitiva e robusta para o controle de despesas corporativas, permitindo maior transparência, governança e redução de riscos financeiros.

O frontend é responsável por toda a **experiência do usuário**, incluindo autenticação, navegação, formulários, validações, visualização de dados e fluxos de aprovação.

---

## ❗ Problema que o Sistema Resolve

Atualmente, o controle de despesas corporativas apresenta diversos riscos operacionais, como:

- ❌ Falta de rastreabilidade dos gastos  
- ❌ Controle manual via planilhas e e-mails  
- ❌ Alto risco de **estouro de orçamento**  
- ❌ Possibilidade de **reembolsos indevidos**  
- ❌ Dificuldade na geração de relatórios confiáveis  

O frontend foi projetado para atacar diretamente esses problemas por meio de uma interface clara, padronizada e orientada a fluxos de negócio.

---

## 🎯 Escopo do Frontend

O frontend é responsável por:

- Interface para **registro de despesas**
- Aplicação visual de **limites por categoria**
- Fluxo de **aprovação hierárquica** (funcionário → gestor → financeiro)
- Alertas e feedbacks visuais para despesas fora das regras
- Dashboards e relatórios por:
  - Funcionário
  - Equipe
  - Departamento
- Gestão de usuários, departamentos e categorias
- Experiência consistente, acessível e responsiva

---

## 🧰 Tecnologias Utilizadas

- **Next.js** – Framework React com App Router
- **TypeScript** – Tipagem estática e maior segurança
- **Tailwind CSS** – Estilização utilitária e consistente
- **shadcn/ui** – Componentes acessíveis e reutilizáveis

---

## 🗂️ Estrutura de Pastas

```txt
app/
├─ (auth)/                       # Rotas públicas de autenticação
│  └─ login/
│     └─ page.tsx                # Tela de login

├─ (dashboard)/                  # Área protegida da aplicação
│  ├─ layout.tsx                 # Layout base do dashboard (sidebar, header, etc.)
│  ├─ users/
│  │  └─ page.tsx                # Tela de gestão de usuários
│  ├─ departments/
│  │  └─ page.tsx                # Tela de gestão de departamentos
│  └─ categories/
│     └─ page.tsx                # Tela de gestão de categorias

components/
├─ shared/                       # Componentes reutilizáveis globais
├─ ui/                           # Componentes base (shadcn/ui)

features/                        # Organização por domínio de negócio
├─ auth/
├─ categories/
├─ users/
├─ departments/
│  ├─ components/                # Componentes específicos da feature
│  ├─ hooks/                     # Hooks isolados da feature
│  ├─ api.ts                     # Camada de comunicação da feature
│  ├─ schemas.ts                 # Schemas de validação
│  ├─ types.ts                   # Tipos e interfaces

hooks/                           # Hooks globais e reutilizáveis
lib/                             # Utilitários, constantes e helpers

```

---

## 🧩 Principais Features do Frontend

- 🔐 **Autenticação e controle de acesso por perfil**
- 🧾 **Cadastro e visualização de despesas**
- 🏷️ **Gerenciamento de categorias de gastos**
- 🧑 **Gestão de usuários e departamentos**
- ✅ **Fluxo visual de aprovação de despesas**
- 🚨 **Alertas de inconsistência e validações em tempo real**
- 📊 **Dashboards e relatórios interativos**
- 🎨 **UI consistente, moderna e responsiva**

---

## 🧠 Padrões e Arquitetura

Este projeto adota padrões focados em **escalabilidade e manutenibilidade**, garantindo clareza de responsabilidades e facilidade de evolução.

### 📦 Feature-Based Architecture

- Código organizado por **domínio de negócio**
- Cada feature é **isolada e independente**, reduzindo acoplamento

### 🧩 Separação de Responsabilidades

- `components`: componentes de UI reutilizáveis
- `hooks`: lógica de estado e comportamento reutilizável
- `schemas`: validações e contratos de dados
- `types`: tipagem centralizada e compartilhada

### 🧪 Tipagem Forte

- Uso extensivo de **TypeScript**
- Evita tipos genéricos como `any` ou `unknown`
- Maior segurança, previsibilidade

---

## ▶️ Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão LTS recomendada)
- Gerenciador de pacotes (**npm**, **yarn** ou **pnpm**)

### Passos

```bash
# Instalar dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run dev

```
