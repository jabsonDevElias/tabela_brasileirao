
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [tabela, setTabela] = React.useState([]);



  // chave teste: test_b5a17dea4033fad079929646e8b7f6

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer live_1f19ded4c55c932575757a60836d8c'

      }
    };



    fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', options)
      .then(response => response.json())
      .then(response => setTabela(response))
  }, []);

  function classificacao(posicao) {
    if (posicao <= 4) {
      return { borderLeft: '2px solid green' };
    }

    if (posicao >= 17) {
      return { borderLeft: '2px solid red' };
    }
  }

  console.log(tabela);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <ul>
            <li className='select'><Link to='/'>Tabela</Link></li>
            <li><Link to='/artilharia'>Artilharia</Link></li>
            <li><a href='/campeonatos'>Campeonatos</a></li>
          </ul>
        </nav>
        <table>

          <tr className='colunas'>
            <th></th>
            <th>Club</th>
            <th>Pts</th>
            <th>Pj</th>
            <th>V</th>
            <th>E</th>
            <th>DER</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>Últimas cinco</th>
          </tr>

          {tabela.map((i) => <tr>
            {console.log(classificacao(i.posicao))}
            <td style={classificacao(i.posicao)}>{i.posicao}</td>
            <td data-toggle="tooltip" title={i.time.nome_popular} style={{ width: "2%" }}><img src={i.time.escudo} style={{ width: "100%" }} /></td>
            <td>{i.pontos}</td>
            <td>{i.jogos}</td>
            <td>{i.vitorias}</td>
            <td>{i.empates}</td>
            <td>{i.derrotas}</td>
            <td>{i.gols_pro}</td>
            <td>{i.gols_contra}</td>
            <td>{i.saldo_gols}</td>
            <td><div className='ultimos_cinco'>{i.ultimos_jogos.map((partida) => {
              let classe = 'cinza';

              switch (partida) {
                case 'v':
                  classe = 'verde';
                  break;
                case 'd':
                  classe = 'vermelho';
                  break;
                default:
                  break;
              }

              return (
                <div className={`resultados ${classe}`}></div>
              );
            })}</div></td>

          </tr>)}

        </table>
      </header>
    </div >

  );

}

export default Home;
