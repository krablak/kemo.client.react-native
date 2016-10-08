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
  key: "default",
  nick: "💩",
  messages: [],
  ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
}

initialState.ds = initialState.ds.cloneWithRows(["[💩] Wow!","[💩] Nice!","[💩] Love it!","[🐍] Dude!"])

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
            behavior="padding"
            keyboardVerticalOffset={0}
            style={{flex: 1, flexDirection: 'column', paddingTop:30, paddingBottom:30}}
            >
          <View style={{height: 45, paddingTop: 5}}>
            <NickTextInput value={store.getState().nick} placeholder="💩" onChange={(nick)=>store.dispatch(NICK_CHANGED.create(nick))} style={styles.field}/>
          </View>
          <View style={{height: 45, paddingTop: 5}}>
            <KeyTextInput value={store.getState().key} placeholder="Place your secret key here..." onChange={(key)=>store.dispatch(KEY_CHANGED.create(key))} style={styles.field}/>
          </View>
          <View style={{flex: 6, paddingTop: 5, paddingBottom: 5}}>
            <Messages dataSource={store.getState().ds} style={styles.messages}/>
          </View>
          <View style={{height: 60, paddingTop: 5,paddingBottom: 15}}>
            <MessageTextInput onSend={(message)=>store.dispatch(SEND.create(message))} style={styles.field}/>          
          </View>        
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    height: 40, 
    borderColor: '#565695', 
    borderWidth: 0.5,
    borderRadius: 4,
    margin: 5,
    padding: 5
  },
  messages: {
    borderColor: '#efefef',
    borderWidth: 0.5,
    borderRadius: 4,
    margin: 5,
    padding: 5
  },
});

