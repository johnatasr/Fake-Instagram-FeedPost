import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import titleImg from '../assets/icon.png'
import instafake from '../assets/title_sm.png'
import send from '../assets/send.png'


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
      error: false,
      msgError: ""
    }

    this.login = this.login.bind(this);
  }

  login() {
    this.props.navigation.navigate('Post', { 
      user: this.state.user, 
      pass: this.state.pass
    })


  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.img} >
          <Image source={instafake}/>
        </View>
        <View style={styles.form} >          
          <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.formView}>
            <TextInput style={styles.input}
                placeholder="Seu usuário ...."
                ref={input => this.inputUser = input}
                onChangeText={user => this.setState({user: user })}/>

            <TextInput style={styles.input}
                placeholder="Digite sua senha ..."
                ref={input => this.inputComentario = input}
                onChangeText={pass => this.setState({pass: pass})}/>

            <Button
              onPress={login}
              title="Entrar"
              color="#841584"
              accessibilityLabel="Esqueceu sua conta ?"
            />  
          </View>     
      </View> 
    </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  },

  img:{
    alignItems: 'center',
    marginTop: 100
  },

  titleView: {
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    alignItems: 'center'
  },
  // msgError:{

  //   fontSize: 20,
  //   flex: 1
  // }

  form: {
    padding: 10 
  },

  formView:{
    flex: 1,
    marginLeft: 50,
    marginRight: 50
  },

  input: {
    height: 50,
    borderColor: '#45432a',
    borderBottomColor: 'green',
  },

});


