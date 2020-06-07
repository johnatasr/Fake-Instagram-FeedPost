import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Post from '../Components/Post';
import Header from '../Components/Header'

import Api from '../Services/Api'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      error: false,
      msgError: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {

   await Api.get('posts',{
     headers: {'Content-type' : 'application/json'}
      }).then( response => {
            const posts = response.data.post;
            console.log(posts)
            this.setState({
                posts : posts,
            });
        }).catch( error => {
          this.setState({
            error: true,
            msgError: " Ops ! Algo não aconteceu como esperado ... "
          })
        }) 
  }

  render() {
    return (
      <View>
          <Header />
          { this.state.error 
            ? <Text style={styles.msgError} >{this.state.msgError}</Text>
            : <FlatList style={styles.container}
                keyExtractor={item => item.id}
                data={this.state.posts}
                renderItem={ ({item}) =>
                  <Post post={item}/>
                }
              />
          } 
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
});

