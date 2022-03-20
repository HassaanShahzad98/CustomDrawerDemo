import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomInsideDrawer from './CustomInsideDrawer/CustomInsideDrawer';
import CustomFooter from './CustomFooter/CustomFooter';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
     <CustomInsideDrawer/>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <CustomFooter/>
    </View>
  );
};

export default CustomDrawer;
