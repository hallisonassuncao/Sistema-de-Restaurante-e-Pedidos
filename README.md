# 🍽 Sistema de Restaurante e Pedidos
Frontend em React (Vite) + TailwindCSS + Ant Design + JavaScript (ESM)

Projeto de aplicação web completo para gerenciamento de restaurantes e pedidos, contemplando CRUDs de Restaurantes, Produtos e Pedidos, com persistência via LocalStorage.

# 🌐 Implantar da Aplicação
Frontend (Produção): 🔗 Vercel: https://sistema-de-restaurante-e-pedidos.vercel.app

# 📦 Repositórios
Frontend (ReactJS): 🔗 https://github.com/hallisonassuncao/Sistema-de-Restaurante-e-Pedidos.git

# 🧠 Visão Geral
Aplicação desenvolvida para facilitar o gerenciamento de restaurantes e pedidos, 
com funcionalidades completas de cadastro, 
edição, visualização e exclusão de dados.

# 🧰 Tecnologias Utilizadas
React (Vite) TailwindCSS Ant Design JavaScript (ESM) LocalStorage

# 📂 Estrutura do Projeto
 ```
Sistema-De-Restaurante/
├── node_modules/
├── images/
├── public/
├── src/
│   ├── assets/
│   ├── backend/
│   ├── components/
│   ├── daos/
│   ├── objetos/
│   ├── pages/
│   ├── routes/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
 ```
# 📋 Funcionalidades
 
- ✅ CRUD de Clientes
- ✅ CRUD de Pratos
- ✅ CRUD de Pedidos
- ✅ Relacionamento entre Clientes, Pratos, Pedidos e Relatório
- ✅ Interface responsiva e intuitiva

  # 📋 Requisitos Funcionais (RF)
# 👤 Clientes

- RF01 – Cadastra clientes, informando nome, telefone e endereço.
- RF02 – PermitE editar os dados de um cliente já cadastrado.
- RF03 – Permite excluir clientes do sistema.
- RF04 – Lista todos os clientes cadastrados.
- RF05 – permite selecionar um cliente no momento da criação de um pedido.

# 🍽 Pratos

- RF06 – Cadastra os pratos, informando nome, preço, categoria e ingredientes.
- RF07 – Edita os dados de um prato cadastrado.
- RF08 – Excluir pratos do cardápio.
- RF09 – Lista todos os pratos disponíveis no cardápio.
- RF10 – Visualiza detalhes de um prato, incluindo ingredientes e preço.

# 🧾 Pedidos

- RF11 – Cria um pedido associado a um cliente.
- RF12 – Adiciona um ou mais pratos ao pedido.
- RF13 – Remove pratos de um pedido antes da finalização.
- RF14 – Registra observações no pedido (ex.: retirar ingredientes).
- RF15 – Calcula automaticamente o valor total do pedido.
- RF16 – Altera o status do pedido (em preparo, pronto, entregue).
- RF17 – Lista todos os pedidos realizados.
- RF18 – Excluir ou cancelar pedidos quando necessário.

# 📊 Relatórios

- RF19 – Permite visualizar relatórios de pedidos realizados.
- RF20 – Permite filtrar relatórios por cliente.
- RF21 – Filtra relatórios por período (data inicial e final).
- RF22 – Exibi o valor total faturado em um período selecionado.
- RF23 – Visualiza detalhes de cada pedido no relatório (cliente, data e valor).

🔗 Requisitos de Relacionamento entre Módulos

RF24 – O sistema deve relacionar clientes aos pedidos.
RF25 – O sistema deve relacionar pratos aos pedidos, permitindo múltiplos pratos por pedido.
RF26 – O sistema deve permitir que relatórios combinem informações de clientes, pratos e pedidos.

# 🖼️ Telas da Aplicação
- Tela de Cadastro de Clientes
- Tela de Cadastro de Pratos
- Tela de Listagem de Pedidos
- Tela de Relatórios

# 🧠 Modelagem de Dados
# 📌 Diagrama de Classes
<img width="510" height="821" alt="diagramadeclasses" src="https://github.com/user-attachments/assets/c9f7212c-74d9-4570-a083-670babec5b42" />


# ▶️Execução Local
- npm install
- npm run dev

# 👥 Autoria
- Autores: Anderson, Hallison e Matheus Trindade
- Projeto: Sistema de Restaurante e Pedidos
- Área: Desenvolvimento FrontEnd
- Instituição: IFB Taguatinga


