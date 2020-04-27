import React from 'react';
import styled from "styled-components"

const CardContainer = styled.div`
  width: 183px;
  height: 310px;
  border: 1px dashed orange;
  text-align: start;
`
const Button = styled.button`
  background-color: black;
  color: white;
  width: 95%;
  height: 35px;
  margin: 5px;
  border:0;
`

class CardProdutos extends React.Component {
  constructor(props) {
    super(props)


  }

  onClickAdicionar = () => {
    this.props.adicionarAoCarrinho (this.props.infoProduto.nomeDoProduto, this.props.infoProduto.precoDoProduto)
  }

  render() {
    return  (
        <CardContainer>
          <img src={this.props.infoProduto.imagem} alt={"imagem"}/>
          <p>{this.props.infoProduto.nomeDoProduto}</p>
          <p>{this.props.infoProduto.precoDoProduto}</p>
          <Button onClick={this.onClickAdicionar} >adicionar ao carrinho</Button>
        </CardContainer>
    )
  }
}

export default CardProdutos;