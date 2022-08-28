
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Artilharia() {
    const [tabela, setTabela] = React.useState([]);

    React.useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer test_b5a17dea4033fad079929646e8b7f6'

            }
        };

        fetch('https://api.api-futebol.com.br/v1/campeonatos/2/artilharia', options)
            .then(response => response.json())
            .then(response => setTabela(response))
    }, []);

    console.log(tabela);

    return (
        <div className="App">
            <header className="App-header">
                <nav className="menu">
                    <ul>

                        <li><Link to='/'>Tabela</Link></li>
                        <li className='select'><Link to='/artilharia'>Artilharia</Link></li>
                        <li><Link to='/campeonatos'>Campeonatos</Link></li>
                    </ul>
                </nav>

                <table>

                    <tr className='colunas'>
                        <th></th>
                        <th>Club</th>
                        <th>Nome</th>
                        <th>Posição</th>
                        <th>Gols</th>
                    </tr>

                    {tabela.map((i) => <tr>

                        <td>{i.posicao}</td>
                        <td data-toggle="tooltip" title={i.time.nome_popular} style={{ width: "2%" }}><img src={i.time.escudo} style={{ width: "100%" }} /></td>
                        <td>{i.atleta.nome_popular}</td>
                        <td>{i.atleta.posicao.sigla}</td>
                        <td>{i.gols}</td>
                    </tr>)}

                </table>

            </header>
        </div >



    );

}

export default Artilharia;
