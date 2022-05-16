
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { MainTabParamList, TabOneParamList } from '../types';
// import { createStackNavigator } from '@react-navigation/stack';
import TabOneScreen from '../screens/TabOneScreen';
import { Fontisto } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 2,
                }
            }}
        >
            <MainTab.Screen
                name="Camera"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
                    tabBarLabel: () => null,

                }}
            />

            <MainTab.Screen
                name="Chats"
                component={TabOneNavigator}
            />

            <MainTab.Screen
                name="Status"
                component={TabOneNavigator}
            />
            <MainTab.Screen
                name="Calls"
                component={TabOneNavigator}
            />
        </MainTab.Navigator>
    )
}


const TabOneStack = createNativeStackNavigator<TabOneParamList>();
function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}
