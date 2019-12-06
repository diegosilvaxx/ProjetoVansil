import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import './styles.css';
import GridVenda from './GridVenda';
import Tabs from '../../components/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PesquisaCliente from './PesquisaCliente';
import PesquisaProduto from './PesquisaProduto';
import Logistica from './Logistica';
import Contabilidade from './Contabilidade';

// import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  PessoaContato: Yup.string().required('Pessoa de contato é obrigatório'),
});

export default function PedidoVenda() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit({ nome, PessoaContato }) {
    console.log(nome, PessoaContato);
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: '90%',
          borderRadius: '4px',
          margin: 'auto',
          marginBottom: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label className={'lblTitulo'}>Pedido de Venda</label>
          <Button onClick={handleShow} className={'PesquisaCliente'}>
            Pesquisar Clientes
          </Button>
        </div>

        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Pesquisa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PesquisaCliente></PesquisaCliente>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <Form schema={schema} onSubmit={handleSubmit}>
          <div className={'containerForm'}>
            <div style={{ display: 'flex' }}>
              <div className={'inputWidth'}>
                <label for="name">Nome</label>
                <Input name="nome" type="text" placeholder="Nome" />
              </div>
              <div className={'inputWidth'}>
                <label for="name">Pessoa de contato</label>
                <Input
                  name="PessoaContato"
                  type="text"
                  placeholder="Pessoa de contato"
                />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº Ref. Cliente
                </label>
                <Input
                  name="refCliente"
                  type="text"
                  placeholder="Nº Ref. Cliente"
                />
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Status
                </label>
                <Input name="Status" type="text" placeholder="Status" />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº – Seq. numérica
                </label>
                <Input
                  name="seqNumerica"
                  type="text"
                  placeholder="Nº – Seq. numérica"
                />
              </div>
              <div className={'inputWidth'}>
                <label for="name" class="">
                  Nº Doc SAP
                </label>
                <Input name="DocSap" type="text" placeholder="Nº Doc SAP" />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                marginLeft: '30px',
              }}
            >
              {/* tabs */}

              <Tabs>
                <Tabs.Tab label={'Conteúdo'}>
                  <div className={'PesquisaVenda'}>
                    <Button onClick={handleShow} className={'PesquisaVenda'}>
                      Pesquisar Produtos
                    </Button>
                    <GridVenda props={{ tesa: '123' }}></GridVenda>
                  </div>
                </Tabs.Tab>

                <Tabs.Tab label={'Logística'}>
                  <Logistica />
                </Tabs.Tab>

                <Tabs.Tab label={'Contabilidade'}>
                  <Contabilidade />
                </Tabs.Tab>
              </Tabs>

              {/* tabs */}
            </div>

            <div style={{ display: 'flex', marginBottom: '30px' }}>
              <div className={'inputWidth'} style={{ margin: '0 30px 0' }}>
                <Button
                  type="submit"
                  onClick={() =>
                    handleSubmit({
                      nome: 'diegao2',
                      PessoaContato: 'master321',
                    })
                  }
                >
                  Ok
                </Button>
              </div>
              <div className={'inputWidth'}>
                <Button variant="secondary" onClick={() => alert('Cancelado')}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
