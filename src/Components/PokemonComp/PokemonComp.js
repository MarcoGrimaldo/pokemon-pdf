import React, { Component } from 'react';

export default class PokemonComp extends Component {
    render() {
        return (
            <div className="container">
                <div className="center">
                    <h1>{this.props.pokemonName}</h1>
                    <img src={'https://pokeres.bastionbot.org/images/pokemon/'+this.props.pokemonId+'.png'} alt="pokemonSprite" height="auto" width="300px"/>
                </div>
                <h4>{'Pokemon  #'+this.props.pokemonId+'.'}</h4>
                <h4>{'Experiencia Base: '+this.props.pokemonXp+' xp.'}</h4>
                <h4>{'Altura: '+this.props.pokemonHeight+' decimetros.'}</h4>
                <h4>{'Peso: '+this.props.pokemonWidth+' hectogramos.'}</h4>
                <br></br>
                <div className="center">
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.props.clickGeneratePDF}>{'Generar PDF'}
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <br></br>
            </div>
        )
    }
}
