import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';

import Comments from '../Components/Comment'

import s2 from '../assets/s2.png'
import s2Checked from '../assets/s2-checked.png'
import msgImg  from '../assets/message.png'
import sendUp from '../assets/sendUp.png'

const width = Dimensions.get('screen').width;

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likedState: false,
      likersState: 0,
      valorComentario: '',
    }
  }

  carregaIcone() {
    if ( this.state.likedState == true ){
      return s2Checked
    } else {
      return s2
    }
  };
  
  exibeLikes() {

    const likes = this.state.likersState;

    if(likes <= 0 )
      return;

    return (
      <Text style={styles.likes}>
        {likes} {likes > 1 ? 'curtidas' : 'curtida'}
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

    const likers = this.state.likersState ;

    if(this.state.likedState == false ) {
      
      let valLikers = likers + 1 ; 
      
      this.setState({
        likedState: true,
        likersState: valLikers
      })

    } else {
      
      let valLikers = likers - 1; 
      
      this.setState({
        likedState: false,
        likersState: valLikers
      })
    }
  }
  
  componentDidMount() {
    this.setState({
      likersState: this.props.post.likers
    })
  }


  render() {
    const { post, user } = this.props;
    
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.like.bind(this)}>
              <Image style={styles.botaoDeLike}
                  source={this.carregaIcone()} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.msgImg}
                  source={msgImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com')}>
              <Image style={styles.sendUp}
                  source={sendUp} />
            </TouchableOpacity>

          </View>
        
          {this.exibeLikes()}
          {this.exibeLegenda(post)}

          <Comments comentarios={post.comments} user={user} /> 

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
  },

  msgImg: {
    width: 50,
    height: 50,
    marginLeft: 5,
    bottom: 5
  },
  
  sendUp: {
    width: 50,
    height: 50,
    left: -4,
    bottom: 5
  }
  

});
