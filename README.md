🚀 Projeto FrontEnd — Sistema de Restaurante e Pedidos
Aplicação FrontEnd desenvolvida em ReactJS para gerenciamento de restaurantes e pedidos, implementando CRUDs completos, integração com API REST e boas práticas de arquitetura.

🌐 Deploy da Aplicação
🔗 FrontEnd (produção):
https://sistema-de-restaurante-e-pedidos.vercel.app/

📦 Repositórios do Projeto
🔗 FrontEnd (ReactJS):
(https://github.com/hallisonassuncao/Sistema-de-Restaurante-e-Pedidos.git)

🧭 Visão Geral do Projeto
- Domínio: Gerenciamento de Restaurantes e Pedidos
- Entidades principais: Restaurante, Cardápio, Produto, Pedido, Cliente, Usuário
- Objetivo: Desenvolver uma aplicação FrontEnd completa para cadastro de restaurantes, gerenciamento de cardápios e pedidos, com integração a um Backend via API REST.
- Persistência: Realizada via Backend (API REST).

🧰 Tecnologias Utilizadas
FrontEnd
- ReactJS
- JavaScript (ES6+)
- Styled Components / CSS Modules
- React Router
- Axios
BackEnd (Integração)
- Node.js
- Express
- MongoDB (Mongoose)
- API REST
- Deploy em Vercel

🎯 Desafio Atendido (CRUDs + Relacionamentos)
O projeto contempla:
✅ CRUD de Restaurantes
✅ CRUD de Produtos (Cardápio)
✅ CRUD de Pedidos
✅ Relacionamentos entre Restaurante, Produto e Pedido
✅ Uso de API REST para persistência

📋 Requisitos Funcionais (RF)
Restaurante
- RF01 — Cadastrar Restaurante
- RF02 — Listar Restaurantes
- RF03 — Visualizar detalhes do Restaurante
- RF04 — Editar Restaurante
- RF05 — Remover Restaurante
Produto (Cardápio)
- RF06 — Cadastrar Produto
- RF07 — Listar Produtos
- RF08 — Editar Produto
- RF09 — Remover Produto
- RF10 — Associar Produto ao Restaurante
Pedido
- RF11 — Criar Pedido
- RF12 — Listar Pedidos
- RF13 — Atualizar Status do Pedido (em preparo, pronto, entregue)
- RF14 — Cancelar Pedido

⚙️ Requisitos Não Funcionais (RNF)
- RNF01 — Aplicação desenvolvida em ReactJS
- RNF02 — Interface responsiva e intuitiva
- RNF03 — Comunicação com Backend via API REST
- RNF04 — Código organizado por componentes e responsabilidades
- RNF05 — Validação de formulários
- RNF06 — Deploy em ambiente de produção (Vercel)

🖼️ Telas da Aplicação
- Tela 1 — Cadastro de Restaurante
- Tela 2 — Listagem de Restaurantes
- Tela 3 — Cadastro de Produto (Cardápio)
- Tela 4 — Listagem de Produtos
- Tela 5 — Criação de Pedido
- Tela 6 — Listagem de Pedidos com Status

🧠 Modelagem dos Dados
📌 Diagrama de Classes (conceitual):
- Restaurante
- Produto
- Pedido
- Cliente
- Usuário

📂 Estrutura do Projeto FrontEnd
src/
├── pages/
├── components/
├── models/
├── services/
├── routes/
└── App.jsx



▶️ Execução Local
npm install
npm run dev



👥 Autoria
- Autor: (Anderson, Hallison, Matheus Trindade)
- Projeto: Sistema de Restaurante e Pedidos
- Área: Desenvolvimento FrontEnd
- Instituição: (IFB Taguatinga)

📌 Considerações Finais
Este projeto demonstra:
- domínio dos conceitos de CRUD;
- integração FrontEnd ↔ BackEnd via API REST;
- aplicação de modelagem UML;
- aplicação publicada em ambiente de produção.
