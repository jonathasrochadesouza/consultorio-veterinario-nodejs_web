import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroLivro from './pagina/CadastrarLivro';
import ListaCliente from './pagina/listaCliente/index';
import SignUp from './pagina/login/index';
import Faq from './pagina/sobre/index';
import CadastroUsuario from './pagina/cadastroUsuario/index';
import CadastroCliente from './pagina/cadastroCliente/index';
import CadastroPet from './pagina/pet/index.js';
import Home from './pagina/home/home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' exact={true} component={Home} />
                <Route path='/login' exact={true} component={SignUp} />
                <Route path='/cadastrar-cliente' exact={true} component={CadastroCliente} />
                <Route path='/cadastrar-usuario' exact={true} component={CadastroUsuario} />
                <Route path='/cadastrar-pet' exact={true} component={CadastroPet} />
                <Route path='/faq' exact={true} component={Faq} />
                <Route path='/clientes' exact={true} component={ListaCliente} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;