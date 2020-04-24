import React from 'react';


class CardProdutos extends React.Component {
  render() {
    return  (
        <div>
          <img src={this.props.infoProduto.imagem} alt={"imagem"}/>
          <p>{this.props.infoProduto.nomeDoProduto}</p>
          <p>{this.props.infoProduto.precoDoProduto}</p>
          <button>adicionar ao carrinho</button>
        </div>
    )
  }
}

export default CardProdutos;