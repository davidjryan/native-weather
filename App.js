import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform ,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

import SearchInput from './components/SearchInput'

export default class App extends Component {

  render() {
    const { largeText, smallText, textStyle, textInput } = styles;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[largeText, textStyle]}>San Francisco</Text>
        <Text style={[smallText, textStyle]}>Light Cloud</Text>
        <Text style={[smallText, textStyle]}>24˚</Text>
        <SearchInput placeholder="Search any city"/>
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
});
