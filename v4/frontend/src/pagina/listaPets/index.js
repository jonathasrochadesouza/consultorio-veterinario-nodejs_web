import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const image = "localhost:3000";
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaPets() {
  const classes = useStyles();
  const [pets, setPets] = useState([]);

  async function handleDeletePet(idanimal) {
    try {
      await api.delete(`pet/${idanimal}`, {});
      setPets(pets.filter(pet => pet.idanimal !== idanimal));
    } catch (error) {
      alert('Erro ao deletar cliente');
    }
  }

  useEffect(() => {
    api.get('pets', {}).then(response => {
      setPets(response.data);
    });
  }, []);

  return (
    <div id="lista_cliente">
      <div id="header_listacliente_link">
        <div id="link_cliente_lista">
          <a href="home">HOME</a>
        </div>
        <div id="link_cliente_lista">
          <a href="cadastrar-pet">CADASTRAR PET</a>
        </div>
        <div id="link_cliente_lista">
          <a href="cadastrar-cliente">Cadastrar Cliente</a>
        </div>
        <div id="link_cliente_lista">
          <a href="login">LOGIN</a>
        </div>
        <div id="link_cliente_lista">
          <a href="faq">FAQ</a>
        </div>
      </div>

      <TableContainer component={Paper} id="tabela">
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell >Imagem</StyledTableCell >
              <StyledTableCell align="right">Código Cliente</StyledTableCell >
              <StyledTableCell align="right">Código Animal</StyledTableCell >
              <StyledTableCell align="right">Nome</StyledTableCell >
              <StyledTableCell align="right">Raça</StyledTableCell >
              <StyledTableCell align="center">Idade</StyledTableCell >
              <StyledTableCell align="center">Peso</StyledTableCell >
              <StyledTableCell align="center">Altura</StyledTableCell >
              <StyledTableCell align="center">Sexo</StyledTableCell >
              <StyledTableCell align="center">Imagem</StyledTableCell >
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map(pet => (
                
              <StyledTableRow key={pet.idanimal}>
                <StyledTableCell component="th" scope="row">
                <img src={"http://localhost:3111/" + pet.imagem} alt="Minha Figura" width="100px"></img>
                </StyledTableCell>
                <StyledTableCell align="right"> {pet.idanimal}</StyledTableCell >
                <StyledTableCell align="right"> {pet.idcliente}</StyledTableCell >
                <StyledTableCell align="right">{pet.nome}</StyledTableCell >
                <StyledTableCell align="right">{pet.raca}</StyledTableCell >
                <StyledTableCell align="right">{pet.idade}</StyledTableCell >
                <StyledTableCell align="right">{pet.peso} KG</StyledTableCell >
                <StyledTableCell align="right">{pet.altura} M</StyledTableCell >
                <StyledTableCell align="right">{pet.sexo}</StyledTableCell >
                <StyledTableCell align="center">
                  <Button variant="contained" color="secondary" type="button" onClick={() => handleDeletePet(pet.idanimal)}>Deletar</Button></StyledTableCell >
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
