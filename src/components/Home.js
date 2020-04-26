import React from 'react';
import CardProdutos  from './CardProdutos';



class Home extends React.Component {
constructor(props){
  super(props)
}
  render () {
    const listaFiltradaValorMinimo = this.props.listaDeProdutos.filter((produto) =>{
       if(produto.precoDoProduto >= this.props.filtroValorMinimo){
        return true
      }else {
        return false
      }
    })

    const listaFiltradaValorMaximo = this.props.listaDeProdutos.filter((produto) =>{
      if(produto.precoDoProduto <= this.props.filtroValorMaximo){
       return true
     }else {
       return false
     }
   })

   const listaFiltradaBuscaProduto = this.props.listaDeProdutos.filter((produto) =>{
    if(produto.nomeDoProduto === this.props.filtroBuscarProduto ){
     return true
   }else {
     return false
   }
  })

  // onClickAdicionar = () => {
  //   this.props.adicionarAoCarrinho()
  // }
    
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