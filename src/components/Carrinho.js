import React from 'react'

class Carrinho extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            temProduto: false,
            quantidadeDoItem: 1,
            valorTotal: "",
            produtos: [{

            }

            ]
        }
    }


    funcaoAdicionaProduto = () => {
        this.setState({temProduto: true})
        
      }

    funcaoNaoTemProduto = () => {
        this.setState({temProduto: false})
        
      }


/*     recebeValorNome = () => {
        const dados = {
            nome: {this.props.infoProduto.nomeDoProduto},
        }
    } */


    render () {
        let itemNaLista
        if(this.state.temProduto) {
            itemNaLista = this.state.produtos
        }
        return <div>
            <h2>Carrinho:</h2>
            {itemNaLista}
            <div>
                <p>Total:<b>{this.state.valorTotal}</b></p>
            </div>
        </div>        
    }
            
}

export default Carrinho;