import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
display: flex;
background-color: gray;
justify-content:space-between;
align-items:center;
padding-left:4px;
padding-right:4px;
margin-top:0;`

export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <h1>LabeNinjas</h1>
        <div>
          <button>Home</button>
          <button>Carrinho</button>
        </div>
      </ContainerHeader>
    )
  }
}
