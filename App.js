import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeAlpha } from './src/theme/Themes';
import BottomTab from './src/routes/BottomTab';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='transparent'
        barStyle={'light-content'}
        translucent />
        <BottomTab />
    </NavigationContainer>
  );
}


