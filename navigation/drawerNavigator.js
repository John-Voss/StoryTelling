import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/profile';
import StackNavigator from './stackNavigator';
import LogOut from '../screens/logOut';

const Drawer = createDrawerNavigator()
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={StackNavigator} options={{unmontOnBlur: true}}/>
        <Drawer.Screen name='Profile' component={Profile} options={{unmontOnBlur: true}}/>
        <Drawer.Screen name='Log Out' component={LogOut} options={{unmontOnBlur: true}}/>
    </Drawer.Navigator>
  );
}