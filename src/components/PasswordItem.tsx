import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type PasswordItemProps = {
  data: { id: string; title: string; password: string }[];
  removePassword: (id: string) => void;
};

export function PasswordItem({ data, removePassword }: PasswordItemProps) {
  return (
    <View>
      {data.map((item) => (
        <View key={item.id} className="bg-white dark:bg-gray-800 p-4 mb-3 rounded-xl shadow-md">
          <Text className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100">{item.title}</Text>
          <Text className="text-gray-600 dark:text-gray-400 mb-3">{item.password}</Text>
          <TouchableOpacity
            onPress={() => removePassword(item.id)}
            className="bg-red-500 py-2 px-4 rounded-lg self-end"
          >
            <Text className="text-white font-semibold">Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
