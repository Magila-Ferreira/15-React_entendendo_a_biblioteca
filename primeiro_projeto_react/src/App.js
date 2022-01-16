import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: []
        };
    }

    criarNota(titulo, texto) {
        const novaNota = {titulo, texto};
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas: novoArrayNotas
        }
        this.setState(novoEstado)
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaDeNotas notas={this.state.notas}/>
            </section>
        );
    }
}

export default App;

// ***** RODAR OS COMANDOS GIT's dentro da pasta_terminal:
// Z:\DS\15-React_entendendo_a_biblioteca

// ***** RODAR O COMANDO "NPM SATART" dentro da pasta_terminal:
// Z:\15-React_entendendo_a_biblioteca\primeiro_projeto_react
