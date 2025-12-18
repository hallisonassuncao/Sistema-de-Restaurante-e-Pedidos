import { useEffect, useState, useMemo } from 'react';
import {
  Table,
  Select,
  DatePicker,
  Statistic,
  Row,
  Col,
  Card,
  Divider,
  List,
  Tag
} from 'antd';
import dayjs from 'dayjs';
import { PedidoLocalDAO } from '../daos/pedidoLocalDAO';
import { ClienteLocalDAO } from '../daos/clienteLocalDAO';

const pedidoDAO = new PedidoLocalDAO();
const clienteDAO = new ClienteLocalDAO();

/* ======================================================
   NOTA FISCAL (SIMULAÇÃO)
====================================================== */
function NotaFiscal({ pedido, cliente }) {
  return (
    <Card
      size="small"
      style={{
        maxWidth: 420,
        margin: '0 auto',
        fontFamily: 'monospace',
        background: '#fff'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <b>GIRAFFAS RESTAURANTE</b>
        <br />
        CNPJ: 12.345.678/0001-99
        <br />
        Av. Principal, 1000 – Centro
        <Divider />
        <b>CUPOM FISCAL</b>
      </div>

      <Divider />

      <p>
        <b>Nº Pedido:</b> {pedido.id}
        <br />
        <b>Data:</b> {dayjs(pedido.data).format('DD/MM/YYYY HH:mm')}
        <br />
        <b>Cliente:</b> {cliente?.nome || 'Consumidor Final'}
      </p>

      <Divider />

      {pedido.itens.map((i, idx) => (
        <div key={idx}>
          {i.nome}
          <br />
          {i.quantidade} x R$ {i.preco.toFixed(2)}
          <span style={{ float: 'right' }}>
            R$ {(i.quantidade * i.preco).toFixed(2)}
          </span>

          {i.removidos?.length > 0 && (
            <div style={{ fontSize: 11, color: '#888' }}>
              (-) {i.removidos.join(', ')}
            </div>
          )}
          <Divider dashed />
        </div>
      ))}

      <Divider />

      <p>
        <b>Total:</b>
        <span style={{ float: 'right' }}>
          R$ {pedido.valorTotal.toFixed(2)}
        </span>
      </p>

      <p>
        Forma de pagamento:
        <br />
        <b>Cartão de Crédito</b>
      </p>

      <Divider />

      <div style={{ textAlign: 'center', fontSize: 11 }}>
        Documento sem valor fiscal
        <br />
        Simulação acadêmica
      </div>
    </Card>
  );
}

/* ======================================================
   COMPONENTE PRINCIPAL
====================================================== */
export default function RelatorioPedidosPorCliente() {
  const [clientes, setClientes] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [clienteId, setClienteId] = useState(null);
  const [range, setRange] = useState([null, null]);

  useEffect(() => {
    setPedidos(pedidoDAO.list());
    setClientes(clienteDAO.list());
  }, []);

  /* ===================== FILTRO ===================== */
  const filtered = pedidos.filter(p => {
    const byCliente = clienteId ? p.clienteId === clienteId : true;
    const d = dayjs(p.data);
    const byDate =
      range[0] && range[1]
        ? d.isSameOrAfter(range[0], 'day') &&
          d.isSameOrBefore(range[1], 'day')
        : true;
    return byCliente && byDate;
  });

  /* ===================== KPIs ===================== */
  const totalPedidos = filtered.length;
  const totalValor = filtered.reduce((a, p) => a + p.valorTotal, 0);
  const ticketMedio = totalPedidos ? totalValor / totalPedidos : 0;

  /* ===================== TOP ITENS ===================== */
  const topItens = useMemo(() => {
    const map = {};
    filtered.forEach(p =>
      p.itens.forEach(i => {
        map[i.nome] = (map[i.nome] || 0) + i.quantidade;
      })
    );
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [filtered]);

  /* ===================== FATURAMENTO POR CLIENTE ===================== */
  const faturamentoClientes = useMemo(() => {
    const map = {};
    filtered.forEach(p => {
      map[p.clienteId] = (map[p.clienteId] || 0) + p.valorTotal;
    });
    return Object.entries(map).map(([id, valor]) => ({
      nome: clientes.find(c => c.id === Number(id))?.nome || '—',
      valor
    }));
  }, [filtered, clientes]);

  /* ===================== COLUNAS ===================== */
  const columns = [
    {
      title: 'Cliente',
      dataIndex: 'clienteId',
      render: id => clientes.find(c => c.id === id)?.nome || '—'
    },
    {
      title: 'Data',
      dataIndex: 'data',
      render: d => dayjs(d).format('DD/MM/YYYY HH:mm')
    },
    {
      title: 'Itens',
      dataIndex: 'itens',
      align: 'center',
      render: itens =>
        itens.reduce((a, i) => a + i.quantidade, 0)
    },
    {
      title: 'Valor Total',
      dataIndex: 'valorTotal',
      align: 'right',
      render: v => `R$ ${v.toFixed(2)}`
    }
  ];

  return (
    <Card bordered={false} style={{ background: '#f4f6f4' }}>
      {/* HEADER */}
      <Card
        bordered={false}
        style={{
          background: '#F36F21',
          color: '#fff',
          marginBottom: 24,
          borderRadius: 12
        }}
      >
        <h1 style={{ margin: 0 }}> Relatório de Pedidos</h1>
        <p style={{ margin: 0 }}>Nota Fiscal Simulada</p>
      </Card>

      {/* FILTROS */}
      <Card style={{ marginBottom: 24, borderRadius: 12 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Select
              allowClear
              placeholder="Filtrar por cliente"
              options={clientes.map(c => ({
                value: c.id,
                label: c.nome
              }))}
              onChange={setClienteId}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={24} md={16}>
            <DatePicker.RangePicker
              style={{ width: '100%' }}
              onChange={vals => setRange(vals)}
            />
          </Col>
        </Row>
      </Card>

      {/* KPIs */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {[
          ['Pedidos', totalPedidos],
          ['Faturamento', `R$ ${totalValor.toFixed(2)}`],
          ['Ticket Médio', `R$ ${ticketMedio.toFixed(2)}`]
        ].map(([t, v], i) => (
          <Col xs={24} md={8} key={i}>
            <Card
              bordered={false}
              style={{
                background: '#fff',
                borderLeft: '6px solid #F36F21',
                borderRadius: 12
              }}
            >
              <Statistic
                title={t}
                value={v}
                valueStyle={{ color: '#2E7D32', fontWeight: 'bold' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* TABELA */}
      <Divider orientation="left">Pedidos</Divider>

      <Card style={{ borderRadius: 12 }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={filtered}
          pagination={{ pageSize: 6 }}
          expandable={{
            showExpandColumn: false, // 🔥 remove o "+"
            expandedRowRender: pedido => {
              const cliente = clientes.find(
                c => c.id === pedido.clienteId
              );

              return (
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={14}>
                    <Table
                      size="small"
                      pagination={false}
                      dataSource={pedido.itens}
                      rowKey={(i, idx) => idx}
                      columns={[
                        { title: 'Produto', dataIndex: 'nome' },
                        {
                          title: 'Qtd',
                          dataIndex: 'quantidade',
                          align: 'center'
                        },
                        {
                          title: 'Preço',
                          dataIndex: 'preco',
                          align: 'right',
                          render: v => `R$ ${v.toFixed(2)}`
                        },
                        {
                          title: 'Subtotal',
                          align: 'right',
                          render: (_, i) =>
                            `R$ ${(i.quantidade * i.preco).toFixed(2)}`
                        }
                      ]}
                    />

                    <Divider />

                    <b style={{ float: 'right' }}>
                      Total do Pedido: R$ {pedido.valorTotal.toFixed(2)}
                    </b>
                  </Col>

                  <Col xs={24} md={10}>
                    <NotaFiscal pedido={pedido} cliente={cliente} />
                  </Col>
                </Row>
              );
            }
          }}
        />
      </Card>

      {/* ANÁLISES */}
      <Divider orientation="left">Análise Gerencial</Divider>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="🏆 Itens Mais Vendidos">
            <List
              dataSource={topItens}
              renderItem={([nome, qtd], i) => (
                <List.Item>
                  {i + 1}. {nome}
                  <Tag color="green">{qtd}</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="👥 Faturamento por Cliente">
            <List
              dataSource={faturamentoClientes}
              renderItem={c => (
                <List.Item>
                  {c.nome}
                  <b>R$ {c.valor.toFixed(2)}</b>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card style={{ background: '#fffbe6', borderRadius: 12 }}>
        <b>📌 Observações Gerenciais</b>
        <ul>
          <li>Ticket médio indica potencial de combos</li>
          <li>Itens líderes devem receber destaque no cardápio</li>
          <li>Clientes recorrentes concentram faturamento</li>
        </ul>
      </Card>
    </Card>
  );
}
