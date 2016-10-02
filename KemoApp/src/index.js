// React support
import React, {Component} from 'react';
import {TextInput,AppRegistry, StyleSheet,Text,View,ListView} from 'react-native';
import {createStore as initialCreateStore, compose } from 'redux';

// UI components
import NickTextInput from "./components/NickTextInput.js"
import KeyTextInput from "./components/KeyTextInput.js"
import MessageTextInput from "./components/MessageTextInput.js"
import Messages from "./components/Messages.js"
import SendButton from "./components/SendButton.js"

// Actions
import {RECV, NICK_CHANGED, KEY_CHANGED, SEND} from "./redux/actions.js";

// Reducers
import {newReducer} from "./redux/reducers.js"

let createStore = initialCreateStore;

// Application initial state
const initialState = {
  key: "key",
  nick: "anal",
  messages: [],
  ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
}

// Action store
const store = createStore(newReducer(initialState));

export class KemoApp extends Component {  
  constructor(props) {
    super(props)
    // Initiate state update and components rendering on store event
    store.subscribe(()=>this.setState(store.getState()))
  }

  render() {
    return (
      <View>
        <Text>d</Text>
        <Text>store: {store.getState().key}</Text>
        <Text>store: {store.getState().nick}</Text>
        <Text>store: {store.getState().messages.length}</Text>
        <NickTextInput placeholder="💩" onChange={(nick)=>store.dispatch(NICK_CHANGED.create(nick))}/>
        <KeyTextInput placeholder="default" onChange={(key)=>store.dispatch(KEY_CHANGED.create(key))}/>
        <Messages dataSource={store.getState().ds}/>            
        <MessageTextInput onSend={(message)=>store.dispatch(SEND.create(message))}/>
        <SendButton/>
      </View>
    )
  }

}

// Dispatch test devel actions
store.dispatch(RECV.create("Hello 0!"))
store.dispatch(RECV.create("Hello 1!"))
store.dispatch(RECV.create("Hello 2!"))

