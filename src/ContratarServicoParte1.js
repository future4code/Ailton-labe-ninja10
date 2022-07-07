import Card from './Card'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const ContainerInput = styled.div`
display:flex;
justify-content:space-evenly;
margin-left:4px;
margin-right:4px;
margin-top:4px;
flex-wrap:wrap;
`

const InputDimensao = styled.input`
width:25%;
margin-top:10px;
display:flex;
flex-wrap: wrap;
`


export default class ContratarServicoParte1 extends React.Component {
    state={
        query:"",
        precoMin:"",
        precoMax:"",
        sorting:"title"
    }

    buscarMinimo = (event) =>{
        this.setState({ precoMin: event.target.value})
    }

    buscarMaximo = (event) =>{
        this.setState({ precoMax: event.target.value})
    }

    buscar = (event) =>{
        this.setState({ query: event.target.value})
    }

    updateSorting = (event) =>[
        this.setState({sorting: event.target.value})
    ]
  render() {
    return (
      <div>
        <Header/>
        <ContainerInput>
          <InputDimensao type="number" placeholder='Preço mínimo' value={this.state.precoMin} onChange={this.buscarMinimo}/>
          <InputDimensao type="number" placeholder='Preço máximo' value={this.state.precoMax} onChange={this.buscarMaximo}/>
          <InputDimensao placeholder='Busca por título ou descrição'value={this.state.query} onChange={this.buscar}/>
          <div>
            <label >Ordenação:</label>
            <select 
            name="sort"
            value={this.state.sorting}
            onChange={this.updateSorting}>
                <option value="title">Título</option>
                <option value="price">Preço</option>
                <option value="dueDate">Prazo</option>
            </select>
          </div>
        </ContainerInput>
        <Card/>
      </div>
    )
  }
}
