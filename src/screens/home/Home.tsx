import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Modal, Image, TextInput } from "react-native";
import Slider from '@react-native-community/slider';
import { router, useRouter } from 'expo-router';
import { useStorage } from '@/src/hooks/useStorage';



const generatePassword = (size: number): string => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_-+=^';
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
};


const ModalPassword = ({ password, handleClose, handleSave }: { password: string; handleClose: () => void; handleSave: (title: string) => void }) => {
    const [title, setTitle] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-zinc-500/90">
            <View className="bg-white p-6 rounded-lg w-4/5">
                <Text className="text-xl font-bold mb-4 text-center">Senha Gerada:</Text>
                <Text className="text-lg mb-6 text-center">{password}</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-lg mb-4"
                    placeholder="Digite um título para a senha"
                    value={title}
                    onChangeText={setTitle}
                />
                <TouchableOpacity
                    className="bg-green-500 py-3 px-4 rounded-lg mb-2"
                    onPress={() => handleSave(title)}
                >
                    <Text className="text-white text-center font-semibold">Salvar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-blue-500 py-2 rounded-lg"
                    onPress={() => router.push('/home')}
                >
                    <Text className="text-white text-center">Fechar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const HomeScreen: React.FC = () => {
    const [size, setSize] = useState<number>(10);
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const router = useRouter();
    const { saveItem, getItem } = useStorage();


    const handleGeneratePassword = (): void => {
        const password = generatePassword(size);
        setPasswordValue(password);
        setModalVisible(true);
    };

    const handleSavePassword = async (title: string) => {
        try {
            const passwords = await getItem();
            const newPassword = { id: Date.now().toString(), title: title || `Senha ${passwords.length + 1}`, password: passwordValue };
            await saveItem([...passwords, newPassword]);
            setModalVisible(false);
        } catch (error) {
            console.error("Erro ao salvar senha:", error);
            // TODO: Adicionar tratamento de erro adequado
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center p-6">
            <Image source={require('../../../assets/images/icon.png')} className="w-32 h-32 mb-8" />
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

            <Modal visible={modalVisible} animationType='fade' transparent={false}>
                <ModalPassword
                    password={passwordValue}
                    handleClose={() => setModalVisible(false)}
                    handleSave={handleSavePassword}
                />
            </Modal>
        </SafeAreaView >
    );
};
{/* <View className="flex-1 justify-center items-center bg-zinc-500/90">
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
</View> */}

export default HomeScreen;
