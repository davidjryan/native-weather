import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationId, fetchWeather } from './utils/api';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
    }
  }
  
  componentDidMount() {
    this.handleUpdateLocation('Denver');
  }

  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({loading: true}, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        })
      }
    })
  }

  renderContent() {
    const { error } = this.state;
    const { largeText, smallText, textStyle } = styles;

    return (
      <View>
        {error && <Text style={[smallText, textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>}
        {!error && this.renderInfo()}
        <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation} />
      </View>

    )
  }

  renderInfo() {
    const { location, weather, temperature } = this.state;
    const { largeText, smallText, textStyle } = styles;

    return (
      <View>
        <Text style={[largeText, textStyle]}>{location}</Text>
        <Text style={[smallText, textStyle]}>{weather}</Text>
        <Text style={[smallText, textStyle]}>{`${Math.round(temperature)}˚`}</Text>
      </View>
    );
  }

  render() {
    const { location, loading, error, weather, temperature } = this.state;
    const { textInput, imageContainer, image, detailsContainer, container } = styles;

    return (
      <KeyboardAvoidingView style={container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={imageContainer}
          imageStyle={image}
        >
          <View style={detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />
            {!loading && this.renderContent()}
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
