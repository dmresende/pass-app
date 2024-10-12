import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const SingUpScreen = () => {
    // TODO: Implementar validação
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        // TODO: Implementar validação de usuároi e senha;
        //TODO: Implementar armazenamento de usuário e senha;
        if (email === '' || password === '') {
            console.log('if handleSignUp');
            Toast.show({
                type: 'error',
                text1: 'Falha no cadastro',
                text2: 'Por favor, informe os campos corretamente',
                position: 'top'
            })
            return;
        }

        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

        Toast.show({
            type: 'success',
            text1: 'Cadastro realizado com sucesso',
            text2: 'Redirecionando para o login',
            position: 'top'
        })
        setTimeout(() => {
            router.push('/login');
        }, 500);
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
                    onPress={handleSignUp}
                >
                    <Text className="text-white font-bold text-lg">Cadastrar</Text>
                </TouchableOpacity>
                <Text className="mt-6 text-gray-600">
                    Cadastro-se com Google
                </Text>
                <Toast />
            </View>
        </SafeAreaView>
    );
};

export default SingUpScreen;
