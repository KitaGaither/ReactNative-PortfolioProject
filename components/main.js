import React, { Component, Button } from 'react';
import Home from '../components/home';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#000080',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


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
          },
          headerLeft: <Icon
              name='address-card-o'
              type='font-awesome'
              iconStyle={styles.stackIcon}
          />
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
          },
          headerLeft: <Icon
                name='user-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                />
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
            },
            headerLeft: <Icon
              name='bath'
              type='font-awesome'
              iconStyle={styles.stackIcon}         
            />
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
            },
            headerLeft: <Icon
              name='bars'
              type='font-awesome'
              iconStyle={styles.stackIcon}  
            />
            
        }
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('..//assets/logo.jpg')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Relaxation Spa</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
  );

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                )
            }
        },
        Services: {
            screen: ServicesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='bath'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='user-circle'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card-o'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#91BFF1',
        contentComponent: CustomDrawerContentComponent
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