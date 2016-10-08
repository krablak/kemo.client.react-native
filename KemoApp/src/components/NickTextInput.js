import React,  { Component, PropTypes } from 'react'
import { View, TextInput, } from 'react-native'

class NickTextInput extends Component {
  render() {
    const { value, onChange, placeholder,style } = this.props
    return (
      <TextInput
        style={style}
        onChangeText={(text)=>{onChange(text)}}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

NickTextInput.propTypes = {
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,  
}

export default NickTextInput