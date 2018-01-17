import React, { Component } from 'react';

class CardMini extends Component {

  render() {

    return (
      <div className="Card" onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
          <div className="div-Card-Image">
                <img className="imgProduit" src={this.props.src}/>
          </div>
          <div className="descrip-produit-card"> 
                <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                <p className="descriProduit" >{this.props.descriProduit}</p>
          </div>
      </div>
    );
  }
}

export default CardMini;
