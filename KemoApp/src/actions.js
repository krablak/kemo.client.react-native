const TYPE_RECV = 'RECV'
const TYPE_SEND = 'TYPE_SEND'
const TYPE_NICK_CHANGED = 'NICK_CHANGED'
const TYPE_KEY_CHANGED = 'KEY_CHANGED'

class Action {
  constructor(type, createFn){
    this.type = type;
    this.create = createFn;
  }
}

export const RECV = new Action(TYPE_RECV, message => {
  return {
    type: TYPE_RECV,
    message: message
  }
});

export const NICK_CHANGED = new Action(TYPE_NICK_CHANGED, nick => {
  return {
    type: TYPE_NICK_CHANGED,
    nick: nick
  }
});

export const KEY_CHANGED = new Action(TYPE_KEY_CHANGED, key => {
  return {
    type: TYPE_KEY_CHANGED,
    key: key
  }
});

export const SEND = new Action(TYPE_SEND, message => {
  return {
    type: TYPE_SEND,
    message: message
  }
});
