import React, { Component } from 'react';
import Data from './Services/data.json';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Post from './Components/Post';

export default class InstaluraMobile extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const data = Data ;
    this.setState({fotos: data});
  }

  render() {
    return (
      <View>
        <FlatList style={styles.container}
            keyExtractor={item => item.id}
            data={this.state.fotos.data}
            renderItem={ ({item}) =>
              <Post foto={item}/>
            }
        />
         <View>
        <View>
          <Text>@Joaoamass</Text>
        </View>
        

        <View >
          <TouchableOpacity >
            <Text>Like</Text>
          </TouchableOpacity>

      
          <View>
            <Text>Joao</Text>
            <Text>Texo Comentario</Text>
          </View>
         

          <View >
            <TextInput 
                placeholder="Adicione um comentário..."
                />

            <TouchableOpacity>
             <Text>Imgaem Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>




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