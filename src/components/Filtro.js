import React from 'react';
import './Filtro.css'



class Filtro extends React.Component {
 


  render () {
  return  <div>      
   <form className="Filter">
        <h2>Filtros:</h2>
        <p>Valor Mínimo: </p>
          <input className="input" type="number" placeholder="" onChange="" />
        <p>Valor Máximo: </p>
          <input className="input" type="number" placeholder="" onChange="" />
        <p>Buscar Produto</p>
          <input className="input" type="text" placeholder="" />
   </form>
    </div>
  }
}

export default Filtro;