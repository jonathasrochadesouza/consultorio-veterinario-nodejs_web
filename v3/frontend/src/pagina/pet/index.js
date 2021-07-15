import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import index from '../pet/index.css';


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

export default function CadastroPet() {

  const [idcliente, setIdCliente] = useState(0);
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [imagem_pet, setImagem] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
      idcliente,
      nome,
      raca,
      idade,
      peso,
      altura,
      sexo,
      imagem_pet
    };

    try {
      if (dados.idcliente !== "" && dados.nome !== "" && dados.raca !== "" && dados.idade !== "" && dados.peso !== "" && dados.altura !== "" && dados.sexo !== "") {
        const formData = new FormData();
        formData.append('imagem_pet', document.getElementById('upload').files[0]);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        api.put('pet', dados);
        api.post(`pet${idcliente}`, formData);

        alert('Salvo com sucesso');
        setIdCliente('');
        setNome('');
        setRaca('');
        setIdade('');
        setPeso('');
        setAltura('');
        setSexo('');
        setImagem('');
        document.getElementById('upload').value = null;
      }
      else {
        alert('É necessário preencher todos os campos!')
      }

    } catch (error) {
      alert("Erro ao cadastrar usuário " + error.message);
    }
  }
  const classes = useStyles();
  return (
    <div>
      <div id="header_pet_link">
        <div id="link_cliente">
          <a href="home">HOME</a>
        </div>
        <div id="link_cliente">
          <a href="cadastrar-usuario">CADASTRAR USUÁRIO</a>
        </div>
        <div id="link_cliente">
          <a href="cadastrar-pet">CADASTRAR PET</a>
        </div>
        <div id="link_cliente">
          <a href="login">LOGIN</a>
        </div>
      </div>

      <div id="container_pet">
        <h1>Cadastro de Pets</h1>

        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleCadastro}>

          <div id="imagem_container">
            <TextField
              id="imagem"
              defaultValue="foo"
              disabled
              variant="outlined"
              value={imagem_pet}
              onChange={e => setImagem(e.target.value)}
            />
          </div>

          <div id="selecionarimagem">
            {/* onChange={e => setImagem(e.target.value)} */}
            <input type="file" accept="application/image" id="upload" />
          </div>


          <TextField
            id="cliente"
            label="cliente"
            defaultValue="cliente"
            variant="outlined"
            value={idcliente}
            onChange={e => setIdCliente(e.target.value)}
          />

          <TextField
            id="nome"
            label="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            variant="outlined"
          />

          <TextField
            id="raca"
            label="Raça"
            defaultValue="Raca"
            variant="outlined"
            value={raca}
            onChange={e => setRaca(e.target.value)}
          />

          <TextField
            id="idade"
            label="Idade"
            defaultValue="idade"
            variant="outlined"
            value={idade}
            onChange={e => setIdade(e.target.value)}
          />

          <TextField
            id="peso"
            label="Peso"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            variant="outlined"
          />

          <TextField
            id="altura"
            label="Altura"
            defaultValue="foo"
            variant="outlined"
            value={altura}
            onChange={e => setAltura(e.target.value)}
          />

          <TextField
            id="sexo"
            label="Sexo"
            value={sexo}
            onChange={e => setSexo(e.target.value)}
            variant="outlined"
          />
          <div>
            <Button variant="contained" color="secondary" type="submit" id="salvar">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
