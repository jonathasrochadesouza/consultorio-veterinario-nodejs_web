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
import './index.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

export default function ListaCliente() {
  const classes = useStyles();
  const [clientes, setClientes] = useState([]);

  async function handleDeleteCliente(idcliente) {
    try {
      await api.delete(`cliente/${idcliente}`, {});
      setClientes(clientes.filter(cliente => cliente.idcliente !== idcliente));
    } catch (error) {
      alert('Erro ao deletar cliente');
    }
  }

  useEffect(() => {
    api.get('clientes', {}).then(response => {
      setClientes(response.data);
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
              <StyledTableCell >CódigoCliente</StyledTableCell >
              <StyledTableCell align="right">NOME</StyledTableCell >
              <StyledTableCell align="right">EMAIL</StyledTableCell >
              <StyledTableCell align="right">TELEFONE</StyledTableCell >
              <StyledTableCell align="center">Excluir</StyledTableCell >
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map(cliente => (
              <StyledTableRow key={cliente.idcliente}>
                <StyledTableCell component="th" scope="row">
                  {cliente.idcliente}
                </StyledTableCell>
                <StyledTableCell align="right">{cliente.nome}</StyledTableCell >
                <StyledTableCell align="right">{cliente.email}</StyledTableCell >
                <StyledTableCell align="right">{cliente.telefone}</StyledTableCell >
                <StyledTableCell align="center">
                  <Button variant="contained" color="secondary" type="button" onClick={() => handleDeleteCliente(cliente.idcliente)}>Deletar</Button></StyledTableCell >
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
