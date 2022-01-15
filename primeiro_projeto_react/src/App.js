import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;

// ***** RODAR OS COMANDOS GIT's dentro da pasta_terminal: Y:\DS\15-React_entendendo_a_biblioteca\primeiro_projeto_react
