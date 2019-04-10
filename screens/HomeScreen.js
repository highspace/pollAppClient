import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

class ComposeImage extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => alert('This is the compose poll button!')} style={styles.touchable}>
        <Image style={styles.compose} source={require('../assets/images/compose.png')}/>
      </TouchableOpacity>
      </View>
    );
  }
}

class MenuImage extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => alert('This is the menu button!')} style={styles.touchable}>
        <Image style={styles.menu} source={require('../assets/images/hamburgerMenu.png')}/>
      </TouchableOpacity>
      </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header: null,
    title: 'Home Page',
    headerRight: (
      <ComposeImage />
    ),
    headerLeft: (
      <MenuImage />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Home Page </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  compose: {
    marginRight:10,
    alignSelf:'center',
    height:30,
    width:30
  },
  menu: {
    alignSelf:'center',
    height:60,
    width:60
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
