import React,  { Component, PropTypes } from 'react'
import { View, TextInput, } from 'react-native'

class MessageTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {text:''}
  }
  
  render() {
    const {onSend} = this.props
    return (
      <TextInput
        style={{height: 40, borderColor: '#eeeeee', borderWidth: 1}}
        onSubmitEditing={()=>{
          onSend(this.state.text);
          this.setState({text:''});
        }}
        onChangeText={
          (text) => {
            this.setState({text:text})            
          }
        }
        value={this.state.text}        
      />
    );
  }
}

export default MessageTextInput