import { Stack } from "expo-router"
import { View } from "react-native";
import Toast from "react-native-toast-message";

const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login/index" options={{ headerShown: false }} />
                <Stack.Screen name="singUp/index" options={{
                    title: "", headerShown: true, headerBackground() {

                        return <View className="w-full h-20 bg-white" />
                    },
                }} />
                <Stack.Screen
                    name="home/index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="passwords/index" options={{
                    title: "", headerBackground() {
                        return <View className="w-full h-20 bg-white" />
                    },
                }} />
            </Stack>
            <Toast position="top" />
        </>
    )
}
export default RootLayout;
