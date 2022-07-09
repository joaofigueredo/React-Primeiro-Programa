import React from 'react';
export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'aprovado' : 'Reprovado';
    return( 
    <div>
        <h2>{ props.titulo }</h2>
        <h3><strong>
            { props.aluno }
        </strong> tem nota <strong>{ props.nota}</strong></h3>
        aluno esta {status}
    </div>
    )
}