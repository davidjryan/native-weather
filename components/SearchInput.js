import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
  };
  
  state = {
    text: '',
  };
  

  handleChangeText = text => {
    this.setState({ text });
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    const { container, textInput } = styles;
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}   
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

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
}