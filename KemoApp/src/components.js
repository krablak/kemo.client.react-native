import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  ListView
} from 'react-native';

export class NickTextInput extends Component {
  render() {
    const { value, onChange, placeholder } = this.props
    return (
      <TextInput        
        style={{height: 40, borderColor: '#eeeeee', borderWidth: 1}}
        onChangeText={(text)=>{onChange(text)}}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}

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



export class Messages extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("ANAL XXXXXX")
    const {dataSource} = this.props
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}



export class MessageTextInput extends Component {

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

export class SendButton extends Component {
  _onSend(){
    console.log("Anal");
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onSend}>
        <View>
          <Text>Send</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
