import { Table, Button, Popconfirm, Tabs, Input } from "antd";
import { useState, useEffect } from "react";

export default function PedidoTable({ data, clientesById, pratosById, onDelete }) {
  const [ingredientesRemovidos, setIngredientesRemovidos] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");

  // ✅ Carrega ingredientes do localStorage OU dos pedidos (somente na primeira vez)
  useEffect(() => {
    const salvo = localStorage.getItem("ingredientesRemovidos");

    if (salvo) {
      setIngredientesRemovidos(JSON.parse(salvo));
      return;
    }

    // ✅ Se não houver salvo, carrega dos pedidos apenas uma vez
    const todosIngredientes = data.flatMap((pedido) =>
      pedido.itens.flatMap((i) =>
        Array.isArray(i.ingredientes) ? i.ingredientes : []
      )
    );

    setIngredientesRemovidos(todosIngredientes);
    localStorage.setItem("ingredientesRemovidos", JSON.stringify(todosIngredientes));
  }, [data]);

  // ✅ Função para atualizar estado + salvar no localStorage
  const salvarIngredientes = (lista) => {
    setIngredientesRemovidos(lista);
    localStorage.setItem("ingredientesRemovidos", JSON.stringify(lista));
  };

  // ➕ Adicionar ingrediente manualmente
  const adicionarIngrediente = () => {
    if (novoIngrediente.trim() === "") return;

    const novaLista = [...ingredientesRemovidos, novoIngrediente.trim()];
    salvarIngredientes(novaLista);
    setNovoIngrediente("");
  };

  // ❌ Remover ingrediente específico
  const removerIngrediente = (index) => {
    const novaLista = ingredientesRemovidos.filter((_, i) => i !== index);
    salvarIngredientes(novaLista);
  };

  const columns = [
    {
      title: "Pedido",
      dataIndex: "id",
      render: (id) => `#${String(id).slice(-4)}`, // ✅ Número curto
    },
    {
      title: "Data",
      dataIndex: "data",
      render: (d) => new Date(d).toLocaleString("pt-BR"),
    },
    {
      title: "Cliente",
      dataIndex: "clienteId",
      render: (id) => clientesById[id]?.nome || "—",
    },
    {
      title: "Itens",
      dataIndex: "itens",
      render: (itens, pedido) =>
        itens.map((i, idx) => {
          const prato = pratosById[i.pratoId];
          const nome = prato?.nome || "Prato removido";
          const ingredientes = Array.isArray(i.ingredientes)
            ? i.ingredientes.join(", ")
            : "—";

          return (
            <div key={`${pedido.id}-${idx}`} style={{ marginBottom: 10 }}>
              <strong>{nome}</strong> ×{i.quantidade}
              <div style={{ fontSize: 12, color: "#555" }}>
                Ingredientes: {ingredientes}
              </div>
            </div>
          );
        }),
    },
    {
      title: "Valor Total",
      dataIndex: "valorTotal",
      render: (v) => `R$ ${v.toFixed(2)}`,
    },
    {
      title: "Ações",
      render: (_, record) => (
        <Popconfirm title="Excluir pedido?" onConfirm={() => onDelete(record.id)}>
          <Button danger size="small">Excluir Pedido</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          key: "1",
          label: "Pedidos",
          children: (
            <Table
              rowKey="id"
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              scroll={{ x: "max-content" }}
            />
          ),
        },
        {
          key: "2",
          label: "Ingredientes",
          children: (
            <div>
              <h3>Ingredientes</h3>

              {/* Campo de adicionar ingrediente */}
              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <Input
                  placeholder="Adicionar ingrediente..."
                  value={novoIngrediente}
                  onChange={(e) => setNovoIngrediente(e.target.value)}
                />
                <Button type="primary" onClick={adicionarIngrediente}>
                  Adicionar
                </Button>
              </div>

              {ingredientesRemovidos.length === 0 ? (
                <p>Nenhum ingrediente listado.</p>
              ) : (
                <ul>
                  {ingredientesRemovidos.map((ing, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      {ing}

                      <Button
                        danger
                        size="small"
                        onClick={() => removerIngrediente(idx)}
                      >
                        Remover
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ),
        },
      ]}
    />
  );
}