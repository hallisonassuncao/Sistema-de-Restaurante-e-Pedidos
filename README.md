# 🍽 Sistema de Restaurante e Pedidos

Frontend em **React (Vite)** + **TailwindCSS** + **Ant Design** + **JavaScript (ESM)**

Projeto de aplicação web completo para gerenciamento de restaurantes e pedidos, contemplando CRUDs de Restaurantes, Produtos e Pedidos, com persistência via **LocalStorage**.

---

## 🌐 Implantação da Aplicação
- Frontend (Produção): [Vercel](https://sistema-de-restaurante-e-pedidos.vercel.app)

---

## 📦 Repositórios
- **Frontend (ReactJS):** [GitHub](https://github.com/hallisonassuncao/Sistema-de-Restaurante-e-Pedidos.git)

---

## 🧠 Visão Geral
Aplicação desenvolvida para facilitar o gerenciamento de restaurantes e pedidos, com funcionalidades completas de cadastro, edição, visualização e exclusão de dados.

---

## 🧰 Tecnologias Utilizadas
- React (Vite)
- TailwindCSS
- Ant Design
- JavaScript (ESM)
- LocalStorage

---

## 📂 Estrutura do Projeto

### 📋 Funcionalidades
- ✅ CRUD de Restaurantes  
- ✅ CRUD de Produtos (Cardápio)  
- ✅ CRUD de Pedidos  
- ✅ Relacionamento entre Restaurante, Produto e Pedido  
- ✅ Atualização do status do pedido  
- ✅ Interface responsiva e intuitiva  

---

## 🖼️ Telas da Aplicação
- Tela de Cadastro de Restaurante  
- Tela de Cadastro de Produto  
- Tela de Listagem de Produtos  
- Tela de Pedido  

---

## 🧠 Modelagem de Dados

**Restaurante**  
- nome  
- endereço  
- contato  

**Produto**  
- nome  
- preço  
- descrição  
- restauranteId  

**Pedido**  
- id  
- cliente  
- itens  
- total  
- status  
- restauranteId  

**Cliente**  
- nome  
- contato  

---

## ▶️ Execução Local
```bash
npm install
npm run dev
