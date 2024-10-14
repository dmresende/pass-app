import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState({ email: false, password: false });

  const handleLogin = async () => {
    const [emailStorage, passwordStorage] = await Promise.all([
      AsyncStorage.getItem('email'),
      AsyncStorage.getItem('password')
    ]);

    try {
      let invalidFields = { email: false, password: false };

      if (!email || email !== emailStorage)
        invalidFields.email = true;

      if (!password || password !== passwordStorage)
        invalidFields.password = true;

      setInvalidFields(invalidFields);

      if (invalidFields.email || invalidFields.password) {
        Toast.show({
          type: 'error',
          text1: 'Falha no login',
          text2: 'Por favor, verifique suas credenciais.',
        });
        return;
      }

      console.log('🚀Email: ', email, '💄 Password: ', password);

      if (email == emailStorage && password == passwordStorage) {
        router.push('/home');
        Toast.show({
          type: 'success',
          text1: 'Login efetuado com sucesso!',
          text2: 'Bem-vindo ao aplicativo!',
        });
      } else
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Algo deu errado ao tentar fazer login.',
        });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <View className="w-full mb-8">
        <Image
          source={require('../../../assets/images/icon.png')}
          className="w-32 h-32 self-center"
          resizeMode="contain"
        />
      </View>
      <TextInput
        className={`w-full h-12 border rounded-md mb-4 px-4 ${invalidFields.email ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setInvalidFields({ ...invalidFields, email: false });
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className={`w-full h-12 border rounded-md mb-6 px-4 ${invalidFields.password ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setInvalidFields({ ...invalidFields, password: false });
        }}
        secureTextEntry
      />
      <TouchableOpacity
        className="w-full bg-blue-500 rounded-md py-3"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold">
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-full mt-4"
        onPress={() => router.push('/singUp')}
      >
        <Text className="text-black text-center">
          Cadastre-se
        </Text>
      </TouchableOpacity>
      <View className="absolute bottom-0 w-full items-center pb-4">
        {/* To-DO: Implementar o logo da aplicação */}
        {/*
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-40 h-20"
          resizeMode="contain"
        /> */}
      </View>
      <Toast />
    </View>
  );
};

export default LoginScreen;
