import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card } from 'react-native-elements';
import { SPAIMAGES } from '../shared/spaImages';
import { SPECIALS } from '../shared/specials';
import { SPONSORS } from '../shared/sponsors';

function RenderSpaItem({spaItem}) {

  if (spaItem) {
      return (
          <Card
              featuredTitle={spaItem.name}
              image={require('../assets/sparobe.jpg')}
          >
              <Text style={{margin: 10}}>
                  {spaItem.description}
              </Text>
          </Card>
      );
  }
  return <View />;
}

function RenderSponsorItem({sponsorItem}) {

  if (sponsorItem) {
    return (
      <Card
          featuredTitle={sponsorItem.name}
          image={require('../assets/lotion.jpg')}
      >
          <Text style={{margin: 10}}>
              {sponsorItem.description}
          </Text>
      </Card>
    );
  }
  return <View />;
}
    

function RenderSpecialItem({specialItem}) {

  if (specialItem) {
    return (
      <Card
          featuredTitle={specialItem.name}
          image={require('../assets/stonesonback.jpg')}
      >
          <Text style={{margin: 10}}>
              {specialItem.description}
          </Text>
      </Card>
    );
  }
  return <View />;
}


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
}
  constructor(props) {
    super(props);
    this.state = {
      spaImages: SPAIMAGES,
      sponsors: SPONSORS,
      specials: SPECIALS
    };
  }

  render() {
    const renderSpaImages = this.state.spaImages.filter(spaItem => spaItem.id==0)[0];
    const renderSponsors = this.state.sponsors.filter(sponsorItem => sponsorItem.id==0)[0]; 
    const renderSpecials = this.state.specials.filter(specialItem => specialItem.id==0)[0];    
   
    return ( 
      <View>
        <RenderSpaItem 
          spaItem={renderSpaImages}
        />
        <RenderSponsorItem
        sponsorItem={renderSponsors}
        />

        <RenderSpecialItem
        specialItem={renderSpecials}
        />        

      </View>
    );
  }
}
  


// class Home extends Component {

//   static navigationOptions = {
//     title: 'Home'
//   };

//   render() {
//     return (
//       <Animated.ScrollView style={{transform: [{scale: this.state.scaleValue}]}}>
//         <RenderItem
//           item={this.props.spaImages.spaImages.filter(spaImage => spaImage.featured)[0]}
          
//       />
//       <RenderItem
//           item={this.props.specials.specials.filter(special => special.featured)[0]}
          
//       />
//       <RenderItem
//           item={this.props.sponsors.sponsors.filter(sponsor => sponsor.featured)[0]}
          
//       />
//       </Animated.ScrollView>
//     );
//   }
// }

export default Home;
