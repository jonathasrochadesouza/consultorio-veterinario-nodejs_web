import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import '../sobre/sobre.css';


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

export default function Faq() {

    async function handleCadastro(e) {
        e.preventDefault();

    }
    const classes = useStyles();

    return (
        <div id="container_cliente">


            <div id="header_cliente">
                <div id="header_cliente_link">
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
            </div>

            <div id="sobre_container">
                <h1>Pricipais dúvidas</h1>
                <div id="sobre">
                    <h3>Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum?</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum.</p>

                    <h3>Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum?</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum.</p>

                    <h3>Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum?</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum.</p>

                    <h3>Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum?</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum culpa natus alias nam aut iure quibusdam, nihil tenetur dolorum.</p>
                </div>

            </div>
        </div>
    );
}
