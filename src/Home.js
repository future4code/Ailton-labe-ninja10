import React from 'react'
import styled from 'styled-components'

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
      <ContainerHome>
        <h1>LabeNinjas</h1>
        <p><b>O talento certo no momento certo!</b></p>
        <button>Quero ser um Ninja</button>
        <button>Contratar um Ninja</button>
      </ContainerHome>
    )
  }
}
