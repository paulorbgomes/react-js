import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';

function PaginaInicial() {
  return (
    <div>
  <h1>Escolha seu caminho em JavaScript</h1>

   <div className="conteudo-opcoes">
    <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
    <Link className="opcao-back-end" to='/back-end'>Back-end</Link>
   </div>

 </div>
  );
}

export default PaginaInicial;
