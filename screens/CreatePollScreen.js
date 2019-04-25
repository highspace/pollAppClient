import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  WebBrowser
} from 'expo';

import {
  MonoText
} from '../components/StyledText';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Poll = t.struct({
  question: t.String,
  choices: t.Number
  // choices: t.String[this.choiceCount],
  // finishDate: t.Date
});

const options = {
  fields: {
    question: {
      // onChangeText: this.setState({title: text}),
      error: 'Please enter your poll question.'
    },
    choices: {
      error: 'Please select an appropriate number of choices.'
    }
  }
}

export default class CreatePollScreen extends React.Component {
  static navigationOptions = {
    //header: null,
    title: 'CreatePoll',
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      creator_id: "",
      choices: "",
      expiration_date: "",
    }
};

onPress = () => {
  const value = this._form.getValue();
  console.log('value: ', value);
  this.postPoll();
};

  async postPoll() {
    var data = {
      creator_id: "Tester",
      title: this.state.title,
      choices: ["1", "2"],
      expiration_date: null
    };

    try {
      let response = await fetch(
        "https://pollarity18.herokuapp.com/polls",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert("Poll created!");
    }
  } catch (errors) {

    alert(errors);
    } 
};

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Text> Create a Poll </Text> */}
        <Form ref={c => this._form = c} type={Poll} options={options}/>
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    padding: 10,
    backgroundColor: '#ffffff',
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
        shadowOffset: {
          height: -3
        },
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
