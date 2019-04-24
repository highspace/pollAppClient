import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
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
                                    <Text style= {styles.barTop}>Voted Polls</Text>
                              </View>
                              <View style={[styles.barItem, styles.barseparator]}>
                                    <Text style= {styles.barTop}>Created Polls</Text>
                              </View>
                        </View>
                 </View>
                 <ScrollView>
                    <View style={styles.pollGrid}>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                             <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                             <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                             <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                        <View style={styles.pollWrap}>
                            <Image style = {styles.poll} source={require('../assets/images/AirBB.png')}/>
                        </View>
                    </View>
                 </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        backgroundColor: "#87cefa",
        height: 100,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 4,
    },
    headerBackgroundImage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        backgroundColor: "#87cefa",
        height: 170,
    },
    profilepic: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 63,
        borderColor: "black",
        borderWidth: 4,
        marginBottom: 2,
        position: 'absolute',
        marginTop: 30
    },
    username: {
        fontSize: 25,
        color: "black",
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom: 15,
    },
    bar: {
        borderTopColor: "#87cefa",
        borderTopWidth: 2,
        backgroundColor: "#708090",
        flexDirection: 'row',
    },
    barseparator: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barTop:{
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    },
    barItem:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    pollGrid:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pollWrap:{
        margin: 2,
        height: 120,
        width: (Dimensions.get('window').width/2) -4,
    },
    poll:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }

});