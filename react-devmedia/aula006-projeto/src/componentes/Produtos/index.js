import React from "react";
import "./style.css";

function Produtos() {
  return (
    <section>
      <div>
        <h2>NOSSOS PRODUTOS</h2>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>

        <div>
          <div>
            <h3>Óculos de grau</h3>
            <img src="" />
            <p>R$ 500,00</p>
          </div>

          <div>
            <h3>Óculos de grau</h3>
            <img src="" />
            <p>R$ 500,00</p>
          </div>

          <div>
            <h3>Óculos de grau</h3>
            <img src="" />
            <p>R$ 500,00</p>
          </div>

          <div>
            <h3>Óculos de grau</h3>
            <img src="" />
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}

export default Produtos;
