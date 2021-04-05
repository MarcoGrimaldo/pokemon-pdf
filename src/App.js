// Paquetes:
// npm i @react-pdf/renderer
// https://www.npmjs.com/package/@react-pdf/renderer
// https://react-pdf.org/


import './App.css';
import InputPoke from './Components/InputPoke/InputPoke';
import React, { Component } from 'react';
import PokemonComp from './Components/PokemonComp/PokemonComp';
//Componente a renderizar
import DocumentPDF from './Components/DocumentPDF/DocumentPDF';
import { pdf } from '@react-pdf/renderer';

// Funciones que renderizan el archivo pdf
//===================================================
const saveBlob = (blob, filename) => {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const savePdf = async (document, filename) => {
  saveBlob(await pdf(document).toBlob(), filename);
};
//====================================================

class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemonJSON: null,
      pokemonInput: ''
    }
  }

  // Llamada a la API de Pokemon
  onClickSend = (event) => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokemonInput)
      .then(response => response.json())
      .then(pokemon =>this.setState({pokemonJSON: pokemon}))
      .catch((error) => {
        console.log(error)
      });
      //console.log('Click!');
      //console.log(this.state.pokemonJSON);
  }

  //Guarda cambios en el input
  onHandleChange = (event) => {
    this.setState({pokemonInput: event.target.value}); 
    //console.log(event.target.value);
  }

  // Trigger del boton que genera el pdf
  onClickGeneratePDF = (event) =>{
    const {pokemonJSON} = this.state;

    //Llamada a la funcion savePDF que recibe el componente y 
    //un string como nombre del PDF
    
    //Ver DocumentPDF.js
    savePdf(<DocumentPDF
            pokemonName={pokemonJSON.name} 
            pokemonId={pokemonJSON.id}
            pokemonXp={pokemonJSON.base_experience}
            pokemonHeight={pokemonJSON.height}
            pokemonWidth={pokemonJSON.weight}
            />, 
          pokemonJSON.name+".pdf")
  } 

  //Componentes mostrados en la web
  render(){
    const {pokemonJSON} = this.state;

    if(this.state.pokemonJSON != null)
    {
      return (
        <div>
          <InputPoke clickSend={this.onClickSend} handleChange={this.onHandleChange}/>
          <PokemonComp 
            pokemonName={pokemonJSON.name} 
            pokemonSprite={pokemonJSON.sprites.front_default}
            pokemonId={pokemonJSON.id}
            pokemonXp={pokemonJSON.base_experience}
            pokemonHeight={pokemonJSON.height}
            pokemonWidth={pokemonJSON.weight}
            clickGeneratePDF={this.onClickGeneratePDF}
          />
        </div>
        
      );
    }
    else{
      return (
        <div>
          <InputPoke clickSend={this.onClickSend} handleChange={this.onHandleChange}/>
        </div>
        
      );
    }
    
  }
}

export default App;
