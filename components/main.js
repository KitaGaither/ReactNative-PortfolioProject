import React, { Component } from 'react';
import Home from '../components/home';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const ContactNavigator = createStackNavigator(
  {
      Contact: { screen: Contact }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#000080'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const AboutNavigator = createStackNavigator(
  {
      About: { screen: About }
  },
  {
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#000080'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const ServicesNavigator = createStackNavigator(
    {
        Services: { screen: Services },
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000080'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000080'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Services: { screen: ServicesNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#91BFF1'
    }
);

const AppNavigator = createAppContainer(MainNavigator)



class Main extends Component {
    
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;