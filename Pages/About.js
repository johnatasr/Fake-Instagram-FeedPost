import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

import Header from '../Components/Header'

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
      error: false,
      msgError: ""
    }

  }

  render() {

    const imgUrl = "https://avatars2.githubusercontent.com/u/20056331?s=460&u=fdf93b0e7b9bb6ad08d8851e98900c23bb584061&v=4";

    return (
        <View style={styles.container}>
            <Header props={this.props} />
            <View style={styles.row1} >
                <Image source={imgUrl}/>
                <View>
                    <Text>Full-Stack Developer</Text>
                    <Text>DevOps</Text>
                    <Text>Data Science and Machine Learning Enthusiastic</Text>
                </View>
            </View>
            <View>
                <Text>Desenvolvido com o intuito de ampliar habilidades em desenvolvimento mobile, utilizando as mais modernas tecnologias</Text>
                <Text>Backend desenvolvido em Python</Text>
            </View>
            <View>
                <Icon name="linkedin-square" />
            </View>
        </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },

  row1: {
    flexDirection: 'row'
  }

});



