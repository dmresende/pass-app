import React from 'react';
import { SafeAreaView } from "react-native";
import SingUpScreen from '@/src/screens/singUp/SingUp';

const HomeIndex = () => {
    return (
        <SafeAreaView className="flex-1">
            <SingUpScreen />
        </SafeAreaView>
    );
};

export default HomeIndex;
