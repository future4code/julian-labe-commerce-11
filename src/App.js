import React from 'react';
import Home from"./components/Home"
import Filtro from"./components/Filtro"
import Carrinho from "./components/Carrinho" 
import styled from "styled-components"


const DivPai = styled.div`
  margin: 0;
  padding: 10px;
  width: 97vw;
  height: auto;
  text-align: center;
`

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listaDeProdutos: [
        {
        id: 1,
        imagem: "https://picsum.photos/171/171/?a=1",
        nomeDoProduto: "produto 1",
        precoDoProduto: 40.00
      },
      {
        id: 2,
        imagem: "https://picsum.photos/171/171/?a=2",
        nomeDoProduto: "produto 2",
        precoDoProduto: 50.00
      },
      {
        id: 3,
        imagem: "https://picsum.photos/171/171/?a=3",
        nomeDoProduto: "produto 3",
        precoDoProduto: 80.00
      },
      {
        id: 4,
        imagem: "https://picsum.photos/171/171/?a=4",
        nomeDoProduto: "produto 4",
        precoDoProduto: 99.00
      },
      {
        id: 5,
        imagem: "https://picsum.photos/171/171/?a=5",
        nomeDoProduto: "produto 5",
        precoDoProduto: 199.00
      },
      {
        id: 6,
        imagem: "https://picsum.photos/171/171/?a=6",
        nomeDoProduto: "produto 6",
        precoDoProduto: 210.00
      },
      {
        id: 7,
        imagem: "https://picsum.photos/171/171/?a=7",
        nomeDoProduto: "produto 7",
        precoDoProduto: 499.00
      },
      {
        id: 8,
        imagem: "https://picsum.photos/171/171/?a=8",
        nomeDoProduto: "produto 8",
        precoDoProduto: 501.00
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
  return  <DivPai>

    <DivContainer>
      <Filtro filtroValorMinimo={this.state.filtroValorMinimo} 
      filtroValorMaximo={this.state.filtroValorMaximo} 
      filtroBuscarProduto={this.state.filtroBuscarProduto}/>

      <Home listaDeProdutos={this.state.listaDeProdutos}
      filtroValorMinimo={this.state.filtroValorMinimo} 
      filtroValorMaximo={this.state.filtroValorMaximo} 
      filtroBuscarProduto={this.state.filtroBuscarProduto} />
    
      <Carrinho
      adicionarAoCarrinho={this.adicionarAoCarrinho} />
    </DivContainer>

  </DivPai>
  }
}

export default App;
