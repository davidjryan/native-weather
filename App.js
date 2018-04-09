import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform ,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather'

export default class App extends Component {

  render() {
    const { largeText, smallText, textStyle, textInput, imageContainer, image, detailsContainer } = styles;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={imageContainer}
          imageStyle={image}
        >
          <View style={detailsContainer}>
            <Text style={[largeText, textStyle]}>San Francisco</Text>
            <Text style={[smallText, textStyle]}>Light Cloud</Text>
            <Text style={[smallText, textStyle]}>24˚</Text>
            <SearchInput placeholder="Search any city"/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#34495E",
	},
	imageContainer: {
		flex: 1,
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: "cover",
	},
	detailsContainer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "rgba(0,0,0,0.2)",
		paddingHorizontal: 20,
	},
	textStyle: {
		textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: 'white'
	},
	largeText: {
		fontSize: 44,
	},
	smallText: {
		fontSize: 18,
	},
});
