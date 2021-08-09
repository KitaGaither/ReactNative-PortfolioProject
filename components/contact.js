import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact'
  };
  
  render() {
    return(
      <ScrollView>
        <ScrollView>

          <Card 
          title="Contact Information"
          wrapperStyle={{margin: 20}}
          >
          <Text style={{textAlign: 'center'}}>123 Relaxation Way</Text>
          <Text style={{textAlign: 'center'}}>Nashville, TN 37086</Text>
          <Text style={{textAlign: 'center', marginBottom: 10}}>U.S.A.</Text>

          <Text style={{textAlign: 'center'}}>Phone: 1-404-777-9311</Text>

          <Text style={{textAlign: 'center'}}>Email: relaxspa.com</Text>

          
          </Card>
          </ScrollView>
      </ScrollView>
    );
  }
}

export default Contact;
