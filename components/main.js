import React, { Component } from 'react';
import Home from './home';
import Services from './services';
import About from './about';
import Contact from './contact';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

// const HomeNavigator = createStackNavigator(
//     {
//         Home: { 
//             screen: Home,
//             navigationOptions: ({navigation}) => ({
//                 headerLeft: <Icon
//                     name='list'
//                     type='font-awesome'
//                     iconStyle={styles.stackIcon}
//                     onPress={() => navigation.toggleDrawer()}
//                 />
//             })
//         },
//     },
//     {
//       initialRouteName: 'Home',
//       defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: '#5637DD',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           color: '#fff',
//         },
//       },
//     }
//   );

  const ServicesNavigator = createStackNavigator(
    {
        Services: { 
            screen: Services,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
    },
    {
      initialRouteName: 'Services',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      },
    }
  );

  const AboutNavigator = createStackNavigator(
    {
        About: { 
            screen: About,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
    },
    {
      initialRouteName: 'About',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      },
    }
  );

  const ContactNavigator = createStackNavigator(
    {
        Contact: { 
            screen: Contact,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
    },
    {
      initialRouteName: 'Contact',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5637DD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
        },
      },
    }
  );

  const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Text>Image Goes Here</Text>
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
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Services: {
            screen: ServicesNavigator,
            navigationOptions: {
                drawerLabel: 'Services',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
  
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
  );
  
  //const AppNavigator = createAppContainer(MainNavigator);
  const AppNavigator = createAppContainer(HomeNavigator);

class Main extends Component {
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
                }}
                >
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  drawerHeader: {
      backgroundColor: '#5637DD',
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

export default Main;