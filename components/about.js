import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { SPECIALS } from '../shared/specials';


function RenderSpecialItem({specialItem}) {

    if (specialItem) {
      return (
          <ScrollView>
        <Card
            featuredTitle='Relaxation Spa'
            image={require('../assets/buddha.jpg')}
        >
            <Text style={{margin: 10, textAlign: 'center', fontWeight: 'bold'}}>
                About Relaxation Spa
            </Text>
        </Card>
        <Text
            style={{textAlign: 'center', padding: 10}}
        >
            Relaxation Spa has been a dream of mine since college. I wanted to create a safe and relaxing space that
            people could come to and let go of their stresses. 
        </Text>
        </ScrollView>

      );
    }
    return <View />;
  }

class About extends Component {

    static navigationOptions = {
        title: 'About'
    }

    constructor(props) {
        super(props);
        this.state = {
          specials: SPECIALS
        };
      }

    render() {
        const renderSpecials = this.state.specials.filter(specialItem => specialItem.id==0)[0]; 
        return (
            <ScrollView>
                <RenderSpecialItem
                    specialItem={renderSpecials}
        />  
            </ScrollView>
        );
    }
}

export default About;
