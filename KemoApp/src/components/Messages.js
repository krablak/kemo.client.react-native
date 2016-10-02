import React,  { Component, PropTypes } from 'react'
import { View, TextInput, Text, ListView } from 'react-native'

export class Messages extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const {dataSource} = this.props
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }

}

export default Messages