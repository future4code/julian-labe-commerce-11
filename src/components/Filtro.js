import React from 'react';
import './Filtro.css'



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
  return  <div>      
   <form className="Filter">
        <h2>Filtros:</h2>
        <p>Valor Mínimo: </p>
          <input className="input" type="number"  onChange={this.onChangeValorMinimo} value={this.state.minimoDigitado} />
        <p>Valor Máximo: </p>
          <input className="input" type="number"  onChange={this.onChangeValorMaximo} value={this.state.maximoDigitado}/>
        <p>Buscar Produto</p>
          <input className="input" type="text" onChange={this.onChangeBuscarProduto} value={this.state.buscarProdutoDigitado}/>

   </form>
    </div>
  }
}

export default Filtro;