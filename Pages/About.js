import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

import Header from '../Components/Header'

export default class Login extends Component {

  constructor() {
    super();
  }

  render() {

    const imgUrl = "https://avatars2.githubusercontent.com/u/20056331?s=460&u=fdf93b0e7b9bb6ad08d8851e98900c23bb584061&v=4";

    return (
        <View style={styles.container}>
            <Header props={this.props} />
            <View style={styles.row1}>
              <View style={styles.col1}>
                <Image source={{uri: imgUrl}}
                   style={styles.image} />
              </View>
              <View style={styles.col2}>
                <View>
                  <View style={styles.name}>
                    <Text style={styles.nameText}>Johnatas Rabelo</Text>
                  </View>
                  <View style={styles.specs}>
                    <Text>
                      Full-Stack Developer {"\n"}
                      DevOps {"\n"}
                      Data Science and {"\n"}
                      Machine Learning Enthusiastic
                    </Text>
                  </View>  
                </View>
              </View>    
            </View>
            <View style={styles.content} >
              <View style={styles.contentPort}>
                  <Text>Desenvolvido com o intuito de ampliar habilidades em desenvolvimento mobile, 
                    utilizando as mais modernas tecnologias Javascript.</Text>
              </View>

              <View style={styles.contentEng}>
                <Text>
                  Developed in order to expand skills in mobile development,
                    using the most modern Javascript technologies.
                </Text>
              </View>

              <View style={{marginTop: 12}}>
                <View>
                  <Text style={styles.stackHeader}>Backend: </Text>
                  <Text>
                    - Flask | Flask Cors | Flask RestFul | Unittests {"\n"}
                    - Heroku Powered {"\n"}
                    - Travis CI 
                  </Text>
                </View>

                <View style={{marginTop:10}}>
                  <Text style={styles.stackHeader}>Mobile: </Text>
                  <Text>
                    - React Native {"\n"}
                    - React Navigation 5 {"\n"}
                    - Axios | Expo  {"\n"}
                    - React Native Gradient Buttons | AntDesign Icons
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: "row", marginTop: 18, marginLeft:100}}>
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/johnatas-rabelo-690579117/')}>
                    <Icon name="linkedin-square" size={50} color="#0073b0"/>
                  </TouchableOpacity>
                </View>
                
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/johnatasr')}  >
                    <Icon name="github" size={50} color="#24292e"/>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: "row", marginTop: 15, marginLeft: 150}}>
                <Text style={{fontSize: 10}}>Python & Javascript</Text>
                <Icon name="heart" size={10} color="#ff0000"/>
              </View>

            </View>
            
        </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },

  content: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20
  },

  row1: {
    flexDirection: 'row',
    marginTop: 20
  },

  image: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    borderRadius: 100
  },

  name: {
    padding: 30,
    backgroundColor: "#3a45bf",
    marginRight: 30
  },

  nameText: {
    fontSize: 25,
    fontFamily: 'sans-serif',
    color: "#fff"
  },

  col1: {
    marginLeft: 10,
    marginRight: 10
  },

  contentEng: {
    marginTop: 10
  },

  stackHeader: {
      fontSize: 17,
      padding: 3,
      paddingLeft: 5,
      backgroundColor: "#e1b961",
      borderRadius: 5
  }

});



