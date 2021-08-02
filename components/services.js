import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import sparobe from '../assets/sparobe.jpg';
import footbath from '../assets/footbath.jpg';
import lotion from '../assets/lotion.jpg';





class Services extends Component {
    static navigationOptions = {
        title: 'Services'
    }
    render() {
        return (
            
            <View
                style={styles.container}
            >
                <Text
                    style={styles.text}
                >Gold Package</Text>
                <Image 
                    source={sparobe}
                    alt="pic of lotion and towel"
                    style={styles.logo}
                />

                <Text
                    style={styles.text}
                >Silver Package</Text>
                <Image 
                    source={footbath}
                    alt="pic of lotion and towel"
                    style={styles.logo}
                />

                <Text
                    style={styles.text}
                >Bronze Package</Text>
                <Image 
                    source={lotion}
                    alt="pic of lotion and towel"
                    style={styles.logo}
                />

            </View>
          );
      }
}
        
const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 180,
      resizeMode: "contain",
      borderColor: "#000080",
      borderWidth: 5,
    },
    text: {
      color: "rgb(218,112,214)", 
      fontWeight: "bold", 
    },
  });
        


export default Services;