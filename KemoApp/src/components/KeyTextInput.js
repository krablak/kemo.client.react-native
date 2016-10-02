import React,  { Component, PropTypes } from 'react'
import { View, TextInput, } from 'react-native'

export class KeyTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Place your secret key here...' };
  }
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: '#eeeeee', borderWidth: 1}}
        onChangeText={(text) => {this.setState({text})}}
        value={this.state.text}
      />
    );
  }

}

export default KeyTextInput