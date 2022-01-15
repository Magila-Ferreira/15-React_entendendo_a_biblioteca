import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>CRIAR NOTA</button>
      </form>
    );
  }
}

export default FormularioCadastro;
