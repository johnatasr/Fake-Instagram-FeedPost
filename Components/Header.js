import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const header = () => (

    <View style={styles.container}>
        <Text style={styles.texto}>InstaFake</Text>
    </View>

)


export default header ;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10, 
        paddingTop: 15,
        paddingBottom: 15
    },

    texto: {
        fontSize: 30,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    }
 
});
