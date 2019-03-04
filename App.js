import React from 'react';
import { Google } from 'expo';
import { Image, Platform, StatusBar, StyleSheet, TouchableHighlight, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      isLoadingComplete: false,
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  
  // Google Sign in handler
  signInWithGoogle = async () => {
    try{
        const result = await Google.logInAsync({
            androidClientId: '945962750945-rept5ka0f9lj9upcq7l0cp5udjv2q25p.apps.googleusercontent.com',
            iosClientId:'945962750945-miqolskevjp8en0ked5v7ok6p14jathu.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (result.type == 'success'){
          //----------- Set the user state ----------
          this.setState({
            isLoadingComplete: true,
            signedIn: true,
            name: result.user.name,
            photoUrl: result.user.photoUrl,
          })
          return result.accessToken;
        } else {
            return {cancelled: true};
        }
    } catch(e) {
        return {error: true};
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {this.state.signedIn ? (
            <AppNavigator />
          ) : (
            <SignIn signInWithGoogle={this.signInWithGoogle} />
          )}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// Call the Google sign in function
const SignIn = props => {
  return(
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.signInWithGoogle()}>
        <Image
          style={styles.button}
          source={require('./assets/images/GoogleSignIn.png')}
        />
      </TouchableHighlight>
    </View>

  )
}

// Go to App
const SignedIn = props => {
  return (
    <View>
      <AppNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 0,   
    marginTop: 100,
  }
});
