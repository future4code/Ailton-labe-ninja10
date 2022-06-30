import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
width:300px;
height:170px;
background-color:#d3d3d3;
border:1px solid black;
margin-top:6vh;
font-size: 16px;
text-align: left;
padding-left:6px ;
*{
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
}
font-family: 'Times New Roman', Times, serif;
border-radius: 10px;
`

const CardItem = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
`

export default class Card extends React.Component {
    state={
        infoCard:[]
    }

    componentDidMount(){
        this.pegarCard();
    }

    pegarCard = () =>{
        axios.get("https://labeninjas.herokuapp.com/jobs",
        {headers:{Authorization:"e2190c39-7930-4db4-870b-bed0e5e4b88e"}})
        .then((res) => this.setState({infoCard:res.data.jobs})
        )
        .catch((err) => console.log(err.response))
    }
  render() {
    const listaDeCard = this.state.infoCard.map((job) => {
        return<CardStyled key={job.id}>
            <h2><b>{job.title}</b></h2>
            <p><b>Preço: </b> R${job.price}</p>
            <p><b>Prazo: </b>{job.dueDate}</p>
            <button>Ver Detalhes</button>
            <button>Adicionar ao carrinho</button>
        </CardStyled>
    })
    return (
      <CardItem>
       {listaDeCard}
      </CardItem>
    )
  }
}
