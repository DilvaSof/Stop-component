import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Dimensions,
  TouchableOpacity,
  } from 'react-native';
const WIDTH = Dimensions.get('window').width   
const HEIGHT_MODAL = 250;

const StopComponent = ()=> {

  return(
    <TouchableOpacity
      disabled={true}
      style={styles.container}>
      
      <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.textTitle}>¡Alto ahí!</Text>
            <Text style={styles.textView}>Para finalizar tu postulación, responderás algunas pruebas relacionadas al puesto.</Text>
            <Text style={styles.textView}>Tendrás aproximadamente 45 segundos para responder cada pregunta. ¡Prepárate!</Text>
            <Text style={styles.textView}>¿Estás listo?</Text>
          </View>
       
      
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.touchableOpacity} >
                  <Text style={styles.textBtnLater}>Más tarde</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.touchableOpacity, styles.btnContinue]} >
                  <Text style={styles.textBtnContinue}>Continuar</Text>
                </TouchableOpacity>
            </View>  




      </View>     
    
    </TouchableOpacity >


  )
}
 
   



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      
    },
    modal: {
      height: HEIGHT_MODAL,
      width: WIDTH - 70,
      paddingTop: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    textTitle: {
      fontFamily: 'SofiaPro',
      fontSize:20, 
      color:'#1E4146',
      marginBottom: 10, 
      textAlign:'center',
    }, 
    touchableOpacity: {
      height: 50,
      width: 120,
    },
    textView: {
      fontFamily: 'SofiaPro',
      fontSize:15, 
      color:'#1E4146',
      marginBottom: 10, 
      textAlign:'center',
    }, 
    btnView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }, 
    textBtnLater: {
      fontFamily: 'SofiaPro',
      fontSize:15, 
      color:'red',
      marginBottom: 3, 
      textAlign:'center',
      padding: 10,
    },
    btnContinue: {
      backgroundColor:'#1F4349',
      borderRadius: 10,
    },
    textBtnContinue: {
      fontFamily: 'SofiaPro',
      fontSize:15, 
      color:'white',
      marginBottom: 3, 
      textAlign:'center',
      alignContent: 'center',
      padding: 10,
    },
    


})

export default StopComponent

