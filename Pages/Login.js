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

import GradientButton from 'react-native-gradient-buttons'

import titleImg from '../assets/icon.png'
import instafake from '../assets/title_sm.png'

import { scaleVertical } from '../Utils/Scale'

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

    const user = this.state.user;
    const password = this.state.pass;

    if( user == '' || password == ''){

      this.setState({error: true})

      if ( user == '') {
        this.setState({msgError: 'Usuário deve ser fornecido'})
      }
      if ( password == ''){
        this.setState({msgError: 'Senha deve ser fornecida'})
      }
    } else {
      if ( password.length < 8 ) {
        this.setState({msgError: 'Sua senha deve conter mais de 8 dígitos', error:true})
      } else {
        this.props.navigation.navigate(
          'Post',{ 
            user: this.state.user, 
            pass: this.state.pass
          })
        this.user.clear()
        this.pass.clear()
      }     
    }
  }


  render() {
    return (

      <View style={styles.container}>
        { this.state.error
            ? <View style={styles.msgError} >
                <Text style={styles.msgErrorText}>{this.state.msgError}</Text>
              </View>
            : <View style={styles.topWithoutError}></View>
        } 
        
        <View style={styles.img} >
          <Image source={titleImg} />
          <Image source={instafake}/>
        </View>
        <View style={styles.form} >          
          <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.formView}>
            <Text>Usuário</Text>
            <TextInput style={styles.input}
                textContentType="username"
                value={this.state.user}
                ref={input => this.user = input}
                placeholder="Entre com seu login"
                onChangeText={user => this.setState({user: user })}/>
            <Text>Senha</Text>
            <TextInput style={styles.input}
                ref={input => this.pass = input}
                onChangeText={pass => this.setState({pass: pass})}
                placeholder="Sua senha"
                secureTextEntry={true}    
            />
          

            <GradientButton
              style={{ marginVertical: scaleVertical(6), }}
              text="Entrar"
              textStyle={{ fontSize: 20 }}
              gradientBegin="#e1b961"
              gradientEnd="#be2199"
              gradientDirection="diagonal"
              height={60}
              width={280}
              radius={50}
              impact
              impactStyle='Light'
              onPressAction={this.login}
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
    marginTop: 20
  },

  titleView: {
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    alignItems: 'center'
  },

  topWithoutError: {
    marginTop: 20,
    padding: 25,
  },

  msgError:{
    alignItems: "center",
    marginTop: 20,
    padding: 15,
    backgroundColor: '#3a45bf',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 60
  },

  msgErrorText:{
      color: '#fff',
      fontSize: 15,
  },

  form: {
    padding: 10 
  },

  formView:{
    marginLeft: 50,
    marginRight: 50,
    marginTop:10
  },

  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 50,
    marginVertical: scaleVertical(7),
    fontWeight: "bold",
    height: 40,
    padding: 10,
  },

  // buttonLogin: {
  //   marginTop: 70,
  //   padding: 20,
  //   paddingBottom: 50,
  //   borderRadius: 6
  // }

});



