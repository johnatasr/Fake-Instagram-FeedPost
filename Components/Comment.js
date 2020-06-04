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

export default class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      comentario: ''
    }
  }

  adicionaComentario() {
    if(this.state.valorComentario === '')
      return;

    const novaLista = [...this.state.foto.comentarios, {
      id: this.state.valorComentario,
      login: 'meuUsuario',
      texto: this.state.valorComentario
    }];

    const fotoAtualizada = {
      ...this.state.foto,
      comentarios: novaLista
    }

    this.setState({foto: fotoAtualizada, valorComentario: ''});
    this.inputComentario.clear();

  }

  render() {
    const comentarios = this.props.comentarios;

    return (
        <View>
            {comentarios.map( comentario =>  
                <View style={styles.comentario} key={comentario.id}>
                    <Text style={styles.tituloComentario}>{comentario.login}</Text>
                    <Text>{comentario.comment}</Text>
                </View>
            )}
            <View style={styles.novoComentario}>
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
  },
  icone: {
    width: 30,
    height: 30
  }
});
