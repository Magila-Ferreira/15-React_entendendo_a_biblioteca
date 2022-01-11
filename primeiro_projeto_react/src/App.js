import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
function App() {
    return (
        <section>
            <form>
                <input type="text" placeholder='Título'></input>
                <textarea placeholder='Escreva sua nota...'></textarea>
                <button>Criar nota</button>
            </form>
            <ListaDeNotas/>
        </section>
    );
}

export default App;

// ***** RODAR OS COMANDOS GIT's dentro da pasta_terminal: Z:\DS\15-React_entendendo_a_biblioteca>
