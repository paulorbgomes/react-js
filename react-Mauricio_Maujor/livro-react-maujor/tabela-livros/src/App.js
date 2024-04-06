import React, {Component} from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: [
      {
        id: "978-85-7522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Maurício Samy Silva"
      },
      {
        id: "978-85-7522-677-3",
        titulo: "Node Essencial",
        autor: "Ricardo L. Lecheta"
      },
      {
        id: "978-85-7522-512-7",
        titulo: "Aprendendo Material Design",
        autor: "Kyle Mew"
      }
    ]
  };

  render() {
    return (
    <table className="tabela">
      <TabelaHead/>
      <TabelaBody livros = {this.state.livros}/>
      <TabelaFoot/>
    </table>
    );
  };
};

export default App;
