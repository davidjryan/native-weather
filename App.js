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
      tempurature: 0,
      weather: '',
    }
  }
  
  componentDidMount() {
    this.handleUpdateLocation('San Francisco');
  }

  handleUpdateLocation =  async city => {
    if (!city) return;

    this.setState({loading: true}), async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, tempurature } = await

        fetchWeather(
          locationId,
        );

        this.setState({
          loading: flase,
          error: false,
          location,
          weather,
          tempurature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        })
      }
    }
  }

  render() {
    const { location, loading, error, weather, tempurature } = this.state;
    const { largeText, smallText, textStyle, textInput, imageContainer, image, detailsContainer, container } = styles;

    return (
      <KeyboardAvoidingView style={container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={imageContainer}
          imageStyle={image}
        >
          <View style={detailsContainer}>
            <ActivityIndicator animating={loading} />
            
            {!loading && (
              <View>
                {error && (
                  <Text style={[smallText, textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text style={[largeText, textStyle]}>{location}</Text>
                    <Text style={[largeText, textStyle]}>{weather}</Text>
                    <Text style={[largeText, textStyle]}>{`${Math.round(tempurature)}˚`}</Text>
                  </View>
                )}
                <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation} />
              </View>
            )}
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
