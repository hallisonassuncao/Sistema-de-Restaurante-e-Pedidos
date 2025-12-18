import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Avatar,
  List,
  message,
  Divider
} from 'antd';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate
} from 'react-router-dom';

import {
  UserOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined,
  EditOutlined
} from '@ant-design/icons';

// Páginas
import PratosPage from './pages/PratosPage';
import ClientesPage from './pages/ClientesPage';
import PedidosPage from './pages/PedidosPage';
import RelatorioPedidosPorCliente from './pages/RelatorioPedidosPorCliente';

const { Header, Content, Footer } = Layout;

/* ---------------- MENU ---------------- */
function AppMenu() {
  const location = useLocation();

  const selectedKey = () => {
    if (location.pathname === '/clientes') return '1';
    if (location.pathname === '/pratos') return '2';
    if (location.pathname === '/pedidos') return '3';
    if (location.pathname === '/relatorio') return '4';
    return '1';
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[selectedKey()]}
      style={{ flex: 1, justifyContent: 'center' }}
      items={[
        { key: '1', icon: <UserOutlined />, label: <Link to="/clientes">Clientes</Link> },
        { key: '2', icon: <CoffeeOutlined />, label: <Link to="/pratos">Pratos</Link> },
        { key: '3', icon: <ShoppingCartOutlined />, label: <Link to="/pedidos">Pedidos</Link> },
        { key: '4', icon: <BarChartOutlined />, label: <Link to="/relatorio">Relatórios</Link> },
      ]}
    />
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    message.success('Logout realizado com sucesso');
    setOpen(false);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>

        {/* HEADER */}
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            background: '#001529'
          }}
        >

          {/* LOGO SIMPLES + TEXTO */}
          <Link
            to="/clientes"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
              marginRight: 32
            }}
          >
            {/* LOGO RESTAURANTE (SVG SIMPLES) */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 10 }}
            >
              {/* Garfo */}
              <path
                d="M6 2V10M8 2V10M10 2V10M8 10V22"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Faca */}
              <path
                d="M16 2V22"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <span style={{ fontSize: 18, fontWeight: 'bold' }}>
              Sistema Restaurante
            </span>
          </Link>

          {/* MENU */}
          <AppMenu />

          {/* AÇÕES */}
          <div style={{ display: 'flex', gap: 16 }}>
            <Button
              type="text"
              icon={<BellOutlined style={{ color: 'white' }} />}
              onClick={() => message.info('Sem novas notificações')}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<SettingOutlined />}
              onClick={() => setOpen(true)}
            />
          </div>
        </Header>

        {/* CONTEÚDO */}
        <Content style={{ padding: 24 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/clientes" />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/pratos" element={<PratosPage />} />
            <Route path="/pedidos" element={<PedidosPage />} />
            <Route path="/relatorio" element={<RelatorioPedidosPorCliente />} />
          </Routes>
        </Content>

        {/* FOOTER */}
        <Footer style={{ textAlign: 'center', color: '#888' }}>
          Sistema de Gestão de Restaurante © 2025
        </Footer>

        {/* DRAWER */}
        <Drawer
          title="Painel do Usuário"
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ textAlign: 'center' }}>
            <Avatar size={80} icon={<UserOutlined />} />
            <h3 style={{ marginTop: 16 }}>Administrador</h3>
            <p style={{ color: '#888' }}>admin@restaurante.com</p>

            <Button size="small" icon={<EditOutlined />}>
              Editar Perfil
            </Button>
          </div>

          <Divider />

          <List
            itemLayout="horizontal"
            dataSource={[
              { title: 'Configurações Gerais', icon: <SettingOutlined /> },
              { title: 'Segurança', icon: <SafetyCertificateOutlined /> },
              { title: 'Notificações', icon: <BellOutlined /> },
            ]}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={item.icon} />}
                  title={item.title}
                />
              </List.Item>
            )}
          />

          <Button
            danger
            type="primary"
            block
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Sair do Sistema
          </Button>
        </Drawer>

      </Layout>
    </Router>
  );
}
