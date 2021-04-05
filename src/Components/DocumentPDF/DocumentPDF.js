import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
//Document: es el contenedor del todo el documento
//Page: es el contenedor de una pagina completa
//View: es el contenedor de secciones del documento
//Text,Image: son elementos dentro de un View
//StyleSheet: es el editable para los estilos de los componentes


export default class DocumentPDF extends Component {
    render() {
        //Aqui se crea el estilo de los componentes en CSS
        //Pero esta restringido a la documentacion:
        //https://react-pdf.org/styling
        const styles = StyleSheet.create({
            page: {
              flexDirection: 'column',
              backgroundColor: '#FFFFFF'
            },
            header: {
              textAlign:'center',
              margin: 10,
              padding: 10,
              fontSize: 24,
            },
            section: {
                textAlign:'left',
                margin: 10,
                padding: 10,
                fontSize: 16,
              },
              image:{   
                alignSelf: 'center',
                height: 'auto',
                width: '200px'
              },
              sectionCenter:{
                alignItems: 'center',
                margin: 10,
                padding: 10,
              }
          });

          //Aqui se crea el documento, se envuelven los componentes y 
          //se les da el estilo que definimos anteriormente
          //Doc: https://react-pdf.org/components
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <Text>{this.props.pokemonName}</Text>
                    </View>
                    <View style={styles.sectionCenter}>
                        <Image src={{uri:'https://pokeres.bastionbot.org/images/pokemon/'+this.props.pokemonId+'.png' }} style={styles.image}/>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Pokemon  #'+this.props.pokemonId+'.'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Experiencia Base: '+this.props.pokemonXp+' xp.'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Altura: '+this.props.pokemonHeight+' decimetros.'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Peso: '+this.props.pokemonWidth+' hectogramos.'}</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}
