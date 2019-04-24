import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Icon,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header: null,
    title: 'Pollarity',
  };

  render() {
    return (
      <View style={styles.container}>

      <ScrollView>
        <View style={styles.grid}>
            <View style={styles.gridWrap}>
                <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>

            </View>
            <View style={styles.gridWrap}>
                <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
            </View>
         </View>
      </ScrollView>

        <Button
          icon={
              <Icon
                name="arrow-right"
                size={15}
                color="#87cefa"
                //onPress need to go here
              />
            }
            iconRight
            title="Add New Poll"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridWrap:{
    margin: 2,
    height: 150,
    width: (Dimensions.get('window').width),
  },
  poll:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    backgroundColor: "#87cefa",
    height: 35,
  },
  addpoll:{
    marginTop: 5,
    alignSelf: 'center',
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
  }
});
