import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="login/index" options={{ headerShown: false }} />
            <Stack.Screen name="singUp/index" options={{ title: "Sing-up" }} />
            <Stack.Screen name="home/index" options={{ title: "Home" }} />
            <Stack.Screen name="passwords/index" options={{ title: "Passwords" }} />
        </Stack>
    )
}

export default RootLayout;
