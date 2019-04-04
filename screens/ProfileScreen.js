import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        //header: null,
        title: 'Profile',
    };
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.header}></View>
                 <Image style={styles.profilepic} source={require('../assets/images/Profile_def.png')}/>
                 <View style={styles.body}>
                        <View style ={styles.bodyContent}>
                            <Text style={styles.username}>User Name</Text>
                        </View>
                        <Text style={styles.username}>User Name</Text>
                        <View style={styles.bar}>
                              <View style={[styles.barItem, styles.barseparator]}>
                                    <Text style= {styles.barTop}>Liked Polls</Text>
                              </View>
                        </View>
                 </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        marginTop: 10,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    headerBackgroundImage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    profilepic: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 63,
        borderColor: "black",
        borderWidth: 4,
        marginBottom: 10,
        position: 'absolute',
        marginTop: 130
    },
    username: {
        fontSize: 25,
        color: "black",
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: 20,
    },
    bar: {
        borderTopColor: "black",
        borderTopWidth: 2,
        backgroundColor: "black",
        flexDirection: 'row',
    },
    barseparator: {
        color: "#00BFFF",
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barTop:{ //liked polls
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    barItem:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }

});