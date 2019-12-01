import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import PedidoVenda from '../pages/PedidoVenda';
import CadastroCliente from '../pages/CadastroCliente';
import MenuLateral from '~/MenuLateral';
import Header from '~/Header';
import '~/styles/headerCSS.css';
import GlobalStyle from '../styles/global';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <>
        <Header />
        <GlobalStyle />
        <div className="container">
          <section id={'sectionLeft'} className="sectionLeft">
            <MenuLateral></MenuLateral>
          </section>
          <section className="sectionRight">
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
            <Route
              path="/cadastroCliente"
              exact
              component={CadastroCliente}
              isPrivate
            />
            <Route
              path="/pedidoVenda"
              exact
              component={PedidoVenda}
              isPrivate
            />
          </section>
        </div>
      </>
    </Switch>
  );
}
