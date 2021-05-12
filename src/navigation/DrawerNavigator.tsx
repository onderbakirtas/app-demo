import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackScreen } from '.';
import Notifications from '@/views/Notifications';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Content" component={RootStackScreen} />
      <Drawer.Screen name="Bildirimler" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
