import {useState} from 'react';
import React from 'react';
import './Teste.css';
function Teste() {
    const[count, setCount] = useState(0);

    return (
        <div>
            <button className="button" onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Você já clicou {count} vezes nesse botão</p>
        </div>

        );
}

export default Teste;