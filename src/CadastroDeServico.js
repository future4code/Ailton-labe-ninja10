import React from 'react';
import styled from 'styled-components';

export default class CadastroDeServico extends React.Component {
  render() {
    return (
      <div class="containerSV">
        <h1>Cadastre o seu serviço</h1>
        <input placeholder='Titulo'></input>
        <input placeholder='Descrição'></input>
        <input type="number" placeholder="Preço"/>
        <select class="select" multiple>
            <option>Cartão de crédito</option>
            <option>Cartão de crédito</option>
            <option>Boleto</option>
            <option>Pix</option>
        </select>
        <input/>
        <button>Cadastrar Serviço</button>
       </div>
    );
  }
}

