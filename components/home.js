import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card } from 'react-native-elements';
import { SPAIMAGES } from '../shared/spaImages';
import { SPECIALS } from '../shared/specials';
import { SPONSORS } from '../shared/sponsors';


function RenderItem(props) {
  
  const {item} = props;

  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={{uri: item.image}}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scaleValue: new Animated.Value(0),
      spaImages: SPAIMAGES,
      specials: SPECIALS,
      sponsors: SPONSORS
      
      
    };
  }
  
  animate() {
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }
    ).start();
  }

  componentDidMount() {
    this.animate();
  }
  
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <Animated.ScrollView style={{transform: [{scale: this.state.scaleValue}]}}>
        <RenderItem
          item={this.props.spaImages.spaImages.filter(spaImage => spaImage.featured)[0]}
          
      />
      <RenderItem
          item={this.props.specials.specials.filter(special => special.featured)[0]}
          
      />
      <RenderItem
          item={this.props.sponsors.sponsors.filter(sponsor => sponsor.featured)[0]}
          
      />
      </Animated.ScrollView>
    );
  }
}

export default Home;
