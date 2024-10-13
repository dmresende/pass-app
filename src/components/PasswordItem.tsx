import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type PasswordItemProps = {
  data: { id: string; title: string; password: string }[];
  removePassword: (id: string) => void;
};


export function PasswordItem({ data, removePassword }: PasswordItemProps) {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const togglePasswordVisibility = (index: number) => {
    if (visibleIndexes.includes(index)) {
      setVisibleIndexes(visibleIndexes.filter(i => i !== index)); // Oculta a senha
    } else {
      setVisibleIndexes([...visibleIndexes, index]); // Mostra a senha
    }
  };


  return (
    <View>
      {data.map((item, index) => (
        <View key={item.id} className="bg-white-100 dark:bg-gray-100 p-4 mb-3 rounded-xl shadow-md">
          <Text className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-800">{item.title}</Text>

          {/* Alternar entre senha visível e oculta */}
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-600 dark:text-gray-400">
              {visibleIndexes.includes(index) ? item.password : '********'}
            </Text>
            <TouchableOpacity onPress={() => togglePasswordVisibility(index)}>
              {visibleIndexes.includes(index) ? (
                <Ionicons name="eye-off" color="#6B7280" size={25} /> // Ícone de ocultar senha
              ) : (
                <Ionicons name="eye" color="#6B7280" size={25} /> // Ícone de mostrar senha
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => removePassword(item.id)}
            className="bg-red-500 py-2 px-4 rounded-lg self-end"
          >
            <Ionicons name="trash-outline" className="text-white font-semibold" ></Ionicons>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
