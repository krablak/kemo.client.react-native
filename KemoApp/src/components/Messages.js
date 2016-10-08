import React,  { Component, PropTypes } from 'react'
import { View, TextInput, Text, ListView } from 'react-native'

export class Messages extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const {dataSource,style} = this.props
    return (   
      <ListView
        dataSource={dataSource}
        style={style}
        renderRow={(rowData) => {
          return (
            <View>
              <Text style={{}}>{rowData}</Text>
            </View>
          )
        }}        
      />
    )
  }

}

export default Messages