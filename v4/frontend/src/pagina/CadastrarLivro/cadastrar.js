import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import '../CadastrarLivro/cadastar.css'

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



export default function StateTextFields() {


  const [codigo, setCodigo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [isbn, setIsbn] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigoassunto, setAssunto] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
        codigo,
        titulo,
        isbn,
        quantidade,
        codigoassunto
    };

    try {
        console.log(dados);
        const response = await api.put('/book', dados);
        const codigo = response.data.codigo;
        alert("o id do livro é " + codigo);
        setCodigo('');
        setTitulo('');
        setIsbn('');
        setQuantidade('');
        setAssunto('');
        // history.push('/');
    } catch (error) {
        alert("Erro ao cadastrar livro " + error.message);            
    }
}

  const classes = useStyles();
  

  return (
    <div>
    <h1>Cadastro de Livro</h1>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleCadastro} id="formulario">
      <div>

      <TextField
          id="codigo"
          label="Código"
          defaultValue="Código"
          variant="outlined"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
        />

        <TextField
          id="titulo"
          label="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="isbn"
          label="ISBN"
          defaultValue="foo"
          variant="outlined"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />

        <TextField
         
          label="quantidade"
          defaultValue="foo"
          variant="outlined"
          value={quantidade}
          onChange={e => setQuantidade(e.target.value)}
        />

        <TextField
          id="codassunto"
          label="Código Assunto"
          defaultValue="foo"
          variant="outlined"
          value={codigoassunto}
          onChange={e => setAssunto(e.target.value)}
        />

   
      </div>
      <Button variant="contained" color="secondary" type="submit">
        Salvar
      </Button>
    </form>
    </div>
  );
}
