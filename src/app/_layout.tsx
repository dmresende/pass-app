import React from "react";
import { Stack } from "expo-router"
import { View } from "react-native";
import Toast from "react-native-toast-message";

const RootLayout = () => {
    return (
        <>
            <Toast position="top" autoHide={true} visibilityTime={2000} />
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login/index" options={{ headerShown: false }} />
                <Stack.Screen name="singUp/index" options={{ headerShown: false, }} />
                <Stack.Screen name="home/index" options={{ headerShown: false }} />
                <Stack.Screen name="passwords/index" options={{ headerShown: false, }} />
            </Stack>
        </>
    )
}
export default RootLayout;
