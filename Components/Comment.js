import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import send from '../assets/send.png'
import userImg from '../assets/user.png'

export default class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valorComentario: '',
      comemtarios: [],
    }
  }

  adicionaComentario() {
    if(this.state.valorComentario === '')
      return;

    const novaLista = [...this.state.comemtarios, {
      id: Math.floor(Math.random() * 101),  
      login: this.props.user,
      comment: this.state.valorComentario
    }];

    this.setState({comemtarios: novaLista, valorComentario: ''})
    this.inputComentario.clear()
  }

  componentDidMount() {
      this.setState({comemtarios: this.props.comentarios})
  }

  render() {
    const comentarios = this.state.comemtarios;

    return (
        <View>
            {comentarios.map( comentario =>  
                <View style={styles.comentario} key={comentario.id}>
                    <Text style={styles.tituloComentario}>{comentario.login}</Text>
                    <Text>{comentario.comment}</Text>
                </View>
            )}
            <View style={styles.novoComentario}>
                <Image style={styles.userStyle} source={userImg}/>
                <TextInput style={styles.input}
                    placeholder="Adicione um comentário..."
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

  comentario: {
    flexDirection: 'row'
  },
  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5
  },
  novoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8
  },
  icone: {
    width: 30,
    height: 30
  },
  userStyle: {
    borderRadius: 200,
    aspectRatio: 1,
    width: 20,
    height: 20
  }

});
