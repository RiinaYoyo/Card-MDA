import React, { Component } from 'react';

class Card extends Component {
    state={
        marginTop: 150,
    }
    showDesc = () =>{
        this.setState({
            marginTop: 0,
        },)
    }
    hideDesc = () =>{
        this.setState({
            marginTop : 150,
        })
    }
  render() {



    return (
      <div className="Card" onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
          <div className="div-Card-Image">
                <img className="imgProduit" src={this.props.src}  />
          </div>
          <div className="descrip-produit-card"> 
                <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                <p className="descriProduit" style={{marginTop :this.state.marginTop}}>{this.props.descriProduit}</p>
          </div>
      </div>
    );
  }
}

export default Card;
