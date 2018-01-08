import React, { Component } from 'react';

class Card extends Component {
  render() {



    return (
      <div className="Card">
          <div>
                <img className="imgProduit" src={this.props.src} />
          </div>
          <div> 
                <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                <p className="descriProduit">{this.props.descriProduit}</p>
          </div>
      </div>
    );
  }
}

export default Card;
