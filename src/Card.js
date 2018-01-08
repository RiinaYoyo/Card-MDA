import React, { Component } from 'react';

class Card extends Component {
    state={
        display : "none",
    }
    showDesc = () =>{
        this.setState({
            display : "block",
        })
    }
    hideDesc = () =>{
        this.setState({
            display : "none"
        })
    }
  render() {



    return (
      <div className="Card">
          <div>
                <img className="imgProduit" src={this.props.src} onMouseOver={this.showDesc} onMouseLeave={this.hideDesc} />
          </div>
          <div> 
                <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                <p className="descriProduit" style={this.state}>{this.props.descriProduit}</p>
          </div>
      </div>
    );
  }
}

export default Card;
