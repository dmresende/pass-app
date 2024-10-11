import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

const SingUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        // Implementar lógica de cadastro aqui
        console.log("Cadastro realizado", { email, password });
    };

    const handlerLogin = async () => {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

        console.log('email', email);
        console.log('password', password);



        router.push('/login');
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center px-6">
                <Text className="text-3xl font-bold mb-8">Cadastro</Text>
                <TextInput
                    className="w-full bg-gray-100 rounded-lg py-3 px-4 mb-4"
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    className="w-full bg-gray-100 rounded-lg py-3 px-4 mb-6"
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity
                    className="w-full bg-blue-500 rounded-lg py-3 items-center"
                    onPress={handlerLogin}
                >
                    <Text className="text-white font-bold text-lg">Cadastrar</Text>
                </TouchableOpacity>
                <Text className="mt-6 text-gray-600">
                    Cadastro-se com Google
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SingUpScreen;
