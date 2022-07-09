import "./App.css";
import React from 'react';

import Primeiro from './Components/basicos/Primeiro.jsx';
import ComParametro from './Components/basicos/ComParametro';
import Fragmento from './Components/basicos/Fragmento';
import Aleatorio from './Components/basicos/Aleatorio';
import Card from './Components/layout/Card';



export default (props) => {
    return (
        <div className="App">
            <h1 className="titulo">Fundamentos React(Arrow)</h1>

            <div className="Cards">
                

                <Card titulo="#04-Desafio Aleatorio">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03-fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#02-Com Parametro">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="João Carlos"
                        nota={9.3} />
                </Card>

                <Card titulo="#01-Primeiro">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>
    )
}