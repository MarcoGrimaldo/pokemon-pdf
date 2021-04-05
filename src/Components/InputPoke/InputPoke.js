import React, { Component } from 'react';
import 'materialize-css';

export default class InputPoke extends Component {
    render() {
        return (
            <div className="container">
         
                    <h1 className="center">{'Pokedex'}</h1>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" onChange={this.props.handleChange} />
                        <label htmlFor="last_name">{'Ingrese un pokemon'}</label>
                    </div>

                    <div className="center">
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.props.clickSend}>{'Buscar'}
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
    
            </div>
        )
    }
}
