import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export class NickTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Place your user name here...' };
  }

  render() {
      return (
      <TextInput        
        style={{height: 40, borderColor: '#eeeeee', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
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
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Place your secret key here...' };
  }

  render() {
    return (
      <Text>Tady bude asi nejake scroll view s texty</Text>
    );
  }
}

export class MessageTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: '#eeeeee', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export class SendButton extends Component {
  _onSend() {
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
