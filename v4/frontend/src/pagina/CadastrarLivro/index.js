import React, {useState} from 'react';
import api from '../services/api';

function CadastroLivro() {

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
            console.log(response.data);
            alert("o id do livro é " + codigo);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar livro " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Código do livro"
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)}/> 

                    <input 
                        placeholder="Título do livro"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}/> 

                    <input 
                        placeholder="Isbn"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}/> 

                    <input 
                        placeholder="quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}/> 

                    <input 
                        placeholder="assunto"
                        value={codigoassunto}
                        onChange={e => setAssunto(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar Livro</button>
                </form>
    

            </div>
        </div>

    );
}

export default CadastroLivro;