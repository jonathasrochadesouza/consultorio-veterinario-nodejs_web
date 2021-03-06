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
import CadastroCliente from '../CadastrarLivro/cadastrar';
import '../login/login.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [redirect, setState] = useState(false);


  async function HandleCadastro(e) {
    e.preventDefault();

    const dados = {
      email,
      senha
    };

    try {
      if (email !== "" && senha !== "") {
        const login = api.post('login', dados);

        if ((await login).status == 200) {
          setState({ redirect: true });
        }
        if ((await login).status == 401) {
          alert('Usuário não cadastrado');
        }
      }
      else {
        alert('Preencha todos os campos!')
      }
    } catch (error) {
      alert("Usuário não cadastrado!");
    }
  }
  const classes = useStyles();

  if (redirect) {
    return <Redirect to='home' />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        {/* <form className={classes.form} noValidate onSubmit={HandleCadastro}> */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={HandleCadastro}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="recuperar-senha" variant="body2">
                {"Esqueci a senha"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="cadastrar-usuario" variant="body2">
                {"Não tem uma conta? cadastre-se!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Route path='/cadastrar-usuario' exact={true} component={CadastroCliente} />
    </Container>
  );
}