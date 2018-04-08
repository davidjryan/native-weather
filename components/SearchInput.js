import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends Component {
  render() {
    const { container, textInput } = styles;
    const { placeholder } = this.props;

    return (
      <View style={container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          style={textInput}
          clearButtonMode="always"   
        />      
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		marginTop: 20,
		backgroundColor: "#666",
		marginTop: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
	},
	textInput: {
    flex: 1,
		color: "white",
	},
});