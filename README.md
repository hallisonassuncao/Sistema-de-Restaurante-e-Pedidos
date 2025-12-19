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
- RF16 – Lista todos os pedidos realizados.
- RF17 – Excluir ou cancelar pedidos quando necessário.

# 📊 Relatórios

- RF18 – Permite visualizar relatórios de pedidos realizados.
- RF19 – Permite filtrar relatórios por cliente.
- RF20 – Filtra relatórios por período (data inicial e final).
- RF21 – Exibi o valor total faturado em um período selecionado.
- RF22 – Visualiza detalhes de cada pedido no relatório (cliente, data e valor).

🔗 Requisitos de Relacionamento entre Módulos

RF24 – O sistema deve relacionar clientes aos pedidos.
RF25 – O sistema deve relacionar pratos aos pedidos, permitindo múltiplos pratos por pedido.
RF26 – O sistema deve permitir que relatórios combinem informações de clientes, pratos e pedidos.

# 🖼️ Telas da Aplicação
- Tela 01 ==> Cadastro de Clientes

 <img width="1070" height="601" alt="Cliente 1" src="https://github.com/user-attachments/assets/d3071e5d-bb5e-4a7a-b831-98f2c21e8a13" />

- Tela 02 ==> Listagem de Clientes

 <img width="1333" height="607" alt="Listagem de Cliente" src="https://github.com/user-attachments/assets/50d6a2ea-5adb-4d61-a1fc-7e622634ba3f" />

- Tela 03 ==> Cadastro de Pratos

 <img width="1309" height="426" alt="Cadastro de Pratos" src="https://github.com/user-attachments/assets/6dfe285c-7a93-461b-8258-2ad4e7c84834" />

- Tela 04 ==> Listagem de Pratos

 <img width="1317" height="610" alt="Pratos" src="https://github.com/user-attachments/assets/d0e0e5bf-d7b0-413d-b45f-2ae5ef95dc3c" />

- Tela 05 ==> Novo Pedido

 <img width="589" height="416" alt="Novo pedido" src="https://github.com/user-attachments/assets/dbf661a5-6c87-4623-949e-1f012e461d0d" />

  

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


