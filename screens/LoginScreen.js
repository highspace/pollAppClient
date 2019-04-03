import { Google } from 'expo';
import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };


  async signInWithGoogleAsync() {
    try{
        const result = await Google.logInAsync({
            //androidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId:'945962750945-miqolskevjp8en0ked5v7ok6p14jathu.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (result.type == 'success'){
            //----------- DO STUFF ----------
            return result.accessToken;
        } else {
            return {cancelled: true};
        }
    } catch(e) {
        return {error: true};
    }
}


  render() {
    return (
      <ScrollView style={styles.container}>
        <Button onPress = {this.signInWithGoogleAsync.bind(this)} title='Google Sign In'></Button>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});
