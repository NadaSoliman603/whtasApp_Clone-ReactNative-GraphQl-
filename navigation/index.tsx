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
import TabOneScreen from '../screens/ChatsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainTabNavigator from './MainTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { Route } from 'react-native-tab-view';

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
          headerShadowVisible: false,
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

      <Stack.Screen
        component={ChatRoomScreen}
        name="ChatRoom"
        options={({route})=>({
            title :route.params?.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              {console.log()}
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
      })}
      />
    </Stack.Navigator>
  );
}
