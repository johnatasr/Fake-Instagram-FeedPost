import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Post from './Components/Post';

import axios from 'axios'; 

export default class InstagramFake extends Component {

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

   await axios.get('http://127.0.0.1:5001/posts')
        .then( response => {
            const posts = response.posts;
            console.log(response);
            // this.setState({
            //     pessoas : pessoas,
            //     loading: false
            // });
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
          { this.state.error 
            ? <Text>{this.state.msgError}</Text>
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
});


{/* <ScrollView>
{this.state.fotos.map( foto => {
  return (
    <View key={foto.id}>
      <Text>{foto.nome}</Text>
      <Image source={require('./assets/icon.png')} style={{ width: width, height: width }} />
    </View>
  )
} )}
</ScrollView> */}



{/* <FlatList style={styles.container}
keyExtractor={item => item.id}
data={this.state.fotos}
renderItem={ ({item}) =>
  <Post foto={item}/>
}
/> */}






// { this.state.error 
//   ? <Text>{this.state.msgError}</Text>
//   : <FlatList style={styles.container}
//       keyExtractor={item => item.id}
//       data={this.state.posts}
//       renderItem={ ({item}) =>
//         <Post post={item}/>
//       }
//     />
// } 