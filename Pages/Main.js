import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Post from '../Components/Post';
import Header from '../Components/Header'

import Api from '../Services/Api'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
      error: false,
      msgError: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {

    this.setState({ loading: true })

    await Api.get('posts',{
      headers: {'Content-type' : 'application/json'}
      }).then( response => {
            const posts = response.data.post;
            this.setState({
                posts : posts,
                loading: false
            });
        }).catch( error => {
          this.setState({
            loading: false,
            error: true,
            msgError: " Ops ! Algo não aconteceu como esperado ... "
          })
        }) 
  }

  render() {

    const { user } = this.props.route.params
    
    return (
      <View>
          <Header props={this.props} />
          { this.state.loading
            ? <ActivityIndicator size='large' color="#be2199" /> 
            : this.state.error
              ? <Text style={styles.msgError} >{this.state.msgError}</Text>
              : <FlatList style={styles.container}
                  keyExtractor={item => item.id}
                  data={this.state.posts}
                  renderItem={ ({item}) =>
                    <Post post={item} user={user} />
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

  msgError:{
    fontSize: 20,
    marginTop: 30
  }
});

