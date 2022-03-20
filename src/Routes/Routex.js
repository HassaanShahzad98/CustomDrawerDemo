import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import CustomDrawerHeader from './CustomDrawer/CustomDrawerHeader/CustomDrawerHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      {/* authstack */}
      {/* appstack */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          //headerShown: false,
          header: ({navigation, route, options}) => (
            <CustomDrawerHeader navigation={navigation} />
          ),
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                style={{alignSelf: 'center'}}
                name={'home'}
                size={15}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                style={{alignSelf: 'center'}}
                name={'notifications'}
                size={15}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
