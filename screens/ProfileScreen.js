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
        title: 'User Profile',
    };
    render() {
        return (
            <View style={styles.container}>
                      <View style={styles.header}></View>
                      <Image style={styles.profilepic} source={require('../assets/images/profileicon.png')}/>
                      <View style={styles.body}>
                        <View style={styles.bodyContent}>
                          <Text style={styles.username}>Username</Text>

//                          <TouchableOpacity style={styles.buttonContainer}>
//                            <Text>Opcion 1</Text>
//                          </TouchableOpacity>
//                          <TouchableOpacity style={styles.buttonContainer}>
//                            <Text>Opcion 2</Text>
//                          </TouchableOpacity>
                        </View>
                    </View>
            </View>
//          <View style={styles.container}>
//                //header
//                <View style = {styles.header}>
//                    <Image style = {styles.headerBackgroundImage} source={require('../assets/images/backgroundpic.png')}>
//                         <View style = {styles.profilepicWrap}>
//                                <Image style = {styles.profilepic} source = {require('../assets/images/profileicon.png')}/>
//                         </View>
//
//                         <Text style = {styles.username}>Username</Text>
//                    </Image>
//                </View>
//
//                //bar
//                <View style = {styles.bar}>
//                    <View style = {[styles.barItem, styles.barseparator]}>
//                         <Text style={styles.barTop}>Liked Polls</Text>
//                            //<Text style={styles.barBottom}> Liked Polls </Text>
//                    </View>
//                </View>
//
//          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 15,
    },
    body: {
        marginTop: 40,
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
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //padding: 20,
        backgroundColor: '#FFF',
        height: 200,
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 16,
    },
    profilepic: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 63,
        borderColor: 'white',
        borderWidth: 4,
        marginBottom: 10,
        position: 'absolute',
        marginTop: 130
    },
    username: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: "600",
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