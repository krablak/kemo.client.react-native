import React,  { Component, PropTypes } from 'react'
import { View, TextInput, } from 'react-native'

class MessageTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {text:''}
  }
  
  render() {
    const {onSend,style} = this.props
    return (
      <TextInput   
        style={style}
        onSubmitEditing={()=>{
          onSend(this.state.text)
          this.setState({text:''})
        }}
        onChangeText={
          (text) => {
            this.setState({text:text})            
          }
        }
        value={this.state.text}
        clearTextOnFocus={true}
      />
    );
  }
}

export default MessageTextInput