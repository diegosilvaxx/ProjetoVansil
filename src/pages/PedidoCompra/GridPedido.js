import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { adicionarProduto } from "~/store/modules/pedidoCompra/actions";
import { toast } from "react-toastify";

export default function GridVenda() {
  const dispatch = useDispatch();
  const stateGetProduto = useSelector(state => state.pedidoCompra);

  const result = stateGetProduto.ProdutosSelecionado;
  debugger;

  async function selecionaProduto({ data }) {
    toast.success("Produto excluido com sucesso!");
  }

  const [state] = useState({
    columnDefs: [
      {
        headerName: "Nº do item",
        field: "data.Codigo",
        editable: false,
        width: 120
      },
      {
        headerName: "Descrição do item",
        field: "data.Descricao",
        editable: false,
        width: 490
      },
      {
        headerName: "Preço Unitário ",
        field: "Preco ",
        width: 120,
        editable: false,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"Preco" + params.data.Codigo}
              style={{ width: "100px", margin: "0", height: "auto" }}
              type="number"
              disabled
              value={params.data.Desconto}
            ></input>
          );
        }
      },
      {
        headerName: "Quantidade ",
        field: "Quantidade ",
        width: 120,
        editable: false,
        cellRendererFramework: function(params) {
          return (
            <input
              id={"Quantidade" + params.data.Codigo}
              type="number"
              style={{ width: "100px", margin: "0", height: "auto" }}
              className={"teste"}
              disabled
              value={params.data.Quantidade}
            ></input>
          );
        }
      },
      {
        headerName: "Actions",
        field: "actions",
        width: 120,
        cellRendererFramework: function(params) {
          return (
            <Button
              style={{ width: "auto", margin: "0", height: "auto" }}
              variant="primary"
              size="sm"
              onClick={() => selecionaProduto(params)}
            >
              Excluir
            </Button>
          );
        }
      }
    ]
  });

  return (
    <>
      <div
        className="ag-theme-balham"
        style={{ height: "390px", width: "100%", justifyContent: "center" }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          columnDefs={state.columnDefs}
          rowData={result[0].valueOf().Quantidade != null ? result : []}
          rowHeight={35}
        ></AgGridReact>
      </div>
    </>
  );
}
