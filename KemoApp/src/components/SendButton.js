import React,  { Component, PropTypes } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

export class SendButton extends Component {
 render(){
   return (
      <TouchableHighlight onPress={this._onSend}>
        <View>
          <Text>Send</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

SendButton.propTypes = {}
SendButton.defaultProps = {}

export default SendButton