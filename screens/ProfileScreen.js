import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        //header: null,
        title: 'User Profile',
    };
    render() {
        return (
          <ScrollView style={styles.container}>
              //<View style = {styles.container}>
                //<Text> User Profile </Text>

                //header
                <Image style = {styles.headerBackgroundImage} source={require('../assets/images/backgroundpic.png')}>
                    <View style = {styles.header}>
                        <View style = {styles.profilepicWrap}>
                            <Image style = {styles.profilepic} source = {require('../assets/images/profileicon.png')} />

                        </View>

                        <Text style = {styles.username}>Username Here</Text>

                    </View>
                </Image>



              //</View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerBackgroundImage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 16,
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 4,
    },
    username: {
        marginTop: 20,
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    }

});