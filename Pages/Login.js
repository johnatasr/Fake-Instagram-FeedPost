import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import titleImg from '../assets/icon(2).png'


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: {
          login: '',
          pass: ''
      },
      error: false,
      msgError: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.form} >
                <Image source={titleImg}/>
                <TextInput style={styles.input}
                    placeholder="Seu usuário ...."
                    ref={input => this.inputUser = input}
                    onChangeText={texto => this.setState({valorComentario: texto})}/>

                <TextInput style={styles.input}
                    placeholder="Digite sua senha ..."
                    ref={input => this.inputComentario = input}
                    onChangeText={texto => this.setState({valorComentario: texto})}/>

                <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                    <Image style={styles.icone}
                        source={send} />
                </TouchableOpacity>

          </View>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  // msgError:{
  //   fontSize: 20,
  //   flex: 1
  // }

  form: {
    padding: 10 
  },

  input: {
    flex: 1,
    height: 40,
  },

});
