import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// import { RootStackScreen } from '@/navigation';
import { StoreProvider, initStore } from '@/models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'mst-persist';
import DrawerNavigator from '@/navigation/DrawerNavigator';
import RNBootSplash from 'react-native-bootsplash';
RNBootSplash.hide({ fade: true }); // fade

const store = initStore();

persist('@State_user', store, {
  storage: AsyncStorage,
  jsonify: true,
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={store}>
        <NavigationContainer>
          {/* <RootStackScreen /> */}
          <DrawerNavigator />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
