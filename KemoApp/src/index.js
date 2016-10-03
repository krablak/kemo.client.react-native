// React support
import React, {Component} from 'react';
import {TextInput, AppRegistry, StyleSheet, View, ListView, KeyboardAvoidingView} from 'react-native';
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

// Application initial state
const initialState = {
  key: "key",
  nick: "anal",
  messages: [],
  ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
}

// Action store
const store = initialCreateStore(newReducer(initialState));

export class KemoApp extends Component {  
  constructor(props) {
    super(props)
    // Initiate state update and components rendering on store event
    store.subscribe(()=>this.setState(store.getState()))
  }

  render() {
    return (
        <KeyboardAvoidingView 
            behavior="height"
            keyboardVerticalOffset={0}
            style={{flex: 10, flexDirection: 'column', paddingTop:30}}
            >
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <NickTextInput placeholder="💩" onChange={(nick)=>store.dispatch(NICK_CHANGED.create(nick))}/>
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue'}}>
            <KeyTextInput placeholder="Place your secret key here..." onChange={(key)=>store.dispatch(KEY_CHANGED.create(key))}/>
          </View>
          <View style={{flex: 6, flexDirection: "column"}}>
            <Messages dataSource={store.getState().ds}/>
          </View>
          <View style={{flex: 1, backgroundColor: 'red', justifyContent:'flex-end'}}>
            <MessageTextInput onSend={(message)=>store.dispatch(SEND.create(message))}/>          
          </View>        
        </KeyboardAvoidingView>
    )
  }

}

// Dispatch test devel actions
store.dispatch(RECV.create("Hello 0!"))
store.dispatch(RECV.create("Hello 1!"))
store.dispatch(RECV.create("Hello 2!"))

