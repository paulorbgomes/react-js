import React from "react";
import "./style.css";

function Topo() {
  return (
    <header>
      <div>
        <img
          src="assets/logo.png"
          alt="imagem de um óculos à direita e o nome da ótica à esquerda"
        />
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}

export default Topo;
