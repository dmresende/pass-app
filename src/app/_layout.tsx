import { Stack } from "expo-router"

const RootLayout = () => {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home/index" options={{ title: "Home" }} />
            <Stack.Screen name="alunos/index" options={{ title: "Alunos" }} />
            <Stack.Screen name="alunos/[id]/index" options={{ title: "Aluno" }} />
            <Stack.Screen name="passwords/index" options={{ title: "Passwords" }} />
        </Stack>
    )

}

export default RootLayout;
