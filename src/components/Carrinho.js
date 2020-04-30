import React from 'react'
import styled from "styled-components"

const DivContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  width: 30%;
  text-align: start;
`

class Carrinho extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            temProduto: false,
            quantidadeDoItem: 1,
            valorTotal: "",
        }
    }

    render () {
        let itemNaLista
        if(this.state.temProduto) {
            itemNaLista = this.state.produtos
        }
        return <DivContainer>
            <h2>Carrinho:</h2>
            {itemNaLista}
            <div>
                <p>Total:<b>{this.state.valorTotal}</b></p>
            </div>
        </DivContainer>        
    }
            
}

export default Carrinho;