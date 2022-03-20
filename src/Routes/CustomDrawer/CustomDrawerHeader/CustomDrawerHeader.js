import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomDrawerHeader = ({navigation}) => {
  return (
    <TouchableHighlight 
    style={{width:30,height:30,alignItems:'center'}}
    onPress={() => {navigation.toggleDrawer()}}>
      <MaterialIcons
        style={{alignSelf: 'center'}}
        name={'dehaze'}
        size={25}
      />
    </TouchableHighlight>
  );
};

export default CustomDrawerHeader;
