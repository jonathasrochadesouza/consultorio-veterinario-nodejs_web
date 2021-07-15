import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListaCliente from './pagina/listaCliente/index';
import SignUp from './pagina/login/index';
import Faq from './pagina/sobre/index';
import CadastroPet from './pagina/pet/index'
import CadastroUsuario from './pagina/cadastroUsuario/index';
import CadastroCliente from './pagina/cadastroCliente/index';
import Home from './pagina/home/home'
import ListaPets from './pagina/listaPets/index';
import ListaUsuarios from './pagina/listaUsuarios/index'
import RecuperarSenha from './pagina/RecuperaSenha/index'

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
                <Route path='/pets' exact={true} component={ListaPets} />
                <Route path='/usuarios' exact={true} component={ListaUsuarios} />
                <Route path='/recuperar-senha' exact={true} component={RecuperarSenha} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;