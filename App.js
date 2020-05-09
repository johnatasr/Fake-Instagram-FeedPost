import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList
} from 'react-native';
import Post from './components/Post';

export default class InstaluraMobile extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    const listaFotos = {
      


    }
  }

  render() {
    return (
      <FlatList style={styles.container}
          keyExtractor={item => item.id}
          data={this.state.fotos}
          renderItem={ ({item}) =>
            <Post foto={item}/>
          }
      />
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