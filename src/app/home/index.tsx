import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/src/screens/home/Home";
import PasswordsScreen from '@/src/screens/passwords/Passwords';
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de que está importado corretamente


const Tab = createBottomTabNavigator();

const HomeWithTabs = () => {
    return (
        <Tab.Navigator>
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
    );
};

export default HomeWithTabs;
