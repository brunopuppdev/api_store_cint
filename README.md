# 🚀 Configuração do Banco de Dados com Prisma

Este guia explica como configurar, migrar e popular o banco de dados PostgreSQL usando Prisma no projeto [`api_store_cint`](https://github.com/bunopuppdev/api_store_cint).

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v22 ou superior)
- [PostgreSQL](https://www.postgresql.org/) instalado e em execução
- Um banco de dados vazio criado no PostgreSQL

## 🛠️ Configuração Inicial

### 1️⃣ Clone do Repositório

```sh
git clone https://github.com/bunopuppdev/api_store_cint.git
cd api_store_cint
```

### 2️⃣ Instalação das Dependências

```sh
npm install
```

### 3️⃣ Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e defina a URL de conexão com o banco de dados:

```ini
DATABASE_URL="postgresql://usuario:senha@localhost:5432/dbname?schema=public"
```

> ⚠️ **Importante**: Substitua `usuario`, `senha` e ajuste o nome do banco conforme sua configuração local.

## 📂 Estrutura do Prisma

O projeto utiliza uma abordagem modular para os modelos Prisma:

```
prisma/
 ├── base-schema.prisma   # Configuração básica do Prisma
 ├── models/              # Modelos individuais
 │   ├── User.prisma
 │   ├── Product.prisma
 │   └── ...
 ├── schema.prisma        # Arquivo gerado automaticamente
 └── seed.ts              # Script para popular o banco de dados
```

## 🚀 Configuração do Banco de Dados

Utilizamos scripts no `package.json` para facilitar a configuração:

### 🔥 Primeira Configuração

```sh
npm run db:setup
```

Esse comando realiza:

1. Mesclagem dos schemas modulares
2. Criação da migração inicial
3. Geração do Prisma Client
4. Execução do seed para popular o banco

### 👀 Visualização dos Dados

```sh
npm run prisma:studio
```

O Prisma Studio abrirá no navegador em [http://localhost:5555](http://localhost:5555).

## 🛠️ Comandos Úteis

| Comando                                             | Descrição                                         |
| --------------------------------------------------- | ------------------------------------------------- |
| `npm run merge-schemas`                             | Mescla os modelos Prisma                          |
| `npm run prisma:migrate -- --name nome_da_migracao` | Cria uma nova migração                            |
| `npm run db:reset`                                  | Reseta o banco de dados (⚠️ apaga todos os dados) |
| `npm run prisma:seed`                               | Popula o banco com dados de teste                 |
| `npm run prisma:generate`                           | Regenera o Prisma Client após mudanças no schema  |

## 🛠️ Solução de Problemas

### ❌ Erro de Conexão

Se ocorrer um erro de conexão:

1. Verifique se o PostgreSQL está rodando (`systemctl status postgresql` no Linux).
2. Confirme se os dados no `.env` estão corretos.
3. Confira se o banco de dados `store` existe no PostgreSQL.

### ❌ Erros de Migração

```sh
npx prisma migrate reset --force
```

Isso recria todas as tabelas e apaga os dados existentes.

### ❌ Erro de "Shadow Database"

Se o Prisma reclamar do banco de "shadow":

- Certifique-se de que o usuário do PostgreSQL tem permissão para criar bancos de dados.
- Ou crie manualmente um banco `store_shadow`.

## 🏗️ Estrutura dos Modelos

Atualmente, os principais modelos do projeto são:

- **`User`** - Usuários da plataforma
- **`Product`** - Produtos disponíveis para venda

Novos modelos podem ser adicionados conforme necessário.

## 📢 Contribuição

🔹 Para adicionar novos modelos:

1. Crie um arquivo na pasta `prisma/models/` (ex: `Order.prisma`)
2. Execute:
   ```sh
   npm run merge-schemas
   npm run prisma:migrate -- --name add_order_model
   ```
3. Atualize `prisma/seed.ts` caso necessário

📖 Para mais informações, consulte a [documentação oficial do Prisma](https://www.prisma.io/docs/).

---

💡 *Criado por **[Bruno Pupp](https://github.com/bunopuppdev)** 💻🚀*

