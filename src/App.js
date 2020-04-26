import React from 'react';
import Home from"./components/Home"
import Filtro from"./components/Filtro"
import Carrinho from "./components/Carrinho" 


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listaDeProdutos: [
        {
        id: 1,
        imagem: "https://picsum.photos/300/200/?a=1",
        nomeDoProduto: "produto 1",
        precoDoProduto: 100.00
      },
      {
        id: 2,
        imagem: "https://picsum.photos/300/200/?a=2",
        nomeDoProduto: "produto 2",
        precoDoProduto: 120.00
      },
      {
        id: 3,
        imagem: "https://picsum.photos/300/200/?a=3",
        nomeDoProduto: "produto 3",
        precoDoProduto: 130.00
      },
      {
        id: 4,
        imagem: "https://picsum.photos/300/200/?a=4",
        nomeDoProduto: "produto 4",
        precoDoProduto: 140.00
      }
      ],
      filtroValorMinimo: "",
      filtroValorMaximo: "",
      filtroBuscarProduto: ""

    }
  }

  adicionarAoCarrinho = (item, valor) => {
    console.log('Item:', item, 'Valor:', valor  )
  }

  render () {
  return  <div className="App">
    <h1>Labenu E-commerce</h1>
    <Filtro filtroValorMinimo={this.state.filtroValorMinimo} 
    filtroValorMaximo={this.state.filtroValorMaximo} 
    filtroBuscarProduto={this.state.filtroBuscarProduto}/>

    <Home listaDeProdutos={this.state.listaDeProdutos}
    filtroValorMinimo={this.state.filtroValorMinimo} 
    filtroValorMaximo={this.state.filtroValorMaximo} 
    filtroBuscarProduto={this.state.filtroBuscarProduto} />
    
    <Carrinho
      adicionarAoCarrinho={this.adicionarAoCarrinho} 
    />
  </div>
  }
}

export default App;
