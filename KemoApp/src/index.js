import React, {Component} from 'react';
import {TextInput,AppRegistry, StyleSheet,Text,View} from 'react-native';
import {createStore as initialCreateStore, compose } from 'redux';
import { Provider } from 'react-redux';
import {Sample, NickTextInput, KeyTextInput, Messages, MessageTextInput, SendButton} from "./components.js";
import {RECV, NICK_CHANGED, KEY_CHANGED, SEND} from "./actions.js";

export let createStore = initialCreateStore;

// Application initial state
const initialState = {
  key: "key",
  nick: "anal",
  messages: []
}

// Global reducer updating state for given action
function reducer(state = initialState, action) {
  switch (action.type) {
    case RECV.type:
      console.log(action.message);
      return Object.assign({}, state, {messages: state.messages.concat(action.message)});
    case NICK_CHANGED.type:
        return Object.assign({}, state, {nick:action.nick});
    case KEY_CHANGED.type:
        return Object.assign({}, state, {key:action.key});
    case SEND.type:
        console.log("XXXXXXXXXXXXXXXXXX");
        for(message in state.messages){
          console.log("XX: " + state.messages[message]);
        }
        return Object.assign({}, state, {messages: state.messages.concat(action.message)});
    default:
      return state
  }
}

// Action store
const store = createStore(reducer);

// Dispatch action
store.dispatch(RECV.create("Hello 0!"))
store.dispatch(RECV.create("Hello 1!"))
store.dispatch(RECV.create("Hello 2!"))

export class KemoApp extends Component {

  render() {
    return (
        <Provider store={store}>
          <View>
            <Text>d</Text>
            <Text>store: {store.getState().key}</Text>
            <Text>store: {store.getState().nick}</Text>
            <NickTextInput placeholder="💩" onChange={(nick)=>store.dispatch(NICK_CHANGED.create(nick))}/>
            <KeyTextInput placeholder="default" onChange={(key)=>store.dispatch(KEY_CHANGED.create(key))}/>
            <Messages messages={store.getState().messages}/>
            <MessageTextInput onSend={(message)=>store.dispatch(SEND.create(message))}/>
            <SendButton/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
