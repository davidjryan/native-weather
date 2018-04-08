import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform ,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

export default class App extends Component {

  render() {
    const { largeText, smallText, textStyle, textInput } = styles;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[largeText, textStyle]}>San Francisco</Text>
        <Text style={[smallText, textStyle]}>Light Cloud</Text>
        <Text style={[smallText, textStyle]}>24˚</Text>
        <TextInput
          autoCorrect={false}
          placeholder="Search any city"
          placeholderTextColor="white"
          style={textInput}
          clearButtonMode="always"   
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textStyle: {
		textAlign: "center",
		fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
	},
	largeText: {
		fontSize: 44,
	},
	smallText: {
		fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  }
});
