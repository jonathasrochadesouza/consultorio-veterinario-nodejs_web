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


export default function RecuperarSenha() {


  const [email, setEmail] = useState('');

  async function HandleCadastro(e) {
    e.preventDefault();

    const dados = {
      email
    };

    try {
      if (email !== "") {
        const senha = api.get(`password/${email}`,dados);

        if ((await senha).status == 200) {
          alert("Senha enviada com sucesso para o e-mail:" + email);
        }
        if ((await login).status == 401) {
          alert('Usuário não cadastrado');
        }
      }
    } catch (error) {
      
    }
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Recuperar Senha
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
    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={HandleCadastro}
          >
            Enviar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="login" variant="body2">
                {"Realizar login!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Route path='/cadastrar-usuario' exact={true} component={CadastroCliente} />
    </Container>
  );
}