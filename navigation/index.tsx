import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import TabOneScreen from '../screens/TabOneScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainTabNavigator from './MainTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.tint,
        // shadowOpacity: 0,
        // elevation: 0,
      },
      headerTintColor:Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
    >
      <Stack.Screen name="Root" component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
              backgroundColor: Colors.light.tint,
            }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />

            </View>
          )
        }}
      />
    </Stack.Navigator>
  );
}
