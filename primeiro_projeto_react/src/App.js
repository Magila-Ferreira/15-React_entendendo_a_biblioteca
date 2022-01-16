import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;

// ***** RODAR OS COMANDOS GIT's dentro da pasta_terminal: 
// Z:\DS\15-React_entendendo_a_biblioteca

// ***** RODAR O COMANDO "NPM SATART" dentro da pasta_terminal:  
// Z:\15-React_entendendo_a_biblioteca\primeiro_projeto_react
