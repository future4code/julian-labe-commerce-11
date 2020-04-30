import React from 'react';
import CardProdutos  from './CardProdutos';
import styled from "styled-components"

const DivPai = styled.div`
  padding: 0px 20px 0px 20px;
  width: 100%;
`

const DivCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Select = styled.select`
  height: 20px;
`

const P = styled.p`
  font-size: 18px;
`

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
      <DivPai>
        
        <Header>
          <P>Quantidade de Produtos:</P> 
          <Select>
            <option>Preço: Crescente</option>
            <option>Preço: Decrescente</option>
          </Select>
        </Header>

        <DivCardContainer>
          {listaDeComponentes}
        </DivCardContainer>
      </DivPai>
    )

}

}
export default Home;