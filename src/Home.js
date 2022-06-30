import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const ContainerHome = styled.div`
  display: flex;
  display: block;
  margin-top: 13%;
  align-items: center;
  text-align: center;
  font-family:-apple-system;
  `

export default class Home extends React.Component {
  render() {
    return (
      <div>  
      <Header/>
      <ContainerHome>
        <h1>LabeNinjas</h1>
        <p><b>O talento certo no momento certo!</b></p>
        <button onClick={this.props.goQueroSerUmNija}>Quero ser um Ninja</button>
        <button onClick={this.props.goContratarServico}>Contratar um Ninja</button>
      </ContainerHome>
      </div> 
    )
  }
}
