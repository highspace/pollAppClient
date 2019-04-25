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
  FlatList,
  ActivityIndicator
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header: null,
    title: 'Pollarity',
  };

  state = {
    pollList: [],
    loading: true
  }

  async componentDidMount() {
      fetch('https://pollarity18.herokuapp.com/polls?$limit=100&$skip=0')
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({
            loading: false,
            pollList: responseJson
          })
        })
        .catch(error => console.log(error)) //to catch the errors if any
  }

  renderItem = (data) =>
    <TouchableOpacity style={styles.list}>
    <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'transparent', paddingLeft: 10}}>
        <Image source={require('../assets/images/PollLogo.jpg')} style={styles.pollImage}/>
        <Text style={styles.pollCreator}>@{data.item.creator_id}</Text> 
        </View>
    <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'transparent', paddingLeft: 10}}>
        <Text style={styles.pollContent}>{data.item.title}</Text> 
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
    </TouchableOpacity>
  
  
  render() {
    const { navigate } = this.props.navigation;
    const { pollList, loading } = this.state;

    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
      return (
        <View style={styles.container}>
          <FlatList
            data= {this.state.pollList}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {item=> this.renderItem(item)}
            // keyExtractor={item => item.title.toString()}
          />
          {/* <ScrollView>
            <View style={styles.grid}>
              <View style={styles.gridWrap}>
                <Image style={styles.poll} source={require('../assets/images/AirBB.png')} />

              </View>
              <View style={styles.gridWrap}>
                <Image style={styles.poll} source={require('../assets/images/AirBB.png')} />
              </View>
            </View>
          </ScrollView> */}

          <Button onPress={() => navigate('CreatePoll')}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="#87cefa" />
            }
            iconRight
            title="Add New Poll"
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  pollImage: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100
  },
  pollCreator: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    paddingLeft: 10
  },
  pollContent: {
    fontSize: 50,
    alignSelf: 'center'
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  pollHeader: {  
      color: '#fff',
      fontSize: 24,
  },
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
