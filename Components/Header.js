import React, { useState, Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import titleImage from '../assets/title_sm.png'
import cameraImg from '../assets/camera.png'
import homeImg from '../assets/home.png'
import aboutImg from '../assets/about.png'
import logoutImg from '../assets/power.png'


class Header extends Component {

    constructor(){
        super();
        this.GoHome = this.GoHome.bind(this);
        this.GoAbout = this.GoAbout.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }

    CameraStart() {
        return alert('Camera Started')
    }
    
    GoHome(){
        this.props.props.navigation.navigate('Post')
    }
    
    GoAbout(){
        this.props.props.navigation.navigate('About')
    }
    
    LogOut(){
        this.props.props.navigation.navigate(
            'Login',{ 
              user: '', 
              pass: ''
        })
    }
    
       
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.camera} source={cameraImg}/>
                </TouchableOpacity>
                <Image style={styles.image} source={titleImage}/>
                <TouchableOpacity onPress={this.GoHome}>
                    <Image style={styles.home} source={homeImg}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.GoAbout}>
                    <Image style={styles.about} source={aboutImg}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.LogOut}>
                    <Image style={styles.logout} source={logoutImg}/>
                </TouchableOpacity>  
            </View>
        );
    }
}

export default Header ;

const styles = StyleSheet.create({

    container: {
        paddingTop: 27,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },

    image: {
        width: 180,
        height: 25,
        marginTop: 12,
        marginRight: 40
    },

    camera: { 
        width: 35,
        height: 35,
        padding: 5,
        marginRight: 15,
        marginTop: 10
    },

    home:{
        marginTop: 10,
        width: 35,
        height: 35,
        marginRight: 10
    },

    about: {
        marginTop: 12,
        width: 30,
        height: 30,
        marginRight:5
    },

    logout: {
        width: 30,
        height: 30,
        marginTop: 11,
        marginLeft: 4
    }
 
});
