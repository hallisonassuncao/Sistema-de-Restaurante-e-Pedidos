🍽️ Sistema de Restaurante e Pedidos
📌 Visão Geral
Este projeto é um sistema web para gerenciamento de clientes, pratos, pedidos e relatórios em restaurantes.
Ele foi desenvolvido em React + Vite e está hospedado na Vercel.

🚀 Funcionalidades
• 	Clientes
• 	Cadastro com nome, telefone, CEP e endereço.
• 	Listagem em tabela com opções de edição e exclusão.
• 	Pratos
• 	Cadastro e gerenciamento do cardápio.
• 	Pedidos
• 	Registro de pedidos vinculados a clientes e pratos.
• 	Controle de status dos pedidos.
• 	Relatórios
• 	Geração de relatórios de vendas e clientes.
• 	Apoio à tomada de decisão com dados organizados.

🛠️ Tecnologias Utilizadas
• 	Frontend: React + Vite
• 	Estilização: CSS/Styled Components (dependendo da implementação)
• 	Deploy: Vercel
• 	Banco de Dados (sugestão): PostgreSQL ou MongoDB
• 	API: REST ou GraphQL (dependendo da versão futura)

📂 Estrutura do Projeto

src/
 ├── components/     # Componentes reutilizáveis
 ├── pages/          # Páginas principais (Clientes, Pratos, Pedidos, Relatórios)
 ├── services/       # Integração com API
 ├── assets/         # Imagens e ícones
 └── App.jsx         # Configuração principal


🔄 Fluxo de Uso
1. 	Cadastro de Cliente → Inserir dados básicos.
2. 	Cadastro de Prato → Adicionar opções ao cardápio.
3. 	Registro de Pedido → Selecionar cliente e prato, confirmar pedido.
4. 	Relatórios → Consultar estatísticas de pedidos e clientes.

📊 Melhorias Futuras
• 	Autenticação de usuários (login/admin).
• 	Integração com meios de pagamento online.
• 	Dashboard com gráficos interativos.
• 	Suporte a múltiplos restaurantes/unidades.
