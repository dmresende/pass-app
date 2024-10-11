import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [camposInvalidos, setCamposInvalidos] = useState({ email: false, senha: false });

  const handleLogin = () => {
    let novosInvalidos = { email: false, senha: false };

    if (email !== 'teste') 
      novosInvalidos.email = true;
    
    if (senha !== '123') 
      novosInvalidos.senha = true;
    
    setCamposInvalidos(novosInvalidos);

    if (email === 'teste' && senha === '123') {
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      router.push('/home');
    } else {
      Alert.alert('Erro', 'Falha no login. Por favor, verifique suas credenciais.');
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
        className={`w-full h-12 border rounded-md mb-4 px-4 ${camposInvalidos.email ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setCamposInvalidos({ ...camposInvalidos, email: false });
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className={`w-full h-12 border rounded-md mb-6 px-4 ${camposInvalidos.senha ? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => {
          setSenha(text);
          setCamposInvalidos({ ...camposInvalidos, senha: false });
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
        <Image
          source={require('../../../assets/images/logo.png')}
          className="w-40 h-20"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
