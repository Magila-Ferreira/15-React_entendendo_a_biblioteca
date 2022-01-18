import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);

        /* Limpar campos: */
        var inputTitulo = document.querySelector("input.titulo");
        var inputTexto = document.querySelector("textarea.texto");
        inputTitulo.value = "";
        inputTexto.value = "";
        inputTitulo.focus();

        /* "eslintConfig": {
            "extends": [
                "react-app",
                "react-app/jest"
                ]
            }, */
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro__input titulo"
                    onChange={this._handleMudancaTitulo.bind(this)}
                ></input>
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro__input texto"
                    onChange={this._handleMudancaTexto.bind(this)}
                ></textarea>
                <button className="form-cadastro_input form-cadastro__submit">
                    CRIAR NOTA
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
