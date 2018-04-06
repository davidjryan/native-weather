import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default class App extends React.Component {

  render() {
    const { largeText, smallText, textStyle } = styles;
    return (
      <View style={styles.container}>
        <Text style={[largeText, textStyle]}>San Francisco</Text>
        <Text style={[smallText, textStyle]}>Light Cloud</Text>
        <Text style={[smallText, textStyle]}>24˚</Text>
      </View>
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
