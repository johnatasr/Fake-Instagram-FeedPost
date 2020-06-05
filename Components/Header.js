import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import titleImage from '../assets/title_sm.png'

const header = () => (

    <View style={styles.container}>
        <Image style={styles.image} source={titleImage}/>
    </View>

)


export default header ;

const styles = StyleSheet.create({

    container: {
        paddingTop: 27,
        paddingLeft: 75,
        
    },

    texto: {
        fontSize: 30,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },

    image: {
        
    }
 
});
