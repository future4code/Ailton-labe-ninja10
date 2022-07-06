import './App.css';
import Home from './Home';
import React from 'react';
import ContratarServicoParte1 from './ContratarServicoParte1';


class App extends React.Component {
  state ={
    telaAtual:"Contratar"
  }

  goHome = () => {
    this.setState({
      telaAtual:"Home"
    
    })
  }

  goContratarServico = () => {
    this.setState({
      telaAtual:"Contratar"
 })
  }

  goQueroserUmNinja = () => {
    this.setState({
      telaAtual:"Cadastro"
 })
  }

  goCarrinho = () => {
    this.setState({
      telaAtual:"Carrinho"
 })
  }

  escolherTela = ()=> {
    switch (this.state.telaAtual){
      case "Home":
        return<Home goHome={this.goHome} /> 
      case "Contratar":
        return<ContratarServicoParte1 goContratarServico={this.goContratarServico}/>
      // case "Quero ser um ninja":
      //   return<CadastroDeServico goQueroserUmNinja={this.goQueroserUmNinja}/>
      // case "Carrinho":
      //   return<Carrinho/>

    }
  }
  render() {
    return (
      <div>
      {this.escolherTela()}
      </div>
    )
  }
}

export default App;