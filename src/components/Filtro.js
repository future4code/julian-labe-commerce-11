import React from 'react';
import styled from "styled-components"

const DivContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  width: 30%;
  text-align: start;
`

const Input = styled.input`
  display:block;
  width: 12vw;
`



class Filtro extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      minimoDigitado: "",
      maximoDigitado: "",
      buscarProdutoDigitado: ""
    }
  }

 
  onChangeValorMinimo= (event) => {
    this.setState({minimoDigitado: event.target.value})
  }

  onChangeValorMaximo= (event) => {
    this.setState({maximoDigitado: event.target.value})
  }
    
  onChangeBuscarProduto= (event) => {
    this.setState({buscarProdutoDigitado: event.target.value})
  }
 


  render () {
  return  <DivContainer>
    <form>
        <h2>Filtros:</h2>
        <div>
          <label>Valor Mínimo: </label>
          <Input type="number"  onChange={this.onChangeValorMaximo} value={this.state.maximoDigitado} />
        </div>

        <div>
          <label>Valor Mínimo: </label>
          <Input type="number"  onChange={this.onChangeValorMinimo} value={this.state.minimoDigitado} />
        </div>

        <div>
          <label>Valor Mínimo: </label>
          <Input type="number"  onChange={this.onChangeBuscarProduto} value={this.state.buscarProdutoDigitado} />
        </div>
      </form>
    </DivContainer>
  }
}

export default Filtro;