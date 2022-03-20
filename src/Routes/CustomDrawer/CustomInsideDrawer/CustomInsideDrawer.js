import { View, Text } from 'react-native'
import React from 'react'

const CustomInsideDrawer = () => {
  return (
    <View 
    style={{
        backgroundColor:'blue',
        width:'100%',

    }}
    >
      <View style={{
          backgroundColor:'green',
          height:80,
          width:80,
          alignSelf:'center',
          justifyContent:'center',
          borderRadius:80,
          marginVertical:20
      }}>
          <Text
          style={{
              alignSelf:'center',
              textAlign:'center'
          }}
          >Logo goes here</Text>
      </View>
    </View>
  )
}

export default CustomInsideDrawer