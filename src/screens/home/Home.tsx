import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Modal } from "react-native";
import Slider from '@react-native-community/slider';

const generatePassword = (size: number): string => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_-+=^';
    let password = '';
  
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  
    return password;
};

const HomeScreen: React.FC = () => {
    const [size, setSize] = useState<number>(10);
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleGeneratePassword = (): void => {
        const password = generatePassword(size);
        setPasswordValue(password);
        setModalVisible(true);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center p-6">
            <Text className="text-3xl font-bold mb-8 text-gray-800">{size} caracteres</Text>
            
            <View className="w-full mb-8">
                <Slider
                    className="h-12"
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#CBD5E0"
                    minimumTrackTintColor="#4299E1"
                    thumbTintColor="#2B6CB0"
                    value={size}
                    onValueChange={(value: number) => setSize(Math.round(value))}
                />
            </View>
            
            <TouchableOpacity
                className="bg-blue-500 w-full py-4 rounded-lg"
                onPress={handleGeneratePassword}
            >
                <Text className="text-white text-center text-lg font-semibold">Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                    <View className="bg-white p-6 rounded-lg w-4/5">
                        <Text className="text-xl font-bold mb-4">Senha gerada:</Text>
                        <Text className="text-lg mb-6">{passwordValue}</Text>
                        <TouchableOpacity
                            className="bg-blue-500 py-2 rounded-lg"
                            onPress={() => setModalVisible(false)}
                        >
                            <Text className="text-white text-center">Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default HomeScreen;
