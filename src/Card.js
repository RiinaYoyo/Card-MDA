import React, { Component } from 'react';

class Card extends Component {
    state={
        height: 70,
    }
    showDesc = () =>{
        this.setState({
            height: 180,
        },)
    }
    hideDesc = () =>{
        this.setState({
            height : 70,
        })
    }
  render() {



    return (
      <div className="Card" onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
          <div className="div-Card-Image">
                <img className="imgProduit" src={this.props.src}/>
          </div>
          <div className="descrip-produit-card" style={{height :this.state.height}}> 
                <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                <p className="descriProduit" >{this.props.descriProduit}</p>
          </div>
      </div>
    );
  }
}

export default Card;
