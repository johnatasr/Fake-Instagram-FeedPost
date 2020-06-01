import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Comments from '../Components/Comment'

import s2 from '../assets/s2.png'
import s2Checked from '../assets/s2-checked.png'


const width = Dimensions.get('screen').width;

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: [],
      valorComentario: '',
      
    }
  }

  carregaIcone(liked) {
    if ( liked === 1 ){
      return s2Checked
    } else {
      return s2
    }
  };
  
  exibeLikes(likers) {
    if(likers <= 0 )
      return;

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  exibeLegenda(post) {
    if(post.comment === '')
      return;

    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{post.login}</Text>
        <Text>{post.comment}</Text>
      </View>
    );
  }

  like() {
    const { post } = this.props;

    let novaLista = []
    if(post.liked == 0 ) {
      novaLista = [
        ...post.likers,
        {login_likers: 'UsuarioTeste'}
      ]
    } else {
      novaLista = post.likers.filter(liker => {
        return liker.login !== 'meuUsuario'
      })
    }

    const postAtualizado = {
      ...post,
      liked: !post.liked,
      likers: novaLista
    }

    this.setState({post: postAtualizado})
  }

  render() {
    const { post } = this.props;

    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{uri: post.url_perfil}}
              style={styles.fotoDePerfil}/>
          <Text>{post.login}</Text>
        </View>
        <Image source={{uri: post.url_photo}}
            style={styles.foto}/>

        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image style={styles.botaoDeLike}
                source={this.carregaIcone(post.liked)} />
          </TouchableOpacity>

          {this.exibeLikes(post.likers)}
          {this.exibeLegenda(post)}

          <Comments comentarios={post.comments} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  },
  botaoDeLike: {
    marginBottom: 10,
    height: 40,
    width: 40
  },
  rodape: {
    margin: 10
  },
  likes: {
    fontWeight: 'bold'
  },
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
