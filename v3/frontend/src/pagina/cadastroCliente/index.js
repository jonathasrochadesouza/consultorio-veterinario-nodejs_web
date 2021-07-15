import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import '../cadastroCliente/cliente.css';


const useStyles = makeStyles((theme) => ({

}));

export default function CadastroCliente() {

    const [idcliente, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [rua, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');


    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            telefone,
            email,
        };

        const apiEndereco = {
            idcliente,
            numero,
            rua,
            cep,
            complemento,
            bairro,
            cidade,
            estado
        };

        try {
            if (dados.nome !== "" && dados.email !== "" && dados.senha !== "" && dados.endereco !== "" && dados.telefone !== "") {
                const save = api.put('/cliente', dados);
                console.log((await save).data.idcliente);
        
                if ((await save).status == 200) {
                    api.post(`endereco${(await save).data.idcliente}`, apiEndereco);
                    alert('Salvo com sucesso');
                    setNome('');
                    setEmail('');
                    setTelefone('');
                    setEndereco('');
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

            <h1>Cadastro de cliente</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleCadastro} id="form_cliente">
                <div id="cliente_dados">
                    
                    <div id="container_dados_cliente">
                    <h4>Informe os dados Pessoais</h4>
                        <div id="nome_campo">
                            <TextField
                                className={classes.inp}
                                id="nome"
                                label="Nome"
                                defaultValue="Nome"
                                variant="outlined"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                        <div id="email_campo">
                            <TextField
                                id="email"
                                label="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                variant="outlined"
                            />
                        </div>
                        <div id="telefone_campo">
                            <TextField
                                id="telefone"
                                label="Telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                                variant="outlined"
                            />
                        </div>

                        <h4>Informe dados de Endereço</h4>

                        <div id="cep_campo">
                            <TextField
                                id="cep"
                                label="Cep"
                                defaultValue="Cliente"
                                variant="outlined"
                                value={cep}
                                onChange={e => setCep(e.target.value)}
                            />
                        </div>

                        <div id="endereco_campo">
                            <TextField
                                id="endereco"
                                label="Endereço"
                                defaultValue="Cliente"
                                variant="outlined"
                                value={rua}
                                onChange={e => setEndereco(e.target.value)}
                            />
                        </div>

                        <div id="telefone_campo">
                            <TextField
                                id="endereco"
                                label="Número"
                                defaultValue="número"
                                variant="outlined"
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                            />
                        </div>

                        <div id="complemento">
                            <TextField
                                id="complemento"
                                label="Complemento"
                                defaultValue="Cliente"
                                variant="outlined"
                                value={complemento}
                                onChange={e => setComplemento(e.target.value)}
                            />
                        </div>

                        <div id="bairro_campo">
                            <TextField
                                id="bairro"
                                label="Bairro"
                                defaultValue="BAirro"
                                variant="outlined"
                                value={bairro}
                                onChange={e => setBairro(e.target.value)}
                            />
                        </div>

                        <div id="cidade_campo">
                            <TextField
                                id="cidade"
                                label="Cidade"
                                defaultValue="Cidade"
                                variant="outlined"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                        </div>

                        <div id="estado_campo">
                            <TextField
                                id="estado"
                                label="Estado"
                                defaultValue="Estado"
                                variant="outlined"
                                value={estado}
                                onChange={e => setEstado(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <Button variant="contained" color="primary" type="submit" id="salvar_cliente">
                    Salvar
                </Button>
            </form>
        </div>
    );
}
