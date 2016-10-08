import React,  { Component, PropTypes } from 'react'
import { View, TextInput, } from 'react-native'

export class KeyTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'default' };
  }
  render() {
    const {style,value} = this.props
    return (
      <TextInput
        style={style}        
        onChangeText={(text) => {this.setState({text})}}
        secureTextEntry={true}
        value={value}
      />
    );
  }

}

export default KeyTextInput