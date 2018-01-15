import React, { Component } from 'react';
import Card from './Card'
import Produits from './DataProduit'

console.log(Produits);
class Cards extends Component {
  state={
    dataProduit: Produits,
  }
  render() {
    console.log(this.state.dataProduit);
    return (
       <div className="div-cards">
        {this.state.dataProduit.map((card, i)=> {
        return(<Card src={card.src} nomProduit={card.nom} descriProduit={card.descr} />)
        })}
        
           
      </div>
    );
  }
}

export default Cards;
