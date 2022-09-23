import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/profile';
import TabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator()
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabNavigator}/>
        <Drawer.Screen name='Profile' component={Profile}/>
    </Drawer.Navigator>
  );
}