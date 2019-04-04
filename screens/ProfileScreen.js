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
                //<Text>UserProfile</Text>

                //header
                <Text>
                <Image style = {styles.headerBackgroundImage} source={require('../assets/images/backgroundpic.png')}>
                    <View style = {styles.header}>
                        <View style = {styles.profilepicWrap}>
                            <Image style = {styles.profilepic} source = {require('../assets/images/profileicon.png')}> </Image>

                        </View>

                        <Text style = {styles.username}>Username</Text>

                    </View>
                </Image>

               //bar
                <View style = {styles.bar}>
                    <View style = {[styles.barItem, styles.barseparator]}>
                        <Text style={styles.barTop}>LikedPolls</Text>
                        //<Text style={styles.barBottom}> Liked Polls </Text>
                    </View>
                </View>

              </Text>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 15,
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
    },
    bar: {
        borderTopColor: '#FFF',
        borderTopWidth: 4,
        backgroundColor: '#FFF',
        flexDirection: 'row',
    },
    barseparator: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barTop:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    barItem:{
        flex: 1,
        padding: 18,
        alignItems: 'center',
    }

});