
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
                Authorization: 'Bearer live_1f19ded4c55c932575757a60836d8c'

            }
        };

        fetch('https://api.api-futebol.com.br/v1/campeonatos', options)
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
                        <li><Link to='/artilharia'>Artilharia</Link></li>
                        <li className='select'><Link to='/campeonatos'>Campeonatos</Link></li>
                    </ul>
                </nav>

                <table>

                    {tabela.map((i) => <tr>

                    </tr>)}


                    <tr className='colunas'>
                        <th>Campeonato</th>
                        <th>Nome</th>
                    </tr>

                    {tabela.map((i) => <tr>
                        <td data-toggle="tooltip" style={{ width: "2%" }}><img src={i.logo} style={{ width: "100%" }} /></td>
                        <td>{i.nome}</td>
                    </tr>)}

                </table>

            </header>
        </div >



    );

}

export default Artilharia;
