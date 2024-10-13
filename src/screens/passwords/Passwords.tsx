import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { PasswordItem } from '@/src/components/PasswordItem';
import { useStorage } from '@/src/hooks/useStorage';

export default function PasswordScreen() {
    const [listPasswords, setListPasswords] = useState([]);
    const { getItem, removeItem } = useStorage();

    //TODO: Verificar ERRO NO CONSOLE, CHAMADA REPETIDA
    const loadPasswords = useCallback(async () => {
        try {
            const passwords = await getItem();
            setListPasswords(passwords);
            //console.log('Senhas carregadas:', passwords);
        } catch (error) {
            console.error("Erro ao carregar senhas:", error);
            // TODO: Adicionar tratamento de erro adequado
        }
    }, [getItem]);

    useFocusEffect(
        useCallback(() => {
            loadPasswords();
        }, [loadPasswords])
    );

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
        </View>
    );
}
