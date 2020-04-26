import React from 'react';


class CardProdutos extends React.Component {
  constructor(props) {
    super(props)


  }

  onClickAdicionar = () => {
    this.props.adicionarAoCarrinho (this.props.infoProduto.nomeDoProduto, this.props.infoProduto.precoDoProduto)
  }

  render() {
    return  (
        <div>
          <img src={this.props.infoProduto.imagem} alt={"imagem"}/>
          <p>{this.props.infoProduto.nomeDoProduto}</p>
          <p>{this.props.infoProduto.precoDoProduto}</p>
          <button onClick={this.onClickAdicionar} >adicionar ao carrinho</button>
        </div>
    )
  }
}

export default CardProdutos;