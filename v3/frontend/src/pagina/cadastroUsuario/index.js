import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import '../cadastroUsuario/index.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default function CadastroUsuario() {

  const [idcliente, setId] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [data_criacao, setData] = useState(new Date().toISOString());

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
      idcliente,
      email,
      senha,
      data_criacao
    };

    try {
      if (dados.idcliente !== "" && dados.email !== "" && dados.senha !== "") {
        const save = api.put('/usuario', dados);

        if ((await save).status == 200) {
          alert('Salvo com sucesso');
          setId('');
          setEmail('');
          setSenha('');
        }

        if ((await save).status == 422) {
          alert('Usuário já possui cadastro');
        }
      }
      else {
        alert('É necessário preencher todos os campos!')
      }

    } catch (error) {
      alert("Erro ao cadastrar usuário, usuário já existe!");
    }
  }
  const classes = useStyles();

  return (
    <div id="usuario_container">
      <div id="header_usuario_link">
        <div id="link_cliente">
          <a href="home">HOME</a>
        </div>
        <div id="link_cliente">
          <a href="faq">FAQ</a>
        </div>
        <div id="link_cliente">
          <a href="cadastrar-pet">CADASTRAR PET</a>
        </div>
        <div id="link_cliente">
          <a href="login">LOGIN</a>
        </div>
      </div>

      <div id="container_usuario">

        <h1>Cadastro de Usuário</h1>

        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleCadastro}>

          <div >
            <TextField
              id="id"
              label="cliente"
              defaultValue="Cliente"
              variant="outlined"
              value={idcliente}
              onChange={e => setId(e.target.value)}
            />

            <TextField
              id="email"
              label="email"
              defaultValue="Código"
              variant="outlined"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              id="senha"
              label="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary" type="submit" id="salvar">
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
