import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div id="Card">
          <div>
                <img src={this.props.src} />
          </div>
          <div> 
                <h1>Un Produit</h1>
                <p>Une Description</p>
          </div>
        
      </div>
    );
  }
}

export default Card;
