import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor() {
        super();
        this.titulo = "";    
    }

    handleMudancaTitulo(evento) {
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }

    render() {
        return (
            <form className="form-cadastro">
                <input 
                    type="text" 
                    placeholder="Título"
                    className="form-cadastro__input"
                    onChange={this.handleMudancaTitulo.bind(this)}>
                </input>
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro__input">
                </textarea>
                <button className="form-cadastro_input form-cadastro__submit">
                    CRIAR NOTA
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
