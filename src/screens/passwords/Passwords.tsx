import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { PasswordItem } from '@/src/components/PasswordItem';
import { useStorage } from '@/src/hooks/useStorage';

export default function PasswordScreen() {
    const [listPasswords, setListPasswords] = useState([]);
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        loadPasswords();
    }, []);

    async function loadPasswords() {
        try {
            const passwords = await getItem();
            setListPasswords(passwords);
        } catch (error) {
            console.error("Erro ao carregar senhas:", error);
            // TODO: Adicionar tratamento de erro adequado
        }
    }

    async function handleDeletePassword(id: string) {
        try {
            const passwords = await removeItem(id);
            setListPasswords(passwords);
        } catch (error) {
            console.error("Erro ao deletar senha:", error);
            // TODO: Adicionar tratamento de erro adequado
        }
    }

    return (
        <View className="flex-1 bg-gray-50">
            <View className="bg-indigo-600 pt-12 pb-4 px-4 items-center justify-center">
                <Text className="text-2xl font-bold text-white">Minhas senhas</Text>
            </View>
            <ScrollView className="flex-1 p-4">
                {listPasswords.length > 0 ? (
                    <PasswordItem
                        data={listPasswords}
                        removePassword={handleDeletePassword}
                    />
                ) : (
                    <View className="flex-1 items-center justify-center py-12">
                        <Image
                            className="w-32 h-32 mb-6 opacity-50"
                        />
                        <Text className="text-lg text-gray-600 dark:text-gray-400">Nenhuma senha salva</Text>
                    </View>
                )}
            </ScrollView>
            {/* <Link href="/home" asChild>
                <TouchableOpacity className="bg-indigo-600 m-4 p-4 rounded-xl items-center shadow-md">
                    <Text className="text-white text-lg font-semibold">Voltar para Home</Text>
                </TouchableOpacity>
            </Link> */}
        </View>
    );
}
