// Actions
import {RECV, NICK_CHANGED, KEY_CHANGED, SEND} from "./actions.js";

// Global reducer updating state for given action
export function newReducer(inititialState){
  return (state = inititialState, action)=>{
    console.log("REDUCT: " + action.type);
    switch (action.type) {
      case RECV.type:
        console.log(action.message);
        return Object.assign({}, state, {messages: state.messages.concat(action.message)});
      case NICK_CHANGED.type:
          return Object.assign({}, state, {nick:action.nick});
      case KEY_CHANGED.type:
          return Object.assign({}, state, {key:action.key});
      case SEND.type:     
          let newMessages = state.messages.concat(`[${state.nick}] ${action.message}`)
          return Object.assign({}, state, 
              {
                messages: newMessages, 
                ds: state.ds.cloneWithRows(newMessages)
              }
          )
      default:
        return state
    }
  }
}