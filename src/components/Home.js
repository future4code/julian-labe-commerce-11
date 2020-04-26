import React from 'react';
import CardProdutos  from './CardProdutos';



class Home extends React.Component {
constructor(props){
  super(props)
}
  render () {
    const listaDeComponentes = this.props.listaDeProdutos.map((produto)=> {
      return <CardProdutos key={produto.id} infoProduto={produto}/>
    })
    return  (
      <div>
        
        <div>
          <p>Total de produtos:</p> 
          <select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </select>
        </div>
        <div>
          {listaDeComponentes}
        </div>
      </div>
    )

}

}
export default Home;