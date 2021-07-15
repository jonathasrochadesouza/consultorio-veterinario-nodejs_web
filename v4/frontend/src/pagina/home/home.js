import React, { useState, useEffect } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route, useHistory, Switch, Redirect } from "react-router-dom";
import CadastroCliente from '../cadastroUsuario/index';
import '../home/home.css'

const useStyles = makeStyles((theme) => ({

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Home() {
 

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [redirect, setState] = useState(false);
  

  async function HandleCadastro(e) {
    e.preventDefault();

    const dados = {
      email,
      senha
    };

      try{
      const login = api.post('login', dados);
    
      if ((await login).status == 200) {
        alert('login')
        setState({ redirect: true });
      }
      if ((await login).status == 401) {
        alert('Usuário não cadastrado');
      }
    }  catch (error){
      alert("Usuário não cadastrado!"); 
    }
  }
  const classes = useStyles();

  if (redirect) {
    return <Redirect to='/cadastrar-usuario'/>;
  }
  return (
    <div >
        <h1>Bem vindo ao consultório WEB</h1>
      <div id="container_home">
        <Typography component="h1" variant="h5">
    
        </Typography>
          <Grid container >
            <Grid item  id="opcao_home">
            <Link href="cadastrar-cliente"  id="link">
                {"Cadastro de Clientes"}
              </Link>
            </Grid>  

            <Grid item  id="opcao_home">
            <Link href="cadastrar-pet" id="link">
                {"Cadastros de Pets"}
              </Link>
            </Grid>  

            <Grid item id="opcao_home">
            <Link href="cadastrar-usuario" id="link">
                {"Cadastro de Usuários"}
              </Link>
            </Grid>

            <Grid item  id="opcao_home">
            <Link href="login" id="link">
                {"Login"}
              </Link>
            </Grid>  

            <Grid item  id="opcao_home">
            <Link href="faq" id="link">
                {"FAQ"}
              </Link>
            </Grid>  

            <Grid item id="opcao_home">
            <Link href="clientes" id="link">
                {"Lista de Clientes"}
              </Link>
            </Grid>

            <Grid item id="opcao_home">
            <Link href="pets" id="link">
                {"Lista de Pet"}
              </Link>
            </Grid>

            <Grid item id="opcao_home">
            <Link href="usuarios" id="link">
                {"Lista de Usuário"}
              </Link>
            </Grid>

            <Grid item id="opcao_home">
            <Link href="#" id="link">
                {"#"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}
