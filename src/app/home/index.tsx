import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/src/screens/home/Home";
import PasswordsScreen from '@/src/screens/passwords/Passwords';
import { Ionicons } from "@expo/vector-icons";
import Toast from 'react-native-toast-message';


const Tab = createBottomTabNavigator();

const HomeWithTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarInactiveTintColor: '#888',
                    tabBarActiveTintColor: '#4f46e5',
                }}
            >
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        title: "",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="passwords"
                    component={PasswordsScreen}
                    options={{
                        headerShown: false,
                        title: "",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="lock-closed" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
            <Toast position='top' />
        </>
    );
};

export default HomeWithTabs;
